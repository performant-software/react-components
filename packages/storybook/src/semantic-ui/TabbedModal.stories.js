// @flow

import { TabbedModal } from '@performant-software/semantic-components';
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import {
  withKnobs,
  boolean,
  number,
  text
} from '@storybook/addon-knobs';
import _ from 'underscore';

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

export const DynamicTabs = () => {
  const tabs = number('Number of tabs', 3);

  return (
    <TabbedModal
      header={text('Header', 'Modal Header')}
      inlineTabs={boolean('Inline tabs', false)}
      open
    >
      { _.times(tabs, (index) => (
        <TabbedModal.Tab
          name={`Tab ${index}`}
        >
          <div>{`Tab ${index} content`}</div>
        </TabbedModal.Tab>
      ))}
    </TabbedModal>
  );
};

export const NamedTabs = () => (
  <TabbedModal
    header={text('Header', 'Modal Header')}
    inlineTabs={boolean('Inline tabs', false)}
    open
  >
    <TabbedModal.Tab
      name={text('Tab 1 Name', 'Tab 1')}
    >
      <div>Tab 1 content</div>
    </TabbedModal.Tab>
    <TabbedModal.Tab
      name={text('Tab 2 Name', 'Tab 2')}
    >
      <div>Tab 2 content</div>
    </TabbedModal.Tab>
  </TabbedModal>
);
