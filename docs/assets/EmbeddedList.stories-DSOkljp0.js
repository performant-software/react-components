var ye=Object.defineProperty;var fe=(a,e,n)=>e in a?ye(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n;var _=(a,e,n)=>(fe(a,typeof e!="symbol"?e+"":e,n),n);import{j as t}from"./jsx-runtime-BTCK_S7S.js";import{a as o}from"./chunk-WFFRPTHA-B2vgThZf.js";import{d as c}from"./index-kF-6VCSF.js";import{r as I}from"./index-CBqU2yxZ.js";import{B as he}from"./Button-Blq7Z6RX.js";import{i as p,S as A,C as ge}from"./Colors-DiV52Fwf.js";import{I as be}from"./Icon-2tEtgK8g.js";import{_ as u}from"./index-default-C_maRo4o.js";import{A as R}from"./AddModal-8so4BWij.js";import{E as we}from"./EditModal-CsfirwY4.js";import{T as N}from"./Table-Xx3vjhN9.js";import{u as ve}from"./uuid-BH6G0oTz.js";import{D as Ce}from"./DataTable-BFIwafI7.js";import{D as ke}from"./Draggable-KQRXc-DM.js";import{T as x}from"./TabbedModal-B2Adx6P0.js";import{u as s}from"./DragDrop-ryAVAQMJ.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./mapValues-CZh2vnSw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./pickBy-CU2rOOKe.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-Bu_b4Pek.js";import"./index-Cw1G72V2.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./debounce-Bq1aTuh-.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CckcRzoH.js";import"./Label-Cq1fb1cd.js";import"./ModernAutoControlledComponent-DJBWk5EW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CQoJOerW.js";import"./toFinite-KQ8KevIC.js";import"./forEach-CXlln0XP.js";import"./Dimmer-D_gwaesu.js";import"./Portal-DvhHJPzU.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DZGZymok.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-B4PnIEPz.js";import"./Modal-Bz2VEyQG.js";import"./index-BBpNyw-T.js";import"./_baseSet-6y0qliU9.js";import"./_baseAssignValue-izmKBXUH.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-Cyb9hIKi.js";import"./index.es30-tUyOUHRL.js";import"./iframe-BcGTk6aA.js";import"../sb-preview/runtime.js";import"./index.es3-CqJx98lw.js";import"./Message-3p6wyYpA.js";import"./Loader-CooidObp.js";import"./Toaster-C1YYqOUE.js";import"./Transition-DSFEXhCu.js";import"./filter-CVNi8iPS.js";import"./i18n-C8zWlANG.js";import"./i18next-Sc0HEOoc.js";import"./toPropertyKey-hKuLU48H.js";import"./defineProperty-CCxoMnQV.js";import"./inherits-D5wXBZoG.js";import"./createClass-D2z1h_eG.js";import"./getPrototypeOf-BYVhAdwF.js";import"./Checkbox-C9uAfnsM.js";import"./Popup-BP01NTlV.js";import"./Dropdown-Di2cPjwR.js";import"./without-BP-mqg2K.js";import"./isArrayLikeObject-CbXKTyfk.js";import"./deburr-CEfyoYOr.js";import"./List-j10WAbZn.js";import"./Confirm-Dw9rt56R.js";import"./Pagination-D0HmnRDL.js";import"./Menu-9i0apxqd.js";import"./Grid-Czr5owxQ.js";import"./Header-BJ3NNdPz.js";import"./DropdownButton-D3g-r0e9.js";import"./Form-fErk-qk_.js";import"./Input--hQVCRQV.js";import"./AssociatedDropdown-CMB7PUXu.js";import"./FuzzyDate-D4brsVbr.js";import"./DateInput-BO57_F9J.js";import"./ModalContext-Bu-D9kD-.js";import"./Trans-Bk6mzQm0.js";import"./objectWithoutProperties--RY0eV0u.js";import"./utils-Bq6oISwF.js";import"./useDrop-BRQoWSA5.js";import"./DndContext-B-2NJP7Z.js";import"./redux-C8f_Y06i.js";import"./objectSpread2-N4c0DWqo.js";import"./index.es22-BD0kU5QO.js";const De=".",q="ascending",j="descending";class S extends I.Component{constructor(e){super(e),this.state={sortColumn:null,sortDirection:null}}componentDidMount(){let e;this.props.defaultSort?e=u.findWhere(this.props.columns,{name:this.props.defaultSort}):e=u.find(this.props.columns,n=>n.sortable!==!1),e&&this.onColumnClick(e,this.props.defaultSortDirection)}getItems(){const{items:e}=this.props,{sortColumn:n,sortDirection:d}=this.state;return u.orderBy(u.filter(e,r=>!r._destroy),n,d)}onColumnClick(e,n=q){if(this.props.onDrag||e.sortable===!1)return;const d=e.name;let r=n||q;e.name===this.state.sortColumn&&(r=this.state.sortDirection===q?j:q),this.setState({sortColumn:d,sortDirection:r})}onDelete(e){return this.props.onDelete(e),Promise.resolve()}onSave(e){const n=e.uid?e.uid:ve();return this.props.onSave&&this.props.onSave({...e,uid:n}),Promise.resolve()}render(){return t.jsx(Ce,{...this.props,actions:this.props.actions,addButton:this.props.addButton,buttons:this.props.buttons,className:`embedded-list ${this.props.className?this.props.className:""}`,configurable:this.props.configurable,columns:this.props.columns,count:this.props.items.length,items:this.getItems(),modal:this.props.modal,onColumnClick:this.onColumnClick.bind(this),onCopy:this.props.onCopy,onDrag:this.props.onDrag,onDelete:this.onDelete.bind(this),onSave:this.onSave.bind(this),renderDeleteModal:this.props.renderDeleteModal,renderEmptyRow:this.props.renderEmptyRow,renderItem:this.renderItem.bind(this),sortColumn:this.state.sortColumn,sortDirection:this.state.sortDirection,tableProps:{celled:!0,sortable:!this.props.onDrag},selectable:this.props.selectable,onRowSelect:this.props.onRowSelect,selectedRows:this.props.selectedRows,showRecordCount:this.props.showRecordCount})}renderItem(e,n,d){if(this.props.onDrag){const r=e.id||e.uid;return t.jsx(ke,{id:r,index:n,item:e,onDrag:this.props.onDrag.bind(this),children:t.jsx(N.Row,{children:d})},r)}return t.jsx(N.Row,{children:d},n)}}_(S,"defaultProps");u.mixin({orderBy:(a,e,n)=>{if(!e)return a;const d=u.property(e.split(De));let r=u.sortBy(a,E=>d(E));return n===j&&(r=r.reverse()),r}});S.defaultProps={items:[],addButton:{location:"top"},buttons:[],className:"",configurable:!0,modal:void 0,onCopy:void 0,onDrag:void 0,onSave:()=>{},renderDeleteModal:void 0,renderEmptyRow:void 0};const i=S;S.__docgenInfo={description:`The <code>EmbeddedList</code> component can be used to display a collection of records that live within a parent
object. This is especially useful when the collection is to be saved at the same time as the parent.`,methods:[{name:"getItems",docblock:`Returns the sorted, filtered list of items.

@returns {*}`,modifiers:[],params:[],returns:{type:{name:"mixed"}},description:"Returns the sorted, filtered list of items."},{name:"onColumnClick",docblock:`Sorts the table by the passed column.

@param column`,modifiers:[],params:[{name:"column",optional:!1,type:{name:"signature",type:"object",raw:`{
  className?: string,
  hidden?: boolean,
  label?: string,
  name: string,
  render?: (item: any) => Element<any>,
  renderHeader?: (item: any) => Element<any>,
  resolve?: (item: any) => any,
  sortable: boolean
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!1}},{key:"renderHeader",value:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!1}},{key:"resolve",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!0}}]},alias:"Column"}},{name:"direction",optional:!0}],returns:null,description:"Sorts the table by the passed column."},{name:"onDelete",docblock:`Deletes the passed item. This function returns a promise so that calls can be chained together.

@param item

@returns {Promise}`,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}}],returns:{type:{name:"Promise"}},description:"Deletes the passed item. This function returns a promise so that calls can be chained together."},{name:"onSave",docblock:`Saves the passed item, resets the state, and reloads the data. This function returns a promise so that calls can
be chained together.

@param item

@returns {Promise}`,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}}],returns:{type:{name:"Promise"}},description:`Saves the passed item, resets the state, and reloads the data. This function returns a promise so that calls can
be chained together.`},{name:"renderItem",docblock:`Renders the passed item. This function should be used if the table row is draggable.

@param item
@param index
@param children

@returns {*}`,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}},{name:"index",optional:!1,type:{name:"number"}},{name:"children",optional:!1,type:{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>",alias:"ComponentType"}}],returns:{type:{name:"mixed"}},description:"Renders the passed item. This function should be used if the table row is draggable."}],displayName:"EmbeddedList",props:{actions:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  accept: (item: any) => boolean,
  color?: string,
  icon?: string,
  name: string,
  onClick?: (item: any) => void,
  popup: {
    content: string,
    title: string
  },
  render?: (item: any, index: number) => Element<any>,
  title?: string
}`,signature:{properties:[{key:"accept",value:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}},required:!0}},{key:"color",value:{name:"string",required:!1}},{key:"icon",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}},required:!1}},{key:"popup",value:{name:"signature",type:"object",raw:`{
  content: string,
  title: string
}`,signature:{properties:[{key:"content",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}}]},required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any, index: number) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}},{name:"index",type:{name:"number"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!1}},{key:"title",value:{name:"string",required:!1}}]}}],raw:"Array<Action>"},description:`A list of actions to render for each element in the row. Actions with the names "edit" and "delete" will be
handled specially by the <code>List</code> higher-order component.`},addButton:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  basic: boolean,
  color: string,
  content?: string,
  inverted?: boolean,
  location: string,
  onClick?: () => void,
  secondary?: boolean
}`,signature:{properties:[{key:"basic",value:{name:"boolean",required:!0}},{key:"color",value:{name:"string",required:!0}},{key:"content",value:{name:"string",required:!1}},{key:"inverted",value:{name:"boolean",required:!1}},{key:"location",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"secondary",value:{name:"boolean",required:!1}}]}},description:`If provided, a button will display in the list header allowing the addition of items to the list. When clicked,
the <code>modal</code> prop will be rendered.`,defaultValue:{value:`{
  location: 'top'
}`,computed:!1}},buttons:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  accept?: () => boolean,
  render: (index?: number) => Element<any>
}`,signature:{properties:[{key:"accept",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(index?: number) => Element<any>",signature:{arguments:[{name:"index",type:{name:"number"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!0}}]}}],raw:"Array<ListButton>"},description:`A list of arbitrary buttons to the display in the list header. All actions will be handled by the consuming
component.
<br />
<br />

In addition to the props listed here for each button, buttons will also accept any of the Semantic UI
<a href="https://react.semantic-ui.com/elements/button/" target="_blank">Button</a> props.`,defaultValue:{value:"[]",computed:!1}},count:{required:!1,flowType:{name:"number"},description:"The number of total records in the list (not just the current page)."},className:{required:!1,flowType:{name:"string"},description:"CSS class name to append to the <code>div</code> container.",defaultValue:{value:"''",computed:!1}},csvExportButton:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  basic: boolean,
  color: string,
  location: string,
  onClick?: () => void
}`,signature:{properties:[{key:"basic",value:{name:"boolean",required:!0}},{key:"color",value:{name:"string",required:!0}},{key:"location",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},description:"If provided, a CSV export button will be rendered in the list header."},deleteButton:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  color: string,
  location: string,
  onClick?: () => void
}`,signature:{properties:[{key:"color",value:{name:"string",required:!0}},{key:"location",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},description:'If provided, a "delete all" button will be rendered in the list header.'},filters:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  active: boolean,
  component: Component<{}>,
  props?: any,
  state?: any,
  onChange: (params: any) => Promise<any>,
  showLabels?: boolean
}`,signature:{properties:[{key:"active",value:{name:"boolean",required:!0}},{key:"component",value:{name:"Component",elements:[{name:"signature",type:"object",raw:"{}",signature:{properties:[]}}],raw:"Component<{}>",required:!0}},{key:"props",value:{name:"any",required:!1}},{key:"state",value:{name:"any",required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(params: any) => Promise<any>",signature:{arguments:[{name:"params",type:{name:"any"}}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}},required:!0}},{key:"showLabels",value:{name:"boolean",required:!1}}]}},description:`If provided, the passed <code>component</code> will be rendered when the filter button is clicked.
<br />
<br />

Values passed in the <code>defaults</code> and <code>props</code> properties will be made available in the
passed component.
<br />
<br />

The <code>onChange</code> callback will fire when the filters are modified. This action will also reload the list,
passing the new filters the <code>onLoad</code> callback.`},modal:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  component: ComponentType<any>,
  props: any,
  state: any
}`,signature:{properties:[{key:"component",value:{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>",required:!0}},{key:"props",value:{name:"any",required:!0}},{key:"state",value:{name:"any",required:!0}}]}},description:'If provided, the passed modal will be rendered when the "add" button is clicked.',defaultValue:{value:"undefined",computed:!0}},onCopy:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}}},description:`If provided, this callback is fired when the "copy" action is clicked for an item. The consuming component
should generate a copy of the selected item and return that value. The return value is then set at the
current item in the edit modal.`,defaultValue:{value:"undefined",computed:!0}},onDelete:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:'Callback fired when the "delete" action is clicked for an item.'},onDeleteAll:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:"Callback fired when the delete all button is clicked. This prop expects a Promise as the return value."},onPageChange:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the page is changed via the pagination component."},onPerPageChange:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the per page value is changed."},onSave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => Promise<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:`Callback fired when the save button is clicked in the add/edit modal. This function expects a Promise as the
return value.`,defaultValue:{value:"() => {}",computed:!1}},page:{required:!1,flowType:{name:"number"},description:"Current page number."},pages:{required:!1,flowType:{name:"number"},description:"Number of pages in the list."},perPage:{required:!1,flowType:{name:"number"},description:"The number of records to display per page."},perPageOptions:{required:!1,flowType:{name:"Array",elements:[{name:"number"}],raw:"Array<number>"},description:"The options to display in the dropdown for the per page selector."},renderDeleteModal:{required:!1,flowType:{name:"signature",type:"function",raw:"({ selectedItem: any, onCancel: () => void, onConfirm: () => void }) => Element<any>",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{ selectedItem: any, onCancel: () => void, onConfirm: () => void }",signature:{properties:[{key:"selectedItem",value:{name:"any",required:!0}},{key:"onCancel",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onConfirm",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:'Custom render function for the modal that appears on the "delete" action.',defaultValue:{value:"undefined",computed:!0}},renderListHeader:{required:!1,flowType:{name:"signature",type:"function",raw:"() => ?Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>",nullable:!0}}},description:"If provided, this function will return a JSX element that will prepend to the list header."},renderSearch:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:"If provided, this function will return a JSX element that will replace the default search input."},searchable:{required:!1,flowType:{name:"boolean"},description:"Returns true if the renderSearch prop should be used to render a search input element."},selectable:{required:!1,flowType:{name:"boolean"},description:`If set to <code>true</code>, checkboxes will render as the first table column, allowing each row to be selectable.
The consuming component is responsible for tracking the selected items.`},showRecordCount:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, the total number of records will display in the list header."},columns:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  className?: string,
  hidden?: boolean,
  label?: string,
  name: string,
  render?: (item: any) => Element<any>,
  renderHeader?: (item: any) => Element<any>,
  resolve?: (item: any) => any,
  sortable: boolean
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!1}},{key:"renderHeader",value:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!1}},{key:"resolve",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!0}}]}}],raw:"Array<Column>"},description:`An array of columns to display within the <code>Table</code>.
<br />
<br />

If only a <code>name</code> attribute is provided, the value for each record will be pulled from the item property
matching that name.
<br />
<br />

If a <code>resolve</code> callback is provided, the item will be passed to the function and the return value will
display as the property value.
<br />
<br />

If a <code>render</code> callback is provided, the item will be passed to the function and the return JSX
will display as the property value.`},configurable:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, columns can be shown/hidden by the user.",defaultValue:{value:"true",computed:!1}},expandableRows:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, the rows of the table can be expanded and collapsed."},expandPanel:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any, activePanel: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}},{name:"activePanel",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:"Function that returns JSX to render when the row for the passed item is expanded."},isRowSelected:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}}},description:"Callback returning <code>true</code> if the row for the passed item is selected."},items:{required:!1,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>",nullable:!0},description:"An array of objects to render as rows in the list.",defaultValue:{value:"[]",computed:!1}},loading:{required:!1,flowType:{name:"boolean"},description:"Set to <code>true</code> if the list is currently loading data. If true, a loading indicator will display."},onClearSelected:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback to clear the selected set of records."},onColumnClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(column: Column) => void",signature:{arguments:[{name:"column",type:{name:"Column"}}],return:{name:"void"}}},description:"Callback fired when the passed column is clicked."},onRowSelect:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any)=> void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:`Callback fired when the passed item is selected. This callback is <i>only</i> fired if the <code>selectable</code>
prop is passed as <code>true</code>.`},onSelectAll:{required:!1,flowType:{name:"signature",type:"function",raw:"(items: Array<any>) => void",signature:{arguments:[{name:"items",type:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"}}],return:{name:"void"}}},description:"Callback fired when the select all checkbox in the table header is clicked."},renderEmptyMessage:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:"A function that returns a JSX element to render when the list is empty."},renderEmptyRow:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`A function that returns a custom JSX element to render when the list is empty. This element will replace the
entire single row of the table.`,defaultValue:{value:"undefined",computed:!0}},renderItem:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any, index: number, children?: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}},{name:"index",type:{name:"number"}},{name:"children",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:`A function that returns a custom JSX element to render for the passed item. This element will replace the entire
table row.`},sortColumn:{required:!1,flowType:{name:"string"},description:"Name of the current sort column."},sortDirection:{required:!1,flowType:{name:"string"},description:"Current sort direction (ascending or descending)."},tableProps:{required:!1,flowType:{name:"any"},description:`Customization props for the
<a target="_blank" href="https://react.semantic-ui.com/collections/table/"><code>Table</code></a>
component.`},defaultSort:{required:!1,flowType:{name:"string"},description:"The name of the default sort column."},defaultSortDirection:{required:!1,flowType:{name:"string"},description:"The default direction to sort the list (ascending vs. descending)."},onDrag:{required:!1,flowType:{name:"signature",type:"function",raw:"(dragIndex: number, hoverIndex: number) => void",signature:{arguments:[{name:"dragIndex",type:{name:"number"}},{name:"hoverIndex",type:{name:"number"}}],return:{name:"void"}}},description:"Callback fired when a table row is dragged.",defaultValue:{value:"undefined",computed:!0}}}};const pt={title:"Components/Semantic UI/EmbeddedList",component:i},l=[{name:"edit"},{name:"copy"},{name:"delete"}],m=[{name:"movie",label:"Movie"},{name:"genre",label:"Genre"},{name:"date",label:"Date"},{name:"country",label:"Country"},{name:"gross",label:"Gross"}],y=s(()=>t.jsx(i,{actions:l,onDelete:o("delete"),columns:m,items:p})),f=s(()=>t.jsx(i,{actions:l,addButton:{location:c.optionsKnob("Location",{Bottom:"bottom",Top:"top"},"top",{display:"inline-radio"}),color:c.optionsKnob("Colors",A,"gray",{display:"inline-radio"})},onDelete:o("delete"),columns:m,items:p,modal:{component:R}})),h=s(()=>t.jsx(i,{actions:l,columns:m,defaultSort:"country",defaultSortDirection:j,onDelete:o("delete"),items:p})),g=s(()=>{const[a,e]=I.useState(p);return t.jsx(i,{actions:l,onDelete:o("delete"),columns:[{name:"drag-drop",label:"",render:()=>t.jsx("div",{style:{textAlign:"center"},children:t.jsx(be,{name:"bars"})})},...m],items:a,onDrag:(n,d)=>{const r=[...a],E=r[n];r.splice(n,1),r.splice(d,0,E),e(r)}})}),b=s(()=>t.jsx(i,{actions:l,onDelete:o("delete"),columns:m,items:[]})),w=s(()=>t.jsx(i,{actions:l,addButton:{location:c.optionsKnob("Location",{Bottom:"bottom",Top:"top"},"top",{display:"inline-radio"}),color:c.optionsKnob("Colors",A,"gray",{display:"inline-radio"})},onDelete:o("delete"),columns:m,items:[],modal:{component:R}})),v=s(()=>t.jsx(i,{actions:l,onDelete:o("delete"),columns:u.map(m,a=>({...a,sortable:!1})),items:p})),C=s(()=>t.jsx(i,{actions:l,onDelete:o("delete"),columns:m,items:p,showRecordCount:!0})),k=s(()=>t.jsx(i,{selectable:!0,isRowSelected:()=>!1,onRowSelect:o("row selected"),selectedRows:[{id:5},{id:6},{id:7}],actions:l,onDelete:o("delete"),columns:m,items:p})),Te=a=>t.jsxs(x,{centered:!1,header:"This is a Test",inlineTabs:!1,open:a.open,children:[t.jsx(x.Tab,{name:"Tab 1",children:t.jsx(i,{actions:l,addButton:{location:c.optionsKnob("Location",{Bottom:"bottom",Top:"top"},"top",{display:"inline-radio"}),color:c.optionsKnob("Colors",A,"gray",{display:"inline-radio"})},onDelete:o("delete"),columns:m,items:p,modal:{component:R}})}),u.times(20,e=>t.jsx(x.Tab,{name:`Tab ${e+2}`,children:`Tab ${e+2}`},e+2)),a.children]}),D=s(()=>{const[a,e]=I.useState(!1);return t.jsxs(ge,{children:[t.jsx(he,{content:"Open Modal",icon:"plus",onClick:()=>e(!0)}),t.jsx(we,{component:Te,open:a,onClose:()=>e(!1),onSave:()=>new Promise(n=>n(e(!1)))})]})}),T=s(()=>t.jsx(i,{actions:l,configurable:!1,onDelete:o("delete"),columns:m,items:p,showRecordCount:!0}));y.__docgenInfo={description:"",methods:[],displayName:"Default"};f.__docgenInfo={description:"",methods:[],displayName:"AddButton"};h.__docgenInfo={description:"",methods:[],displayName:"DefaultSort"};g.__docgenInfo={description:"",methods:[],displayName:"DragAndDropRows"};b.__docgenInfo={description:"",methods:[],displayName:"Empty"};w.__docgenInfo={description:"",methods:[],displayName:"EmptyAddButton"};v.__docgenInfo={description:"",methods:[],displayName:"NoSortableColumns"};C.__docgenInfo={description:"",methods:[],displayName:"RecordCount"};k.__docgenInfo={description:"",methods:[],displayName:"Selectable"};D.__docgenInfo={description:"",methods:[],displayName:"TabbedModalConfig"};T.__docgenInfo={description:"",methods:[],displayName:"NoColumnSelector"};var P,L,B;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:"useDragDrop(() => <EmbeddedList actions={actions} onDelete={action('delete')} columns={columns} items={items} />)",...(B=(L=y.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var M,V,J;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`useDragDrop(() => <EmbeddedList actions={actions} addButton={{
  location: options('Location', {
    Bottom: 'bottom',
    Top: 'top'
  }, 'top', {
    display: 'inline-radio'
  }),
  color: options('Colors', SemanticColors, 'gray', {
    display: 'inline-radio'
  })
}} onDelete={action('delete')} columns={columns} items={items} modal={{
  component: AddModal
}} />)`,...(J=(V=f.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var O,X,H;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:"useDragDrop(() => <EmbeddedList actions={actions} columns={columns} defaultSort='country' defaultSortDirection={SORT_DESCENDING} onDelete={action('delete')} items={items} />)",...(H=(X=h.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};var K,G,$;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`useDragDrop(() => {
  const [list, setList] = useState(items);
  return <EmbeddedList actions={actions} onDelete={action('delete')} columns={[{
    name: 'drag-drop',
    label: '',
    render: () => <div style={{
      textAlign: 'center'
    }}>
            <Icon name='bars' />
          </div>
  }, ...columns]} items={list} onDrag={(dragIndex, hoverIndex) => {
    const temp = [...list];
    const item = temp[dragIndex];
    temp.splice(dragIndex, 1);
    temp.splice(hoverIndex, 0, item);
    setList(temp);
  }} />;
})`,...($=(G=g.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var U,W,z;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:"useDragDrop(() => <EmbeddedList actions={actions} onDelete={action('delete')} columns={columns} items={[]} />)",...(z=(W=b.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var F,Q,Y;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`useDragDrop(() => <EmbeddedList actions={actions} addButton={{
  location: options('Location', {
    Bottom: 'bottom',
    Top: 'top'
  }, 'top', {
    display: 'inline-radio'
  }),
  color: options('Colors', SemanticColors, 'gray', {
    display: 'inline-radio'
  })
}} onDelete={action('delete')} columns={columns} items={[]} modal={{
  component: AddModal
}} />)`,...(Y=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,ne;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`useDragDrop(() => <EmbeddedList actions={actions} onDelete={action('delete')} columns={_.map(columns, c => ({
  ...c,
  sortable: false
}))} items={items} />)`,...(ne=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ae,re;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:"useDragDrop(() => <EmbeddedList actions={actions} onDelete={action('delete')} columns={columns} items={items} showRecordCount />)",...(re=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,ie,se;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`useDragDrop(() => <EmbeddedList selectable isRowSelected={() => false} onRowSelect={action('row selected')} selectedRows={[{
  id: 5
}, {
  id: 6
}, {
  id: 7
}]} actions={actions} onDelete={action('delete')} columns={columns} items={items} />)`,...(se=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var le,me,de;D.parameters={...D.parameters,docs:{...(le=D.parameters)==null?void 0:le.docs,source:{originalSource:`useDragDrop(() => {
  const [showModal, setShowModal] = useState(false);
  return <Container>
      <Button content='Open Modal' icon='plus' onClick={() => setShowModal(true)} />
      <EditModal component={EmbeddedListModal} open={showModal} onClose={() => setShowModal(false)} onSave={() => new Promise(resolve => resolve(setShowModal(false)))} />
    </Container>;
})`,...(de=(me=D.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ue,pe,ce;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:"useDragDrop(() => <EmbeddedList actions={actions} configurable={false} onDelete={action('delete')} columns={columns} items={items} showRecordCount />)",...(ce=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};const ct=["Default","AddButton","DefaultSort","DragAndDropRows","Empty","EmptyAddButton","NoSortableColumns","RecordCount","Selectable","TabbedModalConfig","NoColumnSelector"];export{f as AddButton,y as Default,h as DefaultSort,g as DragAndDropRows,b as Empty,w as EmptyAddButton,T as NoColumnSelector,v as NoSortableColumns,C as RecordCount,k as Selectable,D as TabbedModalConfig,ct as __namedExportsOrder,pt as default};
