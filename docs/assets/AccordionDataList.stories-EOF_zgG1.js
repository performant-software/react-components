import{j as n}from"./jsx-runtime-D9TvR9R2.js";import{r as d}from"./index-C0dDX-lL.js";import{a as l}from"./chunk-WFFRPTHA-B2vgThZf.js";import{d as a}from"./index-Mgmwa0Qa.js";import{B as u}from"./Button-Dcib8V--.js";import{_ as c}from"./index-default-C_maRo4o.js";import{C as V}from"./Checkbox-Bi1MrC0t.js";import{D as F}from"./Dropdown-CChVlGq2.js";import{N as H}from"./NestedAccordion-BMhkatZj.js";import{u as J,S}from"./DataList-BHtO_4q3.js";import{u as U}from"./List-JGzjkybZ.js";import{A as w}from"./AddModal-Dpe-WfAQ.js";import{A as v}from"./Api-DXLamogn.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./mapValues-CZh2vnSw.js";import"./pickBy-CU2rOOKe.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-Bu_b4Pek.js";import"./index-Cw1G72V2.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./debounce-Bq1aTuh-.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-C_4y_n4F.js";import"./Icon-BGzIEILD.js";import"./Label-BqnFaqey.js";import"./ModernAutoControlledComponent-CBEnGjal.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-BAV9TYTx.js";import"./toFinite-DWd2HYc9.js";import"./forEach-Bj9nU5MO.js";import"./Dimmer-kmE_IUk6.js";import"./Portal-CKYxdKwP.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DOYXiIEK.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-Dr4OE-Ab.js";import"./_baseSet-N8oZ1kqS.js";import"./_baseAssignValue-oMV-Qdk1.js";import"./without-5b9zAUWg.js";import"./isArrayLikeObject-BDKOwBZt.js";import"./isEmpty-D4udnfVx.js";import"./deburr-ClVont3z.js";import"./index-C2Sldg7a.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-BXgalVMq.js";import"./Accordion-KxcosxR9.js";import"./index.es34-BiuytAhh.js";import"./iframe-DFbfuCSq.js";import"../sb-preview/runtime.js";import"./index.es32--33kH-MQ.js";import"./uuid-BH6G0oTz.js";import"./Message-BUccNRJp.js";import"./Input-CEHVpxQU.js";import"./i18n-C9xJ7SCg.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";import"./ListSession-hS-NIzK1.js";import"./Toaster-tYXYYhON.js";import"./Transition-Bkcp4SUV.js";import"./Confirm-ZOP2cYBv.js";import"./Modal-B0p4Zslq.js";import"./Pagination-BfI_6x02.js";import"./Menu-UzpVjXjU.js";import"./Grid-gE1yEjqh.js";import"./Header-Bz3w9bIk.js";import"./DropdownButton-BEVDpDCZ.js";import"./EditModal-fSYoUXNP.js";import"./index.es3-CY7Yr_P-.js";import"./Loader-DQkWekFb.js";import"./Form-cOZUQdvM.js";import"./AssociatedDropdown-CtqsjIBT.js";import"./FuzzyDate-BpMQrOTr.js";import"./DateInput-C8iigAqa.js";import"./Trans-BYRLofKo.js";import"./objectWithoutProperties--RY0eV0u.js";import"./utils-DCllE6BU.js";import"./createClass-D0eOxKhW.js";const X=U(e=>{const i=d.useCallback(t=>{const m=c.filter(e.actions,r=>!r.accept||r.accept(t));return c.isEmpty(m)?null:n.jsx(u.Group,{children:c.map(m,(r,T)=>n.jsx(u,{"aria-label":r.name,basic:!0,color:r.color,icon:r.icon,onClick:r.onClick&&r.onClick.bind(void 0,t),title:r.title},`${r.name}-${T}`))})},[e.actions]),s=d.useCallback(t=>e.selectable?n.jsx(V,{className:"row-select-checkbox",onClick:(m,r)=>e.onRowSelect(r,t,m),checked:!!e.selectedRows.find(m=>m.id===t.id)},`select-checkbox-${t.id}`):null,[e.onRowSelect,e.selectable,e.selectedRows]);return n.jsx("div",{className:["accordion-data-list",e.className||""].join(" "),children:n.jsx(H,{getChildItems:e.getChildItems,onItemToggle:t=>e.onItemToggle&&e.onItemToggle(t),renderItem:t=>e.renderItem(t),renderRight:t=>n.jsxs(n.Fragment,{children:[i(t),s(t)]}),rootItems:e.rootItems,showToggle:t=>e.showToggle(t)})})}),O=e=>{const i=d.useMemo(()=>e.getRootItems(e.items),[e.items]),s=d.useCallback(o=>e.getChildItems(e.items,o),[e.items]),t=d.useRef(),m=d.useMemo(()=>{const o=c.find(e.sort,{value:e.sortColumn});return o&&o.text},[e.sort,e.sortColumn]),r=d.useCallback(o=>{if(!e.onSort)return;let p;o.value!==e.sortColumn&&(p=o.direction),e.onSort(o.value,p)},[e.onSort,e.sortColumn]),T=d.useCallback(()=>c.isEmpty(e.sort)?null:n.jsxs(u.Group,{basic:!0,style:{fontSize:"inherit"},children:[n.jsx(u,{"aria-label":"Sort by",content:m,icon:e.sortDirection===S?"sort alphabet up":"sort alphabet down",onClick:o=>t.current&&t.current.handleClick(o)}),n.jsx(F,{"aria-label":"Sort by toggle",className:"button icon",floating:!0,options:c.map(e.sort,o=>({...o,onClick:()=>r(o)})),ref:t,trigger:n.jsx(n.Fragment,{}),value:e.sortColumn})]}),[e.sort,e.sortColumn,e.sortDirection]);return d.useEffect(()=>{if(c.isEmpty(e.sort))return e.onInit();const{page:o}=e;let{sortColumn:p="",sortDirection:I=S}=e;if(!p){const q=c.first(e.sort);q&&(p=q.value,q.direction&&(I=q.direction))}return e.onSort(p,I,o)},[]),n.jsx(X,{...e,renderListHeader:T,rootItems:i,getChildItems:s})},C=J(O);O.__docgenInfo={description:"",methods:[],displayName:"AccordionDataList",props:{actions:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"component",value:{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>",required:!0}},{key:"props",value:{name:"any",required:!0}},{key:"state",value:{name:"any",required:!0}}]}},description:'If provided, the passed modal will be rendered when the "add" button is clicked.'},onCopy:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}}},description:`If provided, this callback is fired when the "copy" action is clicked for an item. The consuming component
should generate a copy of the selected item and return that value. The return value is then set at the
current item in the edit modal.`},onDelete:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:'Callback fired when the "delete" action is clicked for an item.'},onDeleteAll:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:"Callback fired when the delete all button is clicked. This prop expects a Promise as the return value."},onPageChange:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the page is changed via the pagination component."},onPerPageChange:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the per page value is changed."},onSave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => Promise<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:`Callback fired when the save button is clicked in the add/edit modal. This function expects a Promise as the
return value.`},page:{required:!0,flowType:{name:"number"},description:"Current page number."},pages:{required:!1,flowType:{name:"number"},description:"Number of pages in the list."},perPage:{required:!1,flowType:{name:"number"},description:"The number of records to display per page."},perPageOptions:{required:!1,flowType:{name:"Array",elements:[{name:"number"}],raw:"Array<number>"},description:"The options to display in the dropdown for the per page selector."},renderDeleteModal:{required:!1,flowType:{name:"signature",type:"function",raw:"({ selectedItem: any, onCancel: () => void, onConfirm: () => void }) => Element<any>",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{ selectedItem: any, onCancel: () => void, onConfirm: () => void }",signature:{properties:[{key:"selectedItem",value:{name:"any",required:!0}},{key:"onCancel",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onConfirm",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:'Custom render function for the modal that appears on the "delete" action.'},renderListHeader:{required:!1,flowType:{name:"signature",type:"function",raw:"() => ?Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>",nullable:!0}}},description:"If provided, this function will return a JSX element that will prepend to the list header."},renderSearch:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:"If provided, this function will return a JSX element that will replace the default search input."},searchable:{required:!1,flowType:{name:"boolean"},description:"Returns true if the renderSearch prop should be used to render a search input element."},selectable:{required:!0,flowType:{name:"boolean"},description:`If set to <code>true</code>, checkboxes will render as the first table column, allowing each row to be selectable.
The consuming component is responsible for tracking the selected items.`},showRecordCount:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, the total number of records will display in the list header."},getChildItems:{required:!0,flowType:{name:"signature",type:"function",raw:"(items: ?Array<any>, item: any) => Array<any>",signature:{arguments:[{name:"items",type:{name:"Array",elements:[{name:"any"}],raw:"Array<any>",nullable:!0}},{name:"item",type:{name:"any"}}],return:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"}}},description:""},getRootItems:{required:!0,flowType:{name:"signature",type:"function",raw:"(items: ?Array<any>) => Array<any>",signature:{arguments:[{name:"items",type:{name:"Array",elements:[{name:"any"}],raw:"Array<any>",nullable:!0}}],return:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"}}},description:""},onInit:{required:!0,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSort:{required:!0,flowType:{name:"signature",type:"function",raw:"(column: string, direction: ?string, page?: number) => void",signature:{arguments:[{name:"column",type:{name:"string"}},{name:"direction",type:{name:"string",nullable:!0}},{name:"page",type:{name:"number"}}],return:{name:"void"}}},description:""},sort:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: any,
  value: any,
  text: string,
  direction?: string
}`,signature:{properties:[{key:"key",value:{name:"any",required:!0}},{key:"value",value:{name:"any",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"direction",value:{name:"string",required:!1}}]}}],raw:"Array<Sort>"},description:""},sortColumn:{required:!1,flowType:{name:"string"},description:""},sortDirection:{required:!1,flowType:{name:"string"},description:""}}};const xt={title:"Components/Semantic UI/AccordionDataList",decorators:[a.withKnobs]},k=[{id:1,name:"Parent 1",children:[{id:3,name:"Child 1"},{id:4,name:"Child 2"}]},{id:2,name:"Parent 2",children:[{id:5,name:"Child 3",children:[{id:6,name:"Grandchild 1",parent_id:5}]}]}],y=()=>n.jsx(C,{actions:[{name:"edit",accept:()=>a.boolean("Can edit",!0)},{name:"copy",accept:()=>a.boolean("Can copy",!0)},{name:"delete",accept:()=>a.boolean("Can delete",!0)}],collectionName:"items",getChildItems:(e,i)=>i.children,getRootItems:e=>e,modal:{component:w},onDelete:l("delete"),onSave:()=>(l("save")(),Promise.resolve()),onLoad:e=>v.onLoad({...e,items:k}),renderItem:e=>e.name,showToggle:()=>!0}),g=()=>n.jsx(C,{actions:[{name:"edit",accept:()=>a.boolean("Can edit",!0)},{name:"copy",accept:()=>a.boolean("Can copy",!0)},{name:"delete",accept:()=>a.boolean("Can delete",!0)}],collectionName:"items",getChildItems:(e,i)=>i.children,getRootItems:e=>e,modal:{component:w},onDelete:l("delete"),onSave:()=>(l("save")(),Promise.resolve()),onLoad:e=>v.onLoad({...e,items:k}),renderItem:e=>e.name,showRecordCount:!0,showToggle:()=>!0}),f=()=>n.jsx(C,{actions:[{name:"edit",accept:()=>a.boolean("Can edit",!0)},{name:"copy",accept:()=>a.boolean("Can copy",!0)},{name:"delete",accept:()=>a.boolean("Can delete",!0)}],collectionName:"items",getChildItems:(e,i)=>i.children,getRootItems:e=>e,modal:{component:w},onDelete:l("delete"),onSave:()=>(l("save")(),Promise.resolve()),onLoad:e=>v.onLoad({...e,items:k}),renderItem:e=>e.name,showToggle:()=>!0,sort:[{key:"name",value:"name",text:"Name"},{key:"date",value:"date",text:"Date"}]}),h=()=>n.jsx(C,{actions:[{name:"edit",accept:()=>a.boolean("Can edit",!0)},{name:"copy",accept:()=>a.boolean("Can copy",!0)},{name:"delete",accept:()=>a.boolean("Can delete",!0)}],buttons:[{render:()=>n.jsx(u,{children:"Test"},"1")},{render:()=>n.jsx(u,{children:"Test 2"},"2")}],collectionName:"items",getChildItems:(e,i)=>i.children,getRootItems:e=>e,modal:{component:w},onDelete:l("delete"),onSave:()=>(l("save")(),Promise.resolve()),onLoad:e=>v.onLoad({...e,items:k}),onRowSelect:l("row selected"),renderItem:e=>e.name,selectable:!0,selectedRows:[{id:1},{id:2},{id:3}],showToggle:()=>!0}),b=()=>{const[e,i]=d.useState([]);return n.jsx(C,{actions:[{name:"edit",accept:()=>a.boolean("Can edit",!0)},{name:"copy",accept:()=>a.boolean("Can copy",!0)},{name:"delete",accept:()=>a.boolean("Can delete",!0)}],buttons:[{render:()=>n.jsx(u,{children:"Test"},"1")},{render:()=>n.jsx(u,{children:"Test 2"},"2")}],collectionName:"items",getChildItems:(s,t)=>t.children,getRootItems:s=>s,modal:{component:w},onDelete:l("delete"),onSave:()=>(l("save")(),Promise.resolve()),onLoad:s=>v.onLoad({...s,items:k}),onRowSelect:({checked:s},t)=>{i(s?m=>[...m,t]:m=>c.filter(m,r=>r!==t))},renderItem:s=>s.name,selectable:!0,selectedRows:e,showToggle:()=>!0})};y.__docgenInfo={description:"",methods:[],displayName:"Default"};g.__docgenInfo={description:"",methods:[],displayName:"WithRecordCount"};f.__docgenInfo={description:"",methods:[],displayName:"Sortable"};h.__docgenInfo={description:"",methods:[],displayName:"Selectable"};b.__docgenInfo={description:"",methods:[],displayName:"SelectableControlled"};var A,x,L;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`() => <AccordionDataList actions={[{
  name: 'edit',
  accept: () => boolean('Can edit', true)
}, {
  name: 'copy',
  accept: () => boolean('Can copy', true)
}, {
  name: 'delete',
  accept: () => boolean('Can delete', true)
}]} collectionName='items' getChildItems={(items, item) => item.children} getRootItems={items => items} modal={{
  component: AddModal
}} onDelete={action('delete')} onSave={() => {
  action('save')();
  return Promise.resolve();
}} onLoad={params => Api.onLoad({
  ...params,
  items: data
})} renderItem={item => item.name} showToggle={() => true} />`,...(L=(x=y.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var D,j,R;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`() => <AccordionDataList actions={[{
  name: 'edit',
  accept: () => boolean('Can edit', true)
}, {
  name: 'copy',
  accept: () => boolean('Can copy', true)
}, {
  name: 'delete',
  accept: () => boolean('Can delete', true)
}]} collectionName='items' getChildItems={(items, item) => item.children} getRootItems={items => items} modal={{
  component: AddModal
}} onDelete={action('delete')} onSave={() => {
  action('save')();
  return Promise.resolve();
}} onLoad={params => Api.onLoad({
  ...params,
  items: data
})} renderItem={item => item.name} showRecordCount showToggle={() => true} />`,...(R=(j=g.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var P,N,E;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`() => <AccordionDataList actions={[{
  name: 'edit',
  accept: () => boolean('Can edit', true)
}, {
  name: 'copy',
  accept: () => boolean('Can copy', true)
}, {
  name: 'delete',
  accept: () => boolean('Can delete', true)
}]} collectionName='items' getChildItems={(items, item) => item.children} getRootItems={items => items} modal={{
  component: AddModal
}} onDelete={action('delete')} onSave={() => {
  action('save')();
  return Promise.resolve();
}} onLoad={params => Api.onLoad({
  ...params,
  items: data
})} renderItem={item => item.name} showToggle={() => true} sort={[{
  key: 'name',
  value: 'name',
  text: 'Name'
}, {
  key: 'date',
  value: 'date',
  text: 'Date'
}]} />`,...(E=(N=f.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var _,B,M;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`() => <AccordionDataList actions={[{
  name: 'edit',
  accept: () => boolean('Can edit', true)
}, {
  name: 'copy',
  accept: () => boolean('Can copy', true)
}, {
  name: 'delete',
  accept: () => boolean('Can delete', true)
}]} buttons={[{
  render: () => <Button key='1'>Test</Button>
}, {
  render: () => <Button key='2'>Test 2</Button>
}]} collectionName='items' getChildItems={(items, item) => item.children} getRootItems={items => items} modal={{
  component: AddModal
}} onDelete={action('delete')} onSave={() => {
  action('save')();
  return Promise.resolve();
}} onLoad={params => Api.onLoad({
  ...params,
  items: data
})} onRowSelect={action('row selected')} renderItem={item => item.name} selectable selectedRows={[{
  id: 1
}, {
  id: 2
}, {
  id: 3
}]} showToggle={() => true} />`,...(M=(B=h.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var G,W,$;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState([]);
  return <AccordionDataList actions={[{
    name: 'edit',
    accept: () => boolean('Can edit', true)
  }, {
    name: 'copy',
    accept: () => boolean('Can copy', true)
  }, {
    name: 'delete',
    accept: () => boolean('Can delete', true)
  }]} buttons={[{
    render: () => <Button key='1'>Test</Button>
  }, {
    render: () => <Button key='2'>Test 2</Button>
  }]} collectionName='items' getChildItems={(items, item) => item.children} getRootItems={items => items} modal={{
    component: AddModal
  }} onDelete={action('delete')} onSave={() => {
    action('save')();
    return Promise.resolve();
  }} onLoad={params => Api.onLoad({
    ...params,
    items: data
  })} onRowSelect={({
    checked
  }, item) => {
    if (checked) {
      setSelected(prevSelected => [...prevSelected, item]);
    } else {
      setSelected(prevSelected => _.filter(prevSelected, i => i !== item));
    }
  }} renderItem={item => item.name} selectable selectedRows={selected} showToggle={() => true} />;
}`,...($=(W=b.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};const Lt=["Default","WithRecordCount","Sortable","Selectable","SelectableControlled"];export{y as Default,h as Selectable,b as SelectableControlled,f as Sortable,g as WithRecordCount,Lt as __namedExportsOrder,xt as default};
