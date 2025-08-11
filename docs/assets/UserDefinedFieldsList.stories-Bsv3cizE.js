import{r as n,j as l}from"./iframe-D2tDQHIu.js";import{_ as D}from"./index-default-B8-H6N8J.js";import{j as _}from"./index.es99-Bw1moXYc.js";import"./index.es27-BqzRcxM3.js";import{U as b,a as I,i as r,O as U}from"./UserDefinedFields-BAszZm3d.js";import{_ as f,U as c}from"./UserDefinedFields-B8VUMHPj.js";import{u as v}from"./DragDrop-D4AOof6k.js";import"./index.es34-NGGuPWEW.js";import"./index.es32-CI3sAoKd.js";import"./index.es28-CSYMWsbM.js";import"./index.es12-B_RCGzPV.js";import"./index.es3-BBSLpI2q.js";import"./useDrop-TaNt96Kh.js";import"./index-CwwtuY6R.js";import"./index.es25-Cao7YWB7.js";import"./Form-82LA1gPL.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-TLbMidFA.js";import"./Button-e1g_PNPa.js";import"./Icon-BSWzGvLf.js";import"./Label-CmMRyCgB.js";import"./ModernAutoControlledComponent-CIi-16Zs.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-ComNSsGh.js";import"./toFinite-Ch3-mxAi.js";import"./forEach-xROvcHNC.js";import"./Dimmer-Wnz_k9oJ.js";import"./Portal-BF3g11_x.js";import"./keyboardKey-UPAJnvsN.js";import"./map-q00LD5yS.js";import"./Checkbox-DNAhP8My.js";import"./_baseSet-KiE310VO.js";import"./_baseAssignValue-CihLrf3R.js";import"./Dropdown-29n6mrng.js";import"./without-CqD5ld8v.js";import"./isArrayLikeObject-GAfAHYyv.js";import"./isEmpty-4KKn6hcF.js";import"./deburr-ChK6Lkvo.js";import"./index-D8tE4-9w.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-DnFvB4UZ.js";import"./Input-R2TI-Tve.js";import"./Modal-CF7nwjHg.js";import"./index-CL_u4TdI.js";import"./i18next-eNuDfwAU.js";import"./index.es15-BOYkuYTA.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";const h=["collectionName","columns","defaults","excludeColumns","modal","onDelete","onLoad","onSave"],F=0,d=s=>{const e=n.useCallback(t=>f.contains(s.excludeColumns,t),[s.excludeColumns]);return l.jsx(_,{...f.omit(s,h),columns:[{name:"table_name",label:r.t("UserDefinedFieldsList.columns.table"),hidden:e("table_name")},{name:"column_name",label:r.t("UserDefinedFieldsList.columns.name"),hidden:e("column_name")},{name:"data_type",label:r.t("UserDefinedFieldsList.columns.dataType"),hidden:e("data_type")},{name:"required",label:r.t("UserDefinedFieldsList.columns.required"),render:t=>l.jsx(U,{value:t.required}),hidden:e("required")},{name:"order",label:r.t("UserDefinedFieldsList.columns.order"),hidden:e("order")},{name:"uuid",label:r.t("UserDefinedFieldsList.columns.uuid"),hidden:e("uuid")}],collectionName:"user_defined_fields",modal:{component:I,props:{defaults:{order:F,...s.defaults||{}},hideTable:e("table_name"),validate:b.validateUserDefinedField.bind(void 0)}},onDelete:t=>c.delete(t),onLoad:t=>c.fetchAll(t),onSave:t=>c.save(t)})};d.defaultProps={actions:[{name:"edit"},{name:"delete"}]};d.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsList",props:{defaults:{required:!1,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},actions:{defaultValue:{value:`[{
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
