import{r as n,j as l}from"./iframe-DT7QbYH7.js";import{_ as D}from"./index-default-B8-H6N8J.js";import{j as _}from"./index.es99-3kr3vEQq.js";import"./index.es28-DplMxnFD.js";import{U as b,a as I,i as r,O as U}from"./UserDefinedFields-b1Uat0yg.js";import{_ as f,U as c}from"./UserDefinedFields-BXfiZvoT.js";import{u as v}from"./DragDrop-B32gAeie.js";import"./index.es35-NGGuPWEW.js";import"./index.es33-DjWGJBwf.js";import"./index.es29-Z85oraPQ.js";import"./index.es12-COHs9up1.js";import"./index.es3-Ccj8FELR.js";import"./index.es24-BxCSri79.js";import"./useDrop-D7gc1aFo.js";import"./index-DjDglOYa.js";import"./index.es26-WKkdM_Pi.js";import"./Form-BQyRKPEr.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-D9Dm3kUn.js";import"./Button-NSPqHwS_.js";import"./Icon-ey9jiNEy.js";import"./Label-BiRn_-_3.js";import"./ModernAutoControlledComponent-Cz85Fsnf.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-DlRNvmPY.js";import"./toFinite-EWrCJB8-.js";import"./forEach-CUQnNrTW.js";import"./Dimmer-C1tpBS2T.js";import"./Portal-Dqo72CYe.js";import"./keyboardKey-8QW-HgB9.js";import"./map-CN2A-66k.js";import"./Checkbox-BruMkqRI.js";import"./_baseSet-DYVjP9W1.js";import"./_baseAssignValue-DsBxPc0Q.js";import"./Dropdown-B06UXL3V.js";import"./without-CmhwM1cQ.js";import"./isArrayLikeObject-PvVLkR8c.js";import"./isEmpty-ChjRJg2c.js";import"./deburr-C41nhHE6.js";import"./index-bnJZsReu.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-COQqCgju.js";import"./Input-EBrwWnz0.js";import"./Modal-BLWOqSD2.js";import"./index-BQRsQj70.js";import"./i18next-eNuDfwAU.js";import"./index.es15-O84M2Vx-.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";const h=["collectionName","columns","defaults","excludeColumns","modal","onDelete","onLoad","onSave"],F=0,d=o=>{const e=n.useCallback(t=>f.contains(o.excludeColumns,t),[o.excludeColumns]);return l.jsx(_,{...f.omit(o,h),columns:[{name:"table_name",label:r.t("UserDefinedFieldsList.columns.table"),hidden:e("table_name")},{name:"column_name",label:r.t("UserDefinedFieldsList.columns.name"),hidden:e("column_name")},{name:"data_type",label:r.t("UserDefinedFieldsList.columns.dataType"),hidden:e("data_type")},{name:"required",label:r.t("UserDefinedFieldsList.columns.required"),render:t=>l.jsx(U,{value:t.required}),hidden:e("required")},{name:"order",label:r.t("UserDefinedFieldsList.columns.order"),hidden:e("order")},{name:"uuid",label:r.t("UserDefinedFieldsList.columns.uuid"),hidden:e("uuid")}],collectionName:"user_defined_fields",modal:{component:I,props:{defaults:{order:F,...o.defaults||{}},hideTable:e("table_name"),validate:b.validateUserDefinedField.bind(void 0)}},onDelete:t=>c.delete(t),onLoad:t=>c.fetchAll(t),onSave:t=>c.save(t)})};d.defaultProps={actions:[{name:"edit"},{name:"delete"}]};d.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsList",props:{defaults:{required:!1,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},actions:{defaultValue:{value:`[{
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
