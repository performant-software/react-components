import{j as o}from"./jsx-runtime-D9TvR9R2.js";import{r as n}from"./index-C0dDX-lL.js";import{M as l}from"./Menu-C3RUPz9h.js";import{D as m}from"./Dropdown-DwNow7wJ.js";import{_ as f}from"./index-default-C_maRo4o.js";import{R as M}from"./Portal-B8DXQ6EK.js";const p=t=>{const[c,s]=n.useState(!1),e=n.useRef(),i=n.useCallback(()=>s(!0),[]),a=n.useCallback(()=>s(!1),[]);return n.useEffect(()=>(e.current&&(e.current.addEventListener("mouseenter",i),e.current.addEventListener("mouseleave",a)),()=>{e.current&&(e.current.removeEventListener("mouseenter",i),e.current.removeEventListener("mouseleave",a))}),[e]),n.useEffect(()=>{e.current&&t.role&&e.current.setAttribute("role",t.role)},[e,t.role]),o.jsx(M,{innerRef:e,children:o.jsx(m,{...t,open:c,onClick:()=>{t.onClick&&t.onClick(),s(!1)},children:o.jsx(m.Menu,{children:t.children})})})};p.defaultProps={onClick:void 0};p.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{children:{required:!0,flowType:{name:"Node"},description:""},onClick:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"undefined",computed:!0}},role:{required:!1,flowType:{name:"string"},description:""}}};const v=({header:t,items:c,...s})=>{const e=n.useCallback((r,u)=>o.jsx(m.Item,{...r},u),[]),i=n.useCallback((r,u)=>o.jsx(l.Item,{...r},u),[]),a=n.useCallback((r,u)=>o.jsx(p,{"aria-label":r.content,item:!0,role:"group",text:r.content,children:f.map(r.items,d=>d.items?a(d):e(d))},u),[]),w=n.useCallback(r=>r.items?a(r):i(r),[]);return o.jsxs(l,{...s,className:"menu-bar",children:[o.jsx(l.Item,{...t,header:!0}),f.map(c,r=>w(r))]})};v.__docgenInfo={description:"",methods:[],displayName:"MenuBar",props:{header:{required:!0,flowType:{name:"HeaderProps"},description:""},items:{required:!0,flowType:{name:"Array",elements:[{name:"union",raw:"DropdownItemProps | MenuProps",elements:[{name:"DropdownItemProps"},{name:"MenuProps"}]}],raw:"Array<DropdownItemProps | MenuProps>"},description:""}}};export{v as M};