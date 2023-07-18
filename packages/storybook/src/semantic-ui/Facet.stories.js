// @flow

import { boolean } from '@storybook/addon-knobs';
import React from 'react';
import { Checkbox, Form } from 'semantic-ui-react';
import Facet from '../../../semantic-ui/src/components/Facet';

export default {
  title: 'Components/Semantic UI/Facet',
  component: Facet
};

export const Default = () => (
  <Facet
    title='Department'
  >
    <Form>
      <Form.Field>
        <Checkbox
          label='Appliances'
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label='Bath & Faucets'
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label='Building Materials'
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label='Doors & Windows'
        />
      </Form.Field>
    </Form>
  </Facet>
);

export const Collapsed = () => (
  <Facet
    defaultActive={false}
    title='Department'
  >
    <Form>
      <Form.Field>
        <Checkbox
          label='Appliances'
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label='Bath & Faucets'
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label='Building Materials'
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label='Doors & Windows'
        />
      </Form.Field>
    </Form>
  </Facet>
);

export const Divided = () => (
  <>
    <Facet
      divided={boolean('Divided', true)}
      title='Department'
    >
      <Form>
        <Form.Field>
          <Checkbox
            label='Appliances'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label='Bath & Faucets'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label='Building Materials'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label='Doors & Windows'
          />
        </Form.Field>
      </Form>
    </Facet>
    <Facet
      divided={boolean('Divided', true)}
      title='Brand'
    >
      <Form>
        <Form.Field>
          <Checkbox
            label='American Standard'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label='Andersen'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label='Delta'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label='Kohler'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label='LG'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label='Samsung'
          />
        </Form.Field>
      </Form>
    </Facet>
  </>
);
