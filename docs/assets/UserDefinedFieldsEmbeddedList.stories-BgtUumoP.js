import{r as n,j as d}from"./iframe-DbiTUB3D.js";import{_ as b}from"./index-default-B8-H6N8J.js";import{D as I}from"./index.es99-ClpdAKfa.js";import"./index.es28-OVx22JGj.js";import{U as S,a as _,i as a,O as h}from"./UserDefinedFields-DFMryVLH.js";import{_ as v}from"./UserDefinedFields-BwOPmVOG.js";import{u as D}from"./DragDrop-so9G-rcD.js";import"./index.es35-NGGuPWEW.js";import"./index.es33-CppYkopp.js";import"./index.es29-C41LLb3z.js";import"./index.es12-C-vFzGen.js";import"./index.es3-Cw4dJ5z0.js";import"./useDrop-HOil2-uV.js";import"./index-BTH0-vna.js";import"./index.es26-CYL7QmHS.js";import"./Form-CPUjUqwM.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BH3jW2lY.js";import"./_getPrototype-dFVwFHqx.js";import"./Button-BIg7NmOw.js";import"./Icon-DsEDoy4L.js";import"./Label-DoU-ifwN.js";import"./ModernAutoControlledComponent-DVTYcGHz.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-D-FZLlJ_.js";import"./toFinite-Dfj0KU41.js";import"./toNumber-DIkYOhwr.js";import"./forEach-DxN3RdGO.js";import"./_arrayEach-DpGxo2Of.js";import"./Dimmer-B9rAdiXr.js";import"./Portal-C6iiX74h.js";import"./keyboardKey-Bf7yRjnJ.js";import"./map-7sK8CacR.js";import"./Checkbox-DyAsByj-.js";import"./_baseSet-11smNBAB.js";import"./_assignValue-wlBxhqFj.js";import"./_baseAssignValue-yJv1-bft.js";import"./Dropdown-D2hkyeb_.js";import"./without-Bin3LZk_.js";import"./isArrayLikeObject-DSLl7ti9.js";import"./isEmpty-CIv_nSFx.js";import"./deburr-CP-VufER.js";import"./index-C6Qj3r4f.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEqual-mHuJTF3G.js";import"./filter-CygcSMbY.js";import"./Input-BqMKLUlw.js";import"./Modal-CnINtR-y.js";import"./index-61OKIJ5j.js";import"./i18next-eNuDfwAU.js";import"./index.es15-kpjRWLfZ.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";const C=["columns","defaults","excludeColumns","modal"],y=0,l=o=>{const e=n.useCallback(i=>v.contains(o.excludeColumns,i),[o.excludeColumns]);return d.jsx(I,{...v.omit(o,C),columns:[{name:"table_name",label:a.t("UserDefinedFieldsEmbeddedList.columns.table"),hidden:e("table_name")},{name:"column_name",label:a.t("UserDefinedFieldsEmbeddedList.columns.name"),hidden:e("column_name")},{name:"data_type",label:a.t("UserDefinedFieldsEmbeddedList.columns.dataType"),hidden:e("data_type")},{name:"required",label:a.t("UserDefinedFieldsEmbeddedList.columns.required"),render:i=>d.jsx(h,{value:i.required}),hidden:e("required")},{name:"order",label:a.t("UserDefinedFieldsEmbeddedList.columns.order"),hidden:e("order")},{name:"uuid",label:a.t("UserDefinedFieldsEmbeddedList.columns.uuid"),hidden:e("uuid")}],modal:{component:_,props:{defaults:{order:y,...o.defaults||{}},hideTable:e("table_name"),validate:S.validateUserDefinedField.bind(void 0)}}})};l.defaultProps={actions:[{name:"edit"},{name:"delete"}]};l.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsEmbeddedList",props:{actions:{required:!1,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"},description:"",defaultValue:{value:`[{
  name: 'edit'
}, {
  name: 'delete'
}]`,computed:!1}},defaults:{required:!0,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""}}};const ke={title:"Components/User Defined Fields/UserDefinedFieldsEmbeddedList"},p=D(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>b.filter(s,m=>m!==t)),[]),r=n.useCallback(t=>e(s=>[...s,t]),[]);return d.jsx(l,{items:o,onDelete:i,onSave:r})}),c=D(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>b.filter(s,m=>m!==t)),[]),r=n.useCallback(t=>e(s=>[...s,t]),[]);return d.jsx(l,{items:o,modal:{defaults:{table_name:"people"},props:{hideTable:!0}},onDelete:i,onSave:r})}),u=D(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>b.filter(s,m=>m!==t)),[]),r=n.useCallback(t=>e(s=>[...s,t]),[]);return d.jsx(l,{addButton:{color:"purple",location:"top"},items:o,onDelete:i,onSave:r})}),f=D(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>b.filter(s,m=>m!==t)),[]),r=n.useCallback(t=>e(s=>[...s,t]),[]);return d.jsx(l,{actions:[{name:"edit",icon:"pencil"},{name:"delete",icon:"times"}],items:o,onDelete:i,onSave:r})});p.__docgenInfo={description:"",methods:[],displayName:"Default"};c.__docgenInfo={description:"",methods:[],displayName:"HiddenTableSelector"};u.__docgenInfo={description:"",methods:[],displayName:"CustomAddButton"};f.__docgenInfo={description:"",methods:[],displayName:"CustomActions"};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`useDragDrop(() => {
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
  return <UserDefinedFieldsEmbeddedList items={items} onDelete={onDelete} onSave={onSave} />;
})`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`useDragDrop(() => {
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
  return <UserDefinedFieldsEmbeddedList items={items} modal={{
    defaults: {
      table_name: 'people'
    },
    props: {
      hideTable: true
    }
  }} onDelete={onDelete} onSave={onSave} />;
})`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`useDragDrop(() => {
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
  return <UserDefinedFieldsEmbeddedList addButton={{
    color: 'purple',
    location: 'top'
  }} items={items} onDelete={onDelete} onSave={onSave} />;
})`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`useDragDrop(() => {
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
  return <UserDefinedFieldsEmbeddedList actions={[{
    name: 'edit',
    icon: 'pencil'
  }, {
    name: 'delete',
    icon: 'times'
  }]} items={items} onDelete={onDelete} onSave={onSave} />;
})`,...f.parameters?.docs?.source}}};const ge=["Default","HiddenTableSelector","CustomAddButton","CustomActions"];export{f as CustomActions,u as CustomAddButton,p as Default,c as HiddenTableSelector,ge as __namedExportsOrder,ke as default};
