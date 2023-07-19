// @flow

import React from 'react';
import { Form } from 'semantic-ui-react';
import BibliographyForm from '../../../semantic-ui/src/components/BibliographyForm';
import useEditContainer from '../../../shared/src/components/EditContainer';

const BibliographyFormComponent = useEditContainer(BibliographyForm);

export default {
  title: 'Components/Semantic UI/BibliographyForm',
  component: BibliographyForm
};

export const Default = () => (
  <Form>
    <BibliographyFormComponent
      item={{
        itemType: 'book'
      }}
    />
  </Form>
);
