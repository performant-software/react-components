# react-components
A library of shared React components.

## Requirements
Node (16.14.x)

## Development

### Installation
```
yarn install
```

### Building
```
cd packages/<package-name> && yarn build
```

### Storybook
Running storybook
```
yarn storybook
```

Building the static site
```
yarn build-storybook
```
## Production

package.json
```json
{
  "name": "my-awesome-project",
  "dependencies": {
    "@performant-software/semantic-components": "^1.0.0"
  }
}
```

MyComponent.js
```javascript
import { ListTable } from '@performant-software/semantic-components';

const MyComponent = (props) => (
  <ListTable
    columns={[]}
  />
);
```

### GitPkg
There may be some scenarios where we want to test out new components within the project that will actually consume it prior to releasing a new version on NPM.

For this we can use [gitpkg](https://gitpkg.vercel.app/) as a proxy to point to our dev branch:

#### Step 1: Update react-components package.json
Update all package.json file to use gitpkg instead of NPM version:

Before:
```json
{
  "dependencies": {
    "@performant-software/shared-components": "^1.0.0"
  }
}
```

After:
```json
{
  "dependencies": {
    "@performant-software/shared-components": "https://gitpkg.now.sh/performant-software/react-components/packages/shared?<branch-name>&scripts.prepare=%26%26%20yarn%20build"
  }
}
```

Run `yarn install` and commit the changes to your branch.

❗Make sure to include the `scripts` parameter in order to build the dependency in your consuming project.

❗Make sure to revert these changes prior to creating an NPM release.

#### Step 2: Update your projects package.json
Update your projects package.json file to use gitpkg instead of the NPM version. You'll also want to add the package's dependencies as dependencies in your project. For example: If your project uses `@performant-software/semantic-components`, you'll also want to add `@performant-software/shared` and `@performant-software/webpack-config` as dependencies to your project temporarily.

Before:
```json
{
  "dependencies": {
    "@performant-software/semantic-components": "^1.0.0"
  }
}
```

After:
```json
{
  "dependencies": {
    "@performant-software/semantic-components": "https://gitpkg.now.sh/performant-software/react-components/packages/semantic-ui?<branch_name>&scripts.prepare=%26%26%20yarn%20build",
    "@performant-software/shared-components": "https://gitpkg.now.sh/performant-software/react-components/packages/shared?<branch_name>&scripts.prepare=%26%26%20yarn%20build",
    "@performant-software/webpack-config": "https://gitpkg.now.sh/performant-software/react-components/packages/webpack?<branch_name>&scripts.prepare=%26%26%20yarn%20build"
  }
}
```

Notice that the gitpkg URLs contain the name of the directory in the GitHub repository, rather than the name of the published NPM package.
