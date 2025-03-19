import{j as n}from"./jsx-runtime-D9TvR9R2.js";import{d as F}from"./index-Dr18q9sk.js";import{r as a}from"./index-C0dDX-lL.js";import{_ as i}from"./index-default-C_maRo4o.js";import{Y as O}from"./index.es2-Dc6jHdVz.js";import"./index.es33-DlV9y7LU.js";import{u as G}from"./uuid-BH6G0oTz.js";import{G as k}from"./Grid-CpdbEkBf.js";import{M as V}from"./Message-smmiVK7n.js";import{B as C}from"./Button-CJhT71wt.js";import{L as v}from"./List-WZaCZ-rK.js";import{F as Z}from"./Form-WfNl3YLh.js";import{M as q}from"./Modal-BWgkEMr1.js";import{i as h}from"./i18n-C9xJ7SCg.js";import{B as H}from"./BibliographyForm-DOR4jOuR.js";import{Z as W,B as $}from"./BibliographySearchInput-B4vYTHCp.js";import{D as z}from"./Dropdown-DwNow7wJ.js";import{S as J}from"./StyleSelector-DsToYO6v.js";import{T as j}from"./Toaster-gMCa2mDU.js";import{u as X}from"./List-C7esUQuv.js";import"./mapValues-BXr-GEgA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./pickBy-ILmh4CwI.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-CVmyTvcu.js";import"./index-Cw1G72V2.js";import"./index-CKJfshIT.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./preview-errors-CzpZmerH.js";import"./debounce-C2QphL08.js";import"./index-DOYXiIEK.js";import"./iframe-D6tcPi_a.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./getElementType-BSRayMAs.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./Icon-C_3d7-zE.js";import"./map-DWKMCCtW.js";import"./Label-aEFd48OX.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Cc_HXDPA.js";import"./toFinite-C3oJXAtX.js";import"./forEach-CLeEMxs1.js";import"./Dimmer-DP3fvqlo.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./Checkbox-B3tsCUtI.js";import"./_baseSet-BllfnHSO.js";import"./_baseAssignValue-UQlBDUKN.js";import"./Input-Bwh_HEb3.js";import"./index-mbjjMjCk.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-CY-Bv0TY.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";import"./Bibliography-isW7v-pd.js";import"./without-Duh6Zu7H.js";import"./isArrayLikeObject-Bl_bAmop.js";import"./deburr-CNLr_JRW.js";import"./filter-B6f9p5im.js";import"./Transition-HA1Bivu3.js";import"./Confirm-BUdp95GX.js";import"./Pagination-CRHbXf2X.js";import"./Menu-C3RUPz9h.js";import"./Header-BHdMo175.js";import"./DropdownButton-BOdm4mkS.js";import"./EditModal-BsgnLFkh.js";import"./index.es3-Bqj6ivji.js";import"./Loader-lqR_Ikjg.js";import"./AssociatedDropdown-CZpiZSKF.js";import"./FuzzyDate-DMFLvhzg.js";import"./DateInput-Bc2PBuBh.js";import"./Trans-BYRLofKo.js";import"./objectWithoutProperties--RY0eV0u.js";import"./utils-DCllE6BU.js";import"./createClass-D0eOxKhW.js";const B=e=>n.jsxs(q,{as:Z,centered:!1,open:!0,children:[n.jsx(q.Header,{content:h.t("BibliographyModal.title")}),n.jsx(q.Content,{children:n.jsx(H,{...e})}),e.children]});B.__docgenInfo={description:"",methods:[],displayName:"BibliographyModal",props:{item:{required:!0,flowType:{name:"any"},description:""}}};const T="ascending",L="descending",P=e=>{const u=a.useRef(),p=a.useCallback(r=>{const o=e.value===r.value&&e.direction===T?L:T;e.onChange({...r,direction:o})},[e.direction,e.onChange,e.value]);return a.useEffect(()=>{if(!e.value){let r;e.defaultValue?r=i.findWhere(e.options,{value:e.defaultValue}):r=i.first(e.options),p(r)}},[]),n.jsxs(C.Group,{basic:!0,className:"sort-selector",style:{fontSize:"inherit"},children:[n.jsx(C,{"aria-label":"Sort by",content:e.text,icon:e.direction===T?"sort alphabet up":"sort alphabet down",onClick:r=>u.current.handleClick(r)}),n.jsx(z,{"aria-label":"Sort",className:"button icon",floating:!0,options:i.map(e.options,r=>({...r,onClick:()=>p(r)})),ref:u,trigger:n.jsx(n.Fragment,{}),value:e.value})]})};P.__docgenInfo={description:"",methods:[],displayName:"SortSelector",props:{defaultValue:{required:!1,flowType:{name:"string"},description:""},direction:{required:!0,flowType:{name:"string"},description:""},onChange:{required:!0,flowType:{name:"signature",type:"function",raw:"(sort: Sort) => void",signature:{arguments:[{name:"sort",type:{name:"intersection",raw:`Option & {
  direction?: string
}`,elements:[{name:"signature",type:"object",raw:`{
  key: string,
  value: string,
  text: string
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  direction?: string
}`,signature:{properties:[{key:"direction",value:{name:"string",required:!1}}]}}]}}],return:{name:"void"}}},description:""},options:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string,
  value: string,
  text: string
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}}],raw:"Array<Option>"},description:""},text:{required:!0,flowType:{name:"string"},description:""},value:{required:!0,flowType:{name:"string"},description:""}}};const Y="book",K="https://raw.githubusercontent.com/citation-style-language/locales/master/locales-en-US.xml",d={author:"author",date:"date",title:"title"},Q=[{key:d.title,value:d.title,text:h.t("BibliographyList.sort.title")},{key:d.author,value:d.author,text:h.t("BibliographyList.sort.author")},{key:d.date,value:d.date,text:h.t("BibliographyList.sort.date")}],ee=X(e=>n.jsx(v,{divided:!0,relaxed:"very",children:i.map(e.items,(u,p)=>n.jsxs(v.Item,{as:k,columns:2,padded:!0,children:[n.jsx(v.Content,{as:k.Column,textAlign:"left",verticalAlign:"middle",width:14,children:n.jsx(O,{item:u,locale:e.locale,style:e.style&&e.style.xml})}),n.jsx(v.Content,{as:k.Column,textAlign:"right",verticalAlign:"middle",width:2,children:i.map(e.actions,(r,o)=>n.jsx(C,{"aria-label":r.name,basic:!0,icon:r.icon,onClick:r.onClick.bind(void 0,u)},o))})]},p))})),_=e=>{const[u,p]=a.useState(),[r,o]=a.useState(!1),[c,y]=a.useState(),[s,N]=a.useState({}),b=a.useCallback(t=>{const{id:m}=t||{},{uid:g=G()}=t||{},l=i.omit(t,"id","uid","data");return i.extend(l,{creators:i.reject(t.creators,w=>!(w.name||w.firstName||w.lastName))}),{id:m,uid:g,data:l}},[]),x=a.useCallback((t,m)=>{let g;if(s===d.title)g=t.title;else if(s===d.author){const l=i.first(t.creators);g=(l==null?void 0:l.name)||`${l==null?void 0:l.lastName}, ${l==null?void 0:l.firstName}`}else s===d.date?g=t.date:g=m;return g},[]),U=a.useMemo(()=>{let t=i.chain(e.items).filter(m=>!m._destroy).map(m=>({...i.omit(m,"data"),...m.data})).value();return t=i.sortBy(t,x),s.direction===L&&(t=t.reverse()),t},[x,s,e.items]),M=a.useCallback(()=>n.jsxs(n.Fragment,{children:[n.jsx(J,{onChange:(t,m)=>y({name:t,xml:m})}),n.jsx(P,{direction:s.direction,onChange:t=>N(t),options:Q,text:s.text,value:s.value})]}),[s,c]),R=a.useCallback(t=>Promise.resolve(e.onDelete(b(t))),[b,e.onDelete]),S=a.useCallback(t=>Promise.resolve(e.onSave(b(t))),[b,e.onSave]);return a.useEffect(()=>{fetch(K).then(t=>t.text()).then(t=>p(t))},[]),n.jsx(W.Provider,{value:{translateUrl:e.translateUrl},children:n.jsxs("div",{children:[n.jsx($,{onError:()=>o(!0),onFind:t=>i.map(t,S)}),n.jsx(ee,{...e,actions:[{name:"edit"},{name:"delete"}],className:"bibliography-list",items:U,locale:u,modal:{component:B,props:{defaults:{itemType:Y}}},onDelete:R,onSave:S,renderListHeader:M,style:c}),r&&n.jsx(j,{onDismiss:()=>o(!1),timeout:2500,type:j.MessageTypes.warning,children:n.jsx(V.Header,{content:h.t("Common.messages.noResults")})})]})})},D=_;_.__docgenInfo={description:"This component renders a list of bibliography items in Zbib format. This component requires the URL of a running\n[Zotero Translation Server](https://github.com/zotero/translation-server) to be passed as the `translateUrl` prop.",methods:[],displayName:"BibliographyList",props:{actions:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
current item in the edit modal.`},onDelete:{required:!0,flowType:{name:"signature",type:"function",raw:"(item: Item) => Promise<any>",signature:{arguments:[{name:"item",type:{name:"signature",type:"object",raw:`{
  id?: number,
  uid?: string,
  data: any
}`,signature:{properties:[{key:"id",value:{name:"number",required:!1}},{key:"uid",value:{name:"string",required:!1}},{key:"data",value:{name:"any",required:!0}}]}}}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:'Callback fired when the "delete" action is clicked for an item.'},onDeleteAll:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:"Callback fired when the delete all button is clicked. This prop expects a Promise as the return value."},onPageChange:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the page is changed via the pagination component."},onPerPageChange:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the per page value is changed."},onSave:{required:!0,flowType:{name:"signature",type:"function",raw:"(item: Item) => Promise<any>",signature:{arguments:[{name:"item",type:{name:"signature",type:"object",raw:`{
  id?: number,
  uid?: string,
  data: any
}`,signature:{properties:[{key:"id",value:{name:"number",required:!1}},{key:"uid",value:{name:"string",required:!1}},{key:"data",value:{name:"any",required:!0}}]}}}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:`Callback fired when the save button is clicked in the add/edit modal. This function expects a Promise as the
return value.`},page:{required:!1,flowType:{name:"number"},description:"Current page number."},pages:{required:!1,flowType:{name:"number"},description:"Number of pages in the list."},perPage:{required:!1,flowType:{name:"number"},description:"The number of records to display per page."},perPageOptions:{required:!1,flowType:{name:"Array",elements:[{name:"number"}],raw:"Array<number>"},description:"The options to display in the dropdown for the per page selector."},renderDeleteModal:{required:!1,flowType:{name:"signature",type:"function",raw:"({ selectedItem: any, onCancel: () => void, onConfirm: () => void }) => Element<any>",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{ selectedItem: any, onCancel: () => void, onConfirm: () => void }",signature:{properties:[{key:"selectedItem",value:{name:"any",required:!0}},{key:"onCancel",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onConfirm",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:'Custom render function for the modal that appears on the "delete" action.'},renderListHeader:{required:!1,flowType:{name:"signature",type:"function",raw:"() => ?Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>",nullable:!0}}},description:"If provided, this function will return a JSX element that will prepend to the list header."},renderSearch:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:"If provided, this function will return a JSX element that will replace the default search input."},searchable:{required:!1,flowType:{name:"boolean"},description:"Returns true if the renderSearch prop should be used to render a search input element."},selectable:{required:!1,flowType:{name:"boolean"},description:`If set to <code>true</code>, checkboxes will render as the first table column, allowing each row to be selectable.
The consuming component is responsible for tracking the selected items.`},showRecordCount:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, the total number of records will display in the list header."},items:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id?: number,
  uid?: string,
  data: any
}`,signature:{properties:[{key:"id",value:{name:"number",required:!1}},{key:"uid",value:{name:"string",required:!1}},{key:"data",value:{name:"any",required:!0}}]}}],raw:"Array<Item>"},description:"The array of bibliography items."},translateUrl:{required:!0,flowType:{name:"string"},description:"URL of the Zotero translation server."}}};const Bt={title:"Components/Semantic UI/BibliographyList",component:D,decorators:[F.withKnobs]},f=()=>{const[e,u]=a.useState([{id:1,uid:"A",data:{itemType:"book",title:"First Test",creators:[{creatorType:"author",nameType:1,firstName:"Author",lastName:"Test"}]}},{id:2,uid:"B",data:{itemType:"book",title:"Second test"}}]),p=a.useCallback(o=>u(c=>i.filter(c,y=>y.uid!==o.uid)),[]),r=a.useCallback(o=>{const c=i.findWhere(e,{uid:o.uid});u(c?y=>i.map(y,s=>s===c?o:s):y=>[...y,o])},[e]);return n.jsx(D,{items:e,onDelete:p,onSave:r,translateUrl:"/translate"})};f.__docgenInfo={description:"",methods:[],displayName:"Default"};var I,E,A;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [items, setItems] = useState([{
    id: 1,
    uid: 'A',
    data: {
      itemType: 'book',
      title: 'First Test',
      creators: [{
        creatorType: 'author',
        nameType: 1,
        firstName: 'Author',
        lastName: 'Test'
      }]
    }
  }, {
    id: 2,
    uid: 'B',
    data: {
      itemType: 'book',
      title: 'Second test'
    }
  }]);

  /**
   * Deletes the passed item.
   *
   * @type {function(*): void}
   */
  const onDelete = useCallback(item => setItems(prevItems => _.filter(prevItems, i => i.uid !== item.uid)), []);

  /**
   * Saves the passed item. If the item already exists in the list, the item is updated.
   *
   * @type {(function(*): void)|*}
   */
  const onSave = useCallback(item => {
    const a = _.findWhere(items, {
      uid: item.uid
    });
    if (a) {
      setItems(prevItems => _.map(prevItems, i => i === a ? item : i));
    } else {
      setItems(prevItems => [...prevItems, item]);
    }
  }, [items]);
  return <BibliographyList items={items} onDelete={onDelete} onSave={onSave} translateUrl='/translate' />;
}`,...(A=(E=f.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};const Lt=["Default"];export{f as Default,Lt as __namedExportsOrder,Bt as default};
