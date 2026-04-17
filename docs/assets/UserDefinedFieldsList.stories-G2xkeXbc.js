import{r as n,j as l}from"./iframe-vcq3NyiY.js";import{_ as D}from"./index-default-B8-H6N8J.js";import{j as _}from"./index.es99-DP35V61l.js";import"./index.es28-WhWg7DUu.js";import{U as b,a as I,i as r,O as U}from"./UserDefinedFields-CEROltkA.js";import{_ as f,U as c}from"./UserDefinedFields-DXbwCaHm.js";import{u as v}from"./DragDrop-DFlTyD_O.js";import"./index.es35-NGGuPWEW.js";import"./index.es33-CZBWmdeE.js";import"./index.es29-C4SYiDX0.js";import"./index.es12-BHxdKO5T.js";import"./index.es3-CdqohaDp.js";import"./useDrop-BXo_lRY2.js";import"./index-DTeb7AQS.js";import"./index.es26-CCp-gAK7.js";import"./Form-CYUN66gt.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BKtKbg7z.js";import"./Button-Bn6g8Zpl.js";import"./Icon-CCp_BzDr.js";import"./Label-C0nyLnGG.js";import"./ModernAutoControlledComponent-DdBfaRqR.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-ClwlY2GN.js";import"./toFinite-CubHtLM9.js";import"./forEach-DpfzB6Po.js";import"./Dimmer-BoNfl-gn.js";import"./Portal-COsaxqQp.js";import"./keyboardKey-CYj8W5Ln.js";import"./map-CVJKdi7t.js";import"./Checkbox-CEroYjg1.js";import"./_baseSet-CLngmd58.js";import"./_baseAssignValue-_RJq7yWg.js";import"./Dropdown-4PwJbJ0j.js";import"./without-Bz8LerWT.js";import"./isArrayLikeObject-B2Pai7-8.js";import"./isEmpty-64qWlGu8.js";import"./deburr-DcNHrw3Y.js";import"./index-DBqwPnO2.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-B_cJQIlT.js";import"./Input-iG1nzLLC.js";import"./Modal-Qa_7wSwL.js";import"./index-Cyu2_1Gm.js";import"./i18next-eNuDfwAU.js";import"./index.es15-DOr9O4d1.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";const h=["collectionName","columns","defaults","excludeColumns","modal","onDelete","onLoad","onSave"],F=0,d=s=>{const e=n.useCallback(t=>f.contains(s.excludeColumns,t),[s.excludeColumns]);return l.jsx(_,{...f.omit(s,h),columns:[{name:"table_name",label:r.t("UserDefinedFieldsList.columns.table"),hidden:e("table_name")},{name:"column_name",label:r.t("UserDefinedFieldsList.columns.name"),hidden:e("column_name")},{name:"data_type",label:r.t("UserDefinedFieldsList.columns.dataType"),hidden:e("data_type")},{name:"required",label:r.t("UserDefinedFieldsList.columns.required"),render:t=>l.jsx(U,{value:t.required}),hidden:e("required")},{name:"order",label:r.t("UserDefinedFieldsList.columns.order"),hidden:e("order")},{name:"uuid",label:r.t("UserDefinedFieldsList.columns.uuid"),hidden:e("uuid")}],collectionName:"user_defined_fields",modal:{component:I,props:{defaults:{order:F,...s.defaults||{}},hideTable:e("table_name"),validate:b.validateUserDefinedField.bind(void 0)}},onDelete:t=>c.delete(t),onLoad:t=>c.fetchAll(t),onSave:t=>c.save(t)})};d.defaultProps={actions:[{name:"edit"},{name:"delete"}]};d.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsList",props:{defaults:{required:!1,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},actions:{defaultValue:{value:`[{
  name: 'edit'
}, {
  name: 'delete'
}]`,computed:!1},required:!1}}};const he={title:"Components/User Defined Fields/UserDefinedFieldsList",component:d},m=v(()=>{const[s,e]=n.useState([]),t=n.useCallback(o=>e(i=>D.filter(i,u=>u!==o)),[]),p=n.useCallback(o=>e(i=>[...i,o]),[]);return l.jsx(d,{items:s,onDelete:t,onSave:p})}),a=v(()=>{const[s,e]=n.useState([]),t=n.useCallback(o=>e(i=>D.filter(i,u=>u!==o)),[]),p=n.useCallback(o=>e(i=>[...i,o]),[]);return l.jsx(d,{addButton:{color:"purple",location:"top"},items:s,onDelete:t,onSave:p})});m.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"CustomAddButton"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`useDragDrop(() => {
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
})`,...a.parameters?.docs?.source}}};const Fe=["Default","CustomAddButton"];export{a as CustomAddButton,m as Default,Fe as __namedExportsOrder,he as default};
