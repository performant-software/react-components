// @flow

import { faker } from '@faker-js/faker';
import React from 'react';
import _ from 'underscore';
import SearchResults from '../../../semantic-ui/src/components/SearchResults';

export default {
  title: 'Components/Semantic UI/SearchResults',
  component: SearchResults
};

const createPerson = (count) => _.times(count, () => ({
  name: faker.person.fullName(),
  jobTitle: faker.person.jobTitle(),
  company: faker.company.name(),
  email: faker.internet.email(),
  biography: faker.lorem.paragraph({ min: 1, max: 3 })
}));

export const Default = () => (
  <SearchResults
    renderHeader={(item) => item.name}
    renderMeta={(item) => item.email}
    renderDescription={(item) => item.biography}
    renderExtra={(item) => (
      <div>
        { item.company }
        &nbsp;-&nbsp;
        { item.jobTitle }
      </div>
    )}
    useHits={() => ({
      hits: createPerson(10)
    })}
  />
);

export const Link = () => (
  <SearchResults
    link
    renderHeader={(item) => item.name}
    renderMeta={(item) => item.email}
    renderDescription={(item) => item.biography}
    renderExtra={(item) => (
      <div>
        { item.company }
        &nbsp;-&nbsp;
        { item.jobTitle }
      </div>
    )}
    useHits={() => ({
      hits: createPerson(10)
    })}
  />
);
