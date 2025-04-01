import{j as t}from"./jsx-runtime-D9TvR9R2.js";import"./index.es33-CGBswEUv.js";import{r as l}from"./index-C0dDX-lL.js";import{T as v}from"./index.es11-CDIfCsDR.js";import{R as y,T as x,a as k,P as w,b as j,c as C,d as N,C as q,A as T}from"./index-DphhVPUj.js";import{c as i}from"./clsx-B-dksMZM.js";import{_ as o}from"./index-default-C_maRo4o.js";import{C as p,a as V}from"./chevron-right-DnfwX419.js";const h=e=>{const[m,c]=l.useState(!1),[d,s]=l.useState(!1),{clearTimer:b,setTimer:u}=v();return l.useEffect(()=>{m&&(s(!0),b(),u(()=>s(!1)))},[e.value]),l.useEffect(()=>{m||c(!0)},[e.value]),t.jsx(w,{children:t.jsxs(j,{open:d,children:[t.jsx(C,{asChild:!0,children:t.jsx(N,{className:i("block h-5 w-5 rounded-full bg-gray-600","focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-30",e.className),onFocus:()=>s(!0),onBlur:()=>s(!1),onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1)})}),t.jsxs(q,{side:e.position,sideOffset:5,children:[t.jsx("div",{className:"bg-white p-2 text-black rounded-md shadow-md shadow-gray-1000",children:e.value}),t.jsx(T,{className:"fill-white"})]})]})})};h.defaultProps={position:"top"};const g=l.forwardRef((e,m)=>{const{clearTimer:c,setTimer:d}=v(),s=l.useCallback(()=>{const[a,n]=e.value;let r=a-e.step;r<e.min&&(r=e.min),e.onValueChange([r,n]),e.onValueCommit&&(c(),d(()=>e.onValueCommit([r,n])))},[e.min,e.onValueChange,e.onValueCommit,e.step,e.value]),b=l.useCallback(()=>{const[a,n]=e.value;let r=n+e.step;r>e.max&&(r=e.max),e.onValueChange([a,r]),e.onValueCommit&&(c(),d(()=>e.onValueCommit([a,r])))},[e.max,e.onValueChange,e.onValueCommit,e.step,e.value]),u=l.useMemo(()=>{var a;return(a=e.actions)==null?void 0:a.filter(n=>!n.position||n.position==="bottom")},[e.actions]),f=l.useMemo(()=>{var a;return(a=e.actions)==null?void 0:a.filter(n=>n.position==="right")},[e.actions]);return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:i("flex","justify-between","items-center","pt-4",o.isEmpty(f)?"":"px-4",o.isEmpty(u)&&e.ticks?"pb-7":""),children:[!e.hideStepButtons&&t.jsx("button",{"aria-label":"Slider Left",className:i("px-3","py-3","disabled:opacity-50","disabled:hover:bg-transparent",e.classNames.button),onClick:s,type:"button",children:t.jsx(p,{})}),t.jsxs(y,{className:i("relative flex flex-grow h-5 touch-none items-center w-full",e.classNames.root),max:e.max,min:e.min,minStepsBetweenThumbs:1,onValueChange:e.onValueChange,onValueCommit:e.onValueCommit,ref:m,step:1,value:e.value,children:[t.jsx(x,{className:i("relative h-1 w-full grow bg-gray-100",e.classNames.track),children:t.jsx(k,{className:i("absolute h-full bg-gray-600",e.classNames.range)})}),e.ticks&&t.jsxs("svg",{className:"absolute mt-12 z-0 !overflow-visible",width:"100%",height:40,overflow:"visible",shapeRendering:"crispEdges",children:[o.map(e.ticks.major,({value:a,xOffset:n})=>t.jsxs("g",{transform:`translate(${n}, 0)`,children:[t.jsx("line",{y2:10,stroke:"currentColor"}),t.jsx("text",{className:"translate-y-8",style:{textAnchor:"middle"},fill:"currentColor",children:a},a)]},a)),o.map(e.ticks.minor,({value:a,xOffset:n})=>t.jsx("g",{transform:`translate(${n}, 0)`,children:t.jsx("line",{y2:5,stroke:"currentColor"})},a))]}),t.jsx(h,{className:e.classNames.thumb,position:e.position,value:e.value[0]}),t.jsx(h,{className:e.classNames.thumb,position:e.position,value:e.value[1]})]}),!e.hideStepButtons&&t.jsx("button",{"aria-label":"Slider Right",className:i("px-3","py-3","disabled:opacity-50","disabled:hover:bg-transparent",e.classNames.button),onClick:b,type:"button",children:t.jsx(V,{})}),!o.isEmpty(f)&&t.jsx("div",{className:i("flex justify-center items-center py-3 text-gray-600",e.classNames.reset),children:o.map(f,(a,n)=>t.jsx("button",{"aria-label":a.label,className:i("p-3","disabled:opacity-50","disabled:hover:bg-transparent",a.className),disabled:a.disabled,onClick:a.onClick,type:"button",children:a.icon},n))})]}),!e.ticks&&t.jsxs("div",{className:"flex justify-between w-full px-12",children:[t.jsx("div",{children:e.min}),t.jsx("div",{children:e.max})]}),!o.isEmpty(u)&&t.jsx("div",{className:i("flex justify-center items-center w-full py-3 text-gray-600",e.classNames.zoom),children:o.map(u,(a,n)=>t.jsx("button",{"aria-label":a.label,className:i("p-3","disabled:opacity-50","disabled:hover:bg-transparent",e.ticks?"mt-5":"",a.className),disabled:a.disabled,onClick:a.onClick,type:"button",children:a.icon},n))})]})});g.defaultProps={classNames:{},step:1,value:[]};const F=g;g.__docgenInfo={description:"",methods:[],displayName:"FacetSlider",props:{actions:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Class name to apply to the button element.
   */
  className?: string,

  /**
   * (Optional) boolean to conditionally disable the action.
   */
  disabled?: boolean,

  /**
   * (Optional) icon to render inside the button element.
   */
  icon?: JSX.Element,

  /**
   * Button label.
   */
  label: string,

  /**
   * Position of the action relative to the slider.
   */
  position?: 'right' | 'bottom',

  /**
   * Callback fired when the button is clicked.
   */
  onClick: () => void
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1},description:"Class name to apply to the button element."},{key:"disabled",value:{name:"boolean",required:!1},description:"(Optional) boolean to conditionally disable the action."},{key:"icon",value:{name:"JSX.Element",required:!1},description:"(Optional) icon to render inside the button element."},{key:"label",value:{name:"string",required:!0},description:"Button label."},{key:"position",value:{name:"union",raw:"'right' | 'bottom'",elements:[{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"}],required:!1},description:"Position of the action relative to the slider."},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0},description:"Callback fired when the button is clicked."}]}}],raw:"Array<Action>"},description:"Custom actions to render as buttons."},classNames:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  button: string,
  range: string,
  root: string,
  thumb: string,
  track: string,
  reset: string,
  zoom: string
}`,signature:{properties:[{key:"button",value:{name:"string",required:!0}},{key:"range",value:{name:"string",required:!0}},{key:"root",value:{name:"string",required:!0}},{key:"thumb",value:{name:"string",required:!0}},{key:"track",value:{name:"string",required:!0}},{key:"reset",value:{name:"string",required:!0}},{key:"zoom",value:{name:"string",required:!0}}]}},description:"Custom Tailwind CSS class names.",defaultValue:{value:"{}",computed:!1}},hideStepButtons:{required:!1,flowType:{name:"boolean"},description:"True if the step buttons should be hidden."},max:{required:!1,flowType:{name:"number"},description:"The maximum facet value."},min:{required:!1,flowType:{name:"number"},description:"The minimum facet value."},onValueChange:{required:!0,flowType:{name:"signature",type:"function",raw:"(value: [number, number]) => void",signature:{arguments:[{name:"value",type:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}}],return:{name:"void"}}},description:"Callback fired when the range is changed."},onValueCommit:{required:!1,flowType:{name:"signature",type:"function",raw:"(value: [number, number]) => void",signature:{arguments:[{name:"value",type:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}}],return:{name:"void"}}},description:"Callback fired when the range is done changing."},position:{required:!1,flowType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Position of the value tooltip marker."},step:{required:!1,flowType:{name:"number"},description:"Number of steps to increment the slider.",defaultValue:{value:"1",computed:!1}},ticks:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  major: Array<Tick>,
  minor?: Array<Tick>,
}`,signature:{properties:[{key:"major",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: number,
  xOffset: number,
}`,signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"xOffset",value:{name:"number",required:!0}}]}}],raw:"Array<Tick>",required:!0}},{key:"minor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: number,
  xOffset: number,
}`,signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"xOffset",value:{name:"number",required:!0}}]}}],raw:"Array<Tick>",required:!1}}]}},description:"Ticks to render below the slider."},value:{required:!1,flowType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"Value for controlled input.",defaultValue:{value:"[]",computed:!1}}}};export{F};
