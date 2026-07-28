import{j as e}from"./iframe-DGeuXaOs.js";import{B as h}from"./Button-RAvTcYbb.js";import{C as o}from"./Card-CnuSoFNK.js";import{I as a}from"./Item-CF75D0IG.js";import{i as t}from"./test-image-BGrKnxUR.js";import{L as r}from"./LazyImage-D5DvjX4e.js";import{p as j}from"./portrait-test-image-CFX7vfGN.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BXOZMkBo.js";import"./_getPrototype-dFVwFHqx.js";import"./Icon-B47Gj_wn.js";import"./Label-BpjthjD1.js";import"./ModernAutoControlledComponent-DzNbRDu3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-z-Nq7FBH.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-BGEnQvsQ.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-B2LOPfLZ.js";import"./Portal-ZeJHM45q.js";import"./keyboardKey-ClhdZcHf.js";import"./map-EWkZVQRl.js";import"./LazyLoader-tdUhb396.js";import"./without-D4_zEcFZ.js";import"./isArrayLikeObject-DSLl7ti9.js";import"./index-CPREaInv.js";import"./Loader-D70V1HVT.js";import"./Segment-vcriWqyZ.js";import"./Transition-CY0S3XPg.js";import"./_baseAssignValue-yJv1-bft.js";import"./filter-TR6vF8CB.js";import"./i18n-C0aeT7bv.js";import"./i18next-eNuDfwAU.js";import"./DownloadButton-CXR183or.js";import"./v4-BKrj-4V8.js";import"./PhotoViewer-DN3PqCtG.js";import"./index.es28-DQmGJf51.js";import"./Message-Cs2AjdzH.js";import"./Modal-BI7VS45S.js";import"./index-B5kevQSo.js";import"./_baseSet-BQeDkHe2.js";import"./_assignValue-wlBxhqFj.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-CIv_nSFx.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,ge={title:"Components/Semantic UI/LazyImage"},m=()=>e.jsx(r,{image:{alt:"Image"},src:t}),s=()=>e.jsx(r,{}),n=()=>e.jsxs(r,{image:{alt:"Test Image"},src:t,children:[e.jsx(h,{color:"green",content:"Edit photo",icon:"edit",onClick:u("edit")}),e.jsx(h,{color:"orange",content:"Change photo",icon:"move",onClick:u("change")}),e.jsx(h,{color:"red",content:"Delete photo",icon:"trash",onClick:u("delete")})]}),i=()=>e.jsxs(o.Group,{children:[e.jsxs(o,{children:[e.jsx(r,{image:{alt:"Test Image"},src:t}),e.jsx(o.Content,{header:"Test 1"})]}),e.jsxs(o,{children:[e.jsx(r,{image:{alt:"Portrait Image"},src:j}),e.jsx(o.Content,{header:"Test 2"})]}),e.jsxs(o,{children:[e.jsx(r,{image:{alt:"Last Image"}}),e.jsx(o.Content,{header:"Test 3"})]})]}),c=()=>e.jsxs(a.Group,{children:[e.jsxs(a,{children:[e.jsx(a.Image,{children:e.jsx(r,{image:{alt:"First Image"},src:t})}),e.jsx(a.Content,{header:"Test 1"})]}),e.jsxs(a,{children:[e.jsx(a.Image,{children:e.jsx(r,{image:{alt:"Portrait Image"},src:j})}),e.jsx(a.Content,{image:{alt:"Last Image"},header:"Test 2"})]}),e.jsxs(a,{children:[e.jsx(a.Image,{children:e.jsx(r,{})}),e.jsx(a.Content,{header:"Test 3"})]})]}),p=()=>e.jsx(r,{image:{alt:"Image"},src:"path/to/image.jpg"}),g=()=>e.jsx(r,{image:{alt:"Image"},preview:t,src:"path/to/image.jpg"}),d=()=>e.jsx(r,{image:{alt:"Image"},preview:"path/to/image.jpg",src:t}),l=()=>e.jsx(r,{image:{alt:"Image"},preview:"path/to/image.jpg",src:"path/to/image.jpg"}),I=()=>e.jsx(r,{downloadUrl:t,name:"Image.jpg",image:{alt:"Image"},src:t});m.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"Placeholder"};n.__docgenInfo={description:"",methods:[],displayName:"ExtraButtons"};i.__docgenInfo={description:"",methods:[],displayName:"CardContent"};c.__docgenInfo={description:"",methods:[],displayName:"ListContent"};p.__docgenInfo={description:"",methods:[],displayName:"ErrorSource"};g.__docgenInfo={description:"",methods:[],displayName:"ErrorSourceWithPreview"};d.__docgenInfo={description:"",methods:[],displayName:"ErrorPreview"};l.__docgenInfo={description:"",methods:[],displayName:"ErrorPreviewAndSource"};I.__docgenInfo={description:"",methods:[],displayName:"Downloadable"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <LazyImage image={{
  alt: 'Image'
}} src={image} />`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"() => <LazyImage />",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <LazyImage image={{
  alt: 'Test Image'
}} src={image}>
    <Button color='green' content='Edit photo' icon='edit' onClick={action('edit')} />
    <Button color='orange' content='Change photo' icon='move' onClick={action('change')} />
    <Button color='red' content='Delete photo' icon='trash' onClick={action('delete')} />
  </LazyImage>`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <Card.Group>
    <Card>
      <LazyImage image={{
      alt: 'Test Image'
    }} src={image} />
      <Card.Content header='Test 1' />
    </Card>
    <Card>
      <LazyImage image={{
      alt: 'Portrait Image'
    }} src={portraitImage} />
      <Card.Content header='Test 2' />
    </Card>
    <Card>
      <LazyImage image={{
      alt: 'Last Image'
    }} />
      <Card.Content header='Test 3' />
    </Card>
  </Card.Group>`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <Item.Group>
    <Item>
      <Item.Image>
        <LazyImage image={{
        alt: 'First Image'
      }} src={image} />
      </Item.Image>
      <Item.Content header='Test 1' />
    </Item>
    <Item>
      <Item.Image>
        <LazyImage image={{
        alt: 'Portrait Image'
      }} src={portraitImage} />
      </Item.Image>
      <Item.Content image={{
      alt: 'Last Image'
    }} header='Test 2' />
    </Item>
    <Item>
      <Item.Image>
        <LazyImage />
      </Item.Image>
      <Item.Content header='Test 3' />
    </Item>
  </Item.Group>`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <LazyImage image={{
  alt: 'Image'
}} src='path/to/image.jpg' />`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <LazyImage image={{
  alt: 'Image'
}} preview={image} src='path/to/image.jpg' />`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <LazyImage image={{
  alt: 'Image'
}} preview='path/to/image.jpg' src={image} />`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <LazyImage image={{
  alt: 'Image'
}} preview='path/to/image.jpg' src='path/to/image.jpg' />`,...l.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => <LazyImage downloadUrl={image} name='Image.jpg' image={{
  alt: 'Image'
}} src={image} />`,...I.parameters?.docs?.source}}};const de=["Default","Placeholder","ExtraButtons","CardContent","ListContent","ErrorSource","ErrorSourceWithPreview","ErrorPreview","ErrorPreviewAndSource","Downloadable"];export{i as CardContent,m as Default,I as Downloadable,d as ErrorPreview,l as ErrorPreviewAndSource,p as ErrorSource,g as ErrorSourceWithPreview,n as ExtraButtons,c as ListContent,s as Placeholder,de as __namedExportsOrder,ge as default};
