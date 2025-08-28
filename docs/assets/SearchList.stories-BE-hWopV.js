import{r as s,j as n}from"./iframe-Dxgww4-I.js";import{c as _}from"./clsx-B-dksMZM.js";import{H as N}from"./index.es28-CWu3ntqi.js";import{I as S}from"./Icon-C_YSoYp3.js";import{i as x}from"./i18n-DtnBOa9t.js";import{h as I}from"./Places-Dq9_RxY0.js";import{s as T}from"./Array-DQ2fdePu.js";import"./toPropertyKey-BdisF6oo.js";import"./defineProperty-BhpcgfZc.js";import"./inherits-DDprkOLY.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CGi6Kyeu.js";const k=e=>e.onClick?n.jsx("button",{className:"w-full border-0 text-left hover:bg-transparent",onClick:()=>e.onClick(e.item),type:"button",children:e.children}):e.children,w=e=>{const o=s.useMemo(()=>e.attributes.slice(0,3).map(t=>t.render?t.render(e.item):e.item[t.name]),[e.attributes,e.item]);return n.jsx("li",{className:_({"bg-primary/20":e.isHighlight},{"hover:bg-primary/20":!!e.onClick}),children:n.jsx(k,{...e,children:n.jsxs("div",{className:"py-3 px-4",onPointerEnter:e.onPointerEnter?()=>e.onPointerEnter(e.item):void 0,onPointerLeave:e.onPointerLeave?()=>e.onPointerLeave(e.item):void 0,children:[n.jsx("p",{className:"font-bold text-neutral-800",children:e.title}),e.attributes&&o.some(Boolean)&&n.jsx("ul",{className:"list-none",children:e.attributes.slice(0,3).map((t,m)=>n.jsx(n.Fragment,{children:!!o[m]&&n.jsxs("li",{className:"text-sm text-neutral-800 flex gap-2 items-center list-none pl-5 pt-1",children:[n.jsx(S,{className:"min-w-[13px]",name:t.icon||"bullet",size:13}),o[m]]},t.name)}))})]})})})};w.__docgenInfo={description:"",methods:[],displayName:"SearchListItem",props:{attributes:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon?: string,
  label: string,
  name: string,
  render?: (item: any) => any
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}}]}}],raw:"Attribute[]"},description:"Attributes to display (only the first three are shown)"},item:{required:!0,flowType:{name:"any"},description:"Search item object"},isHighlight:{required:!1,flowType:{name:"boolean"},description:"Boolean that determines whether to highlight the item"},onClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when an item is clicked"},onPointerEnter:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer begins to hover over an item"},onPointerLeave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer stops hovering over an item"},title:{required:!0,flowType:{name:"string"},description:"Title of the record"}}};const v=50,A=s.memo(w),i=e=>{const[o,t]=s.useState(v),m=s.useRef(null),L=s.useCallback(()=>{t(r=>e.items.length>r?r+v:r)},[e.items]);return n.jsxs("div",{className:_("h-full flex flex-col",e.className),children:[n.jsxs("div",{className:"text-sm italic bg-white sticky top-0 py-2.5 px-6 shadow-sm",children:[e.items.length," ",e.items.length===1?x.t("Common.words.result"):x.t("Common.words.results")]}),n.jsx("div",{className:"overflow-y-auto h-full",tabIndex:0,ref:m,children:n.jsx(N,{as:"ul",className:"divide-y divide-solid divide-neutral-200",offset:150,onBottomReached:L,context:m,children:e.items.slice(0,o).map((r,D)=>n.jsx(A,{attributes:e.attributes,item:r,isHighlight:e.isHighlight&&e.isHighlight(r),title:typeof e.itemTitle=="string"?r[e.itemTitle]:e.itemTitle(r),onClick:e.onItemClick,onPointerEnter:e.onItemPointerEnter,onPointerLeave:e.onItemPointerLeave},D))},e.items.length)})]})};i.__docgenInfo={description:"",methods:[],displayName:"SearchList",props:{attributes:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon?: string,
  label: string,
  name: string,
  render?: (item: any) => any
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}}]}}],raw:"Attribute[]"},description:"Attributes to display (only the first three will be shown)"},className:{required:!1,flowType:{name:"string"},description:"Class name to apply to the root button element."},isHighlight:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}}},description:"Optional callback that determines whether to highlight an item"},items:{required:!0,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"},description:"Array of search result items"},itemTitle:{required:!0,flowType:{name:"union",raw:"string | (item: any) => string",elements:[{name:"string"},{name:"signature",type:"function",raw:"(item: any) => string",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"string"}}}]},description:"Field name or callback function to return the title of an item"},onItemClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when an item is clicked"},onItemPointerEnter:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer begins to hover over an item"},onItemPointerLeave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer stops hovering over an item"}}};const{action:f}=__STORYBOOK_MODULE_ACTIONS__,a=T(new Array(10).fill(I).flat()),C=T(new Array(250).fill(I).flat());a[0].name="I'm a really long name to showcase how this component handles really long names.";const z={title:"Components/Core Data/SearchList",component:i},l=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a,itemTitle:"name"})}),c=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a,itemTitle:e=>`This record's name is "${e.name}"`})}),d=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a.slice(0,1),itemTitle:"name"})}),u=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{items:a,itemTitle:"name"})}),h=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a,itemTitle:"name",onItemClick:f("click"),onItemPointerEnter:f("onPointerEnter"),onItemPointerLeave:f("onPointerLeave")})}),p=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],className:"bg-red-100 border-2 border-red-900 rounded-md",items:a,itemTitle:"name"})}),g=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a,itemTitle:"name",isHighlight:e=>e.id%2===0})}),y=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:a,itemTitle:"name",isHighlight:e=>e.id%2===0,onItemClick:f("click")})}),b=()=>{const[e,o]=s.useState([]);return s.useEffect(()=>{setTimeout(()=>o(C),500)},[]),n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(i,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:t=>t.coordinates?`${t.coordinates[0]}, ${t.coordinates[1]}`:""}],items:e,itemTitle:"name",onItemClick:f("click")})})};l.__docgenInfo={description:"",methods:[],displayName:"Default"};c.__docgenInfo={description:"",methods:[],displayName:"TitleCallback"};d.__docgenInfo={description:"",methods:[],displayName:"OneResult"};u.__docgenInfo={description:"",methods:[],displayName:"NoAttributes"};h.__docgenInfo={description:"",methods:[],displayName:"EventHandlers"};p.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};g.__docgenInfo={description:"",methods:[],displayName:"ControlledHighlight"};y.__docgenInfo={description:"",methods:[],displayName:"ControlledHighlightWithOnClick"};b.__docgenInfo={description:"",methods:[],displayName:"HugeAmountOfData"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
    <SearchList items={LOTS_OF_DATA} itemTitle='name' />
  </div>`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};const K=["Default","TitleCallback","OneResult","NoAttributes","EventHandlers","CustomStyles","ControlledHighlight","ControlledHighlightWithOnClick","HugeAmountOfData"];export{g as ControlledHighlight,y as ControlledHighlightWithOnClick,p as CustomStyles,l as Default,h as EventHandlers,b as HugeAmountOfData,u as NoAttributes,d as OneResult,c as TitleCallback,K as __namedExportsOrder,z as default};
