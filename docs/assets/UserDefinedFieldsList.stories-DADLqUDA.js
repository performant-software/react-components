import{r as n,j as l}from"./iframe-Cv6NyGmh.js";import{_ as D}from"./index-default-B8-H6N8J.js";import{j as _}from"./index.es99-Bu-VBbIE.js";import"./index.es28-BrPO8HkR.js";import{U as b,a as I,i as r,O as U}from"./UserDefinedFields-DaHSwbCG.js";import{_ as f,U as c}from"./UserDefinedFields-CTDNgFSf.js";import{u as v}from"./DragDrop-BACOIoB1.js";import"./index.es35-NGGuPWEW.js";import"./index.es33-DT5j-KBj.js";import"./index.es29-C6I8pzPY.js";import"./index.es12-CXYK2zsg.js";import"./index.es3-C2XTaclT.js";import"./index.es24-BxCSri79.js";import"./useDrop-C3_XsZqZ.js";import"./index-CZEak56t.js";import"./index.es26-CtxScfRB.js";import"./Form-CXlkfe8C.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-K35LTaJK.js";import"./Button-zdyej-Ns.js";import"./Icon-D39B3oXB.js";import"./Label-PLpICGDf.js";import"./ModernAutoControlledComponent-CWIOmKmV.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CIqIAdm8.js";import"./toFinite-C3a1HOTY.js";import"./forEach-DYNAt1Hb.js";import"./Dimmer-CO3zZvZo.js";import"./Portal-ufNDYVit.js";import"./keyboardKey-Cd-j_P4w.js";import"./map-BUcwO8PI.js";import"./Checkbox-lB6HVmnk.js";import"./_baseSet-Dw2mDaci.js";import"./_baseAssignValue-DX0AaM9e.js";import"./Dropdown-B50dAwHv.js";import"./without-DdnIuVqG.js";import"./isArrayLikeObject-Ce41-Z_2.js";import"./isEmpty-Bw_Vnau-.js";import"./deburr-CjsteLk7.js";import"./index-DoxK8g02.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-D9yOTXjS.js";import"./Input-DTpHfPup.js";import"./Modal-DN1JnBhx.js";import"./index-s2ERkgXD.js";import"./i18next-eNuDfwAU.js";import"./index.es15-DF7pNg1c.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";const h=["collectionName","columns","defaults","excludeColumns","modal","onDelete","onLoad","onSave"],F=0,d=o=>{const e=n.useCallback(t=>f.contains(o.excludeColumns,t),[o.excludeColumns]);return l.jsx(_,{...f.omit(o,h),columns:[{name:"table_name",label:r.t("UserDefinedFieldsList.columns.table"),hidden:e("table_name")},{name:"column_name",label:r.t("UserDefinedFieldsList.columns.name"),hidden:e("column_name")},{name:"data_type",label:r.t("UserDefinedFieldsList.columns.dataType"),hidden:e("data_type")},{name:"required",label:r.t("UserDefinedFieldsList.columns.required"),render:t=>l.jsx(U,{value:t.required}),hidden:e("required")},{name:"order",label:r.t("UserDefinedFieldsList.columns.order"),hidden:e("order")},{name:"uuid",label:r.t("UserDefinedFieldsList.columns.uuid"),hidden:e("uuid")}],collectionName:"user_defined_fields",modal:{component:I,props:{defaults:{order:F,...o.defaults||{}},hideTable:e("table_name"),validate:b.validateUserDefinedField.bind(void 0)}},onDelete:t=>c.delete(t),onLoad:t=>c.fetchAll(t),onSave:t=>c.save(t)})};d.defaultProps={actions:[{name:"edit"},{name:"delete"}]};d.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsList",props:{defaults:{required:!1,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},actions:{defaultValue:{value:`[{
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
