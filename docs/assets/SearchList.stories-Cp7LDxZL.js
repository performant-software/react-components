import{r as m,j as n,R as k}from"./iframe-DjZg4LCJ.js";import{c as _}from"./clsx-B-dksMZM.js";import{H as S}from"./index.es28-DFmwjNuL.js";import{I as A}from"./Icon-D82Wst-S.js";import{P as j}from"./Pill-BAUNBVF-.js";import{J as C}from"./index.es33-wqjxQqsy.js";import{i as T}from"./i18n-DmKDVPrF.js";import{h as I}from"./Places-Dq9_RxY0.js";import{s as L}from"./Array-DQ2fdePu.js";import"./toPropertyKey-BdisF6oo.js";import"./defineProperty-BhpcgfZc.js";import"./inherits-DDprkOLY.js";import"./assertThisInitialized-B9jnkVVz.js";import"./setPrototypeOf-DgZC2w_0.js";import"./createClass-CGi6Kyeu.js";const O=e=>e.onClick?n.jsx("button",{className:"w-full border-0 text-left hover:bg-transparent",onClick:()=>e.onClick(e.item),type:"button",children:e.children}):e.children,D=e=>{const l=m.useMemo(()=>e.attributes.slice(0,3).map(t=>t.render?t.render(e.item):e.item[t.name]),[e.attributes,e.item]),s=m.useMemo(()=>{const t=[];return e.tags&&e.tags.forEach(r=>{const i=C.getNestedValue(e.item,r.name);i&&t.push({value:i,primary:r.primary,secondary:r.secondary})}),t},[e.tags,e.item]);return n.jsx("li",{className:_({"bg-primary/20":e.isHighlight},{"hover:bg-primary/20":!!e.onClick}),children:n.jsx(O,{...e,children:n.jsxs("div",{className:"py-3 px-4",onPointerEnter:e.onPointerEnter?()=>e.onPointerEnter(e.item):void 0,onPointerLeave:e.onPointerLeave?()=>e.onPointerLeave(e.item):void 0,children:[s.length>0&&n.jsx("div",{className:"flex flex-wrap gap-2",children:s.map((t,r)=>n.jsx(j,{primary:t.primary,secondary:t.secondary,label:t.value},r))}),n.jsx("p",{className:"font-bold text-neutral-800",children:e.title}),e.attributes&&l.some(Boolean)&&n.jsx("ul",{className:"list-none",children:e.attributes.slice(0,3).map((t,r)=>n.jsx(k.Fragment,{children:!!l[r]&&n.jsxs("li",{className:"text-sm text-neutral-800 flex gap-2 items-center list-none pl-5 pt-1",children:[n.jsx(A,{className:"min-w-[13px]",name:t.icon||"bullet",size:13}),l[r]]})},t.name))})]})})})};D.__docgenInfo={description:"",methods:[],displayName:"SearchListItem",props:{attributes:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon?: string,
  label: string,
  name: string,
  render?: (item: any) => any
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}}]}}],raw:"Attribute[]"},description:"Attributes to display (only the first three are shown)"},item:{required:!0,flowType:{name:"any"},description:"Search item object"},isHighlight:{required:!1,flowType:{name:"boolean"},description:"Boolean that determines whether to highlight the item"},onClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when an item is clicked"},onPointerEnter:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer begins to hover over an item"},onPointerLeave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer stops hovering over an item"},title:{required:!0,flowType:{name:"string"},description:"Title of the record"},tags:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name: string, primary?: boolean, secondary?: boolean }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"primary",value:{name:"boolean",required:!1}},{key:"secondary",value:{name:"boolean",required:!1}}]}}],raw:"{ name: string, primary?: boolean, secondary?: boolean }[]"},description:"List of attributes that appear as pills on the top of the item"}}};const w=50,$=m.memo(D),a=e=>{const[l,s]=m.useState(w),t=m.useRef(null),r=m.useCallback(()=>{s(i=>e.items.length>i?i+w:i)},[e.items]);return n.jsxs("div",{className:_("h-full flex flex-col",e.className),children:[n.jsxs("div",{className:"text-sm italic bg-white sticky top-0 py-2.5 px-6 shadow-sm",children:[e.items.length," ",e.items.length===1?T.t("Common.words.result"):T.t("Common.words.results")]}),n.jsx("div",{className:"overflow-y-auto h-full",tabIndex:0,ref:t,children:n.jsx(S,{as:"ul",className:"divide-y divide-solid divide-neutral-200",offset:150,onBottomReached:r,context:t,children:e.items.slice(0,l).map((i,N)=>n.jsx($,{attributes:e.attributes,item:i,isHighlight:e.isHighlight&&e.isHighlight(i),title:typeof e.itemTitle=="string"?i[e.itemTitle]:e.itemTitle(i),onClick:e.onItemClick,onPointerEnter:e.onItemPointerEnter,onPointerLeave:e.onItemPointerLeave,tags:e.tags},N))},e.items.length)})]})};a.__docgenInfo={description:"",methods:[],displayName:"SearchList",props:{attributes:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon?: string,
  label: string,
  name: string,
  render?: (item: any) => any
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}}]}}],raw:"Attribute[]"},description:"Attributes to display (only the first three will be shown)"},className:{required:!1,flowType:{name:"string"},description:"Class name to apply to the root button element."},isHighlight:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}}},description:"Optional callback that determines whether to highlight an item"},items:{required:!0,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"},description:"Array of search result items"},itemTitle:{required:!0,flowType:{name:"union",raw:"string | (item: any) => string",elements:[{name:"string"},{name:"signature",type:"function",raw:"(item: any) => string",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"string"}}}]},description:"Field name or callback function to return the title of an item"},onItemClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when an item is clicked"},onItemPointerEnter:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer begins to hover over an item"},onItemPointerLeave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:"Callback that fires when the pointer stops hovering over an item"},tags:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name: string, primary?: boolean, secondary?: boolean }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"primary",value:{name:"boolean",required:!1}},{key:"secondary",value:{name:"boolean",required:!1}}]}}],raw:"{ name: string, primary?: boolean, secondary?: boolean }[]"},description:"List of attributes that appear as pills on the top of the item"}}};const{action:v}=__STORYBOOK_MODULE_ACTIONS__,o=L(new Array(10).fill(I).flat()),U=L(new Array(250).fill(I).flat());o[0].name="I'm a really long name to showcase how this component handles really long names.";const Q={title:"Components/Core Data/SearchList",component:a},c=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(a,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:o,itemTitle:"name"})}),d=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(a,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],tags:[{name:"geometry.type",primary:!0}],items:o,itemTitle:"name"})}),u=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(a,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:o,itemTitle:e=>`This record's name is "${e.name}"`})}),p=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(a,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:o.slice(0,1),itemTitle:"name"})}),h=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(a,{items:o,itemTitle:"name"})}),g=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(a,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:o,itemTitle:"name",onItemClick:v("click"),onItemPointerEnter:v("onPointerEnter"),onItemPointerLeave:v("onPointerLeave")})}),y=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(a,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],className:"bg-red-100 border-2 border-red-900 rounded-md",items:o,itemTitle:"name"})}),b=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(a,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:o,itemTitle:"name",isHighlight:e=>e.id%2===0})}),f=()=>n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(a,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:e=>e.coordinates?`${e.coordinates[0]}, ${e.coordinates[1]}`:""}],items:o,itemTitle:"name",isHighlight:e=>e.id%2===0,onItemClick:v("click")})}),x=()=>{const[e,l]=m.useState([]);return m.useEffect(()=>{setTimeout(()=>l(U),500)},[]),n.jsx("div",{className:"h-[600px] w-[360px]",children:n.jsx(a,{attributes:[{label:"UUID",name:"uuid"},{label:"Record ID",name:"record_id",icon:"person"},{label:"Location",name:"geometry",icon:"location",render:s=>s.coordinates?`${s.coordinates[0]}, ${s.coordinates[1]}`:""}],items:e,itemTitle:"name",onItemClick:v("click")})})};c.__docgenInfo={description:"",methods:[],displayName:"Default"};d.__docgenInfo={description:"",methods:[],displayName:"WithTags"};u.__docgenInfo={description:"",methods:[],displayName:"TitleCallback"};p.__docgenInfo={description:"",methods:[],displayName:"OneResult"};h.__docgenInfo={description:"",methods:[],displayName:"NoAttributes"};g.__docgenInfo={description:"",methods:[],displayName:"EventHandlers"};y.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};b.__docgenInfo={description:"",methods:[],displayName:"ControlledHighlight"};f.__docgenInfo={description:"",methods:[],displayName:"ControlledHighlightWithOnClick"};x.__docgenInfo={description:"",methods:[],displayName:"HugeAmountOfData"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  }]} tags={[{
    name: 'geometry.type',
    primary: true
  }]} items={LOTS_OF_DATA} itemTitle='name' />
  </div>`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
    <SearchList items={LOTS_OF_DATA} itemTitle='name' />
  </div>`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  }]} className='bg-red-100 border-2 border-red-900 rounded-md' items={LOTS_OF_DATA} itemTitle='name' />
  </div>`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => <div className='h-[600px] w-[360px]'>
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
  </div>`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}};const X=["Default","WithTags","TitleCallback","OneResult","NoAttributes","EventHandlers","CustomStyles","ControlledHighlight","ControlledHighlightWithOnClick","HugeAmountOfData"];export{b as ControlledHighlight,f as ControlledHighlightWithOnClick,y as CustomStyles,c as Default,g as EventHandlers,x as HugeAmountOfData,h as NoAttributes,p as OneResult,u as TitleCallback,d as WithTags,X as __namedExportsOrder,Q as default};
