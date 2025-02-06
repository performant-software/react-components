import{j as e}from"./jsx-runtime-BTCK_S7S.js";import{c as a}from"./clsx-B-dksMZM.js";import"./index-CBqU2yxZ.js";import{_ as u}from"./index-default-C_maRo4o.js";import{E as i}from"./Event-D8mg3hxJ.js";const n=r=>e.jsx("ul",{className:r.className,children:u.map(r.events,t=>e.jsx("li",{children:e.jsx("div",{className:"min-h-[5.5em] border-b flex flex-col justify-start",children:e.jsxs("button",{className:a("py-3","px-4","flex-grow","text-left","inline-flex","flex-col","rounded-none",{"hover:bg-event-selected":r.isSelected(t)},{"text-white":r.isSelected(t)},{"bg-event-selected":r.isSelected(t)}),onClick:()=>r.onClick(t),type:"button",children:[e.jsx("div",{className:"flex justify-between w-full items-center",children:e.jsxs("div",{className:"flex-grow",children:[e.jsx("div",{children:i.getDateView(t)}),e.jsx("h2",{className:"text-xl font-bold",children:t.name})]})}),r.description&&e.jsx("p",{className:a("py-2",{"text-muted":!r.isSelected(t)}),children:t.description})]})})}))});n.defaultProps={isSelected:()=>!1,onClick:()=>{}};n.__docgenInfo={description:"",methods:[],displayName:"EventsList",props:{className:{required:!1,flowType:{name:"string"},description:"(Optional) class name to apply to the root element."},description:{required:!1,flowType:{name:"boolean"},description:"If `true`, the event description will be displayed on the card."},events:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"accuracy",value:{name:"number",required:!0}},{key:"range",value:{name:"boolean",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"start_date",value:{name:"Date",required:!0}},{key:"end_date",value:{name:"Date",required:!0}}]},required:!0}}]}}],raw:"Array<EventType>"},description:"The list of events records to display."},isSelected:{required:!1,flowType:{name:"signature",type:"function",raw:"(event: EventType) => boolean",signature:{arguments:[{name:"event",type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"accuracy",value:{name:"number",required:!0}},{key:"range",value:{name:"boolean",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"start_date",value:{name:"Date",required:!0}},{key:"end_date",value:{name:"Date",required:!0}}]},required:!0}}]}}}],return:{name:"boolean"}}},description:"Callback that returns `true` if the passed event is selected.",defaultValue:{value:"() => false",computed:!1}},onClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(event: EventType) => void",signature:{arguments:[{name:"event",type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"accuracy",value:{name:"number",required:!0}},{key:"range",value:{name:"boolean",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"start_date",value:{name:"Date",required:!0}},{key:"end_date",value:{name:"Date",required:!0}}]},required:!0}}]}}}],return:{name:"void"}}},description:"Callback fired when the event row is clicked.",defaultValue:{value:"() => {}",computed:!1}}}};export{n as E};
