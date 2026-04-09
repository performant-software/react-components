import{r as n,j as l}from"./iframe-C1yIdUxi.js";import{_ as D}from"./index-default-B8-H6N8J.js";import{j as _}from"./index.es99-Dxn57-w-.js";import"./index.es28-CsdHyStT.js";import{U as b,a as I,i as r,O as U}from"./UserDefinedFields-DbEXfTBx.js";import{_ as f,U as c}from"./UserDefinedFields-DMpSC_jm.js";import{u as v}from"./DragDrop-uhSbAEgB.js";import"./index.es35-NGGuPWEW.js";import"./index.es33-Co256_xB.js";import"./index.es29-B1XXq5nS.js";import"./index.es12-DDaHlNYP.js";import"./index.es3-DeTq37l7.js";import"./useDrop-91LZN4YL.js";import"./index-OGgHUQKj.js";import"./index.es26-DzY7CKAT.js";import"./Form-D1ZMqpLp.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-DsntGQ7s.js";import"./Button-CJTFn35h.js";import"./Icon-DP6yU2re.js";import"./Label-CBP1P9vD.js";import"./ModernAutoControlledComponent-Br5d4aPK.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-nZJWD_tR.js";import"./toFinite-B9I2iPB2.js";import"./forEach-arEyhVRZ.js";import"./Dimmer-D0u62siH.js";import"./Portal-DNbWDsez.js";import"./keyboardKey-oXYFUeDu.js";import"./map-DI4b9sYh.js";import"./Checkbox-C0tsJ9cQ.js";import"./_baseSet-BgUXd7hu.js";import"./_baseAssignValue-DVGLO0YS.js";import"./Dropdown-BTow6Fm6.js";import"./without-B8MkP8vX.js";import"./isArrayLikeObject-C2mzWdsd.js";import"./isEmpty-y8pYZl69.js";import"./deburr-CsC_e8aR.js";import"./index-DPL7h8to.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-59_PD_cA.js";import"./Input-DFBdMvaL.js";import"./Modal-NeQJmB7y.js";import"./index-DypBny8e.js";import"./i18next-eNuDfwAU.js";import"./index.es15-EP-r-CSf.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";const h=["collectionName","columns","defaults","excludeColumns","modal","onDelete","onLoad","onSave"],F=0,d=s=>{const e=n.useCallback(t=>f.contains(s.excludeColumns,t),[s.excludeColumns]);return l.jsx(_,{...f.omit(s,h),columns:[{name:"table_name",label:r.t("UserDefinedFieldsList.columns.table"),hidden:e("table_name")},{name:"column_name",label:r.t("UserDefinedFieldsList.columns.name"),hidden:e("column_name")},{name:"data_type",label:r.t("UserDefinedFieldsList.columns.dataType"),hidden:e("data_type")},{name:"required",label:r.t("UserDefinedFieldsList.columns.required"),render:t=>l.jsx(U,{value:t.required}),hidden:e("required")},{name:"order",label:r.t("UserDefinedFieldsList.columns.order"),hidden:e("order")},{name:"uuid",label:r.t("UserDefinedFieldsList.columns.uuid"),hidden:e("uuid")}],collectionName:"user_defined_fields",modal:{component:I,props:{defaults:{order:F,...s.defaults||{}},hideTable:e("table_name"),validate:b.validateUserDefinedField.bind(void 0)}},onDelete:t=>c.delete(t),onLoad:t=>c.fetchAll(t),onSave:t=>c.save(t)})};d.defaultProps={actions:[{name:"edit"},{name:"delete"}]};d.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsList",props:{defaults:{required:!1,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},actions:{defaultValue:{value:`[{
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
