import{r as i,j as r}from"./iframe-DlkFaX8z.js";import{F as n}from"./FacetSlider-BVbOePGS.js";import"./index.es28-DMkb6T92.js";import"./index.es12-D5UKL4Jz.js";import"./index-CFVA5LlQ.js";import"./floating-ui.react-dom-D5slb_ts.js";import"./clsx-B-dksMZM.js";import"./index-default-B8-H6N8J.js";import"./chevron-right-DPOSvbE7.js";import"./createLucideIcon-D53UkhmV.js";const v={title:"Components/Core Data/FacetSlider",component:n},a=()=>{const[e,t]=i.useState([1500,2010]);return r.jsx(n,{min:1500,max:2010,onValueChange:t,value:e})},s=()=>{const[e,t]=i.useState([1500,2010]);return r.jsx("div",{className:"bg-gray-1000 text-white fill-white py-7 rounded-md",children:r.jsx(n,{classNames:{button:"px-4",range:"bg-white",thumb:"bg-white",track:"bg-gray-400"},min:1500,max:2010,onValueChange:t,value:e})})},o=()=>{const[e,t]=i.useState([1500,2010]);return r.jsx(n,{min:1500,max:2010,onValueChange:t,position:"right",value:e})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};o.__docgenInfo={description:"",methods:[],displayName:"TooltipPosition"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState([1500, 2010]);
  return <FacetSlider min={1500} max={2010} onValueChange={setValue} value={value} />;
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState([1500, 2010]);
  return <div className='bg-gray-1000 text-white fill-white py-7 rounded-md'>
      <FacetSlider classNames={{
      button: 'px-4',
      range: 'bg-white',
      thumb: 'bg-white',
      track: 'bg-gray-400'
    }} min={1500} max={2010} onValueChange={setValue} value={value} />
    </div>;
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState([1500, 2010]);
  return <FacetSlider min={1500} max={2010} onValueChange={setValue} position='right' value={value} />;
}`,...o.parameters?.docs?.source}}};const V=["Default","CustomStyles","TooltipPosition"];export{s as CustomStyles,a as Default,o as TooltipPosition,V as __namedExportsOrder,v as default};
