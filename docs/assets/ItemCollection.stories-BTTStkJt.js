import{j as o}from"./jsx-runtime-D9TvR9R2.js";import{a as t}from"./chunk-WFFRPTHA-B2vgThZf.js";import{d as g}from"./index-D3aFT48-.js";import{r as l}from"./index-C0dDX-lL.js";import{B as ce}from"./Button-CJhT71wt.js";import{i as a,S as B,C as de}from"./Colors-CNUCidUI.js";import{H as m}from"./Header-BHdMo175.js";import{D as le}from"./Dropdown-DwNow7wJ.js";import{_ as u}from"./index-default-C_maRo4o.js";import{A as T}from"./AddModal-Cuh-h8yk.js";import{E as ue}from"./EditModal-BwlLLHjj.js";import{I as s}from"./ItemCollection-DcTxMNaO.js";import{T as b}from"./TabbedModal-CebMx8PB.js";import{u as p}from"./DragDrop-BuEYQASG.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./mapValues-BQxZ7nrE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./pickBy-JNbKYqv1.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-BoCILj_Q.js";import"./index-Cw1G72V2.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./debounce-DmjZtjd2.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BSRayMAs.js";import"./Icon-C_3d7-zE.js";import"./Label-aEFd48OX.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Cc_HXDPA.js";import"./toFinite-C3oJXAtX.js";import"./forEach-CLeEMxs1.js";import"./Dimmer-DP3fvqlo.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DOYXiIEK.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-DWKMCCtW.js";import"./without-Duh6Zu7H.js";import"./isArrayLikeObject-Bl_bAmop.js";import"./isEmpty-CY-Bv0TY.js";import"./deburr-CNLr_JRW.js";import"./index-mbjjMjCk.js";import"./_baseSet-BllfnHSO.js";import"./_baseAssignValue-UQlBDUKN.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-B6f9p5im.js";import"./Modal-BWgkEMr1.js";import"./index.es33-B8_wFUYw.js";import"./iframe-Lr6NDPww.js";import"../sb-preview/runtime.js";import"./index.es3-CZB1tXbi.js";import"./Message-smmiVK7n.js";import"./Loader-lqR_Ikjg.js";import"./Toaster-gMCa2mDU.js";import"./Transition-HA1Bivu3.js";import"./i18n-C9xJ7SCg.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";import"./uuid-BH6G0oTz.js";import"./Items-D-G-gBCu.js";import"./Segment-BqjJDZFO.js";import"./Checkbox-B3tsCUtI.js";import"./Popup-BfkG08Zy.js";import"./Card-ClzD5NPk.js";import"./Item-DsGqipCH.js";import"./List-P4napF_f.js";import"./Confirm-BUdp95GX.js";import"./Pagination-CRHbXf2X.js";import"./Menu-C3RUPz9h.js";import"./Grid-CpdbEkBf.js";import"./DropdownButton-BOdm4mkS.js";import"./Form-WfNl3YLh.js";import"./Input-Bwh_HEb3.js";import"./AssociatedDropdown-CJvG6MKs.js";import"./FuzzyDate-DoL2JJzx.js";import"./DateInput-Bc2PBuBh.js";import"./Trans-BYRLofKo.js";import"./objectWithoutProperties--RY0eV0u.js";import"./utils-DCllE6BU.js";import"./createClass-D0eOxKhW.js";import"./DataList-CDfknEnk.js";import"./ListSession-hS-NIzK1.js";import"./Draggable-DKUpfzgU.js";import"./useDrop-Bls-awrw.js";import"./DndContext-BcAF8WvB.js";import"./redux-CpmcZR8k.js";import"./objectSpread2-Cl-ctlOG.js";import"./index.es24-xvj8T6Jl.js";const at={title:"Components/Semantic UI/ItemCollection",component:s},c=[{name:"edit"},{name:"copy"},{name:"delete"}],y=p(()=>o.jsx(s,{actions:c,items:a,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),f=p(()=>o.jsx(s,{actions:c,addButton:{location:g.optionsKnob("Location",{Bottom:"bottom",Top:"top"},"top",{display:"inline-radio"}),color:g.optionsKnob("Colors",B,"gray",{display:"inline-radio"})},items:a,modal:{component:T},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),D=p(()=>{const[e,n]=l.useState(a);return o.jsx(s,{actions:c,items:e,onDrag:(r,v)=>{const d=[...e],i=d[r];d.splice(r,1),d.splice(v,0,i),n(d)},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:r=>o.jsx(m,{content:r.movie}),renderMeta:r=>r.genre})}),S=p(()=>{const[e,n]=l.useState(a);return o.jsx(s,{actions:c,items:e,onCopy:t("copy"),onDelete:r=>n(v=>u.map(v,d=>d!==r?d:{...d,_destroy:!0})),onSave:t("save"),renderHeader:r=>o.jsx(m,{content:r.movie}),renderMeta:r=>r.genre})}),C=p(()=>o.jsx(s,{actions:c,items:[],onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),x=p(()=>o.jsx(s,{actions:c,addButton:{location:g.optionsKnob("Location",{Bottom:"bottom",Top:"top"},"top",{display:"inline-radio"}),color:g.optionsKnob("Colors",B,"gray",{display:"inline-radio"})},items:[],modal:{component:T},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),M=p(()=>o.jsx(s,{actions:c,items:a,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),perPage:5,renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),h=p(()=>{const e=l.createRef();return o.jsx("div",{ref:e,style:{maxHeight:"400px",overflow:"scroll"},children:o.jsx(s,{actions:c,context:e,items:a,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),perPage:5,renderHeader:n=>o.jsx(m,{content:n.movie}),renderMeta:n=>n.genre})})}),I=p(()=>{const[e,n]=l.useState(a),[r,v]=l.useState(null),d=l.useMemo(()=>u.uniq(u.flatten(u.map(a,i=>i.genre.split("|")))),[]);return l.useEffect(()=>{let i;r&&r.length?i=u.filter(a,j=>j.genre&&j.genre.indexOf(r)>0):i=[...a],n(i)},[r]),o.jsx(o.Fragment,{children:o.jsx(s,{actions:c,buttons:[{render:()=>o.jsx(le,{clearable:!0,placeholder:"Genre",search:!0,searchInput:{"aria-label":"Search"},selection:!0,onChange:(i,{value:j})=>v(j),options:u.map(d,i=>({key:i,value:i,text:i}))})}],items:e,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),perPage:4,renderHeader:i=>o.jsx(m,{content:i.movie}),renderMeta:i=>i.genre})})}),H=p(()=>o.jsx(s,{actions:c,items:a,loading:!0,onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:e=>o.jsx(m,{content:e.movie}),renderMeta:e=>e.genre})),ge=e=>o.jsxs(b,{centered:!1,header:"This is a Test",inlineTabs:!1,open:e.open,children:[o.jsx(b.Tab,{name:"Tab 1",children:o.jsx(s,{actions:c,addButton:{location:g.optionsKnob("Location",{Bottom:"bottom",Top:"top"},"top",{display:"inline-radio"}),color:g.optionsKnob("Colors",B,"gray",{display:"inline-radio"})},items:a,modal:{component:T},onCopy:t("copy"),onDelete:t("delete"),onSave:t("save"),renderHeader:n=>o.jsx(m,{content:n.movie}),renderMeta:n=>n.genre})}),u.times(20,n=>o.jsx(b.Tab,{name:`Tab ${n+2}`,children:`Tab ${n+2}`},n+2)),e.children]}),_=p(()=>{const[e,n]=l.useState(!1);return o.jsxs(de,{children:[o.jsx(ce,{content:"Open Modal",icon:"plus",onClick:()=>n(!0)}),o.jsx(ue,{component:ge,open:e,onClose:()=>n(!1),onSave:()=>new Promise(r=>r(n(!1)))})]})});y.__docgenInfo={description:"",methods:[],displayName:"Default"};f.__docgenInfo={description:"",methods:[],displayName:"AddButton"};D.__docgenInfo={description:"",methods:[],displayName:"DragAndDropRows"};S.__docgenInfo={description:"",methods:[],displayName:"Delete"};C.__docgenInfo={description:"",methods:[],displayName:"Empty"};x.__docgenInfo={description:"",methods:[],displayName:"EmptyAddButton"};M.__docgenInfo={description:"",methods:[],displayName:"InfiniteScroll"};h.__docgenInfo={description:"",methods:[],displayName:"InfiniteScrollDiv"};I.__docgenInfo={description:"",methods:[],displayName:"InfiniteScrollFilter"};H.__docgenInfo={description:"",methods:[],displayName:"Loading"};_.__docgenInfo={description:"",methods:[],displayName:"TabbedModalConfig"};var w,L,E;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:"useDragDrop(() => <ItemCollection actions={actions} items={items} onCopy={action('copy')} onDelete={action('delete')} onSave={action('save')} renderHeader={item => <Header content={item.movie} />} renderMeta={item => item.genre} />)",...(E=(L=y.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var A,N,R;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`useDragDrop(() => <ItemCollection actions={actions} addButton={{
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
})`,...(pe=(me=_.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const st=["Default","AddButton","DragAndDropRows","Delete","Empty","EmptyAddButton","InfiniteScroll","InfiniteScrollDiv","InfiniteScrollFilter","Loading","TabbedModalConfig"];export{f as AddButton,y as Default,S as Delete,D as DragAndDropRows,C as Empty,x as EmptyAddButton,M as InfiniteScroll,h as InfiniteScrollDiv,I as InfiniteScrollFilter,H as Loading,_ as TabbedModalConfig,st as __namedExportsOrder,at as default};
