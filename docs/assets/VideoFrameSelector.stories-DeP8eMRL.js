import{j as e}from"./jsx-runtime-D9TvR9R2.js";import{r as o}from"./index-C0dDX-lL.js";import{L as C}from"./LazyVideo-DEsp3LMe.js";import{o as L}from"./index.es30-DrDY2wIT.js";import{G as x}from"./Grid-CpdbEkBf.js";import{B as s}from"./Button-CJhT71wt.js";import{I as T}from"./Input-Bwh_HEb3.js";import{L as M}from"./Label-aEFd48OX.js";import{S as R}from"./Segment-BqjJDZFO.js";import{M as p}from"./Modal-BWgkEMr1.js";import{i as l}from"./i18n-CM1tepcX.js";import{M as _}from"./ModalContext-CLCyDZFr.js";import{w as E}from"./withTranslation-f2mLX_0O.js";import{v as S}from"./SampleVideo-Bq74ahmY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./LazyLoader-DWAGao17.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BSRayMAs.js";import"./forEach-CLeEMxs1.js";import"./without-Duh6Zu7H.js";import"./isArrayLikeObject-Bl_bAmop.js";import"./includes-Cc_HXDPA.js";import"./toFinite-C3oJXAtX.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-DOYXiIEK.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./Loader-lqR_Ikjg.js";import"./Icon-C_3d7-zE.js";import"./Dimmer-DP3fvqlo.js";import"./Transition-HA1Bivu3.js";import"./_baseAssignValue-UQlBDUKN.js";import"./filter-B6f9p5im.js";import"./DownloadButton-D6fD4vKQ.js";import"./uuid-BH6G0oTz.js";import"./VideoPlayer-DBwLID5H.js";import"./Message-smmiVK7n.js";import"./map-DWKMCCtW.js";import"./iframe-DpUBYvKd.js";import"../sb-preview/runtime.js";import"./index-mbjjMjCk.js";import"./_baseSet-BllfnHSO.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-CY-Bv0TY.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";import"./slicedToArray-DCh25bEK.js";import"./nonIterableRest-QXsEjLJN.js";import"./objectWithoutProperties--RY0eV0u.js";import"./utils-DCllE6BU.js";import"./createClass-D0eOxKhW.js";const N=1,k=1,A=300,g=r=>{const[c,u]=o.useState(0),[d,w]=o.useState(r.defaultInterval),[i,v]=o.useState(0),[F,f]=o.useState(!1),n=o.useRef(null);return o.useEffect(()=>{n.current&&(n.current.currentTime=i)},[i]),e.jsxs(e.Fragment,{children:[e.jsx(s,{...r.button,onClick:()=>f(!0)}),e.jsx(_.Consumer,{children:I=>e.jsxs(p,{centered:!1,className:"video-frame-selector",mountNode:I,open:F,size:"small",children:[e.jsx(p.Header,{content:r.title}),e.jsxs(p.Content,{children:[e.jsx(R,{children:e.jsx("video",{crossOrigin:"anonymous",onLoadedMetadata:()=>n.current&&u(n.current.duration),ref:n,src:r.src})}),e.jsxs(x,{columns:2,children:[e.jsxs(x.Column,{children:[e.jsx("div",{children:e.jsx(M,{content:l.t("VideoFrameSelector.labels.interval",{count:d})})}),e.jsx(T,{"aria-label":"Interval Selector",min:k,max:A,name:"duration",onChange:(a,{value:t})=>w(Number(t)),step:N,type:"range",value:d})]}),e.jsxs(x.Column,{textAlign:"right",children:[e.jsx(s,{"aria-label":"Previous Frame",basic:!0,disabled:i===0,icon:"arrow left",onClick:()=>v(Math.max(i-d,0))}),e.jsx(s,{"aria-label":"Next Frame",basic:!0,disabled:i===c,icon:"arrow right",onClick:()=>v(Math.min(i+d,c))})]})]})]}),e.jsxs(p.Actions,{children:[e.jsx(s,{content:l.t("Common.buttons.ok"),primary:!0,onClick:()=>{const a=n.current;if(a&&L.isBrowser()){const t=document.createElement("canvas");t.width=a.videoWidth,t.height=a.videoHeight,t.getContext("2d").drawImage(a,0,0,t.width,t.height),t.toBlob(h=>{const y=new File([h],"test.png",{lastModified:new Date().getTime(),type:h.type});r.onSelect(y),f(!1)})}}}),e.jsx(s,{basic:!0,content:l.t("Common.buttons.cancel"),onClick:()=>f(!1)})]})]})})]})};g.defaultProps={button:{basic:!0,content:l.t("VideoFrameSelector.buttons.select"),icon:"image"},defaultInterval:15,title:l.t("VideoFrameSelector.title")};const q=E()(g);g.__docgenInfo={description:"",methods:[],displayName:"VideoFrameSelector",props:{button:{required:!1,flowType:{name:"any"},description:"",defaultValue:{value:`{
  basic: true,
  content: i18n.t('VideoFrameSelector.buttons.select'),
  icon: 'image'
}`,computed:!1}},defaultInterval:{required:!1,flowType:{name:"number"},description:"",defaultValue:{value:"15",computed:!1}},onSelect:{required:!0,flowType:{name:"signature",type:"function",raw:"(file: File) => void",signature:{arguments:[{name:"file",type:{name:"File"}}],return:{name:"void"}}},description:""},src:{required:!0,flowType:{name:"string"},description:""},title:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"i18n.t('VideoFrameSelector.title')",computed:!0}}}};const Pe={title:"Components/Semantic UI/VideoFrameSelector"},m=()=>{const[r,c]=o.useState(null);return e.jsxs(e.Fragment,{children:[e.jsx(C,{preview:r,src:S}),e.jsx(q,{onSelect:u=>c(URL.createObjectURL(u)),src:S})]})};m.__docgenInfo={description:"",methods:[],displayName:"Default"};var j,b,V;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [image, setImage] = useState(null);
  return <>
      <LazyVideo preview={image} src={video} />
      <VideoFrameSelector onSelect={file => setImage(URL.createObjectURL(file))} src={video} />
    </>;
}`,...(V=(b=m.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};const Ge=["Default"];export{m as Default,Ge as __namedExportsOrder,Pe as default};
