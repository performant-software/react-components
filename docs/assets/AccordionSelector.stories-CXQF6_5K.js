var C=Object.defineProperty;var w=(i,e,t)=>e in i?C(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var f=(i,e,t)=>(w(i,typeof e!="symbol"?e+"":e,t),t);import{j as a}from"./jsx-runtime-BTCK_S7S.js";import{r as b}from"./index-CBqU2yxZ.js";import{a as p}from"./chunk-WFFRPTHA-B2vgThZf.js";import{d as h}from"./index-DfmhmaGJ.js";import{B as d}from"./Button-Blq7Z6RX.js";import{_ as o}from"./index-default-C_maRo4o.js";import{u as g}from"./index.es28-C5Z9R2NB.js";import{G as u}from"./Grid-Czr5owxQ.js";import{M as _}from"./Message-3p6wyYpA.js";import{H as T}from"./Header-BJ3NNdPz.js";import{I as x}from"./Icon-2tEtgK8g.js";import{I as k}from"./Input--hQVCRQV.js";import{M as l}from"./Modal-Bz2VEyQG.js";import{i as r}from"./i18n-C8zWlANG.js";import{E as M}from"./EditModal-DZB5b4L3.js";import{M as j}from"./ModalContext-Bu-D9kD-.js";import{N as R}from"./NestedAccordion-CZICvb0a.js";import{S as q}from"./SelectizeHeader-BiV_Rzyz.js";import{T as y}from"./Toaster-C1YYqOUE.js";import{w as D}from"./withTranslation-D8FvQLBO.js";import{A as E}from"./AddModal-8so4BWij.js";import{A as P}from"./Api-DXLamogn.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./mapValues-CZh2vnSw.js";import"./pickBy-CU2rOOKe.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-Bu_b4Pek.js";import"./index-Cw1G72V2.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./debounce-Bq1aTuh-.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CckcRzoH.js";import"./Label-Cq1fb1cd.js";import"./ModernAutoControlledComponent-DJBWk5EW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CQoJOerW.js";import"./toFinite-KQ8KevIC.js";import"./forEach-CXlln0XP.js";import"./Dimmer-D_gwaesu.js";import"./Portal-DvhHJPzU.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DZGZymok.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-B4PnIEPz.js";import"./iframe-DUkFOzYJ.js";import"../sb-preview/runtime.js";import"./index-BBpNyw-T.js";import"./_baseSet-6y0qliU9.js";import"./_baseAssignValue-izmKBXUH.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-Cyb9hIKi.js";import"./i18next-Sc0HEOoc.js";import"./toPropertyKey-hKuLU48H.js";import"./defineProperty-CCxoMnQV.js";import"./inherits-D5wXBZoG.js";import"./createClass-D2z1h_eG.js";import"./getPrototypeOf-BYVhAdwF.js";import"./index.es3-CAJGsQNm.js";import"./Loader-CooidObp.js";import"./Accordion-hxhfwUID.js";import"./without-BP-mqg2K.js";import"./isArrayLikeObject-CbXKTyfk.js";import"./Segment-C5_maSSM.js";import"./Transition-DSFEXhCu.js";import"./filter-CVNi8iPS.js";import"./slicedToArray-D1W8oQh0.js";import"./nonIterableRest-Bc-81Ll3.js";import"./unsupportedIterableToArray-78IFcom3.js";import"./objectWithoutProperties--RY0eV0u.js";import"./utils-Bq6oISwF.js";class c extends b.Component{constructor(e){super(e),this.state={items:[],modalAdd:!1,saved:!1,searchQuery:"",selectedItem:null,selectedItems:e.selectedItems}}componentDidUpdate(e){this.props.open&&!e.open&&this.onSearch(),this.props.selectedItems!==e.selectedItems&&this.setState({selectedItems:this.props.selectedItems})}isSelected(e){return!!o.findWhere(this.state.selectedItems,{id:e.id})}onItemClick(e){this.props.isSelectable&&!this.props.isSelectable(e)||this.setState(t=>{let n;return this.isSelected(e)?n=o.filter(t.selectedItems,s=>s.id!==e.id):this.props.multiple?n=[...t.selectedItems,e]:n=[e],{selectedItems:n}})}onItemSelection(e){this.state.selectedItem===e?this.setState({selectedItem:null},this.onItemClick.bind(this,e)):this.setState({selectedItem:e})}onItemToggle(e){e.loaded||this.onSearch(e.id).then(()=>{this.setState(t=>({items:o.map(t.items,n=>n.id===e.id?{...n,loaded:!0}:n)}))})}onSearch(e=null){return this.props.onSearch(e,this.state.searchQuery).then(({data:t})=>{const n=t[this.props.collectionName];this.setState(s=>e?{items:[...s.items||[],...n]}:{items:n})})}onSearchChange(e,{value:t}){this.setState({searchQuery:t})}render(){return a.jsx(j.Consumer,{children:e=>a.jsxs(l,{className:"accordion-selector",mountNode:e,open:this.props.open,size:"small",children:[a.jsx(l.Header,{children:a.jsxs(u,{columns:2,verticalAlign:"middle",children:[a.jsx(u.Column,{textAlign:"left",width:7,children:a.jsx(T,{content:this.props.title?this.props.title:r.t("AccordionSelector.title")})}),a.jsxs(u.Column,{textAlign:"right",width:9,children:[a.jsx(k,{"aria-label":"Search",autoFocus:!0,icon:"search",onKeyDown:g.clearSearchTimer.bind(this),onKeyUp:g.setSearchTimer.bind(this,this.onSearch.bind(this)),onChange:this.onSearchChange.bind(this),size:"mini",type:"text",value:this.state.searchQuery}),this.renderAddButton()]})]})}),a.jsxs(l.Content,{children:[a.jsx(q,{isSelected:t=>this.state.selectedItem===t,items:this.state.selectedItems,onItemClick:this.onItemSelection.bind(this),renderItem:this.props.renderItem.bind(this)}),a.jsx(R,{getChildItems:this.props.getChildItems.bind(this,this.state.items),onItemClick:this.onItemClick.bind(this),onItemToggle:this.onItemToggle.bind(this),renderItem:this.props.renderItem.bind(this),renderRight:this.renderRight.bind(this),rootItems:this.props.getRootItems(this.state.items),showToggle:this.props.showToggle.bind(this)}),this.renderAddModal(),this.state.saved&&a.jsxs(y,{onDismiss:()=>this.setState({saved:!1}),type:y.MessageTypes.positive,children:[a.jsx(_.Header,{content:r.t("Common.messages.save.header")}),a.jsx(_.Content,{content:r.t("Common.messages.save.content")})]})]}),a.jsxs(l.Actions,{children:[a.jsx(d,{onClick:this.props.onSave.bind(this,this.state.selectedItems),primary:!0,size:"medium",type:"submit",children:r.t("Common.buttons.save")}),a.jsx(d,{basic:!0,onClick:this.props.onClose.bind(this),size:"medium",type:"button",children:r.t("Common.buttons.cancel")})]})]})})}renderAddButton(){return this.props.modal?a.jsx(d,{basic:!0,className:"add-button",content:r.t("Common.buttons.add"),icon:"plus",onClick:()=>this.setState({modalAdd:!0})}):null}renderAddModal(){if(!(this.state.modalAdd&&this.props.modal))return null;const{component:e,props:t,onSave:n}=this.props.modal;return a.jsx(M,{component:e,onClose:()=>this.setState({modalAdd:!1,selectedItem:null}),onSave:s=>n(s).then(v=>this.setState({modalAdd:!1,saved:!0,searchQuery:"",selectedItems:[v]},this.onSearch.bind(this))),...t})}renderRight(e){return this.isSelected(e)?a.jsx(x,{color:"green",name:"check"}):null}}f(c,"defaultProps");c.defaultProps={isSelectable:void 0,modal:void 0,multiple:!1,open:!1,selectedItems:[],title:void 0};const V=D()(c);c.__docgenInfo={description:"",methods:[{name:"isSelected",docblock:`Returns true if the passed item is selected.

@param item

@returns {boolean}`,modifiers:[],params:[{name:"item",optional:!1}],returns:{type:{name:"boolean"}},description:"Returns true if the passed item is selected."},{name:"onItemClick",docblock:`Toggles selection for the passed item.

@param item`,modifiers:[],params:[{name:"item",optional:!1}],returns:null,description:"Toggles selection for the passed item."},{name:"onItemSelection",docblock:`Toggles selection for the passed item.

@param item`,modifiers:[],params:[{name:"item",optional:!1}],returns:null,description:"Toggles selection for the passed item."},{name:"onItemToggle",docblock:`Lazy-loads the children for the passed item.

@param item`,modifiers:[],params:[{name:"item",optional:!1}],returns:null,description:"Lazy-loads the children for the passed item."},{name:"onSearch",docblock:`Executes the search.

@param parentId

@returns {*}`,modifiers:[],params:[{name:"parentId",optional:!0}],returns:{type:{name:"mixed"}},description:"Executes the search."},{name:"onSearchChange",docblock:`Sets the search query value on the state.

@param e
@param value`,modifiers:[],params:[{name:"e",optional:!1},{name:"{ value }",optional:!1}],returns:null,description:"Sets the search query value on the state."},{name:"renderAddButton",docblock:`Renders the add button.

@returns {null|*}`,modifiers:[],params:[],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the add button."},{name:"renderAddModal",docblock:`Renders the add modal.

@returns {null|*}`,modifiers:[],params:[],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the add modal."},{name:"renderRight",docblock:`Renders the right column for the passed item.

@param item

@returns {null|*}`,modifiers:[],params:[{name:"item",optional:!1}],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the right column for the passed item."}],displayName:"AccordionSelector",props:{collectionName:{required:!0,flowType:{name:"string"},description:""},getChildItems:{required:!0,flowType:{name:"signature",type:"function",raw:"(items: Array<any>, item: any) => Array<any>",signature:{arguments:[{name:"items",type:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"}},{name:"item",type:{name:"any"}}],return:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"}}},description:""},getRootItems:{required:!0,flowType:{name:"signature",type:"function",raw:"(items: Array<any>) => Array<any>",signature:{arguments:[{name:"items",type:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"}}],return:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"}}},description:""},isSelectable:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}}},description:"",defaultValue:{value:"undefined",computed:!0}},modal:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  component: ComponentType<{}>,
  onSave: (item: any) => Promise<any>,
  props: any,
  state: any,
}`,signature:{properties:[{key:"component",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{}",signature:{properties:[]}}],raw:"ComponentType<{}>",required:!0}},{key:"onSave",value:{name:"signature",type:"function",raw:"(item: any) => Promise<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}},required:!0}},{key:"props",value:{name:"any",required:!0}},{key:"state",value:{name:"any",required:!0}}]}},description:"",defaultValue:{value:"undefined",computed:!0}},multiple:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!0,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSave:{required:!0,flowType:{name:"signature",type:"function",raw:"(selectedItems: Array<any>) => void",signature:{arguments:[{name:"selectedItems",type:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"}}],return:{name:"void"}}},description:""},onSearch:{required:!0,flowType:{name:"signature",type:"function",raw:"(parentId: ?number, search: ?string) => any",signature:{arguments:[{name:"parentId",type:{name:"number",nullable:!0}},{name:"search",type:{name:"string",nullable:!0}}],return:{name:"any"}}},description:""},open:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},renderItem:{required:!0,flowType:{name:"signature",type:"function",raw:"(item: any) => string | Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"union",raw:"string | Element<any>",elements:[{name:"string"},{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}]}}},description:""},selectedItems:{required:!1,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"},description:"",defaultValue:{value:"[]",computed:!1}},showToggle:{required:!0,flowType:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}}},description:""},title:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"undefined",computed:!0}}}};const mt={title:"Components/Semantic UI/AccordionSelector",decorators:[h.withKnobs]},N=[{id:1,first_name:"Liuka",last_name:"Cadwallader",title:"Database Administrator III",manager_id:null},{id:2,first_name:"Ray",last_name:"O'Sheerin",title:"Analog Circuit Design manager",manager_id:1},{id:3,first_name:"Marian",last_name:"Bassick",title:"Executive Secretary",manager_id:1},{id:4,first_name:"Maridel",last_name:"Cerman",title:"Technical Writer",manager_id:1},{id:5,first_name:"Reggie",last_name:"Keeton",title:"Administrative Assistant II",manager_id:1},{id:6,first_name:"Lev",last_name:"Twidle",title:"Senior Sales Associate",manager_id:1},{id:7,first_name:"Rees",last_name:"Scanlon",title:"Accountant IV",manager_id:5},{id:8,first_name:"Bondie",last_name:"Dreier",title:"GIS Technical Architect",manager_id:2},{id:9,first_name:"Modesty",last_name:"Aspy",title:"Administrative Officer",manager_id:4},{id:10,first_name:"Michal",last_name:"Luckham",title:"VP Marketing",manager_id:2},{id:11,first_name:"Clarie",last_name:"Ogley",title:"Cost Accountant",manager_id:2},{id:12,first_name:"Lidia",last_name:"Hammell",title:"Graphic Designer",manager_id:5},{id:13,first_name:"Rutherford",last_name:"De Matteis",title:"Assistant Manager",manager_id:3},{id:14,first_name:"Damaris",last_name:"Balls",title:"Software Engineer IV",manager_id:1},{id:15,first_name:"Marjy",last_name:"Tarrant",title:"Social Worker",manager_id:1},{id:16,first_name:"Arty",last_name:"Antunez",title:"Environmental Specialist",manager_id:4},{id:17,first_name:"Lemuel",last_name:"Huison",title:"Assistant Manager",manager_id:4},{id:18,first_name:"Kessiah",last_name:"Kuhnt",title:"Editor",manager_id:4},{id:19,first_name:"Gisele",last_name:"Coffey",title:"Payment Adjustment Coordinator",manager_id:4},{id:20,first_name:"Dorothee",last_name:"Pandey",title:"Help Desk Technician",manager_id:2},{id:21,first_name:"Irena",last_name:"Doog",title:"Payment Adjustment Coordinator",manager_id:5},{id:22,first_name:"Audre",last_name:"Sloper",title:"Recruiter",manager_id:3},{id:23,first_name:"Allie",last_name:"Byrch",title:"Media Manager III",manager_id:1},{id:24,first_name:"Eben",last_name:"Boddis",title:"Web Designer I",manager_id:3},{id:25,first_name:"Diane",last_name:"Gilbart",title:"Electrical Engineer",manager_id:3},{id:26,first_name:"Hewitt",last_name:"Kirgan",title:"Office Assistant IV",manager_id:5},{id:27,first_name:"Chadd",last_name:"Gartside",title:"Chief Design Engineer",manager_id:4},{id:28,first_name:"Lauryn",last_name:"Henriques",title:"Assistant Media Planner",manager_id:1},{id:29,first_name:"Cloris",last_name:"Tuiller",title:"Assistant Media Planner",manager_id:5},{id:30,first_name:"Nealson",last_name:"Patterson",title:"Accounting Assistant III",manager_id:4},{id:31,first_name:"Anstice",last_name:"Leveridge",title:"Budget/Accounting Analyst II",manager_id:2},{id:32,first_name:"Tobie",last_name:"Venus",title:"Tax Accountant",manager_id:1},{id:33,first_name:"Kerstin",last_name:"Fletham",title:"Research Nurse",manager_id:5},{id:34,first_name:"Mirabelle",last_name:"Eisenberg",title:"Internal Auditor",manager_id:2},{id:35,first_name:"Phillipp",last_name:"Mallia",title:"Senior Sales Associate",manager_id:4},{id:36,first_name:"Aurore",last_name:"Whysall",title:"Budget/Accounting Analyst II",manager_id:1},{id:37,first_name:"Hastie",last_name:"Cahalan",title:"Human Resources Assistant I",manager_id:5},{id:38,first_name:"Jim",last_name:"Chestle",title:"Analyst Programmer",manager_id:3},{id:39,first_name:"Nerti",last_name:"Witchell",title:"Statistician II",manager_id:2},{id:40,first_name:"Nerita",last_name:"Spincke",title:"Staff Accountant I",manager_id:5},{id:41,first_name:"Cathrin",last_name:"Bickerdike",title:"Financial Analyst",manager_id:3},{id:42,first_name:"Morten",last_name:"Eixenberger",title:"Associate Professor",manager_id:5},{id:43,first_name:"Alvie",last_name:"Toomey",title:"Staff Accountant I",manager_id:2},{id:44,first_name:"Lynne",last_name:"Lowndsbrough",title:"Analog Circuit Design manager",manager_id:3},{id:45,first_name:"Jdavie",last_name:"Zorzi",title:"Clinical Specialist",manager_id:1},{id:46,first_name:"Bibbye",last_name:"Watsam",title:"Data Coordiator",manager_id:5},{id:47,first_name:"Charmaine",last_name:"Hurd",title:"Business Systems Development Analyst",manager_id:2},{id:48,first_name:"Milzie",last_name:"Shorter",title:"Health Coach IV",manager_id:3},{id:49,first_name:"Walsh",last_name:"Vesque",title:"Nurse Practicioner",manager_id:1},{id:50,first_name:"Shelia",last_name:"Davidow",title:"GIS Technical Architect",manager_id:1}],m=()=>{const[i,e]=b.useState(!1);return a.jsxs(a.Fragment,{children:[a.jsx(d,{content:"Open",onClick:()=>e(!0)}),a.jsx(V,{collectionName:"items",getChildItems:(t,n)=>o.where(t,{manager_id:n.id}),getRootItems:t=>o.where(t,{manager_id:null}),isSelectable:()=>!0,modal:{component:E,onSave:()=>(p("add save")(),Promise.resolve({}))},multiple:h.boolean("Multiple",!1),onClose:()=>{p("close")(),e(!1)},onSave:()=>(p("save")(),e(!1),Promise.resolve()),onSearch:(t,n)=>P.onNestedLoad({items:N,parentKey:"manager_id",parentId:t,search:n}),open:i,renderItem:t=>`${t.first_name} ${t.last_name} (${t.title})`,showToggle:()=>!0,title:h.text("Title","Select some")})]})};m.__docgenInfo={description:"",methods:[],displayName:"Default"};var I,S,A;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(false);
  return <>
      <Button content='Open' onClick={() => setVisible(true)} />
      <AccordionSelector collectionName='items' getChildItems={(items, item) => _.where(items, {
      manager_id: item.id
    })} getRootItems={items => _.where(items, {
      manager_id: null
    })} isSelectable={() => true} modal={{
      component: AddModal,
      onSave: () => {
        action('add save')();
        return Promise.resolve({});
      }
    }} multiple={boolean('Multiple', false)} onClose={() => {
      action('close')();
      setVisible(false);
    }} onSave={() => {
      action('save')();
      setVisible(false);
      return Promise.resolve();
    }} onSearch={(parentId, search) => Api.onNestedLoad({
      items: data,
      parentKey: 'manager_id',
      parentId,
      search
    })} open={visible} renderItem={item => \`\${item.first_name} \${item.last_name} (\${item.title})\`} showToggle={() => true} title={text('Title', 'Select some')} />
    </>;
}`,...(A=(S=m.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const ot=["Default"];export{m as Default,ot as __namedExportsOrder,mt as default};