import{r as n,j as l}from"./iframe-CobmjQJx.js";import{_ as D}from"./index-default-B8-H6N8J.js";import{j as _}from"./index.es99-CG41-xeE.js";import"./index.es28-C7GyLKAW.js";import{U as b,a as I,i as r,O as U}from"./UserDefinedFields-DGHQkiOQ.js";import{_ as f,U as c}from"./UserDefinedFields-COcnpAxE.js";import{u as v}from"./DragDrop-DAv-fPdh.js";import"./index.es35-NGGuPWEW.js";import"./index.es33-DhNiIy8Z.js";import"./index.es29-yRx_zUkz.js";import"./index.es12-DGUqAmKX.js";import"./index.es3-DxE3ZTdP.js";import"./index.es24-BxCSri79.js";import"./useDrop-CxCV2w22.js";import"./index-D9Hk7Cc8.js";import"./index.es26--n2hyN59.js";import"./Form-bJjgXI2d.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-DIRvTXcE.js";import"./Button-Dbwe2y1K.js";import"./Icon-GUvrG6NX.js";import"./Label-BcJmCt3K.js";import"./ModernAutoControlledComponent-BY7sqkaA.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-BzBOEv5Z.js";import"./toFinite-BcRf1gcc.js";import"./forEach-BqzC2Qd6.js";import"./Dimmer-B-_T9QPF.js";import"./Portal-DxbNXBbZ.js";import"./keyboardKey-CpnYesMy.js";import"./map-Be6cYnHc.js";import"./Checkbox-oRHOQ6_f.js";import"./_baseSet-s3dmyMK_.js";import"./_baseAssignValue-vU6UmBOq.js";import"./Dropdown-D7LDOEs-.js";import"./without-CKwVA1rn.js";import"./isArrayLikeObject-2d3OUaSN.js";import"./isEmpty-Bshox7mM.js";import"./deburr-DRAx_YPq.js";import"./index-BtclWLUu.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-L5_Mefwz.js";import"./Input-DmEhvK3s.js";import"./Modal-BihmrXEw.js";import"./index-BEWOVopg.js";import"./i18next-eNuDfwAU.js";import"./index.es15-D6lHUl1n.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";const h=["collectionName","columns","defaults","excludeColumns","modal","onDelete","onLoad","onSave"],F=0,d=o=>{const e=n.useCallback(t=>f.contains(o.excludeColumns,t),[o.excludeColumns]);return l.jsx(_,{...f.omit(o,h),columns:[{name:"table_name",label:r.t("UserDefinedFieldsList.columns.table"),hidden:e("table_name")},{name:"column_name",label:r.t("UserDefinedFieldsList.columns.name"),hidden:e("column_name")},{name:"data_type",label:r.t("UserDefinedFieldsList.columns.dataType"),hidden:e("data_type")},{name:"required",label:r.t("UserDefinedFieldsList.columns.required"),render:t=>l.jsx(U,{value:t.required}),hidden:e("required")},{name:"order",label:r.t("UserDefinedFieldsList.columns.order"),hidden:e("order")},{name:"uuid",label:r.t("UserDefinedFieldsList.columns.uuid"),hidden:e("uuid")}],collectionName:"user_defined_fields",modal:{component:I,props:{defaults:{order:F,...o.defaults||{}},hideTable:e("table_name"),validate:b.validateUserDefinedField.bind(void 0)}},onDelete:t=>c.delete(t),onLoad:t=>c.fetchAll(t),onSave:t=>c.save(t)})};d.defaultProps={actions:[{name:"edit"},{name:"delete"}]};d.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsList",props:{defaults:{required:!1,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},actions:{defaultValue:{value:`[{
  name: 'edit'
}, {
  name: 'delete'
}]`,computed:!1},required:!1}}};const Fe={title:"Components/User Defined Fields/UserDefinedFieldsList",component:d},m=v(()=>{const[o,e]=n.useState([]),t=n.useCallback(s=>e(i=>D.filter(i,u=>u!==s)),[]),p=n.useCallback(s=>e(i=>[...i,s]),[]);return l.jsx(d,{items:o,onDelete:t,onSave:p})}),a=v(()=>{const[o,e]=n.useState([]),t=n.useCallback(s=>e(i=>D.filter(i,u=>u!==s)),[]),p=n.useCallback(s=>e(i=>[...i,s]),[]);return l.jsx(d,{addButton:{color:"purple",location:"top"},items:o,onDelete:t,onSave:p})});m.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"CustomAddButton"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`useDragDrop(() => {
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
})`,...a.parameters?.docs?.source}}};const Se=["Default","CustomAddButton"];export{a as CustomAddButton,m as Default,Se as __namedExportsOrder,Fe as default};
