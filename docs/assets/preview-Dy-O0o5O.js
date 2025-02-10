import{_ as f}from"./iframe-bezd0_2E.js";import"../sb-preview/runtime.js";const{global:N}=__STORYBOOK_MODULE_GLOBAL__,{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__;var n="storybook/a11y",y=`${n}/result`,U=`${n}/request`,g=`${n}/running`,p=`${n}/error`,w=`${n}/manual`,a={RESULT:y,REQUEST:U,RUNNING:g,ERROR:p,MANUAL:w},{document:L,window:d}=N,r=T.getChannel(),o=!1,l,A=async e=>{let{manual:t}=await O(e);t||await _(e)},_=async e=>{l=e;try{let t=await O(e);if(!o){o=!0,r.emit(a.RUNNING);let i=(await f(()=>import("./axe-v-VkGQKA.js").then(S=>S.a),__vite__mapDeps([0,1]),import.meta.url)).default,{element:R="#storybook-root",config:s,options:E={}}=t,u=L.querySelector(R);if(!u)return;i.reset(),s&&i.configure(s);let m=await i.run(u,E),c=JSON.parse(JSON.stringify(m));l===e?r.emit(a.RESULT,c):(o=!1,_(l))}}catch(t){r.emit(a.ERROR,t)}finally{o=!1}},O=async e=>{let{parameters:t}=await d.__STORYBOOK_STORY_STORE__.loadStory({storyId:e})||{};return t.a11y||{config:{},options:{}}};r.on(a.REQUEST,A);r.on(a.MANUAL,_);
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./axe-v-VkGQKA.js","./_commonjsHelpers-BosuxZz1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
