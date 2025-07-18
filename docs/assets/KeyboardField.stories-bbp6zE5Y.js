import{r as l,j as e}from"./iframe-BPWyo1ml.js";import{F as d}from"./Form-ClhUWp7q.js";import{E as h,A as y}from"./english-BQymWagN.js";import{y as f}from"./index.es27-qSesx2Cv.js";import{S as b}from"./Segment-nU24hujV.js";import{T as g}from"./Transition-B0lefbC1.js";import{i as c}from"./i18n-DkobdbHY.js";import{L as v}from"./LinkLabel-Pa_7-IsC.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-_MvlUdE4.js";import"./Button-4UTl3zWh.js";import"./Icon-jme1Xn38.js";import"./Label-BoodK5V_.js";import"./ModernAutoControlledComponent-YfVkZAu6.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-DPOpDRSZ.js";import"./toFinite-TVPM6KGA.js";import"./forEach-DkM9CNVk.js";import"./Dimmer-Cc_1Rffq.js";import"./Portal-CMKTsJj1.js";import"./keyboardKey-D0kxxHqZ.js";import"./map-PCFjh3mh.js";import"./Checkbox-C9s8UeCZ.js";import"./_baseSet-CdjV8XzC.js";import"./_baseAssignValue-B_GkWFP9.js";import"./Dropdown-BN9I38ur.js";import"./without-elm7P8Lj.js";import"./isArrayLikeObject-Bjky3Eyc.js";import"./isEmpty-BuKxTBqx.js";import"./deburr-DvXLs-DJ.js";import"./index-1knMejfY.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-B8Ew4z8i.js";import"./Input-CCAhbxsm.js";import"./i18next-eNuDfwAU.js";import"./LinkButton-0rBgVbzT.js";class a extends l.Component{static defaultProps;constructor(t){super(t),this.state={showKeyboard:!1}}componentDidUpdate(t){t.visible&&!this.props.visible&&this.setState({showKeyboard:!1})}onInputChange(t,s){this.props.onChange(t,s)}onKeyboardChange(t){this.props.onChange(null,{value:t})}render(){return e.jsxs(d.Field,{className:"keyboard-field",children:[e.jsx(d.Input,{autoFocus:this.props.autoFocus,className:this.props.className,error:this.props.error,id:this.props.id,input:{"aria-label":this.props.name},label:this.renderLabel(),name:this.props.name,onChange:this.onInputChange.bind(this),required:this.props.required,value:this.props.value,children:this.props.children}),e.jsx(g,{duration:{hide:50,show:500},visible:this.state.showKeyboard,children:e.jsx(b,{children:e.jsx(f,{layout:this.props.layout,onChange:this.onKeyboardChange.bind(this),value:this.props.value,keyboardClass:this.props.name})})})]})}renderLabel(){return e.jsx(v,{content:this.state.showKeyboard?c.t("KeyboardField.labels.hideKeyboard"):c.t("KeyboardField.labels.showKeyboard"),htmlFor:this.props.name,label:this.props.label,onClick:()=>this.setState(t=>({showKeyboard:!t.showKeyboard}))})}}a.defaultProps={autoFocus:!1,className:"",error:!1,id:""};a.__docgenInfo={description:"",methods:[{name:"onInputChange",docblock:`Triggers the text input change.

@param e
@param value`,modifiers:[],params:[{name:"e",optional:!1,type:{name:"Event",alias:"Event"}},{name:"value",optional:!1,type:{name:"any"}}],returns:null,description:"Triggers the text input change."},{name:"onKeyboardChange",docblock:`Triggers the keyboard input change.

@param value`,modifiers:[],params:[{name:"value",optional:!1,type:{name:"any"}}],returns:null,description:"Triggers the keyboard input change."},{name:"renderLabel",docblock:`Renders the input label.

@returns {*}`,modifiers:[],params:[],returns:{type:{name:"mixed"}},description:"Renders the input label."}],displayName:"KeyboardField",props:{autoFocus:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,flowType:{name:"Node",elements:[{name:"any"}],raw:"Node<any>"},description:""},className:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},error:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},label:{required:!0,flowType:{name:"string"},description:""},layout:{required:!0,flowType:{name:"any"},description:""},name:{required:!0,flowType:{name:"string"},description:""},onChange:{required:!0,flowType:{name:"signature",type:"function",raw:"(e: ?Event, { value: string }) => void",signature:{arguments:[{name:"e",type:{name:"Event",nullable:!0}},{name:"",type:{name:"signature",type:"object",raw:"{ value: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}}]}}}],return:{name:"void"}}},description:""},required:{required:!0,flowType:{name:"boolean"},description:""},value:{required:!0,flowType:{name:"string"},description:""},visible:{required:!0,flowType:{name:"boolean"},description:""}}};const se={title:"Components/Semantic UI/KeyboardField",component:a},i=()=>{const[r,t]=l.useState("");return e.jsx(d,{children:e.jsx(a,{id:"test-field",label:"Field",layout:h,name:"test-field",onChange:(s,u)=>t(u.value),value:r,children:e.jsx("input",{className:"english",type:"text"})})})},o=()=>{const[r,t]=l.useState(""),[s,u]=l.useState("");return e.jsxs(d,{children:[e.jsx(a,{id:"test-field-1",label:"Field",layout:h,name:"test-field-1",onChange:(p,m)=>t(m.value),value:r,children:e.jsx("input",{className:"english",type:"text"})}),e.jsx(a,{id:"test-field-2",label:"Field",layout:y,name:"test-field-2",onChange:(p,m)=>u(m.value),value:s,children:e.jsx("input",{className:"arabic",dir:"rtl",type:"text"})})]})},n=()=>{const[r,t]=l.useState(""),s={layout:{default:["` 1 2 3 4 5 6 7 8 9 0 ʾ ʿ — {bksp}","{tab} q w e r t y u i o p [ ] \\","{lock} a s d f g h j k l ; ' {enter}","{shift} z x c v b n m , . / {shift}",".com @ {space}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} Q W E R T Y U I O P { } |",'{lock} A S D F G H J K L : " {enter}',"{shift} Z X C V B N M < > ? {shift}",".com @ {space}"]},enableLayoutCandidates:!0,layoutCandidates:{a:"ā á à â",c:"ç",d:"ḍ",e:"ē é è æ ə",g:"ğ",h:"ḥ",i:"ī i ı í ï",k:"ḳ",o:"о̄ ö",s:"ṣ ş",t:"ṭ",u:"ū ü",z:"ẓ",A:"Ā Á À Â Ä",D:"Ḍ",G:"Ğ",H:"Ḥ",I:"Ī İ I Í Ï",K:"Ḳ",O:"Ō Ö",S:"Ṣ Ş",T:"Ṭ",U:"Ū Ü",Z:"Ẓ"}};return e.jsx(d,{children:e.jsx(a,{id:"test-field",label:"Field",layout:s,name:"test-field",onChange:(u,p)=>t(p.value),value:r,children:e.jsx("input",{className:"english",type:"text"})})})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"MultipleOnOneForm"};n.__docgenInfo={description:"",methods:[],displayName:"WithAlternativeCharacters"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <Form>
      <KeyboardField id='test-field' label='Field' layout={English} name='test-field' onChange={(e, data) => setValue(data.value)} value={value}>
        <input className='english' type='text' />
      </KeyboardField>
    </Form>;
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  return <Form>
      <KeyboardField id='test-field-1' label='Field' layout={English} name='test-field-1' onChange={(e, data) => setValue(data.value)} value={value}>
        <input className='english' type='text' />
      </KeyboardField>
      <KeyboardField id='test-field-2' label='Field' layout={Arabic} name='test-field-2' onChange={(e, data) => setValue2(data.value)} value={value2}>
        <input className='arabic' dir='rtl' type='text' />
      </KeyboardField>
    </Form>;
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
      <KeyboardField id='test-field' label='Field' layout={exampleTransliterationLayout} name='test-field' onChange={(e, data) => setValue(data.value)} value={value}>
        <input className='english' type='text' />
      </KeyboardField>
    </Form>;
}`,...n.parameters?.docs?.source}}};const ie=["Default","MultipleOnOneForm","WithAlternativeCharacters"];export{i as Default,o as MultipleOnOneForm,n as WithAlternativeCharacters,ie as __namedExportsOrder,se as default};
