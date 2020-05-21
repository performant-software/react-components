// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import TabbedModal from '../../../src/semantic-ui/TabbedModal';

export default {
  title: 'Components/Semantic UI/TabbedModal',
  decorators: [withA11y, withKnobs]
};

export const Default = () => (
  <TabbedModal
    header={text('Header', 'Modal Header')}
    inlineTabs={boolean('Inline tabs', false)}
    open
  >
    <TabbedModal.Tab
      name='Tab 1'
    >
      <div>Tab 1 content</div>
    </TabbedModal.Tab>
    <TabbedModal.Tab
      name='Tab 2'
    >
      <div>Tab 2 content</div>
    </TabbedModal.Tab>
  </TabbedModal>
);
