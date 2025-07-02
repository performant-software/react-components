import{j as i}from"./jsx-runtime-D9TvR9R2.js";import{r as m}from"./index-C0dDX-lL.js";import{a as c}from"./chunk-WFFRPTHA-B2vgThZf.js";import{d as k}from"./index-BhYrHZI3.js";import{B as l}from"./Button-Dcib8V--.js";import{I as q}from"./Label-BqnFaqey.js";import{L as T}from"./Loader-DQkWekFb.js";import{D as _}from"./Dimmer-kmE_IUk6.js";import{T as P}from"./Transition-Bkcp4SUV.js";import{P as C}from"./PlayButton-B2cC4j-T.js";import{V as E}from"./VideoPlayer-BOogByio.js";import{v as j}from"./SampleVideo-Bq74ahmY.js";import{w as V}from"./Images-Dhz5NNjv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./mapValues-D3_G9G1-.js";import"./pickBy-DUChpz9o.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-BA1gv6s5.js";import"./index-Cw1G72V2.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./debounce-DCsWsFoO.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-C_4y_n4F.js";import"./Icon-BGzIEILD.js";import"./map-Dr4OE-Ab.js";import"./Portal-CKYxdKwP.js";import"./keyboardKey-OMDgGVm3.js";import"./ModernAutoControlledComponent-CBEnGjal.js";import"./assertThisInitialized-B9jnkVVz.js";import"./toFinite-DWd2HYc9.js";import"./index-DOYXiIEK.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./includes-BAV9TYTx.js";import"./forEach-Bj9nU5MO.js";import"./_baseAssignValue-oMV-Qdk1.js";import"./filter-BXgalVMq.js";import"./index.es34-CKA3wZ_D.js";import"./iframe-BIcG7a4I.js";import"../sb-preview/runtime.js";import"./Message-BUccNRJp.js";import"./Modal-B0p4Zslq.js";import"./index-C2Sldg7a.js";import"./_baseSet-N8oZ1kqS.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-D4udnfVx.js";import"./index-default-C_maRo4o.js";import"./i18n-C9xJ7SCg.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";import"./index-xJp9Kd2E.js";import"./Number-D3yuhZId.js";const I=()=>i.jsx("div",{className:"icon video-player-button",children:i.jsx("div",{children:i.jsx(C,{})})});I.__docgenInfo={description:"",methods:[],displayName:"VideoPlayerButton"};const d=e=>{const[t,r]=m.useState(!1);return i.jsxs(_,{active:e.visible,className:"media-gallery mediaGallery",page:!0,children:[e.loading&&i.jsx(T,{active:!0,size:"big"}),e.item&&i.jsxs(i.Fragment,{children:[i.jsx(P,{animation:"fade",mountOnShow:!1,children:i.jsxs("div",{className:"imageContainer",children:[i.jsx(q,{src:e.item.image,style:{objectFit:"contain"}}),e.item.type==="video"&&i.jsx(C,{onClick:()=>r(!0),style:{position:"absolute",top:"50%"}})]})}),e.renderContent&&e.renderContent(),e.onClose&&i.jsx("div",{className:"controls top right",children:i.jsx(l,{basic:!0,circular:!0,icon:"times",inverted:!0,onClick:e.onClose,size:"large"})}),e.label&&i.jsx("div",{className:"controls top left",children:i.jsx(l,{basic:!0,content:e.label,inverted:!0,size:"large"})}),e.onPrevious&&i.jsx("div",{className:"controls middle left",children:i.jsx(l,{basic:!0,disabled:!e.onPrevious,inverted:!0,icon:"angle left",onClick:e.onPrevious,size:"huge"})}),e.onNext&&i.jsx("div",{className:"controls middle right",children:i.jsx(l,{basic:!0,disabled:!e.onNext,inverted:!0,icon:"angle right",onClick:e.onNext,size:"huge"})}),e.item.src&&i.jsx(E,{autoPlay:!0,embedded:e.item.embedded,icon:i.jsx(I,{}),onClose:()=>r(!1),open:t,placeholder:e.item.preview,size:"huge",transcriptions:e.item.transcriptions,video:e.item.src})]})]})};d.__docgenInfo={description:"",methods:[],displayName:"MediaGallery",props:{item:{required:!0,flowType:{name:"signature",type:"object",raw:`{
  image?: string,
  embedded?: boolean,
  preview?: string,
  src?: string,
  transcriptions?: Array<Transcription>,
  type: 'image' | 'video'
}`,signature:{properties:[{key:"image",value:{name:"string",required:!1}},{key:"embedded",value:{name:"boolean",required:!1}},{key:"preview",value:{name:"string",required:!1}},{key:"src",value:{name:"string",required:!1}},{key:"transcriptions",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  default?: boolean,
  label: string,
  language: string,
  src: string
}`,signature:{properties:[{key:"default",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"language",value:{name:"string",required:!0}},{key:"src",value:{name:"string",required:!0}}]}}],raw:"Array<Transcription>",required:!1}},{key:"type",value:{name:"union",raw:"'image' | 'video'",elements:[{name:"literal",value:"'image'"},{name:"literal",value:"'video'"}],required:!0}}]}},description:""},label:{required:!1,flowType:{name:"string"},description:""},loading:{required:!1,flowType:{name:"boolean"},description:""},onClose:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNext:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrevious:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},renderContent:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:""},visible:{required:!0,flowType:{name:"boolean"},description:""}}};const $e={title:"Components/Semantic UI/MediaGallery",decorators:[k.withKnobs]},G=50,o=V(e=>{const[t,r]=m.useState(0),w=m.useCallback(()=>{let n=t+1;n>=e.images.length&&(n=0),r(n)},[t]),N=m.useCallback(()=>{let n=t-1;n<0&&(n=e.images.length-1),r(n)},[t]);return i.jsx(d,{item:e.images[t],label:`${t+1} of ${e.images.length}`,onClose:c("close"),onNext:w,onPrevious:N,renderContent:()=>e.images&&e.images[t]&&i.jsx("div",{style:{marginTop:"1em",textAlign:"center"},children:e.images[t].description}),visible:!0})},G),a=()=>i.jsx(d,{item:{src:j,type:"video"},onClose:c("close"),visible:!0}),s=()=>i.jsx(d,{item:{src:j,transcriptions:[{label:"English",language:"en",src:"/src/assets/test.vtt"}],type:"video"},onClose:c("close"),visible:!0});o.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"Video"};s.__docgenInfo={description:"",methods:[],displayName:"VideoWithCaptions"};var u,p,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`withImages(props => {
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
}, IMAGE_COUNT)`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,v,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => <MediaGallery item={{
  src: video,
  type: 'video'
}} onClose={action('close')} visible />`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,b,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => <MediaGallery item={{
  src: video,
  transcriptions: [{
    label: 'English',
    language: 'en',
    src: '/src/assets/test.vtt'
  }],
  type: 'video'
}} onClose={action('close')} visible />`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const Ue=["Default","Video","VideoWithCaptions"];export{o as Default,a as Video,s as VideoWithCaptions,Ue as __namedExportsOrder,$e as default};
