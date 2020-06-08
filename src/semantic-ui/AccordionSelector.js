// @flow

import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import {
  Button,
  Grid,
  Header,
  Input,
  Modal
} from 'semantic-ui-react';
import _ from 'underscore';
import EditModal from './EditModal';
import NestedAccordion from './NestedAccordion';
import SelectizeHeader from './SelectizeHeader';
import Timer from '../utils/Timer';
import './AccordionSelector.css';

type Props = {
  collectionName: string,
  getChildItems: (items: Array<any>, item: any) => Array<any>,
  getRootItems: (items: Array<any>) => Array<any>,
  isSelectable?: (item: any) => boolean,
  modal?: {
    component: Component<{}>,
    onSave: (item: any) => Promise<any>,
    props: any,
    state: any,
  },
  multiple?: boolean,
  onClose: () => void,
  onSave: (selectedItems: Array<any>) => void,
  onSearch: (parentId: ?number, search: ?string) => any,
  open?: boolean,
  renderItem: (item: any) => string | Component<{}>,
  selectedItems?: Array<any>,
  showToggle: (item: any) => boolean,
  t: (key: string) => string,
  title?: string
};

type State = {
  activeItems: Array<any>,
  items: Array<any>,
  modalAdd: boolean,
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
      activeItems: [],
      items: [],
      modalAdd: false,
      searchQuery: '',
      selectedItem: null,
      selectedItems: props.selectedItems
    };
  }

  /**
   * Executes the initial search.
   */
  componentDidMount() {
    this.onSearch();
  }

  /**
   * Returns true if the passed item is active.
   *
   * @param item
   *
   * @returns {boolean}
   */
  isActive(item) {
    return !!_.findWhere(this.state.activeItems, { id: item.id });
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
   * Opens/collapses the passed item. Child items are lazy loaded.
   *
   * @param item
   */
  onItemToggle(item) {
    if (!item.loaded) {
      this.onSearch(item.id).then(() => {
        this.toggleItem(item);
        // Set the "loaded" property on item to prevent multiple API calls
        this.setState((state) => ({
          items: _.map(state.items, (i) => (i.id === item.id ? { ...i, loaded: true } : i))
        }));
      });
    } else {
      this.toggleItem(item);
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
        this.setState((state) => (parentId
          ? this.setItemsByParentId(state, items)
          : this.setItemsBySearch(state, items)));
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
                  : this.props.t('AccordionSelector.title')}
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
            isActive={this.isActive.bind(this)}
            isSelected={this.isSelected.bind(this)}
            onItemClick={this.onItemClick.bind(this)}
            onItemToggle={this.onItemToggle.bind(this)}
            renderItem={this.props.renderItem.bind(this)}
            rootItems={this.props.getRootItems(this.state.items)}
            showToggle={this.props.showToggle.bind(this)}
          />
          { this.renderAddModal() }
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

    const {
      component,
      props,
      state,
      onSave
    } = this.props.modal;

    const AddModal = withTranslation()(EditModal(component, props, state));

    return (
      <AddModal
        onClose={() => this.setState({ modalAdd: false })}
        onSave={(item) => onSave(item)
          .then((saved) => this.setState({
            modalAdd: false,
            searchQuery: '',
            selectedItems: [saved]
          }, this.onSearch.bind(this)))}
      />
    );
  }

  /**
   * Sets the passed items on the state. In this case, the API call was executed by clicking on a parent item. Child
   * items will be appended to the list.
   *
   * @param state
   * @param items
   *
   * @returns {{activeItems: (Array<*>|[]|*[]|*), items: *[]}}
   */
  setItemsByParentId(state, items) {
    return {
      activeItems: state.activeItems || [],
      items: [...state.items || [], ...items]
    };
  }

  /**
   * Sets the passed items on the state. In this case, the API call was executed by searching. The list will be
   * replaced by the items returned from the API call.
   *
   * @param state
   * @param items
   *
   * @returns {{activeItems: [], items: []}}
   */
  setItemsBySearch(state, items) {
    const activeItems = [];
    const allItems = [];

    _.each(items, (item) => {
      const hasChildren = this.props.getChildItems(this.state.items, item).length;

      if (hasChildren) {
        activeItems.push(item);
      }

      allItems.push({
        ...item,
        loaded: hasChildren
      });
    });

    return {
      activeItems,
      items: allItems
    };
  }

  toggleItem(item) {
    this.setState((state) => ({
      activeItems: this.isActive(item)
        ? _.filter(state.activeItems, (i) => i.id !== item.id)
        : [...state.activeItems, item]
    }));
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
