import{r as n,j as l}from"./iframe-B8scVUHo.js";import{_ as D}from"./index-default-B8-H6N8J.js";import{j as _}from"./index.es99-CWmXAnl0.js";import"./index.es28-CKBW4mjb.js";import{U as b,a as I,i as r,O as U}from"./UserDefinedFields-DMD67z9A.js";import{_ as f,U as c}from"./UserDefinedFields-CJ3mpbUG.js";import{u as v}from"./DragDrop-CUNy3n_X.js";import"./index.es35-NGGuPWEW.js";import"./index.es33-CDn2jJNY.js";import"./index.es29-BGyHnwbR.js";import"./index.es12-DAY1FOIH.js";import"./index.es3-CRyZYPvH.js";import"./useDrop-DtlJSTdl.js";import"./index-Be_8skUP.js";import"./index.es26-dBF-YB_D.js";import"./Form-CnPiKdco.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CaJb2m-1.js";import"./Button-DI1B12kj.js";import"./Icon-BVP9tOGJ.js";import"./Label-DldEee3n.js";import"./ModernAutoControlledComponent-pwrQID__.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CW8buXEW.js";import"./toFinite-BD_NKTe4.js";import"./forEach-MWW8Ch3c.js";import"./Dimmer-B2JVl7VW.js";import"./Portal-Q0xzb-rT.js";import"./keyboardKey-CQEJ9RQY.js";import"./map-BHg0yW3b.js";import"./Checkbox-DEgenpx9.js";import"./_baseSet-m4jr0LOE.js";import"./_baseAssignValue-BLvsiv_f.js";import"./Dropdown-DaYxyMkk.js";import"./without-CE5z1u1p.js";import"./isArrayLikeObject-DVKyOMyh.js";import"./isEmpty-u5EZjvYg.js";import"./deburr-CE1kKcaU.js";import"./index-B596VeP6.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-CSD5FKWg.js";import"./Input-uZI35lvJ.js";import"./Modal-CGRMDdyW.js";import"./index-CUBMh0mQ.js";import"./i18next-eNuDfwAU.js";import"./index.es15-oYl6-X1m.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";const h=["collectionName","columns","defaults","excludeColumns","modal","onDelete","onLoad","onSave"],F=0,d=s=>{const e=n.useCallback(t=>f.contains(s.excludeColumns,t),[s.excludeColumns]);return l.jsx(_,{...f.omit(s,h),columns:[{name:"table_name",label:r.t("UserDefinedFieldsList.columns.table"),hidden:e("table_name")},{name:"column_name",label:r.t("UserDefinedFieldsList.columns.name"),hidden:e("column_name")},{name:"data_type",label:r.t("UserDefinedFieldsList.columns.dataType"),hidden:e("data_type")},{name:"required",label:r.t("UserDefinedFieldsList.columns.required"),render:t=>l.jsx(U,{value:t.required}),hidden:e("required")},{name:"order",label:r.t("UserDefinedFieldsList.columns.order"),hidden:e("order")},{name:"uuid",label:r.t("UserDefinedFieldsList.columns.uuid"),hidden:e("uuid")}],collectionName:"user_defined_fields",modal:{component:I,props:{defaults:{order:F,...s.defaults||{}},hideTable:e("table_name"),validate:b.validateUserDefinedField.bind(void 0)}},onDelete:t=>c.delete(t),onLoad:t=>c.fetchAll(t),onSave:t=>c.save(t)})};d.defaultProps={actions:[{name:"edit"},{name:"delete"}]};d.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsList",props:{defaults:{required:!1,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},actions:{defaultValue:{value:`[{
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
