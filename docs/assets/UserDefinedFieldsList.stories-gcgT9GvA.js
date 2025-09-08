import{r as n,j as l}from"./iframe-isOIMYbo.js";import{_ as D}from"./index-default-B8-H6N8J.js";import{j as _}from"./index.es99-C38005KI.js";import"./index.es28-DwD6OMJQ.js";import{U as b,a as I,i as r,O as U}from"./UserDefinedFields-CmnERm1H.js";import{_ as f,U as c}from"./UserDefinedFields-CcpJfJ8i.js";import{u as v}from"./DragDrop-wUDhNJKX.js";import"./index.es35-NGGuPWEW.js";import"./index.es33-CAO9t3hk.js";import"./index.es29-D-vHiD7s.js";import"./index.es12-DTfZFIPR.js";import"./index.es3-AvX1OXVy.js";import"./useDrop-Dd6Nef57.js";import"./index-BvycmoU8.js";import"./index.es26--ozRl-4W.js";import"./Form-BaAofpBB.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CsHk5kPH.js";import"./Button-CqXa-wVP.js";import"./Icon-DBxUlxMw.js";import"./Label-vg6cGd_Q.js";import"./ModernAutoControlledComponent-BtLuXh9U.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CdyQs4Ym.js";import"./toFinite-DGZNaitu.js";import"./forEach-MpIg6X8D.js";import"./Dimmer-DT1p3J3k.js";import"./Portal-Cx1eItx_.js";import"./keyboardKey-B58FVVIx.js";import"./map-YoLMybS-.js";import"./Checkbox-DzQdh1Bw.js";import"./_baseSet-XjsS9Dyu.js";import"./_baseAssignValue-CF-CCvL5.js";import"./Dropdown-D3HCXA6v.js";import"./without-rpscruk7.js";import"./isArrayLikeObject-iQZW--Wo.js";import"./isEmpty-UXTvYtPv.js";import"./deburr-Cyfgcr56.js";import"./index-CfsjdyXR.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-BQSKLcgn.js";import"./Input-kw8FuSsH.js";import"./Modal-BXLzsD-x.js";import"./index-DWrsd_AA.js";import"./i18next-eNuDfwAU.js";import"./index.es15-_9IyID48.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";const h=["collectionName","columns","defaults","excludeColumns","modal","onDelete","onLoad","onSave"],F=0,d=s=>{const e=n.useCallback(t=>f.contains(s.excludeColumns,t),[s.excludeColumns]);return l.jsx(_,{...f.omit(s,h),columns:[{name:"table_name",label:r.t("UserDefinedFieldsList.columns.table"),hidden:e("table_name")},{name:"column_name",label:r.t("UserDefinedFieldsList.columns.name"),hidden:e("column_name")},{name:"data_type",label:r.t("UserDefinedFieldsList.columns.dataType"),hidden:e("data_type")},{name:"required",label:r.t("UserDefinedFieldsList.columns.required"),render:t=>l.jsx(U,{value:t.required}),hidden:e("required")},{name:"order",label:r.t("UserDefinedFieldsList.columns.order"),hidden:e("order")},{name:"uuid",label:r.t("UserDefinedFieldsList.columns.uuid"),hidden:e("uuid")}],collectionName:"user_defined_fields",modal:{component:I,props:{defaults:{order:F,...s.defaults||{}},hideTable:e("table_name"),validate:b.validateUserDefinedField.bind(void 0)}},onDelete:t=>c.delete(t),onLoad:t=>c.fetchAll(t),onSave:t=>c.save(t)})};d.defaultProps={actions:[{name:"edit"},{name:"delete"}]};d.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsList",props:{defaults:{required:!1,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},actions:{defaultValue:{value:`[{
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
