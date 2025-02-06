import{j as d}from"./jsx-runtime-BTCK_S7S.js";import{r as n}from"./index-CBqU2yxZ.js";import{_ as l}from"./index-default-C_maRo4o.js";import{d as x}from"./index.es99-23upMnAz.js";import"./index.es33-7tSugCy8.js";import{i as a,O as A,U as L,a as T}from"./UserDefinedFields-DRheRFYT.js";import"./index-DZGZymok.js";import{u as v}from"./DragDrop-ryAVAQMJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index.es3-CB1ZutV8.js";import"./index.es2-0Jz2H6tz.js";import"./index.es27-SQskR_RA.js";import"./index.es11-idiWBoAT.js";import"./useDrop-BRQoWSA5.js";import"./DndContext-B-2NJP7Z.js";import"./redux-C8f_Y06i.js";import"./objectSpread2-N4c0DWqo.js";import"./defineProperty-CCxoMnQV.js";import"./toPropertyKey-hKuLU48H.js";import"./index.es24-BD0kU5QO.js";import"./iframe-C-SVAuGs.js";import"../sb-preview/runtime.js";import"./Form-fErk-qk_.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CckcRzoH.js";import"./Button-Blq7Z6RX.js";import"./Icon-2tEtgK8g.js";import"./Label-Cq1fb1cd.js";import"./ModernAutoControlledComponent-DJBWk5EW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CQoJOerW.js";import"./toFinite-KQ8KevIC.js";import"./forEach-CXlln0XP.js";import"./Dimmer-D_gwaesu.js";import"./Portal-DvhHJPzU.js";import"./keyboardKey-OMDgGVm3.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-B4PnIEPz.js";import"./Checkbox-C9uAfnsM.js";import"./_baseSet-6y0qliU9.js";import"./_baseAssignValue-izmKBXUH.js";import"./Dropdown-Di2cPjwR.js";import"./without-BP-mqg2K.js";import"./isArrayLikeObject-CbXKTyfk.js";import"./isEmpty-Cyb9hIKi.js";import"./deburr-CEfyoYOr.js";import"./index-BBpNyw-T.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-CVNi8iPS.js";import"./Input--hQVCRQV.js";import"./Modal-Bz2VEyQG.js";import"./UserDefinedFields-CL03vJ3S.js";import"./index.es14-BveW_sZo.js";import"./inherits-D5wXBZoG.js";import"./createClass-D2z1h_eG.js";import"./getPrototypeOf-BYVhAdwF.js";import"./toArray-Co26JL8n.js";import"./nonIterableRest-BqHV3pVR.js";const j=["columns","defaults","excludeColumns","modal"],R=0,p=o=>{const e=n.useCallback(i=>l.contains(o.excludeColumns,i),[o.excludeColumns]);return d.jsx(x,{...l.omit(o,j),columns:[{name:"table_name",label:a.t("UserDefinedFieldsEmbeddedList.columns.table"),hidden:e("table_name")},{name:"column_name",label:a.t("UserDefinedFieldsEmbeddedList.columns.name"),hidden:e("column_name")},{name:"data_type",label:a.t("UserDefinedFieldsEmbeddedList.columns.dataType"),hidden:e("data_type")},{name:"required",label:a.t("UserDefinedFieldsEmbeddedList.columns.required"),render:i=>d.jsx(A,{value:i.required}),hidden:e("required")},{name:"order",label:a.t("UserDefinedFieldsEmbeddedList.columns.order"),hidden:e("order")},{name:"uuid",label:a.t("UserDefinedFieldsEmbeddedList.columns.uuid"),hidden:e("uuid")}],modal:{component:L,props:{defaults:{order:R,...o.defaults||{}},hideTable:e("table_name"),validate:T.validateUserDefinedField.bind(void 0)}}})};p.defaultProps={actions:[{name:"edit"},{name:"delete"}]};p.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsEmbeddedList",props:{actions:{required:!1,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"},description:"",defaultValue:{value:`[{
  name: 'edit'
}, {
  name: 'delete'
}]`,computed:!1}},defaults:{required:!0,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""}}};const Pe={title:"Components/User Defined Fields/UserDefinedFieldsEmbeddedList"},c=v(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>l.filter(s,m=>m!==t)),[]),r=n.useCallback(t=>e(s=>[...s,t]),[]);return d.jsx(p,{items:o,onDelete:i,onSave:r})}),u=v(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>l.filter(s,m=>m!==t)),[]),r=n.useCallback(t=>e(s=>[...s,t]),[]);return d.jsx(p,{items:o,modal:{defaults:{table_name:"people"},props:{hideTable:!0}},onDelete:i,onSave:r})}),f=v(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>l.filter(s,m=>m!==t)),[]),r=n.useCallback(t=>e(s=>[...s,t]),[]);return d.jsx(p,{addButton:{color:"purple",location:"top"},items:o,onDelete:i,onSave:r})}),b=v(()=>{const[o,e]=n.useState([]),i=n.useCallback(t=>e(s=>l.filter(s,m=>m!==t)),[]),r=n.useCallback(t=>e(s=>[...s,t]),[]);return d.jsx(p,{actions:[{name:"edit",icon:"pencil"},{name:"delete",icon:"times"}],items:o,onDelete:i,onSave:r})});c.__docgenInfo={description:"",methods:[],displayName:"Default"};u.__docgenInfo={description:"",methods:[],displayName:"HiddenTableSelector"};f.__docgenInfo={description:"",methods:[],displayName:"CustomAddButton"};b.__docgenInfo={description:"",methods:[],displayName:"CustomActions"};var D,I,S;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`useDragDrop(() => {
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
})`,...(g=(k=b.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const Me=["Default","HiddenTableSelector","CustomAddButton","CustomActions"];export{b as CustomActions,f as CustomAddButton,c as Default,u as HiddenTableSelector,Me as __namedExportsOrder,Pe as default};
