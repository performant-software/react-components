import{r as n,j as l}from"./iframe-DbiTUB3D.js";import{_ as D}from"./index-default-B8-H6N8J.js";import{j as _}from"./index.es99-ClpdAKfa.js";import"./index.es28-OVx22JGj.js";import{U as b,a as I,i as r,O as U}from"./UserDefinedFields-DFMryVLH.js";import{_ as f,U as c}from"./UserDefinedFields-BwOPmVOG.js";import{u as v}from"./DragDrop-so9G-rcD.js";import"./index.es35-NGGuPWEW.js";import"./index.es33-CppYkopp.js";import"./index.es29-C41LLb3z.js";import"./index.es12-C-vFzGen.js";import"./index.es3-Cw4dJ5z0.js";import"./useDrop-HOil2-uV.js";import"./index-BTH0-vna.js";import"./index.es26-CYL7QmHS.js";import"./Form-CPUjUqwM.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BH3jW2lY.js";import"./_getPrototype-dFVwFHqx.js";import"./Button-BIg7NmOw.js";import"./Icon-DsEDoy4L.js";import"./Label-DoU-ifwN.js";import"./ModernAutoControlledComponent-DVTYcGHz.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-D-FZLlJ_.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-DxN3RdGO.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-B9rAdiXr.js";import"./Portal-C6iiX74h.js";import"./keyboardKey-Bf7yRjnJ.js";import"./map-7sK8CacR.js";import"./Checkbox-DyAsByj-.js";import"./_baseSet-11smNBAB.js";import"./_assignValue-wlBxhqFj.js";import"./_baseAssignValue-yJv1-bft.js";import"./Dropdown-D2hkyeb_.js";import"./without-Bin3LZk_.js";import"./isArrayLikeObject-DSLl7ti9.js";import"./isEmpty-CIv_nSFx.js";import"./deburr-CP-VufER.js";import"./index-C6Qj3r4f.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEqual-mHuJTF3G.js";import"./filter-CygcSMbY.js";import"./Input-BqMKLUlw.js";import"./Modal-CnINtR-y.js";import"./index-61OKIJ5j.js";import"./i18next-eNuDfwAU.js";import"./index.es15-kpjRWLfZ.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";const h=["collectionName","columns","defaults","excludeColumns","modal","onDelete","onLoad","onSave"],F=0,d=o=>{const e=n.useCallback(t=>f.contains(o.excludeColumns,t),[o.excludeColumns]);return l.jsx(_,{...f.omit(o,h),columns:[{name:"table_name",label:r.t("UserDefinedFieldsList.columns.table"),hidden:e("table_name")},{name:"column_name",label:r.t("UserDefinedFieldsList.columns.name"),hidden:e("column_name")},{name:"data_type",label:r.t("UserDefinedFieldsList.columns.dataType"),hidden:e("data_type")},{name:"required",label:r.t("UserDefinedFieldsList.columns.required"),render:t=>l.jsx(U,{value:t.required}),hidden:e("required")},{name:"order",label:r.t("UserDefinedFieldsList.columns.order"),hidden:e("order")},{name:"uuid",label:r.t("UserDefinedFieldsList.columns.uuid"),hidden:e("uuid")}],collectionName:"user_defined_fields",modal:{component:I,props:{defaults:{order:F,...o.defaults||{}},hideTable:e("table_name"),validate:b.validateUserDefinedField.bind(void 0)}},onDelete:t=>c.delete(t),onLoad:t=>c.fetchAll(t),onSave:t=>c.save(t)})};d.defaultProps={actions:[{name:"edit"},{name:"delete"}]};d.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsList",props:{defaults:{required:!1,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},actions:{defaultValue:{value:`[{
  name: 'edit'
}, {
  name: 'delete'
}]`,computed:!1},required:!1}}};const Le={title:"Components/User Defined Fields/UserDefinedFieldsList",component:d},m=v(()=>{const[o,e]=n.useState([]),t=n.useCallback(s=>e(i=>D.filter(i,u=>u!==s)),[]),p=n.useCallback(s=>e(i=>[...i,s]),[]);return l.jsx(d,{items:o,onDelete:t,onSave:p})}),a=v(()=>{const[o,e]=n.useState([]),t=n.useCallback(s=>e(i=>D.filter(i,u=>u!==s)),[]),p=n.useCallback(s=>e(i=>[...i,s]),[]);return l.jsx(d,{addButton:{color:"purple",location:"top"},items:o,onDelete:t,onSave:p})});m.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"CustomAddButton"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`useDragDrop(() => {
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
})`,...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`useDragDrop(() => {
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
})`,...a.parameters?.docs?.source}}};const xe=["Default","CustomAddButton"];export{a as CustomAddButton,m as Default,xe as __namedExportsOrder,Le as default};
