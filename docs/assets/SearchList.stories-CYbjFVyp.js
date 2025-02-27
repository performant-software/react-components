import{j as n}from"./jsx-runtime-D9TvR9R2.js";import{a as x}from"./chunk-WFFRPTHA-B2vgThZf.js";import{r as s}from"./index-C0dDX-lL.js";import{c as Q}from"./clsx-B-dksMZM.js";import{I as ne}from"./Icon-xn5eBWjd.js";import{i as T}from"./i18n-O47xwIR-.js";import{h as X}from"./Places-OKF0EhYG.js";import{s as Y}from"./Array-DQ2fdePu.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";const te=e=>e.onClick?n.jsx("button",{className:"w-full border-0 text-left hover:bg-transparent",onClick:()=>e.onClick(e.item),type:"button",children:e.children}):e.children,Z=e=>{const m=s.useMemo(()=>e.attributes.slice(0,3).map(a=>a.render?a.render(e.item):e.item[a.name]),[e.attributes,e.item]);return n.jsx("li",{className:Q({"bg-neutral-200":e.isHighlight},{"hover:bg-neutral-200":!!e.onClick}),children:n.jsx(te,{...e,children:n.jsxs("div",{className:"py-3 px-6",onPointerEnter:e.onPointerEnter?()=>e.onPointerEnter(e.item):void 0,onPointerLeave:e.onPointerLeave?()=>e.onPointerLeave(e.item):void 0,children:[n.jsx("p",{className:"font-bold text-neutral-800",children:e.title}),e.attributes&&m.some(Boolean)&&n.jsx("ul",{className:"list-none",children:e.attributes.slice(0,3).map((a,r)=>n.jsx(n.Fragment,{children:!!m[r]&&n.jsxs("li",{className:"text-sm text-neutral-800 flex gap-2 items-center list-none pl-5 pt-1",children:[n.jsx(ne,{className:"min-w-[13px]",name:a.icon||"bullet",size:13}),m[r]]},a.name)}))})]})})})};Z.__docgenInfo={description:"",methods:[],displayName:"SearchListItem",props:{attributes:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon?: string,
  label: string,
  name: string,
  render?: (item: any) => any
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}}]}}],raw:"Attribute[]"},description:"Attributes to display (only the first three are shown)"},item:{required:!0,flowType:{name:"any"},description:"Search item object"},isHighlight:{required:!1,flowType:{name:"boolean"},description:"Boolean that determines whether to highlight the item"},onClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when an item is clicked"},onPointerEnter:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer begins to hover over an item"},onPointerLeave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer stops hovering over an item"},title:{required:!0,flowType:{name:"string"},description:"Title of the record"}}};const v=50,ie=s.memo(Z),ee=e=>{const[m,a]=s.useState(v),r=s.useRef(null),w=s.useCallback(o=>{a(l=>o.target.scrollTop/o.target.scrollHeight>=.8&&e.items.length>=l+v?l+v:l)},[]);return s.useEffect(()=>(r.current&&r.current.addEventListener("scroll",w),()=>{r.current&&r.current.removeEventListener("scroll",w)}),[]),n.jsxs("div",{className:Q("h-full flex flex-col",e.className),children:[n.jsxs("div",{className:"text-sm italic bg-white sticky top-0 py-2.5 px-6 shadow-sm",children:[e.items.length," ",e.items.length===1?T.t("Common.words.result"):T.t("Common.words.results")]}),n.jsx("ul",{className:"overflow-y-auto h-full divide-y divide-solid divide-neutral-200",tabIndex:0,ref:r,children:e.items.slice(0,m).map((o,l)=>n.jsx(ie,{attributes:e.attributes,item:o,isHighlight:e.isHighlight&&e.isHighlight(o),title:typeof e.itemTitle=="string"?o[e.itemTitle]:e.itemTitle(o),onClick:e.onItemClick,onPointerEnter:e.onItemPointerEnter,onPointerLeave:e.onItemPointerLeave},l))})]})},t=ee;ee.__docgenInfo={description:"",methods:[],displayName:"SearchList",props:{attributes:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon?: string,
  label: string,
  name: string,
  render?: (item: any) => any
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}}]}}],raw:"Attribute[]"},description:"Attributes to display (only the first three will be shown)"},className:{required:!1,flowType:{name:"string"},description:"Class name to apply to the root button element."},isHighlight:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}}},description:"Optional callback that determines whether to highlight an item"},items:{required:!0,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"},description:"Array of search result items"},itemTitle:{required:!0,flowType:{name:"union",raw:"string | (item: any) => string",elements:[{name:"string"},{name:"signature",type:"function",raw:"(item: any) => string",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"string"}}}]},description:"Field name or callback function to return the title of an item"},onItemClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when an item is clicked"},onItemPointerEnter:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer begins to hover over an item"},onItemPointerLeave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer stops hovering over an item"}}};const i=Y(new Array(10).fill(X).flat()),ae=Y(new Array(250).fill(X).flat());i[0].name="I'm a really long name to showcase how this component handles really long names.";const Le={title:"Components/Core Data/SearchList",component:t},c=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(t,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:i,itemTitle:"name"})}),d=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(t,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:i,itemTitle:e=>`This record's name is "${e.name}"`})}),u=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(t,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:i.slice(0,1),itemTitle:"name"})}),h=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(t,{items:i,itemTitle:"name"})}),p=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(t,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:i,itemTitle:"name",onItemClick:x("click"),onItemPointerEnter:x("onPointerEnter"),onItemPointerLeave:x("onPointerLeave")})}),g=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(t,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],className:"bg-red-100 border-2 border-red-900 rounded-md",items:i,itemTitle:"name"})}),y=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(t,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:i,itemTitle:"name",isHighlight:e=>e.id%2===0})}),b=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(t,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:i,itemTitle:"name",isHighlight:e=>e.id%2===0,onItemClick:x("click")})}),f=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(t,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:ae,itemTitle:"name",onItemClick:x("click")})});c.__docgenInfo={description:"",methods:[],displayName:"Default"};d.__docgenInfo={description:"",methods:[],displayName:"TitleCallback"};u.__docgenInfo={description:"",methods:[],displayName:"OneResult"};h.__docgenInfo={description:"",methods:[],displayName:"NoAttributes"};p.__docgenInfo={description:"",methods:[],displayName:"EventHandlers"};g.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};y.__docgenInfo={description:"",methods:[],displayName:"ControlledHighlight"};b.__docgenInfo={description:"",methods:[],displayName:"ControlledHighlightWithOnClick"};f.__docgenInfo={description:"",methods:[],displayName:"HugeAmountOfData"};var I,_,L;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(L=(_=c.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var D,N,k;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(k=(N=d.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var S,A,C;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(C=(A=u.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var j,O,$;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
    <SearchList items={LOTS_OF_DATA} itemTitle='name' />
  </div>`,...($=(O=h.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var U,q,H;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(H=(q=p.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var P,R,E;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(E=(R=g.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var F,W,M;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(M=(W=y.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var z,B,V;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(V=(B=b.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  }]} items={LOTS_AND_LOTS_OF_DATA} itemTitle='name' onItemClick={action('click')} />
  </div>`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const De=["Default","TitleCallback","OneResult","NoAttributes","EventHandlers","CustomStyles","ControlledHighlight","ControlledHighlightWithOnClick","HugeAmountOfData"];export{y as ControlledHighlight,b as ControlledHighlightWithOnClick,g as CustomStyles,c as Default,p as EventHandlers,f as HugeAmountOfData,h as NoAttributes,u as OneResult,d as TitleCallback,De as __namedExportsOrder,Le as default};
