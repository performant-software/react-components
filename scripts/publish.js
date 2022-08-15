// @flow

import { execSync } from 'child_process';
import fs from 'fs';
import minimist from 'minimist';
import readline from 'readline';
import _ from 'underscore';

const args = minimist(process.argv.slice(2));
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const baseDirectory = process.cwd();
const beta = args.tag === 'beta';

const PUBLISH_CONFIRM = 'PUBLISH';

/**
 * Returns the user input for the passed message.
 *
 * @param message
 *
 * @returns {Promise<unknown>}
 */
const ask = (message) => new Promise((resolve) => rl.question(message, (answer) => resolve(answer)));

/**
 * Reads the file at the passed path and converts it to JSON.
 *
 * @param path
 *
 * @returns {*}
 */
const fileToJSON = (path) => {
  let json;

  try {
    const file = fs.readFileSync(path);
    json = JSON.parse(file);
  } catch (e) {
    json = {};
    console.error(e);
  }

  return json;
};

/**
 * Writes the passed JSON object to a file at the passed path.
 *
 * @param json
 * @param path
 */
const jsonToFile = (json, path) => {
  try {
    const content = JSON.stringify(json, null, 2);
    fs.writeFileSync(path, content);
  } catch (e) {
    console.error(e);
  }
};

/**
 * Returns true if the passed dependency should be updated.
 *
 * @param name
 *
 * @returns {*|boolean}
 */
const isValidDependency = (name) => name.startsWith('@performant-software')
  && name !== '@performant-software/webpack-config';

/**
 * Updates the passed list of dependencies with the passed version.
 *
 * @param dependencies
 * @param version
 *
 * @returns {{}|*}
 */
const updateDependencies = (dependencies, version) => {
  if (!dependencies) {
    return {};
  }

  const newDependencies = { ...dependencies };

  _.each(_.keys(dependencies), (name) => {
    if (isValidDependency(name)) {
      newDependencies[name] = `^${version}`;
    }
  });

  return newDependencies;
};

/**
 * Updates the package.json file with the new version.
 *
 * @param directory
 * @param version
 */
const updateVersion = (directory, version) => {
  // Read the package.json file for the passed directory
  const file = `${baseDirectory}/${directory}/package.json`;
  const packageJson = fileToJSON(file);

  // Update the version and dependency versions.
  packageJson.version = version;
  packageJson.dependencies = updateDependencies(packageJson.dependencies, version);
  packageJson.devDependencies = updateDependencies(packageJson.devDependencies, version);

  // Write the file back to disk
  jsonToFile(packageJson, file);
};

/**
 * Publishes a package for the passed directory.
 *
 * @param directory
 * @param runPublish
 */
const publish = (directory, runPublish) => {
  const commands = [
    `cd ${directory}`,
    'yarn build'
  ];

  if (runPublish) {
    if (beta) {
      commands.push('npm publish --tag beta');
    } else {
      commands.push('npm publish');
    }
  }

  if (runPublish) {
    console.log(`Publishing ${directory}...`);
  } else {
    console.log(`Building ${directory}...`);
  }

  execSync(commands.join(' && '), { stdio: 'inherit' });
};

/**
 * Runs the process.
 */
const run = async () => {
  const { packages, version } = JSON.parse(fs.readFileSync('./react-components.json'));

  const publishPrompt = [
    'You are about to publish a new package to NPM. ',
    `Please type "${PUBLISH_CONFIRM}" to continue. `,
    'Type anything else to build the package and update versions.    '
  ];

  const publishResponse = await ask(publishPrompt.join(''));
  const runPublish = publishResponse === PUBLISH_CONFIRM;

  _.each(packages, (directory) => {
    // Update the package.json version and any dependencies and devDependencies
    updateVersion(directory, version);

    // Build and publish the package
    publish(directory, runPublish);
  });
};

run();
