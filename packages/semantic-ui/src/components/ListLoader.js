// @flow

import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import i18n from '../i18n/i18n';
import './ListLoader.css';

type Props = {
  /**
   * If true, the list loader spinner will display.
   */
  active: boolean
};

/**
 * A loader displays a spinner when active.
 */
const ListLoader = (props: Props) => (
  <Dimmer.Dimmable
    as={Segment}
    className='listLoader'
    dimmed={props.active}
    style={{
      opacity: props.active ? '0.8' : '0'
    }}
  >
    <Dimmer
      active={props.active}
      inverted
    >
      <Loader
        content={i18n.t('Common.messages.loading')}
      />
    </Dimmer>
  </Dimmer.Dimmable>
);

export default ListLoader;
