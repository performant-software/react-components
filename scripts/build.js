// @flow

import { execSync } from 'child_process';
import fs from 'fs';
import _ from 'underscore';

/**
 * Runs the process.
 */
const run = () => {
  const { packages } = JSON.parse(fs.readFileSync('./react-components.json'));

  _.each(packages, (directory) => {
    console.log('');
    console.log(`Building ${directory}...`);
    console.log('');
    console.log('');

    execSync(`yarn --cwd ${directory} build`, { stdio: 'inherit' });
  });
};

run();
