import{m,b as h,f as E,a as f,g as $}from"./peripleo-maplibre.es11-BG7NFGMs.js";import{r as a}from"./index-C0dDX-lL.js";import{r as R}from"./index-DOYXiIEK.js";const g=10,I=e=>{const t=m(),o=new Set(Array.isArray(e.layerId)?e.layerId:[e.layerId]),s=a.useRef(null),[i,n]=a.useState(),p=r=>{const c=r.target,u=c.queryRenderedFeatures(r.point).filter(({layer:l})=>o.has(l.id));if(u.length>0){const{id:l,type:v,source:b,properties:d,geometry:S}=u[0];d.cluster?c.getSource(b).getClusterLeaves(d.cluster_id,1/0,0,(x,P)=>{if(!x){const w=P.map(y=>({type:y.type,properties:y.properties,geometry:y.geometry}));n({target:{clusterId:l,features:w},event:r.originalEvent})}}):n({target:{type:v,properties:d,geometry:S},event:r.originalEvent})}else n(void 0)};return a.useLayoutEffect(()=>{if(s.current){const{clientX:r,clientY:c}=i.event,u=s.current.style;u.left=`${r+g}px`,u.top=`${c+g}px`}},[i]),a.useEffect(()=>(t.on("mousemove",p),()=>{t.off("mousemove",p)}),[t]),i&&R.createPortal(h.jsx("div",{ref:s,className:"p6o-tooltip-container",children:e.content(i.target,i.event)}),document.body)},L={type:"circle",paint:{"circle-radius":["interpolate",["linear"],["number",["get","point_count"],1],0,4,10,14],"circle-stroke-width":1,"circle-color":["case",["boolean",["feature-state","hover"],!1],"#3b62ff","#ff623b"],"circle-stroke-color":"#8d260c"}},M={type:"fill",paint:{"fill-color":"#ff623b","fill-opacity":.2}},z={type:"line",paint:{"line-color":"#ff623b","line-opacity":.6}},F=e=>{const{id:t,data:o}=e,s=e.visible===void 0?!0:e.visible,i=e.fillStyle||M,n=e.strokeStyle||z,p=e.pointStyle||L,r=E(),[c,u]=a.useState();return a.useEffect(()=>{r&&new Set(r.getStyle().layers.map(l=>l.id)).has(e.id)&&r.setLayoutProperty(e.id,"visibility",s?"visible":"none")},[s,r]),a.useEffect(()=>{if(!r)return;const l=`source-${t}`;return r.addSource(l,{type:"geojson",data:o,...e.cluster&&{cluster:!0},...e.clusterRadius!==void 0&&{clusterRadius:e.clusterRadius},...e.clusterMaxZoom!==void 0&&{clusterMaxZoom:e.clusterMaxZoom},...e.clusterMinPoints!==void 0&&{clusterMinPoints:e.clusterMinPoints},...e.clusterProperties!==void 0&&{clusterProperties:e.clusterProperties}}),r.addLayer({id:`layer-${t}-fill`,...i,source:`source-${t}`,filter:["!=","$type","Point"],metadata:{interactive:e.interactive}}),r.addLayer({id:`layer-${t}-line`,...n,source:`source-${t}`,filter:["!=","$type","Point"]}),r.addLayer({id:`layer-${t}-point`,...p,filter:["==","$type","Point"],source:`source-${t}`,metadata:{interactive:e.interactive}}),u(l),setTimeout(()=>r.moveLayer(`layer-${t}-point`),10),()=>{f(r,`layer-${t}-point`),f(r,`layer-${t}-line`),f(r,`layer-${t}-fill`),$(r,l)}},[r]),a.useEffect(()=>{c&&r.getSource(c).setData(o)},[c,o]),e.tooltip?h.jsx(I,{layerId:[`layer-${t}-point`,`layer-${t}-fill`],content:e.tooltip}):null},A=(e,t,o,s)=>({width:e,height:e,data:new Uint8Array(e*e*4),onAdd:function(){const i=document.createElement("canvas");i.width=this.width,i.height=this.height,this.context=i.getContext("2d",{willReadFrequently:!0})},render:function(){const i=performance.now()%o/o,n=e/2*.2,p=e/2*.7*i+n,r=this.context;return r.clearRect(0,0,this.width,this.height),r.beginPath(),r.arc(this.width/2,this.height/2,p,0,Math.PI*2),r.fillStyle=`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${1.5*(1-i)})`,r.fill(),this.data=r.getImageData(0,0,this.width,this.height).data,s.triggerRepaint(),!0}});let C=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,o)=>(o&=63,o<36?t+=o.toString(36):o<62?t+=(o-26).toString(36).toUpperCase():o>62?t+="-":t+="_",t),"");const j=e=>{const t=m(),o=a.useMemo(()=>`pulse-${C()}`,[]),s=typeof e=="number"?e:e.size,i=typeof e=="number"?[246,112,86]:e.rgb||[246,112,86],n=typeof e=="number"?1e3:e.duration||1e3;return a.useEffect(()=>(t.addImage(o,A(s*2,i,n,t),{pixelRatio:2}),()=>{t.removeImage(o)}),[]),{type:"symbol",layout:{"icon-image":o}}},N=e=>{const{id:t,data:o}=e,s=m(),i=j(e.size||100);return a.useEffect(()=>(s.addSource(`source-${t}-pulse`,{type:"geojson",data:o}),s.addLayer({id:`layer-${t}-pulse`,...i,filter:["==","$type","Point"],source:`source-${t}-pulse`}),()=>{s.removeLayer(`layer-${t}-pulse`),s.removeSource(`source-${t}-pulse`)}),[o]),null},k=8,D={osm:{type:"raster",tiles:["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],tileSize:256,attribution:"&copy; OpenStreetMap Contributors",maxzoom:19}},U=[{id:"osm",type:"raster",source:"osm"}],O={version:k,sources:D,layers:U};export{N as f,F as g,O as m};
