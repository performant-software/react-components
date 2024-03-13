import{j as o}from"./jsx-runtime-BTCK_S7S.js";import{a as t}from"./chunk-WFFRPTHA-B2vgThZf.js";import{d as g}from"./index-hzn_AknP.js";import{r as l}from"./index-CBqU2yxZ.js";import{B as ce}from"./Button-BDcCO5f8.js";import{i as a,S as B,C as de}from"./Colors-DiV52Fwf.js";import{H as m}from"./Header-BJ3NNdPz.js";import{D as le}from"./Dropdown-Di2cPjwR.js";import{_ as u}from"./index-default-C_maRo4o.js";import{A as T}from"./AddModal-CxO4C3ij.js";import{E as ue}from"./EditModal-CHH6muNa.js";import{I as s}from"./ItemCollection-CRZTLjmf.js";import{T as b}from"./TabbedModal-BtGdg9a4.js";import{u as p}from"./DragDrop-ryAVAQMJ.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./mapValues-BQxZ7nrE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./pickBy-JNbKYqv1.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-BoCILj_Q.js";import"./index-Cw1G72V2.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./debounce-DmjZtjd2.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CckcRzoH.js";import"./Icon-2tEtgK8g.js";import"./Label-Cq1fb1cd.js";import"./ModernAutoControlledComponent-DJBWk5EW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CQoJOerW.js";import"./toFinite-KQ8KevIC.js";import"./forEach-CXlln0XP.js";import"./Dimmer-D_gwaesu.js";import"./Portal-DvhHJPzU.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DZGZymok.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-B4PnIEPz.js";import"./without-BP-mqg2K.js";import"./isArrayLikeObject-CbXKTyfk.js";import"./isEmpty-Cyb9hIKi.js";import"./deburr-CEfyoYOr.js";import"./index-BBpNyw-T.js";import"./_baseSet-6y0qliU9.js";import"./_baseAssignValue-izmKBXUH.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-CVNi8iPS.js";import"./Modal-BnyapSFx.js";import"./index.es28-DYn5Qro_.js";import"./iframe-DRRVpjlC.js";import"../sb-preview/runtime.js";import"./index.es3-BovWZtni.js";import"./Message-3p6wyYpA.js";import"./Loader-CooidObp.js";import"./Toaster-C1YYqOUE.js";import"./Transition-DSFEXhCu.js";import"./i18n-C8zWlANG.js";import"./i18next-Sc0HEOoc.js";import"./toPropertyKey-hKuLU48H.js";import"./defineProperty-CCxoMnQV.js";import"./inherits-D5wXBZoG.js";import"./createClass-D2z1h_eG.js";import"./getPrototypeOf-BYVhAdwF.js";import"./uuid-BH6G0oTz.js";import"./Items-BYCJ6oNs.js";import"./Segment-C5_maSSM.js";import"./Checkbox-C9uAfnsM.js";import"./Card-BJT3uTAq.js";import"./Item-9lJy5i0K.js";import"./List-Ctrt6GVx.js";import"./Confirm-j2sChe5d.js";import"./Pagination-D0HmnRDL.js";import"./Menu-9i0apxqd.js";import"./Grid-Czr5owxQ.js";import"./DropdownButton-BY9fCShq.js";import"./Form-DNYbJ3VL.js";import"./Input-nEkKV48O.js";import"./AssociatedDropdown-WvrlYKWZ.js";import"./FuzzyDate-B_ARIoJj.js";import"./DateInput-DmLnloQ-.js";import"./ModalContext-Bu-D9kD-.js";import"./Trans-Bk6mzQm0.js";import"./objectWithoutProperties--RY0eV0u.js";import"./utils-Bq6oISwF.js";import"./DataList-nw59DLTe.js";import"./Draggable-KQRXc-DM.js";import"./useDrop-BRQoWSA5.js";import"./DndContext-B-2NJP7Z.js";import"./redux-C8f_Y06i.js";import"./objectSpread2-N4c0DWqo.js";import"./index.es21-BD0kU5QO.js";const rt={title:"Components/Semantic UI/ItemCollection",component:s},c=[{name:"edit"},{name:"copy"},{name:"delete"}],y=p(()=>o.jsx(s,{actions:c,items:a,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),f=p(()=>o.jsx(s,{actions:c,addButton:{location:g.optionsKnob("Location",{Bottom:"bottom",Top:"top"},"top",{display:"inline-radio"}),color:g.optionsKnob("Colors",B,"gray",{display:"inline-radio"})},items:a,modal:{component:T},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),D=p(()=>{const[e,n]=l.useState(a);return o.jsx(s,{actions:c,items:e,onDrag:(r,v)=>{const d=[...e],i=d[r];d.splice(r,1),d.splice(v,0,i),n(d)},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:r=>o.jsx(m,{content:r.movie}),renderMeta:r=>r.genre})}),S=p(()=>{const[e,n]=l.useState(a);return o.jsx(s,{actions:c,items:e,onCopy:t("copy"),onDelete:r=>n(v=>u.map(v,d=>d!==r?d:{...d,_destroy:!0})),onSave:t("save"),renderHeader:r=>o.jsx(m,{content:r.movie}),renderMeta:r=>r.genre})}),C=p(()=>o.jsx(s,{actions:c,items:[],onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),x=p(()=>o.jsx(s,{actions:c,addButton:{location:g.optionsKnob("Location",{Bottom:"bottom",Top:"top"},"top",{display:"inline-radio"}),color:g.optionsKnob("Colors",B,"gray",{display:"inline-radio"})},items:[],modal:{component:T},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),M=p(()=>o.jsx(s,{actions:c,items:a,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),perPage:5,renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),h=p(()=>{const e=l.createRef();return o.jsx("div",{ref:e,style:{maxHeight:"400px",overflow:"scroll"},children:o.jsx(s,{actions:c,context:e,items:a,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),perPage:5,renderHeader:n=>o.jsx(m,{content:n.movie}),renderMeta:n=>n.genre})})}),I=p(()=>{const[e,n]=l.useState(a),[r,v]=l.useState(null),d=l.useMemo(()=>u.uniq(u.flatten(u.map(a,i=>i.genre.split("|")))),[]);return l.useEffect(()=>{let i;r&&r.length?i=u.filter(a,j=>j.genre&&j.genre.indexOf(r)>0):i=[...a],n(i)},[r]),o.jsx(o.Fragment,{children:o.jsx(s,{actions:c,buttons:[{render:()=>o.jsx(le,{clearable:!0,placeholder:"Genre",search:!0,searchInput:{"aria-label":"Search"},selection:!0,onChange:(i,{value:j})=>v(j),options:u.map(d,i=>({key:i,value:i,text:i}))})}],items:e,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),perPage:4,renderHeader:i=>o.jsx(m,{content:i.movie}),renderMeta:i=>i.genre})})}),H=p(()=>o.jsx(s,{actions:c,items:a,loading:!0,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),ge=e=>o.jsxs(b,{centered:!1,header:"This is a Test",inlineTabs:!1,open:e.open,children:[o.jsx(b.Tab,{name:"Tab 1",children:o.jsx(s,{actions:c,addButton:{location:g.optionsKnob("Location",{Bottom:"bottom",Top:"top"},"top",{display:"inline-radio"}),color:g.optionsKnob("Colors",B,"gray",{display:"inline-radio"})},items:a,modal:{component:T},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:n=>o.jsx(m,{content:n.movie}),renderMeta:n=>n.genre})}),u.times(20,n=>o.jsx(b.Tab,{name:`Tab ${n+2}`,children:`Tab ${n+2}`},n+2)),e.children]}),_=p(()=>{const[e,n]=l.useState(!1);return o.jsxs(de,{children:[o.jsx(ce,{content:"Open Modal",icon:"plus",onClick:()=>n(!0)}),o.jsx(ue,{component:ge,open:e,onClose:()=>n(!1),onSave:()=>new Promise(r=>r(n(!1)))})]})});y.__docgenInfo={description:"",methods:[],displayName:"Default"};f.__docgenInfo={description:"",methods:[],displayName:"AddButton"};D.__docgenInfo={description:"",methods:[],displayName:"DragAndDropRows"};S.__docgenInfo={description:"",methods:[],displayName:"Delete"};C.__docgenInfo={description:"",methods:[],displayName:"Empty"};x.__docgenInfo={description:"",methods:[],displayName:"EmptyAddButton"};M.__docgenInfo={description:"",methods:[],displayName:"InfiniteScroll"};h.__docgenInfo={description:"",methods:[],displayName:"InfiniteScrollDiv"};I.__docgenInfo={description:"",methods:[],displayName:"InfiniteScrollFilter"};H.__docgenInfo={description:"",methods:[],displayName:"Loading"};_.__docgenInfo={description:"",methods:[],displayName:"TabbedModalConfig"};var w,L,E;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:"useDragDrop(() => <ItemCollection actions={actions} items={items} onCopy={action('copy')} onDelete={action('delete')} onSave={action('save')} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />)",...(E=(L=y.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var A,N,R;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`useDragDrop(() => <ItemCollection actions={actions} addButton={{
  location: options('Location', {
    Bottom: 'bottom',
    Top: 'top'
  }, 'top', {
    display: 'inline-radio'
  }),
  color: options('Colors', SemanticColors, 'gray', {
    display: 'inline-radio'
  })
}} items={items} modal={{
  component: AddModal
}} onCopy={action('copy')} onDelete={action('delete')} onSave={action('save')} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />)`,...(R=(N=f.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var P,K,G;D.parameters={...D.parameters,docs:{...(P=D.parameters)==null?void 0:P.docs,source:{originalSource:`useDragDrop(() => {
  const [list, setList] = useState(items);
  return <ItemCollection actions={actions} items={list} onDrag={(dragIndex, hoverIndex) => {
    const temp = [...list];
    const item = temp[dragIndex];
    temp.splice(dragIndex, 1);
    temp.splice(hoverIndex, 0, item);
    setList(temp);
  }} onCopy={action('copy')} onDelete={action('delete')} onSave={action('save')} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />;
})`,...(G=(K=D.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var O,k,F;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`useDragDrop(() => {
  const [list, setList] = useState(items);
  return <ItemCollection actions={actions} items={list} onCopy={action('copy')} onDelete={item => setList(prevList => _.map(prevList, i => i !== item ? i : {
    ...i,
    _destroy: true
  }))} onSave={action('save')} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />;
})`,...(F=(k=S.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var q,$,U;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:"useDragDrop(() => <ItemCollection actions={actions} items={[]} onCopy={action('copy')} onDelete={action('delete')} onSave={action('save')} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />)",...(U=($=C.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var z,J,Q;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`useDragDrop(() => <ItemCollection actions={actions} addButton={{
  location: options('Location', {
    Bottom: 'bottom',
    Top: 'top'
  }, 'top', {
    display: 'inline-radio'
  }),
  color: options('Colors', SemanticColors, 'gray', {
    display: 'inline-radio'
  })
}} items={[]} modal={{
  component: AddModal
}} onCopy={action('copy')} onDelete={action('delete')} onSave={action('save')} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />)`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var V,W,X;M.parameters={...M.parameters,docs:{...(V=M.parameters)==null?void 0:V.docs,source:{originalSource:"useDragDrop(() => <ItemCollection actions={actions} items={items} onCopy={action('copy')} onDelete={action('delete')} onSave={action('save')} perPage={5} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />)",...(X=(W=M.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`useDragDrop(() => {
  const containerRef = createRef();
  return <div ref={containerRef} style={{
    maxHeight: '400px',
    overflow: 'scroll'
  }}>
      <ItemCollection actions={actions} context={containerRef} items={items} onCopy={action('copy')} onDelete={action('delete')} onSave={action('save')} perPage={5} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />
    </div>;
})`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var oe,te,ne;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`useDragDrop(() => {
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
})`,...(ne=(te=I.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,ie,ae;H.parameters={...H.parameters,docs:{...(re=H.parameters)==null?void 0:re.docs,source:{originalSource:"useDragDrop(() => <ItemCollection actions={actions} items={items} loading onCopy={action('copy')} onDelete={action('delete')} onSave={action('save')} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />)",...(ae=(ie=H.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var se,me,pe;_.parameters={..._.parameters,docs:{...(se=_.parameters)==null?void 0:se.docs,source:{originalSource:`useDragDrop(() => {
  const [showModal, setShowModal] = useState(false);
  return <Container>
      <Button content='Open Modal' icon='plus' onClick={() => setShowModal(true)} />
      <EditModal component={ItemCollectionModal} open={showModal} onClose={() => setShowModal(false)} onSave={() => new Promise(resolve => resolve(setShowModal(false)))} />
    </Container>;
})`,...(pe=(me=_.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const it=["Default","AddButton","DragAndDropRows","Delete","Empty","EmptyAddButton","InfiniteScroll","InfiniteScrollDiv","InfiniteScrollFilter","Loading","TabbedModalConfig"];export{f as AddButton,y as Default,S as Delete,D as DragAndDropRows,C as Empty,x as EmptyAddButton,M as InfiniteScroll,h as InfiniteScrollDiv,I as InfiniteScrollFilter,H as Loading,_ as TabbedModalConfig,it as __namedExportsOrder,rt as default};
