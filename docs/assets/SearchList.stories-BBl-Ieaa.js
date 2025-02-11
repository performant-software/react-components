import{j as t}from"./jsx-runtime-BTCK_S7S.js";import"./index-CBqU2yxZ.js";import{I as p}from"./Icon-BJPA3lGg.js";import{i as y}from"./i18n-D4EEaMS6.js";import{h as r}from"./Places-OKF0EhYG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./i18next-Sc0HEOoc.js";import"./toPropertyKey-hKuLU48H.js";import"./defineProperty-CCxoMnQV.js";import"./inherits-D5wXBZoG.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-D2z1h_eG.js";import"./getPrototypeOf-BYVhAdwF.js";const m=e=>t.jsxs("li",{className:"py-3 px-6",children:[t.jsx("p",{className:"font-bold text-neutral-800",children:e.title}),e.attributes.length>0&&t.jsx("ul",{className:"list-none",children:e.attributes.slice(0,3).map(n=>t.jsxs("li",{className:"text-sm text-neutral-800 flex gap-2 items-center list-none pl-5 pt-1",children:[t.jsx(p,{className:"min-w-[13px]",name:n.icon||"bullet",size:13}),n.render?n.render(e.item):e.item[n.name]]},n.name))})]});m.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{title:{required:!0,flowType:{name:"string"},description:"Title of the record"},attributes:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon?: string,
  label: string,
  name: string,
  render?: (item: any) => any
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}}]}}],raw:"Attribute[]"},description:"Attributes to display (only the first three are shown)"},item:{required:!0,flowType:{name:"any"},description:"Search item object"}}};const l=e=>t.jsxs("div",{className:"h-full",children:[t.jsxs("div",{className:"text-sm italic bg-white sticky top-0 py-2.5 px-6 shadow-sm",children:[e.items.length," ",y.t("Common.words.results")]}),t.jsx("ul",{className:"overflow-y-auto h-full divide-y divide-solid",children:e.items.map((n,u)=>t.jsx(m,{title:n.name,attributes:e.attributes,item:n},u))})]}),c=l;l.__docgenInfo={description:"",methods:[],displayName:"SearchList",props:{attributes:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon?: string,
  label: string,
  name: string,
  render?: (item: any) => any
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}}]}}],raw:"Attribute[]"},description:"Attributes to display (only the first three will be shown)"},items:{required:!0,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"},description:"Array of search result items"}}};const d=[...r,...r,...r,...r,...r,...r,...r,...r,...r,...r];d[0].name="I'm a really long name to showcase how this component handles really long names.";const S={title:"Components/Core Data/SearchList",component:c},a=()=>t.jsx("div",{className:"h-[600px] w-[360px]",children:t.jsx(c,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:d})});a.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,s,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
    <SearchList attributes={[{
    label: 'UUID',
    name: 'uuid'
  }, {
    label: 'Record ID',
    name: 'record_id',
    icon: 'person'
  }, {
    label: 'Location',
    name: 'geometry',
    icon: 'location',
    render: item => item.coordinates ? \`\${item.coordinates[0]}, \${item.coordinates[1]}\` : ''
  }]} items={LOTS_OF_DATA} />
  </div>`,...(o=(s=a.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const T=["Default"];export{a as Default,T as __namedExportsOrder,S as default};
