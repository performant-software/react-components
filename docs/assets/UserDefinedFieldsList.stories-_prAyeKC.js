import{r as n,j as l}from"./iframe-CzTKQtwy.js";import{_ as D}from"./index-default-B8-H6N8J.js";import{j as _}from"./index.es99-q5Q-gLR5.js";import"./index.es28-COdC-vOI.js";import{U as b,a as I,i as r,O as U}from"./UserDefinedFields-BVDGMg7P.js";import{_ as f,U as c}from"./UserDefinedFields-Czu5q3d_.js";import{u as v}from"./DragDrop-BneSUm5g.js";import"./index.es35-NGGuPWEW.js";import"./index.es33-DFAGoCQQ.js";import"./index.es29-sMxPmexO.js";import"./index.es12-Dub-NFrS.js";import"./index.es3-mBr4-2xw.js";import"./useDrop-_BnqET-9.js";import"./index-CjQW48k9.js";import"./index.es26-DE9NG940.js";import"./Form-1kvTlbml.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-dK_c-8MW.js";import"./Button--NGNXnVS.js";import"./Icon-hqQ-O3cc.js";import"./Label-B-l2ijAg.js";import"./ModernAutoControlledComponent-Dwt6aSwo.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-DxCwRlkS.js";import"./toFinite-yrFDs8ZQ.js";import"./forEach-BAPHVc-N.js";import"./Dimmer-Q0LFw4i9.js";import"./Portal-BtQOZ0m3.js";import"./keyboardKey-DIZTOt9c.js";import"./map-C0IFJOBr.js";import"./Checkbox-X5g8ftcM.js";import"./_baseSet-BUC1EQLg.js";import"./_baseAssignValue-Cv_kTUCQ.js";import"./Dropdown-CVURay4f.js";import"./without-C-AWeN1o.js";import"./isArrayLikeObject-DhJfvAkJ.js";import"./isEmpty-_53ie87J.js";import"./deburr-DWO6WY8w.js";import"./index-CVb2dOXX.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-BiR7e3Y1.js";import"./Input-C84kVELm.js";import"./Modal-DgLIOkP6.js";import"./index-B6ZH4A4R.js";import"./i18next-eNuDfwAU.js";import"./index.es15-CmgfOTgC.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";const h=["collectionName","columns","defaults","excludeColumns","modal","onDelete","onLoad","onSave"],F=0,d=s=>{const e=n.useCallback(t=>f.contains(s.excludeColumns,t),[s.excludeColumns]);return l.jsx(_,{...f.omit(s,h),columns:[{name:"table_name",label:r.t("UserDefinedFieldsList.columns.table"),hidden:e("table_name")},{name:"column_name",label:r.t("UserDefinedFieldsList.columns.name"),hidden:e("column_name")},{name:"data_type",label:r.t("UserDefinedFieldsList.columns.dataType"),hidden:e("data_type")},{name:"required",label:r.t("UserDefinedFieldsList.columns.required"),render:t=>l.jsx(U,{value:t.required}),hidden:e("required")},{name:"order",label:r.t("UserDefinedFieldsList.columns.order"),hidden:e("order")},{name:"uuid",label:r.t("UserDefinedFieldsList.columns.uuid"),hidden:e("uuid")}],collectionName:"user_defined_fields",modal:{component:I,props:{defaults:{order:F,...s.defaults||{}},hideTable:e("table_name"),validate:b.validateUserDefinedField.bind(void 0)}},onDelete:t=>c.delete(t),onLoad:t=>c.fetchAll(t),onSave:t=>c.save(t)})};d.defaultProps={actions:[{name:"edit"},{name:"delete"}]};d.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsList",props:{defaults:{required:!1,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},actions:{defaultValue:{value:`[{
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
