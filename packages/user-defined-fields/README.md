#UserDefinedFields
This package is designed to be used with the [user_defined_fields](https://github.com/performant-software/user-defined-fields) Rails gem. The idea is to allow users to define what type of metadata they want to collection about specific models and use these components to add, remove, and modify the configuration of the fields.

## Installation

```bash
yarn add @performant-software/user-defined-fields
```

or

```bash
npm install @performant-software/user-defined-fields
```

## Components
To load user defined fields directly from the API endpoint, use the `UserDefinedFieldsList` component.

```jsx
<UserDefinedFieldsList />
```

To add the user defined fields from nested attributes of a parent record, use the `UserDefinedFieldsEmbeddedList` component.

```jsx
<UserDefinedFieldsEmbeddedList
  items={props.item.user_defined_fields}
  onDelete={props.onDeleteChildAssociation.bind(this, 'user_defined_fields')}
  onSave={props.onSaveChildAssociation.bind(this, 'user_defined_fields')}
/>
```

## Services

```javascript
// Fetch the list of user defined fields
UserDefinedFieldsService.fetchAll(params)

// Fetch a single user defined field
UserDefinedFieldsService.fetchOne(id)

// Save a user defined field
UserDefinedFieldsService.save(udf)

// Delete a user defined field
UserDefinedFieldsService.delete(udf)

// Fetch a list of tables to which user defined fields can be added
UserDefinedFieldsService.fetchTables()

// Fetch a list of allowed data types
UserDefinedFieldsService.fetchDataTypes()
```
