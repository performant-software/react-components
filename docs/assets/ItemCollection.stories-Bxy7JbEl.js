import{j as o,r as l}from"./iframe-DjZg4LCJ.js";import{B as w}from"./Button-BfwSthv4.js";import{i,C as B}from"./Movies-BFeXOhd0.js";import{H as m}from"./Header-BLFNvs1J.js";import{D as E}from"./Dropdown-F4rgfcN7.js";import{_ as u}from"./index-default-B8-H6N8J.js";import{A as b}from"./AddModal-CXXZZddp.js";import{E as T}from"./EditModal-CLI4L96A.js";import{I as s}from"./ItemCollection-BKjyii2B.js";import{T as j}from"./TabbedModal-Av4xDM52.js";import{u as c}from"./DragDrop-Dyy5gvP0.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CAZyNRJI.js";import"./Icon-tpspPEMM.js";import"./Label-Bh5L599Z.js";import"./ModernAutoControlledComponent-BMzS269y.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CONzxizI.js";import"./toFinite-BAYWAdIs.js";import"./forEach-A59iOPX4.js";import"./Dimmer-CCyRt7B_.js";import"./Portal-ryYdJBeB.js";import"./keyboardKey-Dib6OvmA.js";import"./map-DtdA0n9n.js";import"./without--0CyYUzZ.js";import"./isArrayLikeObject-CUXhdROG.js";import"./isEmpty-BBVcPIVn.js";import"./deburr-DugsZdwn.js";import"./index-CxAXPjQd.js";import"./_baseSet-Dvm44Wtg.js";import"./_baseAssignValue-8K9yYogk.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-CPefKB_L.js";import"./Modal-AR-Mrjw_.js";import"./index-BkFig-2Q.js";import"./index.es28-DFmwjNuL.js";import"./index.es3-LXTVNgHf.js";import"./index.es33-wqjxQqsy.js";import"./Message-B3z4-ae0.js";import"./Loader-CYrthA-N.js";import"./Toaster-DfpkhSYx.js";import"./Transition-BW9Sa2mL.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";import"./Items-CxpFiV64.js";import"./Segment-Czp3TvDV.js";import"./Checkbox-CgV92q-M.js";import"./Popup-C2-d-zjC.js";import"./createClass-CGi6Kyeu.js";import"./toPropertyKey-BdisF6oo.js";import"./Card-BFhDCLuF.js";import"./Item-B5Aq24j4.js";import"./List-Du6N1jEH.js";import"./Confirm-DuFfCeOE.js";import"./Pagination-CCyI36Et.js";import"./_isIterateeCall-BcYXj8HB.js";import"./Menu-CtWJ-L0f.js";import"./Grid-Cxjmw5Wc.js";import"./DropdownButton-BPubSgbi.js";import"./Form-CecPGzu4.js";import"./Input-DVvUAtuL.js";import"./AssociatedDropdown-COTBQWpu.js";import"./index.es35-NGGuPWEW.js";import"./FuzzyDate-C36XmEPw.js";import"./DateInput-BACmCH6x.js";import"./Trans-hSMrpkHU.js";import"./context-DTycKbnC.js";import"./DataList-DrzPpnw-.js";import"./ListSession-hS-NIzK1.js";import"./v4-BKrj-4V8.js";import"./Draggable-ZKvAjXJe.js";import"./useDrop-BX-9IzhG.js";import"./index-C5sNMSwG.js";import"./index.es26-BkqfVRg5.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,io={title:"Components/Semantic UI/ItemCollection",component:s},d=[{name:"edit"},{name:"copy"},{name:"delete"}],v=c(()=>o.jsx(s,{actions:d,items:i,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),y=c(()=>o.jsx(s,{actions:d,addButton:{location:"top",color:"grey"},items:i,modal:{component:b},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),f=c(()=>{const[e,n]=l.useState(i);return o.jsx(s,{actions:d,items:e,onDrag:(r,g)=>{const p=[...e],a=p[r];p.splice(r,1),p.splice(g,0,a),n(p)},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:r=>o.jsx(m,{content:r.movie}),renderMeta:r=>r.genre})}),D=c(()=>{const[e,n]=l.useState(i);return o.jsx(s,{actions:d,items:e,onCopy:t("copy"),onDelete:r=>n(g=>u.map(g,p=>p!==r?p:{...p,_destroy:!0})),onSave:t("save"),renderHeader:r=>o.jsx(m,{content:r.movie}),renderMeta:r=>r.genre})}),S=c(()=>o.jsx(s,{actions:d,items:[],onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),C=c(()=>o.jsx(s,{actions:d,addButton:{location:"top",color:"grey"},items:[],modal:{component:b},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),x=c(()=>o.jsx(s,{actions:d,items:i,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),perPage:5,renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),M=c(()=>{const e=l.createRef();return o.jsx("div",{ref:e,style:{maxHeight:"400px",overflow:"scroll"},children:o.jsx(s,{actions:d,context:e,items:i,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),perPage:5,renderHeader:n=>o.jsx(m,{content:n.movie}),renderMeta:n=>n.genre})})}),h=c(()=>{const[e,n]=l.useState(i),[r,g]=l.useState(null),p=l.useMemo(()=>u.uniq(u.flatten(u.map(i,a=>a.genre.split("|")))),[]);return l.useEffect(()=>{let a;r&&r.length?a=u.filter(i,H=>H.genre&&H.genre.indexOf(r)>0):a=[...i],n(a)},[r]),o.jsx(o.Fragment,{children:o.jsx(s,{actions:d,buttons:[{render:()=>o.jsx(E,{clearable:!0,placeholder:"Genre",search:!0,searchInput:{"aria-label":"Search"},selection:!0,onChange:(a,{value:H})=>g(H),options:u.map(p,a=>({key:a,value:a,text:a}))})}],items:e,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),perPage:4,renderHeader:a=>o.jsx(m,{content:a.movie}),renderMeta:a=>a.genre})})}),I=c(()=>o.jsx(s,{actions:d,items:i,loading:!0,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),A=e=>o.jsxs(j,{centered:!1,header:"This is a Test",inlineTabs:!1,open:e.open,children:[o.jsx(j.Tab,{name:"Tab 1",children:o.jsx(s,{actions:d,addButton:{location:"top",color:"grey"},items:i,modal:{component:b},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:n=>o.jsx(m,{content:n.movie}),renderMeta:n=>n.genre})}),u.times(20,n=>o.jsx(j.Tab,{name:`Tab ${n+2}`,children:`Tab ${n+2}`},n+2)),e.children]}),_=c(()=>{const[e,n]=l.useState(!1);return o.jsxs(B,{children:[o.jsx(w,{content:"Open Modal",icon:"plus",onClick:()=>n(!0)}),o.jsx(T,{component:A,open:e,onClose:()=>n(!1),onSave:()=>new Promise(r=>r(n(!1)))})]})});v.__docgenInfo={description:"",methods:[],displayName:"Default"};y.__docgenInfo={description:"",methods:[],displayName:"AddButton"};f.__docgenInfo={description:"",methods:[],displayName:"DragAndDropRows"};D.__docgenInfo={description:"",methods:[],displayName:"Delete"};S.__docgenInfo={description:"",methods:[],displayName:"Empty"};C.__docgenInfo={description:"",methods:[],displayName:"EmptyAddButton"};x.__docgenInfo={description:"",methods:[],displayName:"InfiniteScroll"};M.__docgenInfo={description:"",methods:[],displayName:"InfiniteScrollDiv"};h.__docgenInfo={description:"",methods:[],displayName:"InfiniteScrollFilter"};I.__docgenInfo={description:"",methods:[],displayName:"Loading"};_.__docgenInfo={description:"",methods:[],displayName:"TabbedModalConfig"};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"useDragDrop(() => <ItemCollection actions={actions} items={items} onCopy={action('copy')} onDelete={action('delete')} onSave={action('save')} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />)",...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemCollection actions={actions} addButton={{
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
})`,..._.parameters?.docs?.source}}};const so=["Default","AddButton","DragAndDropRows","Delete","Empty","EmptyAddButton","InfiniteScroll","InfiniteScrollDiv","InfiniteScrollFilter","Loading","TabbedModalConfig"];export{y as AddButton,v as Default,D as Delete,f as DragAndDropRows,S as Empty,C as EmptyAddButton,x as InfiniteScroll,M as InfiniteScrollDiv,h as InfiniteScrollFilter,I as Loading,_ as TabbedModalConfig,so as __namedExportsOrder,io as default};
