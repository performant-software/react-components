import{j as n}from"./jsx-runtime-D9TvR9R2.js";import{a as h}from"./chunk-WFFRPTHA-B2vgThZf.js";import"./index-C0dDX-lL.js";import{c as R}from"./clsx-B-dksMZM.js";import{I as z}from"./Icon-BkrLHT7c.js";import{i as p}from"./i18n-O47xwIR-.js";import{h as B}from"./Places-OKF0EhYG.js";import{s as G}from"./Array-DQ2fdePu.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";const J=e=>e.onClick?n.jsx("button",{className:"w-full border-0 text-left hover:bg-transparent",onClick:()=>e.onClick(e.item),type:"button",children:e.children}):e.children,E=e=>n.jsx("li",{className:R({"bg-neutral-200":e.isHighlight},{"hover:bg-neutral-200":!!e.onClick}),children:n.jsx(J,{...e,children:n.jsxs("div",{className:"py-3 px-6",onPointerEnter:e.onPointerEnter?()=>e.onPointerEnter(e.item):void 0,onPointerLeave:e.onPointerLeave?()=>e.onPointerLeave(e.item):void 0,children:[n.jsx("p",{className:"font-bold text-neutral-800",children:e.title}),e.attributes&&e.attributes.length>0&&n.jsx("ul",{className:"list-none",children:e.attributes.slice(0,3).map(t=>n.jsxs("li",{className:"text-sm text-neutral-800 flex gap-2 items-center list-none pl-5 pt-1",children:[n.jsx(z,{className:"min-w-[13px]",name:t.icon||"bullet",size:13}),t.render?t.render(e.item):e.item[t.name]]},t.name))})]})})});E.__docgenInfo={description:"",methods:[],displayName:"SearchListItem",props:{attributes:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon?: string,
  label: string,
  name: string,
  render?: (item: any) => any
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}}]}}],raw:"Attribute[]"},description:"Attributes to display (only the first three are shown)"},item:{required:!0,flowType:{name:"any"},description:"Search item object"},isHighlight:{required:!1,flowType:{name:"boolean"},description:"Boolean that determines whether to highlight the item"},onClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when an item is clicked"},onPointerEnter:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer begins to hover over an item"},onPointerLeave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer stops hovering over an item"},title:{required:!0,flowType:{name:"string"},description:"Title of the record"}}};const F=e=>n.jsxs("div",{className:R("h-full flex flex-col",e.className),children:[n.jsxs("div",{className:"text-sm italic bg-white sticky top-0 py-2.5 px-6 shadow-sm",children:[e.items.length," ",e.items.length===1?p.t("Common.words.result"):p.t("Common.words.results")]}),n.jsx("ul",{className:"overflow-y-auto h-full divide-y divide-solid divide-neutral-200",tabIndex:0,children:e.items.map((t,W)=>n.jsx(E,{attributes:e.attributes,item:t,isHighlight:e.isHighlight&&e.isHighlight(t),title:typeof e.itemTitle=="string"?t[e.itemTitle]:e.itemTitle(t),onClick:e.onItemClick,onPointerEnter:e.onItemPointerEnter,onPointerLeave:e.onItemPointerLeave},W))})]}),i=F;F.__docgenInfo={description:"",methods:[],displayName:"SearchList",props:{attributes:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon?: string,
  label: string,
  name: string,
  render?: (item: any) => any
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}}]}}],raw:"Attribute[]"},description:"Attributes to display (only the first three will be shown)"},className:{required:!1,flowType:{name:"string"},description:"Class name to apply to the root button element."},isHighlight:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}}},description:"Optional callback that determines whether to highlight an item"},items:{required:!0,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"},description:"Array of search result items"},itemTitle:{required:!0,flowType:{name:"union",raw:"string | (item: any) => string",elements:[{name:"string"},{name:"signature",type:"function",raw:"(item: any) => string",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"string"}}}]},description:"Field name or callback function to return the title of an item"},onItemClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when an item is clicked"},onItemPointerEnter:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer begins to hover over an item"},onItemPointerLeave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer stops hovering over an item"}}};const a=G(new Array(10).fill(B).flat());a[0].name="I'm a really long name to showcase how this component handles really long names.";const he={title:"Components/Core Data/SearchList",component:i},r=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a,itemTitle:"name"})}),o=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a,itemTitle:e=>`This record's name is "${e.name}"`})}),s=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a.slice(0,1),itemTitle:"name"})}),m=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{items:a,itemTitle:"name"})}),l=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a,itemTitle:"name",onItemClick:h("click"),onItemPointerEnter:h("onPointerEnter"),onItemPointerLeave:h("onPointerLeave")})}),c=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],className:"bg-red-100 border-2 border-red-900 rounded-md",items:a,itemTitle:"name"})}),d=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a,itemTitle:"name",isHighlight:e=>e.id%2===0})}),u=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a,itemTitle:"name",isHighlight:e=>e.id%2===0,onItemClick:h("click")})});r.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"TitleCallback"};s.__docgenInfo={description:"",methods:[],displayName:"OneResult"};m.__docgenInfo={description:"",methods:[],displayName:"NoAttributes"};l.__docgenInfo={description:"",methods:[],displayName:"EventHandlers"};c.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};d.__docgenInfo={description:"",methods:[],displayName:"ControlledHighlight"};u.__docgenInfo={description:"",methods:[],displayName:"ControlledHighlightWithOnClick"};var g,y,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,v,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,I,T;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(T=(I=s.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var _,L,N;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
    <SearchList items={LOTS_OF_DATA} itemTitle='name' />
  </div>`,...(N=(L=m.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var k,D,C;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(C=(D=l.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var S,j,A;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(A=(j=c.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var $,U,O;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(O=(U=d.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var q,P,H;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  }]} items={LOTS_OF_DATA} itemTitle='name' isHighlight={item => item.id % 2 === 0} onItemClick={action('click')} />
  </div>`,...(H=(P=u.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};const pe=["Default","TitleCallback","OneResult","NoAttributes","EventHandlers","CustomStyles","ControlledHighlight","ControlledHighlightWithOnClick"];export{d as ControlledHighlight,u as ControlledHighlightWithOnClick,c as CustomStyles,r as Default,l as EventHandlers,m as NoAttributes,s as OneResult,o as TitleCallback,pe as __namedExportsOrder,he as default};
