import{r as g,j as o}from"./iframe-CBVnS_gz.js";import{B as j}from"./Button-7qBb4VYW.js";import{H as s}from"./Header-Dr2ltggj.js";import{_ as i}from"./index-default-B8-H6N8J.js";import{A as l}from"./AddModal-D7hX2f4L.js";import{A as a}from"./Api-DGMTLhRm.js";import{L as q}from"./Loader-BSaShB_1.js";import{D as B}from"./Dimmer-Dp0zIHSX.js";import{_ as E}from"./index-default-C0I3bBxV.js";import{i as T}from"./i18n-DkobdbHY.js";import{I as R,V}from"./Items-XRl5FgWi.js";import{u as O,S as F}from"./DataList-RWNr7Pf5.js";import{i as c}from"./Cars-2_9qFJX9.js";import{F as U}from"./FilterModal-Blm9fqSC.js";import{u as d}from"./DragDrop-CcMMEejU.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-Bjb0ertt.js";import"./Icon-BZ3eAMfw.js";import"./Label-U9VHjmjO.js";import"./ModernAutoControlledComponent-DVKlBc-y.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-DZnQI2ww.js";import"./toFinite-B6NhHma2.js";import"./forEach-Bzy9_EBR.js";import"./map-DlHA86TE.js";import"./Portal-BlGvxlD6.js";import"./keyboardKey-o62cP7Iz.js";import"./Modal-HnkfqseB.js";import"./index-D9NXjPfP.js";import"./_baseSet-DIcQIHLm.js";import"./_baseAssignValue-8Q0krCXH.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-BYfO-h2O.js";import"./index-BCLYeJHS.js";import"./i18next-eNuDfwAU.js";import"./Segment-DMkjhZEp.js";import"./Checkbox-C74Tntbd.js";import"./Popup-CxqAbk3T.js";import"./createClass-CGi6Kyeu.js";import"./toPropertyKey-BdisF6oo.js";import"./Card-prfvN3cf.js";import"./Item-DfbUeK2I.js";import"./List-9fTa7vyM.js";import"./Confirm-CjNoq6oT.js";import"./Transition-Bg9-d4mK.js";import"./filter-9DG6Xxvy.js";import"./Pagination-B0M0AGNI.js";import"./_isIterateeCall-DEuXGXCP.js";import"./Menu-CoiGdU1w.js";import"./deburr-XG8rtojb.js";import"./Grid-CEaFPCL7.js";import"./DropdownButton-BxdGcdgT.js";import"./Dropdown-CPiIg0y1.js";import"./without-CH_BgMvr.js";import"./isArrayLikeObject-CKcKx5N9.js";import"./EditModal-Dzx3ZvnX.js";import"./index.es28-Dw5WpxTH.js";import"./index.es3-B5t9sEvB.js";import"./index.es33-BbGNIlHM.js";import"./Message-B6D94I6f.js";import"./Toaster-CVWr8FiD.js";import"./Form-Do77273i.js";import"./Input-CxqNqYl_.js";import"./AssociatedDropdown-BAbxp85M.js";import"./index.es35-NGGuPWEW.js";import"./FuzzyDate-B3vqLggo.js";import"./DateInput-DScwId8M.js";import"./Trans-8NScRHIi.js";import"./context-e-3OPt86.js";import"./Draggable-DKZ0tOvQ.js";import"./useDrop-DcjkJ2f0.js";import"./index-__O0XiL7.js";import"./ListSession-hS-NIzK1.js";import"./v4-BKrj-4V8.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";const r=O(e=>{g.useEffect(()=>{const{page:p}=e;let{sortColumn:n="",sortDirection:y=F}=e;if(!n){const f=E.first(e.sort);f&&(n=f.value,f.direction&&(y=f.direction))}e.onSort(n,y,p)},[]);const u=g.useMemo(()=>e.isRowSelected&&e.items&&e.items.length&&E.every(e.items,e.isRowSelected.bind(void 0)),[e.items,e.isRowSelected]),M=g.useCallback(()=>{if(e.items&&e.isRowSelected&&e.onRowSelect){let p;u?p=[...e.items]:p=E.reject(e.items,e.isRowSelected.bind(void 0)),E.each(p,e.onRowSelect.bind(void 0))}},[u,e.isRowSelected,e.items,e.onRowSelect]);return o.jsxs(o.Fragment,{children:[o.jsx(B,{active:e.dimmable&&e.loading,inverted:!0,children:o.jsx(q,{content:T.t("Common.messages.loading")})}),o.jsx(R,{...e,buttons:[...e.buttons||[],{accept:()=>e.selectable,color:"green",content:u?T.t("ItemList.buttons.deselectAll"):T.t("ItemList.buttons.selectAll"),icon:"checkmark",onClick:M.bind(void 0)}]})]})});r.defaultProps={dimmable:!0,filters:{},searchable:!0};r.__docgenInfo={description:`An <code>ItemList</code> component can be used to render a list of records returned from an API. Under the
hood, the <code>DataList</code> component handles calling the API, storing the records, filters, etc, and
the <code>Items</code> component handles the presentation.`,methods:[],displayName:"ItemList",props:{collectionName:{required:!0,flowType:{name:"string"},description:"Name of the collection to retrieve from the API response."},defaultPerPage:{required:!1,flowType:{name:"number"},description:"The default number of records to display on a single page."},defaultSearch:{required:!1,flowType:{name:"string"},description:"The default value for the search input element."},defaultSort:{required:!1,flowType:{name:"string"},description:"The default value to use for sorting the list."},defaultSortDirection:{required:!1,flowType:{name:"string"},description:"The default direction in which to sort the list."},filters:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  component: ComponentType<any>,
  defaults?: any,
  props?: any,
  onChange?: (filter: any) => Promise<any>,
  showLabels?: boolean
}`,signature:{properties:[{key:"component",value:{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>",required:!0}},{key:"defaults",value:{name:"any",required:!1}},{key:"props",value:{name:"any",required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(filter: any) => Promise<any>",signature:{arguments:[{name:"filter",type:{name:"any"}}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}},required:!1}},{key:"showLabels",value:{name:"boolean",required:!1}}]}},description:`If provided, the passed <code>component</code> will be rendered when the filter button is clicked.
<br />
<br />

Values passed in the <code>defaults</code> and <code>props</code> properties will be made available in the
passed component.
<br />
<br />

The <code>onChange</code> callback will fire when the filters are modified. This action will also reload the list,
passing the new filters the <code>onLoad</code> callback.`,defaultValue:{value:"{}",computed:!1}},onDelete:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => Promise<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:`Callback fired when the "delete" action is clicked.
@param item`},onDeleteAll:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:`Callback fired when the "delete all" action is clicked. This action is typically renedered in the header and will
apply to every item in the list.`},onLoad:{required:!0,flowType:{name:"signature",type:"function",raw:"(params: any) => Promise<any>",signature:{arguments:[{name:"params",type:{name:"any"}}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:"Callback fired when loading the list of items from an API. This callback is fired any time the list changes."},onSave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => Promise<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:"Callback fired when an item is saved via the add/edit modal."},perPageOptions:{required:!1,flowType:{name:"Array",elements:[{name:"number"}],raw:"Array<number>"},description:"The numeric list of options to allow the user to select for the number of records to display per page."},polling:{required:!1,flowType:{name:"number"},description:`If provided, the <code>onLoad</code> callback will fire after a timeout of the passed number of milliseconds. This
can be useful in order to show progress (file upload, download, etc) that must be retrieved from the server.`},resolveErrors:{required:!1,flowType:{name:"signature",type:"function",raw:"(error: any) => Array<string>",signature:{arguments:[{name:"error",type:{name:"any"}}],return:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"}}},description:`Callback fired when an error occurs. The passed error can take any form and is up to the consuming component to
interpret. The return value should be an array of user-friendly error messages.`},saved:{required:!1,flowType:{name:"boolean"},description:`Used to inform the list that an external save has taken place. When set to <code>true</code>, a success toaster
will display.`},searchable:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, this component will render a search input element in the list header.",defaultValue:{value:"true",computed:!1}},session:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  key: string,
  storage: typeof sessionStorage
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"storage",value:{name:"sessionStorage",required:!0}}]}},description:`If provided, list properties (page number, columns, filters, etc) will be stored in the passed storage element
and rehydrated each time the component is mounted. This is useful in order to persist filters, searches, and
other properties when a user navigates away from the list.`},dimmable:{required:!1,flowType:{name:"boolean"},description:"If `true`, a dimmer will be displayed over the list component.",defaultValue:{value:"true",computed:!1}},onSort:{required:!0,flowType:{name:"signature",type:"function",raw:"(column: string, direction: ?string, page?: number) => void",signature:{arguments:[{name:"column",type:{name:"string"}},{name:"direction",type:{name:"string",nullable:!0}},{name:"page",type:{name:"number"}}],return:{name:"void"}}},description:`Callback fired when the sort dropdown is changed. This prop is provided by the <code>DataList</code>
higher-order component.`},sort:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: any,
  value: any,
  text: string,
  direction: ?string
}`,signature:{properties:[{key:"key",value:{name:"any",required:!0}},{key:"value",value:{name:"any",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"direction",value:{name:"string",nullable:!0,required:!0}}]}}],raw:"Array<Sort>"},description:`An array of sort attributes to apply to the list. The values provided will display in a dropdown in the
list header.`},sortColumn:{required:!1,flowType:{name:"string"},description:"Name of the current sort column."},sortDirection:{required:!1,flowType:{name:"string"},description:"Current sort direction (ascending or descending)."}}};const{action:t}=__STORYBOOK_MODULE_ACTIONS__,ft={title:"Components/Semantic UI/ItemList",component:r},m=[{name:"edit"},{name:"copy"},{name:"delete"}],v=d(()=>o.jsx(r,{actions:m,collectionName:"items",onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:c,perPage:10})),onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0})),h=d(()=>o.jsx(r,{actions:m,collectionName:"items",modal:{component:l},onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:c,perPage:10})),onDelete:t("delete"),onSave:()=>(t("save")(),Promise.resolve()),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0})),D=d(()=>o.jsx(r,{actions:m,collectionName:"items",defaultView:V.grid,onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:c,perPage:20})),onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0})),b=d(()=>o.jsx(r,{actions:m,collectionName:"items",deleteButton:{color:"red",location:"top"},modal:{component:l},onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:c,perPage:10})),onDelete:t("delete"),onDeleteAll:t("delete all"),onSave:()=>Promise.resolve(),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0})),x=d(()=>o.jsx(r,{actions:m,collectionName:"items",onCopy:t("copy"),onLoad:a.onLoadEmpty.bind(void 0),onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0})),L=d(()=>o.jsx(r,{actions:m,collectionName:"items",modal:{component:l},onCopy:t("copy"),onLoad:a.onLoadEmpty.bind(void 0),onDelete:t("delete"),onSave:()=>Promise.resolve(),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0})),S=d(()=>o.jsx(r,{actions:m,buttons:[{render:()=>o.jsx(j,{content:"Button 1",onClick:t("button1")})},{location:"bottom",render:()=>o.jsx(j,{content:"Button 2",onClick:t("button2")})}],collectionName:"items",modal:{component:l},onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:c,perPage:10})),onDelete:t("delete"),onSave:()=>Promise.resolve(),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0})),k=d(()=>o.jsx(r,{actions:m,collectionName:"items",filters:{component:U},modal:{component:l},onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:c,perPage:10})),onDelete:t("delete"),onSave:()=>Promise.resolve(),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0})),w=d(()=>o.jsx(r,{actions:m,collectionName:"items",modal:{component:l},onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:c,perPage:10})),onDelete:t("delete"),onSave:()=>Promise.resolve(),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0,saved:!0})),I=d(()=>o.jsx(r,{actions:m,collectionName:"items",onCopy:t("copy"),onLoad:e=>a.sleep(5e3).then(()=>a.onLoad(i.extend(e,{items:c,perPage:10}))),onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0})),P=d(()=>o.jsx(r,{actions:m,collectionName:"items",modal:{component:l},onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:c,perPage:10})),onDelete:t("delete"),onSave:()=>Promise.resolve(),polling:5e3,renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0})),C=d(()=>o.jsx(r,{actions:m,collectionName:"items",onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:c,perPage:10})),onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0,sort:[{key:"make",value:"make",text:"Make"},{key:"model",value:"model",text:"Model"},{key:"vin",value:"vin",text:"VIN"}]})),_=d(()=>{const[e,u]=g.useState([]),M=g.useCallback(n=>i.contains(e,n.id),[e]),p=g.useCallback(n=>{M(n)?u(y=>i.filter(y,f=>f!==n.id)):u(y=>[...y,n.id])},[e]);return o.jsx(r,{actions:m,collectionName:"items",isRowSelected:M.bind(void 0),modal:{component:l},onCopy:t("copy"),onLoad:n=>a.onLoad(i.extend(n,{items:c,perPage:10})),onDelete:t("delete"),onRowSelect:p.bind(void 0),onSave:t("save"),renderDescription:n=>n.vin,renderExtra:n=>n.address,renderHeader:n=>o.jsx(s,{content:n.model}),renderMeta:n=>n.make,searchable:!0,selectable:!0})}),N=d(()=>o.jsx(r,{actions:m,collectionName:"items",onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:c,perPage:10})),onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0,sort:[{key:"make",value:"make",text:"Make",direction:"descending"},{key:"model",value:"model",text:"Model"},{key:"vin",value:"vin",text:"VIN",direction:"descending"}]})),A=d(()=>o.jsx(r,{actions:m,collectionName:"items",onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:c,perPage:10})),hideToggle:!0,onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderListHeader:()=>o.jsx(j,{icon:"world",onClick:t("custom-list-header")}),renderMeta:e=>e.make,searchable:!0})),H=d(()=>o.jsx(r,{actions:m,collectionName:"items",onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:c,perPage:10})),hideToggle:!0,onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!1}));v.__docgenInfo={description:"",methods:[],displayName:"Default"};h.__docgenInfo={description:"",methods:[],displayName:"AddButton"};D.__docgenInfo={description:"",methods:[],displayName:"DefaultView"};b.__docgenInfo={description:"",methods:[],displayName:"DeleteAllButton"};x.__docgenInfo={description:"",methods:[],displayName:"Empty"};L.__docgenInfo={description:"",methods:[],displayName:"EmptyAddButton"};S.__docgenInfo={description:"",methods:[],displayName:"ExtraButtons"};k.__docgenInfo={description:"",methods:[],displayName:"Filters"};w.__docgenInfo={description:"",methods:[],displayName:"InitialSave"};I.__docgenInfo={description:"",methods:[],displayName:"Loading"};P.__docgenInfo={description:"",methods:[],displayName:"Polling"};C.__docgenInfo={description:"",methods:[],displayName:"Sortable"};_.__docgenInfo={description:"",methods:[],displayName:"Selectable"};N.__docgenInfo={description:"",methods:[],displayName:"SortDescending"};A.__docgenInfo={description:"",methods:[],displayName:"CustomListHeader"};H.__docgenInfo={description:"",methods:[],displayName:"NoListHeader"};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable />)`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={() => {
  action('save')();
  return Promise.resolve();
}} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable />)`,...h.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' defaultView={Views.grid} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 20
}))} onDelete={action('delete')} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable />)`,...D.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' deleteButton={{
  color: 'red',
  location: 'top'
}} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onDeleteAll={action('delete all')} onSave={() => Promise.resolve()} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable />)`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"useDragDrop(() => <ItemList actions={actions} collectionName='items' onCopy={action('copy')} onLoad={Api.onLoadEmpty.bind(this)} onDelete={action('delete')} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable />)",...x.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={Api.onLoadEmpty.bind(this)} onDelete={action('delete')} onSave={() => Promise.resolve()} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable />)`,...L.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} buttons={[{
  render: () => <Button content='Button 1' onClick={action('button1')} />
}, {
  location: 'bottom',
  render: () => <Button content='Button 2' onClick={action('button2')} />
}]} collectionName='items' modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable />)`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' filters={{
  component: FilterModal
}} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable />)`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable saved />)`,...w.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' onCopy={action('copy')} onLoad={params => Api.sleep(5000).then(() => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
})))} onDelete={action('delete')} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable />)`,...I.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} polling={5000} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable />)`,...P.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable sort={[{
  key: 'make',
  value: 'make',
  text: 'Make'
}, {
  key: 'model',
  value: 'model',
  text: 'Model'
}, {
  key: 'vin',
  value: 'vin',
  text: 'VIN'
}]} />)`,...C.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`useDragDrop(() => {
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
  return <ItemList actions={actions} collectionName='items' isRowSelected={isSelected.bind(this)} modal={{
    component: AddModal
  }} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
    items,
    perPage: 10
  }))} onDelete={action('delete')} onRowSelect={onRowSelect.bind(this)} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable selectable />;
})`,..._.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable sort={[{
  key: 'make',
  value: 'make',
  text: 'Make',
  direction: 'descending'
}, {
  key: 'model',
  value: 'model',
  text: 'Model'
}, {
  key: 'vin',
  value: 'vin',
  text: 'VIN',
  direction: 'descending'
}]} />)`,...N.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} hideToggle onDelete={action('delete')} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderListHeader={() => <Button icon='world' onClick={action('custom-list-header')} />} renderMeta={item => item.make} searchable />)`,...A.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} hideToggle onDelete={action('delete')} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable={false} />)`,...H.parameters?.docs?.source}}};const gt=["Default","AddButton","DefaultView","DeleteAllButton","Empty","EmptyAddButton","ExtraButtons","Filters","InitialSave","Loading","Polling","Sortable","Selectable","SortDescending","CustomListHeader","NoListHeader"];export{h as AddButton,A as CustomListHeader,v as Default,D as DefaultView,b as DeleteAllButton,x as Empty,L as EmptyAddButton,S as ExtraButtons,k as Filters,w as InitialSave,I as Loading,H as NoListHeader,P as Polling,_ as Selectable,N as SortDescending,C as Sortable,gt as __namedExportsOrder,ft as default};
