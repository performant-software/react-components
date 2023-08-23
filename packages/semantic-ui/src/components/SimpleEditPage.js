// @flow

import { Element } from '@performant-software/shared-components';
import type { EditContainerProps } from '@performant-software/shared-components/types';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import {
  Button,
  Form,
  Grid,
  Menu,
  MenuProps,
  Message,
  Ref,
  Sticky
} from 'semantic-ui-react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import Toaster from './Toaster';
import './SimpleEditPage.css';

type Props = EditContainerProps & {
  /**
   * Additional class attribute to apply to the root DOM element.
   */
  className?: string,

  /**
   * Sets the default visible tab. If no value is provided, the first tab will be visible.
   */
  defaultTab?: string,

  /**
   * Props to provide to the Semantic UI `Menu` component.
   */
  menuProps?: typeof MenuProps,

  /**
   * Callback fired when the "Cancel" button is clicked.
   */
  onCancel: () => void,

  /**
   * Callback fired when a tab is clicked.
   *
   * @param tab
   */
  onTabClick?: (tab: string) => void,

  /**
   * If `true`, the saved toaster will display when the component is mounted.
   */
  saved?: boolean,

  /**
   * If `true`, the tabs menu will "stick" to the top of the window.
   */
  stickyMenu?: boolean
};

/**
 * This component can be used to render the layout for a form/page with edit capabilities. Use in conjunction with the
 * `withEditPage` higher-order component for a fully fledged record editing environment.
 */
const SimpleEditPage: any = (props: Props) => {
  const [currentTab, setCurrentTab] = useState();
  const [saved, setSaved] = useState(false);

  const contentRef = useRef();

  // $FlowIgnore
  const tabs = Element.findByType(props.children, SimpleEditPage.Tab);
  const tab = useMemo(() => _.find(tabs, (nextTab) => nextTab.key === currentTab), [currentTab, tabs]);

  /**
   * Memo-izes the class name variable.
   *
   * @type {string}
   */
  const className = useMemo(() => {
    const classNames = ['simple-edit-page'];

    if (props.className) {
      classNames.push(props.className);
    }

    return classNames.join(' ');
  }, [props.className]);

  /**
   * Sets the current tab.
   *
   * @type {(function(*): void)|*}
   */
  const onTabClick = useCallback((item) => {
    const { key } = item;
    setCurrentTab(key);

    if (props.onTabClick) {
      props.onTabClick(key);
    }
  }, [props.onTabClick]);

  /**
   * Renders the tab menu component.
   *
   * @type {(function(): (*))|*}
   */
  const renderTabs = useCallback(() => {
    const menu = (
      <Menu
        {...props.menuProps}
      >
        { tabs?.length > 1 && _.map(tabs, (item) => (
          <Menu.Item
            active={item.key === currentTab}
            disabled={props.loading || props.saving}
            key={item.key}
            name={item.props.name}
            onClick={() => onTabClick(item)}
          />
        ))}
        <Menu.Menu
          position='right'
        >
          <Menu.Item
            className='button-container'
          >
            <Button
              content={i18n.t('Common.buttons.save')}
              disabled={props.loading || props.saving}
              onClick={props.onSave}
              primary
            />
            <Button
              basic
              content={i18n.t('Common.buttons.cancel')}
              disabled={props.loading || props.saving}
              onClick={props.onCancel}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );

    if (props.stickyMenu) {
      return (
        <Sticky
          context={contentRef}
          offset={20}
        >
          { menu }
        </Sticky>
      );
    }

    return menu;
  });

  useEffect(() => {
    // Sets the default tab to the first tab in the list, or the tab on the URL state
    let defaultTab;

    if (props.defaultTab) {
      defaultTab = { key: props.defaultTab };
    } else {
      defaultTab = _.first(tabs);
    }

    if (defaultTab) {
      onTabClick(defaultTab);
    }

    // Sets the saved indicator based on the URL state
    if (props.saved) {
      setSaved(true);
    }
  }, []);

  return (
    <Grid
      className={className}
    >
      <Grid.Row>
        <Grid.Column>
          { renderTabs() }
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Ref
            innerRef={contentRef}
          >
            <div>
              <Form
                error={!_.isEmpty(props.errors)}
                loading={props.loading || props.saving}
                noValidate
              >
                <Message
                  error
                  header={i18n.t('Common.errors.save')}
                  list={props.errors}
                />
                { tab && tab.props.children }
              </Form>
              { saved && (
                <Toaster
                  onDismiss={() => setSaved(false)}
                  type={Toaster.MessageTypes.positive}
                >
                  <Message.Header
                    content={i18n.t('Common.messages.save.header')}
                  />
                  <Message.Content
                    content={i18n.t('Common.messages.save.content')}
                  />
                </Toaster>
              )}
            </div>
          </Ref>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

SimpleEditPage.defaultProps = {
  menuProps: {
    pointing: true,
    secondary: true
  }
};

const Tab = (props: any) => props.children;
Tab.displayName = 'Tab';

// $FlowIgnore
const SimpleEditPageStatic = Object.assign(SimpleEditPage, { Tab });

export default SimpleEditPageStatic;
