import{r as n,j as l}from"./iframe-BrAQntzt.js";import{_ as D}from"./index-default-B8-H6N8J.js";import{j as _}from"./index.es99-CJnMdjQv.js";import"./index.es28-DVaM09mq.js";import{U as b,a as I,i as r,O as U}from"./UserDefinedFields-CNm1Q_X5.js";import{_ as f,U as c}from"./UserDefinedFields-C2y0v37R.js";import{u as v}from"./DragDrop-BVrAD4Ei.js";import"./index.es35-NGGuPWEW.js";import"./index.es33-E6ptKalr.js";import"./index.es29-Do79NI-J.js";import"./index.es12-zWU6eIbE.js";import"./index.es3-0RDWrDMM.js";import"./useDrop-BblehxyR.js";import"./index-45kjgkIT.js";import"./index.es26-BWrj_Ipz.js";import"./Form-iQcgUtII.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BFRWV7mM.js";import"./_getPrototype-dFVwFHqx.js";import"./Button-D3Sj7dUS.js";import"./Icon-fIQ1pKxe.js";import"./Label-C9Mv8xCs.js";import"./ModernAutoControlledComponent-CdWmntFb.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-BJs7ARx1.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-D05ynQet.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-BCOwUOme.js";import"./Portal-BQOAejov.js";import"./keyboardKey-CYtKaW6W.js";import"./map-BUR3Hk8V.js";import"./Checkbox-Dp-oyyIc.js";import"./_baseSet-DKZEG50o.js";import"./_assignValue-wlBxhqFj.js";import"./_baseAssignValue-yJv1-bft.js";import"./Dropdown-DYi_qstm.js";import"./without-BqSAdBvz.js";import"./isArrayLikeObject-DSLl7ti9.js";import"./isEmpty-CIv_nSFx.js";import"./deburr-CAsAWVek.js";import"./index-CYU-iy_c.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEqual-mHuJTF3G.js";import"./filter-C67l8hTY.js";import"./Input-DXKF_o1r.js";import"./Modal-D08A1LhU.js";import"./index-CW6VjT3p.js";import"./i18next-eNuDfwAU.js";import"./index.es15-8lW4aL8g.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";const h=["collectionName","columns","defaults","excludeColumns","modal","onDelete","onLoad","onSave"],F=0,d=o=>{const e=n.useCallback(t=>f.contains(o.excludeColumns,t),[o.excludeColumns]);return l.jsx(_,{...f.omit(o,h),columns:[{name:"table_name",label:r.t("UserDefinedFieldsList.columns.table"),hidden:e("table_name")},{name:"column_name",label:r.t("UserDefinedFieldsList.columns.name"),hidden:e("column_name")},{name:"data_type",label:r.t("UserDefinedFieldsList.columns.dataType"),hidden:e("data_type")},{name:"required",label:r.t("UserDefinedFieldsList.columns.required"),render:t=>l.jsx(U,{value:t.required}),hidden:e("required")},{name:"order",label:r.t("UserDefinedFieldsList.columns.order"),hidden:e("order")},{name:"uuid",label:r.t("UserDefinedFieldsList.columns.uuid"),hidden:e("uuid")}],collectionName:"user_defined_fields",modal:{component:I,props:{defaults:{order:F,...o.defaults||{}},hideTable:e("table_name"),validate:b.validateUserDefinedField.bind(void 0)}},onDelete:t=>c.delete(t),onLoad:t=>c.fetchAll(t),onSave:t=>c.save(t)})};d.defaultProps={actions:[{name:"edit"},{name:"delete"}]};d.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsList",props:{defaults:{required:!1,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},actions:{defaultValue:{value:`[{
  name: 'edit'
}, {
  name: 'delete'
}]`,computed:!1},required:!1}}};const Le={title:"Components/User Defined Fields/UserDefinedFieldsList",component:d},m=v(()=>{const[o,e]=n.useState([]),t=n.useCallback(s=>e(i=>D.filter(i,u=>u!==s)),[]),p=n.useCallback(s=>e(i=>[...i,s]),[]);return l.jsx(d,{items:o,onDelete:t,onSave:p})}),a=v(()=>{const[o,e]=n.useState([]),t=n.useCallback(s=>e(i=>D.filter(i,u=>u!==s)),[]),p=n.useCallback(s=>e(i=>[...i,s]),[]);return l.jsx(d,{addButton:{color:"purple",location:"top"},items:o,onDelete:t,onSave:p})});m.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"CustomAddButton"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`useDragDrop(() => {
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
})`,...a.parameters?.docs?.source}}};const xe=["Default","CustomAddButton"];export{a as CustomAddButton,m as Default,xe as __namedExportsOrder,Le as default};
