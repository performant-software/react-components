import{j as d}from"./jsx-runtime-D9TvR9R2.js";import{r}from"./index-C0dDX-lL.js";import{d as F}from"./index-DxpkBmlp.js";import{_ as l}from"./index-default-C_maRo4o.js";import{j as S}from"./index.es99-B2ER91y1.js";import"./index.es34-DPdoOAcA.js";import{i as n,O as C,U as y,a as L}from"./UserDefinedFields-DZFd_zzM.js";import"./index-DOYXiIEK.js";import{U as f}from"./UserDefinedFields-ChQlukNl.js";import{u as U}from"./DragDrop-BuEYQASG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-BXr-GEgA.js";import"./pickBy-ILmh4CwI.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-CVmyTvcu.js";import"./index-Cw1G72V2.js";import"./index-CKJfshIT.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./preview-errors-CzpZmerH.js";import"./debounce-C2QphL08.js";import"./index.es32-BU1Bz2LH.js";import"./index.es2-Cw6213Cy.js";import"./index.es28-DQCJ81LM.js";import"./index.es12-CDIfCsDR.js";import"./useDrop-Bls-awrw.js";import"./DndContext-BcAF8WvB.js";import"./redux-CpmcZR8k.js";import"./objectSpread2-Cl-ctlOG.js";import"./defineProperty-DcNpp85p.js";import"./toPropertyKey-BcUJYDQU.js";import"./index.es3-G9WCiyCA.js";import"./index.es25-xvj8T6Jl.js";import"./iframe-YvMIoTGN.js";import"../sb-preview/runtime.js";import"./Form-cOZUQdvM.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-C_4y_n4F.js";import"./Button-Dcib8V--.js";import"./Icon-BGzIEILD.js";import"./Label-BqnFaqey.js";import"./ModernAutoControlledComponent-CBEnGjal.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-BAV9TYTx.js";import"./toFinite-DWd2HYc9.js";import"./forEach-Bj9nU5MO.js";import"./Dimmer-kmE_IUk6.js";import"./Portal-CKYxdKwP.js";import"./keyboardKey-OMDgGVm3.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-Dr4OE-Ab.js";import"./Checkbox-Bi1MrC0t.js";import"./_baseSet-N8oZ1kqS.js";import"./_baseAssignValue-oMV-Qdk1.js";import"./Dropdown-CChVlGq2.js";import"./without-5b9zAUWg.js";import"./isArrayLikeObject-BDKOwBZt.js";import"./isEmpty-D4udnfVx.js";import"./deburr-ClVont3z.js";import"./index-C2Sldg7a.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-BXgalVMq.js";import"./Input-CEHVpxQU.js";import"./Modal-B0p4Zslq.js";import"./inherits-CWPG5jll.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";import"./toArray-DwAYNham.js";import"./nonIterableRest-QXsEjLJN.js";import"./iterableToArray-DI-mZnTP.js";import"./index.es15-0hnoLXcG.js";const x=["collectionName","columns","defaults","excludeColumns","modal","onDelete","onLoad","onSave"],g=0,p=o=>{const e=r.useCallback(t=>l.contains(o.excludeColumns,t),[o.excludeColumns]);return d.jsx(S,{...l.omit(o,x),columns:[{name:"table_name",label:n.t("UserDefinedFieldsList.columns.table"),hidden:e("table_name")},{name:"column_name",label:n.t("UserDefinedFieldsList.columns.name"),hidden:e("column_name")},{name:"data_type",label:n.t("UserDefinedFieldsList.columns.dataType"),hidden:e("data_type")},{name:"required",label:n.t("UserDefinedFieldsList.columns.required"),render:t=>d.jsx(C,{value:t.required}),hidden:e("required")},{name:"order",label:n.t("UserDefinedFieldsList.columns.order"),hidden:e("order")},{name:"uuid",label:n.t("UserDefinedFieldsList.columns.uuid"),hidden:e("uuid")}],collectionName:"user_defined_fields",modal:{component:y,props:{defaults:{order:g,...o.defaults||{}},hideTable:e("table_name"),validate:L.validateUserDefinedField.bind(void 0)}},onDelete:t=>f.delete(t),onLoad:t=>f.fetchAll(t),onSave:t=>f.save(t)})};p.defaultProps={actions:[{name:"edit"},{name:"delete"}]};p.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsList",props:{defaults:{required:!1,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},actions:{defaultValue:{value:`[{
  name: 'edit'
}, {
  name: 'delete'
}]`,computed:!1},required:!1}}};const Qe={title:"Components/User Defined Fields/UserDefinedFieldsList",decorators:[F.withKnobs]},m=U(()=>{const[o,e]=r.useState([]),t=r.useCallback(i=>e(s=>l.filter(s,c=>c!==i)),[]),u=r.useCallback(i=>e(s=>[...s,i]),[]);return d.jsx(p,{items:o,onDelete:t,onSave:u})}),a=U(()=>{const[o,e]=r.useState([]),t=r.useCallback(i=>e(s=>l.filter(s,c=>c!==i)),[]),u=r.useCallback(i=>e(s=>[...s,i]),[]);return d.jsx(p,{addButton:{color:"purple",location:"top"},items:o,onDelete:t,onSave:u})});m.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"CustomAddButton"};var D,v,_;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`useDragDrop(() => {
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
})`,...(I=(h=a.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};const We=["Default","CustomAddButton"];export{a as CustomAddButton,m as Default,We as __namedExportsOrder,Qe as default};
