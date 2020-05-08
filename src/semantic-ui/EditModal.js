// @flow

import React, { Component } from 'react';
import { Button, Loader, Modal } from 'semantic-ui-react';
import _ from 'underscore';
import './EditModal.css';

type Props = {
  item: any,
  onClose: () => void,
  onSave: (item: any) => void,
  t: () => string
};

type State = {
  item: any,
  saving: boolean,
  validationErrors: Array<string>
};

const ERROR_EMPTY = 'can\'t be blank';
const ERROR_UNIQUE = 'has already been taken';

/**
 * This function returns a class that is intended to be a wrapper for all modal classes used within the ListTable
 * component to modify data. The wrapper component will handle the basic state management a delegate the presentation
 * to the wrapped component.
 *
 * @param WrappedComponent
 * @param componentProps
 * @param initialState
 *
 * @returns {{new(*=): {componentDidUpdate(*): void, onClose(): void, onSave(): void, onCheckboxInputChange(*): void,
 * onTextInputChange(*, *, {value: *}): void, render(): *}, prototype: {componentDidUpdate(*): void, onClose(): void,
 * onSave(): void, onCheckboxInputChange(*): void, onTextInputChange(*, *, {value: *}): void, render(): *}}}
 */
function createEditModal(WrappedComponent, componentProps, initialState) {
  return class extends Component<Props, State> {
    /**
     * Constructs a new EditModal component.
     *
     * @param props
     */
    constructor(props) {
      super(props);

      this.state = {
        item: _.defaults(props.item || initialState || {}, componentProps && componentProps.defaults),
        saving: false,
        validationErrors: []
      };
    }

    /**
     * Resets the item on the state.
     *
     * @param prevProps
     */
    componentDidUpdate(prevProps) {
      if (prevProps.item !== this.props.item) {
        this.setState({ item: this.props.item });
      }
    }

    /**
     * Sets the saving property to false.
     */
    componentWillUnmount() {
      this.onSetState({ saving: false });
    }

    /**
     * Returns true if the IDs or UIDs for the passed records match.
     *
     * @param a
     * @param b
     *
     * @returns {*|boolean}
     */
    isChild(a, b) {
      return (a.uid && b.uid && a.uid === b.uid) || (a.id && b.id && a.id === b.id);
    }

    /**
     * Returns true if the passed property is required.
     *
     * @param property
     *
     * @returns {*|boolean}
     */
    isRequired(property) {
      return componentProps && _.contains(componentProps.required, property);
    }

    /**
     * Returns true if the passed property is listed in the hash of validation errors.
     *
     * @param property
     *
     * @returns {*|boolean}
     */
    isError(property) {
      return _.has(this.state.validationErrors, property);
    }

    /**
     * Closes the modal.
     */
    onClose() {
      this.props.onClose();
    }

    /**
     * Adds the passed child to the passed association for the current item.
     *
     * @param association
     * @param child
     */
    onCreateChildAssociation(association, child) {
      this.setState((state) => ({
        item: {
          ...state.item,
          [association]: [
            ...(state.item[association] || []),
            child
          ]
        }
      }));
    }

    /**
     * Removes the passed child from the passed association.
     *
     * @param association
     * @param child
     */
    onDeleteChildAssociation(association, child) {
      return child.id
        ? this.onMarkChildAssociationForDelete(association, child)
        : this.onRemoveChildAssociation(association, child);
    }

    /**
     * Resolves the validation errors from the passed HTTP response.
     *
     * @param errors
     * @param status
     */
    onError({ response: { data: { errors = {} }, status } }) {
      const validationErrors = [];

      _.each(Object.keys(errors), (key) => {
        const fieldErrors = errors[key];
        const value = this.state.item[key];

        _.each(fieldErrors, (error) => {
          if (error === ERROR_UNIQUE) {
            _.extend(validationErrors, { [key]: this.props.t('EditModal.errors.unique', { key, value }) });

            validationErrors.push();
          } else if (error === ERROR_EMPTY) {
            _.extend(validationErrors, { [key]: this.props.t('EditModal.errors.required', { key }) });
          } else if (componentProps.resolveValidationError) {
            _.extend(validationErrors, componentProps.resolveValidationError(error, this.state.item));
          }
        });
      });

      if (status === 400 && !_.keys(validationErrors).length) {
        _.extend(validationErrors, { error: this.props.t('EditModal.errors.general') });
      }

      this.setState({ saving: false, validationErrors });
    }

    /**
     * Marks the passed child for delete form the passed association. This function is called if the child record
     * has an ID value.
     *
     * @param association
     * @param child
     */
    onMarkChildAssociationForDelete(association, child) {
      this.setState((state) => ({
        item: {
          ...state.item,
          [association]: _.map(state.item[association] || [],
            (c) => (c.id === child.id ? { ...c, _destroy: true } : c))
        }
      }));
    }

    /**
     * Modifies the passed association based on the passed collection of children.
     *
     * @param association
     * @param children
     */
    onMultiAddChildAssociations(association, children) {
      const items = this.state.item[association];
      const childrenToAdd = _.filter(children, (child) => !_.find(items, this.isChild.bind(this, child)));
      const childrenToRemove = _.filter(items, (item) => !_.find(children, this.isChild.bind(this, item)));

      _.each(childrenToAdd, this.onSaveChildAssociation.bind(this, association));
      _.each(childrenToRemove, this.onDeleteChildAssociation.bind(this, association));
    }

    /**
     * Removes the passed child record from the passed association. This function is called if the child record does
     * not have an ID value.
     *
     * @param association
     * @param child
     */
    onRemoveChildAssociation(association, child) {
      this.setState((state) => ({
        item: {
          ...state.item,
          [association]: _.filter(state.item[association] || [],
            (c) => c !== child)
        }
      }));
    }

    /**
     * Saves the current item.
     */
    onSave() {
      if (!this.validateForm()) {
        return;
      }

      this.setState({ saving: true }, () => {
        this.props
          .onSave(this.state.item)
          .catch(this.onError.bind(this));
      });
    }

    /**
     * Adds the passed child record to the passed association.
     *
     * @param association
     * @param child
     */
    onSaveChildAssociation(association, child) {
      const children = this.state.item[association] || [];

      return _.find(children, this.isChild.bind(this, child))
        ? this.onUpdateChildAssociation(association, child)
        : this.onCreateChildAssociation(association, child);
    }

    /**
     * Updates the child record in the passed association.
     *
     * @param association
     * @param child
     */
    onUpdateChildAssociation(association, child) {
      this.setState((state) => ({
        item: {
          ...state.item,
          [association]: _.map(state.item[association] || [], (c) => (this.isChild(child, c) ? child : c))
        }
      }));
    }

    /**
     * Sets the associated ID and object.
     *
     * @param idKey
     * @param valueKey
     * @param record
     */
    onAssociationInputChange(idKey, valueKey, record = {}) {
      this.setState((state) => ({
        item: {
          ...state.item,
          [idKey]: record.id || '',
          [valueKey]: record || {}
        },
        validationErrors: _.omit(state.validationErrors, idKey)
      }));
    }

    /**
     * Toggles the checkbox value for the passed key.
     *
     * @param key
     */
    onCheckboxInputChange(key) {
      this.setState((state) => ({
        item: {
          ...state.item,
          [key]: !state.item[key]
        }
      }));
    }

    /**
     * Sets the passed properties on the item on the state.
     *
     * @param properties
     */
    onSetState(properties) {
      this.setState((state) => ({
        item: {
          ...state.item,
          ...properties
        }
      }));
    }

    /**
     * Sets the text input property for the passed key/value.
     *
     * @param key
     * @param e
     * @param value
     */
    onTextInputChange(key, e, { value }) {
      this.setState((state) => ({
        item: {
          ...state.item,
          [key]: value
        },
        validationErrors: _.omit(state.validationErrors, key)
      }));
    }

    /**
     * Renders the inner component.
     *
     * @returns {*}
     */
    render() {
      return (
        <WrappedComponent
          errors={_.values(this.state.validationErrors)}
          isError={this.isError.bind(this)}
          isRequired={this.isRequired.bind(this)}
          item={this.state.item}
          onAssociationInputChange={this.onAssociationInputChange.bind(this)}
          onCheckboxInputChange={this.onCheckboxInputChange.bind(this)}
          onDeleteChildAssociation={this.onDeleteChildAssociation.bind(this)}
          onMultiAddChildAssociations={this.onMultiAddChildAssociations.bind(this)}
          onSaveChildAssociation={this.onSaveChildAssociation.bind(this)}
          onTextInputChange={this.onTextInputChange.bind(this)}
          onSetState={this.onSetState.bind(this)}
          {...componentProps}
        >
          <Modal.Actions
            className='edit-modal-actions'
          >
            <Button
              disabled={this.state.saving}
              onClick={this.onSave.bind(this)}
              primary
              size='medium'
              type='submit'
            >
              { this.props.t('Common.buttons.save') }
              { this.renderLoader() }
            </Button>
            <Button
              disabled={this.state.saving}
              inverted
              onClick={this.onClose.bind(this)}
              primary
              size='medium'
              type='button'
            >
              { this.props.t('Common.buttons.cancel') }
            </Button>
          </Modal.Actions>
        </WrappedComponent>
      );
    }

    /**
     * Renders the loading indicator.
     *
     * @returns {null|*}
     */
    renderLoader() {
      if (!this.state.saving) {
        return null;
      }

      return (
        <Loader
          active
          className='saving'
          inline
          size='tiny'
        />
      );
    }

    /**
     * Validates the form using the component props required attributes.
     *
     * @returns {boolean}
     */
    validateForm() {
      const validationErrors = [];

      // Custom validations
      if (componentProps && componentProps.validate) {
        _.extend(validationErrors, componentProps.validate(this.state.item));
      }

      // Validate required properties
      const required = (componentProps && componentProps.required) || [];

      _.each(required, (key) => {
        const value = this.state.item[key];

        let invalid;

        if (_.isNumber(value)) {
          invalid = _.isEmpty(value.toString());
        } else {
          invalid = _.isEmpty(value);
        }

        if (invalid) {
          _.extend(validationErrors, { [key]: this.props.t('EditModal.errors.required', { key }) });
        }
      });

      this.setState({ validationErrors });

      return _.keys(validationErrors).length === 0;
    }
  };
}

export default createEditModal;

export type ComponentProps = {
  children?: Component,
  errors: Array<string>,
  isError: (property: string) => boolean,
  isRequired: (property: string) => boolean,
  item: any,
  onAssociationInputChange: (idKey: string, valueKey: string, item: any) => void,
  onCheckboxInputChange: (key: string, value: any) => void,
  onDeleteChildAssociation: (association: string, child: any) => void,
  onMultiAddChildAssociations: (association: string, Array<any>) => void,
  onSaveChildAssociation: (association: string, child: any) => void,
  onSetState: (any) => void,
  onTextInputChange: (key: string, value: any) => void,
  t: () => void
};
