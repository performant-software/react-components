import{j as s}from"./jsx-runtime-D9TvR9R2.js";import{x as d}from"./index.es8-BeZdBv4b.js";import{r as m}from"./index-C0dDX-lL.js";import"./index-DOYXiIEK.js";import{_ as e}from"./index-default-C_maRo4o.js";import{L as f}from"./LoadAnimation-b0qjd8WL.js";import{a as u}from"./CoreData-DmOLGfmS.js";import{f as y,a as g}from"./index-DnNB6xa5.js";const n=({onLoad:i,...p})=>{const{data:{places:r}={},loading:l}=u(i,[]),o=m.useMemo(()=>e.compact(e.map(r,a=>{var t;return(t=a.place_geometry)==null?void 0:t.geometry_json}),[r])),c=m.useMemo(()=>y(e.map(o,a=>g(a))),[o]);return l?s.jsx(f,{}):e.isEmpty(r)?null:s.jsx(d,{...p,data:c})},E=n;n.__docgenInfo={description:"This component renders a map layer for the provided related places.",methods:[],displayName:"RelatedPlacesLayer",props:{onLoad:{required:!0,flowType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:"Callback fired on mount to load the list of related places."}}};export{E as R};
