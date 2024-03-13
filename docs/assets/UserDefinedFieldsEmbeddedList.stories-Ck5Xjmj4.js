import{j as u}from"./jsx-runtime-BTCK_S7S.js";import{r as n}from"./index-CBqU2yxZ.js";import{_ as c}from"./index-default-C_maRo4o.js";import{d as E}from"./index.es98-FZsa2_m5.js";import{i as r,O as F,U as x,a as L}from"./UserDefinedFields-vR8eLGav.js";import"./index.es28-DYn5Qro_.js";import"./index-DZGZymok.js";import{u as b}from"./DragDrop-ryAVAQMJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index.es3-BovWZtni.js";import"./index.es2-6gtdE_oP.js";import"./index.es23-SQskR_RA.js";import"./useDrop-BRQoWSA5.js";import"./DndContext-B-2NJP7Z.js";import"./redux-C8f_Y06i.js";import"./objectSpread2-N4c0DWqo.js";import"./defineProperty-CCxoMnQV.js";import"./toPropertyKey-hKuLU48H.js";import"./index.es21-BD0kU5QO.js";import"./Form-DNYbJ3VL.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CckcRzoH.js";import"./Button-BDcCO5f8.js";import"./Icon-2tEtgK8g.js";import"./Label-Cq1fb1cd.js";import"./ModernAutoControlledComponent-DJBWk5EW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CQoJOerW.js";import"./toFinite-KQ8KevIC.js";import"./forEach-CXlln0XP.js";import"./Dimmer-D_gwaesu.js";import"./Portal-DvhHJPzU.js";import"./keyboardKey-OMDgGVm3.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-B4PnIEPz.js";import"./Checkbox-C9uAfnsM.js";import"./_baseSet-6y0qliU9.js";import"./_baseAssignValue-izmKBXUH.js";import"./Dropdown-Di2cPjwR.js";import"./without-BP-mqg2K.js";import"./isArrayLikeObject-CbXKTyfk.js";import"./isEmpty-Cyb9hIKi.js";import"./deburr-CEfyoYOr.js";import"./index-BBpNyw-T.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-CVNi8iPS.js";import"./Input-nEkKV48O.js";import"./Modal-BnyapSFx.js";import"./UserDefinedFields-BWEGjbO5.js";import"./index.es12-DgZ536br.js";import"./inherits-D5wXBZoG.js";import"./createClass-D2z1h_eG.js";import"./getPrototypeOf-BYVhAdwF.js";import"./toArray-D9zoIPho.js";import"./nonIterableRest-Bc-81Ll3.js";import"./iterableToArray-DI-mZnTP.js";import"./unsupportedIterableToArray-78IFcom3.js";import"./iframe-DRRVpjlC.js";import"../sb-preview/runtime.js";const g=["actions","columns","defaults","excludeColumns","modal"],k=0,f=o=>{const e=n.useCallback(i=>c.contains(o.excludeColumns,i),[o.excludeColumns]);return u.jsx(E,{...c.omit(o,g),actions:[{name:"edit"},{name:"delete"}],columns:[{name:"table_name",label:r.t("UserDefinedFieldsEmbeddedList.columns.table"),hidden:e("table_name")},{name:"column_name",label:r.t("UserDefinedFieldsEmbeddedList.columns.name"),hidden:e("column_name")},{name:"data_type",label:r.t("UserDefinedFieldsEmbeddedList.columns.dataType"),hidden:e("data_type")},{name:"required",label:r.t("UserDefinedFieldsEmbeddedList.columns.required"),render:i=>u.jsx(F,{value:i.required}),hidden:e("required")},{name:"order",label:r.t("UserDefinedFieldsEmbeddedList.columns.order"),hidden:e("order")},{name:"uuid",label:r.t("UserDefinedFieldsEmbeddedList.columns.uuid"),hidden:e("uuid")}],modal:{component:x,props:{defaults:{order:k,...o.defaults||{}},hideTable:e("table_name"),validate:L.validateUserDefinedField.bind(void 0)}}})};f.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsEmbeddedList",props:{defaults:{required:!0,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""}}};const He={title:"Components/User Defined Fields/UserDefinedFieldsEmbeddedList"},a=b(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>c.filter(s,d=>d!==t)),[]),m=n.useCallback(t=>e(s=>[...s,t]),[]);return u.jsx(f,{items:o,onDelete:i,onSave:m})}),l=b(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>c.filter(s,d=>d!==t)),[]),m=n.useCallback(t=>e(s=>[...s,t]),[]);return u.jsx(f,{items:o,modal:{defaults:{table_name:"people"},props:{hideTable:!0}},onDelete:i,onSave:m})}),p=b(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>c.filter(s,d=>d!==t)),[]),m=n.useCallback(t=>e(s=>[...s,t]),[]);return u.jsx(f,{addButton:{color:"purple",location:"top"},items:o,onDelete:i,onSave:m})});a.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"HiddenTableSelector"};p.__docgenInfo={description:"",methods:[],displayName:"CustomAddButton"};var D,v,I;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`useDragDrop(() => {
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
})`,...(I=(v=a.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var _,h,S;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`useDragDrop(() => {
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
})`,...(S=(h=l.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var C,U,y;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`useDragDrop(() => {
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
})`,...(y=(U=p.parameters)==null?void 0:U.docs)==null?void 0:y.source}}};const Ne=["Default","HiddenTableSelector","CustomAddButton"];export{p as CustomAddButton,a as Default,l as HiddenTableSelector,Ne as __namedExportsOrder,He as default};
