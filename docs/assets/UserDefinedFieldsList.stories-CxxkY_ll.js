import{r as n,j as l}from"./iframe-CBVnS_gz.js";import{_ as D}from"./index-default-B8-H6N8J.js";import{j as _}from"./index.es99-CkNlN2IQ.js";import"./index.es28-Dw5WpxTH.js";import{U as b,a as I,i as r,O as U}from"./UserDefinedFields-Cs056FSn.js";import{_ as f,U as c}from"./UserDefinedFields-D560d-9U.js";import{u as v}from"./DragDrop-CcMMEejU.js";import"./index.es35-NGGuPWEW.js";import"./index.es33-BbGNIlHM.js";import"./index.es29-BttlFuE4.js";import"./index.es12-BoZgPIpS.js";import"./index.es3-B5t9sEvB.js";import"./useDrop-DcjkJ2f0.js";import"./index-__O0XiL7.js";import"./index.es26-CiEK4yG9.js";import"./Form-Do77273i.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-Bjb0ertt.js";import"./Button-7qBb4VYW.js";import"./Icon-BZ3eAMfw.js";import"./Label-U9VHjmjO.js";import"./ModernAutoControlledComponent-DVKlBc-y.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-DZnQI2ww.js";import"./toFinite-B6NhHma2.js";import"./forEach-Bzy9_EBR.js";import"./Dimmer-Dp0zIHSX.js";import"./Portal-BlGvxlD6.js";import"./keyboardKey-o62cP7Iz.js";import"./map-DlHA86TE.js";import"./Checkbox-C74Tntbd.js";import"./_baseSet-DIcQIHLm.js";import"./_baseAssignValue-8Q0krCXH.js";import"./Dropdown-CPiIg0y1.js";import"./without-CH_BgMvr.js";import"./isArrayLikeObject-CKcKx5N9.js";import"./isEmpty-BYfO-h2O.js";import"./deburr-XG8rtojb.js";import"./index-D9NXjPfP.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-9DG6Xxvy.js";import"./Input-CxqNqYl_.js";import"./Modal-HnkfqseB.js";import"./index-BCLYeJHS.js";import"./i18next-eNuDfwAU.js";import"./index.es15-VHNLxWt2.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";const h=["collectionName","columns","defaults","excludeColumns","modal","onDelete","onLoad","onSave"],F=0,d=s=>{const e=n.useCallback(t=>f.contains(s.excludeColumns,t),[s.excludeColumns]);return l.jsx(_,{...f.omit(s,h),columns:[{name:"table_name",label:r.t("UserDefinedFieldsList.columns.table"),hidden:e("table_name")},{name:"column_name",label:r.t("UserDefinedFieldsList.columns.name"),hidden:e("column_name")},{name:"data_type",label:r.t("UserDefinedFieldsList.columns.dataType"),hidden:e("data_type")},{name:"required",label:r.t("UserDefinedFieldsList.columns.required"),render:t=>l.jsx(U,{value:t.required}),hidden:e("required")},{name:"order",label:r.t("UserDefinedFieldsList.columns.order"),hidden:e("order")},{name:"uuid",label:r.t("UserDefinedFieldsList.columns.uuid"),hidden:e("uuid")}],collectionName:"user_defined_fields",modal:{component:I,props:{defaults:{order:F,...s.defaults||{}},hideTable:e("table_name"),validate:b.validateUserDefinedField.bind(void 0)}},onDelete:t=>c.delete(t),onLoad:t=>c.fetchAll(t),onSave:t=>c.save(t)})};d.defaultProps={actions:[{name:"edit"},{name:"delete"}]};d.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsList",props:{defaults:{required:!1,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},actions:{defaultValue:{value:`[{
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
