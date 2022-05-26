// @flow

import React from 'react';
import ModalContext from '../../semantic-ui/src/context/ModalContext';
import '../../semantic-ui/build/semantic-ui.css';

/**
 * If a list of accessibility tags are provided, only run the tests for those specific tags.
 *
 * @see https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#axe-core-tags
 */
let a11y;

if (process.env.A11Y_TAGS) {
  a11y = {
    config: {
      runOnly: {
        type: 'tag',
        values: process.env.A11Y_TAGS.split(',')
      }
    }
  }
}

export const parameters = {
  a11y,
  options: {
    storySort: {
      order: ['Overview', 'Components']
    }
  }
};

export const decorators = [
  (Story) => (
    <ModalContext.Provider
      value={document.getElementById('root')}
    >
      <Story />
    </ModalContext.Provider>
  )
];
