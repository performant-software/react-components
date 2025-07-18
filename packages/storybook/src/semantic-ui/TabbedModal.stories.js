// @flow

import React from 'react';
import _ from 'underscore';
import TabbedModal from '../../../semantic-ui/src/components/TabbedModal';

export default {
  title: 'Components/Semantic UI/TabbedModal',
  component: TabbedModal
};

export const Default = () => (
  <TabbedModal
    header='Modal Header'
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
  return (
    <TabbedModal
      header='Modal Header'
      open
    >
      { _.times(3, (index) => (
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
    header='Modal Header'
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
