var w=Object.defineProperty;var T=(a,e,r)=>e in a?w(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r;var h=(a,e,r)=>(T(a,typeof e!="symbol"?e+"":e,r),r);import{j as t}from"./jsx-runtime-D9TvR9R2.js";import{r as u}from"./index-C0dDX-lL.js";import{d as i}from"./index-Dr18q9sk.js";import{F as d}from"./Form-WfNl3YLh.js";import{E as K,A as j}from"./english-BQymWagN.js";import{y as k}from"./index.es33-BN_FNjO4.js";import{S as N}from"./Segment-BqjJDZFO.js";import{T as S}from"./Transition-HA1Bivu3.js";import{i as f}from"./i18n-C9xJ7SCg.js";import{L as V}from"./LinkLabel-USOx2Fdy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-BXr-GEgA.js";import"./pickBy-ILmh4CwI.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-CVmyTvcu.js";import"./index-Cw1G72V2.js";import"./index-CKJfshIT.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./preview-errors-CzpZmerH.js";import"./debounce-C2QphL08.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BSRayMAs.js";import"./Button-CJhT71wt.js";import"./Icon-C_3d7-zE.js";import"./Label-aEFd48OX.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Cc_HXDPA.js";import"./toFinite-C3oJXAtX.js";import"./forEach-CLeEMxs1.js";import"./Dimmer-DP3fvqlo.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DOYXiIEK.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-DWKMCCtW.js";import"./Checkbox-B3tsCUtI.js";import"./_baseSet-BllfnHSO.js";import"./_baseAssignValue-UQlBDUKN.js";import"./Dropdown-DwNow7wJ.js";import"./without-Duh6Zu7H.js";import"./isArrayLikeObject-Bl_bAmop.js";import"./isEmpty-CY-Bv0TY.js";import"./deburr-CNLr_JRW.js";import"./index-mbjjMjCk.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-B6f9p5im.js";import"./Input-Bwh_HEb3.js";import"./iframe-rTIsyeEF.js";import"../sb-preview/runtime.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";import"./LinkButton-BJA6L28z.js";class n extends u.Component{constructor(e){super(e),this.state={showKeyboard:!1}}componentDidUpdate(e){e.visible&&!this.props.visible&&this.setState({showKeyboard:!1})}onInputChange(e,r){this.props.onChange(e,r)}onKeyboardChange(e){this.props.onChange(null,{value:e})}render(){return t.jsxs(d.Field,{className:"keyboard-field",children:[t.jsx(d.Input,{autoFocus:this.props.autoFocus,className:this.props.className,error:this.props.error,id:this.props.id,input:{"aria-label":this.props.name},label:this.renderLabel(),name:this.props.name,onChange:this.onInputChange.bind(this),required:this.props.required,value:this.props.value,children:this.props.children}),t.jsx(S,{duration:{hide:50,show:500},visible:this.state.showKeyboard,children:t.jsx(N,{children:t.jsx(k,{layout:this.props.layout,onChange:this.onKeyboardChange.bind(this),value:this.props.value,keyboardClass:this.props.name})})})]})}renderLabel(){return t.jsx(V,{content:this.state.showKeyboard?f.t("KeyboardField.labels.hideKeyboard"):f.t("KeyboardField.labels.showKeyboard"),htmlFor:this.props.name,label:this.props.label,onClick:()=>this.setState(e=>({showKeyboard:!e.showKeyboard}))})}}h(n,"defaultProps");n.defaultProps={autoFocus:!1,className:"",error:!1,id:""};n.__docgenInfo={description:"",methods:[{name:"onInputChange",docblock:`Triggers the text input change.

@param e
@param value`,modifiers:[],params:[{name:"e",optional:!1,type:{name:"Event",alias:"Event"}},{name:"value",optional:!1,type:{name:"any"}}],returns:null,description:"Triggers the text input change."},{name:"onKeyboardChange",docblock:`Triggers the keyboard input change.

@param value`,modifiers:[],params:[{name:"value",optional:!1,type:{name:"any"}}],returns:null,description:"Triggers the keyboard input change."},{name:"renderLabel",docblock:`Renders the input label.

@returns {*}`,modifiers:[],params:[],returns:{type:{name:"mixed"}},description:"Renders the input label."}],displayName:"KeyboardField",props:{autoFocus:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,flowType:{name:"Node",elements:[{name:"any"}],raw:"Node<any>"},description:""},className:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},error:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},label:{required:!0,flowType:{name:"string"},description:""},layout:{required:!0,flowType:{name:"any"},description:""},name:{required:!0,flowType:{name:"string"},description:""},onChange:{required:!0,flowType:{name:"signature",type:"function",raw:"(e: ?Event, { value: string }) => void",signature:{arguments:[{name:"e",type:{name:"Event",nullable:!0}},{name:"",type:{name:"signature",type:"object",raw:"{ value: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}}]}}}],return:{name:"void"}}},description:""},required:{required:!0,flowType:{name:"boolean"},description:""},value:{required:!0,flowType:{name:"string"},description:""},visible:{required:!0,flowType:{name:"boolean"},description:""}}};const Be={title:"Components/Semantic UI/KeyboardField",decorators:[i.withKnobs]},o=()=>{const[a,e]=u.useState("");return t.jsx(d,{children:t.jsx(n,{id:"test-field",label:i.text("Field name","Field"),layout:K,name:"test-field",onChange:(r,p)=>e(p.value),required:i.boolean("Required",!1),value:a,children:t.jsx("input",{className:"english",type:"text"})})})},s=()=>{const[a,e]=u.useState(""),[r,p]=u.useState("");return t.jsxs(d,{children:[t.jsx(n,{id:"test-field-1",label:i.text("Field name","Field"),layout:K,name:"test-field-1",onChange:(m,c)=>e(c.value),required:i.boolean("Required",!1),value:a,children:t.jsx("input",{className:"english",type:"text"})}),t.jsx(n,{id:"test-field-2",label:i.text("Field name","Field"),layout:j,name:"test-field-2",onChange:(m,c)=>p(c.value),required:i.boolean("Required",!1),value:r,children:t.jsx("input",{className:"arabic",dir:"rtl",type:"text"})})]})},l=()=>{const[a,e]=u.useState(""),r={layout:{default:["` 1 2 3 4 5 6 7 8 9 0 ʾ ʿ — {bksp}","{tab} q w e r t y u i o p [ ] \\","{lock} a s d f g h j k l ; ' {enter}","{shift} z x c v b n m , . / {shift}",".com @ {space}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} Q W E R T Y U I O P { } |",'{lock} A S D F G H J K L : " {enter}',"{shift} Z X C V B N M < > ? {shift}",".com @ {space}"]},enableLayoutCandidates:!0,layoutCandidates:{a:"ā á à â",c:"ç",d:"ḍ",e:"ē é è æ ə",g:"ğ",h:"ḥ",i:"ī i ı í ï",k:"ḳ",o:"о̄ ö",s:"ṣ ş",t:"ṭ",u:"ū ü",z:"ẓ",A:"Ā Á À Â Ä",D:"Ḍ",G:"Ğ",H:"Ḥ",I:"Ī İ I Í Ï",K:"Ḳ",O:"Ō Ö",S:"Ṣ Ş",T:"Ṭ",U:"Ū Ü",Z:"Ẓ"}};return t.jsx(d,{children:t.jsx(n,{id:"test-field",label:i.text("Field name","Field"),layout:r,name:"test-field",onChange:(p,m)=>e(m.value),required:i.boolean("Required",!1),value:a,children:t.jsx("input",{className:"english",type:"text"})})})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"MultipleOnOneForm"};l.__docgenInfo={description:"",methods:[],displayName:"WithAlternativeCharacters"};var b,y,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <Form>
      <KeyboardField id='test-field' label={text('Field name', 'Field')} layout={English} name='test-field' onChange={(e, data) => setValue(data.value)} required={boolean('Required', false)} value={value}>
        <input className='english' type='text' />
      </KeyboardField>
    </Form>;
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var g,v,F;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  return <Form>
      <KeyboardField id='test-field-1' label={text('Field name', 'Field')} layout={English} name='test-field-1' onChange={(e, data) => setValue(data.value)} required={boolean('Required', false)} value={value}>
        <input className='english' type='text' />
      </KeyboardField>
      <KeyboardField id='test-field-2' label={text('Field name', 'Field')} layout={Arabic} name='test-field-2' onChange={(e, data) => setValue2(data.value)} required={boolean('Required', false)} value={value2}>
        <input className='arabic' dir='rtl' type='text' />
      </KeyboardField>
    </Form>;
}`,...(F=(v=s.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var C,E,q;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  const exampleTransliterationLayout = {
    layout: {
      default: ['\` 1 2 3 4 5 6 7 8 9 0 ʾ ʿ — {bksp}', '{tab} q w e r t y u i o p [ ] \\\\', "{lock} a s d f g h j k l ; ' {enter}", '{shift} z x c v b n m , . / {shift}', '.com @ {space}'],
      shift: ['~ ! @ # $ % ^ & * ( ) _ + {bksp}', '{tab} Q W E R T Y U I O P { } |', '{lock} A S D F G H J K L : " {enter}', '{shift} Z X C V B N M < > ? {shift}', '.com @ {space}']
    },
    enableLayoutCandidates: true,
    layoutCandidates: {
      a: 'ā á à â',
      c: 'ç',
      d: 'ḍ',
      e: 'ē é è æ ə',
      g: 'ğ',
      h: 'ḥ',
      i: 'ī i ı í ï',
      k: 'ḳ',
      o: 'о̄ ö',
      s: 'ṣ ş',
      t: 'ṭ',
      u: 'ū ü',
      z: 'ẓ',
      A: 'Ā Á À Â Ä',
      D: 'Ḍ',
      G: 'Ğ',
      H: 'Ḥ',
      I: 'Ī İ I Í Ï',
      K: 'Ḳ',
      O: 'Ō Ö',
      S: 'Ṣ Ş',
      T: 'Ṭ',
      U: 'Ū Ü',
      Z: 'Ẓ'
    }
  };
  return <Form>
      <KeyboardField id='test-field' label={text('Field name', 'Field')} layout={exampleTransliterationLayout} name='test-field' onChange={(e, data) => setValue(data.value)} required={boolean('Required', false)} value={value}>
        <input className='english' type='text' />
      </KeyboardField>
    </Form>;
}`,...(q=(E=l.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};const Ue=["Default","MultipleOnOneForm","WithAlternativeCharacters"];export{o as Default,s as MultipleOnOneForm,l as WithAlternativeCharacters,Ue as __namedExportsOrder,Be as default};
