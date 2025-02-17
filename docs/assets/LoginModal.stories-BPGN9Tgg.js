import{j as o}from"./jsx-runtime-D9TvR9R2.js";import"./index-C0dDX-lL.js";import{a as r}from"./chunk-WFFRPTHA-B2vgThZf.js";import{d as i}from"./index-D3aFT48-.js";import{c as L}from"./index.es33-CRSjuIpK.js";import{F as y}from"./Form-WfNl3YLh.js";import{G as s}from"./Grid-CpdbEkBf.js";import{M as x}from"./Message-smmiVK7n.js";import{B as m}from"./Button-CJhT71wt.js";import{H as j}from"./Header-BHdMo175.js";import{I as d}from"./Icon-C_3d7-zE.js";import{I as p}from"./Input-Bwh_HEb3.js";import{M as c}from"./Modal-BWgkEMr1.js";import{i as n}from"./i18n-axRemAo9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./mapValues-BQxZ7nrE.js";import"./pickBy-JNbKYqv1.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-BoCILj_Q.js";import"./index-Cw1G72V2.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./debounce-DmjZtjd2.js";import"./index-DOYXiIEK.js";import"./iframe-B6ko1-VE.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BSRayMAs.js";import"./Label-aEFd48OX.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Cc_HXDPA.js";import"./toFinite-C3oJXAtX.js";import"./forEach-CLeEMxs1.js";import"./Dimmer-DP3fvqlo.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./Checkbox-B3tsCUtI.js";import"./_baseSet-BllfnHSO.js";import"./_baseAssignValue-UQlBDUKN.js";import"./Dropdown-DwNow7wJ.js";import"./map-DWKMCCtW.js";import"./without-Duh6Zu7H.js";import"./isArrayLikeObject-Bl_bAmop.js";import"./isEmpty-CY-Bv0TY.js";import"./deburr-CNLr_JRW.js";import"./index-mbjjMjCk.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-B6f9p5im.js";import"./i18next-WuGp4vR6.js";import"./toPropertyKey-BcUJYDQU.js";import"./defineProperty-DcNpp85p.js";import"./classCallCheck-BNzALLS0.js";import"./createClass-BA4CoEfY.js";import"./inherits-DQ5KX8TJ.js";import"./getPrototypeOf-BYVhAdwF.js";const l=e=>o.jsx(L.Consumer,{children:C=>o.jsxs(c,{as:y,className:"login-modal",error:e.loginFailed,mountNode:C,open:e.open,size:"small",trigger:e.trigger,children:[o.jsx(j,{icon:"user circle",content:n.t("LoginModal.header")}),o.jsx(x,{error:!0,header:n.t("LoginModal.loginErrorHeader"),content:n.t("LoginModal.loginErrorContent")}),o.jsx(s,{padded:"vertically",textAlign:"center",children:o.jsxs(s.Column,{children:[o.jsx(s.Row,{children:o.jsx(p,{autoFocus:!0,className:"form-field",icon:o.jsx(d,{name:"at"}),onChange:e.onUsernameChange.bind(void 0),placeholder:e.placeholder,size:"huge"})}),o.jsx(s.Row,{className:"row",children:o.jsx(p,{className:"form-field",icon:o.jsx(d,{name:"lock"}),onChange:e.onPasswordChange.bind(void 0),placeholder:n.t("LoginModal.password"),size:"huge",type:"password"})})]})}),o.jsxs(c.Actions,{children:[o.jsx(m,{disabled:e.disabled,onClick:e.onLogin.bind(void 0),primary:!0,size:"large",type:"submit",children:n.t("LoginModal.buttonLogin")}),e.onClose&&o.jsx(m,{basic:!0,onClick:e.onClose.bind(void 0),size:"large",children:n.t("LoginModal.buttonCancel")})]})]})});l.defaultProps={placeholder:n.t("LoginModal.email")};l.__docgenInfo={description:"",methods:[],displayName:"LoginModal",props:{disabled:{required:!0,flowType:{name:"boolean"},description:""},loginFailed:{required:!0,flowType:{name:"boolean"},description:""},onClose:{required:!0,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLogin:{required:!0,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPasswordChange:{required:!0,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onUsernameChange:{required:!0,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},open:{required:!0,flowType:{name:"boolean"},description:""},trigger:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:""},placeholder:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"i18n.t('LoginModal.email')",computed:!0}}}};const Do={title:"Components/Semantic UI/LoginModal",decorators:[i.withKnobs]},a=()=>o.jsx(l,{disabled:i.boolean("Disabled",!1),loginFailed:i.boolean("Login failed",!1),onClose:r("close"),onLogin:r("login"),onPasswordChange:r("password-change"),onUsernameChange:r("username-change"),open:i.boolean("Open",!0)}),t=()=>o.jsx(l,{disabled:i.boolean("Disabled",!1),loginFailed:i.boolean("Login failed",!1),onLogin:r("login"),onPasswordChange:r("password-change"),onUsernameChange:r("username-change"),open:i.boolean("Open",!0)});a.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"NoCloseButton"};var g,u,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"() => <LoginModal disabled={boolean('Disabled', false)} loginFailed={boolean('Login failed', false)} onClose={action('close')} onLogin={action('login')} onPasswordChange={action('password-change')} onUsernameChange={action('username-change')} open={boolean('Open', true)} />",...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var h,b,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"() => <LoginModal disabled={boolean('Disabled', false)} loginFailed={boolean('Login failed', false)} onLogin={action('login')} onPasswordChange={action('password-change')} onUsernameChange={action('username-change')} open={boolean('Open', true)} />",...(w=(b=t.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const Po=["Default","NoCloseButton"];export{a as Default,t as NoCloseButton,Po as __namedExportsOrder,Do as default};
