var N=Object.defineProperty;var q=(a,e,t)=>e in a?N(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var C=(a,e,t)=>(q(a,typeof e!="symbol"?e+"":e,t),t);import{j as n}from"./jsx-runtime-D9TvR9R2.js";import{r as E}from"./index-C0dDX-lL.js";import{a as d}from"./chunk-WFFRPTHA-B2vgThZf.js";import{d as i}from"./index-CO1YGyUu.js";import{_ as s}from"./index-default-C_maRo4o.js";import{B as m}from"./Button-CJhT71wt.js";import{u as I}from"./index.es30-Cot0rGUw.js";import{Y as L}from"./index.es3-BQXuK0UB.js";import{C as M}from"./Confirm-BUdp95GX.js";import{P as H}from"./Pagination-CRHbXf2X.js";import{G as f}from"./Grid-CpdbEkBf.js";import{M as A}from"./Message-smmiVK7n.js";import{H as K}from"./Header-BHdMo175.js";import{I as V}from"./Input-Bwh_HEb3.js";import{C as S}from"./Checkbox-B3tsCUtI.js";import{i as l}from"./i18n-CM1tepcX.js";import{E as z}from"./EditModal-Daayu7rJ.js";import{N as F}from"./NestedAccordion-DHGe-SZC.js";import{T as x}from"./Toaster-gMCa2mDU.js";import{A as g}from"./AddModal-Cuh-h8yk.js";import{A as b}from"./Api-DXLamogn.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./mapValues-CZh2vnSw.js";import"./pickBy-CXM4uafe.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-Bu_b4Pek.js";import"./index-Cw1G72V2.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./debounce-Bq1aTuh-.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BSRayMAs.js";import"./Icon-C_3d7-zE.js";import"./Label-aEFd48OX.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Cc_HXDPA.js";import"./toFinite-C3oJXAtX.js";import"./forEach-CLeEMxs1.js";import"./Dimmer-DP3fvqlo.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DOYXiIEK.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-DWKMCCtW.js";import"./iframe-j1bGVlxq.js";import"../sb-preview/runtime.js";import"./Transition-HA1Bivu3.js";import"./_baseAssignValue-UQlBDUKN.js";import"./filter-B6f9p5im.js";import"./Modal-BWgkEMr1.js";import"./index-mbjjMjCk.js";import"./_baseSet-BllfnHSO.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-CY-Bv0TY.js";import"./Menu-C3RUPz9h.js";import"./deburr-CNLr_JRW.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";import"./Loader-lqR_Ikjg.js";import"./Accordion-61xP-IaT.js";import"./without-Duh6Zu7H.js";import"./isArrayLikeObject-Bl_bAmop.js";class p extends E.Component{constructor(e){super(e),this.state={count:0,items:[],modalAdd:!1,modalDelete:!1,page:1,pages:1,saved:!1,searchQuery:"",selectedItem:null}}componentDidMount(){this.onSearch()}onAddButton(e){let t=e;this.props.modal&&this.props.modal.onAddItem&&(t=this.props.modal.onAddItem(e)),this.setState({modalAdd:!0,selectedItem:t})}onDelete(){const e=this.state.selectedItem;return this.props.onDelete(e).then(()=>{this.setState(t=>({modalDelete:!1,selectedItem:null,items:s.reject(t.items,r=>r===e)}))})}onDeleteButton(e){this.setState({modalDelete:!0,selectedItem:e})}onEditButton(e){this.setState({modalAdd:!0,selectedItem:e})}onCopyButton(e){let t;this.props.onCopy&&(t=this.props.onCopy(e),L.isPromise(t)?t.then(r=>{this.setState({selectedItem:r,modalAdd:!0})}):(t=s.omit(e,"id","uid"),this.setState({selectedItem:t,modalAdd:!0})))}onItemToggle(e){!e.loaded&&this.props.lazyLoad&&this.onSearch(e.id).then(()=>{this.setState(t=>({items:s.map(t.items,r=>r.id===e.id?{...r,loaded:!0}:r)}))})}onPageChange(e,t){this.setState({page:t.activePage},()=>this.onSearch())}onSave(e){return this.props.onSave(e).then(t=>{this.setState(r=>({modalAdd:!1,selectedItem:!1,saved:!0,items:e.id?s.map(r.items,o=>o.id===t.id?t:o):[...r.items,t]}))})}onSearch(e){return this.props.lazyLoad?this.props.onSearch(e,this.state.searchQuery).then(({data:t})=>{const r=t[this.props.collectionName];this.setState(o=>e?{items:[...o.items||[],...r]}:{items:r})}):this.props.onSearch(this.state.searchQuery,this.state.page).then(({data:t})=>{const r=t[this.props.collectionName];if(this.setState({items:r}),this.props.showRecordCount&&this.setState({count:t.list.count}),this.props.pagination){const o=t.list.pages;this.setState({pages:o})}})}onSearchChange(e,{value:t}){this.setState({searchQuery:t})}render(){return n.jsxs("div",{className:["accordion-list",this.props.className||""].join(" "),children:[n.jsxs(K,{className:"accordion-header",children:[n.jsx(V,{"aria-label":"Search",autoFocus:!0,className:"search",icon:"search",onKeyDown:I.clearSearchTimer.bind(this),onKeyUp:I.setSearchTimer.bind(this,this.onSearch.bind(this)),onChange:this.onSearchChange.bind(this),size:"mini",type:"text",value:this.state.searchQuery}),this.renderHeaderAddButton(),this.props.buttons.map(e=>e.render())]}),this.renderSubHeader(),n.jsx(F,{getChildItems:this.props.getChildItems.bind(this,this.state.items),onItemToggle:this.onItemToggle.bind(this),renderItem:this.props.renderItem.bind(this),renderRight:this.renderRight.bind(this),rootItems:this.props.getRootItems(this.state.items),showToggle:this.props.showToggle.bind(this)}),this.renderFooter(),this.renderAddModal(),n.jsx(M,{content:l.t("AccordionList.deleteContent"),header:l.t("AccordionList.deleteHeader"),open:this.state.modalDelete,onCancel:()=>this.setState({modalDelete:!1,selectedItem:null}),onConfirm:this.onDelete.bind(this)}),this.state.saved&&n.jsxs(x,{onDismiss:()=>this.setState({saved:!1}),type:x.MessageTypes.positive,children:[n.jsx(A.Header,{content:l.t("Common.messages.save.header")}),n.jsx(A.Content,{content:l.t("Common.messages.save.content")})]})]})}renderAddButton(e){return this.props.canAddItem&&!this.props.canAddItem(e)?null:n.jsx(m,{"aria-label":"Add",basic:!0,compact:!0,icon:"plus",onClick:this.onAddButton.bind(this,e)})}renderSelectAll(){if(!this.props.selectable&&!this.props.onSelectAll)return null;const e=this.props.selectedRows.map(o=>o.id),r=(this.state.items?this.state.items:[]).reduce((o,y)=>e.includes(y.id)?o:[...o,y],[]);return n.jsx(S,{"aria-label":"Select All",onClick:(o,y)=>this.props.onSelectAll(y,r,this.state.items,o),checked:!r.length})}renderSubHeader(){return n.jsx("div",{className:"sub-header",children:this.renderSelectAll()})}renderAddModal(){if(!(this.state.modalAdd&&this.props.modal))return null;const{component:e,props:t}=this.props.modal;return n.jsx(z,{component:e,item:this.state.selectedItem,onClose:()=>this.setState({modalAdd:!1,selectedItem:null}),onSave:this.onSave.bind(this),...t})}renderDeleteButton(e){return this.props.canDeleteItem&&!this.props.canDeleteItem(e)?null:n.jsx(m,{"aria-label":"Delete",basic:!0,compact:!0,icon:"trash",onClick:this.onDeleteButton.bind(this,e)})}renderEditButton(e){return this.props.canEditItem&&!this.props.canEditItem(e)?null:n.jsx(m,{"aria-label":"Edit",basic:!0,compact:!0,icon:"edit",onClick:this.onEditButton.bind(this,e)})}renderCopyButton(e){return this.props.canCopyItem&&!this.props.canCopyItem(e)?null:n.jsx(m,{"aria-label":"Copy",basic:!0,compact:!0,icon:"copy",onClick:()=>this.onCopyButton(e)})}renderHeaderAddButton(){return!this.props.modal||this.props.hideAddRootButton?null:n.jsx(m,{basic:!0,className:"add-button",content:l.t("Common.buttons.add"),icon:"plus",onClick:()=>this.setState({modalAdd:!0})})}renderRecordCount(){const e=this.state.count;return e?n.jsx("span",{className:"record-count",children:`${Number(e).toLocaleString()} ${l.t("AccordionList.record",{count:e})}`}):null}renderPagination(){return this.props.pagination?n.jsx(H,{activePage:this.state.page,onPageChange:this.onPageChange.bind(this),size:"mini",totalPages:this.state.pages}):null}renderFooter(){return this.props.pagination||this.props.showRecordCount?n.jsx("div",{className:"footer",children:n.jsxs(f,{columns:2,children:[n.jsx(f.Column,{textAlign:"left",children:this.renderRecordCount()}),n.jsx(f.Column,{textAlign:"right",children:this.renderPagination()})]})}):null}renderSelectCheckbox(e){if(!this.props.selectable)return null;const t=this.props.selectedRows.find(r=>r.id===e.id);return n.jsx(S,{"aria-label":"Select",className:"row-select-checkbox",onClick:(r,o)=>this.props.onRowSelect(o,e,r),checked:!!t},`select-checkbox-${e.id}`)}renderRight(e){return n.jsxs(n.Fragment,{children:[n.jsxs(m.Group,{children:[this.renderAddButton(e),this.renderEditButton(e),this.renderCopyButton(e),this.renderDeleteButton(e)]}),this.renderSelectCheckbox(e)]})}}C(p,"defaultProps");p.defaultProps={buttons:[],canAddItem:()=>!0,canDeleteItem:()=>!0,canEditItem:()=>!0,canCopyItem:()=>!1,className:"",lazyLoad:!0,modal:void 0,pagination:!1};p.__docgenInfo={description:"",methods:[{name:"onAddButton",docblock:`Displays the add modal for the selected item.

@param item`,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}}],returns:null,description:"Displays the add modal for the selected item."},{name:"onDelete",docblock:`Deletes the currently selected item.

@returns {*}`,modifiers:[],params:[],returns:{type:{name:"mixed"}},description:"Deletes the currently selected item."},{name:"onDeleteButton",docblock:`Displays the delete modal and sets the selected item.

@param item`,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}}],returns:null,description:"Displays the delete modal and sets the selected item."},{name:"onEditButton",docblock:`Displays the edit modal and sets the selected item.

@param item`,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}}],returns:null,description:"Displays the edit modal and sets the selected item."},{name:"onCopyButton",docblock:`Copies the selected item and displays the add/edit modal.

@param selectedItem`,modifiers:[],params:[{name:"selectedItem",optional:!1,type:{name:"any"}}],returns:null,description:"Copies the selected item and displays the add/edit modal."},{name:"onItemToggle",docblock:`Lazy-loads the children of the passed item and sets them on the state..

@param item`,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}}],returns:null,description:"Lazy-loads the children of the passed item and sets them on the state.."},{name:"onPageChange",docblock:"Changes active page and fetches new set of paginated data.",modifiers:[],params:[{name:"e",optional:!1,type:{name:"any"}},{name:"selectedPage",optional:!1,type:{name:"any"}}],returns:null,description:"Changes active page and fetches new set of paginated data."},{name:"onSave",docblock:`Saves the passed item.

@param item

@returns {*}`,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}}],returns:{type:{name:"mixed"}},description:"Saves the passed item."},{name:"onSearch",docblock:`Executes the search and sets the returned items on the state.

@param parentId

@returns {*}`,modifiers:[],params:[{name:"parentId",optional:!0,type:{name:"number"}}],returns:{type:{name:"mixed"}},description:"Executes the search and sets the returned items on the state."},{name:"onSearchChange",docblock:`Sets the search query on the state.

@param e
@param value`,modifiers:[],params:[{name:"e",optional:!1,type:{name:"Event",alias:"Event"}},{name:"{ value }: any",optional:!1,type:{name:"any"}}],returns:null,description:"Sets the search query on the state."},{name:"renderAddButton",docblock:`Renders the add button for the passed item (if applicable).

@param item

@returns {null|*}`,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}}],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the add button for the passed item (if applicable)."},{name:"renderSelectAll",docblock:null,modifiers:[],params:[],returns:null},{name:"renderSubHeader",docblock:null,modifiers:[],params:[],returns:null},{name:"renderAddModal",docblock:`Renders the add modal.

@returns {null|*}`,modifiers:[],params:[],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the add modal."},{name:"renderDeleteButton",docblock:`Renders the delete button for the passed item (if applicable).

@param item

@returns {null|*}`,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}}],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the delete button for the passed item (if applicable)."},{name:"renderEditButton",docblock:`Renders the edit button for the passed item (if applicable).

@param item

@returns {null|*}`,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}}],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the edit button for the passed item (if applicable)."},{name:"renderCopyButton",docblock:`Renders the copy button for the passed item (if applicable).

@param item

@returns {null|*}`,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}}],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the copy button for the passed item (if applicable)."},{name:"renderHeaderAddButton",docblock:`Renders the header add button.

@returns {null|*}`,modifiers:[],params:[],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the header add button."},{name:"renderRecordCount",docblock:`Renders the record count component.

@returns {null|*}`,modifiers:[],params:[],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the record count component."},{name:"renderPagination",docblock:`Renders the pagination button row.

@returns {null|*}`,modifiers:[],params:[],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the pagination button row."},{name:"renderFooter",docblock:`Renders the footer.

@returns {null|*}`,modifiers:[],params:[],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the footer."},{name:"renderSelectCheckbox",docblock:`Renders the select checkbox for the passed item.

@returns {null|*}`,modifiers:[],params:[{name:"item",optional:!1,type:{name:"signature",type:"object",raw:"{id: number}",signature:{properties:[{key:"id",value:{name:"number",required:!0}}]}}}],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the select checkbox for the passed item."},{name:"renderRight",docblock:`Renders the right side of the passed item.

@param item

@returns {*}`,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}}],returns:{type:{name:"mixed"}},description:"Renders the right side of the passed item."}],displayName:"AccordionList",props:{buttons:{required:!1,flowType:{name:"Array",elements:[{name:"Object"}],raw:"Array<Object>"},description:"",defaultValue:{value:"[]",computed:!1}},canAddItem:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}}},description:"",defaultValue:{value:"() => true",computed:!1}},canCopyItem:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}}},description:"",defaultValue:{value:"() => false",computed:!1}},canDeleteItem:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}}},description:"",defaultValue:{value:"() => true",computed:!1}},canEditItem:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}}},description:"",defaultValue:{value:"() => true",computed:!1}},className:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},collectionName:{required:!0,flowType:{name:"string"},description:""},getChildItems:{required:!0,flowType:{name:"signature",type:"function",raw:"(items: Array<any>, item: any) => Array<any>",signature:{arguments:[{name:"items",type:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"}},{name:"item",type:{name:"any"}}],return:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"}}},description:""},getRootItems:{required:!0,flowType:{name:"signature",type:"function",raw:"(items: Array<any>) => Array<any>",signature:{arguments:[{name:"items",type:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"}}],return:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"}}},description:""},hideAddRootButton:{required:!0,flowType:{name:"boolean"},description:""},lazyLoad:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},modal:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  component: Component<{}>,
  onAddItem: (item: any) => any,
  props: any,
  state: any,
}`,signature:{properties:[{key:"component",value:{name:"Component",elements:[{name:"signature",type:"object",raw:"{}",signature:{properties:[]}}],raw:"Component<{}>",required:!0}},{key:"onAddItem",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!0}},{key:"props",value:{name:"any",required:!0}},{key:"state",value:{name:"any",required:!0}}]}},description:"",defaultValue:{value:"undefined",computed:!0}},onCopy:{required:!0,flowType:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}}},description:""},onDelete:{required:!0,flowType:{name:"signature",type:"function",raw:"(item: any) => Promise<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onRowSelect:{required:!0,flowType:{name:"signature",type:"function",raw:"(?any, ?any, ?any) => void",signature:{arguments:[{name:"",type:{name:"any",nullable:!0}},{name:"",type:{name:"any",nullable:!0}},{name:"",type:{name:"any",nullable:!0}}],return:{name:"void"}}},description:""},onSave:{required:!0,flowType:{name:"signature",type:"function",raw:"(item: any) => Promise<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSearch:{required:!0,flowType:{name:"signature",type:"function",raw:"(?number | ?string, ?number | ?string) => Promise<any>",signature:{arguments:[{name:"",type:{name:"union",raw:"?number | ?string",elements:[{name:"number",nullable:!0},{name:"string",nullable:!0}]}},{name:"",type:{name:"union",raw:"?number | ?string",elements:[{name:"number",nullable:!0},{name:"string",nullable:!0}]}}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},onSelectAll:{required:!0,flowType:{name:"signature",type:"function",raw:"(?any, ?any, ?any, ?any) => void",signature:{arguments:[{name:"",type:{name:"any",nullable:!0}},{name:"",type:{name:"any",nullable:!0}},{name:"",type:{name:"any",nullable:!0}},{name:"",type:{name:"any",nullable:!0}}],return:{name:"void"}}},description:""},pagination:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},renderItem:{required:!0,flowType:{name:"signature",type:"function",raw:"(item: any) => string | Component<{}>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"union",raw:"string | Component<{}>",elements:[{name:"string"},{name:"Component",elements:[{name:"signature",type:"object",raw:"{}",signature:{properties:[]}}],raw:"Component<{}>"}]}}},description:""},selectable:{required:!0,flowType:{name:"boolean"},description:""},selectedRows:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{id: number}",signature:{properties:[{key:"id",value:{name:"number",required:!0}}]}}],raw:"Array<{id: number}>"},description:""},showRecordCount:{required:!0,flowType:{name:"boolean"},description:""},showToggle:{required:!0,flowType:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}}},description:""}}};const dt={title:"Components/Semantic UI/AccordionList",decorators:[i.withKnobs]},w=[{id:1,name:"Parent 1",parent_id:null},{id:2,name:"Parent 2",parent_id:null},{id:3,name:"Child 1",parent_id:1},{id:4,name:"Child 2",parent_id:1},{id:5,name:"Child 3",parent_id:2},{id:6,name:"Grandchild 1",parent_id:5}],u=()=>n.jsx(p,{canAddItem:()=>i.boolean("Can add",!0),canDeleteItem:()=>i.boolean("Can delete",!0),canEditItem:()=>i.boolean("Can edit",!0),collectionName:"items",getChildItems:(a,e)=>s.where(a,{parent_id:e.id}),getRootItems:a=>s.where(a,{parent_id:null}),modal:{component:g},onDelete:d("delete"),onSave:()=>(d("save")(),Promise.resolve()),onSearch:(a,e)=>b.onNestedLoad({items:w,parentId:a,parentKey:"parent_id",search:e}),renderItem:a=>a.name,showToggle:()=>!0}),c=()=>n.jsx(p,{canAddItem:()=>i.boolean("Can add",!0),canDeleteItem:()=>i.boolean("Can delete",!0),canEditItem:()=>i.boolean("Can edit",!0),collectionName:"items",getChildItems:(a,e)=>s.where(a,{parent_id:e.id}),getRootItems:a=>s.where(a,{parent_id:null}),modal:{component:g},onDelete:d("delete"),onSave:()=>(d("save")(),Promise.resolve()),onSearch:(a,e)=>b.onNestedLoad({items:w,parentId:a,parentKey:"parent_id",search:e}),renderItem:a=>a.name,showToggle:()=>!0}),h=()=>n.jsx(p,{buttons:[{render:()=>n.jsx(m,{children:"Test"},"1")},{render:()=>n.jsx(m,{children:"Test 2"},"2")}],canAddItem:()=>i.boolean("Can add",!0),canDeleteItem:()=>i.boolean("Can delete",!0),canEditItem:()=>i.boolean("Can edit",!0),collectionName:"items",getChildItems:(a,e)=>s.where(a,{parent_id:e.id}),getRootItems:a=>s.where(a,{parent_id:null}),modal:{component:g},onDelete:d("delete"),onSave:()=>(d("save")(),Promise.resolve()),onSearch:(a,e)=>b.onNestedLoad({items:w,parentId:a,parentKey:"parent_id",search:e}),renderItem:a=>a.name,selectable:!0,selectedRows:[{id:1}],onRowSelect:d("row selected"),onSelectAll:d("select all"),showToggle:()=>!0});u.__docgenInfo={description:"",methods:[],displayName:"Default"};c.__docgenInfo={description:"",methods:[],displayName:"WithRecordCount"};h.__docgenInfo={description:"",methods:[],displayName:"Selectable"};var v,R,k;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`() => <AccordionList canAddItem={() => boolean('Can add', true)} canDeleteItem={() => boolean('Can delete', true)} canEditItem={() => boolean('Can edit', true)} collectionName='items' getChildItems={(items, item) => _.where(items, {
  parent_id: item.id
})} getRootItems={items => _.where(items, {
  parent_id: null
})} modal={{
  component: AddModal
}} onDelete={action('delete')} onSave={() => {
  action('save')();
  return Promise.resolve();
}} onSearch={(parentId, search) => Api.onNestedLoad({
  items: data,
  parentId,
  parentKey: 'parent_id',
  search
})} renderItem={item => item.name} showToggle={() => true} />`,...(k=(R=u.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var D,T,_;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`() => <AccordionList canAddItem={() => boolean('Can add', true)} canDeleteItem={() => boolean('Can delete', true)} canEditItem={() => boolean('Can edit', true)} collectionName='items' getChildItems={(items, item) => _.where(items, {
  parent_id: item.id
})} getRootItems={items => _.where(items, {
  parent_id: null
})} modal={{
  component: AddModal
}} onDelete={action('delete')} onSave={() => {
  action('save')();
  return Promise.resolve();
}} onSearch={(parentId, search) => Api.onNestedLoad({
  items: data,
  parentId,
  parentKey: 'parent_id',
  search
})} renderItem={item => item.name} showToggle={() => true} />`,...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var j,B,P;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`() => <AccordionList buttons={[{
  render: () => <Button key='1'>Test</Button>
}, {
  render: () => <Button key='2'>Test 2</Button>
}]} canAddItem={() => boolean('Can add', true)} canDeleteItem={() => boolean('Can delete', true)} canEditItem={() => boolean('Can edit', true)} collectionName='items' getChildItems={(items, item) => _.where(items, {
  parent_id: item.id
})} getRootItems={items => _.where(items, {
  parent_id: null
})} modal={{
  component: AddModal
}} onDelete={action('delete')} onSave={() => {
  action('save')();
  return Promise.resolve();
}} onSearch={(parentId, search) => Api.onNestedLoad({
  items: data,
  parentId,
  parentKey: 'parent_id',
  search
})} renderItem={item => item.name} selectable selectedRows={[{
  id: 1
}]} onRowSelect={action('row selected')} onSelectAll={action('select all')} showToggle={() => true} />`,...(P=(B=h.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const lt=["Default","WithRecordCount","Selectable"];export{u as Default,h as Selectable,c as WithRecordCount,lt as __namedExportsOrder,dt as default};