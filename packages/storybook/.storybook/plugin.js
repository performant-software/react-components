const { namedTypes } = require('ast-types');
const path = require('path');
const docgen = require('react-docgen');
const _ = require('underscore');

const {
  getNameOrValue,
  resolveFunctionDefinitionToReturnValue
} = docgen.utils;

const defaultHandlers = Object.values(docgen.handlers).map(handler => handler);

const parser = (_ref) => {
  const { types } = _ref;

  const actualNameHandler = (program, documentation, path) => {
    /**
     * First we'll attempt to get the name of the component from the export declaration:
     * <br />
     *
     * <code>export default MyComponent;</code>
     *
     * If that returns nothing, we'll use the logic in the babel-plugin-react-docgen plugin.
     */
    const exportNode = program.get('body').find((n) => types.isExportDefaultDeclaration(n));
    let actualName = getIdentifier(exportNode, types);

    if (!actualName) {
      // Function and class declarations need special treatment. The name of the
      // function / class is the displayName
      if (
        namedTypes.ClassDeclaration.check(path.node) ||
        namedTypes.FunctionDeclaration.check(path.node)
      ) {
        actualName = getNameOrValue(path.get('id'));
      } else if (
        namedTypes.ArrowFunctionExpression.check(path.node) ||
        namedTypes.FunctionExpression.check(path.node) ||
        // React.forwardRef
        namedTypes.CallExpression.check(path.node)
      ) {
        if (namedTypes.VariableDeclarator.check(path.parentPath.node)) {
          actualName = getNameOrValue(path.parentPath.get('id'));
        } else if (namedTypes.AssignmentExpression.check(path.parentPath.node)) {
          actualName = getNameOrValue(path.parentPath.get('left'));
        }
      } else if (
        // React.createClass() or createReactClass()
        namedTypes.CallExpression.check(path.parentPath.node) &&
        namedTypes.VariableDeclarator.check(path.parentPath.parentPath.parentPath.node)
      ) {
        actualName = getNameOrValue(path.parentPath.parentPath.parentPath.get('id'));
      }
    }

    documentation.set('actualName', actualName);

    return;

    let displayNamePath;

    // If display name is defined as a getter we get a function expression as
    // value. In that case we try to determine the value from the return
    // statement.
    if (namedTypes.FunctionExpression.check(displayNamePath?.node)) {
      displayNamePath = resolveFunctionDefinitionToReturnValue(displayNamePath);
    }
    if (!displayNamePath || !namedTypes.Literal.check(displayNamePath.node)) {
      return;
    }
    documentation.set('actualName', displayNamePath.node.value);
  }

  return {
    visitor: {
      Program: {
        enter: (path, state) => {
          const { filename } = state;

          if (filename.endsWith('.js') && !filename.endsWith('.stories.js') && !filename.endsWith('.stories.mdx')) {
            const { code } = state.file;
            let results;

            try {
              const program = path.scope.getProgramParent().path;
              const handlers = [...defaultHandlers, actualNameHandler.bind(this, program)];

              results = docgen.parse(code, null, handlers, {
                importer: docgen.importers.makeFsImporter(),
                filename
              });
            } catch (e) {
              return;
            }

            if (!_.isArray(results)) {
              results = [results];
            }

            _.each(results, (result) => {
              const { actualName } = result;

              if (!actualName) {
                return;
              }

              const node = buildObjectExpression(result, types);

              const info = types.expressionStatement(
                types.assignmentExpression(
                  '=',
                  types.memberExpression(
                    types.identifier(actualName), types.identifier('__documentation')
                  ),
                  node
                )
              );

              const program = path.scope.getProgramParent().path;
              const exportPath = program.get('body').find((n) => isExportCurrent(n, actualName, types, filename));

              if (exportPath) {
                exportPath.insertBefore(info);
              } else {
                program.pushContainer('body', info);
              }

              injectGlobal(actualName, path, state, types);
            });
          }
        }
      }
    }
  }
};

const buildObjectExpression = (obj, t) => {
  if (_.isObject(obj)) {
    const children = [];

    for (const key in obj) {
      if (key === 'actualName') continue;
      if (!obj.hasOwnProperty(key) || _.isUndefined(obj[key])) continue;
      children.push(t.objectProperty(t.stringLiteral(key), buildObjectExpression(obj[key], t)));
    }

    return t.objectExpression(children);
  } else if (_.isString(obj)) {
    return t.stringLiteral(obj);
  } else if (_.isBoolean(obj)) {
    return t.booleanLiteral(obj);
  } else if (_.isNumber(obj)) {
    return t.numericLiteral(obj);
  } else if (_.isArray(obj)) {
    var _children = [];
    obj.forEach((val) => {
      _children.push(buildObjectExpression(val, t));
    });
    return t.ArrayExpression(_children);
  } else if (_.isNull(obj)) {
    return t.nullLiteral();
  }
};

const getIdentifier = (path, t) => {
  let identifier;

  if (t.isExportDeclaration(path)) {
    const decl = path.get('declaration');
    identifier = decl.isIdentifier() ? decl.node.name : getComponentFromHoC(decl);
  }

  return identifier;
};

const getComponentFromHoC = (path) => {
  if (path.isCallExpression()) {
    return getComponentFromHoC(path.get('arguments.0'));
  }

  return path.isIdentifier() ? path.node.name : null;
};

const isExportCurrent = (path, exportName, t, filename) => {
  if (t.isExportDefaultDeclaration(path)) {
    const decl = path.get('declaration');
    const identifier = decl.isIdentifier()
      ? decl.node.name
      : getComponentFromHoC(decl, filename);

    if (identifier === exportName) {
      return true;
    }
  }

  if (t.isExportNamedDeclaration(path)) {
    return path.get('specifiers').find(function (sp) {
      return sp.node.exported.name === exportName;
    });
  }

  return false;
};

const injectGlobal = (className, path, state, t) => {
  const program = path.scope.getProgramParent().path;

  if (!state.opts.COLLECTION_NAME) {
    return;
  }

  const globalName = state.opts.COLLECTION_NAME;
  const filePath = relativePath(path.hub.file.opts.filename);
  const globalNode = t.ifStatement(
    t.binaryExpression(
      '!==',
      t.unaryExpression(
        'typeof',
        t.identifier(globalName)
      ), t.stringLiteral('undefined')
    ), t.blockStatement(
      [t.expressionStatement(
        t.assignmentExpression(
          '=',
          t.memberExpression(t.identifier(globalName), t.stringLiteral(filePath), true),
          t.objectExpression([t.objectProperty(t.identifier('name'),
            t.stringLiteral(className)),
            t.objectProperty(
              t.identifier('documentation'),
              t.memberExpression(
                t.identifier(className),
                t.identifier('__documentation')
              )
            ),
            t.objectProperty(t.identifier('path'), t.stringLiteral(filePath)
            )]
          )
        )
      )])
  );

  program.pushContainer('body', globalNode);
};

const relativePath = (filename) => {
  return path.relative('./', path.resolve('./', filename));
};

module.exports = {
  parser
};
