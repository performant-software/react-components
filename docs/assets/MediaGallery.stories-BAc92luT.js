import{j as i}from"./jsx-runtime-D9TvR9R2.js";import{r as m}from"./index-C0dDX-lL.js";import{a as v}from"./chunk-WFFRPTHA-B2vgThZf.js";import{d as j}from"./index-CRsHP5Wr.js";import{B as s}from"./Button-CJhT71wt.js";import{I}from"./Label-aEFd48OX.js";import{L as C}from"./Loader-lqR_Ikjg.js";import{D as w}from"./Dimmer-DP3fvqlo.js";import{T as N}from"./Transition-HA1Bivu3.js";import{P as f}from"./PlayButton-DKLYWYPA.js";import{V as P}from"./VideoPlayer-B8N1p8Z6.js";import{v as T}from"./SampleVideo-Bq74ahmY.js";import{w as k}from"./Images-Dhz5NNjv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./mapValues-BntjSFt6.js";import"./pickBy-CC7CsC_n.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-D9-U-Vjl.js";import"./index-Cw1G72V2.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./debounce-BANtZgGn.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BSRayMAs.js";import"./Icon-C_3d7-zE.js";import"./map-DWKMCCtW.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./toFinite-C3oJXAtX.js";import"./index-DOYXiIEK.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./includes-Cc_HXDPA.js";import"./forEach-CLeEMxs1.js";import"./_baseAssignValue-UQlBDUKN.js";import"./filter-B6f9p5im.js";import"./index.es33-CHDEcWUR.js";import"./iframe-CS4PTEZR.js";import"../sb-preview/runtime.js";import"./Message-smmiVK7n.js";import"./Modal-BWgkEMr1.js";import"./index-mbjjMjCk.js";import"./_baseSet-BllfnHSO.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-CY-Bv0TY.js";import"./i18n-C9xJ7SCg.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";import"./index-xJp9Kd2E.js";import"./index-default-C_maRo4o.js";import"./Number-D3yuhZId.js";const y=()=>i.jsx("div",{className:"icon video-player-button",children:i.jsx("div",{children:i.jsx(f,{})})});y.__docgenInfo={description:"",methods:[],displayName:"VideoPlayerButton"};const l=e=>{const[t,r]=m.useState(!1);return i.jsxs(w,{active:e.visible,className:"media-gallery mediaGallery",page:!0,children:[e.loading&&i.jsx(C,{active:!0,size:"big"}),e.item&&i.jsxs(i.Fragment,{children:[i.jsx(N,{animation:"fade",mountOnShow:!1,children:i.jsxs("div",{className:"imageContainer",children:[i.jsx(I,{src:e.item.image,style:{objectFit:"contain"}}),e.item.type==="video"&&i.jsx(f,{onClick:()=>r(!0),style:{position:"absolute",top:"50%"}})]})}),e.renderContent&&e.renderContent(),e.onClose&&i.jsx("div",{className:"controls top right",children:i.jsx(s,{basic:!0,circular:!0,icon:"times",inverted:!0,onClick:e.onClose,size:"large"})}),e.label&&i.jsx("div",{className:"controls top left",children:i.jsx(s,{basic:!0,content:e.label,inverted:!0,size:"large"})}),e.onPrevious&&i.jsx("div",{className:"controls middle left",children:i.jsx(s,{basic:!0,disabled:!e.onPrevious,inverted:!0,icon:"angle left",onClick:e.onPrevious,size:"huge"})}),e.onNext&&i.jsx("div",{className:"controls middle right",children:i.jsx(s,{basic:!0,disabled:!e.onNext,inverted:!0,icon:"angle right",onClick:e.onNext,size:"huge"})}),e.item.src&&i.jsx(P,{autoPlay:!0,embedded:e.item.embedded,icon:i.jsx(y,{}),onClose:()=>r(!1),open:t,placeholder:e.item.preview,size:"huge",video:e.item.src})]})]})};l.__docgenInfo={description:"",methods:[],displayName:"MediaGallery",props:{item:{required:!0,flowType:{name:"signature",type:"object",raw:`{
  image?: string,
  embedded?: boolean,
  preview?: string,
  src?: string,
  type: 'image' | 'video'
}`,signature:{properties:[{key:"image",value:{name:"string",required:!1}},{key:"embedded",value:{name:"boolean",required:!1}},{key:"preview",value:{name:"string",required:!1}},{key:"src",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:"'image' | 'video'",elements:[{name:"literal",value:"'image'"},{name:"literal",value:"'video'"}],required:!0}}]}},description:""},label:{required:!1,flowType:{name:"string"},description:""},loading:{required:!1,flowType:{name:"boolean"},description:""},onClose:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNext:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrevious:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},renderContent:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:""},visible:{required:!0,flowType:{name:"boolean"},description:""}}};const De={title:"Components/Semantic UI/MediaGallery",decorators:[j.withKnobs]},q=50,o=k(e=>{const[t,r]=m.useState(0),b=m.useCallback(()=>{let n=t+1;n>=e.images.length&&(n=0),r(n)},[t]),h=m.useCallback(()=>{let n=t-1;n<0&&(n=e.images.length-1),r(n)},[t]);return i.jsx(l,{item:e.images[t],label:`${t+1} of ${e.images.length}`,onClose:v("close"),onNext:b,onPrevious:h,renderContent:()=>e.images&&e.images[t]&&i.jsx("div",{style:{marginTop:"1em",textAlign:"center"},children:e.images[t].description}),visible:!0})},q),a=()=>i.jsx(l,{item:{src:T,type:"video"},onClose:v("close"),visible:!0});o.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"Video"};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`withImages(props => {
  const [index, setIndex] = useState(0);

  /**
   * Increments the image index.
   *
   * @type {(function(): void)|*}
   */
  const onNext = useCallback(() => {
    let nextIndex = index + 1;
    if (nextIndex >= props.images.length) {
      nextIndex = 0;
    }
    setIndex(nextIndex);
  }, [index]);

  /**
   * Decrements the image index.
   *
   * @type {(function(): void)|*}
   */
  const onPrevious = useCallback(() => {
    let nextIndex = index - 1;
    if (nextIndex < 0) {
      nextIndex = props.images.length - 1;
    }
    setIndex(nextIndex);
  }, [index]);
  return <MediaGallery item={props.images[index]} label={\`\${index + 1} of \${props.images.length}\`} onClose={action('close')} onNext={onNext} onPrevious={onPrevious} renderContent={() => props.images && props.images[index] && <div style={{
    marginTop: '1em',
    textAlign: 'center'
  }}>
          {props.images[index].description}
        </div>} visible />;
}, IMAGE_COUNT)`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,g,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => <MediaGallery item={{
  src: video,
  type: 'video'
}} onClose={action('close')} visible />`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const Be=["Default","Video"];export{o as Default,a as Video,Be as __namedExportsOrder,De as default};
