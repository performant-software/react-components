import{j as i}from"./jsx-runtime-BTCK_S7S.js";import{r as m}from"./index-CBqU2yxZ.js";import{a as v}from"./chunk-WFFRPTHA-B2vgThZf.js";import{d as j}from"./index-hzn_AknP.js";import{B as s}from"./Button-BDcCO5f8.js";import{I}from"./Label-Cq1fb1cd.js";import{L as C}from"./Loader-CooidObp.js";import{D as w}from"./Dimmer-D_gwaesu.js";import{T as N}from"./Transition-DSFEXhCu.js";import{P as f}from"./PlayButton-CrCoJTwb.js";import{V as P}from"./VideoPlayer-CmPOF49E.js";import{v as T}from"./SampleVideo-Bq74ahmY.js";import{w as k}from"./Images-DFvK9Yjz.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./mapValues-BQxZ7nrE.js";import"./pickBy-JNbKYqv1.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-BoCILj_Q.js";import"./index-Cw1G72V2.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./debounce-DmjZtjd2.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CckcRzoH.js";import"./Icon-2tEtgK8g.js";import"./map-B4PnIEPz.js";import"./Portal-DvhHJPzU.js";import"./keyboardKey-OMDgGVm3.js";import"./ModernAutoControlledComponent-DJBWk5EW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./toFinite-KQ8KevIC.js";import"./index-DZGZymok.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./includes-CQoJOerW.js";import"./forEach-CXlln0XP.js";import"./_baseAssignValue-izmKBXUH.js";import"./filter-CVNi8iPS.js";import"./Message-3p6wyYpA.js";import"./Modal-BnyapSFx.js";import"./index-BBpNyw-T.js";import"./_baseSet-6y0qliU9.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-Cyb9hIKi.js";import"./ModalContext-Bu-D9kD-.js";import"./i18n-C8zWlANG.js";import"./i18next-Sc0HEOoc.js";import"./toPropertyKey-hKuLU48H.js";import"./defineProperty-CCxoMnQV.js";import"./inherits-D5wXBZoG.js";import"./createClass-D2z1h_eG.js";import"./getPrototypeOf-BYVhAdwF.js";import"./index-xJp9Kd2E.js";import"./index-default-C_maRo4o.js";import"./Number-D3yuhZId.js";const y=()=>i.jsx("div",{className:"icon video-player-button",children:i.jsx("div",{children:i.jsx(f,{})})});y.__docgenInfo={description:"",methods:[],displayName:"VideoPlayerButton"};const l=e=>{const[t,r]=m.useState(!1);return i.jsxs(w,{active:e.visible,className:"media-gallery mediaGallery",page:!0,children:[e.loading&&i.jsx(C,{active:!0,size:"big"}),e.item&&i.jsxs(i.Fragment,{children:[i.jsx(N,{animation:"fade",mountOnShow:!1,children:i.jsxs("div",{className:"imageContainer",children:[i.jsx(I,{src:e.item.image,style:{objectFit:"contain"}}),e.item.type==="video"&&i.jsx(f,{onClick:()=>r(!0),style:{position:"absolute",top:"50%"}})]})}),e.renderContent&&e.renderContent(),e.onClose&&i.jsx("div",{className:"controls top right",children:i.jsx(s,{basic:!0,circular:!0,icon:"times",inverted:!0,onClick:e.onClose,size:"large"})}),e.label&&i.jsx("div",{className:"controls top left",children:i.jsx(s,{basic:!0,content:e.label,inverted:!0,size:"large"})}),e.onPrevious&&i.jsx("div",{className:"controls middle left",children:i.jsx(s,{basic:!0,disabled:!e.onPrevious,inverted:!0,icon:"angle left",onClick:e.onPrevious,size:"huge"})}),e.onNext&&i.jsx("div",{className:"controls middle right",children:i.jsx(s,{basic:!0,disabled:!e.onNext,inverted:!0,icon:"angle right",onClick:e.onNext,size:"huge"})}),e.item.src&&i.jsx(P,{autoPlay:!0,embedded:e.item.embedded,icon:i.jsx(y,{}),onClose:()=>r(!1),open:t,placeholder:e.item.preview,size:"huge",video:e.item.src})]})]})};l.__docgenInfo={description:"",methods:[],displayName:"MediaGallery",props:{item:{required:!0,flowType:{name:"signature",type:"object",raw:`{
  image?: string,
  embedded?: boolean,
  preview?: string,
  src?: string,
  type: 'image' | 'video'
}`,signature:{properties:[{key:"image",value:{name:"string",required:!1}},{key:"embedded",value:{name:"boolean",required:!1}},{key:"preview",value:{name:"string",required:!1}},{key:"src",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:"'image' | 'video'",elements:[{name:"literal",value:"'image'"},{name:"literal",value:"'video'"}],required:!0}}]}},description:""},label:{required:!1,flowType:{name:"string"},description:""},loading:{required:!1,flowType:{name:"boolean"},description:""},onClose:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNext:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrevious:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},renderContent:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:""},visible:{required:!0,flowType:{name:"boolean"},description:""}}};const Se={title:"Components/Semantic UI/MediaGallery",decorators:[j.withKnobs]},q=50,o=k(e=>{const[t,r]=m.useState(0),b=m.useCallback(()=>{let n=t+1;n>=e.images.length&&(n=0),r(n)},[t]),h=m.useCallback(()=>{let n=t-1;n<0&&(n=e.images.length-1),r(n)},[t]);return i.jsx(l,{item:e.images[t],label:`${t+1} of ${e.images.length}`,onClose:v("close"),onNext:b,onPrevious:h,renderContent:()=>e.images&&e.images[t]&&i.jsx("div",{style:{marginTop:"1em",textAlign:"center"},children:e.images[t].description}),visible:!0})},q),a=()=>i.jsx(l,{item:{src:T,type:"video"},onClose:v("close"),visible:!0});o.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"Video"};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`withImages(props => {
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
}} onClose={action('close')} visible />`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const ze=["Default","Video"];export{o as Default,a as Video,ze as __namedExportsOrder,Se as default};
