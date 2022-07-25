// @flow

import React, { type ComponentType } from 'react';
import { Button, Grid, Input } from 'semantic-ui-react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import withBatchEdit, { type BatchEditProps } from '../hooks/BatchEdit';

type Item = {
  key: string,
  value: string
};

type Props = BatchEditProps & {
  items: Array<Item>,
  onChange: (items: Array<Item>) => void
};

const KeyValuePairs: ComponentType<any> = withBatchEdit((props: Props) => (
  <div>
    <Button
      basic
      content={i18n.t('Common.buttons.add')}
      icon='plus'
      onClick={props.onAddItem.bind(this)}
      type='button'
    />
    <Grid
      padded='vertically'
    >
      { _.map(props.items, (item, index) => (
        <Grid.Row
          columns={3}
        >
          <Grid.Column
            width={8}
          >
            <Input
              fluid
              onChange={props.onUpdateItem.bind(this, index, 'key')}
              placeholder={i18n.t('KeyValuePairs.labels.key')}
              value={item.key}
            />
          </Grid.Column>
          <Grid.Column
            width={7}
          >
            <Input
              fluid
              onChange={props.onUpdateItem.bind(this, index, 'value')}
              placeholder={i18n.t('KeyValuePairs.labels.value')}
              value={item.value}
            />
          </Grid.Column>
          <Grid.Column
            width={1}
          >
            <Button
              color='red'
              icon='trash'
              onClick={props.onRemoveItem.bind(this, index)}
            />
          </Grid.Column>
        </Grid.Row>
      ))}
      { _.isEmpty(props.items) && (
        <Grid.Row
          columns={1}
        >
          <Grid.Column>
            { i18n.t('Common.labels.noRecords') }
          </Grid.Column>
        </Grid.Row>
      )}
    </Grid>
  </div>
));

export default KeyValuePairs;
