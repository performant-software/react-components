import{j as o,r as l}from"./iframe-vcq3NyiY.js";import{B as w}from"./Button-Bn6g8Zpl.js";import{i,C as B}from"./Movies-B-NlCI90.js";import{H as m}from"./Header-BovJjnpD.js";import{D as E}from"./Dropdown-4PwJbJ0j.js";import{_ as u}from"./index-default-B8-H6N8J.js";import{A as b}from"./AddModal-cm-RX5pq.js";import{E as T}from"./EditModal-CA2lsvMy.js";import{I as s}from"./ItemCollection-DYx6J1Kj.js";import{T as j}from"./TabbedModal-CLXheHnG.js";import{u as c}from"./DragDrop-DFlTyD_O.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BKtKbg7z.js";import"./Icon-CCp_BzDr.js";import"./Label-C0nyLnGG.js";import"./ModernAutoControlledComponent-DdBfaRqR.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-ClwlY2GN.js";import"./toFinite-CubHtLM9.js";import"./forEach-DpfzB6Po.js";import"./Dimmer-BoNfl-gn.js";import"./Portal-COsaxqQp.js";import"./keyboardKey-CYj8W5Ln.js";import"./map-CVJKdi7t.js";import"./without-Bz8LerWT.js";import"./isArrayLikeObject-B2Pai7-8.js";import"./isEmpty-64qWlGu8.js";import"./deburr-DcNHrw3Y.js";import"./index-DBqwPnO2.js";import"./_baseSet-CLngmd58.js";import"./_baseAssignValue-_RJq7yWg.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-B_cJQIlT.js";import"./Modal-Qa_7wSwL.js";import"./index-Cyu2_1Gm.js";import"./index.es28-WhWg7DUu.js";import"./index.es3-CdqohaDp.js";import"./index.es33-CZBWmdeE.js";import"./Message-CxVaVKsd.js";import"./Loader-BDUMZY9t.js";import"./Toaster-0EzMABOv.js";import"./Transition-DbgzngrM.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";import"./Items-sTtMIghB.js";import"./Segment-CmqUYYY3.js";import"./Checkbox-CEroYjg1.js";import"./Popup-xtQeuQ3B.js";import"./createClass-CGi6Kyeu.js";import"./toPropertyKey-BdisF6oo.js";import"./Card-HIEljK9P.js";import"./Item-CNpB1v6C.js";import"./List-C6op6_Ef.js";import"./Confirm-BTWgMLXk.js";import"./Pagination-C0PtBb9m.js";import"./_isIterateeCall-BnFrNQ9-.js";import"./Menu-CJf8mY_d.js";import"./Grid-DrSkmyKy.js";import"./DropdownButton-BEqW_ONM.js";import"./Form-CYUN66gt.js";import"./Input-iG1nzLLC.js";import"./AssociatedDropdown-BLUMu4LL.js";import"./index.es35-NGGuPWEW.js";import"./FuzzyDate-ELXUX_r9.js";import"./DateInput-PRtpOI_B.js";import"./Trans-ai1pDFpF.js";import"./context-M_U4fOpT.js";import"./DataTable-CBMFhOKC.js";import"./Table-D-0A2kah.js";import"./Draggable-Dvq-eNvC.js";import"./useDrop-BXo_lRY2.js";import"./index-DTeb7AQS.js";import"./DataList-Dvm0ZC-z.js";import"./v4-BKrj-4V8.js";import"./index.es26-CCp-gAK7.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,so={title:"Components/Semantic UI/ItemCollection",component:s},d=[{name:"edit"},{name:"copy"},{name:"delete"}],v=c(()=>o.jsx(s,{actions:d,items:i,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),y=c(()=>o.jsx(s,{actions:d,addButton:{location:"top",color:"grey"},items:i,modal:{component:b},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),f=c(()=>{const[e,n]=l.useState(i);return o.jsx(s,{actions:d,items:e,onDrag:(r,g)=>{const p=[...e],a=p[r];p.splice(r,1),p.splice(g,0,a),n(p)},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:r=>o.jsx(m,{content:r.movie}),renderMeta:r=>r.genre})}),D=c(()=>{const[e,n]=l.useState(i);return o.jsx(s,{actions:d,items:e,onCopy:t("copy"),onDelete:r=>n(g=>u.map(g,p=>p!==r?p:{...p,_destroy:!0})),onSave:t("save"),renderHeader:r=>o.jsx(m,{content:r.movie}),renderMeta:r=>r.genre})}),S=c(()=>o.jsx(s,{actions:d,items:[],onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),C=c(()=>o.jsx(s,{actions:d,addButton:{location:"top",color:"grey"},items:[],modal:{component:b},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),x=c(()=>o.jsx(s,{actions:d,items:i,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),perPage:5,renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),M=c(()=>{const e=l.createRef();return o.jsx("div",{ref:e,style:{maxHeight:"400px",overflow:"scroll"},children:o.jsx(s,{actions:d,context:e,items:i,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),perPage:5,renderHeader:n=>o.jsx(m,{content:n.movie}),renderMeta:n=>n.genre})})}),h=c(()=>{const[e,n]=l.useState(i),[r,g]=l.useState(null),p=l.useMemo(()=>u.uniq(u.flatten(u.map(i,a=>a.genre.split("|")))),[]);return l.useEffect(()=>{let a;r&&r.length?a=u.filter(i,H=>H.genre&&H.genre.indexOf(r)>0):a=[...i],n(a)},[r]),o.jsx(o.Fragment,{children:o.jsx(s,{actions:d,buttons:[{render:()=>o.jsx(E,{clearable:!0,placeholder:"Genre",search:!0,searchInput:{"aria-label":"Search"},selection:!0,onChange:(a,{value:H})=>g(H),options:u.map(p,a=>({key:a,value:a,text:a}))})}],items:e,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),perPage:4,renderHeader:a=>o.jsx(m,{content:a.movie}),renderMeta:a=>a.genre})})}),I=c(()=>o.jsx(s,{actions:d,items:i,loading:!0,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),A=e=>o.jsxs(j,{centered:!1,header:"This is a Test",inlineTabs:!1,open:e.open,children:[o.jsx(j.Tab,{name:"Tab 1",children:o.jsx(s,{actions:d,addButton:{location:"top",color:"grey"},items:i,modal:{component:b},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:n=>o.jsx(m,{content:n.movie}),renderMeta:n=>n.genre})}),u.times(20,n=>o.jsx(j.Tab,{name:`Tab ${n+2}`,children:`Tab ${n+2}`},n+2)),e.children]}),_=c(()=>{const[e,n]=l.useState(!1);return o.jsxs(B,{children:[o.jsx(w,{content:"Open Modal",icon:"plus",onClick:()=>n(!0)}),o.jsx(T,{component:A,open:e,onClose:()=>n(!1),onSave:()=>new Promise(r=>r(n(!1)))})]})});v.__docgenInfo={description:"",methods:[],displayName:"Default"};y.__docgenInfo={description:"",methods:[],displayName:"AddButton"};f.__docgenInfo={description:"",methods:[],displayName:"DragAndDropRows"};D.__docgenInfo={description:"",methods:[],displayName:"Delete"};S.__docgenInfo={description:"",methods:[],displayName:"Empty"};C.__docgenInfo={description:"",methods:[],displayName:"EmptyAddButton"};x.__docgenInfo={description:"",methods:[],displayName:"InfiniteScroll"};M.__docgenInfo={description:"",methods:[],displayName:"InfiniteScrollDiv"};h.__docgenInfo={description:"",methods:[],displayName:"InfiniteScrollFilter"};I.__docgenInfo={description:"",methods:[],displayName:"Loading"};_.__docgenInfo={description:"",methods:[],displayName:"TabbedModalConfig"};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"useDragDrop(() => <ItemCollection actions={actions} items={items} onCopy={action('copy')} onDelete={action('delete')} onSave={action('save')} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />)",...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemCollection actions={actions} addButton={{
  location: 'top',
  color: 'grey'
}} items={items} modal={{
  component: AddModal
}} onCopy={action('copy')} onDelete={action('delete')} onSave={action('save')} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />)`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`useDragDrop(() => {
  const [list, setList] = useState(items);
  return <ItemCollection actions={actions} items={list} onDrag={(dragIndex, hoverIndex) => {
    const temp = [...list];
    const item = temp[dragIndex];
    temp.splice(dragIndex, 1);
    temp.splice(hoverIndex, 0, item);
    setList(temp);
  }} onCopy={action('copy')} onDelete={action('delete')} onSave={action('save')} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />;
})`,...f.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`useDragDrop(() => {
  const [list, setList] = useState(items);
  return <ItemCollection actions={actions} items={list} onCopy={action('copy')} onDelete={item => setList(prevList => _.map(prevList, i => i !== item ? i : {
    ...i,
    _destroy: true
  }))} onSave={action('save')} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />;
})`,...D.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"useDragDrop(() => <ItemCollection actions={actions} items={[]} onCopy={action('copy')} onDelete={action('delete')} onSave={action('save')} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />)",...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemCollection actions={actions} addButton={{
  location: 'top',
  color: 'grey'
}} items={[]} modal={{
  component: AddModal
}} onCopy={action('copy')} onDelete={action('delete')} onSave={action('save')} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />)`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"useDragDrop(() => <ItemCollection actions={actions} items={items} onCopy={action('copy')} onDelete={action('delete')} onSave={action('save')} perPage={5} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />)",...x.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`useDragDrop(() => {
  const containerRef = createRef();
  return <div ref={containerRef} style={{
    maxHeight: '400px',
    overflow: 'scroll'
  }}>
      <ItemCollection actions={actions} context={containerRef} items={items} onCopy={action('copy')} onDelete={action('delete')} onSave={action('save')} perPage={5} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />
    </div>;
})`,...M.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`useDragDrop(() => {
  const [movies, setMovies] = useState(items);
  const [genre, setGenre] = useState(null);
  const genres = useMemo(() => _.uniq(_.flatten(_.map(items, i => i.genre.split('|')))), []);
  useEffect(() => {
    let records;
    if (genre && genre.length) {
      records = _.filter(items, i => i.genre && i.genre.indexOf(genre) > 0);
    } else {
      records = [...items];
    }
    setMovies(records);
  }, [genre]);
  return <>
      <ItemCollection actions={actions} buttons={[{
      render: () => <Dropdown clearable placeholder='Genre' search searchInput={{
        'aria-label': 'Search'
      }} selection onChange={(e, {
        value
      }) => setGenre(value)} options={_.map(genres, g => ({
        key: g,
        value: g,
        text: g
      }))} />
    }]} items={movies} onCopy={action('copy')} onDelete={action('delete')} onSave={action('save')} perPage={4} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />
    </>;
})`,...h.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:"useDragDrop(() => <ItemCollection actions={actions} items={items} loading onCopy={action('copy')} onDelete={action('delete')} onSave={action('save')} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />)",...I.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`useDragDrop(() => {
  const [showModal, setShowModal] = useState(false);
  return <Container>
      <Button content='Open Modal' icon='plus' onClick={() => setShowModal(true)} />
      <EditModal component={ItemCollectionModal} open={showModal} onClose={() => setShowModal(false)} onSave={() => new Promise(resolve => resolve(setShowModal(false)))} />
    </Container>;
})`,..._.parameters?.docs?.source}}};const mo=["Default","AddButton","DragAndDropRows","Delete","Empty","EmptyAddButton","InfiniteScroll","InfiniteScrollDiv","InfiniteScrollFilter","Loading","TabbedModalConfig"];export{y as AddButton,v as Default,D as Delete,f as DragAndDropRows,S as Empty,C as EmptyAddButton,x as InfiniteScroll,M as InfiniteScrollDiv,h as InfiniteScrollFilter,I as Loading,_ as TabbedModalConfig,mo as __namedExportsOrder,so as default};
