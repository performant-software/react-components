import{j as o}from"./jsx-runtime-BTCK_S7S.js";import{a as t}from"./chunk-WFFRPTHA-B2vgThZf.js";import{d as r}from"./index-kF-6VCSF.js";import{r as h}from"./index-CBqU2yxZ.js";import{B as T}from"./Button-Blq7Z6RX.js";import{H as d}from"./Header-BJ3NNdPz.js";import{_ as n}from"./index-default-C_maRo4o.js";import{A as p}from"./AddModal-8so4BWij.js";import{A as i}from"./Api-DXLamogn.js";import{L as _e}from"./Loader-CooidObp.js";import{D as Ee}from"./Dimmer-D_gwaesu.js";import{i as j}from"./i18n-C8zWlANG.js";import{I as Me,V as je}from"./Items-CMwTxPL0.js";import{u as Te,S as qe}from"./DataList-B3hB1Ncc.js";import{i as c}from"./Cars-2_9qFJX9.js";import{F as Be}from"./FilterModal-CTH7wgQb.js";import{u as m}from"./DragDrop-ryAVAQMJ.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./mapValues-CZh2vnSw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./pickBy-CU2rOOKe.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-Bu_b4Pek.js";import"./index-Cw1G72V2.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./debounce-Bq1aTuh-.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CckcRzoH.js";import"./Icon-2tEtgK8g.js";import"./Label-Cq1fb1cd.js";import"./ModernAutoControlledComponent-DJBWk5EW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CQoJOerW.js";import"./toFinite-KQ8KevIC.js";import"./forEach-CXlln0XP.js";import"./map-B4PnIEPz.js";import"./Portal-DvhHJPzU.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DZGZymok.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./Modal-Bz2VEyQG.js";import"./index-BBpNyw-T.js";import"./_baseSet-6y0qliU9.js";import"./_baseAssignValue-izmKBXUH.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-Cyb9hIKi.js";import"./i18next-Sc0HEOoc.js";import"./toPropertyKey-hKuLU48H.js";import"./defineProperty-CCxoMnQV.js";import"./inherits-D5wXBZoG.js";import"./createClass-D2z1h_eG.js";import"./getPrototypeOf-BYVhAdwF.js";import"./Segment-C5_maSSM.js";import"./Checkbox-C9uAfnsM.js";import"./Card-BJT3uTAq.js";import"./Item-9lJy5i0K.js";import"./List-j10WAbZn.js";import"./Confirm-Dw9rt56R.js";import"./Transition-DSFEXhCu.js";import"./filter-CVNi8iPS.js";import"./Pagination-D0HmnRDL.js";import"./Menu-9i0apxqd.js";import"./deburr-CEfyoYOr.js";import"./Grid-Czr5owxQ.js";import"./DropdownButton-D3g-r0e9.js";import"./Dropdown-Di2cPjwR.js";import"./without-BP-mqg2K.js";import"./isArrayLikeObject-CbXKTyfk.js";import"./EditModal-CsfirwY4.js";import"./index.es30-tUyOUHRL.js";import"./iframe-BcGTk6aA.js";import"../sb-preview/runtime.js";import"./index.es3-CqJx98lw.js";import"./Message-3p6wyYpA.js";import"./Toaster-C1YYqOUE.js";import"./Form-fErk-qk_.js";import"./Input--hQVCRQV.js";import"./AssociatedDropdown-CMB7PUXu.js";import"./FuzzyDate-D4brsVbr.js";import"./DateInput-BO57_F9J.js";import"./ModalContext-Bu-D9kD-.js";import"./Trans-Bk6mzQm0.js";import"./objectWithoutProperties--RY0eV0u.js";import"./utils-Bq6oISwF.js";import"./Draggable-KQRXc-DM.js";import"./useDrop-BRQoWSA5.js";import"./DndContext-B-2NJP7Z.js";import"./redux-C8f_Y06i.js";import"./objectSpread2-N4c0DWqo.js";import"./uuid-BH6G0oTz.js";const q=Te(e=>{h.useEffect(()=>{const{page:u}=e;let{sortColumn:a="",sortDirection:g=qe}=e;if(!a){const b=n.first(e.sort);b&&(a=b.value,b.direction&&(g=b.direction))}e.onSort(a,g,u)},[]);const y=h.useMemo(()=>e.isRowSelected&&e.items&&e.items.length&&n.every(e.items,e.isRowSelected.bind(void 0)),[e.items,e.isRowSelected]),M=h.useCallback(()=>{if(e.items&&e.isRowSelected&&e.onRowSelect){let u;y?u=[...e.items]:u=n.reject(e.items,e.isRowSelected.bind(void 0)),n.each(u,e.onRowSelect.bind(void 0))}},[y,e.isRowSelected,e.items,e.onRowSelect]);return o.jsxs(o.Fragment,{children:[o.jsx(Ee,{active:e.loading,inverted:!0,children:o.jsx(_e,{content:j.t("Common.messages.loading")})}),o.jsx(Me,{...e,buttons:[...e.buttons||[],{accept:()=>e.selectable,color:"green",content:y?j.t("ItemList.buttons.deselectAll"):j.t("ItemList.buttons.selectAll"),icon:"checkmark",onClick:M.bind(void 0)}]})]})});q.defaultProps={filters:{},searchable:!0};const s=q;q.__docgenInfo={description:`An <code>ItemList</code> component can be used to render a list of records returned from an API. Under the
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
other properties when a user navigates away from the list.`},onSort:{required:!0,flowType:{name:"signature",type:"function",raw:"(column: string, direction: ?string, page?: number) => void",signature:{arguments:[{name:"column",type:{name:"string"}},{name:"direction",type:{name:"string",nullable:!0}},{name:"page",type:{name:"number"}}],return:{name:"void"}}},description:`Callback fired when the sort dropdown is changed. This prop is provided by the <code>DataList</code>
higher-order component.`},sort:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: any,
  value: any,
  text: string,
  direction: ?string
}`,signature:{properties:[{key:"key",value:{name:"any",required:!0}},{key:"value",value:{name:"any",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"direction",value:{name:"string",nullable:!0,required:!0}}]}}],raw:"Array<Sort>"},description:`An array of sort attributes to apply to the list. The values provided will display in a dropdown in the
list header.`},sortColumn:{required:!1,flowType:{name:"string"},description:"Name of the current sort column."},sortDirection:{required:!1,flowType:{name:"string"},description:"Current sort direction (ascending or descending)."}}};const Io={title:"Components/Semantic UI/ItemList",component:s},l=[{name:"edit"},{name:"copy"},{name:"delete"}],f=m(()=>o.jsx(s,{actions:l,collectionName:"items",onCopy:t("copy"),onLoad:e=>i.onLoad(n.extend(e,{items:c,perPage:r.number("Per page",10)})),onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(d,{content:e.model}),renderMeta:e=>e.make,searchable:r.boolean("Searchable",!0)})),v=m(()=>o.jsx(s,{actions:l,collectionName:"items",modal:{component:p},onCopy:t("copy"),onLoad:e=>i.onLoad(n.extend(e,{items:c,perPage:r.number("Per page",10)})),onDelete:t("delete"),onSave:()=>(t("save")(),Promise.resolve()),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(d,{content:e.model}),renderMeta:e=>e.make,searchable:r.boolean("Searchable",!0)})),S=m(()=>o.jsx(s,{actions:l,collectionName:"items",defaultView:je.grid,onCopy:t("copy"),onLoad:e=>i.onLoad(n.extend(e,{items:c,perPage:r.number("Per page",20)})),onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(d,{content:e.model}),renderMeta:e=>e.make,searchable:r.boolean("Searchable",!0)})),x=m(()=>o.jsx(s,{actions:l,collectionName:"items",deleteButton:{color:"red",location:"top"},modal:{component:p},onCopy:t("copy"),onLoad:e=>i.onLoad(n.extend(e,{items:c,perPage:r.number("Per page",10)})),onDelete:t("delete"),onDeleteAll:t("delete all"),onSave:()=>Promise.resolve(),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(d,{content:e.model}),renderMeta:e=>e.make,searchable:r.boolean("Searchable",!0)})),D=m(()=>o.jsx(s,{actions:l,collectionName:"items",onCopy:t("copy"),onLoad:i.onLoadEmpty.bind(void 0),onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(d,{content:e.model}),renderMeta:e=>e.make,searchable:r.boolean("Searchable",!0)})),L=m(()=>o.jsx(s,{actions:l,collectionName:"items",modal:{component:p},onCopy:t("copy"),onLoad:i.onLoadEmpty.bind(void 0),onDelete:t("delete"),onSave:()=>Promise.resolve(),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(d,{content:e.model}),renderMeta:e=>e.make,searchable:r.boolean("Searchable",!0)})),k=m(()=>o.jsx(s,{actions:l,buttons:[{render:()=>o.jsx(T,{content:"Button 1",onClick:t("button1")})},{location:"bottom",render:()=>o.jsx(T,{content:"Button 2",onClick:t("button2")})}],collectionName:"items",modal:{component:p},onCopy:t("copy"),onLoad:e=>i.onLoad(n.extend(e,{items:c,perPage:r.number("Per page",10)})),onDelete:t("delete"),onSave:()=>Promise.resolve(),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(d,{content:e.model}),renderMeta:e=>e.make,searchable:r.boolean("Searchable",!0)})),P=m(()=>o.jsx(s,{actions:l,collectionName:"items",filters:{component:Be},modal:{component:p},onCopy:t("copy"),onLoad:e=>i.onLoad(n.extend(e,{items:c,perPage:r.number("Per page",10)})),onDelete:t("delete"),onSave:()=>Promise.resolve(),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(d,{content:e.model}),renderMeta:e=>e.make,searchable:r.boolean("Searchable",!0)})),w=m(()=>o.jsx(s,{actions:l,collectionName:"items",modal:{component:p},onCopy:t("copy"),onLoad:e=>i.onLoad(n.extend(e,{items:c,perPage:r.number("Per page",10)})),onDelete:t("delete"),onSave:()=>Promise.resolve(),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(d,{content:e.model}),renderMeta:e=>e.make,searchable:r.boolean("Searchable",!0),saved:!0})),I=m(()=>o.jsx(s,{actions:l,collectionName:"items",onCopy:t("copy"),onLoad:e=>i.sleep(5e3).then(()=>i.onLoad(n.extend(e,{items:c,perPage:r.number("Per page",10)}))),onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(d,{content:e.model}),renderMeta:e=>e.make,searchable:r.boolean("Searchable",!0)})),C=m(()=>o.jsx(s,{actions:l,collectionName:"items",modal:{component:p},onCopy:t("copy"),onLoad:e=>i.onLoad(n.extend(e,{items:c,perPage:r.number("Per page",10)})),onDelete:t("delete"),onSave:()=>Promise.resolve(),polling:5e3,renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(d,{content:e.model}),renderMeta:e=>e.make,searchable:r.boolean("Searchable",!0)})),N=m(()=>o.jsx(s,{actions:l,collectionName:"items",onCopy:t("copy"),onLoad:e=>i.onLoad(n.extend(e,{items:c,perPage:r.number("Per page",10)})),onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(d,{content:e.model}),renderMeta:e=>e.make,searchable:r.boolean("Searchable",!0),sort:[{key:"make",value:"make",text:"Make"},{key:"model",value:"model",text:"Model"},{key:"vin",value:"vin",text:"VIN"}]})),A=m(()=>{const[e,y]=h.useState([]),M=h.useCallback(a=>n.contains(e,a.id),[e]),u=h.useCallback(a=>{M(a)?y(g=>n.filter(g,b=>b!==a.id)):y(g=>[...g,a.id])},[e]);return o.jsx(s,{actions:l,collectionName:"items",isRowSelected:M.bind(void 0),modal:{component:p},onCopy:t("copy"),onLoad:a=>i.onLoad(n.extend(a,{items:c,perPage:r.number("Per page",10)})),onDelete:t("delete"),onRowSelect:u.bind(void 0),onSave:t("save"),renderDescription:a=>a.vin,renderExtra:a=>a.address,renderHeader:a=>o.jsx(d,{content:a.model}),renderMeta:a=>a.make,searchable:r.boolean("Searchable",!0),selectable:!0})}),H=m(()=>o.jsx(s,{actions:l,collectionName:"items",onCopy:t("copy"),onLoad:e=>i.onLoad(n.extend(e,{items:c,perPage:r.number("Per page",10)})),onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(d,{content:e.model}),renderMeta:e=>e.make,searchable:r.boolean("Searchable",!0),sort:[{key:"make",value:"make",text:"Make",direction:"descending"},{key:"model",value:"model",text:"Model"},{key:"vin",value:"vin",text:"VIN",direction:"descending"}]})),_=m(()=>o.jsx(s,{actions:l,collectionName:"items",onCopy:t("copy"),onLoad:e=>i.onLoad(n.extend(e,{items:c,perPage:r.number("Per page",10)})),hideToggle:!0,onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(d,{content:e.model}),renderListHeader:()=>o.jsx(T,{icon:"world",onClick:t("custom-list-header")}),renderMeta:e=>e.make,searchable:r.boolean("Searchable",!0)})),E=m(()=>o.jsx(s,{actions:l,collectionName:"items",onCopy:t("copy"),onLoad:e=>i.onLoad(n.extend(e,{items:c,perPage:r.number("Per page",10)})),hideToggle:!0,onDelete:t("delete"),onSave:t("save"),renderDescription:e=>e.vin,renderExtra:e=>e.address,renderHeader:e=>o.jsx(d,{content:e.model}),renderMeta:e=>e.make,searchable:!1}));f.__docgenInfo={description:"",methods:[],displayName:"Default"};v.__docgenInfo={description:"",methods:[],displayName:"AddButton"};S.__docgenInfo={description:"",methods:[],displayName:"DefaultView"};x.__docgenInfo={description:"",methods:[],displayName:"DeleteAllButton"};D.__docgenInfo={description:"",methods:[],displayName:"Empty"};L.__docgenInfo={description:"",methods:[],displayName:"EmptyAddButton"};k.__docgenInfo={description:"",methods:[],displayName:"ExtraButtons"};P.__docgenInfo={description:"",methods:[],displayName:"Filters"};w.__docgenInfo={description:"",methods:[],displayName:"InitialSave"};I.__docgenInfo={description:"",methods:[],displayName:"Loading"};C.__docgenInfo={description:"",methods:[],displayName:"Polling"};N.__docgenInfo={description:"",methods:[],displayName:"Sortable"};A.__docgenInfo={description:"",methods:[],displayName:"Selectable"};H.__docgenInfo={description:"",methods:[],displayName:"SortDescending"};_.__docgenInfo={description:"",methods:[],displayName:"CustomListHeader"};E.__docgenInfo={description:"",methods:[],displayName:"NoListHeader"};var B,R,V;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable={boolean('Searchable', true)} />)`,...(V=(R=f.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var F,O,U;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={() => {
  action('save')();
  return Promise.resolve();
}} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable={boolean('Searchable', true)} />)`,...(U=(O=v.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var G,W,$;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' defaultView={Views.grid} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 20)
}))} onDelete={action('delete')} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable={boolean('Searchable', true)} />)`,...($=(W=S.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var z,J,K;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' deleteButton={{
  color: 'red',
  location: 'top'
}} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onDeleteAll={action('delete all')} onSave={() => Promise.resolve()} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable={boolean('Searchable', true)} />)`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:"useDragDrop(() => <ItemList actions={actions} collectionName='items' onCopy={action('copy')} onLoad={Api.onLoadEmpty.bind(this)} onDelete={action('delete')} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable={boolean('Searchable', true)} />)",...(Y=(X=D.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;L.parameters={...L.parameters,docs:{...(Z=L.parameters)==null?void 0:Z.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={Api.onLoadEmpty.bind(this)} onDelete={action('delete')} onSave={() => Promise.resolve()} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable={boolean('Searchable', true)} />)`,...(te=(ee=L.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,re,ne;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} buttons={[{
  render: () => <Button content='Button 1' onClick={action('button1')} />
}, {
  location: 'bottom',
  render: () => <Button content='Button 2' onClick={action('button2')} />
}]} collectionName='items' modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable={boolean('Searchable', true)} />)`,...(ne=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ae,ie,se;P.parameters={...P.parameters,docs:{...(ae=P.parameters)==null?void 0:ae.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' filters={{
  component: FilterModal
}} modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable={boolean('Searchable', true)} />)`,...(se=(ie=P.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var de,me,le;w.parameters={...w.parameters,docs:{...(de=w.parameters)==null?void 0:de.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable={boolean('Searchable', true)} saved />)`,...(le=(me=w.parameters)==null?void 0:me.docs)==null?void 0:le.source}}};var ce,pe,ue;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' onCopy={action('copy')} onLoad={params => Api.sleep(5000).then(() => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
})))} onDelete={action('delete')} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable={boolean('Searchable', true)} />)`,...(ue=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ye,ge,be;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' modal={{
  component: AddModal
}} onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={() => Promise.resolve()} polling={5000} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable={boolean('Searchable', true)} />)`,...(be=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var he,fe,ve;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable={boolean('Searchable', true)} sort={[{
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
}]} />)`,...(ve=(fe=N.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var Se,xe,De;A.parameters={...A.parameters,docs:{...(Se=A.parameters)==null?void 0:Se.docs,source:{originalSource:`useDragDrop(() => {
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
    perPage: number('Per page', 10)
  }))} onDelete={action('delete')} onRowSelect={onRowSelect.bind(this)} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable={boolean('Searchable', true)} selectable />;
})`,...(De=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:De.source}}};var Le,ke,Pe;H.parameters={...H.parameters,docs:{...(Le=H.parameters)==null?void 0:Le.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} onDelete={action('delete')} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable={boolean('Searchable', true)} sort={[{
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
}]} />)`,...(Pe=(ke=H.parameters)==null?void 0:ke.docs)==null?void 0:Pe.source}}};var we,Ie,Ce;_.parameters={..._.parameters,docs:{...(we=_.parameters)==null?void 0:we.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} hideToggle onDelete={action('delete')} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderListHeader={() => <Button icon='world' onClick={action('custom-list-header')} />} renderMeta={item => item.make} searchable={boolean('Searchable', true)} />)`,...(Ce=(Ie=_.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var Ne,Ae,He;E.parameters={...E.parameters,docs:{...(Ne=E.parameters)==null?void 0:Ne.docs,source:{originalSource:`useDragDrop(() => <ItemList actions={actions} collectionName='items' onCopy={action('copy')} onLoad={params => Api.onLoad(_.extend(params, {
  items,
  perPage: number('Per page', 10)
}))} hideToggle onDelete={action('delete')} onSave={action('save')} renderDescription={item => item.vin} renderExtra={item => item.address} renderHeader={item => <Header content={item.model} />} renderMeta={item => item.make} searchable={false} />)`,...(He=(Ae=E.parameters)==null?void 0:Ae.docs)==null?void 0:He.source}}};const Co=["Default","AddButton","DefaultView","DeleteAllButton","Empty","EmptyAddButton","ExtraButtons","Filters","InitialSave","Loading","Polling","Sortable","Selectable","SortDescending","CustomListHeader","NoListHeader"];export{v as AddButton,_ as CustomListHeader,f as Default,S as DefaultView,x as DeleteAllButton,D as Empty,L as EmptyAddButton,k as ExtraButtons,P as Filters,w as InitialSave,I as Loading,E as NoListHeader,C as Polling,A as Selectable,H as SortDescending,N as Sortable,Co as __namedExportsOrder,Io as default};
