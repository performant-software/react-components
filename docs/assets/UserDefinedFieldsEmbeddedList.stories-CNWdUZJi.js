import{j as d}from"./jsx-runtime-D9TvR9R2.js";import{r as n}from"./index-C0dDX-lL.js";import{_ as l}from"./index-default-C_maRo4o.js";import{d as x}from"./index.es99-ZtBeauWB.js";import"./index.es33-B-4KS74x.js";import{i as a,O as A,U as L,a as T}from"./UserDefinedFields-DlCuKegu.js";import"./index-DOYXiIEK.js";import{u as v}from"./DragDrop-BuEYQASG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index.es31-DwKS97p0.js";import"./index.es2-DJNfgESu.js";import"./index.es27-DQCJ81LM.js";import"./index.es11-CDIfCsDR.js";import"./useDrop-Bls-awrw.js";import"./DndContext-BcAF8WvB.js";import"./redux-CpmcZR8k.js";import"./objectSpread2-Cl-ctlOG.js";import"./defineProperty-DcNpp85p.js";import"./toPropertyKey-BcUJYDQU.js";import"./index.es3-CWeo5cNN.js";import"./index.es24-xvj8T6Jl.js";import"./iframe-BvcAatQH.js";import"../sb-preview/runtime.js";import"./Form-WfNl3YLh.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-BSRayMAs.js";import"./Button-CJhT71wt.js";import"./Icon-C_3d7-zE.js";import"./Label-aEFd48OX.js";import"./ModernAutoControlledComponent-C211dBIC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-Cc_HXDPA.js";import"./toFinite-C3oJXAtX.js";import"./forEach-CLeEMxs1.js";import"./Dimmer-DP3fvqlo.js";import"./Portal-B8DXQ6EK.js";import"./keyboardKey-OMDgGVm3.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-DWKMCCtW.js";import"./Checkbox-B3tsCUtI.js";import"./_baseSet-BllfnHSO.js";import"./_baseAssignValue-UQlBDUKN.js";import"./Dropdown-DwNow7wJ.js";import"./without-Duh6Zu7H.js";import"./isArrayLikeObject-Bl_bAmop.js";import"./isEmpty-CY-Bv0TY.js";import"./deburr-CNLr_JRW.js";import"./index-mbjjMjCk.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-B6f9p5im.js";import"./Input-Bwh_HEb3.js";import"./Modal-BWgkEMr1.js";import"./UserDefinedFields-DRJ-PwLj.js";import"./index.es14-DR8raKRm.js";import"./inherits-CWPG5jll.js";import"./createClass-CV9nCQMI.js";import"./getPrototypeOf-BYVhAdwF.js";import"./toArray-DwAYNham.js";import"./nonIterableRest-QXsEjLJN.js";import"./iterableToArray-DI-mZnTP.js";const j=["columns","defaults","excludeColumns","modal"],R=0,p=o=>{const e=n.useCallback(i=>l.contains(o.excludeColumns,i),[o.excludeColumns]);return d.jsx(x,{...l.omit(o,j),columns:[{name:"table_name",label:a.t("UserDefinedFieldsEmbeddedList.columns.table"),hidden:e("table_name")},{name:"column_name",label:a.t("UserDefinedFieldsEmbeddedList.columns.name"),hidden:e("column_name")},{name:"data_type",label:a.t("UserDefinedFieldsEmbeddedList.columns.dataType"),hidden:e("data_type")},{name:"required",label:a.t("UserDefinedFieldsEmbeddedList.columns.required"),render:i=>d.jsx(A,{value:i.required}),hidden:e("required")},{name:"order",label:a.t("UserDefinedFieldsEmbeddedList.columns.order"),hidden:e("order")},{name:"uuid",label:a.t("UserDefinedFieldsEmbeddedList.columns.uuid"),hidden:e("uuid")}],modal:{component:L,props:{defaults:{order:R,...o.defaults||{}},hideTable:e("table_name"),validate:T.validateUserDefinedField.bind(void 0)}}})};p.defaultProps={actions:[{name:"edit"},{name:"delete"}]};p.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsEmbeddedList",props:{actions:{required:!1,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"},description:"",defaultValue:{value:`[{
  name: 'edit'
}, {
  name: 'delete'
}]`,computed:!1}},defaults:{required:!0,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""}}};const Ve={title:"Components/User Defined Fields/UserDefinedFieldsEmbeddedList"},c=v(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>l.filter(s,m=>m!==t)),[]),r=n.useCallback(t=>e(s=>[...s,t]),[]);return d.jsx(p,{items:o,onDelete:i,onSave:r})}),u=v(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>l.filter(s,m=>m!==t)),[]),r=n.useCallback(t=>e(s=>[...s,t]),[]);return d.jsx(p,{items:o,modal:{defaults:{table_name:"people"},props:{hideTable:!0}},onDelete:i,onSave:r})}),f=v(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>l.filter(s,m=>m!==t)),[]),r=n.useCallback(t=>e(s=>[...s,t]),[]);return d.jsx(p,{addButton:{color:"purple",location:"top"},items:o,onDelete:i,onSave:r})}),b=v(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>l.filter(s,m=>m!==t)),[]),r=n.useCallback(t=>e(s=>[...s,t]),[]);return d.jsx(p,{actions:[{name:"edit",icon:"pencil"},{name:"delete",icon:"times"}],items:o,onDelete:i,onSave:r})});c.__docgenInfo={description:"",methods:[],displayName:"Default"};u.__docgenInfo={description:"",methods:[],displayName:"HiddenTableSelector"};f.__docgenInfo={description:"",methods:[],displayName:"CustomAddButton"};b.__docgenInfo={description:"",methods:[],displayName:"CustomActions"};var D,I,S;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`useDragDrop(() => {
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
})`,...(S=(I=c.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var h,_,C;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`useDragDrop(() => {
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
})`,...(C=(_=u.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var y,U,E;f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:`useDragDrop(() => {
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
})`,...(E=(U=f.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var F,k,g;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`useDragDrop(() => {
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
})`,...(g=(k=b.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const ze=["Default","HiddenTableSelector","CustomAddButton","CustomActions"];export{b as CustomActions,f as CustomAddButton,c as Default,u as HiddenTableSelector,ze as __namedExportsOrder,Ve as default};
