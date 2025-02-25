import{j as a}from"./jsx-runtime-D9TvR9R2.js";import{r as o}from"./index-C0dDX-lL.js";import{R as v,A as y,P as C,C as w}from"./index-CpbeRJko.js";import{I as r}from"./Icon-xn5eBWjd.js";import{i as c}from"./i18n-O47xwIR-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DOYXiIEK.js";import"./floating-ui.react-dom-BUm7GwT3.js";import"./component-Cj9xgufj.js";import"./clsx-B-dksMZM.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";const j=e=>a.jsxs("button",{className:"flex gap-2 items-center text-sm bg-neutral-200 px-1.5 py-0.5 rounded-[5px]",onClick:e.onClick,type:"button",children:[e.value.label,a.jsx(r,{name:"close",size:10})]}),x=e=>{const[l,i]=o.useState(!1),[u,m]=o.useState(""),t=n=>o.useCallback(e.values.some(g=>g.value===n.value),[e.values]),d=o.useCallback(n=>{m(n),i(!0),e.onSearch(n)},[e.onSearch]);return a.jsxs("div",{className:"w-full flex flex-col gap-3 py-4",children:[(e.icon||e.label)&&a.jsxs("div",{className:"flex gap-2 items-center justify-center w-full",children:[e.icon&&a.jsx(r,{className:"fill-neutral-800",name:e.icon,size:16}),e.label&&a.jsx("span",{className:"text-neutral-800 grow font-semibold",children:e.label})]}),a.jsxs(v,{open:l,children:[a.jsx(y,{asChild:!0,children:a.jsxs("div",{className:"flex items-center justify-center gap-1 pr-2 pl-3 rounded-[5px] bg-white w-full min-h-10 border focus-within:border-primary",children:[a.jsxs("div",{className:"grow flex gap-1 flex-wrap p-2",children:[e.values.map(n=>a.jsx(j,{onClick:()=>e.onChange(n),value:n})),a.jsx("input",{className:"focus:outline-none w-full",placeholder:e.values.length===0?e.placeholder||c.t("Combobox.select"):void 0,onChange:n=>d(n.target.value),value:u})]}),a.jsxs("div",{className:"flex gap-2 h-full",children:[e.onClear&&e.values.length>0&&a.jsx("button",{"aria-label":c.t("Combobox.clearValues"),className:"rounded-full",onClick:e.onClear,type:"button",children:a.jsx(r,{name:"close"})}),a.jsx("button",{"aria-label":l?c.t("Combobox.collapse"):c.t("Combobox.expand"),className:"flex items-center justify-center h-8 w-8 rounded-full",onClick:()=>i(!l),type:"button",children:a.jsx(r,{name:"down"})})]})]})}),a.jsx(C,{children:a.jsx(w,{className:"bg-white shadow-md radix-combobox-content max-h-[200px] overflow-y-auto",children:e.options.map(n=>a.jsxs("button",{className:"p-2 cursor-pointer hover:bg-neutral-200 w-full flex gap-2 items-center",onClick:()=>e.onChange(n),type:"button",children:[a.jsx(r,{name:t(n)?"checkbox_filled":"checkbox"}),n.label]},n.value))})})]})]})},f=x;x.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{icon:{required:!1,flowType:{name:"string"},description:"(Optional) Name of the icon to show above the combobox"},label:{required:!1,flowType:{name:"string"},description:"(Optional) Label to show above the combobox"},onChange:{required:!0,flowType:{name:"signature",type:"function",raw:"(val: string) => any",signature:{arguments:[{name:"val",type:{name:"string"}}],return:{name:"any"}}},description:"Callback fired when the combobox selection changes."},onClear:{required:!0,flowType:{name:"signature",type:"function",raw:"(val: string) => any",signature:{arguments:[{name:"val",type:{name:"string"}}],return:{name:"any"}}},description:"Callback fired when the combobox selection is cleared."},onSearch:{required:!0,flowType:{name:"signature",type:"function",raw:"(val: string) => any",signature:{arguments:[{name:"val",type:{name:"string"}}],return:{name:"any"}}},description:"Callback fired when the user searches."},options:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string,
  value: string
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Array<Option>"},description:"Columns to display in the table."},placeholder:{required:!1,flowType:{name:"string"},description:`(Optional) Placeholder text to show when no
value is selected.`},values:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string,
  value: string
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Array<Option>"},description:"Controlled value of the combobox."}}};const L={title:"Components/Core Data/Combobox",component:f},S=[{label:"USA",value:"usa"},{label:"United Kingdom",value:"united_kingdom"},{label:"France",value:"france"},{label:"Mexico",value:"mexico"},{label:"Canada",value:"canada"},{label:"Brazil",value:"brazil"},{label:"Spain",value:"spain"},{label:"Andorra",value:"andorra"},{label:"Earth",value:"earth"}],s=()=>{const[e,l]=o.useState([]),i=t=>{e.includes(t)?l(e.filter(d=>d!==t)):l([...e,t])},u=()=>l([]),m=t=>{console.log(t)};return a.jsx("div",{className:"w-80 bg-neutral-200 flex items-center justify-center p-8",children:a.jsx(f,{options:S,onChange:i,onClear:u,onSearch:m,icon:"location",label:"Countries",placeholder:"Select countries",values:e})})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};var b,h,p;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [values, setValues] = useState([]);
  const onChange = val => {
    if (values.includes(val)) {
      setValues(values.filter(c => c !== val));
    } else {
      setValues([...values, val]);
    }
  };
  const onClear = () => setValues([]);
  const onSearch = (query: string) => {
    console.log(query);
  };
  return <div className='w-80 bg-neutral-200 flex items-center justify-center p-8'>
      <Combobox options={OPTIONS} onChange={onChange} onClear={onClear} onSearch={onSearch} icon='location' label='Countries' placeholder='Select countries' values={values} />
    </div>;
}`,...(p=(h=s.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const M=["Default"];export{s as Default,M as __namedExportsOrder,L as default};
