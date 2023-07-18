// @flow

import { faker } from '@faker-js/faker';
import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import _ from 'underscore';
import CurrentFacetsModal from '../../../semantic-ui/src/components/CurrentFacetsModal';

export default {
  title: 'Components/Semantic UI/CurrentFacetsModal',
  component: CurrentFacetsModal
};

const createItems = (count) => _.times(count, () => {
  const label = faker.color.human();

  return {
    label,
    onClick: action(`${label} clicked`)
  };
});

export const Default = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        content='Open'
        onClick={() => setVisible(true)}
      />
      <CurrentFacetsModal
        items={createItems(10)}
        onClose={() => setVisible(false)}
        open={visible}
      />
    </>
  );
};
