// @flow

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ComponentType,
  type Element
} from 'react';
import {
  Button,
  Form,
  Grid,
  Icon,
  Message,
  Modal,
  Table
} from 'semantic-ui-react';
import _ from 'underscore';
import SelectizeHeader from './SelectizeHeader';
import i18n from '../i18n/i18n';
import ModalContext from '../context/ModalContext';
import useDataList from './DataList';
import useList, { type Props as ListProps } from './List';
import './Selectize.css';

type Props = {
  centered?: boolean,
  collectionName: string,
  filters?: {
    component: ComponentType<any>,
    defaults: any,
    props: any,
    onChange?: (filter: any) => Promise<any>
  },
  modal?: {
    onSave: (item: any) => Promise<any>
  },
  multiple?: boolean | number,
  onClose: () => void,
  onLoad: (params: any) => Promise<any>,
  onSave: (items: any) => void,
  selectedItems: Array<any>,
  title: string
};

type GridProps = ListProps & {
  isSelected: (item: any) => boolean,
  onInit: () => void,
  onItemSelection: (item: any) => void,
  onSelect: (item: any) => void,
  renderHeader?: (params: any) => Element<any>,
  renderItem?: (item: any) => Element<any>,
  renderItems?: ({
    isSelected: (item: any) => boolean,
    items: any,
    onSelect: () => void
  }) => Element<any>,
  selectedItem: any,
  selectedItems: Array<any>
};

const SelectizeGrid = useDataList(useList((props: GridProps) => {
  useEffect(() => {
    if (props.onInit) {
      props.onInit();
    }
  }, []);

  /**
   * Renders a checkmark of the passed item is selected.
   *
   * @type {(function(*): (null|*))|*}
   */
  const renderCheckmark = useCallback((item: any) => {
    if (!props.isSelected(item)) {
      return null;
    }

    return (
      <Icon
        color='green'
        name='check'
      />
    );
  }, [props.selectedItems]);

  /**
   * Renders the selectize header component.
   *
   * @returns {JSX.Element|*}
   */
  const renderHeader = () => {
    if (props.renderHeader) {
      return props.renderHeader({
        onItemClick: props.onItemSelection.bind(this),
        selectedItem: props.selectedItem,
        selectedItems: props.selectedItems,
      });
    }

    return (
      <SelectizeHeader
        isSelected={(item) => props.selectedItem === item}
        items={props.selectedItems}
        onItemClick={props.onItemSelection.bind(this)}
        renderItem={props.renderItem.bind(this)}
      />
    );
  };

  /**
   * Renders the list of items as a table.
   *
   * @type {(function(): (null|*))|*}
   */
  const renderItems = useCallback(() => {
    if (_.isEmpty(props.items)) {
      return null;
    }

    if (props.renderItems) {
      return props.renderItems({
        isSelected: props.isSelected,
        items: props.items,
        onSelect: props.onSelect
      });
    }

    return (
      <Table
        basic
        padded
        selectable
      >
        <Table.Body>
          { _.map(props.items, (item, index) => (
            <Table.Row
              key={index}
              onClick={props.onSelect.bind(this, item)}
            >
              <Table.Cell>{ props.renderItem(item) }</Table.Cell>
              <Table.Cell>
                { renderCheckmark(item) }
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }, [renderCheckmark, props.items, props.onSelect, props.renderItem]);

  /**
   * Renders the empty list component.
   *
   * @type {(function(): (null|*))|*}
   */
  const renderEmpty = useCallback(() => {
    if ((props.items && props.items.length) || props.loading) {
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
            { i18n.t('Selectize.messages.noRecords') }
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }, [props.items, props.loading]);

  return (
    <Grid>
      <Grid.Column
        textAlign='center'
      >
        { renderHeader() }
        { renderItems() }
        { renderEmpty() }
      </Grid.Column>
    </Grid>
  );
}));

const Selectize = (props: Props) => {
  const [error, setError] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [selectedItems, setSelectedItems] = useState(props.selectedItems || []);

  /**
   * Sets the allowMultiple prop to "true" if the multiple prop is a boolean or non-zero integer.
   *
   * @type {boolean}
   */
  const allowMultiple = useMemo(() => !!props.multiple, [props.multiple]);

  /**
   * Sets the allowed number of items that can be selected. If the multiple prop is a boolean, this will be
   * and unlimited amount.
   *
   * @type {boolean|number}
   */
  const allowedCount = useMemo(() => (
    _.isNumber(props.multiple) ? props.multiple : Number.MAX_SAFE_INTEGER
  ), [props.multiple]);

  /**
   * Returns true if the passed item is selected.
   *
   * @type {function(*): boolean}
   */
  const isSelected = useCallback((item) => !!_.findWhere(selectedItems, { id: item.id }, [selectedItems]));

  /**
   * If the passed item is selected, deselect the item. If we're not allowing multiple select, replace the selected
   * items with the passed item. Otherwise, append the passed item to the list of selected items.
   *
   * If the user has already selected the maximum number allowed, display an error message.
   *
   * @type {(function(*=): void)|*}
   */
  const onSelect = useCallback((item) => {
    if (isSelected(item)) {
      setSelectedItems((prevItems) => _.filter(prevItems, (i) => i.id !== item.id));
    } else if (!allowMultiple) {
      setSelectedItems([item]);
    } else if (selectedItems.length >= allowedCount) {
      setError(true);
    } else {
      setSelectedItems((prevItems) => [
        ...prevItems,
        item
      ]);
    }
  }, [isSelected, props.multiple]);

  /**
   * Selects or deselects the single passed item.
   *
   * @type {(function(*=): void)|*}
   */
  const onItemSelection = useCallback((item) => {
    if (selectedItem === item) {
      setSelectedItem(null);
      onSelect(item);
    } else {
      setSelectedItem(item);
    }
  }, [selectedItem, onSelect]);

  /**
   * Returns the promise from the modal onSave prop, if provided. Otherwise returns a resolved promise.
   *
   * @type {(function(*=): (*))|*}
   */
  const onSave = useCallback((item) => {
    if (props.modal && props.modal.onSave) {
      return props.modal.onSave(item).then((saved) => onSelect(saved));
    }

    return Promise.resolve();
  }, [onSelect, props.modal]);

  return (
    <ModalContext.Consumer>
      { (mountNode) => (
        <Modal
          as={Form}
          centered={props.centered}
          className='selectize'
          mountNode={mountNode}
          noValidate
          open
          size='small'
        >
          <Modal.Header
            content={props.title}
          />
          <Modal.Content>
            <Message
              content={i18n.t('Selectize.messages.maxSelected.content')}
              error
              header={i18n.t('Selectize.messages.maxSelected.header')}
              onDismiss={() => setError(false)}
              visible={error}
            />
            <SelectizeGrid
              {...props}
              actions={[]}
              isSelected={isSelected}
              onDelete={() => Promise.resolve()}
              onDeleteAll={() => Promise.resolve()}
              onItemSelection={onItemSelection}
              onSave={onSave}
              onSelect={onSelect}
              selectedItem={selectedItem}
              selectedItems={selectedItems}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button
              onClick={props.onSave.bind(this, selectedItems)}
              primary
              size='medium'
              type='submit'
            >
              { i18n.t('Common.buttons.save') }
            </Button>
            <Button
              basic
              onClick={props.onClose.bind(this)}
              size='medium'
              type='button'
            >
              { i18n.t('Common.buttons.cancel') }
            </Button>
          </Modal.Actions>
        </Modal>
      )}
    </ModalContext.Consumer>
  );
};

Selectize.defaultProps = {
  centered: false,
  modal: undefined,
  multiple: true,
  searchable: true,
  selectedItems: []
};

export default Selectize;
