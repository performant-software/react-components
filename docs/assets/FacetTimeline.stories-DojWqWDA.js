import{j as e}from"./jsx-runtime-D9TvR9R2.js";import{r}from"./index-C0dDX-lL.js";import{E as te}from"./EventDetails-D0v3qd9V.js";import{E as de}from"./EventsList-bCMpFejv.js";import"./index.es33-CW0D-q8I.js";import{T as pe}from"./index.es11-CDIfCsDR.js";import{R as ye,T as ge,P as ve,C as fe,a as be}from"./index-CpbeRJko.js";import{R as xe,d as he}from"./index-DphhVPUj.js";import{c as Z}from"./clsx-B-dksMZM.js";import{_ as N}from"./index-default-C_maRo4o.js";import{E as ke}from"./Event-C2kRGI-Z.js";import{F as we}from"./FacetSlider-Dx8d2Ola.js";import{u as Ce}from"./CoreData-37WkoVSV.js";import{c as T}from"./createLucideIcon-Cly0WHBx.js";import{C as je,a as qe}from"./chevron-right-DnfwX419.js";import{M as ne}from"./Modal-uz4L1dKM.js";import{w as j}from"./CoreDataContextProvider-Btcnl27g.js";import{c as Ee}from"./createLucideIcon-DTDp3q8_.js";import"./_commonjsHelpers-BosuxZz1.js";import"./LoadAnimation-b0qjd8WL.js";import"./index-DOYXiIEK.js";import"./iframe-BlsJ0wWf.js";import"../sb-preview/runtime.js";import"./floating-ui.react-dom-BUm7GwT3.js";import"./component-Cj9xgufj.js";const _e=(t,n)=>{const l=Math.ceil(t),o=Math.floor(n);return Math.floor(Math.random()*(o-l)+l)},Se={getRandomInt:_e};/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=T("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=T("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=T("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.362.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=Ee("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]),ae=t=>{const{range:n={},refine:l,start:o=[]}=t,u=Math.max(n.min,Number.isFinite(o[0])?o[0]:n.min),g=Math.min(n.max,Number.isFinite(o[1])?o[1]:n.max),[c,p]=r.useState(),[v,re]=r.useState(n.max),[f,ie]=r.useState(n.min),[m,_]=r.useState(n.max),[d,S]=r.useState(n.min),[s,D]=r.useState([u,g]),se=Ce(),b=r.useRef(),{clearTimer:oe,setTimer:ue}=pe(),M=r.useCallback(()=>{const a=d+t.zoom,i=m-t.zoom;a>=i||(S(a),_(i))},[m,d,t.zoom]),z=r.useCallback(()=>{const a=d-t.zoom,i=m+t.zoom;a>=i||(S(a),_(i))},[m,d,n,t.zoom]),L=r.useCallback(()=>{S(f),_(v);let a=s[0],i=s[1];s[0]<f&&(a=f),s[1]>v&&(i=v),D([a,i])},[v,f,s]),le=r.useMemo(()=>[{label:"Zoom In",icon:e.jsx(Ne,{}),onClick:M},{label:"Zoom Out",icon:e.jsx(Te,{}),onClick:z},{label:"Zoom Reset",icon:e.jsx(De,{}),onClick:L}],[M,z,L]),ce=r.useCallback(a=>{var R,V;let i;const I=((R=a.start_date)==null?void 0:R.start_date)||((V=a.end_date)==null?void 0:V.start_date);return I&&(i=new Date(I).getFullYear()),i},[]),F=r.useCallback(a=>{p(N.map(a.events,i=>({...i,year:ce(i),offset:Se.getRandomInt(-30,10)})))},[]),me=r.useMemo(()=>N.pluck(c,"year"),[c]);return r.useEffect(()=>{s&&(oe(),ue(()=>{p([]);const a={min_year:s[0],max_year:s[1]};se.fetchAll(a).then(F)}))},[F,m,d,s]),r.useEffect(()=>{t.onLoad&&t.onLoad(c)},[c,t.onLoad]),r.useEffect(()=>{D([u,g]),S(n.min),_(n.max),!f&&n.min&&ie(n.min),!v&&n.max&&re(n.max)},[u,g,n.min,n.max]),e.jsxs("div",{className:Z({"pt-24":!t.description},{"pt-40":t.description},t.className),ref:b,children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("button",{"aria-label":"Slider Left",className:"p-4 cursor-auto opacity-0",type:"button",children:e.jsx(je,{})}),e.jsx(xe,{className:"relative flex flex-grow h-5 touch-none items-center w-full",max:m,min:d,value:me,children:N.map(c,a=>e.jsxs(ye,{open:!0,children:[e.jsx(ge,{asChild:!0,children:e.jsx(he,{})}),e.jsx(ve,{container:b.current,children:e.jsx(fe,{asChild:!0,collisionBoundary:b==null?void 0:b.current,collisionPadding:{top:10,left:20,right:20,bottom:10},sideOffset:a.offset,side:"top",children:e.jsxs("button",{"aria-label":a.name,className:Z("bg-white","hover:bg-white","p-5","rounded-md","shadow-md","shadow-gray-1000","max-w-xs","max-h-36","overflow-hidden","transition","duration-500","hover:scale-105","cursor-pointer","focus:outline-none","text-left","text-black"),onClick:()=>t.onClick&&t.onClick(a),type:"button",children:[e.jsx("h2",{className:"font-medium text-base whitespace-nowrap line-clamp-1 text-ellipsis",children:a.name}),e.jsx("p",{className:"text-muted",children:ke.getDateView(a)}),t.description&&e.jsx("p",{className:"text-muted",children:a.description}),e.jsx(be,{className:"fill-white"})]})})})]},a.uuid))}),e.jsx("button",{"aria-label":"Slider Right",className:"p-4 cursor-auto opacity-0",type:"button",children:e.jsx(qe,{})})]}),e.jsx(we,{actions:[...le,...t.actions||[]],classNames:t.classNames,max:m,min:d,onValueChange:D,onValueCommit:l,position:"bottom",value:s})]})},y=ae;ae.__docgenInfo={description:"",methods:[],displayName:"FacetTimeline",props:{actions:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Class name to apply to the button element.
   */
  className?: string,

  /**
   * (Optional) icon to render inside the button element.
   */
  icon?: JSX.Element,

  /**
   * Button label.
   */
  label: string,

  /**
   * Callback fired when the button is clicked.
   */
  onClick: () => void
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1},description:"Class name to apply to the button element."},{key:"icon",value:{name:"JSX.Element",required:!1},description:"(Optional) icon to render inside the button element."},{key:"label",value:{name:"string",required:!0},description:"Button label."},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0},description:"Callback fired when the button is clicked."}]}}],raw:"Array<ActionType>"},description:"Custom actions to render with the FacetSlider."},className:{required:!1,flowType:{name:"string"},description:"Class name to apply to the root DOM element."},classNames:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  button: string,
  range: string,
  root: string,
  thumb: string,
  track: string,
  zoom: string
}`,signature:{properties:[{key:"button",value:{name:"string",required:!0}},{key:"range",value:{name:"string",required:!0}},{key:"root",value:{name:"string",required:!0}},{key:"thumb",value:{name:"string",required:!0}},{key:"track",value:{name:"string",required:!0}},{key:"zoom",value:{name:"string",required:!0}}]}},description:"Class names to apply to the FacetSlider components."},description:{required:!1,flowType:{name:"boolean"},description:"If `true`, the event popover content will display the event description."},onClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(event: EventType) => void",signature:{arguments:[{name:"event",type:{name:"signature",type:"object",raw:`{
  uuid: string,
  name: string,
  description: string,
  start_date: FuzzyDate,
  end_date: FuzzyDate
}`,signature:{properties:[{key:"uuid",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"start_date",value:{name:"signature",type:"object",raw:`{
  accuracy: number,
  range: boolean,
  description: string,
  start_date: Date,
  end_date: Date
}`,signature:{properties:[{key:"accuracy",value:{name:"number",required:!0}},{key:"range",value:{name:"boolean",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"start_date",value:{name:"Date",required:!0}},{key:"end_date",value:{name:"Date",required:!0}}]},required:!0}},{key:"end_date",value:{name:"signature",type:"object",raw:`{
  accuracy: number,
  range: boolean,
  description: string,
  start_date: Date,
  end_date: Date
}`,signature:{properties:[{key:"accuracy",value:{name:"number",required:!0}},{key:"range",value:{name:"boolean",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"start_date",value:{name:"Date",required:!0}},{key:"end_date",value:{name:"Date",required:!0}}]},required:!0}}]}}}],return:{name:"void"}}},description:"Callback fired when the event popover is clicked."},onLoad:{required:!1,flowType:{name:"signature",type:"function",raw:"(events: Array<EventType>) => void",signature:{arguments:[{name:"events",type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  uuid: string,
  name: string,
  description: string,
  start_date: FuzzyDate,
  end_date: FuzzyDate
}`,signature:{properties:[{key:"uuid",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"start_date",value:{name:"signature",type:"object",raw:`{
  accuracy: number,
  range: boolean,
  description: string,
  start_date: Date,
  end_date: Date
}`,signature:{properties:[{key:"accuracy",value:{name:"number",required:!0}},{key:"range",value:{name:"boolean",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"start_date",value:{name:"Date",required:!0}},{key:"end_date",value:{name:"Date",required:!0}}]},required:!0}},{key:"end_date",value:{name:"signature",type:"object",raw:`{
  accuracy: number,
  range: boolean,
  description: string,
  start_date: Date,
  end_date: Date
}`,signature:{properties:[{key:"accuracy",value:{name:"number",required:!0}},{key:"range",value:{name:"boolean",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"start_date",value:{name:"Date",required:!0}},{key:"end_date",value:{name:"Date",required:!0}}]},required:!0}}]}}],raw:"Array<EventType>"}}],return:{name:"void"}}},description:"Callback fired when the events are loaded."},range:{required:!0,flowType:{name:"signature",type:"object",raw:`{
  max: number,
  min: number
}`,signature:{properties:[{key:"max",value:{name:"number",required:!0}},{key:"min",value:{name:"number",required:!0}}]}},description:"The absolute min/max values for the timeline range."},refine:{required:!0,flowType:{name:"signature",type:"function",raw:"(number | [number, number]) => void",signature:{arguments:[{name:"",type:{name:"union",raw:"number | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}]}}],return:{name:"void"}}},description:`Callback fired when the slider value(s) are changed.

@param any`},start:{required:!0,flowType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"The current value of the slider."},zoom:{required:!1,flowType:{name:"number"},description:"Zoom level increment."}}};const rt={title:"Components/Core Data/FacetTimeline",component:y},q={min:1768,max:1777},E=()=>{},x=j(()=>e.jsx(y,{range:q,refine:E,zoom:10})),h=j(()=>e.jsx(y,{className:"bg-gray-1000 text-white",classNames:{button:"px-4",range:"bg-white",thumb:"bg-white",track:"bg-gray-400",zoom:"text-white"},range:q,refine:E,zoom:10})),k=j(()=>{const[t,n]=r.useState();return e.jsxs(e.Fragment,{children:[e.jsx(y,{onClick:l=>n(l),range:q,refine:E,zoom:10}),t&&e.jsx(ne,{onClose:()=>n(null),open:!0,children:e.jsx(te,{id:t.uuid})})]})}),w=j(()=>{const[t,n]=r.useState([]),[l,o]=r.useState(!1),[u,g]=r.useState(),c=r.useCallback(p=>u&&u.uuid===p.uuid,[u]);return e.jsxs(e.Fragment,{children:[e.jsx(y,{actions:[{label:"Show List",icon:e.jsx(Me,{}),onClick:()=>o(!0)}],onLoad:n,range:q,refine:E,zoom:10}),l&&e.jsx(ne,{onClose:()=>o(!1),open:!0,children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"basis-full h-[80vh] overflow-auto",children:e.jsx(de,{description:!0,events:t,isSelected:c,onClick:p=>g(p)})}),u&&e.jsx(te,{className:"basis-full",id:u.uuid})]})})]})}),C=j(()=>e.jsx(y,{description:!0,range:q,refine:E,zoom:10}));x.__docgenInfo={description:"",methods:[],displayName:"Default"};h.__docgenInfo={description:"",methods:[],displayName:"Styled"};k.__docgenInfo={description:"",methods:[],displayName:"EventModal"};w.__docgenInfo={description:"",methods:[],displayName:"ListView"};C.__docgenInfo={description:"",methods:[],displayName:"Description"};var O,P,A;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:"withCoreDataContextProvider(() => <FacetTimeline range={range} refine={refine} zoom={10} />)",...(A=(P=x.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var B,J,X;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`withCoreDataContextProvider(() => <FacetTimeline className='bg-gray-1000 text-white' classNames={{
  button: 'px-4',
  range: 'bg-white',
  thumb: 'bg-white',
  track: 'bg-gray-400',
  zoom: 'text-white'
}} range={range} refine={refine} zoom={10} />)`,...(X=(J=h.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,$,U;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const [selectedEvent, setSelectedEvent] = useState();
  return <>
      <FacetTimeline onClick={event => setSelectedEvent(event)} range={range} refine={refine} zoom={10} />
      {selectedEvent && <Modal onClose={() => setSelectedEvent(null)} open>
          <EventDetails id={selectedEvent.uuid} />
        </Modal>}
    </>;
})`,...(U=($=k.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var G,H,K;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`withCoreDataContextProvider(() => {
  const [events, setEvents] = useState([]);
  const [listView, setListView] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState();

  /**
   * Returns true if the passed event is currently selected.
   *
   * @type {unknown}
   */
  const isSelected = useCallback(event => selectedEvent && selectedEvent.uuid === event.uuid, [selectedEvent]);
  return <>
      <FacetTimeline actions={[{
      label: 'Show List',
      icon: <List />,
      onClick: () => setListView(true)
    }]} onLoad={setEvents} range={range} refine={refine} zoom={10} />
      {listView && <Modal onClose={() => setListView(false)} open>
          <div className='flex gap-4'>
            <div className='basis-full h-[80vh] overflow-auto'>
              <EventsList description events={events} isSelected={isSelected} onClick={event => setSelectedEvent(event)} />
            </div>
            {selectedEvent && <EventDetails className='basis-full' id={selectedEvent.uuid} />}
          </div>
        </Modal>}
    </>;
})`,...(K=(H=w.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var Q,W,ee;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:"withCoreDataContextProvider(() => <FacetTimeline description range={range} refine={refine} zoom={10} />)",...(ee=(W=C.parameters)==null?void 0:W.docs)==null?void 0:ee.source}}};const it=["Default","Styled","EventModal","ListView","Description"];export{x as Default,C as Description,k as EventModal,w as ListView,h as Styled,it as __namedExportsOrder,rt as default};
