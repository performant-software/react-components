import{r as n,j as l}from"./iframe-Dxgww4-I.js";import{_ as D}from"./index-default-B8-H6N8J.js";import{j as _}from"./index.es99-BXvDnmwO.js";import"./index.es28-CWu3ntqi.js";import{U as b,a as I,i as r,O as U}from"./UserDefinedFields-BabOOo8o.js";import{_ as f,U as c}from"./UserDefinedFields-C8C4_HV_.js";import{u as v}from"./DragDrop-Bn2jTAbh.js";import"./index.es35-NGGuPWEW.js";import"./index.es33-IDC-sGQL.js";import"./index.es29-D6mg-DO5.js";import"./index.es12-VE9F2EFL.js";import"./index.es3-DTW2zTBF.js";import"./useDrop-DVytZl6X.js";import"./index-CIWQAVKs.js";import"./index.es26-Dq5GE4NE.js";import"./Form-DnvyyBjq.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-DI6MxAvz.js";import"./Button-BAz5K2o3.js";import"./Icon-uY6W4AAl.js";import"./Label-C_-G-gvZ.js";import"./ModernAutoControlledComponent-r2wGn9JT.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-C3NGYjvp.js";import"./toFinite-CvM15p2j.js";import"./forEach-DlvoXqFD.js";import"./Dimmer-Ca1w9JQz.js";import"./Portal-eqdFawDV.js";import"./keyboardKey-dM6szfIV.js";import"./map-CAJquUSc.js";import"./Checkbox-BZ8Lv-RQ.js";import"./_baseSet-b64NfGVL.js";import"./_baseAssignValue-BDuEFu8J.js";import"./Dropdown-BYLTKnCK.js";import"./without-HSl0ttEf.js";import"./isArrayLikeObject-W2l22Aw8.js";import"./isEmpty-D_N8I5LR.js";import"./deburr-CQhsUUSR.js";import"./index-CcCU3d88.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-Dn_nZP5s.js";import"./Input-BPewBPVQ.js";import"./Modal-C847CS42.js";import"./index-COBJGWTJ.js";import"./i18next-eNuDfwAU.js";import"./index.es15-AbVBWTCJ.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";const h=["collectionName","columns","defaults","excludeColumns","modal","onDelete","onLoad","onSave"],F=0,d=s=>{const e=n.useCallback(t=>f.contains(s.excludeColumns,t),[s.excludeColumns]);return l.jsx(_,{...f.omit(s,h),columns:[{name:"table_name",label:r.t("UserDefinedFieldsList.columns.table"),hidden:e("table_name")},{name:"column_name",label:r.t("UserDefinedFieldsList.columns.name"),hidden:e("column_name")},{name:"data_type",label:r.t("UserDefinedFieldsList.columns.dataType"),hidden:e("data_type")},{name:"required",label:r.t("UserDefinedFieldsList.columns.required"),render:t=>l.jsx(U,{value:t.required}),hidden:e("required")},{name:"order",label:r.t("UserDefinedFieldsList.columns.order"),hidden:e("order")},{name:"uuid",label:r.t("UserDefinedFieldsList.columns.uuid"),hidden:e("uuid")}],collectionName:"user_defined_fields",modal:{component:I,props:{defaults:{order:F,...s.defaults||{}},hideTable:e("table_name"),validate:b.validateUserDefinedField.bind(void 0)}},onDelete:t=>c.delete(t),onLoad:t=>c.fetchAll(t),onSave:t=>c.save(t)})};d.defaultProps={actions:[{name:"edit"},{name:"delete"}]};d.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsList",props:{defaults:{required:!1,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},actions:{defaultValue:{value:`[{
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
