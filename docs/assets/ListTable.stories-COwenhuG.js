import{j as t}from"./jsx-runtime-BTCK_S7S.js";import{a as n}from"./chunk-WFFRPTHA-B2vgThZf.js";import{d as a}from"./index-C3LmjPEu.js";import{r as O}from"./index-CBqU2yxZ.js";import{B as J}from"./Button-Blq7Z6RX.js";import{_ as o}from"./index-default-C_maRo4o.js";import"./index.es33-DlzGmW-C.js";import{z as pn}from"./index.es3-Dkd0vHIR.js";import{c as un}from"./index.es27-SQskR_RA.js";import{D as yn}from"./DataTable-Dpu0nGXI.js";import{L as bn}from"./ListSession-hS-NIzK1.js";import{u as gn,S as z,a as fn}from"./DataList-2leJcbxu.js";import{A as r}from"./Api-DXLamogn.js";import{A as d}from"./AddModal-8so4BWij.js";import{F as hn}from"./FilterModal-C4tRpCPs.js";import{i as m}from"./Cars-2_9qFJX9.js";import{L as U,F as X,a as vn}from"./List-C9a6Oeil.js";import{u as i}from"./DragDrop-ryAVAQMJ.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./mapValues-CZh2vnSw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./pickBy-CXM4uafe.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-Bu_b4Pek.js";import"./index-Cw1G72V2.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./debounce-Bq1aTuh-.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CckcRzoH.js";import"./Icon-2tEtgK8g.js";import"./Label-Cq1fb1cd.js";import"./ModernAutoControlledComponent-DJBWk5EW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CQoJOerW.js";import"./toFinite-KQ8KevIC.js";import"./forEach-CXlln0XP.js";import"./Dimmer-D_gwaesu.js";import"./Portal-DvhHJPzU.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DZGZymok.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-B4PnIEPz.js";import"./iframe-BIpqzhZX.js";import"../sb-preview/runtime.js";import"./Table-Xx3vjhN9.js";import"./Loader-CooidObp.js";import"./Checkbox-C9uAfnsM.js";import"./_baseSet-6y0qliU9.js";import"./_baseAssignValue-izmKBXUH.js";import"./Popup-BP01NTlV.js";import"./index-BBpNyw-T.js";import"./_arrayReduce-CrxnWFSq.js";import"./createClass-D2z1h_eG.js";import"./toPropertyKey-hKuLU48H.js";import"./i18n-DOVQ27W-.js";import"./i18next-Sc0HEOoc.js";import"./defineProperty-CCxoMnQV.js";import"./inherits-D5wXBZoG.js";import"./getPrototypeOf-BYVhAdwF.js";import"./Dropdown-Di2cPjwR.js";import"./without-BP-mqg2K.js";import"./isArrayLikeObject-CbXKTyfk.js";import"./isEmpty-Cyb9hIKi.js";import"./deburr-CEfyoYOr.js";import"./filter-CVNi8iPS.js";import"./Draggable-KQRXc-DM.js";import"./useDrop-BRQoWSA5.js";import"./DndContext-B-2NJP7Z.js";import"./redux-C8f_Y06i.js";import"./objectSpread2-N4c0DWqo.js";import"./uuid-BH6G0oTz.js";import"./Message-3p6wyYpA.js";import"./Input--hQVCRQV.js";import"./Toaster-C1YYqOUE.js";import"./Transition-DSFEXhCu.js";import"./Modal-Bz2VEyQG.js";import"./Form-fErk-qk_.js";import"./Confirm-Dw9rt56R.js";import"./Pagination-D0HmnRDL.js";import"./Menu-9i0apxqd.js";import"./Grid-Czr5owxQ.js";import"./Header-BJ3NNdPz.js";import"./DropdownButton-D3g-r0e9.js";import"./EditModal-BjD3R7aI.js";import"./AssociatedDropdown-a_QnALtc.js";import"./FuzzyDate-CfG_yqpM.js";import"./DateInput-BO57_F9J.js";import"./Trans-BENHr9Q7.js";import"./objectWithoutProperties--RY0eV0u.js";import"./defineProperty-CGC-R-Bs.js";import"./defineProperty-BYUWwell.js";import"./utils-C_6BAdFC.js";import"./createClass-CyHhwgEe.js";const W=gn(e=>{const g=un.usePrevious(e.columns),y=b=>{if(!b.sortable)return;const p=b.name;let u=z;b.name===e.sortColumn?u=e.sortDirection===z?fn:z:b.sortDirection&&(u=b.sortDirection),e.onSort(p,u)};return O.useEffect(()=>{if(!pn.isEqual(e.columns,g)){const{key:b,storage:p}=e.session||{},u=bn.restoreSession(b,p),V=u.sortColumn||e.defaultSort,cn=u.sortDirection||e.defaultSortDirection||z,{page:dn}=e;if(V)e.onSort(V,cn,dn);else{const H=o.findWhere(e.columns,{sortable:!0});H?y(H):e.onInit()}}},[e.columns]),t.jsx(yn,{...e,onColumnClick:y.bind(void 0)})});W.defaultProps={configurable:!0,tableProps:{celled:!0,sortable:!0}};const s=W;W.__docgenInfo={description:`The <code>ListTable</code> component renders a list which has the ability to load, save, and delete records from
an API (via the <code>DataList</code> higher-order component). This component will integrate seamlessly with a
back-end implementing the <code>resource-api</code>. See the
<a href="https://github.com/performant-software/resource-api">GitHub page</a> for more details.`,methods:[],displayName:"ListTable",props:{collectionName:{required:!0,flowType:{name:"string"},description:"Name of the collection to retrieve from the API response."},defaultPerPage:{required:!1,flowType:{name:"number"},description:"The default number of records to display on a single page."},defaultSearch:{required:!1,flowType:{name:"string"},description:"The default value for the search input element."},defaultSort:{required:!1,flowType:{name:"string"},description:"The default value to use for sorting the list."},defaultSortDirection:{required:!1,flowType:{name:"string"},description:"The default direction in which to sort the list."},filters:{required:!1,flowType:{name:"signature",type:"object",raw:`{
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
passing the new filters the <code>onLoad</code> callback.`},onDelete:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:`Callback fired when the "delete" action is clicked.
@param item`},onDeleteAll:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:`Callback fired when the "delete all" action is clicked. This action is typically renedered in the header and will
apply to every item in the list.`},onLoad:{required:!0,flowType:{name:"signature",type:"function",raw:"(params: any) => Promise<any>",signature:{arguments:[{name:"params",type:{name:"any"}}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:"Callback fired when loading the list of items from an API. This callback is fired any time the list changes."},onSave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => Promise<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:"Callback fired when an item is saved via the add/edit modal."},perPageOptions:{required:!1,flowType:{name:"Array",elements:[{name:"number"}],raw:"Array<number>"},description:"The numeric list of options to allow the user to select for the number of records to display per page."},polling:{required:!1,flowType:{name:"number"},description:`If provided, the <code>onLoad</code> callback will fire after a timeout of the passed number of milliseconds. This
can be useful in order to show progress (file upload, download, etc) that must be retrieved from the server.`},resolveErrors:{required:!1,flowType:{name:"signature",type:"function",raw:"(error: any) => Array<string>",signature:{arguments:[{name:"error",type:{name:"any"}}],return:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"}}},description:`Callback fired when an error occurs. The passed error can take any form and is up to the consuming component to
interpret. The return value should be an array of user-friendly error messages.`},saved:{required:!1,flowType:{name:"boolean"},description:`Used to inform the list that an external save has taken place. When set to <code>true</code>, a success toaster
will display.`},searchable:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, this component will render a search input element in the list header."},session:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  key: string,
  storage: typeof sessionStorage
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"storage",value:{name:"sessionStorage",required:!0}}]}},description:`If provided, list properties (page number, columns, filters, etc) will be stored in the passed storage element
and rehydrated each time the component is mounted. This is useful in order to persist filters, searches, and
other properties when a user navigates away from the list.`},actions:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
the <code>modal</code> prop will be rendered.`},buttons:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  accept?: () => boolean,
  render: (index?: number) => Element<any>
}`,signature:{properties:[{key:"accept",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(index?: number) => Element<any>",signature:{arguments:[{name:"index",type:{name:"number"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!0}}]}}],raw:"Array<ListButton>"},description:`A list of arbitrary buttons to the display in the list header. All actions will be handled by the consuming
component.
<br />
<br />

In addition to the props listed here for each button, buttons will also accept any of the Semantic UI
<a href="https://react.semantic-ui.com/elements/button/" target="_blank">Button</a> props.`},count:{required:!1,flowType:{name:"number"},description:"The number of total records in the list (not just the current page)."},className:{required:!1,flowType:{name:"string"},description:"CSS class name to append to the <code>div</code> container."},csvExportButton:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  basic: boolean,
  color: string,
  location: string,
  onClick?: () => void
}`,signature:{properties:[{key:"basic",value:{name:"boolean",required:!0}},{key:"color",value:{name:"string",required:!0}},{key:"location",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},description:"If provided, a CSV export button will be rendered in the list header."},deleteButton:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  color: string,
  location: string,
  onClick?: () => void
}`,signature:{properties:[{key:"color",value:{name:"string",required:!0}},{key:"location",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},description:'If provided, a "delete all" button will be rendered in the list header.'},modal:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  component: ComponentType<any>,
  props: any,
  state: any
}`,signature:{properties:[{key:"component",value:{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>",required:!0}},{key:"props",value:{name:"any",required:!0}},{key:"state",value:{name:"any",required:!0}}]}},description:'If provided, the passed modal will be rendered when the "add" button is clicked.'},onCopy:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}}},description:`If provided, this callback is fired when the "copy" action is clicked for an item. The consuming component
should generate a copy of the selected item and return that value. The return value is then set at the
current item in the edit modal.`},onPageChange:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the page is changed via the pagination component."},onPerPageChange:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the per page value is changed."},page:{required:!1,flowType:{name:"number"},description:"Current page number."},pages:{required:!1,flowType:{name:"number"},description:"Number of pages in the list."},perPage:{required:!1,flowType:{name:"number"},description:"The number of records to display per page."},renderDeleteModal:{required:!1,flowType:{name:"signature",type:"function",raw:"({ selectedItem: any, onCancel: () => void, onConfirm: () => void }) => Element<any>",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{ selectedItem: any, onCancel: () => void, onConfirm: () => void }",signature:{properties:[{key:"selectedItem",value:{name:"any",required:!0}},{key:"onCancel",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onConfirm",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:'Custom render function for the modal that appears on the "delete" action.'},renderListHeader:{required:!1,flowType:{name:"signature",type:"function",raw:"() => ?Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>",nullable:!0}}},description:"If provided, this function will return a JSX element that will prepend to the list header."},renderSearch:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:"If provided, this function will return a JSX element that will replace the default search input."},selectable:{required:!1,flowType:{name:"boolean"},description:`If set to <code>true</code>, checkboxes will render as the first table column, allowing each row to be selectable.
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
will display as the property value.`},configurable:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, columns can be shown/hidden by the user.",defaultValue:{value:"true",computed:!1}},expandableRows:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, the rows of the table can be expanded and collapsed."},expandPanel:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any, activePanel: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}},{name:"activePanel",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:"Function that returns JSX to render when the row for the passed item is expanded."},isRowSelected:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}}},description:"Callback returning <code>true</code> if the row for the passed item is selected."},items:{required:!0,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>",nullable:!0},description:"An array of objects to render as rows in the list."},loading:{required:!1,flowType:{name:"boolean"},description:"Set to <code>true</code> if the list is currently loading data. If true, a loading indicator will display."},onClearSelected:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback to clear the selected set of records."},onColumnClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(column: Column) => void",signature:{arguments:[{name:"column",type:{name:"Column"}}],return:{name:"void"}}},description:"Callback fired when the passed column is clicked."},onRowSelect:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any)=> void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:`Callback fired when the passed item is selected. This callback is <i>only</i> fired if the <code>selectable</code>
prop is passed as <code>true</code>.`},onSelectAll:{required:!1,flowType:{name:"signature",type:"function",raw:"(items: Array<any>) => void",signature:{arguments:[{name:"items",type:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"}}],return:{name:"void"}}},description:"Callback fired when the select all checkbox in the table header is clicked."},renderEmptyMessage:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:"A function that returns a JSX element to render when the list is empty."},renderEmptyRow:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`A function that returns a custom JSX element to render when the list is empty. This element will replace the
entire single row of the table.`},renderItem:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any, index: number, children?: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}},{name:"index",type:{name:"number"}},{name:"children",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:`A function that returns a custom JSX element to render for the passed item. This element will replace the entire
table row.`},sortColumn:{required:!1,flowType:{name:"string"},description:"Name of the current sort column."},sortDirection:{required:!1,flowType:{name:"string"},description:"Current sort direction (ascending or descending)."},tableProps:{required:!1,flowType:{name:"any"},description:`Customization props for the
<a target="_blank" href="https://react.semantic-ui.com/collections/table/"><code>Table</code></a>
component.`,defaultValue:{value:`{
  celled: true,
  sortable: true
}`,computed:!1}},onInit:{required:!1,flowType:{name:"signature",type:"function",raw:"(page?: number) => void",signature:{arguments:[{name:"page",type:{name:"number"}}],return:{name:"void"}}},description:"Callback supplied by the <code>DataList</code> higher-order component which can be used to initialize the list."},onSort:{required:!1,flowType:{name:"signature",type:"function",raw:"(sortColumn: string, sortDirection: string, page?: number) => void",signature:{arguments:[{name:"sortColumn",type:{name:"string"}},{name:"sortDirection",type:{name:"string"}},{name:"page",type:{name:"number"}}],return:{name:"void"}}},description:"Callback supplied by the <code>DataList</code> higher-order component which can be used to sort the list."}}};const ct={title:"Components/Semantic UI/ListTable",component:s},l=[{name:"edit"},{name:"copy"},{name:"delete"}],c=[{name:"make",label:"Make",sortable:!0},{name:"model",label:"Model",sortable:!0},{name:"vin",label:"Vin",sortable:!0},{name:"address",label:"Address",sortable:!0},{name:"city",label:"City",sortable:!0},{name:"state",label:"State",sortable:!0}],f=i(()=>t.jsx(s,{actions:l,collectionName:"items",columns:c,onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:m,perPage:a.number("Per page",10)})),onDelete:n("delete"),onSave:n("save"),searchable:a.boolean("Searchable",!0)})),h=i(()=>t.jsx(s,{actions:l,collectionName:"items",columns:c,modal:{component:d},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:m,perPage:a.number("Per page",10)})),onDelete:n("delete"),onSave:n("save"),searchable:a.boolean("Searchable",!0)})),v=i(()=>t.jsx(s,{actions:l,collectionName:"items",columns:c,modal:{component:d},onCopy:n("copy"),onLoad:r.onLoadEmpty.bind(void 0),onDelete:n("delete"),onSave:()=>Promise.resolve(),searchable:a.boolean("Searchable",!0)})),w=i(()=>{const[e,g]=O.useState(0);return t.jsxs(t.Fragment,{children:[t.jsx(J,{content:`Clicks: ${e}`,primary:!0,onClick:()=>g(y=>y+1)}),t.jsx(s,{actions:l,collectionName:"items",columns:[{name:"make",label:"Make",sortable:!0},{name:"model",label:"Model",sortable:!0},{name:"vin",label:"Vin",sortable:!0},{name:"address",label:"Address",sortable:!0},{name:"city",label:"City",sortable:!0},{name:"state",label:"State",sortable:!0}],onCopy:n("copy"),onLoad:y=>r.onLoad(o.extend(y,{items:m})),onDelete:n("delete"),onSave:n("save"),perPageOptions:[10,25,50,100],searchable:a.boolean("Searchable",!0)})]})}),S=i(()=>t.jsx(s,{actions:l,collectionName:"items",columns:c,csvExportButton:{color:"blue",location:"bottom"},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:m,perPage:a.number("Per page",10)})),onDelete:n("delete"),onSave:n("save"),searchable:a.boolean("Searchable",!0)})),C=i(()=>t.jsx(s,{actions:l,collectionName:"items",columns:[{name:"make",label:"Make",sortable:!0},{name:"model",label:"Model",sortable:!0},{name:"vin",label:"Vin",sortable:!0,hidden:!0},{name:"address",label:"Address",sortable:!0},{name:"city",label:"City",sortable:!0},{name:"state",label:"State",sortable:!0}],filters:{component:d},modal:{component:d},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:m,perPage:a.number("Per page",10)})),onDelete:n("delete"),onSave:()=>Promise.resolve(),searchable:a.boolean("Searchable",!0)})),L=i(()=>t.jsx(s,{actions:l,collectionName:"items",columns:c,deleteButton:{color:"red",location:"top"},modal:{component:d},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:m,perPage:a.number("Per page",10)})),onDelete:n("delete"),onDeleteAll:n("delete all"),onSave:()=>Promise.resolve(),searchable:a.boolean("Searchable",!0)})),P=i(()=>t.jsx(s,{actions:l,collectionName:"items",columns:c,onCopy:n("copy"),onLoad:r.onLoadEmpty.bind(void 0),onDelete:n("delete"),onSave:n("save"),searchable:a.boolean("Searchable",!0)})),D=i(()=>t.jsx(s,{actions:l,buttons:[{render:()=>t.jsx(J,{content:"Button 1",onClick:n("button1")})},{location:"bottom",render:()=>t.jsx(J,{content:"Button 2",onClick:n("button2")})}],collectionName:"items",columns:c,modal:{component:d},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:m,perPage:a.number("Per page",10)})),onDelete:n("delete"),onSave:()=>Promise.resolve(),searchable:a.boolean("Searchable",!0)})),k=i(()=>t.jsx(s,{actions:l,collectionName:"items",columns:c,filters:{component:hn,props:{test:""}},modal:{component:d},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:m,perPage:a.number("Per page",10)})),onDelete:n("delete"),onSave:()=>Promise.resolve(),searchable:a.boolean("Searchable",!0)})),T=i(()=>t.jsx(s,{actions:l,collectionName:"items",columns:c,modal:{component:d},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:m,perPage:a.number("Per page",10)})),onDelete:n("delete"),onSave:()=>Promise.resolve(),searchable:a.boolean("Searchable",!0),saved:!0})),q=i(()=>t.jsx(s,{actions:l,collectionName:"items",columns:c,filters:{component:U,props:{filters:[{attributeName:"test",label:"Test",key:"test",type:X.string}]}},modal:{component:d},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:m,perPage:a.number("Per page",10)})),onDelete:n("delete"),onSave:()=>Promise.resolve(),searchable:a.boolean("Searchable",!0)})),x=i(()=>t.jsx(s,{actions:l,collectionName:"items",columns:c,filters:{component:U,defaults:{filters:[{key:"test",operator:vn.equal,value:"xyz"}]},props:{filters:[{attributeName:"test",label:"Test",key:"test",type:X.string}]}},modal:{component:d},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:m,perPage:a.number("Per page",10)})),onDelete:n("delete"),onSave:()=>Promise.resolve(),searchable:a.boolean("Searchable",!0)})),N=i(()=>t.jsx(s,{actions:l,collectionName:"items",columns:c,filters:{component:U,props:{filters:[{attributeName:"test",label:"Test",key:"test",type:X.string}]},showLabels:!0},modal:{component:d},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:m,perPage:a.number("Per page",10)})),onDelete:n("delete"),onSave:()=>Promise.resolve(),searchable:a.boolean("Searchable",!0)})),A=i(()=>t.jsx(s,{actions:l,collectionName:"items",columns:c,modal:{component:d},onCopy:n("copy"),onLoad:e=>r.sleep(5e3).then(()=>r.onLoad(o.extend(e,{items:m,perPage:a.number("Per page",10)}))),onDelete:n("delete"),onSave:()=>Promise.resolve(),searchable:a.boolean("Searchable",!0)})),_=i(()=>t.jsx(s,{actions:l,collectionName:"items",columns:c,defaultPerPage:10,onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:m})),onDelete:n("delete"),onSave:n("save"),perPageOptions:[10,25,50,100],searchable:a.boolean("Searchable",!0)})),I=i(()=>t.jsx(s,{actions:l,collectionName:"items",columns:c,onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:m})),onDelete:n("delete"),onSave:n("save"),perPageOptions:[10,25,50,100],searchable:a.boolean("Searchable",!0)})),E=i(()=>t.jsx(s,{actions:l,collectionName:"items",columns:c,modal:{component:d},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:m,perPage:a.number("Per page",10)})),onDelete:n("delete"),onSave:()=>Promise.resolve(),polling:5e3,searchable:a.boolean("Searchable",!0)})),j=i(()=>t.jsx(s,{actions:l,collectionName:"items",columns:c,onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:m,perPage:a.number("Per page",10)})),onDelete:n("delete"),onSave:n("save"),searchable:a.boolean("Searchable",!0),showRecordCount:!0})),M=i(()=>{const[e,g]=O.useState([]),y=O.useCallback(p=>o.contains(e,p.id),[e]),b=O.useCallback(p=>{y(p)?g(u=>o.filter(u,V=>V!==p.id)):g(u=>[...u,p.id])},[e]);return t.jsx(s,{actions:l,collectionName:"items",columns:c,isRowSelected:y.bind(void 0),onCopy:n("copy"),onLoad:p=>r.onLoad(o.extend(p,{items:m,perPage:a.number("Per page",10)})),onDelete:n("delete"),onRowSelect:b.bind(void 0),onSave:n("save"),searchable:a.boolean("Searchable",!0),selectable:!0})}),B=i(()=>t.jsx(s,{actions:l,collectionName:"items",columns:c.map(e=>({...e,sortable:!1})),onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:m,perPage:a.number("Per page",10)})),onDelete:n("delete"),onSave:n("save"),searchable:a.boolean("Searchable",!0)})),F=i(()=>t.jsx(s,{actions:l,collectionName:"items",columns:o.map(c,e=>e.name==="vin"?{...e,sortDirection:"descending"}:e),onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:m,perPage:a.number("Per page",10)})),onDelete:n("delete"),onSave:n("save"),searchable:a.boolean("Searchable",!0)})),R=i(()=>t.jsx(s,{actions:l,collectionName:"items",columns:c,configurable:!1,onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:m,perPage:a.number("Per page",10)})),onDelete:n("delete"),onSave:n("save"),searchable:a.boolean("Searchable",!0)}));f.__docgenInfo={description:"",methods:[],displayName:"Default"};h.__docgenInfo={description:"",methods:[],displayName:"AddButton"};v.__docgenInfo={description:"",methods:[],displayName:"AddButtonEmpty"};w.__docgenInfo={description:"",methods:[],displayName:"Count"};S.__docgenInfo={description:"",methods:[],displayName:"CsvExport"};C.__docgenInfo={description:"",methods:[],displayName:"CustomizableColumns"};L.__docgenInfo={description:"",methods:[],displayName:"DeleteAllButton"};P.__docgenInfo={description:"",methods:[],displayName:"Empty"};D.__docgenInfo={description:"",methods:[],displayName:"ExtraButtons"};k.__docgenInfo={description:"",methods:[],displayName:"Filters"};T.__docgenInfo={description:"",methods:[],displayName:"InitialSave"};q.__docgenInfo={description:"",methods:[],displayName:"ListFiltersModal"};x.__docgenInfo={description:"",methods:[],displayName:"ListFiltersModalDefaults"};N.__docgenInfo={description:"",methods:[],displayName:"ListFiltersModalWithLabels"};A.__docgenInfo={description:"",methods:[],displayName:"Loading"};_.__docgenInfo={description:"",methods:[],displayName:"PerPage"};I.__docgenInfo={description:"",methods:[],displayName:"PerPageNoDefault"};E.__docgenInfo={description:"",methods:[],displayName:"Polling"};j.__docgenInfo={description:"",methods:[],displayName:"RecordCount"};M.__docgenInfo={description:"",methods:[],displayName:"Selectable"};B.__docgenInfo={description:"",methods:[],displayName:"Unsortable"};F.__docgenInfo={description:"",methods:[],displayName:"SortDescending"};R.__docgenInfo={description:"",methods:[],displayName:"NoColumnSelector"};var G,$,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={action('save')} searchable={boolean('Searchable', true)} />)`,...(K=($=f.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var Q,Y,Z;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={action('save')} searchable={boolean('Searchable', true)} />)`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,ae;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={Api.onLoadEmpty.bind(this)} onDelete={action('delete')} onSave={() => Promise.resolve()} searchable={boolean('Searchable', true)} />)`,...(ae=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,oe,re;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`useDragDrop(() => {
  const [count, setCount] = useState(0);
  return <>
      <Button content={\`Clicks: \${count}\`} primary onClick={() => setCount(prevCount => prevCount + 1)} />
      <ListTable actions={actions} collectionName='items' columns={[{
      name: 'make',
      label: 'Make',
      sortable: true
    }, {
      name: 'model',
      label: 'Model',
      sortable: true
    }, {
      name: 'vin',
      label: 'Vin',
      sortable: true
    }, {
      name: 'address',
      label: 'Address',
      sortable: true
    }, {
      name: 'city',
      label: 'City',
      sortable: true
    }, {
      name: 'state',
      label: 'State',
      sortable: true
    }]} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
      items
    }))} onDelete={action('delete')} onSave={action('save')} perPageOptions={[10, 25, 50, 100]} searchable={boolean('Searchable', true)} />
    </>;
})`,...(re=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var se,ie,le;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} csvExportButton={{
  color: 'blue',
  location: 'bottom'
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={action('save')} searchable={boolean('Searchable', true)} />)`,...(le=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var me,ce,de;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={[{
  name: 'make',
  label: 'Make',
  sortable: true
}, {
  name: 'model',
  label: 'Model',
  sortable: true
}, {
  name: 'vin',
  label: 'Vin',
  sortable: true,
  hidden: true
}, {
  name: 'address',
  label: 'Address',
  sortable: true
}, {
  name: 'city',
  label: 'City',
  sortable: true
}, {
  name: 'state',
  label: 'State',
  sortable: true
}]} filters={{
  component: AddModal
}} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} searchable={boolean('Searchable', true)} />)`,...(de=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,ue,ye;L.parameters={...L.parameters,docs:{...(pe=L.parameters)==null?void 0:pe.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} deleteButton={{
  color: 'red',
  location: 'top'
}} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onDeleteAll={action('delete all')} onSave={() => Promise.resolve()} searchable={boolean('Searchable', true)} />)`,...(ye=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:ye.source}}};var be,ge,fe;P.parameters={...P.parameters,docs:{...(be=P.parameters)==null?void 0:be.docs,source:{originalSource:"useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} onCopy={action('copy')} onLoad={Api.onLoadEmpty.bind(this)} onDelete={action('delete')} onSave={action('save')} searchable={boolean('Searchable', true)} />)",...(fe=(ge=P.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var he,ve,we;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} buttons={[{
  render: () => <Button content='Button 1' onClick={action('button1')} />
}, {
  location: 'bottom',
  render: () => <Button content='Button 2' onClick={action('button2')} />
}]} collectionName='items' columns={columns} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} searchable={boolean('Searchable', true)} />)`,...(we=(ve=D.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var Se,Ce,Le;k.parameters={...k.parameters,docs:{...(Se=k.parameters)==null?void 0:Se.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} filters={{
  component: FilterModal,
  props: {
    test: ''
  }
}} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} searchable={boolean('Searchable', true)} />)`,...(Le=(Ce=k.parameters)==null?void 0:Ce.docs)==null?void 0:Le.source}}};var Pe,De,ke;T.parameters={...T.parameters,docs:{...(Pe=T.parameters)==null?void 0:Pe.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} searchable={boolean('Searchable', true)} saved />)`,...(ke=(De=T.parameters)==null?void 0:De.docs)==null?void 0:ke.source}}};var Te,qe,xe;q.parameters={...q.parameters,docs:{...(Te=q.parameters)==null?void 0:Te.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} filters={{
  component: ListFilters,
  props: {
    filters: [{
      attributeName: 'test',
      label: 'Test',
      key: 'test',
      type: FilterTypes.string
    }]
  }
}} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} searchable={boolean('Searchable', true)} />)`,...(xe=(qe=q.parameters)==null?void 0:qe.docs)==null?void 0:xe.source}}};var Ne,Ae,_e;x.parameters={...x.parameters,docs:{...(Ne=x.parameters)==null?void 0:Ne.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} filters={{
  component: ListFilters,
  defaults: {
    filters: [{
      key: 'test',
      operator: FilterOperators.equal,
      value: 'xyz'
    }]
  },
  props: {
    filters: [{
      attributeName: 'test',
      label: 'Test',
      key: 'test',
      type: FilterTypes.string
    }]
  }
}} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} searchable={boolean('Searchable', true)} />)`,...(_e=(Ae=x.parameters)==null?void 0:Ae.docs)==null?void 0:_e.source}}};var Ie,Ee,je;N.parameters={...N.parameters,docs:{...(Ie=N.parameters)==null?void 0:Ie.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} filters={{
  component: ListFilters,
  props: {
    filters: [{
      attributeName: 'test',
      label: 'Test',
      key: 'test',
      type: FilterTypes.string
    }]
  },
  showLabels: true
}} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} searchable={boolean('Searchable', true)} />)`,...(je=(Ee=N.parameters)==null?void 0:Ee.docs)==null?void 0:je.source}}};var Me,Be,Fe;A.parameters={...A.parameters,docs:{...(Me=A.parameters)==null?void 0:Me.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.sleep(5000).then(() => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
})))} onDelete={action('delete')} onSave={() => Promise.resolve()} searchable={boolean('Searchable', true)} />)`,...(Fe=(Be=A.parameters)==null?void 0:Be.docs)==null?void 0:Fe.source}}};var Re,Oe,Ve;_.parameters={..._.parameters,docs:{...(Re=_.parameters)==null?void 0:Re.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} defaultPerPage={10} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items
}))} onDelete={action('delete')} onSave={action('save')} perPageOptions={[10, 25, 50, 100]} searchable={boolean('Searchable', true)} />)`,...(Ve=(Oe=_.parameters)==null?void 0:Oe.docs)==null?void 0:Ve.source}}};var ze,Je,Ue;I.parameters={...I.parameters,docs:{...(ze=I.parameters)==null?void 0:ze.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items
}))} onDelete={action('delete')} onSave={action('save')} perPageOptions={[10, 25, 50, 100]} searchable={boolean('Searchable', true)} />)`,...(Ue=(Je=I.parameters)==null?void 0:Je.docs)==null?void 0:Ue.source}}};var Xe,We,He;E.parameters={...E.parameters,docs:{...(Xe=E.parameters)==null?void 0:Xe.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} polling={5000} searchable={boolean('Searchable', true)} />)`,...(He=(We=E.parameters)==null?void 0:We.docs)==null?void 0:He.source}}};var Ge,$e,Ke;j.parameters={...j.parameters,docs:{...(Ge=j.parameters)==null?void 0:Ge.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={action('save')} searchable={boolean('Searchable', true)} showRecordCount />)`,...(Ke=($e=j.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};var Qe,Ye,Ze;M.parameters={...M.parameters,docs:{...(Qe=M.parameters)==null?void 0:Qe.docs,source:{originalSource:`useDragDrop(() => {
  const [selectedItems, setSelectedItems] = useState([]);

  /**
   * Returns true if the passed item is in the list of selected items.
   *
   * @type {function(*): *}
   */
  const isSelected = useCallback(item => _.contains(selectedItems, item.id), [selectedItems]);

  /**
   * Removes the passed item from the list of selected items if selected. Adds the passed item to the list of selected
   * items if not selected.
   *
   * @type {(function(*=): void)|*}
   */
  const onRowSelect = useCallback(item => {
    if (isSelected(item)) {
      setSelectedItems(prevItems => _.filter(prevItems, id => id !== item.id));
    } else {
      setSelectedItems(prevItems => [...prevItems, item.id]);
    }
  }, [selectedItems]);
  return <ListTable actions={actions} collectionName='items' columns={columns} isRowSelected={isSelected.bind(this)} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
    items,
    perPage: number('Per page', 10)
  }))} onDelete={action('delete')} onRowSelect={onRowSelect.bind(this)} onSave={action('save')} searchable={boolean('Searchable', true)} selectable />;
})`,...(Ze=(Ye=M.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var en,nn,an;B.parameters={...B.parameters,docs:{...(en=B.parameters)==null?void 0:en.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns.map(c => ({
  ...c,
  sortable: false
}))} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={action('save')} searchable={boolean('Searchable', true)} />)`,...(an=(nn=B.parameters)==null?void 0:nn.docs)==null?void 0:an.source}}};var tn,on,rn;F.parameters={...F.parameters,docs:{...(tn=F.parameters)==null?void 0:tn.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={_.map(columns, column => column.name === 'vin' ? {
  ...column,
  sortDirection: 'descending'
} : column)} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={action('save')} searchable={boolean('Searchable', true)} />)`,...(rn=(on=F.parameters)==null?void 0:on.docs)==null?void 0:rn.source}}};var sn,ln,mn;R.parameters={...R.parameters,docs:{...(sn=R.parameters)==null?void 0:sn.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} configurable={false} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={action('save')} searchable={boolean('Searchable', true)} />)`,...(mn=(ln=R.parameters)==null?void 0:ln.docs)==null?void 0:mn.source}}};const dt=["Default","AddButton","AddButtonEmpty","Count","CsvExport","CustomizableColumns","DeleteAllButton","Empty","ExtraButtons","Filters","InitialSave","ListFiltersModal","ListFiltersModalDefaults","ListFiltersModalWithLabels","Loading","PerPage","PerPageNoDefault","Polling","RecordCount","Selectable","Unsortable","SortDescending","NoColumnSelector"];export{h as AddButton,v as AddButtonEmpty,w as Count,S as CsvExport,C as CustomizableColumns,f as Default,L as DeleteAllButton,P as Empty,D as ExtraButtons,k as Filters,T as InitialSave,q as ListFiltersModal,x as ListFiltersModalDefaults,N as ListFiltersModalWithLabels,A as Loading,R as NoColumnSelector,_ as PerPage,I as PerPageNoDefault,E as Polling,j as RecordCount,M as Selectable,F as SortDescending,B as Unsortable,dt as __namedExportsOrder,ct as default};
