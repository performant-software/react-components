// @flow

import React, { Component, type ComponentType, type Element } from 'react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import ObjectUtils from '../utils/Object';

type Props = {
  children?: Element<any>,
  defaults?: any,
  item?: any,
  onClose: () => void,
  onInitialize?: (id: number) => Promise<any>,
  onSave: (item: any) => Promise<any>,
  required?: Array<string>,
  resolveValidationError?: ({ error: string, item: any, status: number, key: string }) => Array<string>,
  validate?: (item: any) => Array<string>
};

type State = {
  item: any,
  loading: boolean,
  originalItem: any,
  saving: boolean,
  validationErrors: any
};

const ERROR_EMPTY = 'can\'t be blank';
const ERROR_UNIQUE = 'has already been taken';

const useEditContainer = (WrappedComponent: ComponentType<any>) => (
  class extends Component<Props, State> {
    /**
     * Constructs a new EditProvider component.
     *
     * @param props
     */
    constructor(props: Props) {
      super(props);

      const item = _.defaults(props.item || {}, props.defaults || {});

      this.state = {
        item,
        loading: false,
        originalItem: item,
        saving: false,
        validationErrors: []
      };
    }

    /**
     * Loads the item from the API if an onInitialize prop is specified.
     */
    componentDidMount() {
      if (this.props.onInitialize && this.props.item && this.props.item.id) {
        this.setState({ loading: true }, () => {
          if (this.props.onInitialize && this.props.item) {
            this.props
              .onInitialize(this.props.item.id)
              .then((item) => this.setState({ item, originalItem: item, loading: false }));
          }
        });
      }
    }

    /**
     * Resets the item on the state.
     *
     * @param prevProps
     */
    componentDidUpdate(prevProps: Props) {
      if (prevProps.item !== this.props.item) {
        this.setState({ item: this.props.item, originalItem: this.props.item });
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
    isChild(a: any, b: any) {
      return (a.uid && b.uid && a.uid === b.uid) || (a.id && b.id && a.id === b.id);
    }

    /**
     * Returns true if the passed property is required.
     *
     * @param prop
     *
     * @returns {*|boolean}
     */
    isRequired(prop: string) {
      return this.props.required && _.contains(this.props.required, prop);
    }

    /**
     * Returns true if the passed property is listed in the hash of validation errors.
     *
     * @param prop
     *
     * @returns {*|boolean}
     */
    isError(prop: string) {
      return _.has(this.state.validationErrors, prop);
    }

    /**
     * Clears the validation errors for the passed keys.
     *
     * @param keys
     */
    onClearValidationError(...keys: string) {
      this.setState((state) => ({ validationErrors: _.omit(state.validationErrors, keys) }));
    }

    /**
     * Closes the provider.
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
    onCreateChildAssociation(association: string, child: any) {
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
    onDeleteChildAssociation(association: string, child: any) {
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
    onError({ response: { data: { errors = {} }, status } }: any) {
      const validationErrors = {};

      _.each(Object.keys(errors), (key) => {
        const fieldErrors = errors[key];
        const value = this.state.item[key];

        _.each(fieldErrors, (error) => {
          if (error === ERROR_UNIQUE) {
            _.extend(validationErrors, { [key]: i18n.t('EditContainer.errors.unique', { key, value }) });
          } else if (error === ERROR_EMPTY) {
            _.extend(validationErrors, { [key]: i18n.t('EditContainer.errors.required', { key }) });
          } else if (this.props.resolveValidationError) {
            _.extend(validationErrors, this.props.resolveValidationError({
              key,
              error,
              status,
              item: this.state.item
            }));
          }
        });
      });

      if (status === 400 && _.isEmpty(validationErrors)) {
        _.extend(validationErrors, { error: i18n.t('EditContainer.errors.general') });
      } else if (status === 500 && _.isEmpty(validationErrors)) {
        _.extend(validationErrors, { error: i18n.t('EditContainer.errors.system') });
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
    onMarkChildAssociationForDelete(association: string, child: any) {
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
    onMultiAddChildAssociations(association: string, children: any) {
      const items = this.state.item[association];

      // Add new children or update existing children
      _.each(children, this.onSaveChildAssociation.bind(this, association));

      // Remove any children that no longer exist
      const childrenToRemove = _.filter(items, (item) => !_.find(children, this.isChild.bind(this, item)));
      _.each(childrenToRemove, this.onDeleteChildAssociation.bind(this, association));
    }

    /**
     * Removes the passed child record from the passed association. This function is called if the child record does
     * not have an ID value.
     *
     * @param association
     * @param child
     */
    onRemoveChildAssociation(association: string, child: any) {
      this.setState((state) => ({
        item: {
          ...state.item,
          [association]: _.filter(state.item[association] || [],
            (c) => c !== child)
        }
      }));
    }

    /**
     * Resets the item on the state to the default item and calls the onReset prop.
     */
    onReset() {
      const item = this.props.defaults || {};

      this.setState({
        item,
        originalItem: item
      });
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
          .catch(this.onError.bind(this))
          .finally(() => this.setState({ saving: false }));
      });
    }

    /**
     * Adds the passed child record to the passed association.
     *
     * @param association
     * @param child
     */
    onSaveChildAssociation(association: string, child: any) {
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
    onUpdateChildAssociation(association: string, child: any) {
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
    onAssociationInputChange(idKey: string, valueKey: string, record: any = {}) {
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
    onCheckboxInputChange(key: string) {
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
     * @param props
     */
    onSetState(props: any) {
      this.setState((state) => ({
        item: {
          ...state.item,
          ...props
        },
        validationErrors: _.omit(state.validationErrors, _.keys(props))
      }));
    }

    /**
     * Sets the text input property for the passed key/value.
     *
     * @param key
     * @param e
     * @param value
     */
    onTextInputChange(key: string, e: Event, { value }: any) {
      this.setState((state) => ({
        item: {
          ...state.item,
          [key]: value
        },
        validationErrors: _.omit(state.validationErrors, key)
      }));
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          dirty={!!(this.state.item.id && !ObjectUtils.isEqual(this.state.item, this.state.originalItem))}
          errors={_.values(this.state.validationErrors)}
          isError={this.isError.bind(this)}
          isRequired={this.isRequired.bind(this)}
          item={this.state.item}
          loading={this.state.loading}
          onAssociationInputChange={this.onAssociationInputChange.bind(this)}
          onCheckboxInputChange={this.onCheckboxInputChange.bind(this)}
          onClearValidationError={this.onClearValidationError.bind(this)}
          onDeleteChildAssociation={this.onDeleteChildAssociation.bind(this)}
          onMultiAddChildAssociations={this.onMultiAddChildAssociations.bind(this)}
          onReset={this.onReset.bind(this)}
          onSave={this.onSave.bind(this)}
          onSaveChildAssociation={this.onSaveChildAssociation.bind(this)}
          onTextInputChange={this.onTextInputChange.bind(this)}
          onSetState={this.onSetState.bind(this)}
          saving={this.state.saving}
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
      if (this.props.validate) {
        _.extend(validationErrors, this.props.validate(this.state.item));
      }

      // Validate required properties
      const required = this.props.required || [];

      _.each(required, (key) => {
        const value = this.state.item[key];

        let invalid;

        if (_.isNumber(value)) {
          invalid = _.isEmpty(value.toString());
        } else {
          invalid = _.isEmpty(value);
        }

        if (invalid) {
          _.extend(validationErrors, { [key]: i18n.t('EditContainer.errors.required', { key }) });
        }
      });

      this.setState({ validationErrors });

      return _.keys(validationErrors).length === 0;
    }
  }
);

export default useEditContainer;

export type EditContainerProps = {
  children: Element<any>,
  dirty: boolean,
  errors: Array<string>,
  isError: (property: string) => boolean,
  isRequired: (property: string) => boolean,
  item: any,
  loading: boolean,
  onAssociationInputChange: (idKey: string, valueKey: string, item: any) => void,
  onCheckboxInputChange: (key: string, value: any) => void,
  onDeleteChildAssociation: (association: string, child: any) => void,
  onMultiAddChildAssociations: (association: string, Array<any>) => void,
  onReset: () => void,
  onSave: () => void,
  onSaveChildAssociation: (association: string, child: any) => void,
  onSetState: (any) => void,
  onTextInputChange: (key: string, e: ?Event, value: any) => void,
  saving: boolean
};
