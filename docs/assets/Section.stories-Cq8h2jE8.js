import{j as i}from"./jsx-runtime-D9TvR9R2.js";import{f as s}from"./index-xJp9Kd2E.js";import"./index-C0dDX-lL.js";import{d as h}from"./index-CO1YGyUu.js";import{_ as d}from"./index-default-C_maRo4o.js";import{N as a}from"./Number-D3yuhZId.js";import{D as v}from"./Divider-CUCHYA5N.js";import{H as x}from"./Header-BHdMo175.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZh2vnSw.js";import"./pickBy-CXM4uafe.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-Bu_b4Pek.js";import"./index-Cw1G72V2.js";import"./index-CKJfshIT.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./preview-errors-CzpZmerH.js";import"./debounce-Bq1aTuh-.js";import"./extends-CCbyfPlC.js";import"./getElementType-BSRayMAs.js";import"./Icon-C_3d7-zE.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./Label-aEFd48OX.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Cc_HXDPA.js";import"./toFinite-C3oJXAtX.js";import"./forEach-CLeEMxs1.js";import"./Dimmer-DP3fvqlo.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DOYXiIEK.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";const r=e=>e.visible?i.jsxs("div",{className:"section",children:[e.header&&i.jsx(x,{content:e.header}),e.children,i.jsx(v,{hidden:!e.divided})]}):null;r.defaultProps={divided:!0,header:void 0,visible:!0};r.__docgenInfo={description:"",methods:[],displayName:"Section",props:{children:{required:!0,flowType:{name:"Node"},description:""},divided:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},header:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"undefined",computed:!0}},visible:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const $={title:"Components/Semantic UI/Section",decorators:[h.withKnobs]},n=[];d.times(5,()=>{n.push({content:s.lorem.lines(a.getRandomInt(2,7)),header:s.random.words(a.getRandomInt(1,3))})});const o=()=>i.jsx("div",{children:d.map(n,e=>i.jsx(r,{header:e.header,children:e.content}))}),t=()=>i.jsx("div",{children:d.map(n,e=>i.jsx(r,{header:e.header,divided:!1,children:e.content}))});o.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"Undivided"};var m,p,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => <div>
    {_.map(sections, section => <Section header={section.header}>
        {section.content}
      </Section>)}
  </div>`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var l,u,f;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => <div>
    {_.map(sections, section => <Section header={section.header} divided={false}>
        {section.content}
      </Section>)}
  </div>`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const ee=["Default","Undivided"];export{o as Default,t as Undivided,ee as __namedExportsOrder,$ as default};