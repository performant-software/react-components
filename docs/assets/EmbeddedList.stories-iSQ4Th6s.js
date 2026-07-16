import{r as E,j as n}from"./iframe-9irgAvQM.js";import{B as R}from"./Button-CT5A04lk.js";import{i as u,C as j}from"./Movies-Bsg2YkUi.js";import{I as N}from"./Icon-hoX6viib.js";import{_ as A}from"./index-default-B8-H6N8J.js";import{A as x}from"./AddModal-D5gZhGTr.js";import{E as P}from"./EditModal-CAXRXkef.js";import{T as _}from"./Table-MBI2nmfb.js";import{_ as c}from"./index-default-C0I3bBxV.js";import{D as M}from"./DataTable-CMHBR1Ug.js";import{D as L}from"./Draggable-Dwf7juzb.js";import{v as B}from"./v4-BKrj-4V8.js";import{T as S}from"./TabbedModal-Bucdt_9q.js";import{u as s}from"./DragDrop-Be2BaQos.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-B3j8MpfX.js";import"./_getPrototype-dFVwFHqx.js";import"./Label-BDZ4-WWM.js";import"./ModernAutoControlledComponent-Bq3xeUHM.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-D4SRuY7b.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-CjzEQxAr.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-D3YY89iK.js";import"./Portal-4G6wzeI0.js";import"./keyboardKey-CflPe1Mq.js";import"./map-BktdIuwH.js";import"./Modal-_HCkr1vD.js";import"./index-D164Jk9J.js";import"./_baseSet-BTzSRu4I.js";import"./_assignValue-wlBxhqFj.js";import"./_baseAssignValue-yJv1-bft.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-CIv_nSFx.js";import"./index-gb7pV1wy.js";import"./index.es28-CnUG4XPM.js";import"./index.es3-CJ6x--rx.js";import"./index.es33-2y7fbau-.js";import"./Message-Tyh_gI54.js";import"./Loader-PNva3vY8.js";import"./Toaster-C6Z_tXMY.js";import"./Transition-VLOo_lIj.js";import"./filter-CaQVteFz.js";import"./i18n-C0aeT7bv.js";import"./i18next-eNuDfwAU.js";import"./Checkbox-CLElxbO9.js";import"./Popup-BxNBhPI7.js";import"./createClass-CGi6Kyeu.js";import"./toPropertyKey-BdisF6oo.js";import"./Dropdown-BmhH6S7G.js";import"./without-izabwEXA.js";import"./isArrayLikeObject-DSLl7ti9.js";import"./deburr-BdoeTXR8.js";import"./isEqual-mHuJTF3G.js";import"./DataList-CK9F-2I-.js";import"./index.es35-NGGuPWEW.js";import"./Input-BIKd_Cu-.js";import"./List-CqtZy-T0.js";import"./Confirm-BtK36ydw.js";import"./Pagination-ChaEEq9o.js";import"./_isIterateeCall-CnbN5PRK.js";import"./Menu-D_h_w9d9.js";import"./Grid-CBOktbmZ.js";import"./Header-DGLtOBz7.js";import"./DropdownButton-0TX73-7Y.js";import"./index.es24-BxCSri79.js";import"./Form-DW2EVKir.js";import"./AssociatedDropdown-DMXGVTXL.js";import"./FuzzyDate-F4zMCZBD.js";import"./DateInput-CkjBYVC9.js";import"./Trans-Dc0ylrhE.js";import"./context-C8DwadCo.js";import"./useDrop-CJmIVG1_.js";import"./index-CIiYFd80.js";import"./index.es26-G2hiRwnA.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";const H=".",D="ascending",I="descending";class r extends E.Component{static defaultProps;constructor(e){super(e),this.state={sortColumn:null,sortDirection:null}}componentDidMount(){let e;this.props.defaultSort?e=c.findWhere(this.props.columns,{name:this.props.defaultSort}):e=c.find(this.props.columns,t=>t.sortable!==!1),e&&this.onColumnClick(e,this.props.defaultSortDirection)}getItems(){const{items:e}=this.props,{sortColumn:t,sortDirection:d}=this.state;return c.orderBy(c.filter(e,a=>!a._destroy),t,d)}onColumnClick(e,t=D){if(this.props.onDrag||e.sortable===!1)return;const d=e.name;let a=t||D;e.name===this.state.sortColumn&&(a=this.state.sortDirection===D?I:D),this.setState({sortColumn:d,sortDirection:a})}onDelete(e){return this.props.onDelete(e),Promise.resolve()}onSave(e){const t=e.uid?e.uid:B();return this.props.onSave&&this.props.onSave({...e,uid:t}),Promise.resolve()}render(){return n.jsx(M,{...this.props,actions:this.props.actions,addButton:this.props.addButton,buttons:this.props.buttons,className:`embedded-list ${this.props.className?this.props.className:""}`,configurable:this.props.configurable,columns:this.props.columns,count:this.props.items.length,items:this.getItems(),modal:this.props.modal,onColumnClick:this.onColumnClick.bind(this),onCopy:this.props.onCopy,onDrag:this.props.onDrag,onDelete:this.onDelete.bind(this),onSave:this.onSave.bind(this),renderDeleteModal:this.props.renderDeleteModal,renderEmptyRow:this.props.renderEmptyRow,renderItem:this.renderItem.bind(this),sortColumn:this.state.sortColumn,sortDirection:this.state.sortDirection,tableProps:{celled:!0,sortable:!this.props.onDrag,...this.props.tableProps||{}},selectable:this.props.selectable,onRowSelect:this.props.onRowSelect,selectedRows:this.props.selectedRows,showRecordCount:this.props.showRecordCount})}renderItem(e,t,d){if(this.props.onDrag){const a=e.id||e.uid;return n.jsx(L,{id:a,index:t,item:e,onDrag:this.props.onDrag.bind(this),children:n.jsx(_.Row,{children:d})},a)}return n.jsx(_.Row,{children:d},t)}}c.mixin({orderBy:(o,e,t)=>{if(!e)return o;const d=c.property(e.split(H));let a=c.sortBy(o,T=>d(T));return t===I&&(a=a.reverse()),a}});r.defaultProps={items:[],addButton:{location:"top"},buttons:[],className:"",configurable:!0,modal:void 0,onCopy:void 0,onDrag:void 0,onSave:()=>{},renderDeleteModal:void 0,renderEmptyRow:void 0};r.__docgenInfo={description:`The <code>EmbeddedList</code> component can be used to display a collection of records that live within a parent
object. This is especially useful when the collection is to be saved at the same time as the parent.`,methods:[{name:"getItems",docblock:`Returns the sorted, filtered list of items.

@returns {*}`,modifiers:[],params:[],returns:{type:{name:"mixed"}},description:"Returns the sorted, filtered list of items."},{name:"onColumnClick",docblock:`Sorts the table by the passed column.

@param column`,modifiers:[],params:[{name:"column",optional:!1,type:{name:"signature",type:"object",raw:`{
  className?: string,
  hidden?: boolean,
  label?: string,
  name: string,
  onHide?: (item: any) => void,
  onShow?: (item: any) => void,
  render?: (item: any) => Element<any>,
  renderHeader?: (item: any) => Element<any>,
  resolve?: (item: any) => any,
  sortable: boolean
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"onHide",value:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}},required:!1}},{key:"onShow",value:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}},required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!1}},{key:"renderHeader",value:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!1}},{key:"resolve",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!0}}]},alias:"Column"}},{name:"direction",optional:!0}],returns:null,description:"Sorts the table by the passed column."},{name:"onDelete",docblock:`Deletes the passed item. This function returns a promise so that calls can be chained together.

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
  as: ComponentType,
  asProps: () => any,
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
}`,signature:{properties:[{key:"accept",value:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}},required:!0}},{key:"as",value:{name:"ComponentType",required:!0}},{key:"asProps",value:{name:"signature",type:"function",raw:"() => any",signature:{arguments:[],return:{name:"any"}},required:!0}},{key:"color",value:{name:"string",required:!1}},{key:"icon",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}},required:!1}},{key:"popup",value:{name:"signature",type:"object",raw:`{
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
  onHide?: (item: any) => void,
  onShow?: (item: any) => void,
  render?: (item: any) => Element<any>,
  renderHeader?: (item: any) => Element<any>,
  resolve?: (item: any) => any,
  sortable: boolean
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"onHide",value:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}},required:!1}},{key:"onShow",value:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}},required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!1}},{key:"renderHeader",value:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!1}},{key:"resolve",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!0}}]}}],raw:"Array<Column>"},description:`An array of columns to display within the <code>Table</code>.
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
will display as the property value.`},configurable:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, columns can be shown/hidden by the user.",defaultValue:{value:"true",computed:!1}},view:{required:!1,flowType:{name:"number"},description:`Used in multi-view environments to hide the column selector if a view is selected, and it is not the
table view.`},expandableRows:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, the rows of the table can be expanded and collapsed."},expandPanel:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any, activePanel: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}},{name:"activePanel",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:"Function that returns JSX to render when the row for the passed item is expanded."},isRowSelected:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}}},description:"Callback returning <code>true</code> if the row for the passed item is selected."},items:{required:!1,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>",nullable:!0},description:"An array of objects to render as rows in the list.",defaultValue:{value:"[]",computed:!1}},loading:{required:!1,flowType:{name:"boolean"},description:"Set to <code>true</code> if the list is currently loading data. If true, a loading indicator will display."},onClearSelected:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback to clear the selected set of records."},onColumnClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(column: Column) => void",signature:{arguments:[{name:"column",type:{name:"signature",type:"object",raw:`{
  className?: string,
  hidden?: boolean,
  label?: string,
  name: string,
  onHide?: (item: any) => void,
  onShow?: (item: any) => void,
  render?: (item: any) => Element<any>,
  renderHeader?: (item: any) => Element<any>,
  resolve?: (item: any) => any,
  sortable: boolean
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"onHide",value:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}},required:!1}},{key:"onShow",value:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}},required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!1}},{key:"renderHeader",value:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!1}},{key:"resolve",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!0}}]}}}],return:{name:"void"}}},description:"Callback fired when the passed column is clicked."},onRowSelect:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any)=> void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:`Callback fired when the passed item is selected. This callback is <i>only</i> fired if the <code>selectable</code>
prop is passed as <code>true</code>.`},onSelectAll:{required:!1,flowType:{name:"signature",type:"function",raw:"(items: Array<any>) => void",signature:{arguments:[{name:"items",type:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"}}],return:{name:"void"}}},description:"Callback fired when the select all checkbox in the table header is clicked."},renderEmptyMessage:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:"A function that returns a JSX element to render when the list is empty."},renderEmptyRow:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`A function that returns a custom JSX element to render when the list is empty. This element will replace the
entire single row of the table.`,defaultValue:{value:"undefined",computed:!0}},renderItem:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any, index: number, children?: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}},{name:"index",type:{name:"number"}},{name:"children",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:`A function that returns a custom JSX element to render for the passed item. This element will replace the entire
table row.`},sortColumn:{required:!1,flowType:{name:"string"},description:"Name of the current sort column."},sortDirection:{required:!1,flowType:{name:"string"},description:"Current sort direction (ascending or descending)."},tableProps:{required:!1,flowType:{name:"signature",type:"object",raw:"{ [key: string]: any }",signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}},description:`Customization props for the
<a target="_blank" href="https://react.semantic-ui.com/collections/table/"><code>Table</code></a>
component.`},defaultSort:{required:!1,flowType:{name:"string"},description:"The name of the default sort column."},defaultSortDirection:{required:!1,flowType:{name:"string"},description:"The default direction to sort the list (ascending vs. descending)."},onDrag:{required:!1,flowType:{name:"signature",type:"function",raw:"(dragIndex: number, hoverIndex: number) => void",signature:{arguments:[{name:"dragIndex",type:{name:"number"}},{name:"hoverIndex",type:{name:"number"}}],return:{name:"void"}}},description:"Callback fired when a table row is dragged.",defaultValue:{value:"undefined",computed:!0}}}};const{action:i}=__STORYBOOK_MODULE_ACTIONS__,gn={title:"Components/Semantic UI/EmbeddedList",component:r},l=[{name:"edit"},{name:"copy"},{name:"delete"}],m=[{name:"movie",label:"Movie"},{name:"genre",label:"Genre"},{name:"date",label:"Date"},{name:"country",label:"Country"},{name:"gross",label:"Gross"}],p=s(()=>n.jsx(r,{actions:l,onDelete:i("delete"),columns:m,items:u})),y=s(()=>n.jsx(r,{actions:l,onDelete:i("delete"),columns:m,items:u,modal:{component:x}})),f=s(()=>n.jsx(r,{actions:l,columns:m,defaultSort:"country",defaultSortDirection:I,onDelete:i("delete"),items:u})),g=s(()=>{const[o,e]=E.useState(u);return n.jsx(r,{actions:l,onDelete:i("delete"),columns:[{name:"drag-drop",label:"",render:()=>n.jsx("div",{style:{textAlign:"center"},children:n.jsx(N,{name:"bars"})})},...m],items:o,onDrag:(t,d)=>{const a=[...o],T=a[t];a.splice(t,1),a.splice(d,0,T),e(a)}})}),h=s(()=>n.jsx(r,{actions:l,onDelete:i("delete"),columns:m,items:[]})),b=s(()=>n.jsx(r,{actions:l,onDelete:i("delete"),columns:m,items:[],modal:{component:x}})),w=s(()=>n.jsx(r,{actions:l,onDelete:i("delete"),columns:A.map(m,o=>({...o,sortable:!1})),items:u})),v=s(()=>n.jsx(r,{actions:l,onDelete:i("delete"),columns:m,items:u,showRecordCount:!0})),k=s(()=>n.jsx(r,{selectable:!0,isRowSelected:()=>!1,onRowSelect:i("row selected"),selectedRows:[{id:5},{id:6},{id:7}],actions:l,onDelete:i("delete"),columns:m,items:u})),V=o=>n.jsxs(S,{centered:!1,header:"This is a Test",inlineTabs:!1,open:o.open,children:[n.jsx(S.Tab,{name:"Tab 1",children:n.jsx(r,{actions:l,onDelete:i("delete"),columns:m,items:u,modal:{component:x}})}),A.times(20,e=>n.jsx(S.Tab,{name:`Tab ${e+2}`,children:`Tab ${e+2}`},e+2)),o.children]}),q=s(()=>{const[o,e]=E.useState(!1);return n.jsxs(j,{children:[n.jsx(R,{content:"Open Modal",icon:"plus",onClick:()=>e(!0)}),n.jsx(P,{component:V,open:o,onClose:()=>e(!1),onSave:()=>new Promise(t=>t(e(!1)))})]})}),C=s(()=>n.jsx(r,{actions:l,configurable:!1,onDelete:i("delete"),columns:m,items:u,showRecordCount:!0}));p.__docgenInfo={description:"",methods:[],displayName:"Default"};y.__docgenInfo={description:"",methods:[],displayName:"AddButton"};f.__docgenInfo={description:"",methods:[],displayName:"DefaultSort"};g.__docgenInfo={description:"",methods:[],displayName:"DragAndDropRows"};h.__docgenInfo={description:"",methods:[],displayName:"Empty"};b.__docgenInfo={description:"",methods:[],displayName:"EmptyAddButton"};w.__docgenInfo={description:"",methods:[],displayName:"NoSortableColumns"};v.__docgenInfo={description:"",methods:[],displayName:"RecordCount"};k.__docgenInfo={description:"",methods:[],displayName:"Selectable"};q.__docgenInfo={description:"",methods:[],displayName:"TabbedModalConfig"};C.__docgenInfo={description:"",methods:[],displayName:"NoColumnSelector"};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"useDragDrop(() => <EmbeddedList actions={actions} onDelete={action('delete')} columns={columns} items={items} />)",...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`useDragDrop(() => <EmbeddedList actions={actions} onDelete={action('delete')} columns={columns} items={items} modal={{
  component: AddModal
}} />)`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"useDragDrop(() => <EmbeddedList actions={actions} columns={columns} defaultSort='country' defaultSortDirection={SORT_DESCENDING} onDelete={action('delete')} items={items} />)",...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`useDragDrop(() => {
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
})`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"useDragDrop(() => <EmbeddedList actions={actions} onDelete={action('delete')} columns={columns} items={[]} />)",...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`useDragDrop(() => <EmbeddedList actions={actions} onDelete={action('delete')} columns={columns} items={[]} modal={{
  component: AddModal
}} />)`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`useDragDrop(() => <EmbeddedList actions={actions} onDelete={action('delete')} columns={_.map(columns, c => ({
  ...c,
  sortable: false
}))} items={items} />)`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"useDragDrop(() => <EmbeddedList actions={actions} onDelete={action('delete')} columns={columns} items={items} showRecordCount />)",...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`useDragDrop(() => <EmbeddedList selectable isRowSelected={() => false} onRowSelect={action('row selected')} selectedRows={[{
  id: 5
}, {
  id: 6
}, {
  id: 7
}]} actions={actions} onDelete={action('delete')} columns={columns} items={items} />)`,...k.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`useDragDrop(() => {
  const [showModal, setShowModal] = useState(false);
  return <Container>
      <Button content='Open Modal' icon='plus' onClick={() => setShowModal(true)} />
      <EditModal component={EmbeddedListModal} open={showModal} onClose={() => setShowModal(false)} onSave={() => new Promise(resolve => resolve(setShowModal(false)))} />
    </Container>;
})`,...q.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"useDragDrop(() => <EmbeddedList actions={actions} configurable={false} onDelete={action('delete')} columns={columns} items={items} showRecordCount />)",...C.parameters?.docs?.source}}};const hn=["Default","AddButton","DefaultSort","DragAndDropRows","Empty","EmptyAddButton","NoSortableColumns","RecordCount","Selectable","TabbedModalConfig","NoColumnSelector"];export{y as AddButton,p as Default,f as DefaultSort,g as DragAndDropRows,h as Empty,b as EmptyAddButton,C as NoColumnSelector,w as NoSortableColumns,v as RecordCount,k as Selectable,q as TabbedModalConfig,hn as __namedExportsOrder,gn as default};
