import{r as h,j as o}from"./iframe-Dd51AVec.js";import{B as j}from"./Button-COgPdyHQ.js";import{H as s}from"./Header-BUSnlU27.js";import{_ as i}from"./index-default-B8-H6N8J.js";import{A as c}from"./AddModal-CH_9wWOj.js";import{A as a}from"./Api-DGMTLhRm.js";import{L as q}from"./Loader-B5hWerz-.js";import{D as B}from"./Dimmer-CaDuiwNx.js";import{_ as E}from"./index-default-C0I3bBxV.js";import{i as T}from"./i18n-DkobdbHY.js";import{I as R,V}from"./Items-e4_CaDCD.js";import{u as O,S as F}from"./DataList-CzQsGAYO.js";import{i as l}from"./Cars-2_9qFJX9.js";import{F as U}from"./FilterModal-DIo5O1Pk.js";import{u as d}from"./DragDrop-Ceh_U-hn.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-fSudkH_h.js";import"./Icon-Be-bmVif.js";import"./Label-DoRqLwn7.js";import"./ModernAutoControlledComponent-DgxHvlaW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-COA85LJd.js";import"./toFinite-JyWO3W7G.js";import"./forEach-m0XN-fRo.js";import"./map-BK17dLm-.js";import"./Portal-BCNDxyz_.js";import"./keyboardKey-CGzN62ID.js";import"./Modal-CDe89cpY.js";import"./index-Bvr92fDU.js";import"./_baseSet-D7oIsAQS.js";import"./_baseAssignValue-BhO4aFuJ.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-Cy-H3Tvh.js";import"./index-DP4udi2o.js";import"./i18next-eNuDfwAU.js";import"./Segment-5ETLavbU.js";import"./Checkbox-BKXzXWs_.js";import"./Popup-BFuEXW_d.js";import"./createClass-CGi6Kyeu.js";import"./toPropertyKey-BdisF6oo.js";import"./Card-ByK4NTpE.js";import"./Item-Dg-SxmC9.js";import"./List-CQf_y3e7.js";import"./Confirm-CELjulOw.js";import"./Transition-DhHRhkqb.js";import"./filter-KfwrCHfk.js";import"./Pagination-BC-4cLRB.js";import"./_isIterateeCall-DwcShGji.js";import"./Menu-B_w7pcwy.js";import"./deburr-VT20eNUp.js";import"./Grid-BhGXT4xw.js";import"./DropdownButton-hO3sp6gV.js";import"./Dropdown-y6qPc3m_.js";import"./without-Bt7dVsRr.js";import"./isArrayLikeObject-tQXbzKbF.js";import"./EditModal-QFozVU8U.js";import"./index.es28-mTj78mi0.js";import"./index.es3-a1U3Wu2C.js";import"./index.es33-CBYGq4dU.js";import"./Message-BqYdvJpQ.js";import"./Toaster-DeZR4BcV.js";import"./Form-BAaMsHdz.js";import"./Input-CyvR7hoe.js";import"./AssociatedDropdown-Cz1zs4LJ.js";import"./index.es35-NGGuPWEW.js";import"./FuzzyDate-C6eDAU_U.js";import"./DateInput-DthfVW4-.js";import"./Trans-CpDqBL1J.js";import"./context-D4L8psyI.js";import"./Draggable-BMJALAF2.js";import"./useDrop-DJSfS0J0.js";import"./index-DlWgz8Lp.js";import"./ListSession-hS-NIzK1.js";import"./v4-BKrj-4V8.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";const r=O(e=>{h.useEffect(()=>{const{page:p}=e;let{sortColumn:n="",sortDirection:y=F}=e;if(!n){const f=E.first(e.sort);f&&(n=f.value,f.direction&&(y=f.direction))}e.onSort(n,y,p)},[]);const u=h.useMemo(()=>e.isRowSelected&&e.items&&e.items.length&&E.every(e.items,e.isRowSelected.bind(void 0)),[e.items,e.isRowSelected]),M=h.useCallback(()=>{if(e.items&&e.isRowSelected&&e.onRowSelect){let p;u?p=[...e.items]:p=E.reject(e.items,e.isRowSelected.bind(void 0)),E.each(p,e.onRowSelect.bind(void 0))}},[u,e.isRowSelected,e.items,e.onRowSelect]);return o.jsxs(o.Fragment,{children:[o.jsx(B,{active:e.dimmable&&e.loading,inverted:!0,children:o.jsx(q,{content:T.t("Common.messages.loading")})}),o.jsx(R,{...e,buttons:[...e.buttons||[],{accept:()=>e.selectable,color:"green",content:u?T.t("ItemList.buttons.deselectAll"):T.t("ItemList.buttons.selectAll"),icon:"checkmark",onClick:M.bind(void 0)}]})]})});r.defaultProps={dimmable:!0,filters:{},searchable:!0};r.__docgenInfo={description:`An <code>ItemList</code> component can be used to render a list of records returned from an API. Under the
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
apply to every item in the list.`},onLoad:{required:!0,flowType:{name:"signature",type:"function",raw:"(params: any) => Promise<any>",signature:{arguments:[{name:"params",type:{name:"any"}}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:"Callback fired when loading the list of items from an API. This callback is fired any time the list changes."},onReload:{required:!1,flowType:{name:"signature",type:"function",raw:"(state: any) => any",signature:{arguments:[{name:"state",type:{name:"any"}}],return:{name:"any"}}},description:`Callback fired when the list is reloaded as a result of an operation outside of this component.

@param state`},onSave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => Promise<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:"Callback fired when an item is saved via the add/edit modal."},perPageOptions:{required:!1,flowType:{name:"Array",elements:[{name:"number"}],raw:"Array<number>"},description:"The numeric list of options to allow the user to select for the number of records to display per page."},polling:{required:!1,flowType:{name:"number"},description:`If provided, the <code>onLoad</code> callback will fire after a timeout of the passed number of milliseconds. This
can be useful in order to show progress (file upload, download, etc) that must be retrieved from the server.`},reload:{required:!1,flowType:{name:"boolean"},description:`If true, the data for the list will be re-fetched. This is useful for operations that change the state of the
list outside of this component.`},resolveErrors:{required:!1,flowType:{name:"signature",type:"function",raw:"(error: any) => Array<string>",signature:{arguments:[{name:"error",type:{name:"any"}}],return:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"}}},description:`Callback fired when an error occurs. The passed error can take any form and is up to the consuming component to
interpret. The return value should be an array of user-friendly error messages.`},saved:{required:!1,flowType:{name:"boolean"},description:`Used to inform the list that an external save has taken place. When set to <code>true</code>, a success toaster
will display.`},searchable:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, this component will render a search input element in the list header.",defaultValue:{value:"true",computed:!1}},session:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  key: string,
  storage: typeof sessionStorage
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"storage",value:{name:"sessionStorage",required:!0}}]}},description:`If provided, list properties (page number, columns, filters, etc) will be stored in the passed storage element
and rehydrated each time the component is mounted. This is useful in order to persist filters, searches, and
other properties when a user navigates away from the list.`},updateItem:{required:!1,flowType:{name:"any"},description:`The item in the list to update. This is useful if the items can be modified outside of the list and should
reflect the changes without loading the entire list.`},dimmable:{required:!1,flowType:{name:"boolean"},description:"If `true`, a dimmer will be displayed over the list component.",defaultValue:{value:"true",computed:!1}},onSort:{required:!0,flowType:{name:"signature",type:"function",raw:"(column: string, direction: ?string, page?: number) => void",signature:{arguments:[{name:"column",type:{name:"string"}},{name:"direction",type:{name:"string",nullable:!0}},{name:"page",type:{name:"number"}}],return:{name:"void"}}},description:`Callback fired when the sort dropdown is changed. This prop is provided by the <code>DataList</code>
higher-order component.`},sort:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: any,
  value: any,
  text: string,
  direction: ?string
}`,signature:{properties:[{key:"key",value:{name:"any",required:!0}},{key:"value",value:{name:"any",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"direction",value:{name:"string",nullable:!0,required:!0}}]}}],raw:"Array<Sort>"},description:`An array of sort attributes to apply to the list. The values provided will display in a dropdown in the
list header.`},sortColumn:{required:!1,flowType:{name:"string"},description:"Name of the current sort column."},sortDirection:{required:!1,flowType:{name:"string"},description:"Current sort direction (ascending or descending)."}}};const{action:t}=__STORYBOOK_MODULE_ACTIONS__,ft={title:"Components/Semantic UI/ItemList",component:r},m=[{name:"edit"},{name:"copy"},{name:"delete"}],g=d(()=>o.jsx(r,{actions:m,collectionName:"items",onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:l,perPage:10})),onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0})),v=d(()=>o.jsx(r,{actions:m,collectionName:"items",modal:{component:c},onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:l,perPage:10})),onDelete:t("delete"),onSave:()=>(t("save")(),Promise.resolve()),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0})),b=d(()=>o.jsx(r,{actions:m,collectionName:"items",defaultView:V.grid,onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:l,perPage:20})),onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0})),D=d(()=>o.jsx(r,{actions:m,collectionName:"items",deleteButton:{color:"red",location:"top"},modal:{component:c},onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:l,perPage:10})),onDelete:t("delete"),onDeleteAll:t("delete all"),onSave:()=>Promise.resolve(),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0})),x=d(()=>o.jsx(r,{actions:m,collectionName:"items",onCopy:t("copy"),onLoad:a.onLoadEmpty.bind(void 0),onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0})),L=d(()=>o.jsx(r,{actions:m,collectionName:"items",modal:{component:c},onCopy:t("copy"),onLoad:a.onLoadEmpty.bind(void 0),onDelete:t("delete"),onSave:()=>Promise.resolve(),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0})),S=d(()=>o.jsx(r,{actions:m,buttons:[{render:()=>o.jsx(j,{content:"Button 1",onClick:t("button1")})},{location:"bottom",render:()=>o.jsx(j,{content:"Button 2",onClick:t("button2")})}],collectionName:"items",modal:{component:c},onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:l,perPage:10})),onDelete:t("delete"),onSave:()=>Promise.resolve(),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0})),w=d(()=>o.jsx(r,{actions:m,collectionName:"items",filters:{component:U},modal:{component:c},onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:l,perPage:10})),onDelete:t("delete"),onSave:()=>Promise.resolve(),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0})),k=d(()=>o.jsx(r,{actions:m,collectionName:"items",modal:{component:c},onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:l,perPage:10})),onDelete:t("delete"),onSave:()=>Promise.resolve(),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0,saved:!0})),I=d(()=>o.jsx(r,{actions:m,collectionName:"items",onCopy:t("copy"),onLoad:e=>a.sleep(5e3).then(()=>a.onLoad(i.extend(e,{items:l,perPage:10}))),onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0})),P=d(()=>o.jsx(r,{actions:m,collectionName:"items",modal:{component:c},onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:l,perPage:10})),onDelete:t("delete"),onSave:()=>Promise.resolve(),polling:5e3,renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0})),C=d(()=>o.jsx(r,{actions:m,collectionName:"items",onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:l,perPage:10})),onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0,sort:[{key:"make",value:"make",text:"Make"},{key:"model",value:"model",text:"Model"},{key:"vin",value:"vin",text:"VIN"}]})),_=d(()=>{const[e,u]=h.useState([]),M=h.useCallback(n=>i.contains(e,n.id),[e]),p=h.useCallback(n=>{M(n)?u(y=>i.filter(y,f=>f!==n.id)):u(y=>[...y,n.id])},[e]);return o.jsx(r,{actions:m,collectionName:"items",isRowSelected:M.bind(void 0),modal:{component:c},onCopy:t("copy"),onLoad:n=>a.onLoad(i.extend(n,{items:l,perPage:10})),onDelete:t("delete"),onRowSelect:p.bind(void 0),onSave:t("save"),renderDescription:n=>n.vin,renderExtra:n=>n.address,renderHeader:n=>o.jsx(s,{content:n.model}),renderMeta:n=>n.make,searchable:!0,selectable:!0})}),N=d(()=>o.jsx(r,{actions:m,collectionName:"items",onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:l,perPage:10})),onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!0,sort:[{key:"make",value:"make",text:"Make",direction:"descending"},{key:"model",value:"model",text:"Model"},{key:"vin",value:"vin",text:"VIN",direction:"descending"}]})),A=d(()=>o.jsx(r,{actions:m,collectionName:"items",onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:l,perPage:10})),hideToggle:!0,onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderListHeader:()=>o.jsx(j,{icon:"world",onClick:t("custom-list-header")}),renderMeta:e=>e.make,searchable:!0})),H=d(()=>o.jsx(r,{actions:m,collectionName:"items",onCopy:t("copy"),onLoad:e=>a.onLoad(i.extend(e,{items:l,perPage:10})),hideToggle:!0,onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(s,{content:e.model}),renderMeta:e=>e.make,searchable:!1}));g.__docgenInfo={description:"",methods:[],displayName:"Default"};v.__docgenInfo={description:"",methods:[],displayName:"AddButton"};b.__docgenInfo={description:"",methods:[],displayName:"DefaultView"};D.__docgenInfo={description:"",methods:[],displayName:"DeleteAllButton"};x.__docgenInfo={description:"",methods:[],displayName:"Empty"};L.__docgenInfo={description:"",methods:[],displayName:"EmptyAddButton"};S.__docgenInfo={description:"",methods:[],displayName:"ExtraButtons"};w.__docgenInfo={description:"",methods:[],displayName:"Filters"};k.__docgenInfo={description:"",methods:[],displayName:"InitialSave"};I.__docgenInfo={description:"",methods:[],displayName:"Loading"};P.__docgenInfo={description:"",methods:[],displayName:"Polling"};C.__docgenInfo={description:"",methods:[],displayName:"Sortable"};_.__docgenInfo={description:"",methods:[],displayName:"Selectable"};N.__docgenInfo={description:"",methods:[],displayName:"SortDescending"};A.__docgenInfo={description:"",methods:[],displayName:"CustomListHeader"};H.__docgenInfo={description:"",methods:[],displayName:"NoListHeader"};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable />)`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={() => {
  action('save')();
  return Promise.resolve();
}} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable />)`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' defaultView={Views.grid} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 20
}))} onDelete={action('delete')} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable />)`,...b.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' deleteButton={{
  color: 'red',
  location: 'top'
}} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onDeleteAll={action('delete all')} onSave={() => Promise.resolve()} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable />)`,...D.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"useDragDrop(() => <ItemList actions={actions} collectionName='items' onCopy={action('copy')} onLoad={Api.onLoadEmpty.bind(this)} onDelete={action('delete')} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable />)",...x.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' modal={{
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
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable />)`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' filters={{
  component: FilterModal
}} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable />)`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: 10
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable saved />)`,...k.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' onCopy={action('copy')} onLoad={params => Api.sleep(5000).then(() => Api.onLoad(_.extend(params, {
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
}))} hideToggle onDelete={action('delete')} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable={false} />)`,...H.parameters?.docs?.source}}};const ht=["Default","AddButton","DefaultView","DeleteAllButton","Empty","EmptyAddButton","ExtraButtons","Filters","InitialSave","Loading","Polling","Sortable","Selectable","SortDescending","CustomListHeader","NoListHeader"];export{v as AddButton,A as CustomListHeader,g as Default,b as DefaultView,D as DeleteAllButton,x as Empty,L as EmptyAddButton,S as ExtraButtons,w as Filters,k as InitialSave,I as Loading,H as NoListHeader,P as Polling,_ as Selectable,N as SortDescending,C as Sortable,ht as __namedExportsOrder,ft as default};
