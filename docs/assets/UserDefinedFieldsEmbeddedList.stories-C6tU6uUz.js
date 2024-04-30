import{j as u}from"./jsx-runtime-D9TvR9R2.js";import{r as n}from"./index-C0dDX-lL.js";import{_ as c}from"./index-default-C_maRo4o.js";import{d as E}from"./index.es98-C81tkTtF.js";import{i as r,O as F,U as x,a as L}from"./UserDefinedFields-CgIDY_ex.js";import"./index.es30-DrDY2wIT.js";import"./index-DOYXiIEK.js";import{u as b}from"./DragDrop-BuEYQASG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index.es3-Clo1AXQg.js";import"./index.es2-Tperkrvw.js";import"./index.es25-DQCJ81LM.js";import"./useDrop-Bls-awrw.js";import"./DndContext-BcAF8WvB.js";import"./redux-CpmcZR8k.js";import"./objectSpread2-Cl-ctlOG.js";import"./defineProperty-DcNpp85p.js";import"./toPropertyKey-BcUJYDQU.js";import"./index.es22-xvj8T6Jl.js";import"./Form-WfNl3YLh.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BSRayMAs.js";import"./Button-CJhT71wt.js";import"./Icon-C_3d7-zE.js";import"./Label-aEFd48OX.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Cc_HXDPA.js";import"./toFinite-C3oJXAtX.js";import"./forEach-CLeEMxs1.js";import"./Dimmer-DP3fvqlo.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-DWKMCCtW.js";import"./Checkbox-B3tsCUtI.js";import"./_baseSet-BllfnHSO.js";import"./_baseAssignValue-UQlBDUKN.js";import"./Dropdown-DwNow7wJ.js";import"./without-Duh6Zu7H.js";import"./isArrayLikeObject-Bl_bAmop.js";import"./isEmpty-CY-Bv0TY.js";import"./deburr-CNLr_JRW.js";import"./index-mbjjMjCk.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-B6f9p5im.js";import"./Input-Bwh_HEb3.js";import"./Modal-BWgkEMr1.js";import"./UserDefinedFields-B_6ke9Q8.js";import"./index.es12-Dx73w1KT.js";import"./inherits-CWPG5jll.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";import"./toArray-DwAYNham.js";import"./nonIterableRest-QXsEjLJN.js";import"./iterableToArray-DI-mZnTP.js";import"./iframe-DpUBYvKd.js";import"../sb-preview/runtime.js";const g=["actions","columns","defaults","excludeColumns","modal"],k=0,f=o=>{const e=n.useCallback(i=>c.contains(o.excludeColumns,i),[o.excludeColumns]);return u.jsx(E,{...c.omit(o,g),actions:[{name:"edit"},{name:"delete"}],columns:[{name:"table_name",label:r.t("UserDefinedFieldsEmbeddedList.columns.table"),hidden:e("table_name")},{name:"column_name",label:r.t("UserDefinedFieldsEmbeddedList.columns.name"),hidden:e("column_name")},{name:"data_type",label:r.t("UserDefinedFieldsEmbeddedList.columns.dataType"),hidden:e("data_type")},{name:"required",label:r.t("UserDefinedFieldsEmbeddedList.columns.required"),render:i=>u.jsx(F,{value:i.required}),hidden:e("required")},{name:"order",label:r.t("UserDefinedFieldsEmbeddedList.columns.order"),hidden:e("order")},{name:"uuid",label:r.t("UserDefinedFieldsEmbeddedList.columns.uuid"),hidden:e("uuid")}],modal:{component:x,props:{defaults:{order:k,...o.defaults||{}},hideTable:e("table_name"),validate:L.validateUserDefinedField.bind(void 0)}}})};f.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsEmbeddedList",props:{defaults:{required:!0,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""}}};const Oe={title:"Components/User Defined Fields/UserDefinedFieldsEmbeddedList"},a=b(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>c.filter(s,d=>d!==t)),[]),m=n.useCallback(t=>e(s=>[...s,t]),[]);return u.jsx(f,{items:o,onDelete:i,onSave:m})}),l=b(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>c.filter(s,d=>d!==t)),[]),m=n.useCallback(t=>e(s=>[...s,t]),[]);return u.jsx(f,{items:o,modal:{defaults:{table_name:"people"},props:{hideTable:!0}},onDelete:i,onSave:m})}),p=b(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>c.filter(s,d=>d!==t)),[]),m=n.useCallback(t=>e(s=>[...s,t]),[]);return u.jsx(f,{addButton:{color:"purple",location:"top"},items:o,onDelete:i,onSave:m})});a.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"HiddenTableSelector"};p.__docgenInfo={description:"",methods:[],displayName:"CustomAddButton"};var D,v,I;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`useDragDrop(() => {
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
})`,...(y=(U=p.parameters)==null?void 0:U.docs)==null?void 0:y.source}}};const He=["Default","HiddenTableSelector","CustomAddButton"];export{p as CustomAddButton,a as Default,l as HiddenTableSelector,He as __namedExportsOrder,Oe as default};
