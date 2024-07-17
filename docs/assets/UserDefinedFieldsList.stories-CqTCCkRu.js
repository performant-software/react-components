import{j as d}from"./jsx-runtime-D9TvR9R2.js";import{r}from"./index-C0dDX-lL.js";import{d as F}from"./index-BdoI7aoa.js";import{_ as l}from"./index-default-C_maRo4o.js";import{j as S}from"./index.es98-DOj-UXdO.js";import{i as n,O as C,U as y,a as L}from"./UserDefinedFields-ChTxxBcj.js";import"./index.es30-D7t7bWSN.js";import"./index-DOYXiIEK.js";import{U as f}from"./UserDefinedFields-yInqxDbc.js";import{u as U}from"./DragDrop-BuEYQASG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-LQZI9uWW.js";import"./pickBy-Us6u5-To.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-DCkRKKtx.js";import"./index-Cw1G72V2.js";import"./index-CKJfshIT.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./preview-errors-CzpZmerH.js";import"./debounce-BkgZrIul.js";import"./index.es3-B4n-extX.js";import"./index.es2-DM-Ad6zj.js";import"./index.es25-DQCJ81LM.js";import"./useDrop-Bls-awrw.js";import"./DndContext-BcAF8WvB.js";import"./redux-CpmcZR8k.js";import"./objectSpread2-Cl-ctlOG.js";import"./defineProperty-DcNpp85p.js";import"./toPropertyKey-BcUJYDQU.js";import"./index.es22-xvj8T6Jl.js";import"./Form-WfNl3YLh.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BSRayMAs.js";import"./Button-CJhT71wt.js";import"./Icon-C_3d7-zE.js";import"./Label-aEFd48OX.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Cc_HXDPA.js";import"./toFinite-C3oJXAtX.js";import"./forEach-CLeEMxs1.js";import"./Dimmer-DP3fvqlo.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-DWKMCCtW.js";import"./Checkbox-B3tsCUtI.js";import"./_baseSet-BllfnHSO.js";import"./_baseAssignValue-UQlBDUKN.js";import"./Dropdown-DwNow7wJ.js";import"./without-Duh6Zu7H.js";import"./isArrayLikeObject-Bl_bAmop.js";import"./isEmpty-CY-Bv0TY.js";import"./deburr-CNLr_JRW.js";import"./index-mbjjMjCk.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-B6f9p5im.js";import"./Input-Bwh_HEb3.js";import"./Modal-BWgkEMr1.js";import"./inherits-CWPG5jll.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";import"./toArray-DwAYNham.js";import"./nonIterableRest-QXsEjLJN.js";import"./iterableToArray-DI-mZnTP.js";import"./iframe-D6esuCG-.js";import"../sb-preview/runtime.js";import"./index.es12-DNEfC6wz.js";const x=["collectionName","columns","defaults","excludeColumns","modal","onDelete","onLoad","onSave"],g=0,p=o=>{const e=r.useCallback(t=>l.contains(o.excludeColumns,t),[o.excludeColumns]);return d.jsx(S,{...l.omit(o,x),columns:[{name:"table_name",label:n.t("UserDefinedFieldsList.columns.table"),hidden:e("table_name")},{name:"column_name",label:n.t("UserDefinedFieldsList.columns.name"),hidden:e("column_name")},{name:"data_type",label:n.t("UserDefinedFieldsList.columns.dataType"),hidden:e("data_type")},{name:"required",label:n.t("UserDefinedFieldsList.columns.required"),render:t=>d.jsx(C,{value:t.required}),hidden:e("required")},{name:"order",label:n.t("UserDefinedFieldsList.columns.order"),hidden:e("order")},{name:"uuid",label:n.t("UserDefinedFieldsList.columns.uuid"),hidden:e("uuid")}],collectionName:"user_defined_fields",modal:{component:y,props:{defaults:{order:g,...o.defaults||{}},hideTable:e("table_name"),validate:L.validateUserDefinedField.bind(void 0)}},onDelete:t=>f.delete(t),onLoad:t=>f.fetchAll(t),onSave:t=>f.save(t)})};p.defaultProps={actions:[{name:"edit"},{name:"delete"}]};p.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsList",props:{defaults:{required:!1,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},actions:{defaultValue:{value:`[{
  name: 'edit'
}, {
  name: 'delete'
}]`,computed:!1},required:!1}}};const Ge={title:"Components/User Defined Fields/UserDefinedFieldsList",decorators:[F.withKnobs]},m=U(()=>{const[o,e]=r.useState([]),t=r.useCallback(i=>e(s=>l.filter(s,c=>c!==i)),[]),u=r.useCallback(i=>e(s=>[...s,i]),[]);return d.jsx(p,{items:o,onDelete:t,onSave:u})}),a=U(()=>{const[o,e]=r.useState([]),t=r.useCallback(i=>e(s=>l.filter(s,c=>c!==i)),[]),u=r.useCallback(i=>e(s=>[...s,i]),[]);return d.jsx(p,{addButton:{color:"purple",location:"top"},items:o,onDelete:t,onSave:u})});m.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"CustomAddButton"};var D,v,_;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`useDragDrop(() => {
  const [items, setItems] = useState([]);

  /**
   * Removes the passed item from the list.
   *
   * @type {function(*): void}
   */
  const onDelete = useCallback(item => setItems(prevItems => _.filter(prevItems, i => i !== item)), []);

  /**
   * Adds the passed item to the list.
   *
   * @type {function(*): void}
   */
  const onSave = useCallback(item => setItems(prevItems => [...prevItems, item]), []);
  return <UserDefinedFieldsList items={items} onDelete={onDelete} onSave={onSave} />;
})`,...(_=(v=m.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var b,h,I;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`useDragDrop(() => {
  const [items, setItems] = useState([]);

  /**
   * Removes the passed item from the list.
   *
   * @type {function(*): void}
   */
  const onDelete = useCallback(item => setItems(prevItems => _.filter(prevItems, i => i !== item)), []);

  /**
   * Adds the passed item to the list.
   *
   * @type {function(*): void}
   */
  const onSave = useCallback(item => setItems(prevItems => [...prevItems, item]), []);
  return <UserDefinedFieldsList addButton={{
    color: 'purple',
    location: 'top'
  }} items={items} onDelete={onDelete} onSave={onSave} />;
})`,...(I=(h=a.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};const Je=["Default","CustomAddButton"];export{a as CustomAddButton,m as Default,Je as __namedExportsOrder,Ge as default};
