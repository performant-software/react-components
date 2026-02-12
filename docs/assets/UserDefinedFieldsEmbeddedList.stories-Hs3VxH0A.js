import{r as n,j as d}from"./iframe-Bo-cahqR.js";import{_ as b}from"./index-default-B8-H6N8J.js";import{D as I}from"./index.es99-BpkVOMFN.js";import"./index.es28-Bra0ArD7.js";import{U as S,a as _,i as a,O as h}from"./UserDefinedFields-BNk6_8lX.js";import{_ as v}from"./UserDefinedFields-OtNO73xd.js";import{u as D}from"./DragDrop-CojDdAS9.js";import"./index.es35-NGGuPWEW.js";import"./index.es33-D0X-1eHI.js";import"./index.es29-D98aRA9r.js";import"./index.es12-BgRZ8Mtj.js";import"./index.es3-BGTlwdMe.js";import"./useDrop-CN0jYelY.js";import"./index-CcbKiiTy.js";import"./index.es26-y4qoOUBW.js";import"./Form-BzEpru2z.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CRLILEjs.js";import"./Button-SB7fr7Z_.js";import"./Icon-BdwMDjCJ.js";import"./Label-BKkK21JB.js";import"./ModernAutoControlledComponent-C-Nb76Z4.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CXYr5d8-.js";import"./toFinite-BW88qEh4.js";import"./forEach-BywSwlPE.js";import"./Dimmer-Dl7JFx23.js";import"./Portal-BP_gGsLc.js";import"./keyboardKey-Dtyxm7HZ.js";import"./map-DChe9iis.js";import"./Checkbox-CTLr3KxF.js";import"./_baseSet-NwXeW_MD.js";import"./_baseAssignValue-fIFIdof2.js";import"./Dropdown-BNDo_500.js";import"./without-Cf7MvG2m.js";import"./isArrayLikeObject-DF49cagh.js";import"./isEmpty-C5Ivl5DO.js";import"./deburr-DixA-kuT.js";import"./index-B3Oe0SrK.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-MJ4DOGaK.js";import"./Input-CiU6LnQ0.js";import"./Modal-Cj6fW8y7.js";import"./index-DhYQIGjT.js";import"./i18next-eNuDfwAU.js";import"./index.es15-yJZycSC8.js";import"./redux-1N3yOUoT.js";import"./objectSpread2-xTxB_n9c.js";import"./defineProperty-BhpcgfZc.js";import"./toPropertyKey-BdisF6oo.js";const C=["columns","defaults","excludeColumns","modal"],y=0,l=o=>{const e=n.useCallback(i=>v.contains(o.excludeColumns,i),[o.excludeColumns]);return d.jsx(I,{...v.omit(o,C),columns:[{name:"table_name",label:a.t("UserDefinedFieldsEmbeddedList.columns.table"),hidden:e("table_name")},{name:"column_name",label:a.t("UserDefinedFieldsEmbeddedList.columns.name"),hidden:e("column_name")},{name:"data_type",label:a.t("UserDefinedFieldsEmbeddedList.columns.dataType"),hidden:e("data_type")},{name:"required",label:a.t("UserDefinedFieldsEmbeddedList.columns.required"),render:i=>d.jsx(h,{value:i.required}),hidden:e("required")},{name:"order",label:a.t("UserDefinedFieldsEmbeddedList.columns.order"),hidden:e("order")},{name:"uuid",label:a.t("UserDefinedFieldsEmbeddedList.columns.uuid"),hidden:e("uuid")}],modal:{component:_,props:{defaults:{order:y,...o.defaults||{}},hideTable:e("table_name"),validate:S.validateUserDefinedField.bind(void 0)}}})};l.defaultProps={actions:[{name:"edit"},{name:"delete"}]};l.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsEmbeddedList",props:{actions:{required:!1,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"},description:"",defaultValue:{value:`[{
  name: 'edit'
}, {
  name: 'delete'
}]`,computed:!1}},defaults:{required:!0,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""}}};const Ce={title:"Components/User Defined Fields/UserDefinedFieldsEmbeddedList"},p=D(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>b.filter(s,m=>m!==t)),[]),r=n.useCallback(t=>e(s=>[...s,t]),[]);return d.jsx(l,{items:o,onDelete:i,onSave:r})}),c=D(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>b.filter(s,m=>m!==t)),[]),r=n.useCallback(t=>e(s=>[...s,t]),[]);return d.jsx(l,{items:o,modal:{defaults:{table_name:"people"},props:{hideTable:!0}},onDelete:i,onSave:r})}),u=D(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>b.filter(s,m=>m!==t)),[]),r=n.useCallback(t=>e(s=>[...s,t]),[]);return d.jsx(l,{addButton:{color:"purple",location:"top"},items:o,onDelete:i,onSave:r})}),f=D(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>b.filter(s,m=>m!==t)),[]),r=n.useCallback(t=>e(s=>[...s,t]),[]);return d.jsx(l,{actions:[{name:"edit",icon:"pencil"},{name:"delete",icon:"times"}],items:o,onDelete:i,onSave:r})});p.__docgenInfo={description:"",methods:[],displayName:"Default"};c.__docgenInfo={description:"",methods:[],displayName:"HiddenTableSelector"};u.__docgenInfo={description:"",methods:[],displayName:"CustomAddButton"};f.__docgenInfo={description:"",methods:[],displayName:"CustomActions"};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`useDragDrop(() => {
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
})`,...f.parameters?.docs?.source}}};const ye=["Default","HiddenTableSelector","CustomAddButton","CustomActions"];export{f as CustomActions,u as CustomAddButton,p as Default,c as HiddenTableSelector,ye as __namedExportsOrder,Ce as default};
