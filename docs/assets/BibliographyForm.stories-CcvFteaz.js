import{j as l}from"./jsx-runtime-BTCK_S7S.js";import{r as v}from"./index-CBqU2yxZ.js";import{F as A}from"./Form-fErk-qk_.js";import{B as g}from"./BibliographyForm-D3b_g0ZP.js";import{_ as i}from"./index-default-C_maRo4o.js";import{i as m}from"./i18n-Dfa7mXnt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CckcRzoH.js";import"./Button-Blq7Z6RX.js";import"./Icon-2tEtgK8g.js";import"./Label-Cq1fb1cd.js";import"./ModernAutoControlledComponent-DJBWk5EW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CQoJOerW.js";import"./toFinite-KQ8KevIC.js";import"./forEach-CXlln0XP.js";import"./Dimmer-D_gwaesu.js";import"./Portal-DvhHJPzU.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DZGZymok.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-B4PnIEPz.js";import"./Checkbox-C9uAfnsM.js";import"./_baseSet-6y0qliU9.js";import"./_baseAssignValue-izmKBXUH.js";import"./Dropdown-Di2cPjwR.js";import"./without-BP-mqg2K.js";import"./isArrayLikeObject-CbXKTyfk.js";import"./isEmpty-Cyb9hIKi.js";import"./deburr-CEfyoYOr.js";import"./index-BBpNyw-T.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-CVNi8iPS.js";import"./Input--hQVCRQV.js";import"./Bibliography-isW7v-pd.js";import"./i18n-C8zWlANG.js";import"./i18next-Sc0HEOoc.js";import"./toPropertyKey-hKuLU48H.js";import"./defineProperty-CCxoMnQV.js";import"./inherits-D5wXBZoG.js";import"./createClass-D2z1h_eG.js";import"./getPrototypeOf-BYVhAdwF.js";const b=["",null,void 0,[],{}],x={emptyValues:b,ignoreHtml:!0,ignoreWhitespace:!0},d=/(<([^>]+)>)/gi,u=/\s\s+/g,y=r=>i.isObject(r)||i.isArray(r)?i.isEmpty(r):!r,S=(r,t,e={})=>{const s=i.defaults(e,x);if(r===t||i.contains(s.emptyValues,r)&&i.contains(s.emptyValues,t))return!0;if(i.isString(r)&&i.isString(t)){let o=r,n=t;if(s.ignoreWhitespace&&(o=r.replace(u," "),n=t.replace(u," ")),s.ignoreHtml&&(o=o.replace(d,""),n=n.replace(d,"")),o===n)return!0}if(i.isFunction(r)&&i.isFunction(t)&&r.toString()===t.toString())return!0;if(r!==null&&typeof r=="object"&&t!==null&&typeof t=="object"){const o=i.keys(r),n=i.keys(t);if(o.length!==n.length)return!1;let p=!0;return i.each(i.keys(r),a=>{i.has(t,a)&&S(r[a],t[a])||(p=!1)}),!!p}return!1},I=r=>!!r&&typeof r=="object"&&typeof r.then=="function",c={isEmpty:y,isEqual:S,isPromise:I},R="can't be blank",F="has already been taken",q=r=>class extends v.Component{constructor(t){super(t);const e=i.defaults(t.item||{},t.defaults||{});this.state={item:e,loading:!1,originalItem:e,saving:!1,validationErrors:[]}}componentDidMount(){this.props.onInitialize&&this.props.item&&this.props.item.id&&this.setState({loading:!0},()=>{this.props.onInitialize&&this.props.item&&this.props.onInitialize(this.props.item.id).then(t=>this.setState({item:t,originalItem:t,loading:!1}))})}componentDidUpdate(t){t.item!==this.props.item&&this.setState({item:this.props.item,originalItem:this.props.item})}componentWillUnmount(){this.onSetState({saving:!1})}isChild(t,e){return t.uid&&e.uid&&t.uid===e.uid||t.id&&e.id&&t.id===e.id}isRequired(t){return this.props.required&&i.contains(this.props.required,t)}isError(t){return i.has(this.state.validationErrors,t)}onClearValidationError(...t){this.setState(e=>({validationErrors:i.omit(e.validationErrors,t)}))}onClose(){this.props.onClose()}onCreateChildAssociation(t,e){this.setState(s=>({item:{...s.item,[t]:[...s.item[t]||[],e]}}))}onDeleteChildAssociation(t,e){return e.id?this.onMarkChildAssociationForDelete(t,e):this.onRemoveChildAssociation(t,e)}onError({response:{data:{errors:t={}},status:e}}){const s={};i.each(Object.keys(t),o=>{const n=t[o],p=this.state.item[o];i.each(n,a=>{a===F?i.extend(s,{[o]:m.t("EditContainer.errors.unique",{key:o,value:p})}):a===R?i.extend(s,{[o]:m.t("EditContainer.errors.required",{key:o})}):this.props.resolveValidationError&&i.extend(s,this.props.resolveValidationError({key:o,error:a,status:e,item:this.state.item}))})}),e===400&&i.isEmpty(s)?i.extend(s,{error:m.t("EditContainer.errors.general")}):e===500&&i.isEmpty(s)&&i.extend(s,{error:m.t("EditContainer.errors.system")}),this.setState({saving:!1,validationErrors:s})}onMarkChildAssociationForDelete(t,e){this.setState(s=>({item:{...s.item,[t]:i.map(s.item[t]||[],o=>o.id===e.id?{...o,_destroy:!0}:o)}}))}onMultiAddChildAssociations(t,e){const s=this.state.item[t];i.each(e,this.onSaveChildAssociation.bind(this,t));const o=i.filter(s,n=>!i.find(e,this.isChild.bind(this,n)));i.each(o,this.onDeleteChildAssociation.bind(this,t))}onRemoveChildAssociation(t,e){this.setState(s=>({item:{...s.item,[t]:i.filter(s.item[t]||[],o=>!(this.isChild(o,e)||c.isEqual(o,e)))}}))}onReset(){const t=this.props.defaults||{};this.setState({item:t,originalItem:t})}onSave(){this.validateForm()&&this.setState({saving:!0},()=>{this.props.onSave(this.state.item).catch(this.onError.bind(this)).finally(()=>this.setState({saving:!1}))})}onSaveChildAssociation(t,e){const s=this.state.item[t]||[];return i.find(s,this.isChild.bind(this,e))?this.onUpdateChildAssociation(t,e):this.onCreateChildAssociation(t,e)}onUpdateChildAssociation(t,e){this.setState(s=>({item:{...s.item,[t]:i.map(s.item[t]||[],o=>this.isChild(e,o)?e:o)}}))}onAssociationInputChange(t,e,s={}){this.setState(o=>({item:{...o.item,[t]:s.id||"",[e]:s||{}},validationErrors:i.omit(o.validationErrors,t)}))}onCheckboxInputChange(t){this.setState(e=>({item:{...e.item,[t]:!e.item[t]}}))}onSetState(t){this.setState(e=>({item:{...e.item,...t},validationErrors:i.omit(e.validationErrors,i.keys(t))}))}onTextInputChange(t,e,{value:s}){this.setState(o=>({item:{...o.item,[t]:s},validationErrors:i.omit(o.validationErrors,t)}))}render(){return l.jsx(r,{...this.props,dirty:!!(this.state.item.id&&!c.isEqual(this.state.item,this.state.originalItem)),errors:i.values(this.state.validationErrors),isError:this.isError.bind(this),isRequired:this.isRequired.bind(this),item:this.state.item,loading:this.state.loading,onAssociationInputChange:this.onAssociationInputChange.bind(this),onCheckboxInputChange:this.onCheckboxInputChange.bind(this),onClearValidationError:this.onClearValidationError.bind(this),onDeleteChildAssociation:this.onDeleteChildAssociation.bind(this),onMultiAddChildAssociations:this.onMultiAddChildAssociations.bind(this),onReset:this.onReset.bind(this),onSave:this.onSave.bind(this),onSaveChildAssociation:this.onSaveChildAssociation.bind(this),onTextInputChange:this.onTextInputChange.bind(this),onSetState:this.onSetState.bind(this),saving:this.state.saving})}validateForm(){const t=[];this.props.validate&&i.extend(t,this.props.validate(this.state.item));const e=this.props.required||[];return i.each(e,s=>{const o=this.state.item[s];let n;i.isNumber(o)?n=i.isEmpty(o.toString()):n=i.isEmpty(o),n&&i.extend(t,{[s]:m.t("EditContainer.errors.required",{key:s})})}),this.setState({validationErrors:t}),i.keys(t).length===0}},_=q(g),At={title:"Components/Semantic UI/BibliographyForm",component:g},h=()=>l.jsx(A,{children:l.jsx(_,{item:{itemType:"book"}})});h.__docgenInfo={description:"",methods:[],displayName:"Default"};var f,E,C;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Form>
    <BibliographyFormComponent item={{
    itemType: 'book'
  }} />
  </Form>`,...(C=(E=h.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const bt=["Default"];export{h as Default,bt as __namedExportsOrder,At as default};