// @flow

import React, { Component, type ComponentType, type Element } from 'react';
import {
  Button,
  Form,
  Grid,
  Icon,
  Modal,
  Table
} from 'semantic-ui-react';
import _ from 'underscore';
import SelectizeHeader from './SelectizeHeader';
import i18n from '../i18n/i18n';
import useDataList from './DataList';
import './Selectize.css';
import useList, { type Props as ListProps } from './List';

type Item = {
  id: number
};

type Props = ListProps & {
  centered: boolean,
  multiple?: boolean,
  onClose: () => void,
  onInit: () => void,
  renderHeader?: (props: any) => ComponentType<any>,
  renderItem: (item: Item) => Element<any>,
  selectedItems?: Array<Item>,
  t: (key: string) => string,
  title: string
};

type State = {
  selectedItem: any,
  selectedItems: Array<any>
};

class Selectize extends Component<Props, State> {
  static defaultProps: any;

  /**
   * Constructs a new Selectize component.
   *
   * @param props
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      selectedItems: props.selectedItems || [],
      selectedItem: null
    };
  }

  /**
   * Loads the data after the component has mounted.
   */
  componentDidMount() {
    this.props.onInit();
  }

  /**
   * Returns true if the passed item is selected.
   *
   * @param item
   *
   * @returns {boolean}
   */
  isSelected(item: any) {
    return !!_.findWhere(this.state.selectedItems, { id: item.id });
  }

  /**
   * Toggles the selection for the passed item.
   *
   * @param item
   */
  onItemSelection(item: Item) {
    if (this.state.selectedItem === item) {
      this.setState({ selectedItem: null }, this.onSelect.bind(this, item));
    } else {
      this.setState({ selectedItem: item });
    }
  }

  /**
   * Toggles the selection for the passed item.
   *
   * @param item
   */
  onSelect(item: Item) {
    if (this.isSelected(item)) {
      this.setState((state) => ({
        selectedItems: _.filter(state.selectedItems, (i) => i.id !== item.id)
      }));
    } else if (!this.props.multiple) {
      this.setState({ selectedItems: [item] });
    } else {
      this.setState((state) => ({
        selectedItems: [
          ...state.selectedItems,
          item
        ]
      }));
    }
  }

  /**
   * Renders the Selectize component.
   *
   * @returns {*}
   */
  render() {
    const SelectizeGrid = useList(() => (
      <Grid>
        <Grid.Column
          textAlign='center'
        >
          { this.renderHeader() }
          { this.renderItems() }
          { this.renderEmpty() }
        </Grid.Column>
      </Grid>
    ));

    return (
      <Modal
        as={Form}
        centered={this.props.centered}
        className='selectize'
        open
        noValidate
        size='small'
      >
        <Modal.Header
          content={this.props.title}
        />
        <Modal.Content>
          <SelectizeGrid
            {...this.props}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={this.props.onSave.bind(this, this.state.selectedItems)}
            primary
            size='medium'
            type='submit'
          >
            { i18n.t('Common.buttons.save') }
          </Button>
          <Button
            inverted
            onClick={this.props.onClose.bind(this)}
            primary
            size='medium'
            type='button'
          >
            { i18n.t('Common.buttons.cancel') }
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }

  /**
   * Renders the checkmark if the passed item is selected.
   *
   * @param item
   *
   * @returns {null|*}
   */
  renderCheckmark(item: Item) {
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

  /**
   * Renders no results.
   *
   * @returns {null|*}
   */
  renderEmpty() {
    if ((this.props.items && this.props.items.length) || this.props.loading) {
      return null;
    }

    return (
      <Grid
        className='empty'
        padded='vertically'
      >
        <Grid.Column
          textAlign='center'
        >
          <Grid.Row>
            <Icon
              name='search'
              size='huge'
            />
          </Grid.Row>
          <Grid.Row>
            { i18n.t('Selectize.noRecords') }
          </Grid.Row>
        </Grid.Column>
      </Grid>

    );
  }

  renderHeader() {
    if (this.props.renderHeader) {
      return this.props.renderHeader({
        onItemClick: this.onItemSelection.bind(this),
        selectedItem: this.state.selectedItem,
        selectedItems: this.state.selectedItems,
      });
    }

    return (
      <SelectizeHeader
        isSelected={(item) => this.state.selectedItem === item}
        items={this.state.selectedItems}
        onItemClick={this.onItemSelection.bind(this)}
        renderItem={this.props.renderItem.bind(this)}
      />
    );
  }

  /**
   * Renders the passed item.
   *
   * @param item
   * @param index
   *
   * @returns {*}
   */
  renderItem(item: Item, index: number) {
    return (
      <Table.Row
        key={index}
        onClick={this.onSelect.bind(this, item)}
      >
        <Table.Cell>{ this.props.renderItem(item) }</Table.Cell>
        <Table.Cell>
          { this.renderCheckmark(item) }
        </Table.Cell>
      </Table.Row>
    );
  }

  /**
   * Renders the list of items on the state.
   *
   * @returns {null|*}
   */
  renderItems() {
    if (_.isEmpty(this.props.items)) {
      return null;
    }

    return (
      <Table
        basic
        padded
        selectable
      >
        <Table.Body>
          { _.map(this.props.items, this.renderItem.bind(this)) }
        </Table.Body>
      </Table>
    );
  }
}

Selectize.defaultProps = {
  centered: false,
  modal: undefined,
  multiple: true,
  searchable: true,
  selectedItems: []
};

export default useDataList(Selectize);
