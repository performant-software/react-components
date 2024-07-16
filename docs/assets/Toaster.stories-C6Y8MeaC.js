import{j as e}from"./jsx-runtime-D9TvR9R2.js";import{r as a}from"./index-C0dDX-lL.js";import{d as f}from"./index-BtSbvt4P.js";import{T as s}from"./Toaster-gMCa2mDU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-BQxZ7nrE.js";import"./pickBy-JNbKYqv1.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-BoCILj_Q.js";import"./index-Cw1G72V2.js";import"./index-CKJfshIT.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./preview-errors-CzpZmerH.js";import"./debounce-DmjZtjd2.js";import"./Message-smmiVK7n.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BSRayMAs.js";import"./Icon-C_3d7-zE.js";import"./map-DWKMCCtW.js";import"./Transition-HA1Bivu3.js";import"./includes-Cc_HXDPA.js";import"./toFinite-C3oJXAtX.js";import"./forEach-CLeEMxs1.js";import"./_baseAssignValue-UQlBDUKN.js";import"./filter-B6f9p5im.js";import"./index-default-C_maRo4o.js";const V={title:"Components/Semantic UI/Toaster",component:s,decorators:[f.withKnobs]},t=()=>(a.useState(0),e.jsx(e.Fragment,{children:e.jsx(s,{type:"info",timeout:3e3,children:e.jsx(e.Fragment,{children:"I am Info Toast!"})})})),r=()=>(a.useState(0),e.jsx(e.Fragment,{children:e.jsx(s,{type:"positive",timeout:3e3,children:e.jsx(e.Fragment,{children:"I am Positive Toast!"})})})),o=()=>(a.useState(0),e.jsx(e.Fragment,{children:e.jsx(s,{type:"negative",timeout:3e3,children:e.jsx(e.Fragment,{children:"I am Negative Toast!"})})})),n=()=>(a.useState(0),e.jsx(e.Fragment,{children:e.jsx(s,{type:"warning",timeout:3e3,children:e.jsx(e.Fragment,{children:"I am Warning Toast!"})})}));t.__docgenInfo={description:"",methods:[],displayName:"Info"};r.__docgenInfo={description:"",methods:[],displayName:"Positive"};o.__docgenInfo={description:"",methods:[],displayName:"Negative"};n.__docgenInfo={description:"",methods:[],displayName:"Warning"};var i,m,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [index, setIndex] = useState(0);
  return <>
      <Toaster type='info' timeout={3000}>
        <>
          I am Info Toast!
        </>
      </Toaster>
    </>;
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,d,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [index, setIndex] = useState(0);
  return <>
      <Toaster type='positive' timeout={3000}>
        <>
          I am Positive Toast!
        </>
      </Toaster>
    </>;
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,x,l;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [index, setIndex] = useState(0);
  return <>
      <Toaster type='negative' timeout={3000}>
        <>
          I am Negative Toast!
        </>
      </Toaster>
    </>;
}`,...(l=(x=o.parameters)==null?void 0:x.docs)==null?void 0:l.source}}};var I,T,h;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [index, setIndex] = useState(0);
  return <>
      <Toaster type='warning' timeout={3000}>
        <>
          I am Warning Toast!
        </>
      </Toaster>
    </>;
}`,...(h=(T=n.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const X=["Info","Positive","Negative","Warning"];export{t as Info,o as Negative,r as Positive,n as Warning,X as __namedExportsOrder,V as default};
