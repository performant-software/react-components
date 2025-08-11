import{r as R,j as t}from"./iframe-D2tDQHIu.js";import{B as J}from"./Button-e1g_PNPa.js";import{_ as o}from"./index-default-B8-H6N8J.js";import"./index.es27-BqzRcxM3.js";import{J as G}from"./index.es32-CI3sAoKd.js";import{c as $}from"./index.es28-CSYMWsbM.js";import{_ as K}from"./index-default-C0I3bBxV.js";import{D as Y}from"./DataTable-BZJWtGyY.js";import{L as Q}from"./ListSession-hS-NIzK1.js";import{u as Z,S as V,a as ee}from"./DataList-YemLDlzO.js";import{A as r}from"./Api-DGMTLhRm.js";import{A as c}from"./AddModal-o-0ShpaO.js";import{F as ne}from"./FilterModal-Bn-ZVyM3.js";import{i as l}from"./Cars-2_9qFJX9.js";import{F as U,L as z,a as te}from"./List-CWcpE-SL.js";import{u as s}from"./DragDrop-D4AOof6k.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-TLbMidFA.js";import"./Icon-BSWzGvLf.js";import"./Label-CmMRyCgB.js";import"./ModernAutoControlledComponent-CIi-16Zs.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-ComNSsGh.js";import"./toFinite-Ch3-mxAi.js";import"./forEach-xROvcHNC.js";import"./Dimmer-Wnz_k9oJ.js";import"./Portal-BF3g11_x.js";import"./keyboardKey-UPAJnvsN.js";import"./map-q00LD5yS.js";import"./Table-dC-OITkD.js";import"./Loader-ENK_7K4O.js";import"./Checkbox-DNAhP8My.js";import"./_baseSet-KiE310VO.js";import"./_baseAssignValue-CihLrf3R.js";import"./Popup-Cm3a5DAq.js";import"./index-D8tE4-9w.js";import"./_arrayReduce-CrxnWFSq.js";import"./index-CL_u4TdI.js";import"./createClass-CGi6Kyeu.js";import"./toPropertyKey-BdisF6oo.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";import"./Dropdown-29n6mrng.js";import"./without-CqD5ld8v.js";import"./isArrayLikeObject-GAfAHYyv.js";import"./isEmpty-4KKn6hcF.js";import"./deburr-ChK6Lkvo.js";import"./filter-DnFvB4UZ.js";import"./Draggable-DgqTHgp8.js";import"./useDrop-TaNt96Kh.js";import"./index-CwwtuY6R.js";import"./index.es34-NGGuPWEW.js";import"./Message-C8FEkoL7.js";import"./Input-R2TI-Tve.js";import"./Toaster-DNpoh-78.js";import"./Transition-C6XMim_5.js";import"./v4-BKrj-4V8.js";import"./Modal-CF7nwjHg.js";import"./index.es3-BBSLpI2q.js";import"./Form-82LA1gPL.js";import"./Confirm-bSEdxVBf.js";import"./Pagination-DXFy5u_P.js";import"./_isIterateeCall-B_DSrIuf.js";import"./Menu-BuaZ_Fim.js";import"./Grid-CEMRQbwm.js";import"./Header-CBddMSBf.js";import"./DropdownButton-D9K1WsMu.js";import"./EditModal-BzG3JY8t.js";import"./AssociatedDropdown-C3FjiqxV.js";import"./FuzzyDate-Nmvtcynx.js";import"./DateInput-DXy9ggzE.js";import"./Trans-Dpg65UI1.js";import"./context-CzZH1K0_.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";const a=Z(e=>{const g=$.usePrevious(e.columns),u=y=>{if(!y.sortable)return;const d=y.name;let p=V;y.name===e.sortColumn?p=e.sortDirection===V?ee:V:y.sortDirection&&(p=y.sortDirection),e.onSort(d,p)};return R.useEffect(()=>{if(!G.isEqual(e.columns,g)){const{key:y,storage:d}=e.session||{},p=Q.restoreSession(y,d),O=p.sortColumn||e.defaultSort,H=p.sortDirection||e.defaultSortDirection||V,{page:W}=e;if(O)e.onSort(O,H,W);else{const X=K.findWhere(e.columns,{sortable:!0});X?u(X):e.onInit()}}},[e.columns]),t.jsx(Y,{...e,onColumnClick:u.bind(void 0)})});a.defaultProps={configurable:!0,tableProps:{celled:!0,sortable:!0}};a.__docgenInfo={description:`The <code>ListTable</code> component renders a list which has the ability to load, save, and delete records from
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
will display as the property value.`},configurable:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, columns can be shown/hidden by the user.",defaultValue:{value:"true",computed:!1}},expandableRows:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, the rows of the table can be expanded and collapsed."},expandPanel:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any, activePanel: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}},{name:"activePanel",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:"Function that returns JSX to render when the row for the passed item is expanded."},isRowSelected:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}}},description:"Callback returning <code>true</code> if the row for the passed item is selected."},items:{required:!0,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>",nullable:!0},description:"An array of objects to render as rows in the list."},loading:{required:!1,flowType:{name:"boolean"},description:"Set to <code>true</code> if the list is currently loading data. If true, a loading indicator will display."},onClearSelected:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback to clear the selected set of records."},onColumnClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(column: Column) => void",signature:{arguments:[{name:"column",type:{name:"signature",type:"object",raw:`{
  className?: string,
  hidden?: boolean,
  label?: string,
  name: string,
  render?: (item: any) => Element<any>,
  renderHeader?: (item: any) => Element<any>,
  resolve?: (item: any) => any,
  sortable: boolean
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!1}},{key:"renderHeader",value:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!1}},{key:"resolve",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!0}}]}}}],return:{name:"void"}}},description:"Callback fired when the passed column is clicked."},onRowSelect:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any)=> void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:`Callback fired when the passed item is selected. This callback is <i>only</i> fired if the <code>selectable</code>
prop is passed as <code>true</code>.`},onSelectAll:{required:!1,flowType:{name:"signature",type:"function",raw:"(items: Array<any>) => void",signature:{arguments:[{name:"items",type:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"}}],return:{name:"void"}}},description:"Callback fired when the select all checkbox in the table header is clicked."},renderEmptyMessage:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:"A function that returns a JSX element to render when the list is empty."},renderEmptyRow:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`A function that returns a custom JSX element to render when the list is empty. This element will replace the
entire single row of the table.`},renderItem:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any, index: number, children?: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}},{name:"index",type:{name:"number"}},{name:"children",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:`A function that returns a custom JSX element to render for the passed item. This element will replace the entire
table row.`},sortColumn:{required:!1,flowType:{name:"string"},description:"Name of the current sort column."},sortDirection:{required:!1,flowType:{name:"string"},description:"Current sort direction (ascending or descending)."},tableProps:{required:!1,flowType:{name:"any"},description:`Customization props for the
<a target="_blank" href="https://react.semantic-ui.com/collections/table/"><code>Table</code></a>
component.`,defaultValue:{value:`{
  celled: true,
  sortable: true
}`,computed:!1}},onInit:{required:!1,flowType:{name:"signature",type:"function",raw:"(page?: number) => void",signature:{arguments:[{name:"page",type:{name:"number"}}],return:{name:"void"}}},description:"Callback supplied by the <code>DataList</code> higher-order component which can be used to initialize the list."},onSort:{required:!1,flowType:{name:"signature",type:"function",raw:"(sortColumn: string, sortDirection: string, page?: number) => void",signature:{arguments:[{name:"sortColumn",type:{name:"string"}},{name:"sortDirection",type:{name:"string"}},{name:"page",type:{name:"number"}}],return:{name:"void"}}},description:"Callback supplied by the <code>DataList</code> higher-order component which can be used to sort the list."}}};const{action:n}=__STORYBOOK_MODULE_ACTIONS__,Pn={title:"Components/Semantic UI/ListTable",component:a},i=[{name:"edit"},{name:"copy"},{name:"delete"}],m=[{name:"make",label:"Make",sortable:!0},{name:"model",label:"Model",sortable:!0},{name:"vin",label:"Vin",sortable:!0},{name:"address",label:"Address",sortable:!0},{name:"city",label:"City",sortable:!0},{name:"state",label:"State",sortable:!0}],f=s(()=>t.jsx(a,{actions:i,collectionName:"items",columns:m,onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:l,perPage:10})),onDelete:n("delete"),onSave:n("save"),searchable:!0})),b=s(()=>t.jsx(a,{actions:i,collectionName:"items",columns:m,modal:{component:c},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:l,perPage:10})),onDelete:n("delete"),onSave:n("save"),searchable:!0})),h=s(()=>t.jsx(a,{actions:i,collectionName:"items",columns:m,modal:{component:c},onCopy:n("copy"),onLoad:r.onLoadEmpty.bind(void 0),onDelete:n("delete"),onSave:()=>Promise.resolve(),searchable:!0})),v=s(()=>{const[e,g]=R.useState(0);return t.jsxs(t.Fragment,{children:[t.jsx(J,{content:`Clicks: ${e}`,primary:!0,onClick:()=>g(u=>u+1)}),t.jsx(a,{actions:i,collectionName:"items",columns:[{name:"make",label:"Make",sortable:!0},{name:"model",label:"Model",sortable:!0},{name:"vin",label:"Vin",sortable:!0},{name:"address",label:"Address",sortable:!0},{name:"city",label:"City",sortable:!0},{name:"state",label:"State",sortable:!0}],onCopy:n("copy"),onLoad:u=>r.onLoad(o.extend(u,{items:l})),onDelete:n("delete"),onSave:n("save"),perPageOptions:[10,25,50,100],searchable:!0})]})}),w=s(()=>t.jsx(a,{actions:i,collectionName:"items",columns:m,csvExportButton:{color:"blue",location:"bottom"},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:l,perPage:10})),onDelete:n("delete"),onSave:n("save"),searchable:!0})),C=s(()=>t.jsx(a,{actions:i,collectionName:"items",columns:[{name:"make",label:"Make",sortable:!0},{name:"model",label:"Model",sortable:!0},{name:"vin",label:"Vin",sortable:!0,hidden:!0},{name:"address",label:"Address",sortable:!0},{name:"city",label:"City",sortable:!0},{name:"state",label:"State",sortable:!0}],filters:{component:c},modal:{component:c},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:l,perPage:10})),onDelete:n("delete"),onSave:()=>Promise.resolve(),searchable:!0})),L=s(()=>t.jsx(a,{actions:i,collectionName:"items",columns:m,deleteButton:{color:"red",location:"top"},modal:{component:c},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:l,perPage:10})),onDelete:n("delete"),onDeleteAll:n("delete all"),onSave:()=>Promise.resolve(),searchable:!0})),S=s(()=>t.jsx(a,{actions:i,collectionName:"items",columns:m,onCopy:n("copy"),onLoad:r.onLoadEmpty.bind(void 0),onDelete:n("delete"),onSave:n("save"),searchable:!0})),k=s(()=>t.jsx(a,{actions:i,buttons:[{render:e=>t.jsx(J,{content:"Button 1",onClick:n("button1")},e)},{location:"bottom",render:e=>t.jsx(J,{content:"Button 2",onClick:n("button2")},e)}],collectionName:"items",columns:m,modal:{component:c},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:l,perPage:10})),onDelete:n("delete"),onSave:()=>Promise.resolve(),searchable:!0})),D=s(()=>t.jsx(a,{actions:i,collectionName:"items",columns:m,filters:{component:ne,props:{test:""}},modal:{component:c},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:l,perPage:10})),onDelete:n("delete"),onSave:()=>Promise.resolve(),searchable:!0})),T=s(()=>t.jsx(a,{actions:i,collectionName:"items",columns:m,modal:{component:c},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:l,perPage:10})),onDelete:n("delete"),onSave:()=>Promise.resolve(),searchable:!0,saved:!0})),q=s(()=>t.jsx(a,{actions:i,collectionName:"items",columns:m,filters:{component:z,props:{filters:[{attributeName:"test",label:"Test",key:"test",type:U.string}]}},modal:{component:c},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:l,perPage:10})),onDelete:n("delete"),onSave:()=>Promise.resolve(),searchable:!0})),P=s(()=>t.jsx(a,{actions:i,collectionName:"items",columns:m,filters:{component:z,defaults:{filters:[{key:"test",operator:te.equal,value:"xyz"}]},props:{filters:[{attributeName:"test",label:"Test",key:"test",type:U.string}]}},modal:{component:c},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:l,perPage:10})),onDelete:n("delete"),onSave:()=>Promise.resolve(),searchable:!0})),x=s(()=>t.jsx(a,{actions:i,collectionName:"items",columns:m,filters:{component:z,props:{filters:[{attributeName:"test",label:"Test",key:"test",type:U.string}]},showLabels:!0},modal:{component:c},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:l,perPage:10})),onDelete:n("delete"),onSave:()=>Promise.resolve(),searchable:!0})),N=s(()=>t.jsx(a,{actions:i,collectionName:"items",columns:m,modal:{component:c},onCopy:n("copy"),onLoad:e=>r.sleep(5e3).then(()=>r.onLoad(o.extend(e,{items:l,perPage:10}))),onDelete:n("delete"),onSave:()=>Promise.resolve(),searchable:!0})),A=s(()=>t.jsx(a,{actions:i,collectionName:"items",columns:m,defaultPerPage:10,onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:l})),onDelete:n("delete"),onSave:n("save"),perPageOptions:[10,25,50,100],searchable:!0})),_=s(()=>t.jsx(a,{actions:i,collectionName:"items",columns:m,onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:l})),onDelete:n("delete"),onSave:n("save"),perPageOptions:[10,25,50,100],searchable:!0})),I=s(()=>t.jsx(a,{actions:i,collectionName:"items",columns:m,modal:{component:c},onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:l,perPage:10})),onDelete:n("delete"),onSave:()=>Promise.resolve(),polling:5e3,searchable:!0})),E=s(()=>t.jsx(a,{actions:i,collectionName:"items",columns:m,onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:l,perPage:10})),onDelete:n("delete"),onSave:n("save"),searchable:!0,showRecordCount:!0})),j=s(()=>{const[e,g]=R.useState([]),u=R.useCallback(d=>o.contains(e,d.id),[e]),y=R.useCallback(d=>{u(d)?g(p=>o.filter(p,O=>O!==d.id)):g(p=>[...p,d.id])},[e]);return t.jsx(a,{actions:i,collectionName:"items",columns:m,isRowSelected:u.bind(void 0),onCopy:n("copy"),onLoad:d=>r.onLoad(o.extend(d,{items:l,perPage:10})),onDelete:n("delete"),onRowSelect:y.bind(void 0),onSave:n("save"),searchable:!0,selectable:!0})}),M=s(()=>t.jsx(a,{actions:i,collectionName:"items",columns:m.map(e=>({...e,sortable:!1})),onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:l,perPage:10})),onDelete:n("delete"),onSave:n("save"),searchable:!0})),B=s(()=>t.jsx(a,{actions:i,collectionName:"items",columns:o.map(m,e=>e.name==="vin"?{...e,sortDirection:"descending"}:e),onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:l,perPage:10})),onDelete:n("delete"),onSave:n("save"),searchable:!0})),F=s(()=>t.jsx(a,{actions:i,collectionName:"items",columns:m,configurable:!1,onCopy:n("copy"),onLoad:e=>r.onLoad(o.extend(e,{items:l,perPage:10})),onDelete:n("delete"),onSave:n("save"),searchable:!0}));f.__docgenInfo={description:"",methods:[],displayName:"Default"};b.__docgenInfo={description:"",methods:[],displayName:"AddButton"};h.__docgenInfo={description:"",methods:[],displayName:"AddButtonEmpty"};v.__docgenInfo={description:"",methods:[],displayName:"Count"};w.__docgenInfo={description:"",methods:[],displayName:"CsvExport"};C.__docgenInfo={description:"",methods:[],displayName:"CustomizableColumns"};L.__docgenInfo={description:"",methods:[],displayName:"DeleteAllButton"};S.__docgenInfo={description:"",methods:[],displayName:"Empty"};k.__docgenInfo={description:"",methods:[],displayName:"ExtraButtons"};D.__docgenInfo={description:"",methods:[],displayName:"Filters"};T.__docgenInfo={description:"",methods:[],displayName:"InitialSave"};q.__docgenInfo={description:"",methods:[],displayName:"ListFiltersModal"};P.__docgenInfo={description:"",methods:[],displayName:"ListFiltersModalDefaults"};x.__docgenInfo={description:"",methods:[],displayName:"ListFiltersModalWithLabels"};N.__docgenInfo={description:"",methods:[],displayName:"Loading"};A.__docgenInfo={description:"",methods:[],displayName:"PerPage"};_.__docgenInfo={description:"",methods:[],displayName:"PerPageNoDefault"};I.__docgenInfo={description:"",methods:[],displayName:"Polling"};E.__docgenInfo={description:"",methods:[],displayName:"RecordCount"};j.__docgenInfo={description:"",methods:[],displayName:"Selectable"};M.__docgenInfo={description:"",methods:[],displayName:"Unsortable"};B.__docgenInfo={description:"",methods:[],displayName:"SortDescending"};F.__docgenInfo={description:"",methods:[],displayName:"NoColumnSelector"};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={action('save')} searchable />)`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={action('save')} searchable />)`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={Api.onLoadEmpty.bind(this)} onDelete={action('delete')} onSave={() => Promise.resolve()} searchable />)`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`useDragDrop(() => {
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
    }))} onDelete={action('delete')} onSave={action('save')} perPageOptions={[10, 25, 50, 100]} searchable />
    </>;
})`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} csvExportButton={{
  color: 'blue',
  location: 'bottom'
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={action('save')} searchable />)`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={[{
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
  perPage: 10
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} searchable />)`,...C.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} deleteButton={{
  color: 'red',
  location: 'top'
}} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onDeleteAll={action('delete all')} onSave={() => Promise.resolve()} searchable />)`,...L.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} onCopy={action('copy')} onLoad={Api.onLoadEmpty.bind(this)} onDelete={action('delete')} onSave={action('save')} searchable />)",...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} buttons={[{
  render: index => <Button content='Button 1' key={index} onClick={action('button1')} />
}, {
  location: 'bottom',
  render: index => <Button content='Button 2' key={index} onClick={action('button2')} />
}]} collectionName='items' columns={columns} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} searchable />)`,...k.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} filters={{
  component: FilterModal,
  props: {
    test: ''
  }
}} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} searchable />)`,...D.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} searchable saved />)`,...T.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} filters={{
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
  perPage: 10
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} searchable />)`,...q.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} filters={{
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
  perPage: 10
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} searchable />)`,...P.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} filters={{
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
  perPage: 10
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} searchable />)`,...x.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.sleep(5000).then(() => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
})))} onDelete={action('delete')} onSave={() => Promise.resolve()} searchable />)`,...N.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} defaultPerPage={10} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items
}))} onDelete={action('delete')} onSave={action('save')} perPageOptions={[10, 25, 50, 100]} searchable />)`,...A.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items
}))} onDelete={action('delete')} onSave={action('save')} perPageOptions={[10, 25, 50, 100]} searchable />)`,..._.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} polling={5000} searchable />)`,...I.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={action('save')} searchable showRecordCount />)`,...E.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`useDragDrop(() => {
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
    perPage: 10
  }))} onDelete={action('delete')} onRowSelect={onRowSelect.bind(this)} onSave={action('save')} searchable selectable />;
})`,...j.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns.map(c => ({
  ...c,
  sortable: false
}))} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={action('save')} searchable />)`,...M.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={_.map(columns, column => column.name === 'vin' ? {
  ...column,
  sortDirection: 'descending'
} : column)} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={action('save')} searchable />)`,...B.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`useDragDrop(() => <ListTable actions={actions} collectionName='items' columns={columns} configurable={false} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={action('save')} searchable />)`,...F.parameters?.docs?.source}}};const xn=["Default","AddButton","AddButtonEmpty","Count","CsvExport","CustomizableColumns","DeleteAllButton","Empty","ExtraButtons","Filters","InitialSave","ListFiltersModal","ListFiltersModalDefaults","ListFiltersModalWithLabels","Loading","PerPage","PerPageNoDefault","Polling","RecordCount","Selectable","Unsortable","SortDescending","NoColumnSelector"];export{b as AddButton,h as AddButtonEmpty,v as Count,w as CsvExport,C as CustomizableColumns,f as Default,L as DeleteAllButton,S as Empty,k as ExtraButtons,D as Filters,T as InitialSave,q as ListFiltersModal,P as ListFiltersModalDefaults,x as ListFiltersModalWithLabels,N as Loading,F as NoColumnSelector,A as PerPage,_ as PerPageNoDefault,I as Polling,E as RecordCount,j as Selectable,B as SortDescending,M as Unsortable,xn as __namedExportsOrder,Pn as default};
