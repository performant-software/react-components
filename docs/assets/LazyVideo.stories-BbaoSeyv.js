import{j as e}from"./jsx-runtime-D9TvR9R2.js";import{r as de}from"./index-C0dDX-lL.js";import{a as y}from"./chunk-WFFRPTHA-B2vgThZf.js";import{B as x}from"./Button-Dcib8V--.js";import{M as f}from"./Modal-B0p4Zslq.js";import{C as a}from"./Card-D4FSaAsA.js";import{I as o}from"./Item-L53kXfY7.js";import{_ as le}from"./index-default-C_maRo4o.js";import{i as s}from"./test-image-BGrKnxUR.js";import{F as ge}from"./FileInputButton-B2clpJES.js";import{L as r}from"./LazyVideo-BFygfPSu.js";import{p as ce}from"./portrait-test-image-CFX7vfGN.js";import{v as t}from"./SampleVideo-Bq74ahmY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-C_4y_n4F.js";import"./Icon-BGzIEILD.js";import"./Label-BqnFaqey.js";import"./ModernAutoControlledComponent-CBEnGjal.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-BAV9TYTx.js";import"./toFinite-DWd2HYc9.js";import"./forEach-Bj9nU5MO.js";import"./Dimmer-kmE_IUk6.js";import"./Portal-CKYxdKwP.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DOYXiIEK.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-Dr4OE-Ab.js";import"./index-C2Sldg7a.js";import"./_baseSet-N8oZ1kqS.js";import"./_baseAssignValue-oMV-Qdk1.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-D4udnfVx.js";import"./LazyLoader-DKbE7T5A.js";import"./without-5b9zAUWg.js";import"./isArrayLikeObject-BDKOwBZt.js";import"./Loader-DQkWekFb.js";import"./Segment-CxFOEEcF.js";import"./Transition-Bkcp4SUV.js";import"./filter-BXgalVMq.js";import"./i18n-C9xJ7SCg.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";import"./DownloadButton-D3sda6tg.js";import"./uuid-BH6G0oTz.js";import"./VideoPlayer-D62XFTGa.js";import"./index.es34-D-zeZtkc.js";import"./iframe-CJwiHJCV.js";import"../sb-preview/runtime.js";import"./Message-BUccNRJp.js";const Cr={title:"Components/Semantic UI/LazyVideo"},i=()=>e.jsx(r,{image:{alt:"Test Image"},preview:s,src:t}),n=()=>e.jsx(r,{}),m=()=>e.jsxs(r,{image:{alt:"Test Image"},preview:s,src:t,children:[e.jsx(x,{color:"green",content:"Edit video",icon:"edit",onClick:y("edit")}),e.jsx(x,{color:"orange",content:"Change video",icon:"move",onClick:y("change")}),e.jsx(x,{color:"red",content:"Delete video",icon:"trash",onClick:y("delete")})]}),d=()=>{const[C,w]=de.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{image:{alt:"Test Image"},preview:s,src:t,children:e.jsx(x,{color:"green",content:"Edit video",icon:"edit",onClick:()=>w(!0)})}),C&&e.jsxs(f,{open:!0,children:[e.jsx(f.Header,{children:"Edit video"}),e.jsx(f.Content,{children:"Edit"}),e.jsx(f.Actions,{children:e.jsx(x,{content:"Close",onClick:()=>w(!1)})})]})]})},c=()=>e.jsxs(a.Group,{children:[e.jsxs(a,{children:[e.jsx(r,{image:{alt:"First Image"},preview:s,src:t}),e.jsx(a.Content,{header:"Test 1"})]}),e.jsxs(a,{children:[e.jsx(r,{image:{alt:"Portrait Image"},preview:ce,src:t}),e.jsx(a.Content,{header:"Test 2"})]}),e.jsxs(a,{children:[e.jsx(r,{image:{alt:"Third Image"},src:t}),e.jsx(a.Content,{header:"Test 3"})]}),e.jsxs(a,{children:[e.jsx(r,{}),e.jsx(a.Content,{header:"Test 4"})]})]}),p=()=>e.jsxs(o.Group,{children:[e.jsxs(o,{children:[e.jsx(o.Image,{children:e.jsx(r,{image:{alt:"First Image"},preview:s,src:t})}),e.jsx(o.Content,{header:"Test 1"})]}),e.jsxs(o,{children:[e.jsx(o.Image,{children:e.jsx(r,{image:{alt:"Portrait Image"},preview:ce,src:t})}),e.jsx(o.Content,{header:"Test 2"})]}),e.jsxs(o,{children:[e.jsx(o.Image,{children:e.jsx(r,{image:{alt:"Third Image"},src:t})}),e.jsx(o.Content,{header:"Test 3"})]}),e.jsxs(o,{children:[e.jsx(o.Image,{children:e.jsx(r,{})}),e.jsx(o.Content,{header:"Test 4"})]})]}),l=()=>e.jsx(r,{image:{alt:"YouTube Image"},embedded:!0,preview:"http://img.youtube.com/vi/YXiZ8OsS3kk/0.jpg",src:"https://www.youtube.com/embed/YXiZ8OsS3kk"}),g=()=>{const[C,w]=de.useState();return e.jsx(e.Fragment,{children:e.jsx(r,{src:C&&URL.createObjectURL(C),children:e.jsx(ge,{content:"Upload",icon:"file outline",onSelection:pe=>w(le.first(pe))})})})},u=()=>e.jsx(r,{image:{alt:"Test Image"},preview:"/path/to/preview.jpg",src:t}),I=()=>e.jsx(r,{image:{alt:"Test Image"},preview:s,src:"/path/to/source.mp4"}),h=()=>e.jsx(r,{image:{alt:"Test Image"},preview:"/path/to/preview.jpg",src:"/path/to/source.mp4"}),v=()=>e.jsx(r,{download:t,image:{alt:"Test Image"},name:"Video.mp4",preview:s,src:t}),j=()=>e.jsx(r,{image:{alt:"Test Image"},preview:s,src:t,transcriptions:[{label:"English",language:"en",src:"/src/assets/test.vtt"}]});i.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"Placeholder"};m.__docgenInfo={description:"",methods:[],displayName:"ExtraButtons"};d.__docgenInfo={description:"",methods:[],displayName:"onBlur"};c.__docgenInfo={description:"",methods:[],displayName:"CardContent"};p.__docgenInfo={description:"",methods:[],displayName:"ListContent"};l.__docgenInfo={description:"",methods:[],displayName:"Embedded"};g.__docgenInfo={description:"",methods:[],displayName:"Upload"};u.__docgenInfo={description:"",methods:[],displayName:"ErrorPreview"};I.__docgenInfo={description:"",methods:[],displayName:"ErrorSource"};h.__docgenInfo={description:"",methods:[],displayName:"ErrorPreviewAndSource"};v.__docgenInfo={description:"",methods:[],displayName:"Downloadable"};j.__docgenInfo={description:"",methods:[],displayName:"Transcriptions"};var T,L,_;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`() => <LazyVideo image={{
  alt: 'Test Image'
}} preview={image} src={video} />`,...(_=(L=i.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var S,E,V;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:"() => <LazyVideo />",...(V=(E=n.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var z,b,k;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`() => <LazyVideo image={{
  alt: 'Test Image'
}} preview={image} src={video}>
    <Button color='green' content='Edit video' icon='edit' onClick={action('edit')} />
    <Button color='orange' content='Change video' icon='move' onClick={action('change')} />
    <Button color='red' content='Delete video' icon='trash' onClick={action('delete')} />
  </LazyVideo>`,...(k=(b=m.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var B,M,N;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(N=(M=d.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var P,F,U;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`() => <Card.Group>
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
  </Card.Group>`,...(U=(F=c.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var D,O,A;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`() => <Item.Group>
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
  </Item.Group>`,...(A=(O=p.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var G,Y,R;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`() => <LazyVideo image={{
  alt: 'YouTube Image'
}} embedded preview='http://img.youtube.com/vi/YXiZ8OsS3kk/0.jpg' src='https://www.youtube.com/embed/YXiZ8OsS3kk' />`,...(R=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:R.source}}};var X,Z,H;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const [file, setFile] = useState();
  return <>
      <LazyVideo src={file && URL.createObjectURL(file)}>
        <FileInputButton content='Upload' icon='file outline' onSelection={files => setFile(_.first(files))} />
      </LazyVideo>
    </>;
}`,...(H=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:H.source}}};var q,J,K;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`() => <LazyVideo image={{
  alt: 'Test Image'
}} preview='/path/to/preview.jpg' src={video} />`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,W,$;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`() => <LazyVideo image={{
  alt: 'Test Image'
}} preview={image} src='/path/to/source.mp4' />`,...($=(W=I.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var ee,re,oe;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`() => <LazyVideo image={{
  alt: 'Test Image'
}} preview='/path/to/preview.jpg' src='/path/to/source.mp4' />`,...(oe=(re=h.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var te,ae,se;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`() => <LazyVideo download={video} image={{
  alt: 'Test Image'
}} name='Video.mp4' preview={image} src={video} />`,...(se=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ie,ne,me;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`() => <LazyVideo image={{
  alt: 'Test Image'
}} preview={image} src={video} transcriptions={[{
  label: 'English',
  language: 'en',
  src: '/src/assets/test.vtt'
}]} />`,...(me=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:me.source}}};const wr=["Default","Placeholder","ExtraButtons","onBlur","CardContent","ListContent","Embedded","Upload","ErrorPreview","ErrorSource","ErrorPreviewAndSource","Downloadable","Transcriptions"];export{c as CardContent,i as Default,v as Downloadable,l as Embedded,u as ErrorPreview,h as ErrorPreviewAndSource,I as ErrorSource,m as ExtraButtons,p as ListContent,n as Placeholder,j as Transcriptions,g as Upload,wr as __namedExportsOrder,Cr as default,d as onBlur};
