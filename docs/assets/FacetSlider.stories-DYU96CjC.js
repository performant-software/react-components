import{j as s}from"./jsx-runtime-D9TvR9R2.js";import{r as i}from"./index-C0dDX-lL.js";import{F as n}from"./FacetSlider-LJKBm_O5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index.es33-C3uOHfCU.js";import"./index-DOYXiIEK.js";import"./iframe-0DLZV6SF.js";import"../sb-preview/runtime.js";import"./index.es11-CDIfCsDR.js";import"./index-DphhVPUj.js";import"./floating-ui.react-dom-BUm7GwT3.js";import"./clsx-B-dksMZM.js";import"./index-default-C_maRo4o.js";import"./chevron-right-DnfwX419.js";import"./createLucideIcon-Cly0WHBx.js";const P={title:"Components/Core Data/FacetSlider",component:n},a=()=>{const[e,t]=i.useState([1500,2010]);return s.jsx(n,{min:1500,max:2010,onValueChange:t,value:e})},o=()=>{const[e,t]=i.useState([1500,2010]);return s.jsx("div",{className:"bg-gray-1000 text-white fill-white py-7 rounded-md",children:s.jsx(n,{classNames:{button:"px-4",range:"bg-white",thumb:"bg-white",track:"bg-gray-400"},min:1500,max:2010,onValueChange:t,value:e})})},r=()=>{const[e,t]=i.useState([1500,2010]);return s.jsx(n,{min:1500,max:2010,onValueChange:t,position:"right",value:e})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};r.__docgenInfo={description:"",methods:[],displayName:"TooltipPosition"};var m,u,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [value, setValue] = useState([1500, 2010]);
  return <FacetSlider min={1500} max={2010} onValueChange={setValue} value={value} />;
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var c,p,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [value, setValue] = useState([1500, 2010]);
  return <div className='bg-gray-1000 text-white fill-white py-7 rounded-md'>
      <FacetSlider classNames={{
      button: 'px-4',
      range: 'bg-white',
      thumb: 'bg-white',
      track: 'bg-gray-400'
    }} min={1500} max={2010} onValueChange={setValue} value={value} />
    </div>;
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,h,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [value, setValue] = useState([1500, 2010]);
  return <FacetSlider min={1500} max={2010} onValueChange={setValue} position='right' value={value} />;
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const T=["Default","CustomStyles","TooltipPosition"];export{o as CustomStyles,a as Default,r as TooltipPosition,T as __namedExportsOrder,P as default};
