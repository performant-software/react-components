import{r as n,j as l}from"./iframe-BLgZWRCp.js";import{_ as D}from"./index-default-B8-H6N8J.js";import{j as _}from"./index.es99-CTbB2v4-.js";import"./index.es28-Rg3NxGAU.js";import{U as b,a as I,i as r,O as U}from"./UserDefinedFields-BNu4SMwu.js";import{_ as f,U as c}from"./UserDefinedFields-CS_05cC5.js";import{u as v}from"./DragDrop-nQI6Qnjd.js";import"./index.es35-NGGuPWEW.js";import"./index.es33-CNSQUi3t.js";import"./index.es29-Bn0N5z13.js";import"./index.es12-BgX2VUyA.js";import"./index.es3-ChBtbScC.js";import"./useDrop-Dd9zv85Q.js";import"./index-XMOKdeFd.js";import"./index.es26-eP_MCtsU.js";import"./Form-xCzzVPQ4.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-1IYaeY7q.js";import"./Button-DBnOKBlt.js";import"./Icon-CxJFFl9I.js";import"./Label-CA5c1o9n.js";import"./ModernAutoControlledComponent-BNuszL3K.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-U-4bWchp.js";import"./toFinite-B0zBBCYH.js";import"./forEach-B66pbtzg.js";import"./Dimmer-DQZjKlMb.js";import"./Portal-SWFjn5WJ.js";import"./keyboardKey-TMamj3A2.js";import"./map-CWHsrrW0.js";import"./Checkbox-BoNeAj1w.js";import"./_baseSet-Auq_ii7C.js";import"./_baseAssignValue-BYD9r0Sk.js";import"./Dropdown-B39ca9nf.js";import"./without-hXNxFN8L.js";import"./isArrayLikeObject-qJU1iGYR.js";import"./isEmpty-CV68PeRk.js";import"./deburr-CFKzU-xv.js";import"./index-C2wuau_u.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-B61iGI06.js";import"./Input-DA954Y-9.js";import"./Modal-DilQqFZR.js";import"./index-DTmWq2QB.js";import"./i18next-eNuDfwAU.js";import"./index.es15-CZ-DnXCM.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";const h=["collectionName","columns","defaults","excludeColumns","modal","onDelete","onLoad","onSave"],F=0,d=s=>{const e=n.useCallback(t=>f.contains(s.excludeColumns,t),[s.excludeColumns]);return l.jsx(_,{...f.omit(s,h),columns:[{name:"table_name",label:r.t("UserDefinedFieldsList.columns.table"),hidden:e("table_name")},{name:"column_name",label:r.t("UserDefinedFieldsList.columns.name"),hidden:e("column_name")},{name:"data_type",label:r.t("UserDefinedFieldsList.columns.dataType"),hidden:e("data_type")},{name:"required",label:r.t("UserDefinedFieldsList.columns.required"),render:t=>l.jsx(U,{value:t.required}),hidden:e("required")},{name:"order",label:r.t("UserDefinedFieldsList.columns.order"),hidden:e("order")},{name:"uuid",label:r.t("UserDefinedFieldsList.columns.uuid"),hidden:e("uuid")}],collectionName:"user_defined_fields",modal:{component:I,props:{defaults:{order:F,...s.defaults||{}},hideTable:e("table_name"),validate:b.validateUserDefinedField.bind(void 0)}},onDelete:t=>c.delete(t),onLoad:t=>c.fetchAll(t),onSave:t=>c.save(t)})};d.defaultProps={actions:[{name:"edit"},{name:"delete"}]};d.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsList",props:{defaults:{required:!1,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},actions:{defaultValue:{value:`[{
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
