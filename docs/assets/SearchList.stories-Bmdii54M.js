import{j as n}from"./jsx-runtime-D9TvR9R2.js";import{a as u}from"./chunk-WFFRPTHA-B2vgThZf.js";import"./index-C0dDX-lL.js";import{c as q}from"./clsx-B-dksMZM.js";import{I as R}from"./Icon-BkrLHT7c.js";import{i as p}from"./i18n-O47xwIR-.js";import{h as H}from"./Places-OKF0EhYG.js";import{s as F}from"./Array-DQ2fdePu.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";const z=e=>e.onClick?n.jsx("button",{className:"w-full border-0 text-left",onClick:()=>e.onClick(e.item),type:"button",children:e.children}):e.children,P=e=>n.jsx("li",{children:n.jsx(z,{...e,children:n.jsxs("div",{className:q("py-3 px-6",{"bg-neutral-200":e.isHighlight}),onPointerEnter:e.onPointerEnter?()=>e.onPointerEnter(e.item):void 0,onPointerLeave:e.onPointerLeave?()=>e.onPointerLeave(e.item):void 0,children:[n.jsx("p",{className:"font-bold text-neutral-800",children:e.title}),e.attributes&&e.attributes.length>0&&n.jsx("ul",{className:"list-none",children:e.attributes.slice(0,3).map(t=>n.jsxs("li",{className:"text-sm text-neutral-800 flex gap-2 items-center list-none pl-5 pt-1",children:[n.jsx(R,{className:"min-w-[13px]",name:t.icon||"bullet",size:13}),t.render?t.render(e.item):e.item[t.name]]},t.name))})]})})});P.__docgenInfo={description:"",methods:[],displayName:"SearchListItem",props:{attributes:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon?: string,
  label: string,
  name: string,
  render?: (item: any) => any
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}}]}}],raw:"Attribute[]"},description:"Attributes to display (only the first three are shown)"},item:{required:!0,flowType:{name:"any"},description:"Search item object"},isHighlight:{required:!1,flowType:{name:"boolean"},description:"Boolean that determines whether to highlight the item"},onClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when an item is clicked"},onPointerEnter:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer begins to hover over an item"},onPointerLeave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer stops hovering over an item"},title:{required:!0,flowType:{name:"string"},description:"Title of the record"}}};const O=e=>n.jsxs("div",{className:q("h-full flex flex-col",e.className),children:[n.jsxs("div",{className:"text-sm italic bg-white sticky top-0 py-2.5 px-6 shadow-sm",children:[e.items.length," ",e.items.length===1?p.t("Common.words.result"):p.t("Common.words.results")]}),n.jsx("ul",{className:"overflow-y-auto h-full divide-y divide-solid divide-neutral-200",tabIndex:0,children:e.items.map((t,E)=>n.jsx(P,{attributes:e.attributes,item:t,isHighlight:e.isHighlight&&e.isHighlight(t),title:typeof e.itemTitle=="string"?t[e.itemTitle]:e.itemTitle(t),onClick:e.onItemClick,onPointerEnter:e.onItemPointerEnter,onPointerLeave:e.onItemPointerLeave},E))})]}),i=O;O.__docgenInfo={description:"",methods:[],displayName:"SearchList",props:{attributes:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon?: string,
  label: string,
  name: string,
  render?: (item: any) => any
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}}]}}],raw:"Attribute[]"},description:"Attributes to display (only the first three will be shown)"},className:{required:!1,flowType:{name:"string"},description:"Class name to apply to the root button element."},isHighlight:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}}},description:"Optional callback that determines whether to highlight an item"},items:{required:!0,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"},description:"Array of search result items"},itemTitle:{required:!0,flowType:{name:"union",raw:"string | (item: any) => string",elements:[{name:"string"},{name:"signature",type:"function",raw:"(item: any) => string",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"string"}}}]},description:"Field name or callback function to return the title of an item"},onItemClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when an item is clicked"},onItemPointerEnter:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer begins to hover over an item"},onItemPointerLeave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer stops hovering over an item"}}};const a=F(new Array(10).fill(H).flat());a[0].name="I'm a really long name to showcase how this component handles really long names.";const le={title:"Components/Core Data/SearchList",component:i},r=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a,itemTitle:"name"})}),o=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a,itemTitle:e=>`This record's name is "${e.name}"`})}),s=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a.slice(0,1),itemTitle:"name"})}),m=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{items:a,itemTitle:"name"})}),l=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a,itemTitle:"name",onItemClick:u("click"),onItemPointerEnter:u("onPointerEnter"),onItemPointerLeave:u("onPointerLeave")})}),c=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],className:"bg-red-100 border-2 border-red-900 rounded-md",items:a,itemTitle:"name"})}),d=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a,itemTitle:"name",isHighlight:e=>e.id%2===0})});r.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"TitleCallback"};s.__docgenInfo={description:"",methods:[],displayName:"OneResult"};m.__docgenInfo={description:"",methods:[],displayName:"NoAttributes"};l.__docgenInfo={description:"",methods:[],displayName:"EventHandlers"};c.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};d.__docgenInfo={description:"",methods:[],displayName:"ControlledHighlight"};var h,g,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,f,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,w,T;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  }]} items={LOTS_OF_DATA.slice(0, 1)} itemTitle='name' />
  </div>`,...(T=(w=s.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var I,_,L;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
    <SearchList items={LOTS_OF_DATA} itemTitle='name' />
  </div>`,...(L=(_=m.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var N,D,k;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  }]} items={LOTS_OF_DATA} itemTitle='name' onItemClick={action('click')} onItemPointerEnter={action('onPointerEnter')} onItemPointerLeave={action('onPointerLeave')} />
  </div>`,...(k=(D=l.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var S,j,A;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  }]} className='bg-red-100 border-2 border-red-900 rounded-md' items={LOTS_OF_DATA} itemTitle='name' />
  </div>`,...(A=(j=c.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var C,$,U;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  }]} items={LOTS_OF_DATA} itemTitle='name' isHighlight={item => item.id % 2 === 0} />
  </div>`,...(U=($=d.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};const ce=["Default","TitleCallback","OneResult","NoAttributes","EventHandlers","CustomStyles","ControlledHighlight"];export{d as ControlledHighlight,c as CustomStyles,r as Default,l as EventHandlers,m as NoAttributes,s as OneResult,o as TitleCallback,ce as __namedExportsOrder,le as default};
