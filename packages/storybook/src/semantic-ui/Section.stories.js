// @flow

import { faker } from '@faker-js/faker';
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import _ from 'underscore';
import NumberUtils from '../utils/Number';
import Section from '../../../semantic-ui/src/components/Section';

export default {
  title: 'Components/Semantic UI/Section',
  decorators: [withKnobs]
};

const sections = [];

_.times(5, () => {
  sections.push({
    content: faker.lorem.lines(NumberUtils.getRandomInt(2, 7)),
    header: faker.random.words(NumberUtils.getRandomInt(1, 3))
  });
});

export const Default = () => (
  <div>
    { _.map(sections, (section) => (
      <Section
        header={section.header}
      >
        { section.content }
      </Section>
    ))}
  </div>
);

export const Undivided = () => (
  <div>
    { _.map(sections, (section) => (
      <Section
        header={section.header}
        divided={false}
      >
        { section.content }
      </Section>
    ))}
  </div>
);
