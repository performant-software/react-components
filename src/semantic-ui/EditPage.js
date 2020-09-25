// @flow

import React, { type ComponentType } from 'react';
import { Form, Menu, type MenuProps } from 'semantic-ui-react';
import _ from 'underscore';
import useEditContainer, { type EditContainerProps } from '../common/EditContainer';
import CancelButton from './CancelButton';
import SaveButton from './SaveButton';
import './EditPage.css';

type Props = EditContainerProps & {
  className: string,
  component: ComponentType<any>,
  menu: MenuProps,
  onClose: () => void,
  onSave: () => Promise<any>
};

const EditPage = (props: Props) => {
  const Page = useEditContainer(useEditPage(props.component));
  return <Page {...props} />;
};

export default EditPage;

export const useEditPage = (WrappedComponent: ComponentType<any>) => ((props: Props) => (
  <Form
    className={`edit-page ${props.className || ''}`}
  >
    { props.menu && (
      <Menu
        {..._.omit(props.menu, 'items')}
      >
        { _.map(props.menu.items, (item) => (
          <Menu.Item
            {...item}
          />
        ))}
        <Menu.Menu
          position='right'
        >
          <Menu.Item>
            <SaveButton
              onClick={props.onSave.bind(this)}
              saving={props.saving}
            />
          </Menu.Item>
          <Menu.Item>
            <CancelButton
              disabled={props.saving}
              onClick={props.onClose.bind(this)}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )}
    { !props.menu && (
      <div
        className='button-container'
      >
        <SaveButton
          onClick={props.onSave.bind(this)}
          saving={props.saving}
        />
        <CancelButton
          disabled={props.saving}
          onClick={props.onClose.bind(this)}
        />
      </div>
    )}
    <WrappedComponent
      {...props}
    />
  </Form>
));
