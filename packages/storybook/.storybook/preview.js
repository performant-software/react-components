// @flow

import {
  ArgsTable,
  Description,
  DocsContainer,
  Primary,
  Stories,
  Subtitle,
  Title,
  DocsContext
} from '@storybook/addon-docs';
import React, { useContext, useRef } from 'react';
import ModalContext from '../../semantic-ui/src/context/ModalContext';
import '../../semantic-ui/build/semantic-ui.css';
import PropsTable from '../src/components/PropsTable';

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
  docs: {
    container: ({ children, context }) => {
      const root = useRef();

      return (
        <ModalContext.Provider
          value={root?.current}
        >
          <DocsContainer
            context={context}
          >
            <div
              ref={root}
            >
              { children }
            </div>
          </DocsContainer>
        </ModalContext.Provider>
      )
    }
  },
  options: {
    storySort: {
      order: ['Overview', 'Components']
    }
  }
};
