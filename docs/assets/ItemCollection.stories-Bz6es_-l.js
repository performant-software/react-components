import{j as o,r as l}from"./iframe-B8scVUHo.js";import{B as w}from"./Button-DI1B12kj.js";import{i,C as B}from"./Movies-XrYrd9Tv.js";import{H as m}from"./Header-DVqh2UxV.js";import{D as E}from"./Dropdown-DaYxyMkk.js";import{_ as u}from"./index-default-B8-H6N8J.js";import{A as b}from"./AddModal-Nfj3huSF.js";import{E as T}from"./EditModal-B4XSodSn.js";import{I as s}from"./ItemCollection-Df3MJqGn.js";import{T as j}from"./TabbedModal-Dav9VPm7.js";import{u as c}from"./DragDrop-CUNy3n_X.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CaJb2m-1.js";import"./Icon-BVP9tOGJ.js";import"./Label-DldEee3n.js";import"./ModernAutoControlledComponent-pwrQID__.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CW8buXEW.js";import"./toFinite-BD_NKTe4.js";import"./forEach-MWW8Ch3c.js";import"./Dimmer-B2JVl7VW.js";import"./Portal-Q0xzb-rT.js";import"./keyboardKey-CQEJ9RQY.js";import"./map-BHg0yW3b.js";import"./without-CE5z1u1p.js";import"./isArrayLikeObject-DVKyOMyh.js";import"./isEmpty-u5EZjvYg.js";import"./deburr-CE1kKcaU.js";import"./index-B596VeP6.js";import"./_baseSet-m4jr0LOE.js";import"./_baseAssignValue-BLvsiv_f.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-CSD5FKWg.js";import"./Modal-CGRMDdyW.js";import"./index-CUBMh0mQ.js";import"./index.es28-CKBW4mjb.js";import"./index.es3-CRyZYPvH.js";import"./index.es33-CDn2jJNY.js";import"./Message-BXjxpmsd.js";import"./Loader-CVDhZsJ8.js";import"./Toaster-CxU9AxkY.js";import"./Transition-BZ82mqcW.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";import"./Items-CXw87oBh.js";import"./Segment-Cxusd78u.js";import"./Checkbox-DEgenpx9.js";import"./Popup-CAbzo1bx.js";import"./createClass-CGi6Kyeu.js";import"./toPropertyKey-BdisF6oo.js";import"./Card-DAOiEJVl.js";import"./Item-Davrqx5t.js";import"./List-BjxV_tK3.js";import"./Confirm-BotmLbGj.js";import"./Pagination-CK26hzvd.js";import"./_isIterateeCall-B1O8RZ7u.js";import"./Menu-CrBDIhiJ.js";import"./Grid-CCnTCo7c.js";import"./DropdownButton-m5EJTJB8.js";import"./Form-CnPiKdco.js";import"./Input-uZI35lvJ.js";import"./AssociatedDropdown-CHi2R3de.js";import"./index.es35-NGGuPWEW.js";import"./FuzzyDate-DxpR8t_s.js";import"./DateInput-BPp1B4Ge.js";import"./Trans-B8jUyyuJ.js";import"./context-C8fgpfPH.js";import"./DataList-MqUcyj5J.js";import"./ListSession-hS-NIzK1.js";import"./v4-BKrj-4V8.js";import"./Draggable-DL3AAbwN.js";import"./useDrop-DtlJSTdl.js";import"./index-Be_8skUP.js";import"./index.es26-dBF-YB_D.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,io={title:"Components/Semantic UI/ItemCollection",component:s},d=[{name:"edit"},{name:"copy"},{name:"delete"}],v=c(()=>o.jsx(s,{actions:d,items:i,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),y=c(()=>o.jsx(s,{actions:d,addButton:{location:"top",color:"grey"},items:i,modal:{component:b},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),f=c(()=>{const[e,n]=l.useState(i);return o.jsx(s,{actions:d,items:e,onDrag:(r,g)=>{const p=[...e],a=p[r];p.splice(r,1),p.splice(g,0,a),n(p)},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:r=>o.jsx(m,{content:r.movie}),renderMeta:r=>r.genre})}),D=c(()=>{const[e,n]=l.useState(i);return o.jsx(s,{actions:d,items:e,onCopy:t("copy"),onDelete:r=>n(g=>u.map(g,p=>p!==r?p:{...p,_destroy:!0})),onSave:t("save"),renderHeader:r=>o.jsx(m,{content:r.movie}),renderMeta:r=>r.genre})}),S=c(()=>o.jsx(s,{actions:d,items:[],onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),C=c(()=>o.jsx(s,{actions:d,addButton:{location:"top",color:"grey"},items:[],modal:{component:b},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),x=c(()=>o.jsx(s,{actions:d,items:i,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),perPage:5,renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),M=c(()=>{const e=l.createRef();return o.jsx("div",{ref:e,style:{maxHeight:"400px",overflow:"scroll"},children:o.jsx(s,{actions:d,context:e,items:i,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),perPage:5,renderHeader:n=>o.jsx(m,{content:n.movie}),renderMeta:n=>n.genre})})}),h=c(()=>{const[e,n]=l.useState(i),[r,g]=l.useState(null),p=l.useMemo(()=>u.uniq(u.flatten(u.map(i,a=>a.genre.split("|")))),[]);return l.useEffect(()=>{let a;r&&r.length?a=u.filter(i,H=>H.genre&&H.genre.indexOf(r)>0):a=[...i],n(a)},[r]),o.jsx(o.Fragment,{children:o.jsx(s,{actions:d,buttons:[{render:()=>o.jsx(E,{clearable:!0,placeholder:"Genre",search:!0,searchInput:{"aria-label":"Search"},selection:!0,onChange:(a,{value:H})=>g(H),options:u.map(p,a=>({key:a,value:a,text:a}))})}],items:e,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),perPage:4,renderHeader:a=>o.jsx(m,{content:a.movie}),renderMeta:a=>a.genre})})}),I=c(()=>o.jsx(s,{actions:d,items:i,loading:!0,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),A=e=>o.jsxs(j,{centered:!1,header:"This is a Test",inlineTabs:!1,open:e.open,children:[o.jsx(j.Tab,{name:"Tab 1",children:o.jsx(s,{actions:d,addButton:{location:"top",color:"grey"},items:i,modal:{component:b},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:n=>o.jsx(m,{content:n.movie}),renderMeta:n=>n.genre})}),u.times(20,n=>o.jsx(j.Tab,{name:`Tab ${n+2}`,children:`Tab ${n+2}`},n+2)),e.children]}),_=c(()=>{const[e,n]=l.useState(!1);return o.jsxs(B,{children:[o.jsx(w,{content:"Open Modal",icon:"plus",onClick:()=>n(!0)}),o.jsx(T,{component:A,open:e,onClose:()=>n(!1),onSave:()=>new Promise(r=>r(n(!1)))})]})});v.__docgenInfo={description:"",methods:[],displayName:"Default"};y.__docgenInfo={description:"",methods:[],displayName:"AddButton"};f.__docgenInfo={description:"",methods:[],displayName:"DragAndDropRows"};D.__docgenInfo={description:"",methods:[],displayName:"Delete"};S.__docgenInfo={description:"",methods:[],displayName:"Empty"};C.__docgenInfo={description:"",methods:[],displayName:"EmptyAddButton"};x.__docgenInfo={description:"",methods:[],displayName:"InfiniteScroll"};M.__docgenInfo={description:"",methods:[],displayName:"InfiniteScrollDiv"};h.__docgenInfo={description:"",methods:[],displayName:"InfiniteScrollFilter"};I.__docgenInfo={description:"",methods:[],displayName:"Loading"};_.__docgenInfo={description:"",methods:[],displayName:"TabbedModalConfig"};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"useDragDrop(() => <ItemCollection actions={actions} items={items} onCopy={action('copy')} onDelete={action('delete')} onSave={action('save')} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />)",...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`useDragDrop(() => <ItemCollection actions={actions} addButton={{
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
