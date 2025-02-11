import{j as e}from"./jsx-runtime-BTCK_S7S.js";import{r as ie}from"./index-CBqU2yxZ.js";import{a as f}from"./chunk-WFFRPTHA-B2vgThZf.js";import{B as v}from"./Button-Blq7Z6RX.js";import{M as w}from"./Modal-Bz2VEyQG.js";import{C as a}from"./Card-BJT3uTAq.js";import{I as o}from"./Item-9lJy5i0K.js";import{_ as me}from"./index-default-C_maRo4o.js";import{i}from"./test-image-BGrKnxUR.js";import{F as de}from"./FileInputButton-qbfOXRVs.js";import{L as r}from"./LazyVideo-C1LhV87V.js";import{p as se}from"./portrait-test-image-CFX7vfGN.js";import{v as t}from"./SampleVideo-Bq74ahmY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CckcRzoH.js";import"./Icon-2tEtgK8g.js";import"./Label-Cq1fb1cd.js";import"./ModernAutoControlledComponent-DJBWk5EW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CQoJOerW.js";import"./toFinite-KQ8KevIC.js";import"./forEach-CXlln0XP.js";import"./Dimmer-D_gwaesu.js";import"./Portal-DvhHJPzU.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DZGZymok.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-B4PnIEPz.js";import"./index-BBpNyw-T.js";import"./_baseSet-6y0qliU9.js";import"./_baseAssignValue-izmKBXUH.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-Cyb9hIKi.js";import"./LazyLoader-D1S4_28m.js";import"./without-BP-mqg2K.js";import"./isArrayLikeObject-CbXKTyfk.js";import"./Loader-CooidObp.js";import"./Segment-C5_maSSM.js";import"./Transition-DSFEXhCu.js";import"./filter-CVNi8iPS.js";import"./i18n-DOVQ27W-.js";import"./i18next-Sc0HEOoc.js";import"./toPropertyKey-hKuLU48H.js";import"./defineProperty-CCxoMnQV.js";import"./inherits-D5wXBZoG.js";import"./createClass-D2z1h_eG.js";import"./getPrototypeOf-BYVhAdwF.js";import"./DownloadButton-BvcDWdH9.js";import"./uuid-BH6G0oTz.js";import"./VideoPlayer-CWLiDtg2.js";import"./index.es33-Brp4LGM6.js";import"./iframe-BE8BmiBP.js";import"../sb-preview/runtime.js";import"./Message-3p6wyYpA.js";const hr={title:"Components/Semantic UI/LazyVideo"},s=()=>e.jsx(r,{image:{alt:"Test Image"},preview:i,src:t}),n=()=>e.jsx(r,{}),m=()=>e.jsxs(r,{image:{alt:"Test Image"},preview:i,src:t,children:[e.jsx(v,{color:"green",content:"Edit video",icon:"edit",onClick:f("edit")}),e.jsx(v,{color:"orange",content:"Change video",icon:"move",onClick:f("change")}),e.jsx(v,{color:"red",content:"Delete video",icon:"trash",onClick:f("delete")})]}),d=()=>{const[x,C]=ie.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{image:{alt:"Test Image"},preview:i,src:t,children:e.jsx(v,{color:"green",content:"Edit video",icon:"edit",onClick:()=>C(!0)})}),x&&e.jsxs(w,{open:!0,children:[e.jsx(w.Header,{children:"Edit video"}),e.jsx(w.Content,{children:"Edit"}),e.jsx(w.Actions,{children:e.jsx(v,{content:"Close",onClick:()=>C(!1)})})]})]})},c=()=>e.jsxs(a.Group,{children:[e.jsxs(a,{children:[e.jsx(r,{image:{alt:"First Image"},preview:i,src:t}),e.jsx(a.Content,{header:"Test 1"})]}),e.jsxs(a,{children:[e.jsx(r,{image:{alt:"Portrait Image"},preview:se,src:t}),e.jsx(a.Content,{header:"Test 2"})]}),e.jsxs(a,{children:[e.jsx(r,{image:{alt:"Third Image"},src:t}),e.jsx(a.Content,{header:"Test 3"})]}),e.jsxs(a,{children:[e.jsx(r,{}),e.jsx(a.Content,{header:"Test 4"})]})]}),p=()=>e.jsxs(o.Group,{children:[e.jsxs(o,{children:[e.jsx(o.Image,{children:e.jsx(r,{image:{alt:"First Image"},preview:i,src:t})}),e.jsx(o.Content,{header:"Test 1"})]}),e.jsxs(o,{children:[e.jsx(o.Image,{children:e.jsx(r,{image:{alt:"Portrait Image"},preview:se,src:t})}),e.jsx(o.Content,{header:"Test 2"})]}),e.jsxs(o,{children:[e.jsx(o.Image,{children:e.jsx(r,{image:{alt:"Third Image"},src:t})}),e.jsx(o.Content,{header:"Test 3"})]}),e.jsxs(o,{children:[e.jsx(o.Image,{children:e.jsx(r,{})}),e.jsx(o.Content,{header:"Test 4"})]})]}),l=()=>e.jsx(r,{image:{alt:"YouTube Image"},embedded:!0,preview:"http://img.youtube.com/vi/YXiZ8OsS3kk/0.jpg",src:"https://www.youtube.com/embed/YXiZ8OsS3kk"}),g=()=>{const[x,C]=ie.useState();return e.jsx(e.Fragment,{children:e.jsx(r,{src:x&&URL.createObjectURL(x),children:e.jsx(de,{content:"Upload",icon:"file outline",onSelection:ne=>C(me.first(ne))})})})},u=()=>e.jsx(r,{image:{alt:"Test Image"},preview:"/path/to/preview.jpg",src:t}),I=()=>e.jsx(r,{image:{alt:"Test Image"},preview:i,src:"/path/to/source.mp4"}),h=()=>e.jsx(r,{image:{alt:"Test Image"},preview:"/path/to/preview.jpg",src:"/path/to/source.mp4"}),j=()=>e.jsx(r,{download:t,image:{alt:"Test Image"},name:"Video.mp4",preview:i,src:t});s.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"Placeholder"};m.__docgenInfo={description:"",methods:[],displayName:"ExtraButtons"};d.__docgenInfo={description:"",methods:[],displayName:"onBlur"};c.__docgenInfo={description:"",methods:[],displayName:"CardContent"};p.__docgenInfo={description:"",methods:[],displayName:"ListContent"};l.__docgenInfo={description:"",methods:[],displayName:"Embedded"};g.__docgenInfo={description:"",methods:[],displayName:"Upload"};u.__docgenInfo={description:"",methods:[],displayName:"ErrorPreview"};I.__docgenInfo={description:"",methods:[],displayName:"ErrorSource"};h.__docgenInfo={description:"",methods:[],displayName:"ErrorPreviewAndSource"};j.__docgenInfo={description:"",methods:[],displayName:"Downloadable"};var y,T,L;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => <LazyVideo image={{
  alt: 'Test Image'
}} preview={image} src={video} />`,...(L=(T=s.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var S,_,E;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:"() => <LazyVideo />",...(E=(_=n.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var V,z,b;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`() => <LazyVideo image={{
  alt: 'Test Image'
}} preview={image} src={video}>
    <Button color='green' content='Edit video' icon='edit' onClick={action('edit')} />
    <Button color='orange' content='Change video' icon='move' onClick={action('change')} />
    <Button color='red' content='Delete video' icon='trash' onClick={action('delete')} />
  </LazyVideo>`,...(b=(z=m.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var k,B,M;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [modal, setModal] = useState(false);
  return <>
      <LazyVideo image={{
      alt: 'Test Image'
    }} preview={image} src={video}>
        <Button color='green' content='Edit video' icon='edit' onClick={() => setModal(true)} />
      </LazyVideo>
      {modal && <Modal open>
          <Modal.Header>Edit video</Modal.Header>
          <Modal.Content>Edit</Modal.Content>
          <Modal.Actions>
            <Button content='Close' onClick={() => setModal(false)} />
          </Modal.Actions>
        </Modal>}
    </>;
}`,...(M=(B=d.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var P,F,N;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`() => <Card.Group>
    <Card>
      <LazyVideo image={{
      alt: 'First Image'
    }} preview={image} src={video} />
      <Card.Content header='Test 1' />
    </Card>
    <Card>
      <LazyVideo image={{
      alt: 'Portrait Image'
    }} preview={portraitImage} src={video} />
      <Card.Content header='Test 2' />
    </Card>
    <Card>
      <LazyVideo image={{
      alt: 'Third Image'
    }} src={video} />
      <Card.Content header='Test 3' />
    </Card>
    <Card>
      <LazyVideo />
      <Card.Content header='Test 4' />
    </Card>
  </Card.Group>`,...(N=(F=c.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var U,D,O;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`() => <Item.Group>
    <Item>
      <Item.Image>
        <LazyVideo image={{
        alt: 'First Image'
      }} preview={image} src={video} />
      </Item.Image>
      <Item.Content header='Test 1' />
    </Item>
    <Item>
      <Item.Image>
        <LazyVideo image={{
        alt: 'Portrait Image'
      }} preview={portraitImage} src={video} />
      </Item.Image>
      <Item.Content header='Test 2' />
    </Item>
    <Item>
      <Item.Image>
        <LazyVideo image={{
        alt: 'Third Image'
      }} src={video} />
      </Item.Image>
      <Item.Content header='Test 3' />
    </Item>
    <Item>
      <Item.Image>
        <LazyVideo />
      </Item.Image>
      <Item.Content header='Test 4' />
    </Item>
  </Item.Group>`,...(O=(D=p.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var A,G,Y;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`() => <LazyVideo image={{
  alt: 'YouTube Image'
}} embedded preview='http://img.youtube.com/vi/YXiZ8OsS3kk/0.jpg' src='https://www.youtube.com/embed/YXiZ8OsS3kk' />`,...(Y=(G=l.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var R,X,Z;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [file, setFile] = useState();
  return <>
      <LazyVideo src={file && URL.createObjectURL(file)}>
        <FileInputButton content='Upload' icon='file outline' onSelection={files => setFile(_.first(files))} />
      </LazyVideo>
    </>;
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var H,q,J;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`() => <LazyVideo image={{
  alt: 'Test Image'
}} preview='/path/to/preview.jpg' src={video} />`,...(J=(q=u.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,W;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`() => <LazyVideo image={{
  alt: 'Test Image'
}} preview={image} src='/path/to/source.mp4' />`,...(W=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var $,ee,re;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`() => <LazyVideo image={{
  alt: 'Test Image'
}} preview='/path/to/preview.jpg' src='/path/to/source.mp4' />`,...(re=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var oe,te,ae;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`() => <LazyVideo download={video} image={{
  alt: 'Test Image'
}} name='Video.mp4' preview={image} src={video} />`,...(ae=(te=j.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};const jr=["Default","Placeholder","ExtraButtons","onBlur","CardContent","ListContent","Embedded","Upload","ErrorPreview","ErrorSource","ErrorPreviewAndSource","Downloadable"];export{c as CardContent,s as Default,j as Downloadable,l as Embedded,u as ErrorPreview,h as ErrorPreviewAndSource,I as ErrorSource,m as ExtraButtons,p as ListContent,n as Placeholder,g as Upload,jr as __namedExportsOrder,hr as default,d as onBlur};
