// @flow

import React, { useCallback, useRef } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
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
      divided
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
      divided
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

export const ExpandCollapse = () => {
  const ref = useRef();

  /**
   * Collapses the facet via the imperative function.
   *
   * @type {(function(): void)|*}
   */
  const onCollapse = useCallback(() => {
    const { current: instance } = ref;

    if (instance) {
      instance.collapse();
    }
  }, [ref.current]);

  /**
   * Expands the facet via the imperative function.
   *
   * @type {(function(): void)|*}
   */
  const onExpand = useCallback(() => {
    const { current: instance } = ref;

    if (instance) {
      instance.expand();
    }
  }, [ref.current]);

  return (
    <>
      <Facet
        innerRef={ref}
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
      <Button
        content='Expand'
        onClick={onExpand}
      />
      <Button
        content='Collapse'
        onClick={onCollapse}
      />
    </>
  );
};
