import{r as n,j as l}from"./iframe-TuXs2kBy.js";import{_ as D}from"./index-default-B8-H6N8J.js";import{j as _}from"./index.es99-C_tqmqvO.js";import"./index.es28-DOn-DqHH.js";import{U as b,a as I,i as r,O as U}from"./UserDefinedFields-0bw1g1z8.js";import{_ as f,U as c}from"./UserDefinedFields-DgoRnSm9.js";import{u as v}from"./DragDrop-D9xBQ8ME.js";import"./index.es35-NGGuPWEW.js";import"./index.es33-C8_39SWN.js";import"./index.es29-CmD0C9Bx.js";import"./index.es12-BQkUJZce.js";import"./index.es3-B3UeVsbF.js";import"./index.es24-BxCSri79.js";import"./useDrop-D1mUSbfW.js";import"./index-DrahQVbZ.js";import"./index.es26-DWHgcL0X.js";import"./Form-J2mojc8J.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BZ_Wii67.js";import"./Button-BKdJ_oXZ.js";import"./Icon-CpsQnxH4.js";import"./Label-DlvpALTQ.js";import"./ModernAutoControlledComponent-D7o4-ucK.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-cXy9aOxG.js";import"./toFinite-D7zQzeBM.js";import"./forEach-DerotaaD.js";import"./Dimmer-zvnfHSKR.js";import"./Portal-DV7cFSlF.js";import"./keyboardKey-BuX2MR1A.js";import"./map-BMga4jFc.js";import"./Checkbox-DBMMAb4e.js";import"./_baseSet-nDoLbMmg.js";import"./_baseAssignValue-DCAXO2Fl.js";import"./Dropdown-BclMT3c1.js";import"./without-DgrzjDVd.js";import"./isArrayLikeObject-BMjeM2H0.js";import"./isEmpty-ovHkUmga.js";import"./deburr-Bu5DdxKO.js";import"./index-rbfnuaMq.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-BNfQ9JAa.js";import"./Input-D6ycNwFw.js";import"./Modal-TZ4U7n9b.js";import"./index-a1kfRe9k.js";import"./i18next-eNuDfwAU.js";import"./index.es15-KteEgJa6.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";const h=["collectionName","columns","defaults","excludeColumns","modal","onDelete","onLoad","onSave"],F=0,d=o=>{const e=n.useCallback(t=>f.contains(o.excludeColumns,t),[o.excludeColumns]);return l.jsx(_,{...f.omit(o,h),columns:[{name:"table_name",label:r.t("UserDefinedFieldsList.columns.table"),hidden:e("table_name")},{name:"column_name",label:r.t("UserDefinedFieldsList.columns.name"),hidden:e("column_name")},{name:"data_type",label:r.t("UserDefinedFieldsList.columns.dataType"),hidden:e("data_type")},{name:"required",label:r.t("UserDefinedFieldsList.columns.required"),render:t=>l.jsx(U,{value:t.required}),hidden:e("required")},{name:"order",label:r.t("UserDefinedFieldsList.columns.order"),hidden:e("order")},{name:"uuid",label:r.t("UserDefinedFieldsList.columns.uuid"),hidden:e("uuid")}],collectionName:"user_defined_fields",modal:{component:I,props:{defaults:{order:F,...o.defaults||{}},hideTable:e("table_name"),validate:b.validateUserDefinedField.bind(void 0)}},onDelete:t=>c.delete(t),onLoad:t=>c.fetchAll(t),onSave:t=>c.save(t)})};d.defaultProps={actions:[{name:"edit"},{name:"delete"}]};d.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsList",props:{defaults:{required:!1,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},actions:{defaultValue:{value:`[{
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
