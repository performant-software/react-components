import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import ViewXML from '../../../src/semantic-ui/ViewXML';
// eslint-disable-next-line import/no-unresolved,import/no-webpack-loader-syntax
import xml from '!!raw-loader!../../assets/books.xml';
import LinkButton from '../../../src/semantic-ui/LinkButton';

export default {
  title: 'Components/Semantic UI/ViewXML',
  decorators: [withA11y, withKnobs]
};

const style = {
  maxHeight: '50vh'
};

export const Default = () => (
  <ViewXML
    style={style}
    xml={xml}
  />
);

export const CustomOpener = () => (
  <ViewXML
    opener={{
      component: LinkButton,
      props: {
        content: 'Click here!'
      }
    }}
    style={style}
    xml={xml}
  />
);
