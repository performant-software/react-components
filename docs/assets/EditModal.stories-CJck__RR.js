import{j as e}from"./jsx-runtime-BTCK_S7S.js";import{a as u}from"./chunk-WFFRPTHA-B2vgThZf.js";import{d as R}from"./index-CRbjvGQW.js";import{r as C}from"./index-CBqU2yxZ.js";import{F as r}from"./Form-fErk-qk_.js";import{M as x}from"./Message-3p6wyYpA.js";import{B as _}from"./Button-Blq7Z6RX.js";import{I as H}from"./Icon-2tEtgK8g.js";import{M as a}from"./Modal-Bz2VEyQG.js";import{_ as W}from"./index-default-C_maRo4o.js";import{A as O}from"./AddModal-8so4BWij.js";import{A as k}from"./Api-DXLamogn.js";import{A as D}from"./AssociatedDropdown-CJw7U-lo.js";import{E as s}from"./EditModal-5I9Nvkwr.js";import{i as L}from"./Companies-Dq8qL_4h.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./mapValues-BXr-GEgA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./pickBy-ILmh4CwI.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./isPlainObject-CVmyTvcu.js";import"./index-Cw1G72V2.js";import"./tiny-invariant.cjs-DxxScMW_.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./debounce-C2QphL08.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CckcRzoH.js";import"./Label-Cq1fb1cd.js";import"./ModernAutoControlledComponent-DJBWk5EW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-CQoJOerW.js";import"./toFinite-KQ8KevIC.js";import"./forEach-CXlln0XP.js";import"./Dimmer-D_gwaesu.js";import"./Portal-DvhHJPzU.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DZGZymok.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./Checkbox-C9uAfnsM.js";import"./_baseSet-6y0qliU9.js";import"./_baseAssignValue-izmKBXUH.js";import"./Dropdown-Di2cPjwR.js";import"./map-B4PnIEPz.js";import"./without-BP-mqg2K.js";import"./isArrayLikeObject-CbXKTyfk.js";import"./isEmpty-Cyb9hIKi.js";import"./deburr-CEfyoYOr.js";import"./index-BBpNyw-T.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-CVNi8iPS.js";import"./Input--hQVCRQV.js";import"./index.es33-xAz7_TJc.js";import"./iframe-DaOy50uq.js";import"../sb-preview/runtime.js";import"./i18n-DOVQ27W-.js";import"./i18next-Sc0HEOoc.js";import"./toPropertyKey-hKuLU48H.js";import"./defineProperty-CCxoMnQV.js";import"./inherits-D5wXBZoG.js";import"./createClass-D2z1h_eG.js";import"./getPrototypeOf-BYVhAdwF.js";import"./Toaster-C1YYqOUE.js";import"./Transition-DSFEXhCu.js";import"./index.es3-CkNgoeDp.js";import"./Loader-CooidObp.js";const ro={title:"Components/Semantic UI/EditModal",component:s},c=n=>o=>{const[t,h]=C.useState(!1),q=C.useCallback(()=>{h(!1),u("close")()},[]),y=C.useCallback(()=>(h(!1),u("save")(),Promise.resolve()),[]);return e.jsxs(e.Fragment,{children:[e.jsx(_,{content:"Open",primary:!0,onClick:()=>h(!0)}),e.jsx(n,{...o,onClose:q,onSave:y,open:t})]})},i=c(n=>e.jsx(s,{component:o=>e.jsxs(a,{as:r,open:n.open,children:[e.jsx(a.Header,{content:"Add Record"}),e.jsxs(a.Content,{children:[e.jsx(r.Input,{label:"Name"}),e.jsx(r.Input,{label:"Address"}),e.jsx(r.Input,{label:"Phone"})]}),o.children]}),onClose:n.onClose,onSave:n.onSave})),d=c(n=>e.jsx(s,{component:o=>e.jsxs(a,{as:r,open:n.open,children:[e.jsx(a.Header,{content:"Add Record"}),e.jsxs(a.Content,{children:[e.jsx(r.Input,{label:"Name"}),e.jsx(r.Input,{label:"Address"}),e.jsx(r.Input,{label:"Phone"})]}),o.children]}),item:{id:1},onClose:n.onClose,onInitialize:()=>new Promise(o=>{W.delay(o.bind(void 0,{}),5e3)}),onSave:n.onSave})),p=c(n=>e.jsx(s,{component:o=>e.jsxs(a,{as:r,open:n.open,noValidate:!0,children:[e.jsx(a.Header,{content:"Add Record"}),e.jsxs(a.Content,{children:[e.jsx(r.Input,{required:o.isRequired("name"),error:o.isError("name"),label:"Name",onChange:o.onTextInputChange.bind(void 0,"name")}),e.jsx(r.Input,{required:o.isRequired("address"),error:o.isError("address"),label:"Address",onChange:o.onTextInputChange.bind(void 0,"address")}),e.jsx(r.Input,{required:o.isRequired("phone"),error:o.isError("phone"),onChange:o.onTextInputChange.bind(void 0,"phone"),label:"Phone"})]}),o.children]}),onClose:n.onClose,onSave:n.onSave,required:["phone","name","address"]})),l=c(n=>e.jsx(s,{component:o=>e.jsxs(a,{as:r,open:n.open,children:[e.jsx(a.Header,{content:"Add Record"}),e.jsxs(a.Content,{children:[e.jsx(r.Input,{label:"Name"}),e.jsx(r.Input,{label:"Address"}),e.jsx(r.Input,{label:"Phone"}),e.jsx(r.Input,{label:"Field",required:!0,children:e.jsx(D,{collectionName:"items",modal:{component:O,onSave:()=>(u("save")(),Promise.resolve({}))},onSearch:t=>k.onLoad({items:L,search:t}),onSelection:u("selection"),renderOption:t=>({key:t.id,value:t.id,text:t.company,description:t.country}),upward:R.boolean("Open upward",!1)})})]}),o.children]}),onClose:n.onClose,onSave:n.onSave})),m=c(n=>e.jsx(s,{component:o=>e.jsxs(a,{as:r,open:n.open,children:[e.jsx(a.Header,{content:"Add record"}),e.jsxs(a.Content,{children:[e.jsxs(x,{warning:!0,visible:o.dirty,children:[e.jsxs(x.Header,{children:[e.jsx(H,{name:"exclamation triangle"}),"Warning"]}),e.jsx("p",{children:"You have unsaved changes."})]}),e.jsx(r.Input,{label:"Name",onChange:o.onTextInputChange.bind(void 0,"name"),value:o.item.name||""}),e.jsx(r.Input,{label:"Address",onChange:o.onTextInputChange.bind(void 0,"address"),value:o.item.address||""}),e.jsx(r.Input,{label:"Phone",onChange:o.onTextInputChange.bind(void 0,"phone"),value:o.item.phone||""})]}),o.children]}),item:{id:1,name:"Test",address:"123 Main St",phone:null},onClose:n.onClose,onSave:n.onSave}));i.__docgenInfo={description:"",methods:[],displayName:"Default"};d.__docgenInfo={description:"",methods:[],displayName:"Loading"};p.__docgenInfo={description:"",methods:[],displayName:"SaveError"};l.__docgenInfo={description:"",methods:[],displayName:"Toaster"};m.__docgenInfo={description:"",methods:[],displayName:"UnsavedChanges"};var v,I,g;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`withWrapper(props => <EditModal component={(innerProps: EditContainerProps) => <Modal as={Form} open={props.open}>
        <Modal.Header content='Add Record' />
        <Modal.Content>
          <Form.Input label='Name' />
          <Form.Input label='Address' />
          <Form.Input label='Phone' />
        </Modal.Content>
        {innerProps.children}
      </Modal>} onClose={props.onClose} onSave={props.onSave} />)`,...(g=(I=i.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var b,j,M;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`withWrapper(props => <EditModal component={(innerProps: EditContainerProps) => <Modal as={Form} open={props.open}>
        <Modal.Header content='Add Record' />
        <Modal.Content>
          <Form.Input label='Name' />
          <Form.Input label='Address' />
          <Form.Input label='Phone' />
        </Modal.Content>
        {innerProps.children}
      </Modal>} item={{
  id: 1
}} onClose={props.onClose} onInitialize={() => new Promise(resolve => {
  _.delay(resolve.bind(this, {}), 5000);
})} onSave={props.onSave} />)`,...(M=(j=d.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var S,P,f;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`withWrapper(wrapperProps => <EditModal component={(props: EditContainerProps) => <Modal as={Form} open={wrapperProps.open} noValidate>
        <Modal.Header content='Add Record' />
        <Modal.Content>
          <Form.Input required={props.isRequired('name')} error={props.isError('name')} label='Name' onChange={props.onTextInputChange.bind(this, 'name')} />
          <Form.Input required={props.isRequired('address')} error={props.isError('address')} label='Address' onChange={props.onTextInputChange.bind(this, 'address')} />
          <Form.Input required={props.isRequired('phone')} error={props.isError('phone')} onChange={props.onTextInputChange.bind(this, 'phone')} label='Phone' />
        </Modal.Content>
        {props.children}
      </Modal>} onClose={wrapperProps.onClose} onSave={wrapperProps.onSave} required={['phone', 'name', 'address']} />)`,...(f=(P=p.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var A,E,F;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`withWrapper(props => <EditModal component={(innerProps: EditContainerProps) => <Modal as={Form} open={props.open}>
        <Modal.Header content='Add Record' />
        <Modal.Content>
          <Form.Input label='Name' />
          <Form.Input label='Address' />
          <Form.Input label='Phone' />
          <Form.Input label='Field' required>
            <AssociatedDropdown collectionName='items' modal={{
        component: AddModal,
        onSave: () => {
          action('save')();
          return Promise.resolve({});
        }
      }} onSearch={search => Api.onLoad({
        items,
        search
      })} onSelection={action('selection')} renderOption={item => ({
        key: item.id,
        value: item.id,
        text: item.company,
        description: item.country
      })} upward={boolean('Open upward', false)} />
          </Form.Input>
        </Modal.Content>
        {innerProps.children}
      </Modal>} onClose={props.onClose} onSave={props.onSave} />)`,...(F=(E=l.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var w,N,T;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`withWrapper(wrapperProps => <EditModal component={(props: EditContainerProps) => <Modal as={Form} open={wrapperProps.open}>
        <Modal.Header content='Add record' />
        <Modal.Content>
          <Message warning visible={props.dirty}>
            <Message.Header>
              <Icon name='exclamation triangle' />
              Warning
            </Message.Header>
            <p>You have unsaved changes.</p>
          </Message>
          <Form.Input label='Name' onChange={props.onTextInputChange.bind(this, 'name')} value={props.item.name || ''} />
          <Form.Input label='Address' onChange={props.onTextInputChange.bind(this, 'address')} value={props.item.address || ''} />
          <Form.Input label='Phone' onChange={props.onTextInputChange.bind(this, 'phone')} value={props.item.phone || ''} />
        </Modal.Content>
        {props.children}
      </Modal>} item={{
  id: 1,
  name: 'Test',
  address: '123 Main St',
  phone: null
}} onClose={wrapperProps.onClose} onSave={wrapperProps.onSave} />)`,...(T=(N=m.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const ao=["Default","Loading","SaveError","Toaster","UnsavedChanges"];export{i as Default,d as Loading,p as SaveError,l as Toaster,m as UnsavedChanges,ao as __namedExportsOrder,ro as default};
