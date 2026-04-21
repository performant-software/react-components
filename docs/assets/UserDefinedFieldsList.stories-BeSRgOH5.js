import{r as n,j as l}from"./iframe-CDKtSUh7.js";import{_ as D}from"./index-default-B8-H6N8J.js";import{j as _}from"./index.es99-oiuEAIiw.js";import"./index.es28-Db5bh1d3.js";import{U as b,a as I,i as r,O as U}from"./UserDefinedFields-BmitTcAX.js";import{_ as f,U as c}from"./UserDefinedFields-C41RpbyS.js";import{u as v}from"./DragDrop-B_LabWRi.js";import"./index.es35-NGGuPWEW.js";import"./index.es33-DcxK12Qu.js";import"./index.es29-CKrFsfOt.js";import"./index.es12-Clki7AYE.js";import"./index.es3-B5llofzq.js";import"./useDrop-BUoLZgn8.js";import"./index-DIbuN6is.js";import"./index.es26-DhvDSSy7.js";import"./Form-V9Mme2Wd.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-0Tp31rtT.js";import"./Button-DA_XBQbJ.js";import"./Icon-5o84n6La.js";import"./Label-CH_WshmF.js";import"./ModernAutoControlledComponent-B-ilQLgm.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-DtwzgLcn.js";import"./toFinite-DjjXQZ2l.js";import"./forEach-Dp4nfTUu.js";import"./Dimmer-DQCDOJdA.js";import"./Portal-DdFmWNdd.js";import"./keyboardKey-BIrml5XW.js";import"./map-2oQ1uFDN.js";import"./Checkbox-BpN7gCGk.js";import"./_baseSet-DuVMIhyb.js";import"./_baseAssignValue-U8vnLISS.js";import"./Dropdown-4i4HInfn.js";import"./without-3MOHujL6.js";import"./isArrayLikeObject-DSQPvB88.js";import"./isEmpty-406wiN_k.js";import"./deburr-hJjWoWgP.js";import"./index-Cv6_bv5M.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-D_0iK0Hx.js";import"./Input-Cp8K4J0-.js";import"./Modal-BdRM98xc.js";import"./index-iiIS-OyD.js";import"./i18next-eNuDfwAU.js";import"./index.es15-CIbmJM63.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";const h=["collectionName","columns","defaults","excludeColumns","modal","onDelete","onLoad","onSave"],F=0,d=s=>{const e=n.useCallback(t=>f.contains(s.excludeColumns,t),[s.excludeColumns]);return l.jsx(_,{...f.omit(s,h),columns:[{name:"table_name",label:r.t("UserDefinedFieldsList.columns.table"),hidden:e("table_name")},{name:"column_name",label:r.t("UserDefinedFieldsList.columns.name"),hidden:e("column_name")},{name:"data_type",label:r.t("UserDefinedFieldsList.columns.dataType"),hidden:e("data_type")},{name:"required",label:r.t("UserDefinedFieldsList.columns.required"),render:t=>l.jsx(U,{value:t.required}),hidden:e("required")},{name:"order",label:r.t("UserDefinedFieldsList.columns.order"),hidden:e("order")},{name:"uuid",label:r.t("UserDefinedFieldsList.columns.uuid"),hidden:e("uuid")}],collectionName:"user_defined_fields",modal:{component:I,props:{defaults:{order:F,...s.defaults||{}},hideTable:e("table_name"),validate:b.validateUserDefinedField.bind(void 0)}},onDelete:t=>c.delete(t),onLoad:t=>c.fetchAll(t),onSave:t=>c.save(t)})};d.defaultProps={actions:[{name:"edit"},{name:"delete"}]};d.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsList",props:{defaults:{required:!1,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},actions:{defaultValue:{value:`[{
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
