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

## Beta
Sometimes it may be necessary to test your consuming application prior to creating a release. For example, you just added a new component and want to test it out in the application to make sure everything looks and works as expected.

For this we can use NPM's "beta" tags. This will allow the compiled code to be added as a dependency from NPM, but will not map to the "latest" release for production.

Let's say the current version number is "0.5.15". You can update all of the versions in `package.json` to "0.5.16-beta.0" and publish the package(s) to NPM via:

```
npm publish --tag beta
```

Then, in your consuming application, update your dependencies as follows:

```json
{
  "dependencies": {
    "@performant-software/semantic-components": "0.5.16-beta.0",
    "@performant-software/shared-components": "0.5.16-beta.0"
  }
}
```

After all testing has passed, create your release of `0.5.16`. See publishing below.

## Publishing

Each of the versions of the individual packages will be kept in sync. The following steps should be taken when publishing a new version of these packages.

1. Update the `version` attribute in each `package.json`. When determining how to increment the version number, use the following as a guide:
   1. **Major:** `1.2.3 -> 2.0.0` Many breaking changes, new UI library, new package
   2. **Minor:** `1.2.3 -> 1.3.0` API changes, many new components, large bug fixes
   3. **Patch:** `1.2.3 -> 1.2.4` Bug fixes, new components
2. Update the version for the `dependecies` and `devDependencies` in each `package.json`. Each dependency should reflect the newest release.
3. Commit your changes and create a PR into the `master` branch. Wait until your PR is merged to proceed.
4. Create a [release](https://github.com/performant-software/react-components/releases) in GitHub. Be sure to note any breaking changes, new features, and bug fixes
5. Navigate into each package and run `npm publish`.
6. In GitHub update the "next release" label to "<your_release_number>". This will allow us to go back and see exactly which PRs were included in each release.
7. Create a new "next release" label in GitHub.
