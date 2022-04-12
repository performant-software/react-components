// @flow

import { Timer } from '@react-components/shared';
import React, { Component, type ComponentType, type Element } from 'react';
import { withTranslation } from 'react-i18next';
import {
  Button,
  Grid,
  Header,
  Icon,
  Input,
  Message,
  Modal
} from 'semantic-ui-react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import EditModal from './EditModal';
import NestedAccordion from './NestedAccordion';
import SelectizeHeader from './SelectizeHeader';
import Toaster from './Toaster';
import './AccordionSelector.css';

type Props = {
  collectionName: string,
  getChildItems: (items: Array<any>, item: any) => Array<any>,
  getRootItems: (items: Array<any>) => Array<any>,
  isSelectable?: (item: any) => boolean,
  modal?: {
    component: ComponentType<{}>,
    onSave: (item: any) => Promise<any>,
    props: any,
    state: any,
  },
  multiple?: boolean,
  onClose: () => void,
  onSave: (selectedItems: Array<any>) => void,
  onSearch: (parentId: ?number, search: ?string) => any,
  open?: boolean,
  renderItem: (item: any) => string | Element<any>,
  selectedItems?: Array<any>,
  showToggle: (item: any) => boolean,
  t: (key: string) => string,
  title?: string
};

type State = {
  items: Array<any>,
  modalAdd: boolean,
  saved: boolean,
  searchQuery: string,
  selectedItem: ?any,
  selectedItems: Array<any>
};

class AccordionSelector extends Component<Props, State> {
  static defaultProps: any;

  /**
   * Constructs a new AccordionSelector component.
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      modalAdd: false,
      saved: false,
      searchQuery: '',
      selectedItem: null,
      selectedItems: props.selectedItems
    };
  }

  /**
   * Executes the initial search when the modal is opened.
   */
  componentDidUpdate(prevProps) {
    if (this.props.open && !prevProps.open) {
      this.onSearch();
    }

    if (this.props.selectedItems !== prevProps.selectedItems) {
      this.setState({ selectedItems: this.props.selectedItems });
    }
  }

  /**
   * Returns true if the passed item is selected.
   *
   * @param item
   *
   * @returns {boolean}
   */
  isSelected(item) {
    return !!_.findWhere(this.state.selectedItems, { id: item.id });
  }

  /**
   * Toggles selection for the passed item.
   *
   * @param item
   */
  onItemClick(item) {
    if (this.props.isSelectable && !this.props.isSelectable(item)) {
      return;
    }

    this.setState((state) => {
      let selectedItems;

      if (this.isSelected(item)) {
        selectedItems = _.filter(state.selectedItems, (i) => i.id !== item.id);
      } else if (!this.props.multiple) {
        selectedItems = [item];
      } else {
        selectedItems = [
          ...state.selectedItems,
          item
        ];
      }

      return { selectedItems };
    });
  }

  /**
   * Toggles selection for the passed item.
   *
   * @param item
   */
  onItemSelection(item) {
    if (this.state.selectedItem === item) {
      this.setState({ selectedItem: null }, this.onItemClick.bind(this, item));
    } else {
      this.setState({ selectedItem: item });
    }
  }

  /**
   * Lazy-loads the children for the passed item.
   *
   * @param item
   */
  onItemToggle(item) {
    if (!item.loaded) {
      this.onSearch(item.id).then(() => {
        // Set the "loaded" property on item to prevent multiple API calls
        this.setState((state) => ({
          items: _.map(state.items, (i) => (i.id === item.id ? { ...i, loaded: true } : i))
        }));
      });
    }
  }

  /**
   * Executes the search.
   *
   * @param parentId
   *
   * @returns {*}
   */
  onSearch(parentId = null) {
    return this.props
      .onSearch(parentId, this.state.searchQuery)
      .then(({ data }) => {
        const items = data[this.props.collectionName];
        this.setState((state) => (parentId ? { items: [...state.items || [], ...items] } : { items }));
      });
  }

  /**
   * Sets the search query value on the state.
   *
   * @param e
   * @param value
   */
  onSearchChange(e, { value }) {
    this.setState({ searchQuery: value });
  }

  /**
   * Renders the AccordionSelector modal.
   *
   * @returns {*}
   */
  render() {
    return (
      <Modal
        className='accordion-selector'
        open={this.props.open}
        size='small'
      >
        <Modal.Header>
          <Grid
            columns={2}
            verticalAlign='middle'
          >
            <Grid.Column
              textAlign='left'
            >
              <Header
                content={this.props.title
                  ? this.props.title
                  : i18n.t('AccordionSelector.title')}
              />
            </Grid.Column>
            <Grid.Column
              textAlign='right'
            >
              <Input
                autoFocus
                icon='search'
                onKeyDown={Timer.clearSearchTimer.bind(this)}
                onKeyUp={Timer.setSearchTimer.bind(this, this.onSearch.bind(this))}
                onChange={this.onSearchChange.bind(this)}
                size='mini'
                type='text'
                value={this.state.searchQuery}
              />
              { this.renderAddButton() }
            </Grid.Column>
          </Grid>
        </Modal.Header>
        <Modal.Content>
          <SelectizeHeader
            isSelected={(item) => this.state.selectedItem === item}
            items={this.state.selectedItems}
            onItemClick={this.onItemSelection.bind(this)}
            renderItem={this.props.renderItem.bind(this)}
          />
          <NestedAccordion
            getChildItems={this.props.getChildItems.bind(this, this.state.items)}
            onItemClick={this.onItemClick.bind(this)}
            onItemToggle={this.onItemToggle.bind(this)}
            renderItem={this.props.renderItem.bind(this)}
            renderRight={this.renderRight.bind(this)}
            rootItems={this.props.getRootItems(this.state.items)}
            showToggle={this.props.showToggle.bind(this)}
          />
          { this.renderAddModal() }
          { this.state.saved && (
            <Toaster
              onDismiss={() => this.setState({ saved: false })}
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
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={this.props.onSave.bind(this, this.state.selectedItems)}
            primary
            size='medium'
            type='submit'
          >
            { this.props.t('Common.buttons.save') }
          </Button>
          <Button
            inverted
            onClick={this.props.onClose.bind(this)}
            primary
            size='medium'
            type='button'
          >
            { this.props.t('Common.buttons.cancel') }
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }

  /**
   * Renders the add button.
   *
   * @returns {null|*}
   */
  renderAddButton() {
    if (!this.props.modal) {
      return null;
    }

    return (
      <Button
        basic
        className='add-button'
        content={this.props.t('Common.buttons.add')}
        icon='plus'
        onClick={() => this.setState({ modalAdd: true })}
      />
    );
  }

  /**
   * Renders the add modal.
   *
   * @returns {null|*}
   */
  renderAddModal() {
    if (!(this.state.modalAdd && this.props.modal)) {
      return null;
    }

    const { component, props, onSave } = this.props.modal;

    return (
      <EditModal
        component={component}
        onClose={() => this.setState({ modalAdd: false, selectedItem: null })}
        onSave={(item) => onSave(item)
          .then((saved) => this.setState({
            modalAdd: false,
            saved: true,
            searchQuery: '',
            selectedItems: [saved]
          }, this.onSearch.bind(this)))}
        {...props}
      />
    );
  }

  /**
   * Renders the right column for the passed item.
   *
   * @param item
   *
   * @returns {null|*}
   */
  renderRight(item) {
    if (!this.isSelected(item)) {
      return null;
    }

    return (
      <Icon
        color='green'
        name='check'
      />
    );
  }
}

AccordionSelector.defaultProps = {
  isSelectable: undefined,
  modal: undefined,
  multiple: false,
  open: false,
  selectedItems: [],
  title: undefined
};

export default withTranslation()(AccordionSelector);
