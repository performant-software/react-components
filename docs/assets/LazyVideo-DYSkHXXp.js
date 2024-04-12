import{j as a}from"./jsx-runtime-BTCK_S7S.js";import{r as i}from"./index-CBqU2yxZ.js";import{V as x,L as h}from"./LazyLoader-D1S4_28m.js";import{B as j}from"./Button-Blq7Z6RX.js";import{I as z}from"./Icon-2tEtgK8g.js";import{I as m}from"./Label-Cq1fb1cd.js";import{L as T}from"./Loader-CooidObp.js";import{S as V}from"./Segment-C5_maSSM.js";import{D as f}from"./Dimmer-D_gwaesu.js";import{T as L}from"./Transition-DSFEXhCu.js";import{i as q}from"./i18n-C8zWlANG.js";import{D as E}from"./DownloadButton-B5qnjgmD.js";import{V as N}from"./VideoPlayer-DLJxAPDP.js";const y=e=>{const[w,t]=i.useState(!1),[l,r]=i.useState(!1),[n,s]=i.useState(!(e.preview||e.src)),[v,u]=i.useState(!1),[g,b]=i.useState(!1),o=i.useCallback((c=null)=>{const d=[];return c&&d.push(c),n||d.push("hidden"),d.join(" ")},[n]);return g?a.jsxs(a.Fragment,{children:[a.jsx(L,{duration:e.duration,visible:!0,children:a.jsxs(f.Dimmable,{as:V,className:"lazy-video",compact:!0,onBlur:()=>t(!1),onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[!n&&a.jsx(h,{active:!0,size:e.size}),!l&&e.preview&&a.jsx(m,{...e.image,className:o(),onError:()=>{r(!0),s(!0)},onLoad:()=>{r(!1),s(!0)},src:e.preview,size:e.size}),!l&&!e.preview&&e.src&&a.jsx(m,{...e.image,className:o(),size:e.size,children:a.jsx("video",{onError:()=>{r(!0),s(!0)},onLoadedData:()=>{r(!1),s(!0)},src:e.src})}),(l||!e.preview&&!e.src)&&a.jsx(m,{...e.image,className:o("placeholder-image"),size:e.size,children:a.jsx(z,{name:"image",size:"big"})}),(e.src||e.children)&&e.dimmable&&a.jsx(f,{active:w,children:a.jsxs("div",{className:"buttons",children:[e.src&&a.jsx(j,{content:q.t("LazyVideo.buttons.play"),icon:"video",onClick:()=>u(!0),primary:!0}),e.download&&a.jsx(E,{color:"green",filename:e.name,url:e.download}),e.children]})})]})}),e.src&&a.jsx(N,{autoPlay:e.autoPlay,embedded:e.embedded,icon:e.icon,onClose:()=>u(!1),open:v,placeholder:e.preview,size:"large",video:e.src})]}):a.jsx(x,{as:"span",fireOnMount:!0,onTopVisible:()=>b(!0),children:a.jsx(T,{active:!0,inline:"centered",size:e.size})})};y.defaultProps={autoPlay:!1,dimmable:!0,duration:1e3,embedded:!1,icon:"right circle arrow",size:"medium"};y.__docgenInfo={description:"",methods:[],displayName:"LazyVideo",props:{autoPlay:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,flowType:{name:"Node"},description:""},dimmable:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},download:{required:!1,flowType:{name:"string"},description:""},duration:{required:!1,flowType:{name:"number"},description:"",defaultValue:{value:"1000",computed:!1}},embedded:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,flowType:{name:"union",raw:"string | Element<any>",elements:[{name:"string"},{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}]},description:"",defaultValue:{value:"'right circle arrow'",computed:!1}},image:{required:!1,flowType:{name:"any"},description:""},name:{required:!1,flowType:{name:"string"},description:""},preview:{required:!1,flowType:{name:"string",nullable:!0},description:""},size:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"'medium'",computed:!1}},src:{required:!1,flowType:{name:"string"},description:""}}};export{y as L};