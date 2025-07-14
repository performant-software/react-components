import{j as t}from"./jsx-runtime-D9TvR9R2.js";import{a as f}from"./chunk-WFFRPTHA-B2vgThZf.js";import{r as s}from"./index-C0dDX-lL.js";import{c as J}from"./clsx-B-dksMZM.js";import{H as te}from"./index.es34-tedbSeou.js";import{I as ne}from"./Icon-CLXecEt2.js";import{i as x}from"./i18n-DBs6I0Fj.js";import{h as K}from"./Places-OKF0EhYG.js";import{s as Q}from"./Array-DQ2fdePu.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DOYXiIEK.js";import"./iframe-DKb_Fo2j.js";import"../sb-preview/runtime.js";import"./i18next-CwS9wMM1.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./inherits-CWPG5jll.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";const ie=e=>e.onClick?t.jsx("button",{className:"w-full border-0 text-left hover:bg-transparent",onClick:()=>e.onClick(e.item),type:"button",children:e.children}):e.children,X=e=>{const o=s.useMemo(()=>e.attributes.slice(0,3).map(n=>n.render?n.render(e.item):e.item[n.name]),[e.attributes,e.item]);return t.jsx("li",{className:J({"bg-primary/20":e.isHighlight},{"hover:bg-primary/20":!!e.onClick}),children:t.jsx(ie,{...e,children:t.jsxs("div",{className:"py-3 px-4",onPointerEnter:e.onPointerEnter?()=>e.onPointerEnter(e.item):void 0,onPointerLeave:e.onPointerLeave?()=>e.onPointerLeave(e.item):void 0,children:[t.jsx("p",{className:"font-bold text-neutral-800",children:e.title}),e.attributes&&o.some(Boolean)&&t.jsx("ul",{className:"list-none",children:e.attributes.slice(0,3).map((n,m)=>t.jsx(t.Fragment,{children:!!o[m]&&t.jsxs("li",{className:"text-sm text-neutral-800 flex gap-2 items-center list-none pl-5 pt-1",children:[t.jsx(ne,{className:"min-w-[13px]",name:n.icon||"bullet",size:13}),o[m]]},n.name)}))})]})})})};X.__docgenInfo={description:"",methods:[],displayName:"SearchListItem",props:{attributes:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon?: string,
  label: string,
  name: string,
  render?: (item: any) => any
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}}]}}],raw:"Attribute[]"},description:"Attributes to display (only the first three are shown)"},item:{required:!0,flowType:{name:"any"},description:"Search item object"},isHighlight:{required:!1,flowType:{name:"boolean"},description:"Boolean that determines whether to highlight the item"},onClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when an item is clicked"},onPointerEnter:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer begins to hover over an item"},onPointerLeave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer stops hovering over an item"},title:{required:!0,flowType:{name:"string"},description:"Title of the record"}}};const v=50,ae=s.memo(X),Y=e=>{const[o,n]=s.useState(v),m=s.useRef(null),Z=s.useCallback(()=>{n(r=>e.items.length>r?r+v:r)},[e.items]);return t.jsxs("div",{className:J("h-full flex flex-col",e.className),children:[t.jsxs("div",{className:"text-sm italic bg-white sticky top-0 py-2.5 px-6 shadow-sm",children:[e.items.length," ",e.items.length===1?x.t("Common.words.result"):x.t("Common.words.results")]}),t.jsx("div",{className:"overflow-y-auto h-full",tabIndex:0,ref:m,children:t.jsx(te,{as:"ul",className:"divide-y divide-solid divide-neutral-200",offset:150,onBottomReached:Z,context:m,children:e.items.slice(0,o).map((r,ee)=>t.jsx(ae,{attributes:e.attributes,item:r,isHighlight:e.isHighlight&&e.isHighlight(r),title:typeof e.itemTitle=="string"?r[e.itemTitle]:e.itemTitle(r),onClick:e.onItemClick,onPointerEnter:e.onItemPointerEnter,onPointerLeave:e.onItemPointerLeave},ee))},e.items.length)})]})},i=Y;Y.__docgenInfo={description:"",methods:[],displayName:"SearchList",props:{attributes:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon?: string,
  label: string,
  name: string,
  render?: (item: any) => any
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}}]}}],raw:"Attribute[]"},description:"Attributes to display (only the first three will be shown)"},className:{required:!1,flowType:{name:"string"},description:"Class name to apply to the root button element."},isHighlight:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}}},description:"Optional callback that determines whether to highlight an item"},items:{required:!0,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"},description:"Array of search result items"},itemTitle:{required:!0,flowType:{name:"union",raw:"string | (item: any) => string",elements:[{name:"string"},{name:"signature",type:"function",raw:"(item: any) => string",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"string"}}}]},description:"Field name or callback function to return the title of an item"},onItemClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when an item is clicked"},onItemPointerEnter:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer begins to hover over an item"},onItemPointerLeave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer stops hovering over an item"}}};const a=Q(new Array(10).fill(K).flat()),re=Q(new Array(250).fill(K).flat());a[0].name="I'm a really long name to showcase how this component handles really long names.";const Ae={title:"Components/Core Data/SearchList",component:i},l=()=>t.jsx("div",{className:"h-[600px] w-[360px]",children:t.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a,itemTitle:"name"})}),c=()=>t.jsx("div",{className:"h-[600px] w-[360px]",children:t.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a,itemTitle:e=>`This record's name is "${e.name}"`})}),d=()=>t.jsx("div",{className:"h-[600px] w-[360px]",children:t.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a.slice(0,1),itemTitle:"name"})}),u=()=>t.jsx("div",{className:"h-[600px] w-[360px]",children:t.jsx(i,{items:a,itemTitle:"name"})}),h=()=>t.jsx("div",{className:"h-[600px] w-[360px]",children:t.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a,itemTitle:"name",onItemClick:f("click"),onItemPointerEnter:f("onPointerEnter"),onItemPointerLeave:f("onPointerLeave")})}),p=()=>t.jsx("div",{className:"h-[600px] w-[360px]",children:t.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],className:"bg-red-100 border-2 border-red-900 rounded-md",items:a,itemTitle:"name"})}),g=()=>t.jsx("div",{className:"h-[600px] w-[360px]",children:t.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a,itemTitle:"name",isHighlight:e=>e.id%2===0})}),y=()=>t.jsx("div",{className:"h-[600px] w-[360px]",children:t.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a,itemTitle:"name",isHighlight:e=>e.id%2===0,onItemClick:f("click")})}),b=()=>{const[e,o]=s.useState([]);return s.useEffect(()=>{setTimeout(()=>o(re),500)},[]),t.jsx("div",{className:"h-[600px] w-[360px]",children:t.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:n=>n.coordinates?`${n.coordinates[0]}, ${n.coordinates[1]}`:""}],items:e,itemTitle:"name",onItemClick:f("click")})})};l.__docgenInfo={description:"",methods:[],displayName:"Default"};c.__docgenInfo={description:"",methods:[],displayName:"TitleCallback"};d.__docgenInfo={description:"",methods:[],displayName:"OneResult"};u.__docgenInfo={description:"",methods:[],displayName:"NoAttributes"};h.__docgenInfo={description:"",methods:[],displayName:"EventHandlers"};p.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};g.__docgenInfo={description:"",methods:[],displayName:"ControlledHighlight"};y.__docgenInfo={description:"",methods:[],displayName:"ControlledHighlightWithOnClick"};b.__docgenInfo={description:"",methods:[],displayName:"HugeAmountOfData"};var I,w,T;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(T=(w=l.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var _,L,D;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(D=(L=c.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var N,S,k;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(k=(S=d.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var A,C,j;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
    <SearchList items={LOTS_OF_DATA} itemTitle='name' />
  </div>`,...(j=(C=u.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var O,$,U;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(U=($=h.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var q,H,P;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(P=(H=p.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var R,E,F;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(F=(E=g.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var W,B,M;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...(M=(B=y.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var z,V,G;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(G=(V=b.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};const Ce=["Default","TitleCallback","OneResult","NoAttributes","EventHandlers","CustomStyles","ControlledHighlight","ControlledHighlightWithOnClick","HugeAmountOfData"];export{g as ControlledHighlight,y as ControlledHighlightWithOnClick,p as CustomStyles,l as Default,h as EventHandlers,b as HugeAmountOfData,u as NoAttributes,d as OneResult,c as TitleCallback,Ce as __namedExportsOrder,Ae as default};
