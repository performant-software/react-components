import{j as e,r as y}from"./iframe-ColLpCq0.js";import{B as x}from"./Button-DLliuTg0.js";import{M as T}from"./Modal-DuXeYa7J.js";import{C as a}from"./Card-voQEl-go.js";import{I as o}from"./Item-nNuGw9sf.js";import{_ as S}from"./index-default-B8-H6N8J.js";import{i as s}from"./test-image-BGrKnxUR.js";import{F as E}from"./FileInputButton-BS0QHGEG.js";import{L as r}from"./LazyVideo-Da7OMGmq.js";import{p as _}from"./portrait-test-image-CFX7vfGN.js";import{v as t}from"./SampleVideo-Bq74ahmY.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-DT6_w2aY.js";import"./_getPrototype-dFVwFHqx.js";import"./Icon-VLftFoWa.js";import"./Label-BuJLNQet.js";import"./ModernAutoControlledComponent-GagUuvWz.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-3WyF2aiU.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-BiG3VRAM.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-CPqsDP_0.js";import"./Portal-Ci3UlCdp.js";import"./keyboardKey-CCZT5mKo.js";import"./map-CuZJRvr2.js";import"./index-BRMalJOx.js";import"./_baseSet-lZ1TFP0J.js";import"./_assignValue-wlBxhqFj.js";import"./_baseAssignValue-yJv1-bft.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-CIv_nSFx.js";import"./index-BBOwiCO8.js";import"./LazyLoader-CCkIBG8A.js";import"./without-Da1hi6IK.js";import"./isArrayLikeObject-DSLl7ti9.js";import"./Loader-D78Sy4dK.js";import"./Segment-B8QsE79V.js";import"./Transition-Bbrpn4bx.js";import"./filter-CGwd_uf8.js";import"./i18n-C0aeT7bv.js";import"./i18next-eNuDfwAU.js";import"./DownloadButton-CNTDatWx.js";import"./v4-BKrj-4V8.js";import"./VideoPlayer-ez44hqCP.js";import"./index.es28-aRnl8fXs.js";import"./Message-D_GErW1i.js";import"./index-default-C0I3bBxV.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,Le={title:"Components/Semantic UI/LazyVideo"},i=()=>e.jsx(r,{image:{alt:"Test Image"},preview:s,src:t}),n=()=>e.jsx(r,{}),m=()=>e.jsxs(r,{image:{alt:"Test Image"},preview:s,src:t,children:[e.jsx(x,{color:"green",content:"Edit video",icon:"edit",onClick:f("edit")}),e.jsx(x,{color:"orange",content:"Change video",icon:"move",onClick:f("change")}),e.jsx(x,{color:"red",content:"Delete video",icon:"trash",onClick:f("delete")})]}),d=()=>{const[C,w]=y.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{image:{alt:"Test Image"},preview:s,src:t,children:e.jsx(x,{color:"green",content:"Edit video",icon:"edit",onClick:()=>w(!0)})}),C&&e.jsxs(T,{open:!0,children:[e.jsx(T.Header,{children:"Edit video"}),e.jsx(T.Content,{children:"Edit"}),e.jsx(T.Actions,{children:e.jsx(x,{content:"Close",onClick:()=>w(!1)})})]})]})},c=()=>e.jsxs(a.Group,{children:[e.jsxs(a,{children:[e.jsx(r,{image:{alt:"First Image"},preview:s,src:t}),e.jsx(a.Content,{header:"Test 1"})]}),e.jsxs(a,{children:[e.jsx(r,{image:{alt:"Portrait Image"},preview:_,src:t}),e.jsx(a.Content,{header:"Test 2"})]}),e.jsxs(a,{children:[e.jsx(r,{image:{alt:"Third Image"},src:t}),e.jsx(a.Content,{header:"Test 3"})]}),e.jsxs(a,{children:[e.jsx(r,{}),e.jsx(a.Content,{header:"Test 4"})]})]}),p=()=>e.jsxs(o.Group,{children:[e.jsxs(o,{children:[e.jsx(o.Image,{children:e.jsx(r,{image:{alt:"First Image"},preview:s,src:t})}),e.jsx(o.Content,{header:"Test 1"})]}),e.jsxs(o,{children:[e.jsx(o.Image,{children:e.jsx(r,{image:{alt:"Portrait Image"},preview:_,src:t})}),e.jsx(o.Content,{header:"Test 2"})]}),e.jsxs(o,{children:[e.jsx(o.Image,{children:e.jsx(r,{image:{alt:"Third Image"},src:t})}),e.jsx(o.Content,{header:"Test 3"})]}),e.jsxs(o,{children:[e.jsx(o.Image,{children:e.jsx(r,{})}),e.jsx(o.Content,{header:"Test 4"})]})]}),l=()=>e.jsx(r,{image:{alt:"YouTube Image"},embedded:!0,preview:"http://img.youtube.com/vi/YXiZ8OsS3kk/0.jpg",src:"https://www.youtube.com/embed/YXiZ8OsS3kk"}),g=()=>{const[C,w]=y.useState();return e.jsx(e.Fragment,{children:e.jsx(r,{src:C&&URL.createObjectURL(C),children:e.jsx(E,{content:"Upload",icon:"file outline",onSelection:L=>w(S.first(L))})})})},u=()=>e.jsx(r,{image:{alt:"Test Image"},preview:"/path/to/preview.jpg",src:t}),I=()=>e.jsx(r,{image:{alt:"Test Image"},preview:s,src:"/path/to/source.mp4"}),h=()=>e.jsx(r,{image:{alt:"Test Image"},preview:"/path/to/preview.jpg",src:"/path/to/source.mp4"}),v=()=>e.jsx(r,{download:t,image:{alt:"Test Image"},name:"Video.mp4",preview:s,src:t}),j=()=>e.jsx(r,{image:{alt:"Test Image"},preview:s,src:t,transcriptions:[{label:"English",language:"en",src:"/src/assets/test.vtt"}]});i.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"Placeholder"};m.__docgenInfo={description:"",methods:[],displayName:"ExtraButtons"};d.__docgenInfo={description:"",methods:[],displayName:"onBlur"};c.__docgenInfo={description:"",methods:[],displayName:"CardContent"};p.__docgenInfo={description:"",methods:[],displayName:"ListContent"};l.__docgenInfo={description:"",methods:[],displayName:"Embedded"};g.__docgenInfo={description:"",methods:[],displayName:"Upload"};u.__docgenInfo={description:"",methods:[],displayName:"ErrorPreview"};I.__docgenInfo={description:"",methods:[],displayName:"ErrorSource"};h.__docgenInfo={description:"",methods:[],displayName:"ErrorPreviewAndSource"};v.__docgenInfo={description:"",methods:[],displayName:"Downloadable"};j.__docgenInfo={description:"",methods:[],displayName:"Transcriptions"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <LazyVideo image={{
  alt: 'Test Image'
}} preview={image} src={video} />`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => <LazyVideo />",...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <LazyVideo image={{
  alt: 'Test Image'
}} preview={image} src={video}>
    <Button color='green' content='Edit video' icon='edit' onClick={action('edit')} />
    <Button color='orange' content='Change video' icon='move' onClick={action('change')} />
    <Button color='red' content='Delete video' icon='trash' onClick={action('delete')} />
  </LazyVideo>`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <Card.Group>
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
  </Card.Group>`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <Item.Group>
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
  </Item.Group>`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <LazyVideo image={{
  alt: 'YouTube Image'
}} embedded preview='http://img.youtube.com/vi/YXiZ8OsS3kk/0.jpg' src='https://www.youtube.com/embed/YXiZ8OsS3kk' />`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [file, setFile] = useState();
  return <>
      <LazyVideo src={file && URL.createObjectURL(file)}>
        <FileInputButton content='Upload' icon='file outline' onSelection={files => setFile(_.first(files))} />
      </LazyVideo>
    </>;
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => <LazyVideo image={{
  alt: 'Test Image'
}} preview='/path/to/preview.jpg' src={video} />`,...u.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => <LazyVideo image={{
  alt: 'Test Image'
}} preview={image} src='/path/to/source.mp4' />`,...I.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <LazyVideo image={{
  alt: 'Test Image'
}} preview='/path/to/preview.jpg' src='/path/to/source.mp4' />`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => <LazyVideo download={video} image={{
  alt: 'Test Image'
}} name='Video.mp4' preview={image} src={video} />`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => <LazyVideo image={{
  alt: 'Test Image'
}} preview={image} src={video} transcriptions={[{
  label: 'English',
  language: 'en',
  src: '/src/assets/test.vtt'
}]} />`,...j.parameters?.docs?.source}}};const Se=["Default","Placeholder","ExtraButtons","onBlur","CardContent","ListContent","Embedded","Upload","ErrorPreview","ErrorSource","ErrorPreviewAndSource","Downloadable","Transcriptions"];export{c as CardContent,i as Default,v as Downloadable,l as Embedded,u as ErrorPreview,h as ErrorPreviewAndSource,I as ErrorSource,m as ExtraButtons,p as ListContent,n as Placeholder,j as Transcriptions,g as Upload,Se as __namedExportsOrder,Le as default,d as onBlur};
