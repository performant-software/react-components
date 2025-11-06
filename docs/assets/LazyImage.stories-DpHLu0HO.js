import{j as e}from"./iframe-B8scVUHo.js";import{B as h}from"./Button-DI1B12kj.js";import{C as o}from"./Card-DAOiEJVl.js";import{I as a}from"./Item-Davrqx5t.js";import{i as t}from"./test-image-BGrKnxUR.js";import{L as r}from"./LazyImage-C82-l8_f.js";import{p as j}from"./portrait-test-image-CFX7vfGN.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CaJb2m-1.js";import"./Icon-BVP9tOGJ.js";import"./Label-DldEee3n.js";import"./ModernAutoControlledComponent-pwrQID__.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CW8buXEW.js";import"./toFinite-BD_NKTe4.js";import"./forEach-MWW8Ch3c.js";import"./Dimmer-B2JVl7VW.js";import"./Portal-Q0xzb-rT.js";import"./keyboardKey-CQEJ9RQY.js";import"./map-BHg0yW3b.js";import"./LazyLoader-B3LHWvNq.js";import"./without-CE5z1u1p.js";import"./isArrayLikeObject-DVKyOMyh.js";import"./index-CUBMh0mQ.js";import"./Loader-CVDhZsJ8.js";import"./Segment-Cxusd78u.js";import"./Transition-BZ82mqcW.js";import"./_baseAssignValue-BLvsiv_f.js";import"./filter-CSD5FKWg.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";import"./DownloadButton-B69RH5Tm.js";import"./v4-BKrj-4V8.js";import"./PhotoViewer-CpWQubmj.js";import"./index.es28-CKBW4mjb.js";import"./Message-BXjxpmsd.js";import"./Modal-CGRMDdyW.js";import"./index-B596VeP6.js";import"./_baseSet-m4jr0LOE.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-u5EZjvYg.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,ne={title:"Components/Semantic UI/LazyImage"},s=()=>e.jsx(r,{image:{alt:"Image"},src:t}),m=()=>e.jsx(r,{}),n=()=>e.jsxs(r,{image:{alt:"Test Image"},src:t,children:[e.jsx(h,{color:"green",content:"Edit photo",icon:"edit",onClick:u("edit")}),e.jsx(h,{color:"orange",content:"Change photo",icon:"move",onClick:u("change")}),e.jsx(h,{color:"red",content:"Delete photo",icon:"trash",onClick:u("delete")})]}),i=()=>e.jsxs(o.Group,{children:[e.jsxs(o,{children:[e.jsx(r,{image:{alt:"Test Image"},src:t}),e.jsx(o.Content,{header:"Test 1"})]}),e.jsxs(o,{children:[e.jsx(r,{image:{alt:"Portrait Image"},src:j}),e.jsx(o.Content,{header:"Test 2"})]}),e.jsxs(o,{children:[e.jsx(r,{image:{alt:"Last Image"}}),e.jsx(o.Content,{header:"Test 3"})]})]}),c=()=>e.jsxs(a.Group,{children:[e.jsxs(a,{children:[e.jsx(a.Image,{children:e.jsx(r,{image:{alt:"First Image"},src:t})}),e.jsx(a.Content,{header:"Test 1"})]}),e.jsxs(a,{children:[e.jsx(a.Image,{children:e.jsx(r,{image:{alt:"Portrait Image"},src:j})}),e.jsx(a.Content,{image:{alt:"Last Image"},header:"Test 2"})]}),e.jsxs(a,{children:[e.jsx(a.Image,{children:e.jsx(r,{})}),e.jsx(a.Content,{header:"Test 3"})]})]}),p=()=>e.jsx(r,{image:{alt:"Image"},src:"path/to/image.jpg"}),g=()=>e.jsx(r,{image:{alt:"Image"},preview:t,src:"path/to/image.jpg"}),d=()=>e.jsx(r,{image:{alt:"Image"},preview:"path/to/image.jpg",src:t}),l=()=>e.jsx(r,{image:{alt:"Image"},preview:"path/to/image.jpg",src:"path/to/image.jpg"}),I=()=>e.jsx(r,{downloadUrl:t,name:"Image.jpg",image:{alt:"Image"},src:t});s.__docgenInfo={description:"",methods:[],displayName:"Default"};m.__docgenInfo={description:"",methods:[],displayName:"Placeholder"};n.__docgenInfo={description:"",methods:[],displayName:"ExtraButtons"};i.__docgenInfo={description:"",methods:[],displayName:"CardContent"};c.__docgenInfo={description:"",methods:[],displayName:"ListContent"};p.__docgenInfo={description:"",methods:[],displayName:"ErrorSource"};g.__docgenInfo={description:"",methods:[],displayName:"ErrorSourceWithPreview"};d.__docgenInfo={description:"",methods:[],displayName:"ErrorPreview"};l.__docgenInfo={description:"",methods:[],displayName:"ErrorPreviewAndSource"};I.__docgenInfo={description:"",methods:[],displayName:"Downloadable"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <LazyImage image={{
  alt: 'Image'
}} src={image} />`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"() => <LazyImage />",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <LazyImage image={{
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
}} src={image} />`,...I.parameters?.docs?.source}}};const ie=["Default","Placeholder","ExtraButtons","CardContent","ListContent","ErrorSource","ErrorSourceWithPreview","ErrorPreview","ErrorPreviewAndSource","Downloadable"];export{i as CardContent,s as Default,I as Downloadable,d as ErrorPreview,l as ErrorPreviewAndSource,p as ErrorSource,g as ErrorSourceWithPreview,n as ExtraButtons,c as ListContent,m as Placeholder,ie as __namedExportsOrder,ne as default};
