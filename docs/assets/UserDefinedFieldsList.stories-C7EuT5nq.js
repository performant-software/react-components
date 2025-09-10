import{r as n,j as l}from"./iframe-vd5jUnmh.js";import{_ as D}from"./index-default-B8-H6N8J.js";import{j as _}from"./index.es99-C5DV1l7T.js";import"./index.es28-C-vUsR_k.js";import{U as b,a as I,i as r,O as U}from"./UserDefinedFields-CHCUQJVN.js";import{_ as f,U as c}from"./UserDefinedFields-LntRxFUv.js";import{u as v}from"./DragDrop-Co1NgEwv.js";import"./index.es35-NGGuPWEW.js";import"./index.es33-DtjEY4Ke.js";import"./index.es29-nhMDGi0l.js";import"./index.es12-wwEUVGMS.js";import"./index.es3-PEJkx8t7.js";import"./useDrop-CxBrISlP.js";import"./index-CsQVc4n5.js";import"./index.es26-6uQWyu8Y.js";import"./Form-Db_2OMnV.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-Dbrg5pYk.js";import"./Button-BDHbVLWx.js";import"./Icon-DvprR8oi.js";import"./Label-D1PIeSX5.js";import"./ModernAutoControlledComponent-QVsiK7km.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-eGroWB-Q.js";import"./toFinite-CzVf2XkS.js";import"./forEach-CbH1wg7D.js";import"./Dimmer-Fz-z8WIU.js";import"./Portal-C6ILt24N.js";import"./keyboardKey-DeBoM4Ub.js";import"./map-uhZzoJ4W.js";import"./Checkbox-mMJwNdkd.js";import"./_baseSet-BdlGglPz.js";import"./_baseAssignValue-Bri4X6-V.js";import"./Dropdown-C6akRp4P.js";import"./without-lQrFBxoL.js";import"./isArrayLikeObject-B5eiN9N1.js";import"./isEmpty-9Dhr09Zy.js";import"./deburr-CTkioK7w.js";import"./index-DY9fuINF.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-0P9hSMEf.js";import"./Input-CulkMBuo.js";import"./Modal-C6FWzHHP.js";import"./index-BP6glIEM.js";import"./i18next-eNuDfwAU.js";import"./index.es15-3fSyDvRI.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";const h=["collectionName","columns","defaults","excludeColumns","modal","onDelete","onLoad","onSave"],F=0,d=s=>{const e=n.useCallback(t=>f.contains(s.excludeColumns,t),[s.excludeColumns]);return l.jsx(_,{...f.omit(s,h),columns:[{name:"table_name",label:r.t("UserDefinedFieldsList.columns.table"),hidden:e("table_name")},{name:"column_name",label:r.t("UserDefinedFieldsList.columns.name"),hidden:e("column_name")},{name:"data_type",label:r.t("UserDefinedFieldsList.columns.dataType"),hidden:e("data_type")},{name:"required",label:r.t("UserDefinedFieldsList.columns.required"),render:t=>l.jsx(U,{value:t.required}),hidden:e("required")},{name:"order",label:r.t("UserDefinedFieldsList.columns.order"),hidden:e("order")},{name:"uuid",label:r.t("UserDefinedFieldsList.columns.uuid"),hidden:e("uuid")}],collectionName:"user_defined_fields",modal:{component:I,props:{defaults:{order:F,...s.defaults||{}},hideTable:e("table_name"),validate:b.validateUserDefinedField.bind(void 0)}},onDelete:t=>c.delete(t),onLoad:t=>c.fetchAll(t),onSave:t=>c.save(t)})};d.defaultProps={actions:[{name:"edit"},{name:"delete"}]};d.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsList",props:{defaults:{required:!1,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},actions:{defaultValue:{value:`[{
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
