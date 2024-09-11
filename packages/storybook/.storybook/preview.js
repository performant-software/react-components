// @flow

import { DocsContainer } from '@storybook/addon-docs';
import React, { useRef } from 'react';
import ModalContext from '../../shared/src/context/ModalContext';

// Peripleo styles
import '@peripleo/maplibre/peripleo-maplibre.css';
import '@peripleo/peripleo/default-theme';

// Component package styles
import '../../controlled-vocabulary/dist/style.css';
import '../../core-data/dist/packages/core-data/src/index.css';
import '../../geospatial/dist/style.css';
import '../../semantic-ui/dist/style.css';
import '../../shared/dist/style.css';
import '../../user-defined-fields/dist/style.css';
import '../../visualize/dist/style.css';

// Storybook styles
import './styles/index.css';

// Tailwind styles
import '../src/index.css';

/**
 * If a list of accessibility tags are provided, only run the tests for those specific tags.
 *
 * @see https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#axe-core-tags
 */
let a11y;

if (import.meta.env.A11Y_TAGS) {
  a11y = {
    config: {
      runOnly: {
        type: 'tag',
        values: import.meta.env.A11Y_TAGS.split(',')
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
