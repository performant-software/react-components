import{j as d}from"./jsx-runtime-BTCK_S7S.js";import{r}from"./index-CBqU2yxZ.js";import{d as F}from"./index-DfmhmaGJ.js";import{_ as l}from"./index-default-C_maRo4o.js";import{D as S}from"./index.es98-DUn1LaM8.js";import{i as n,O as C,U as y,a as L}from"./UserDefinedFields-D0LGzvEX.js";import"./index.es28-C5Z9R2NB.js";import"./index-DZGZymok.js";import{U as u}from"./UserDefinedFields-CvFFH22K.js";import{u as U}from"./DragDrop-ryAVAQMJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZh2vnSw.js";import"./pickBy-CU2rOOKe.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-Bu_b4Pek.js";import"./index-Cw1G72V2.js";import"./index-CKJfshIT.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./preview-errors-CzpZmerH.js";import"./debounce-Bq1aTuh-.js";import"./index.es3-CAJGsQNm.js";import"./index.es2-CyI0qXj7.js";import"./index.es23-SQskR_RA.js";import"./useDrop-BRQoWSA5.js";import"./DndContext-B-2NJP7Z.js";import"./redux-C8f_Y06i.js";import"./objectSpread2-N4c0DWqo.js";import"./defineProperty-CCxoMnQV.js";import"./toPropertyKey-hKuLU48H.js";import"./index.es21-BD0kU5QO.js";import"./Form-fErk-qk_.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CckcRzoH.js";import"./Button-Blq7Z6RX.js";import"./Icon-2tEtgK8g.js";import"./Label-Cq1fb1cd.js";import"./ModernAutoControlledComponent-DJBWk5EW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CQoJOerW.js";import"./toFinite-KQ8KevIC.js";import"./forEach-CXlln0XP.js";import"./Dimmer-D_gwaesu.js";import"./Portal-DvhHJPzU.js";import"./keyboardKey-OMDgGVm3.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./map-B4PnIEPz.js";import"./Checkbox-C9uAfnsM.js";import"./_baseSet-6y0qliU9.js";import"./_baseAssignValue-izmKBXUH.js";import"./Dropdown-Di2cPjwR.js";import"./without-BP-mqg2K.js";import"./isArrayLikeObject-CbXKTyfk.js";import"./isEmpty-Cyb9hIKi.js";import"./deburr-CEfyoYOr.js";import"./index-BBpNyw-T.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-CVNi8iPS.js";import"./Input--hQVCRQV.js";import"./Modal-Bz2VEyQG.js";import"./inherits-D5wXBZoG.js";import"./createClass-D2z1h_eG.js";import"./getPrototypeOf-BYVhAdwF.js";import"./toArray-D9zoIPho.js";import"./nonIterableRest-Bc-81Ll3.js";import"./iterableToArray-DI-mZnTP.js";import"./unsupportedIterableToArray-78IFcom3.js";import"./iframe-DUkFOzYJ.js";import"../sb-preview/runtime.js";import"./index.es12-CEp0wfjB.js";const x=["actions","collectionName","columns","defaults","excludeColumns","modal","onDelete","onLoad","onSave"],g=0,f=o=>{const e=r.useCallback(t=>l.contains(o.excludeColumns,t),[o.excludeColumns]);return d.jsx(S,{...l.omit(o,x),actions:[{name:"edit"},{name:"delete"}],columns:[{name:"table_name",label:n.t("UserDefinedFieldsList.columns.table"),hidden:e("table_name")},{name:"column_name",label:n.t("UserDefinedFieldsList.columns.name"),hidden:e("column_name")},{name:"data_type",label:n.t("UserDefinedFieldsList.columns.dataType"),hidden:e("data_type")},{name:"required",label:n.t("UserDefinedFieldsList.columns.required"),render:t=>d.jsx(C,{value:t.required}),hidden:e("required")},{name:"order",label:n.t("UserDefinedFieldsList.columns.order"),hidden:e("order")},{name:"uuid",label:n.t("UserDefinedFieldsList.columns.uuid"),hidden:e("uuid")}],collectionName:"user_defined_fields",modal:{component:y,props:{defaults:{order:g,...o.defaults||{}},hideTable:e("table_name"),validate:L.validateUserDefinedField.bind(void 0)}},onDelete:t=>u.delete(t),onLoad:t=>u.fetchAll(t),onSave:t=>u.save(t)})};f.__docgenInfo={description:"",methods:[],displayName:"UserDefinedFieldsList",props:{defaults:{required:!1,flowType:{name:"any"},description:""},excludeColumns:{required:!1,flowType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""}}};const Qe={title:"Components/User Defined Fields/UserDefinedFieldsList",decorators:[F.withKnobs]},m=U(()=>{const[o,e]=r.useState([]),t=r.useCallback(i=>e(s=>l.filter(s,c=>c!==i)),[]),p=r.useCallback(i=>e(s=>[...s,i]),[]);return d.jsx(f,{items:o,onDelete:t,onSave:p})}),a=U(()=>{const[o,e]=r.useState([]),t=r.useCallback(i=>e(s=>l.filter(s,c=>c!==i)),[]),p=r.useCallback(i=>e(s=>[...s,i]),[]);return d.jsx(f,{addButton:{color:"purple",location:"top"},items:o,onDelete:t,onSave:p})});m.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"CustomAddButton"};var D,v,_;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`useDragDrop(() => {
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
})`,...(_=(v=m.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var b,h,I;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`useDragDrop(() => {
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
})`,...(I=(h=a.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};const Ve=["Default","CustomAddButton"];export{a as CustomAddButton,m as Default,Ve as __namedExportsOrder,Qe as default};