import{j as t}from"./jsx-runtime-D9TvR9R2.js";import"./index-C0dDX-lL.js";import{I as b}from"./Icon-57nIhQao.js";import{i as f}from"./i18n-BjMjquzC.js";import{h as n}from"./Places-OKF0EhYG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";const y=e=>t.jsxs("li",{className:"py-3 px-6",children:[t.jsx("p",{className:"font-bold text-neutral-800",children:e.title}),e.attributes.length>0&&t.jsx("ul",{className:"list-none",children:e.attributes.slice(0,3).map(r=>t.jsxs("li",{className:"text-sm text-neutral-800 flex gap-2 items-center list-none pl-5 pt-1",children:[t.jsx(b,{className:"min-w-[13px]",name:r.icon||"bullet",size:13}),r.render?r.render(e.item):e.item[r.name]]},r.name))})]});y.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{title:{required:!0,flowType:{name:"string"},description:"Title of the record"},attributes:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon?: string,
  label: string,
  name: string,
  render?: (item: any) => any
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}}]}}],raw:"Attribute[]"},description:"Attributes to display (only the first three are shown)"},item:{required:!0,flowType:{name:"any"},description:"Search item object"}}};const g=e=>t.jsxs("div",{className:"h-full",children:[t.jsxs("div",{className:"text-sm italic bg-white sticky top-0 py-2.5 px-6 shadow-sm",children:[e.items.length," ",f.t("Common.words.results")]}),t.jsx("ul",{className:"overflow-y-auto h-full divide-y divide-solid",children:e.items.map((r,h)=>t.jsx(y,{attributes:e.attributes,item:r,title:typeof e.itemTitle=="string"?r[e.itemTitle]:e.itemTitle(r)},h))})]}),s=g;g.__docgenInfo={description:"",methods:[],displayName:"SearchList",props:{attributes:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon?: string,
  label: string,
  name: string,
  render?: (item: any) => any
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}}]}}],raw:"Attribute[]"},description:"Attributes to display (only the first three will be shown)"},items:{required:!0,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"},description:"Array of search result items"},itemTitle:{required:!0,flowType:{name:"union",raw:"string | (item: any) => string",elements:[{name:"string"},{name:"signature",type:"function",raw:"(item: any) => string",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"string"}}}]},description:"Field name or callback function to return the title of an item"}}};const o=[...n,...n,...n,...n,...n,...n,...n,...n,...n,...n];o[0].name="I'm a really long name to showcase how this component handles really long names.";const U={title:"Components/Core Data/SearchList",component:s},i=()=>t.jsx("div",{className:"h-[600px] w-[360px]",children:t.jsx(s,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:o,itemTitle:"name"})}),a=()=>t.jsx("div",{className:"h-[600px] w-[360px]",children:t.jsx(s,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:o,itemTitle:e=>`This record's name is "${e.name}"`})});i.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"TitleCallback"};var m,l,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  }]} items={LOTS_OF_DATA} itemTitle='name' />
  </div>`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  }]} items={LOTS_OF_DATA} itemTitle={item => \`This record's name is "\${item.name}"\`} />
  </div>`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const O=["Default","TitleCallback"];export{i as Default,a as TitleCallback,O as __namedExportsOrder,U as default};
