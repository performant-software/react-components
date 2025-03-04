import{j as t}from"./jsx-runtime-D9TvR9R2.js";import{a as v}from"./chunk-WFFRPTHA-B2vgThZf.js";import{r as o}from"./index-C0dDX-lL.js";import{c as Q}from"./clsx-B-dksMZM.js";import{I as te}from"./Icon-xn5eBWjd.js";import{i as I}from"./i18n-O47xwIR-.js";import{h as X}from"./Places-OKF0EhYG.js";import{s as Y}from"./Array-DQ2fdePu.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";const ne=e=>e.onClick?t.jsx("button",{className:"w-full border-0 text-left hover:bg-transparent",onClick:()=>e.onClick(e.item),type:"button",children:e.children}):e.children,Z=e=>{const s=o.useMemo(()=>e.attributes.slice(0,3).map(n=>n.render?n.render(e.item):e.item[n.name]),[e.attributes,e.item]);return t.jsx("li",{className:Q({"bg-primary/20":e.isHighlight},{"hover:bg-primary/20":!!e.onClick}),children:t.jsx(ne,{...e,children:t.jsxs("div",{className:"py-3 px-4",onPointerEnter:e.onPointerEnter?()=>e.onPointerEnter(e.item):void 0,onPointerLeave:e.onPointerLeave?()=>e.onPointerLeave(e.item):void 0,children:[t.jsx("p",{className:"font-bold text-neutral-800",children:e.title}),e.attributes&&s.some(Boolean)&&t.jsx("ul",{className:"list-none",children:e.attributes.slice(0,3).map((n,a)=>t.jsx(t.Fragment,{children:!!s[a]&&t.jsxs("li",{className:"text-sm text-neutral-800 flex gap-2 items-center list-none pl-5 pt-1",children:[t.jsx(te,{className:"min-w-[13px]",name:n.icon||"bullet",size:13}),s[a]]},n.name)}))})]})})})};Z.__docgenInfo={description:"",methods:[],displayName:"SearchListItem",props:{attributes:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon?: string,
  label: string,
  name: string,
  render?: (item: any) => any
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}}]}}],raw:"Attribute[]"},description:"Attributes to display (only the first three are shown)"},item:{required:!0,flowType:{name:"any"},description:"Search item object"},isHighlight:{required:!1,flowType:{name:"boolean"},description:"Boolean that determines whether to highlight the item"},onClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when an item is clicked"},onPointerEnter:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer begins to hover over an item"},onPointerLeave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer stops hovering over an item"},title:{required:!0,flowType:{name:"string"},description:"Title of the record"}}};const T=50,ie=o.memo(Z),ee=e=>{const[s,n]=o.useState(T),a=o.useRef(null),x=o.useCallback(m=>{n(l=>m.target.scrollTop/m.target.scrollHeight>=.8&&e.items.length>l?l+T:l)},[e.items]);return o.useEffect(()=>(a.current&&(a.current.removeEventListener("scroll",x),a.current.addEventListener("scroll",x)),()=>{a.current&&a.current.removeEventListener("scroll",x)}),[e.items]),t.jsxs("div",{className:Q("h-full flex flex-col",e.className),children:[t.jsxs("div",{className:"text-sm italic bg-white sticky top-0 py-2.5 px-6 shadow-sm",children:[e.items.length," ",e.items.length===1?I.t("Common.words.result"):I.t("Common.words.results")]}),t.jsx("ul",{className:"overflow-y-auto h-full divide-y divide-solid divide-neutral-200",tabIndex:0,ref:a,children:e.items.slice(0,s).map((m,l)=>t.jsx(ie,{attributes:e.attributes,item:m,isHighlight:e.isHighlight&&e.isHighlight(m),title:typeof e.itemTitle=="string"?m[e.itemTitle]:e.itemTitle(m),onClick:e.onItemClick,onPointerEnter:e.onItemPointerEnter,onPointerLeave:e.onItemPointerLeave},l))})]})},i=ee;ee.__docgenInfo={description:"",methods:[],displayName:"SearchList",props:{attributes:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon?: string,
  label: string,
  name: string,
  render?: (item: any) => any
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}}]}}],raw:"Attribute[]"},description:"Attributes to display (only the first three will be shown)"},className:{required:!1,flowType:{name:"string"},description:"Class name to apply to the root button element."},isHighlight:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}}},description:"Optional callback that determines whether to highlight an item"},items:{required:!0,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"},description:"Array of search result items"},itemTitle:{required:!0,flowType:{name:"union",raw:"string | (item: any) => string",elements:[{name:"string"},{name:"signature",type:"function",raw:"(item: any) => string",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"string"}}}]},description:"Field name or callback function to return the title of an item"},onItemClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when an item is clicked"},onItemPointerEnter:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer begins to hover over an item"},onItemPointerLeave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer stops hovering over an item"}}};const r=Y(new Array(10).fill(X).flat()),ae=Y(new Array(250).fill(X).flat());r[0].name="I'm a really long name to showcase how this component handles really long names.";const Le={title:"Components/Core Data/SearchList",component:i},c=()=>t.jsx("div",{className:"h-[600px] w-[360px]",children:t.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:r,itemTitle:"name"})}),d=()=>t.jsx("div",{className:"h-[600px] w-[360px]",children:t.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:r,itemTitle:e=>`This record's name is "${e.name}"`})}),u=()=>t.jsx("div",{className:"h-[600px] w-[360px]",children:t.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:r.slice(0,1),itemTitle:"name"})}),h=()=>t.jsx("div",{className:"h-[600px] w-[360px]",children:t.jsx(i,{items:r,itemTitle:"name"})}),p=()=>t.jsx("div",{className:"h-[600px] w-[360px]",children:t.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:r,itemTitle:"name",onItemClick:v("click"),onItemPointerEnter:v("onPointerEnter"),onItemPointerLeave:v("onPointerLeave")})}),g=()=>t.jsx("div",{className:"h-[600px] w-[360px]",children:t.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],className:"bg-red-100 border-2 border-red-900 rounded-md",items:r,itemTitle:"name"})}),y=()=>t.jsx("div",{className:"h-[600px] w-[360px]",children:t.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:r,itemTitle:"name",isHighlight:e=>e.id%2===0})}),b=()=>t.jsx("div",{className:"h-[600px] w-[360px]",children:t.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:r,itemTitle:"name",isHighlight:e=>e.id%2===0,onItemClick:v("click")})}),f=()=>{const[e,s]=o.useState([]);return o.useEffect(()=>{setTimeout(()=>s(ae),500)},[]),t.jsx("div",{className:"h-[600px] w-[360px]",children:t.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:n=>n.coordinates?`${n.coordinates[0]}, ${n.coordinates[1]}`:""}],items:e,itemTitle:"name",onItemClick:v("click")})})};c.__docgenInfo={description:"",methods:[],displayName:"Default"};d.__docgenInfo={description:"",methods:[],displayName:"TitleCallback"};u.__docgenInfo={description:"",methods:[],displayName:"OneResult"};h.__docgenInfo={description:"",methods:[],displayName:"NoAttributes"};p.__docgenInfo={description:"",methods:[],displayName:"EventHandlers"};g.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};y.__docgenInfo={description:"",methods:[],displayName:"ControlledHighlight"};b.__docgenInfo={description:"",methods:[],displayName:"ControlledHighlightWithOnClick"};f.__docgenInfo={description:"",methods:[],displayName:"HugeAmountOfData"};var w,_,L;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(L=(_=c.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var D,N,S;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(S=(N=d.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var k,A,C;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...($=(O=h.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var U,E,q;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(q=(E=p.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var H,P,R;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(R=(P=g.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var F,W,M;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(V=(B=b.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setTimeout(() => setItems(LOTS_AND_LOTS_OF_DATA), 500);
  }, []);
  return <div className='h-[600px] w-[360px]'>
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
    }]} items={items} itemTitle='name' onItemClick={action('click')} />
    </div>;
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const De=["Default","TitleCallback","OneResult","NoAttributes","EventHandlers","CustomStyles","ControlledHighlight","ControlledHighlightWithOnClick","HugeAmountOfData"];export{y as ControlledHighlight,b as ControlledHighlightWithOnClick,g as CustomStyles,c as Default,p as EventHandlers,f as HugeAmountOfData,h as NoAttributes,u as OneResult,d as TitleCallback,De as __namedExportsOrder,Le as default};
