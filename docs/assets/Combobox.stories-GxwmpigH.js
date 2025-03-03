import{j as a}from"./jsx-runtime-D9TvR9R2.js";import{r}from"./index-C0dDX-lL.js";import{_ as k}from"./index-default-C_maRo4o.js";import{R as L,A as O,P,C as B}from"./index-CpbeRJko.js";import{c as T}from"./clsx-B-dksMZM.js";import{I as u}from"./Icon-xn5eBWjd.js";import{i as g}from"./i18n-O47xwIR-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DOYXiIEK.js";import"./floating-ui.react-dom-BUm7GwT3.js";import"./component-Cj9xgufj.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";const q=e=>a.jsxs("button",{className:"flex gap-2 items-center text-xs bg-neutral-200 px-2 py-1 rounded-[5px]",onClick:e.onClick,type:"button",children:[a.jsx("span",{className:"text-left",children:e.value.label}),a.jsx(u,{name:"close",size:10})]}),N=e=>{const[t,s]=r.useState(!1),[p,i]=r.useState(""),l=r.useCallback(n=>e.values.some(f=>f.value===n.value),[e.values]),c=r.useCallback(n=>{i(n),s(!0),e.onSearch(n)},[e.onSearch]);return a.jsxs("div",{className:T("flex flex-col w-full gap-3",e.className),children:[(e.icon||e.label)&&a.jsxs("div",{className:"flex gap-2 items-center justify-center w-full",children:[e.icon&&a.jsx(u,{className:"fill-neutral-800",name:e.icon,size:16}),e.label&&a.jsx("span",{className:"text-neutral-800 grow font-semibold",children:e.label})]}),a.jsxs(L,{open:t,children:[a.jsx(O,{asChild:!0,children:a.jsxs("div",{className:`
              flex 
              items-center 
              justify-center 
              gap-1
              rounded-[5px]
              bg-white 
              min-h-10 
              border 
              focus-within:border-primary
            `,children:[a.jsxs("div",{className:"grow flex gap-1 flex-wrap p-2",children:[e.values.map(n=>a.jsx(q,{onClick:()=>e.onChange(n),value:n})),a.jsx("input",{className:"focus:outline-none w-full",placeholder:e.values.length===0?e.placeholder||g.t("Combobox.select"):void 0,onChange:n=>c(n.target.value),value:p})]}),a.jsxs("div",{className:"flex h-full gap-x-1 pe-2",children:[e.onClear&&e.values.length>0&&a.jsx("button",{"aria-label":g.t("Combobox.clearValues"),className:"flex items-center justify-center rounded-full hover:bg-transparent p-0",onClick:e.onClear,type:"button",children:a.jsx(u,{name:"close"})}),a.jsx("button",{"aria-label":t?g.t("Combobox.collapse"):g.t("Combobox.expand"),className:"flex items-center justify-center rounded-full hover:bg-transparent p-0",onClick:()=>s(!t),type:"button",children:a.jsx(u,{name:"down"})})]})]})}),a.jsx(P,{children:a.jsx(B,{className:"bg-white shadow-md radix-combobox-content max-h-[200px] overflow-y-auto text-sm",children:e.options.map(n=>a.jsxs("button",{className:"p-2 cursor-pointer hover:bg-neutral-200 w-full flex gap-2 items-center",onClick:()=>e.onChange(n),type:"button",children:[a.jsx(u,{name:l(n)?"checkbox_filled":"checkbox"}),a.jsx("span",{className:"truncate",title:n.label,children:n.label})]},n.value))})})]})]})},x=N;N.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{className:{required:!1,flowType:{name:"string"},description:"(Optional) class name to apply to the root element."},icon:{required:!1,flowType:{name:"string"},description:"(Optional) Name of the icon to show above the combobox."},label:{required:!1,flowType:{name:"string"},description:"(Optional) Label to show above the combobox."},onChange:{required:!0,flowType:{name:"signature",type:"function",raw:"(val: string) => any",signature:{arguments:[{name:"val",type:{name:"string"}}],return:{name:"any"}}},description:"Callback fired when the combobox selection changes."},onClear:{required:!0,flowType:{name:"signature",type:"function",raw:"(val: string) => any",signature:{arguments:[{name:"val",type:{name:"string"}}],return:{name:"any"}}},description:"Callback fired when the combobox selection is cleared."},onSearch:{required:!0,flowType:{name:"signature",type:"function",raw:"(val: string) => any",signature:{arguments:[{name:"val",type:{name:"string"}}],return:{name:"any"}}},description:"Callback fired when the user searches."},options:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string,
  value: string
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Array<Option>"},description:"Columns to display in the table."},placeholder:{required:!1,flowType:{name:"string"},description:`(Optional) Placeholder text to show when no
value is selected.`},values:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string,
  value: string
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Array<Option>"},description:"Controlled value of the combobox."}}};const Z={title:"Components/Core Data/Combobox",component:x},D=[{label:"USA",value:"usa"},{label:"United Kingdom",value:"united_kingdom"},{label:"France",value:"france"},{label:"Mexico",value:"mexico"},{label:"Canada",value:"canada"},{label:"Brazil",value:"brazil"},{label:"Spain",value:"spain"},{label:"Andorra",value:"andorra"},{label:"Earth",value:"earth"}],m=()=>{const[e,t]=r.useState([]),s=l=>{e.includes(l)?t(e.filter(c=>c!==l)):t([...e,l])},p=()=>t([]),i=l=>{console.log(l)};return a.jsx("div",{className:"w-80 bg-neutral-200 flex items-center justify-center p-8",children:a.jsx(x,{options:D,onChange:s,onClear:p,onSearch:i,icon:"location",label:"Countries",placeholder:"Select countries",values:e})})},d=()=>{const[e,t]=r.useState([]),s=o=>{const{value:h}=o;k.findWhere(e,{value:h})?t(e.filter(b=>b.value!==h)):t([...e,o])},i=["Bill Blackbeard","Long Bill Ginger","Large John","Dreadful John","Cutthroat Bill The Long","John Greyhate","Bill Largeparrot","First Mate John The Dreadful","Dread Pirate Pete","Captain Pete","Sir John Long","The Large Pirate","Pete Bones","Cap'n Dreadful","Pete Longbrand","Pete De","Admiral Bill","Johnplank","Large Bill The Pirate","Black Bill The Feared","Lorem ipsum odor amet, consectetuer adipiscing elit.","El Independiente"].map(o=>({label:o,value:o})),[l,c]=r.useState(i),n=()=>t([]),f=o=>{o&&o.length?c(l.filter(h=>{var b;return(b=h.label)==null?void 0:b.toLowerCase().startsWith(o.toLowerCase())})):c(i)};return a.jsx("div",{className:"w-[170px] border border-black/20 p-2",children:a.jsx(x,{options:l,onChange:s,onClear:n,onSearch:f,label:"Pirates",placeholder:"Select pirates",values:e})})};m.__docgenInfo={description:"",methods:[],displayName:"Default"};d.__docgenInfo={description:"",methods:[],displayName:"OptionFormatting"};var v,C,y;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
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
}`,...(y=(C=m.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var w,j,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [values, setValues] = useState([]);
  const onChange = option => {
    const {
      value
    } = option;
    if (_.findWhere(values, {
      value
    })) {
      setValues(values.filter(c => c.value !== value));
    } else {
      setValues([...values, option]);
    }
  };
  const names = ['Bill Blackbeard', 'Long Bill Ginger', 'Large John', 'Dreadful John', 'Cutthroat Bill The Long', 'John Greyhate', 'Bill Largeparrot', 'First Mate John The Dreadful', 'Dread Pirate Pete', 'Captain Pete', 'Sir John Long', 'The Large Pirate', 'Pete Bones', 'Cap\\'n Dreadful', 'Pete Longbrand', 'Pete De', 'Admiral Bill', 'Johnplank', 'Large Bill The Pirate', 'Black Bill The Feared', 'Lorem ipsum odor amet, consectetuer adipiscing elit.', 'El Independiente'];
  const initOptions = names.map(n => ({
    label: n,
    value: n
  }));
  const [options, setOptions] = useState(initOptions);
  const onClear = () => setValues([]);
  const onSearch = query => {
    if (query && query.length) {
      setOptions(options.filter(o => o.label?.toLowerCase().startsWith(query.toLowerCase())));
    } else {
      setOptions(initOptions);
    }
  };
  return <div className='w-[170px] border border-black/20 p-2'>
      <Combobox options={options} onChange={onChange} onClear={onClear} onSearch={onSearch} label='Pirates' placeholder='Select pirates' values={values} />
    </div>;
}`,...(S=(j=d.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const ee=["Default","OptionFormatting"];export{m as Default,d as OptionFormatting,ee as __namedExportsOrder,Z as default};
