import{j as o,r as l}from"./iframe-XscsSow5.js";import{B as w}from"./Button-yrPV9pFs.js";import{i,C as B}from"./Movies-BAbKwGJP.js";import{H as m}from"./Header-BYX2DBWl.js";import{D as E}from"./Dropdown-CgGruOW7.js";import{_ as u}from"./index-default-B8-H6N8J.js";import{A as b}from"./AddModal-ByE_eh2y.js";import{E as T}from"./EditModal-WpxKlkNF.js";import{I as s}from"./ItemCollection-wqgVJLFY.js";import{T as j}from"./TabbedModal-DX4mXn0d.js";import{u as c}from"./DragDrop-DXBwNVeB.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-DanMEeNO.js";import"./_getPrototype-dFVwFHqx.js";import"./Icon-Jc1DkTXR.js";import"./Label-CCz5ec4K.js";import"./ModernAutoControlledComponent-BAVxVyJQ.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CrtFdvd8.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-3klWIlrl.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-DeH6gG4C.js";import"./Portal-DxEuHn5T.js";import"./keyboardKey-eR6bitll.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-DVRaliq8.js";import"./without-DU570T-O.js";import"./isArrayLikeObject-DSLl7ti9.js";import"./isEmpty-CIv_nSFx.js";import"./deburr-HNaBwREV.js";import"./index-psiZSKsF.js";import"./_baseSet-BIwXZ6o_.js";import"./_assignValue-wlBxhqFj.js";import"./_baseAssignValue-yJv1-bft.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEqual-mHuJTF3G.js";import"./filter-Cr_a_rJc.js";import"./Modal-B42Nz6zI.js";import"./index-DbBkp2aN.js";import"./index.es28-WoOXI_HP.js";import"./index.es3-D8Mm2Wcr.js";import"./index.es33-CWF2NVDJ.js";import"./Message-BI7MqyaI.js";import"./Loader-BnPEo7sv.js";import"./Toaster-DAWuIpAX.js";import"./Transition-DVEnEfQj.js";import"./index-default-C0I3bBxV.js";import"./i18n-BlAkFxRx.js";import"./i18next-eNuDfwAU.js";import"./Items-C039_W3S.js";import"./Segment-CzW2qawJ.js";import"./Checkbox-DTzpSAEQ.js";import"./Popup-CTiqjCcl.js";import"./createClass-CGi6Kyeu.js";import"./toPropertyKey-BdisF6oo.js";import"./Card-CRSlhVcq.js";import"./Item-BGZG_Hr8.js";import"./List-BMmSfegJ.js";import"./Confirm-BO4b7DJY.js";import"./Pagination-DfrPyb43.js";import"./_isIterateeCall-CnbN5PRK.js";import"./Menu-BeQwPt5K.js";import"./Grid-CX7PG0zr.js";import"./DropdownButton-M9Nq_jl2.js";import"./FuzzyDate-D_PTn5OD.js";import"./Form-BrJx1S19.js";import"./Input-CYzG4HOR.js";import"./DateInput-C8ORvNYP.js";import"./AssociatedDropdown-D60ys0Mn.js";import"./index.es35-NGGuPWEW.js";import"./Trans-DhzIIo5v.js";import"./context-C2EADFmL.js";import"./DataTable-BE3SczIG.js";import"./Table-Cl-xR2j6.js";import"./Draggable-B21sI-JO.js";import"./useDrop-ERwXKbMz.js";import"./index-DTe8eSav.js";import"./DataList-CQbqG4t5.js";import"./v4-BKrj-4V8.js";import"./index.es26-Ds-V-WY6.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,go={title:"Components/Semantic UI/ItemCollection",component:s},p=[{name:"edit"},{name:"copy"},{name:"delete"}],v=c(()=>o.jsx(s,{actions:p,items:i,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),y=c(()=>o.jsx(s,{actions:p,addButton:{location:"top",color:"grey"},items:i,modal:{component:b},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),f=c(()=>{const[e,r]=l.useState(i);return o.jsx(s,{actions:p,items:e,onDrag:(n,g)=>{const d=[...e],a=d[n];d.splice(n,1),d.splice(g,0,a),r(d)},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:n=>o.jsx(m,{content:n.movie}),renderMeta:n=>n.genre})}),D=c(()=>{const[e,r]=l.useState(i);return o.jsx(s,{actions:p,items:e,onCopy:t("copy"),onDelete:n=>r(g=>u.map(g,d=>d!==n?d:{...d,_destroy:!0})),onSave:t("save"),renderHeader:n=>o.jsx(m,{content:n.movie}),renderMeta:n=>n.genre})}),S=c(()=>o.jsx(s,{actions:p,items:[],onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),C=c(()=>o.jsx(s,{actions:p,addButton:{location:"top",color:"grey"},items:[],modal:{component:b},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),x=c(()=>o.jsx(s,{actions:p,items:i,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),perPage:5,renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),M=c(()=>{const e=l.createRef();return o.jsx("div",{ref:e,style:{maxHeight:"400px",overflow:"scroll"},children:o.jsx(s,{actions:p,context:e,items:i,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),perPage:5,renderHeader:r=>o.jsx(m,{content:r.movie}),renderMeta:r=>r.genre})})}),h=c(()=>{const[e,r]=l.useState(i),[n,g]=l.useState(null),d=l.useMemo(()=>u.uniq(u.flatten(u.map(i,a=>a.genre.split("|")))),[]);return l.useEffect(()=>{let a;n&&n.length?a=u.filter(i,H=>H.genre&&H.genre.indexOf(n)>0):a=[...i],r(a)},[n]),o.jsx(o.Fragment,{children:o.jsx(s,{actions:p,buttons:[{render:()=>o.jsx(E,{clearable:!0,placeholder:"Genre",search:!0,searchInput:{"aria-label":"Search"},selection:!0,onChange:(a,{value:H})=>g(H),options:u.map(d,a=>({key:a,value:a,text:a}))})}],items:e,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),perPage:4,renderHeader:a=>o.jsx(m,{content:a.movie}),renderMeta:a=>a.genre})})}),I=c(()=>o.jsx(s,{actions:p,items:i,loading:!0,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),A=e=>o.jsxs(j,{centered:!1,header:"This is a Test",inlineTabs:!1,open:e.open,children:[o.jsx(j.Tab,{name:"Tab 1",children:o.jsx(s,{actions:p,addButton:{location:"top",color:"grey"},items:i,modal:{component:b},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:r=>o.jsx(m,{content:r.movie}),renderMeta:r=>r.genre})}),u.times(20,r=>o.jsx(j.Tab,{name:`Tab ${r+2}`,children:`Tab ${r+2}`},r+2)),e.children]}),_=c(()=>{const[e,r]=l.useState(!1);return o.jsxs(B,{children:[o.jsx(w,{content:"Open Modal",icon:"plus",onClick:()=>r(!0)}),o.jsx(T,{component:A,open:e,onClose:()=>r(!1),onSave:()=>new Promise(n=>n(r(!1)))})]})});v.__docgenInfo={description:"",methods:[],displayName:"Default"};y.__docgenInfo={description:"",methods:[],displayName:"AddButton"};f.__docgenInfo={description:"",methods:[],displayName:"DragAndDropRows"};D.__docgenInfo={description:"",methods:[],displayName:"Delete"};S.__docgenInfo={description:"",methods:[],displayName:"Empty"};C.__docgenInfo={description:"",methods:[],displayName:"EmptyAddButton"};x.__docgenInfo={description:"",methods:[],displayName:"InfiniteScroll"};M.__docgenInfo={description:"",methods:[],displayName:"InfiniteScrollDiv"};h.__docgenInfo={description:"",methods:[],displayName:"InfiniteScrollFilter"};I.__docgenInfo={description:"",methods:[],displayName:"Loading"};_.__docgenInfo={description:"",methods:[],displayName:"TabbedModalConfig"};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"useDragDrop(() => <ItemCollection actions={actions} items={items} onCopy={action('copy')} onDelete={action('delete')} onSave={action('save')} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />)",...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemCollection actions={actions} addButton={{
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
})`,..._.parameters?.docs?.source}}};const vo=["Default","AddButton","DragAndDropRows","Delete","Empty","EmptyAddButton","InfiniteScroll","InfiniteScrollDiv","InfiniteScrollFilter","Loading","TabbedModalConfig"];export{y as AddButton,v as Default,D as Delete,f as DragAndDropRows,S as Empty,C as EmptyAddButton,x as InfiniteScroll,M as InfiniteScrollDiv,h as InfiniteScrollFilter,I as Loading,_ as TabbedModalConfig,vo as __namedExportsOrder,go as default};
