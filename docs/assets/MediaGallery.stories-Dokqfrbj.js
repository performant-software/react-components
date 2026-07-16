import{j as n,r as m}from"./iframe-Dh9sgUpq.js";import{B as d}from"./Button-BW5bPNnW.js";import{I as y}from"./Label-Bo6azEc2.js";import{L as f}from"./Loader-D41Zlcvy.js";import{D as b}from"./Dimmer-B48fuewG.js";import{T as h}from"./Transition-CgTdmYTt.js";import{P as u}from"./PlayButton-DOAEqlgh.js";import{V as C}from"./VideoPlayer-Crayr_Nf.js";import{v as g}from"./SampleVideo-Bq74ahmY.js";import{w as j}from"./Images-rdTWTmWf.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BOa7Z56o.js";import"./_getPrototype-dFVwFHqx.js";import"./Icon-lekhSa4x.js";import"./map-Ccqzkkhu.js";import"./Portal-BfO7jr1_.js";import"./keyboardKey-CGp_nnHN.js";import"./ModernAutoControlledComponent-DR2uLhLR.js";import"./assertThisInitialized-B9jnkVVz.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./includes-BYxib7lt.js";import"./forEach--q4dx8jk.js";import"./_arrayEach-DpGxo2Of.js";import"./_baseAssignValue-yJv1-bft.js";import"./filter-stojC0mR.js";import"./index.es28-ClGGhP_v.js";import"./Message-CUhF5y31.js";import"./Modal-DQE8eeAm.js";import"./index-B5RqLgX3.js";import"./_baseSet-S7wwy84w.js";import"./_assignValue-wlBxhqFj.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-CIv_nSFx.js";import"./index-Dt36bpg4.js";import"./index-default-C0I3bBxV.js";import"./i18n-C0aeT7bv.js";import"./i18next-eNuDfwAU.js";import"./index-DIguL7K7.js";import"./index-default-B8-H6N8J.js";import"./Number-D3yuhZId.js";const p=()=>n.jsx("div",{className:"icon video-player-button",children:n.jsx("div",{children:n.jsx(u,{})})});p.__docgenInfo={description:"",methods:[],displayName:"VideoPlayerButton"};const l=e=>{const[i,r]=m.useState(!1);return n.jsxs(b,{active:e.visible,className:"media-gallery mediaGallery",page:!0,children:[e.loading&&n.jsx(f,{active:!0,size:"big"}),e.item&&n.jsxs(n.Fragment,{children:[n.jsx(h,{animation:"fade",mountOnShow:!1,children:n.jsxs("div",{className:"imageContainer",children:[n.jsx(y,{src:e.item.image,style:{objectFit:"contain"}}),e.item.type==="video"&&n.jsx(u,{onClick:()=>r(!0),style:{position:"absolute",top:"50%"}})]})}),e.renderContent&&e.renderContent(),e.onClose&&n.jsx("div",{className:"controls top right",children:n.jsx(d,{basic:!0,circular:!0,icon:"times",inverted:!0,onClick:e.onClose,size:"large"})}),e.label&&n.jsx("div",{className:"controls top left",children:n.jsx(d,{basic:!0,content:e.label,inverted:!0,size:"large"})}),e.onPrevious&&n.jsx("div",{className:"controls middle left",children:n.jsx(d,{basic:!0,disabled:!e.onPrevious,inverted:!0,icon:"angle left",onClick:e.onPrevious,size:"huge"})}),e.onNext&&n.jsx("div",{className:"controls middle right",children:n.jsx(d,{basic:!0,disabled:!e.onNext,inverted:!0,icon:"angle right",onClick:e.onNext,size:"huge"})}),e.item.src&&n.jsx(C,{autoPlay:!0,embedded:e.item.embedded,icon:n.jsx(p,{}),onClose:()=>r(!1),open:i,placeholder:e.item.preview,size:"huge",transcriptions:e.item.transcriptions,video:e.item.src})]})]})};l.__docgenInfo={description:"",methods:[],displayName:"MediaGallery",props:{item:{required:!0,flowType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"default",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"language",value:{name:"string",required:!0}},{key:"src",value:{name:"string",required:!0}}]}}],raw:"Array<Transcription>",required:!1}},{key:"type",value:{name:"union",raw:"'image' | 'video'",elements:[{name:"literal",value:"'image'"},{name:"literal",value:"'video'"}],required:!0}}]}},description:""},label:{required:!1,flowType:{name:"string"},description:""},loading:{required:!1,flowType:{name:"boolean"},description:""},onClose:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNext:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrevious:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},renderContent:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:""},visible:{required:!0,flowType:{name:"boolean"},description:""}}};const{action:c}=__STORYBOOK_MODULE_ACTIONS__,ge={title:"Components/Semantic UI/MediaGallery",component:l},I=50,o=j(e=>{const[i,r]=m.useState(0),x=m.useCallback(()=>{let t=i+1;t>=e.images.length&&(t=0),r(t)},[i]),v=m.useCallback(()=>{let t=i-1;t<0&&(t=e.images.length-1),r(t)},[i]);return n.jsx(l,{item:e.images[i],label:`${i+1} of ${e.images.length}`,onClose:c("close"),onNext:x,onPrevious:v,renderContent:()=>e.images&&e.images[i]&&n.jsx("div",{style:{marginTop:"1em",textAlign:"center"},children:e.images[i].description}),visible:!0})},I),a=()=>n.jsx(l,{item:{src:g,type:"video"},onClose:c("close"),visible:!0}),s=()=>n.jsx(l,{item:{src:g,transcriptions:[{label:"English",language:"en",src:"/src/assets/test.vtt"}],type:"video"},onClose:c("close"),visible:!0});o.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"Video"};s.__docgenInfo={description:"",methods:[],displayName:"VideoWithCaptions"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`withImages(props => {
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
}, IMAGE_COUNT)`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <MediaGallery item={{
  src: video,
  type: 'video'
}} onClose={action('close')} visible />`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <MediaGallery item={{
  src: video,
  transcriptions: [{
    label: 'English',
    language: 'en',
    src: '/src/assets/test.vtt'
  }],
  type: 'video'
}} onClose={action('close')} visible />`,...s.parameters?.docs?.source}}};const pe=["Default","Video","VideoWithCaptions"];export{o as Default,a as Video,s as VideoWithCaptions,pe as __namedExportsOrder,ge as default};
