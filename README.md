# react-components
A library of shared React components

## Requirements
Node (14.5)

## Development

### Building
```
npm run build
```

#### Storybook
```
npm run storybook
```

## Usage

### SSH Configuration
Update your SSH config to use your SSH key to access the react-components repository:

```
# ~/.ssh/config

Host react-components
  HostName github.com
  IdentityFile ~/.ssh/id_rsa
```

### Install
```
npm install git+ssh://git@react-components:performant-software/react-components.git --save
```

### Heroku
When deploying to a staging server on Heroku, we'll need to allow Heroku access to the react-components repository in order to install dependencies. This section will describe how to do that.

#### Copy preinstall and postinstall scripts
Copy the `preinstall.sh` and `postinstall.sh` scripts from this repository into your project. It doesn't matter where, but a directory named `scripts` is usually a good idea.

#### Update package.json
In your root level `package.json`, add or append the following to the `scripts` object:
```
"heroku-prebuild": "bash ./scripts/preinstall.sh"
"heroku-postbuild": "bash ./scripts/postinstall.sh"
```
These two scripts will install your SSH key prebuild, then after the dependencies are installed, remove it.

Note: The heroku-prebuild and heroku-postbuild scripts require the NodeJS buildpack. 

You'll want to use the following syntax for defining the `react-components` dependency:

```
"react-components": "github:performant-software/react-components"
```

Note: `yarn` does not seem to work with the above syntax. It is recommended to use `npm`.

#### Generate a deploy key
From your computer, generate a new public/private SSH key pair using the following command and save the key pair somewhere secure.
```
ssh-keygen -t rsa
```

Copy the public key using:
```
pbcopy < my-awesome-project-staging-deploy-key.pub
```

Within the react-components repository on GitHub, go to Settings > Deploy Keys. Add the copied public key for your project. Name it something obvious like "My Awesome Project Staging" so that others will know what it is used for.

#### Add your deploy key to Heroku
Convert the private key from PEM to base64 using the following command and copy the value.
```
cat my-awesome-project-staging-deploy-key | base64
```

In the Heroku dashboard for your app, navigate to the Settings tab. Add a config var with key `REACT_COMPONENTS_SSH_KEY` and paste the value copied from the private deploy key.