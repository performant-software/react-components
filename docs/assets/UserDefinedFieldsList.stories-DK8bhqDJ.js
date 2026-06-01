import{r as n,j as l}from"./iframe-0kzOYbDl.js";import{_ as D}from"./index-default-B8-H6N8J.js";import{j as _}from"./index.es99-COvq6m89.js";import"./index.es28-B-JgmnHx.js";import{U as b,a as I,i as r,O as U}from"./UserDefinedFields-BR685_5v.js";import{_ as f,U as c}from"./UserDefinedFields-ZsgkngqU.js";import{u as v}from"./DragDrop-BON0slfF.js";import"./index.es35-NGGuPWEW.js";import"./index.es33-JyASAoLE.js";import"./index.es29-DoPE0xbh.js";import"./index.es12-CdQMGuNH.js";import"./index.es3-C6g-wM5g.js";import"./index.es24-BxCSri79.js";import"./useDrop-DRoZUvNM.js";import"./index-CfUB1rcH.js";import"./index.es26-CdbrXSMJ.js";import"./Form-B63Um0cN.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-F4BGMwza.js";import"./Button-BZG2A5sY.js";import"./Icon-DJJMCTRL.js";import"./Label-yTVPsSkO.js";import"./ModernAutoControlledComponent-D9Qz_mdq.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Bc-ZWqwy.js";import"./toFinite-BrzBV7X5.js";import"./forEach-Ccrb3wYW.js";import"./Dimmer-DhIieFQ_.js";import"./Portal-TP5vWZSH.js";import"./keyboardKey-BpJXLMj5.js";import"./map-CCTlyAeB.js";import"./Checkbox-DXCB2-QY.js";import"./_baseSet-Cku8bvQD.js";import"./_baseAssignValue-VJsfCBN8.js";import"./Dropdown-MxwihQWT.js";import"./without-vvNQ-4ZN.js";import"./isArrayLikeObject-DDtLjSQn.js";import"./isEmpty-DMciCs1Z.js";import"./deburr-CHwjFq6R.js";import"./index-Bhi9vhgR.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-C9tZ6ZJB.js";import"./Input-CHH5G1-n.js";import"./Modal-gaTyZPkF.js";import"./index-5HWsvSN1.js";import"./i18next-eNuDfwAU.js";import"./index.es15-DmjRjEPZ.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";const h=["collectionName","columns","defaults","excludeColumns","modal","onDelete","onLoad","onSave"],F=0,d=o=>{const e=n.useCallback(t=>f.contains(o.excludeColumns,t),[o.excludeColumns]);return l.jsx(_,{...f.omit(o,h),columns:[{name:"table_name",label:r.t("UserDefinedFieldsList.columns.table"),hidden:e("table_name")},{name:"column_name",label:r.t("UserDefinedFieldsList.columns.name"),hidden:e("column_name")},{name:"data_type",label:r.t("UserDefinedFieldsList.columns.dataType"),hidden:e("data_type")},{name:"required",label:r.t("UserDefinedFieldsList.columns.required"),render:t=>l.jsx(U,{value:t.required}),hidden:e("required")},{name:"order",label:r.t("UserDefinedFieldsList.columns.order"),hidden:e("order")},{name:"uuid",label:r.t("UserDefinedFieldsList.columns.uuid"),hidden:e("uuid")}],collectionName:"user_defined_fields",modal:{component:I,props:{defaults:{order:F,...o.defaults||{}},hideTable:e("table_name"),validate:b.validateUserDefinedField.bind(void 0)}},onDelete:t=>c.delete(t),onLoad:t=>c.fetchAll(t),onSave:t=>c.save(t)})};d.defaultProps={actions:[{name:"edit"},{name:"delete"}]};d.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsList",props:{defaults:{required:!1,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},actions:{defaultValue:{value:`[{
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
