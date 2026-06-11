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
const OTP_PATTERN = /^\d{6}$/;

/**
 * Returns the user input for the passed message.
 *
 * @param message
 *
 * @returns {Promise<unknown>}
 */
const ask = (message) => new Promise((resolve) => rl.question(message, (answer) => resolve(answer)));

/**
 * Prompts for an NPM one-time password until a valid 6-digit code is entered.
 *
 * @returns {Promise<string>}
 */
const askForOTP = async () => {
  let otp;

  while (!otp) {
    const answer = await ask('Enter your NPM one-time password (6 digits). This will be used for all packages, so wait for a new OTP with a fresh time limit: ');
    const trimmed = answer.trim();

    if (OTP_PATTERN.test(trimmed)) {
      otp = trimmed;
    } else {
      console.log('Invalid code. Please enter exactly 6 digits.');
    }
  }

  return otp;
};

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
  packageJson.peerDependencies = updateDependencies(packageJson.peerDependencies, version);
  packageJson.devDependencies = updateDependencies(packageJson.devDependencies, version);

  // Write the file back to disk
  jsonToFile(packageJson, file);
};

/**
 * Builds the package for the passed directory.
 *
 * @param directory
 */
const build = (directory) => {
  console.log('');
  console.log('');
  console.log(`Building ${directory}...`);

  execSync(`cd ${directory} && yarn build`, { stdio: 'inherit' });
};

/**
 * Publishes the package for the passed directory. The version is read from package.json
 * (already set by updateVersion), so no --new-version flag is needed.
 *
 * @param directory
 * @param otp
 */
const publishPackage = (directory, otp) => {
  console.log('');
  console.log('');
  console.log(`Publishing ${directory}...`);

  const command = [
    'npm publish',
    '--access public',
    beta ? '--tag beta' : '',
    `--otp ${otp}`,
    '--registry https://registry.npmjs.org/'
  ].filter(Boolean).join(' ');

  execSync(`cd ${directory} && ${command}`, { stdio: 'inherit' });
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

  // 1. Update versions and build all packages.
  _.each(packages, (directory) => {
    updateVersion(directory, version);
    build(directory);
  });

  // 2. Prompt for OTP and publish each package.
  if (runPublish) {
    const otp = await askForOTP();

    _.each(packages, (directory) => {
      publishPackage(directory, otp);
    });
  }

  rl.close();
};

run();