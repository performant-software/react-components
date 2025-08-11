import{r as a,j as n}from"./iframe-D2tDQHIu.js";import{_ as C}from"./index-default-B8-H6N8J.js";import{r as h,c as M,d as R,e as F,p as O}from"./index.es27-BqzRcxM3.js";import{G as x}from"./Grid-CEMRQbwm.js";import{M as $}from"./Message-C8FEkoL7.js";import{B as j}from"./Button-e1g_PNPa.js";import{L as k}from"./List-D2d5L3vj.js";import{_ as u}from"./index-default-C0I3bBxV.js";import{F as G}from"./Form-82LA1gPL.js";import{M as S}from"./Modal-CF7nwjHg.js";import{i as v}from"./i18n-DkobdbHY.js";import{B as H}from"./BibliographyForm-i4p_ybHc.js";import{Z as V,B as Z}from"./BibliographySearchInput-C24Z-SGP.js";import{D as W}from"./Dropdown-29n6mrng.js";import{S as z}from"./StyleSelector-DOMnbvw0.js";import{T as A}from"./Toaster-DNpoh-78.js";import{u as J}from"./List-CWcpE-SL.js";import{v as X}from"./v4-BKrj-4V8.js";import"./extends-CCbyfPlC.js";import"./getElementType-TLbMidFA.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./Icon-BSWzGvLf.js";import"./map-q00LD5yS.js";import"./Label-CmMRyCgB.js";import"./ModernAutoControlledComponent-CIi-16Zs.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-ComNSsGh.js";import"./toFinite-Ch3-mxAi.js";import"./forEach-xROvcHNC.js";import"./Dimmer-Wnz_k9oJ.js";import"./Portal-BF3g11_x.js";import"./keyboardKey-UPAJnvsN.js";import"./Checkbox-DNAhP8My.js";import"./_baseSet-KiE310VO.js";import"./_baseAssignValue-CihLrf3R.js";import"./Input-R2TI-Tve.js";import"./index-D8tE4-9w.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-4KKn6hcF.js";import"./index-CL_u4TdI.js";import"./i18next-eNuDfwAU.js";import"./Bibliography-CoJVXVqY.js";import"./without-CqD5ld8v.js";import"./isArrayLikeObject-GAfAHYyv.js";import"./deburr-ChK6Lkvo.js";import"./filter-DnFvB4UZ.js";import"./Transition-C6XMim_5.js";import"./Confirm-bSEdxVBf.js";import"./Pagination-DXFy5u_P.js";import"./_isIterateeCall-B_DSrIuf.js";import"./Menu-BuaZ_Fim.js";import"./Header-CBddMSBf.js";import"./DropdownButton-D9K1WsMu.js";import"./EditModal-BzG3JY8t.js";import"./index.es3-BBSLpI2q.js";import"./index.es32-CI3sAoKd.js";import"./Loader-ENK_7K4O.js";import"./AssociatedDropdown-C3FjiqxV.js";import"./index.es34-NGGuPWEW.js";import"./FuzzyDate-Nmvtcynx.js";import"./DateInput-DXy9ggzE.js";import"./Trans-Dpg65UI1.js";import"./context-CzZH1K0_.js";const Y=e=>{const[l,m]=a.useState(),r=a.useCallback(i=>{const o={...i};return h.isEmpty(o.title)&&h.isEmpty(o.creators)&&h.isEmpty(o.issue)&&h.extend(o,{title:M.t("Citation.labels.untitled")}),o},[]);return a.useEffect(()=>{if(e.locale&&e.style&&e.item){const{uid:i,...o}=e.item,c=new F({initialItems:[{key:i,...r(o)}],persist:!1}),s=h.first(c.itemsCSL),q={retrieveLocale:()=>e.locale,retrieveItem:()=>s},y=new O.Engine(q,e.style);y.updateItems([s.id]);const w=y.makeBibliography();m(h.last(w))}},[r,e.item,e.locale,e.style]),R.jsx("div",{dangerouslySetInnerHTML:{__html:l}})},B=e=>n.jsxs(S,{as:G,centered:!1,open:!0,children:[n.jsx(S.Header,{content:v.t("BibliographyModal.title")}),n.jsx(S.Content,{children:n.jsx(H,{...e})}),e.children]});B.__docgenInfo={description:"",methods:[],displayName:"BibliographyModal",props:{item:{required:!0,flowType:{name:"any"},description:""}}};const I="ascending",P="descending",_=e=>{const l=a.useRef(),m=a.useCallback(r=>{const i=e.value===r.value&&e.direction===I?P:I;e.onChange({...r,direction:i})},[e.direction,e.onChange,e.value]);return a.useEffect(()=>{if(!e.value){let r;e.defaultValue?r=u.findWhere(e.options,{value:e.defaultValue}):r=u.first(e.options),m(r)}},[]),n.jsxs(j.Group,{basic:!0,className:"sort-selector",style:{fontSize:"inherit"},children:[n.jsx(j,{"aria-label":"Sort by",content:e.text,icon:e.direction===I?"sort alphabet up":"sort alphabet down",onClick:r=>l.current.handleClick(r)}),n.jsx(W,{"aria-label":"Sort",className:"button icon",floating:!0,options:u.map(e.options,r=>({...r,onClick:()=>m(r)})),ref:l,trigger:n.jsx(n.Fragment,{}),value:e.value})]})};_.__docgenInfo={description:"",methods:[],displayName:"SortSelector",props:{defaultValue:{required:!1,flowType:{name:"string"},description:""},direction:{required:!0,flowType:{name:"string"},description:""},onChange:{required:!0,flowType:{name:"signature",type:"function",raw:"(sort: Sort) => void",signature:{arguments:[{name:"sort",type:{name:"intersection",raw:`Option & {
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
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}}],raw:"Array<Option>"},description:""},text:{required:!0,flowType:{name:"string"},description:""},value:{required:!0,flowType:{name:"string"},description:""}}};const K="book",Q="https://raw.githubusercontent.com/citation-style-language/locales/master/locales-en-US.xml",p={author:"author",date:"date",title:"title"},ee=[{key:p.title,value:p.title,text:v.t("BibliographyList.sort.title")},{key:p.author,value:p.author,text:v.t("BibliographyList.sort.author")},{key:p.date,value:p.date,text:v.t("BibliographyList.sort.date")}],te=J(e=>n.jsx(k,{divided:!0,relaxed:"very",children:u.map(e.items,(l,m)=>n.jsxs(k.Item,{as:x,columns:2,padded:!0,children:[n.jsx(k.Content,{as:x.Column,textAlign:"left",verticalAlign:"middle",width:14,children:n.jsx(Y,{item:l,locale:e.locale,style:e.style&&e.style.xml})}),n.jsx(k.Content,{as:x.Column,textAlign:"right",verticalAlign:"middle",width:2,children:u.map(e.actions,(r,i)=>n.jsx(j,{"aria-label":r.name,basic:!0,icon:r.icon,onClick:r.onClick.bind(void 0,l)},i))})]},m))})),E=e=>{const[l,m]=a.useState(),[r,i]=a.useState(!1),[o,c]=a.useState(),[s,q]=a.useState({}),y=a.useCallback(t=>{const{id:d}=t||{},{uid:g=X()}=t||{},f=u.omit(t,"id","uid","data");return u.extend(f,{creators:u.reject(t.creators,T=>!(T.name||T.firstName||T.lastName))}),{id:d,uid:g,data:f}},[]),w=a.useCallback((t,d)=>{let g;if(s===p.title)g=t.title;else if(s===p.author){const f=u.first(t.creators);g=f?.name||`${f?.lastName}, ${f?.firstName}`}else s===p.date?g=t.date:g=d;return g},[]),D=a.useMemo(()=>{let t=u.chain(e.items).filter(d=>!d._destroy).map(d=>({...u.omit(d,"data"),...d.data})).value();return t=u.sortBy(t,w),s.direction===P&&(t=t.reverse()),t},[w,s,e.items]),N=a.useCallback(()=>n.jsxs(n.Fragment,{children:[n.jsx(z,{onChange:(t,d)=>c({name:t,xml:d})}),n.jsx(_,{direction:s.direction,onChange:t=>q(t),options:ee,text:s.text,value:s.value})]}),[s,o]),U=a.useCallback(t=>Promise.resolve(e.onDelete(y(t))),[y,e.onDelete]),L=a.useCallback(t=>Promise.resolve(e.onSave(y(t))),[y,e.onSave]);return a.useEffect(()=>{fetch(Q).then(t=>t.text()).then(t=>m(t))},[]),n.jsx(V.Provider,{value:{translateUrl:e.translateUrl},children:n.jsxs("div",{children:[n.jsx(Z,{onError:()=>i(!0),onFind:t=>u.map(t,L)}),n.jsx(te,{...e,actions:[{name:"edit"},{name:"delete"}],className:"bibliography-list",items:D,locale:l,modal:{component:B,props:{defaults:{itemType:K}}},onDelete:U,onSave:L,renderListHeader:N,style:o}),r&&n.jsx(A,{onDismiss:()=>i(!1),timeout:2500,type:A.MessageTypes.warning,children:n.jsx($.Header,{content:v.t("Common.messages.noResults")})})]})})};E.__docgenInfo={description:"This component renders a list of bibliography items in Zbib format. This component requires the URL of a running\n[Zotero Translation Server](https://github.com/zotero/translation-server) to be passed as the `translateUrl` prop.",methods:[],displayName:"BibliographyList",props:{actions:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!1}},{key:"uid",value:{name:"string",required:!1}},{key:"data",value:{name:"any",required:!0}}]}}],raw:"Array<Item>"},description:"The array of bibliography items."},translateUrl:{required:!0,flowType:{name:"string"},description:"URL of the Zotero translation server."}}};const ct={title:"Components/Semantic UI/BibliographyList",component:E},b=()=>{const[e,l]=a.useState([{id:1,uid:"A",data:{itemType:"book",title:"First Test",creators:[{creatorType:"author",nameType:1,firstName:"Author",lastName:"Test"}]}},{id:2,uid:"B",data:{itemType:"book",title:"Second test"}}]),m=a.useCallback(i=>l(o=>C.filter(o,c=>c.uid!==i.uid)),[]),r=a.useCallback(i=>{const o=C.findWhere(e,{uid:i.uid});l(o?c=>C.map(c,s=>s===o?i:s):c=>[...c,i])},[e]);return n.jsx(E,{items:e,onDelete:m,onSave:r,translateUrl:"/translate"})};b.__docgenInfo={description:"",methods:[],displayName:"Default"};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};const pt=["Default"];export{b as Default,pt as __namedExportsOrder,ct as default};
