import{j as n,r as m}from"./iframe-CzTKQtwy.js";import{B as d}from"./Button--NGNXnVS.js";import{I as y}from"./Label-B-l2ijAg.js";import{L as f}from"./Loader-IA9Qo_y-.js";import{D as b}from"./Dimmer-Q0LFw4i9.js";import{T as h}from"./Transition-VSSipuVE.js";import{P as u}from"./PlayButton-Dmj_6x3r.js";import{V as C}from"./VideoPlayer-B4vlx4a5.js";import{v as g}from"./SampleVideo-Bq74ahmY.js";import{w as j}from"./Images-DjgGbu3V.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-dK_c-8MW.js";import"./Icon-hqQ-O3cc.js";import"./map-C0IFJOBr.js";import"./Portal-BtQOZ0m3.js";import"./keyboardKey-DIZTOt9c.js";import"./ModernAutoControlledComponent-Dwt6aSwo.js";import"./assertThisInitialized-B9jnkVVz.js";import"./toFinite-yrFDs8ZQ.js";import"./includes-DxCwRlkS.js";import"./forEach-BAPHVc-N.js";import"./_baseAssignValue-Cv_kTUCQ.js";import"./filter-BiR7e3Y1.js";import"./index.es28-COdC-vOI.js";import"./Message-CNN3R1PJ.js";import"./Modal-DgLIOkP6.js";import"./index-CVb2dOXX.js";import"./_baseSet-BUC1EQLg.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-_53ie87J.js";import"./index-B6ZH4A4R.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";import"./index-DIguL7K7.js";import"./index-default-B8-H6N8J.js";import"./Number-D3yuhZId.js";const p=()=>n.jsx("div",{className:"icon video-player-button",children:n.jsx("div",{children:n.jsx(u,{})})});p.__docgenInfo={description:"",methods:[],displayName:"VideoPlayerButton"};const l=e=>{const[i,r]=m.useState(!1);return n.jsxs(b,{active:e.visible,className:"media-gallery mediaGallery",page:!0,children:[e.loading&&n.jsx(f,{active:!0,size:"big"}),e.item&&n.jsxs(n.Fragment,{children:[n.jsx(h,{animation:"fade",mountOnShow:!1,children:n.jsxs("div",{className:"imageContainer",children:[n.jsx(y,{src:e.item.image,style:{objectFit:"contain"}}),e.item.type==="video"&&n.jsx(u,{onClick:()=>r(!0),style:{position:"absolute",top:"50%"}})]})}),e.renderContent&&e.renderContent(),e.onClose&&n.jsx("div",{className:"controls top right",children:n.jsx(d,{basic:!0,circular:!0,icon:"times",inverted:!0,onClick:e.onClose,size:"large"})}),e.label&&n.jsx("div",{className:"controls top left",children:n.jsx(d,{basic:!0,content:e.label,inverted:!0,size:"large"})}),e.onPrevious&&n.jsx("div",{className:"controls middle left",children:n.jsx(d,{basic:!0,disabled:!e.onPrevious,inverted:!0,icon:"angle left",onClick:e.onPrevious,size:"huge"})}),e.onNext&&n.jsx("div",{className:"controls middle right",children:n.jsx(d,{basic:!0,disabled:!e.onNext,inverted:!0,icon:"angle right",onClick:e.onNext,size:"huge"})}),e.item.src&&n.jsx(C,{autoPlay:!0,embedded:e.item.embedded,icon:n.jsx(p,{}),onClose:()=>r(!1),open:i,placeholder:e.item.preview,size:"huge",transcriptions:e.item.transcriptions,video:e.item.src})]})]})};l.__docgenInfo={description:"",methods:[],displayName:"MediaGallery",props:{item:{required:!0,flowType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"default",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"language",value:{name:"string",required:!0}},{key:"src",value:{name:"string",required:!0}}]}}],raw:"Array<Transcription>",required:!1}},{key:"type",value:{name:"union",raw:"'image' | 'video'",elements:[{name:"literal",value:"'image'"},{name:"literal",value:"'video'"}],required:!0}}]}},description:""},label:{required:!1,flowType:{name:"string"},description:""},loading:{required:!1,flowType:{name:"boolean"},description:""},onClose:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNext:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrevious:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},renderContent:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:""},visible:{required:!0,flowType:{name:"boolean"},description:""}}};const{action:c}=__STORYBOOK_MODULE_ACTIONS__,de={title:"Components/Semantic UI/MediaGallery",component:l},I=50,a=j(e=>{const[i,r]=m.useState(0),x=m.useCallback(()=>{let t=i+1;t>=e.images.length&&(t=0),r(t)},[i]),v=m.useCallback(()=>{let t=i-1;t<0&&(t=e.images.length-1),r(t)},[i]);return n.jsx(l,{item:e.images[i],label:`${i+1} of ${e.images.length}`,onClose:c("close"),onNext:x,onPrevious:v,renderContent:()=>e.images&&e.images[i]&&n.jsx("div",{style:{marginTop:"1em",textAlign:"center"},children:e.images[i].description}),visible:!0})},I),s=()=>n.jsx(l,{item:{src:g,type:"video"},onClose:c("close"),visible:!0}),o=()=>n.jsx(l,{item:{src:g,transcriptions:[{label:"English",language:"en",src:"/src/assets/test.vtt"}],type:"video"},onClose:c("close"),visible:!0});a.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"Video"};o.__docgenInfo={description:"",methods:[],displayName:"VideoWithCaptions"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`withImages(props => {
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
}, IMAGE_COUNT)`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <MediaGallery item={{
  src: video,
  type: 'video'
}} onClose={action('close')} visible />`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <MediaGallery item={{
  src: video,
  transcriptions: [{
    label: 'English',
    language: 'en',
    src: '/src/assets/test.vtt'
  }],
  type: 'video'
}} onClose={action('close')} visible />`,...o.parameters?.docs?.source}}};const me=["Default","Video","VideoWithCaptions"];export{a as Default,s as Video,o as VideoWithCaptions,me as __namedExportsOrder,de as default};
