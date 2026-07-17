import{r as l,j as t}from"./iframe-ColLpCq0.js";import{B as u}from"./Button-DLliuTg0.js";import{_ as A}from"./index-default-B8-H6N8J.js";import{_ as d}from"./index-default-C0I3bBxV.js";import{C as x}from"./Checkbox-DM_54-HN.js";import{D as L}from"./Dropdown-DQ57WfiI.js";import{N as D}from"./NestedAccordion-BolIGGAD.js";import{u as R,S as T}from"./DataList-DkzqcVcH.js";import{u as j}from"./List-DPQABB4H.js";import{A as v}from"./AddModal-D-tSVp02.js";import{A as b}from"./Api-DGMTLhRm.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-DT6_w2aY.js";import"./_getPrototype-dFVwFHqx.js";import"./Icon-VLftFoWa.js";import"./Label-BuJLNQet.js";import"./ModernAutoControlledComponent-GagUuvWz.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-3WyF2aiU.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-BiG3VRAM.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-CPqsDP_0.js";import"./Portal-Ci3UlCdp.js";import"./keyboardKey-CCZT5mKo.js";import"./map-CuZJRvr2.js";import"./_baseSet-lZ1TFP0J.js";import"./_assignValue-wlBxhqFj.js";import"./_baseAssignValue-yJv1-bft.js";import"./without-Da1hi6IK.js";import"./isArrayLikeObject-DSLl7ti9.js";import"./isEmpty-CIv_nSFx.js";import"./deburr-DEBArWTG.js";import"./index-BRMalJOx.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEqual-mHuJTF3G.js";import"./filter-CGwd_uf8.js";import"./Accordion-CGb3p0AP.js";import"./index.es28-aRnl8fXs.js";import"./index.es33-C8iyb9Mp.js";import"./index.es35-NGGuPWEW.js";import"./Message-D_GErW1i.js";import"./Input-CXAaHP09.js";import"./i18n-C0aeT7bv.js";import"./i18next-eNuDfwAU.js";import"./Toaster-JyxqFx-s.js";import"./Transition-Bbrpn4bx.js";import"./v4-BKrj-4V8.js";import"./Confirm-WZcBS0gC.js";import"./Modal-DuXeYa7J.js";import"./index-BBOwiCO8.js";import"./Pagination-DtRd0kvM.js";import"./_isIterateeCall-CnbN5PRK.js";import"./Menu-Dgg2JX_X.js";import"./Grid-9tAv0Qas.js";import"./Header-vWBSrN6j.js";import"./DropdownButton-BKc4uUGq.js";import"./EditModal-JecM-Pfw.js";import"./index.es3-BqyEX0cQ.js";import"./Loader-D78Sy4dK.js";import"./FuzzyDate-DDrzCNz8.js";import"./Form-DT4-5eAk.js";import"./DateInput-CXeGjYeu.js";import"./AssociatedDropdown-BHr-E81b.js";import"./Trans-BECfTfEg.js";import"./context-B2wQJhST.js";const P=j(e=>{const o=l.useCallback(n=>{const s=d.filter(e.actions,r=>!r.accept||r.accept(n));return d.isEmpty(s)?null:t.jsx(u.Group,{children:d.map(s,(r,q)=>t.jsx(u,{"aria-label":r.name,basic:!0,color:r.color,icon:r.icon,onClick:r.onClick&&r.onClick.bind(void 0,n),title:r.title},`${r.name}-${q}`))})},[e.actions]),i=l.useCallback(n=>e.selectable?t.jsx(x,{className:"row-select-checkbox",onClick:(s,r)=>e.onRowSelect(r,n,s),checked:!!e.selectedRows.find(s=>s.id===n.id)},`select-checkbox-${n.id}`):null,[e.onRowSelect,e.selectable,e.selectedRows]);return t.jsx("div",{className:["accordion-data-list",e.className||""].join(" "),children:t.jsx(D,{getChildItems:e.getChildItems,onItemToggle:n=>e.onItemToggle&&e.onItemToggle(n),renderItem:n=>e.renderItem(n),renderRight:n=>t.jsxs(t.Fragment,{children:[o(n),i(n)]}),rootItems:e.rootItems,showToggle:n=>e.showToggle(n)})})}),S=e=>{const o=l.useMemo(()=>e.getRootItems(e.items),[e.items]),i=l.useCallback(a=>e.getChildItems(e.items,a),[e.items]),n=l.useRef(),s=l.useMemo(()=>{const a=d.find(e.sort,{value:e.sortColumn});return a&&a.text},[e.sort,e.sortColumn]),r=l.useCallback(a=>{if(!e.onSort)return;let c;a.value!==e.sortColumn&&(c=a.direction),e.onSort(a.value,c)},[e.onSort,e.sortColumn]),q=l.useCallback(()=>d.isEmpty(e.sort)?null:t.jsxs(u.Group,{basic:!0,style:{fontSize:"inherit"},children:[t.jsx(u,{"aria-label":"Sort by",content:s,icon:e.sortDirection===T?"sort alphabet up":"sort alphabet down",onClick:a=>n.current&&n.current.handleClick(a)}),t.jsx(L,{"aria-label":"Sort by toggle",className:"button icon",floating:!0,options:d.map(e.sort,a=>({...a,onClick:()=>r(a)})),ref:n,trigger:t.jsx(t.Fragment,{}),value:e.sortColumn})]}),[e.sort,e.sortColumn,e.sortDirection]);return l.useEffect(()=>{if(d.isEmpty(e.sort))return e.onInit();const{page:a}=e;let{sortColumn:c="",sortDirection:I=T}=e;if(!c){const C=d.first(e.sort);C&&(c=C.value,C.direction&&(I=C.direction))}return e.onSort(c,I,a)},[]),t.jsx(P,{...e,renderListHeader:q,rootItems:o,getChildItems:i})},p=R(S);S.__docgenInfo={description:"",methods:[],displayName:"AccordionDataList",props:{actions:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  resolveColor?: (item: any) => ?string,
  resolveIcon?: (item: any) => ?string,
  title?: string
}`,signature:{properties:[{key:"accept",value:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}},required:!0}},{key:"as",value:{name:"ComponentType",required:!0}},{key:"asProps",value:{name:"signature",type:"function",raw:"() => any",signature:{arguments:[],return:{name:"any"}},required:!0}},{key:"color",value:{name:"string",required:!1}},{key:"icon",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}},required:!1}},{key:"popup",value:{name:"signature",type:"object",raw:`{
  content: string,
  title: string
}`,signature:{properties:[{key:"content",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}}]},required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any, index: number) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}},{name:"index",type:{name:"number"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!1}},{key:"resolveColor",value:{name:"signature",type:"function",raw:"(item: any) => ?string",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"string",nullable:!0}},required:!1}},{key:"resolveIcon",value:{name:"signature",type:"function",raw:"(item: any) => ?string",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"string",nullable:!0}},required:!1}},{key:"title",value:{name:"string",required:!1}}]}}],raw:"Array<Action>"},description:`A list of actions to render for each element in the row. Actions with the names "edit" and "delete" will be
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
}`,signature:{properties:[{key:"key",value:{name:"any",required:!0}},{key:"value",value:{name:"any",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"direction",value:{name:"string",required:!1}}]}}],raw:"Array<Sort>"},description:""},sortColumn:{required:!1,flowType:{name:"string"},description:""},sortDirection:{required:!1,flowType:{name:"string"},description:""}}};const{action:m}=__STORYBOOK_MODULE_ACTIONS__,ze={title:"Components/Semantic UI/AccordionDataList",component:p},k=[{id:1,name:"Parent 1",children:[{id:3,name:"Child 1"},{id:4,name:"Child 2"}]},{id:2,name:"Parent 2",children:[{id:5,name:"Child 3",children:[{id:6,name:"Grandchild 1",parent_id:5}]}]}],y=()=>t.jsx(p,{actions:[{name:"edit"},{name:"copy"},{name:"delete"}],collectionName:"items",getChildItems:(e,o)=>o.children,getRootItems:e=>e,modal:{component:v},onDelete:m("delete"),onSave:()=>(m("save")(),Promise.resolve()),onLoad:e=>b.onLoad({...e,items:k}),renderItem:e=>e.name,showToggle:()=>!0}),g=()=>t.jsx(p,{actions:[{name:"edit"},{name:"copy"},{name:"delete"}],collectionName:"items",getChildItems:(e,o)=>o.children,getRootItems:e=>e,modal:{component:v},onDelete:m("delete"),onSave:()=>(m("save")(),Promise.resolve()),onLoad:e=>b.onLoad({...e,items:k}),renderItem:e=>e.name,showRecordCount:!0,showToggle:()=>!0}),f=()=>t.jsx(p,{actions:[{name:"edit"},{name:"copy"},{name:"delete"}],collectionName:"items",getChildItems:(e,o)=>o.children,getRootItems:e=>e,modal:{component:v},onDelete:m("delete"),onSave:()=>(m("save")(),Promise.resolve()),onLoad:e=>b.onLoad({...e,items:k}),renderItem:e=>e.name,showToggle:()=>!0,sort:[{key:"name",value:"name",text:"Name"},{key:"date",value:"date",text:"Date"}]}),h=()=>t.jsx(p,{actions:[{name:"edit"},{name:"copy"},{name:"delete"}],buttons:[{render:()=>t.jsx(u,{children:"Test"},"1")},{render:()=>t.jsx(u,{children:"Test 2"},"2")}],collectionName:"items",getChildItems:(e,o)=>o.children,getRootItems:e=>e,modal:{component:v},onDelete:m("delete"),onSave:()=>(m("save")(),Promise.resolve()),onLoad:e=>b.onLoad({...e,items:k}),onRowSelect:m("row selected"),renderItem:e=>e.name,selectable:!0,selectedRows:[{id:1},{id:2},{id:3}],showToggle:()=>!0}),w=()=>{const[e,o]=l.useState([]);return t.jsx(p,{actions:[{name:"edit"},{name:"copy"},{name:"delete"}],buttons:[{render:()=>t.jsx(u,{children:"Test"},"1")},{render:()=>t.jsx(u,{children:"Test 2"},"2")}],collectionName:"items",getChildItems:(i,n)=>n.children,getRootItems:i=>i,modal:{component:v},onDelete:m("delete"),onSave:()=>(m("save")(),Promise.resolve()),onLoad:i=>b.onLoad({...i,items:k}),onRowSelect:({checked:i},n)=>{o(i?s=>[...s,n]:s=>A.filter(s,r=>r!==n))},renderItem:i=>i.name,selectable:!0,selectedRows:e,showToggle:()=>!0})};y.__docgenInfo={description:"",methods:[],displayName:"Default"};g.__docgenInfo={description:"",methods:[],displayName:"WithRecordCount"};f.__docgenInfo={description:"",methods:[],displayName:"Sortable"};h.__docgenInfo={description:"",methods:[],displayName:"Selectable"};w.__docgenInfo={description:"",methods:[],displayName:"SelectableControlled"};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => <AccordionDataList actions={[{
  name: 'edit'
}, {
  name: 'copy'
}, {
  name: 'delete'
}]} collectionName='items' getChildItems={(items, item) => item.children} getRootItems={items => items} modal={{
  component: AddModal
}} onDelete={action('delete')} onSave={() => {
  action('save')();
  return Promise.resolve();
}} onLoad={params => Api.onLoad({
  ...params,
  items: data
})} renderItem={item => item.name} showToggle={() => true} />`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <AccordionDataList actions={[{
  name: 'edit'
}, {
  name: 'copy'
}, {
  name: 'delete'
}]} collectionName='items' getChildItems={(items, item) => item.children} getRootItems={items => items} modal={{
  component: AddModal
}} onDelete={action('delete')} onSave={() => {
  action('save')();
  return Promise.resolve();
}} onLoad={params => Api.onLoad({
  ...params,
  items: data
})} renderItem={item => item.name} showRecordCount showToggle={() => true} />`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => <AccordionDataList actions={[{
  name: 'edit'
}, {
  name: 'copy'
}, {
  name: 'delete'
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
}]} />`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <AccordionDataList actions={[{
  name: 'edit'
}, {
  name: 'copy'
}, {
  name: 'delete'
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
}]} showToggle={() => true} />`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState([]);
  return <AccordionDataList actions={[{
    name: 'edit'
  }, {
    name: 'copy'
  }, {
    name: 'delete'
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
}`,...w.parameters?.docs?.source}}};const Ke=["Default","WithRecordCount","Sortable","Selectable","SelectableControlled"];export{y as Default,h as Selectable,w as SelectableControlled,f as Sortable,g as WithRecordCount,Ke as __namedExportsOrder,ze as default};
