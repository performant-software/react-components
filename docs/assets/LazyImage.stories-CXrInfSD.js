import{j as e}from"./iframe-Bo-cahqR.js";import{B as h}from"./Button-SB7fr7Z_.js";import{C as o}from"./Card-RnBQy6E3.js";import{I as a}from"./Item-B0O0SKCA.js";import{i as t}from"./test-image-BGrKnxUR.js";import{L as r}from"./LazyImage-CWfIxzH_.js";import{p as j}from"./portrait-test-image-CFX7vfGN.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CRLILEjs.js";import"./Icon-BdwMDjCJ.js";import"./Label-BKkK21JB.js";import"./ModernAutoControlledComponent-C-Nb76Z4.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CXYr5d8-.js";import"./toFinite-BW88qEh4.js";import"./forEach-BywSwlPE.js";import"./Dimmer-Dl7JFx23.js";import"./Portal-BP_gGsLc.js";import"./keyboardKey-Dtyxm7HZ.js";import"./map-DChe9iis.js";import"./LazyLoader-BJD-bC1R.js";import"./without-Cf7MvG2m.js";import"./isArrayLikeObject-DF49cagh.js";import"./index-DhYQIGjT.js";import"./Loader-D8Lm89N7.js";import"./Segment-HNBfq9sd.js";import"./Transition-BsoBFMYo.js";import"./_baseAssignValue-fIFIdof2.js";import"./filter-MJ4DOGaK.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";import"./DownloadButton-DdT2cGkm.js";import"./v4-BKrj-4V8.js";import"./PhotoViewer-CirUWVGf.js";import"./index.es28-Bra0ArD7.js";import"./Message-CMMkPfiM.js";import"./Modal-Cj6fW8y7.js";import"./index-B3Oe0SrK.js";import"./_baseSet-NwXeW_MD.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-C5Ivl5DO.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,ne={title:"Components/Semantic UI/LazyImage"},s=()=>e.jsx(r,{image:{alt:"Image"},src:t}),m=()=>e.jsx(r,{}),n=()=>e.jsxs(r,{image:{alt:"Test Image"},src:t,children:[e.jsx(h,{color:"green",content:"Edit photo",icon:"edit",onClick:u("edit")}),e.jsx(h,{color:"orange",content:"Change photo",icon:"move",onClick:u("change")}),e.jsx(h,{color:"red",content:"Delete photo",icon:"trash",onClick:u("delete")})]}),i=()=>e.jsxs(o.Group,{children:[e.jsxs(o,{children:[e.jsx(r,{image:{alt:"Test Image"},src:t}),e.jsx(o.Content,{header:"Test 1"})]}),e.jsxs(o,{children:[e.jsx(r,{image:{alt:"Portrait Image"},src:j}),e.jsx(o.Content,{header:"Test 2"})]}),e.jsxs(o,{children:[e.jsx(r,{image:{alt:"Last Image"}}),e.jsx(o.Content,{header:"Test 3"})]})]}),c=()=>e.jsxs(a.Group,{children:[e.jsxs(a,{children:[e.jsx(a.Image,{children:e.jsx(r,{image:{alt:"First Image"},src:t})}),e.jsx(a.Content,{header:"Test 1"})]}),e.jsxs(a,{children:[e.jsx(a.Image,{children:e.jsx(r,{image:{alt:"Portrait Image"},src:j})}),e.jsx(a.Content,{image:{alt:"Last Image"},header:"Test 2"})]}),e.jsxs(a,{children:[e.jsx(a.Image,{children:e.jsx(r,{})}),e.jsx(a.Content,{header:"Test 3"})]})]}),p=()=>e.jsx(r,{image:{alt:"Image"},src:"path/to/image.jpg"}),g=()=>e.jsx(r,{image:{alt:"Image"},preview:t,src:"path/to/image.jpg"}),d=()=>e.jsx(r,{image:{alt:"Image"},preview:"path/to/image.jpg",src:t}),l=()=>e.jsx(r,{image:{alt:"Image"},preview:"path/to/image.jpg",src:"path/to/image.jpg"}),I=()=>e.jsx(r,{downloadUrl:t,name:"Image.jpg",image:{alt:"Image"},src:t});s.__docgenInfo={description:"",methods:[],displayName:"Default"};m.__docgenInfo={description:"",methods:[],displayName:"Placeholder"};n.__docgenInfo={description:"",methods:[],displayName:"ExtraButtons"};i.__docgenInfo={description:"",methods:[],displayName:"CardContent"};c.__docgenInfo={description:"",methods:[],displayName:"ListContent"};p.__docgenInfo={description:"",methods:[],displayName:"ErrorSource"};g.__docgenInfo={description:"",methods:[],displayName:"ErrorSourceWithPreview"};d.__docgenInfo={description:"",methods:[],displayName:"ErrorPreview"};l.__docgenInfo={description:"",methods:[],displayName:"ErrorPreviewAndSource"};I.__docgenInfo={description:"",methods:[],displayName:"Downloadable"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <LazyImage image={{
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
