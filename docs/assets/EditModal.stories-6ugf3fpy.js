import{r as C,j as e}from"./iframe-CDKtSUh7.js";import{F as r}from"./Form-V9Mme2Wd.js";import{M as x}from"./Message-BTfjGsMG.js";import{B as g}from"./Button-DA_XBQbJ.js";import{I as b}from"./Icon-5o84n6La.js";import{M as a}from"./Modal-BdRM98xc.js";import{_ as M}from"./index-default-B8-H6N8J.js";import{A as j}from"./AddModal-b6OwwYSz.js";import{A as S}from"./Api-DGMTLhRm.js";import{A}from"./AssociatedDropdown-D3N9xb5L.js";import{E as t}from"./EditModal-DbM00O3T.js";import{i as P}from"./Companies-Dq8qL_4h.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-0Tp31rtT.js";import"./Label-CH_WshmF.js";import"./ModernAutoControlledComponent-B-ilQLgm.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-DtwzgLcn.js";import"./toFinite-DjjXQZ2l.js";import"./forEach-Dp4nfTUu.js";import"./Dimmer-DQCDOJdA.js";import"./Portal-DdFmWNdd.js";import"./keyboardKey-BIrml5XW.js";import"./Checkbox-BpN7gCGk.js";import"./_baseSet-DuVMIhyb.js";import"./_baseAssignValue-U8vnLISS.js";import"./Dropdown-4i4HInfn.js";import"./map-2oQ1uFDN.js";import"./without-3MOHujL6.js";import"./isArrayLikeObject-DSQPvB88.js";import"./isEmpty-406wiN_k.js";import"./deburr-hJjWoWgP.js";import"./index-Cv6_bv5M.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-D_0iK0Hx.js";import"./Input-Cp8K4J0-.js";import"./index-iiIS-OyD.js";import"./index.es28-Db5bh1d3.js";import"./index.es35-NGGuPWEW.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";import"./Toaster-9qhRxZkP.js";import"./Transition-D_S4Ilus.js";import"./index.es3-B5llofzq.js";import"./index.es33-DcxK12Qu.js";import"./Loader-C2mCF20R.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Components/Semantic UI/EditModal",component:t},c=o=>n=>{const[s,h]=C.useState(!1),v=C.useCallback(()=>{h(!1),u("close")()},[]),I=C.useCallback(()=>(h(!1),u("save")(),Promise.resolve()),[]);return e.jsxs(e.Fragment,{children:[e.jsx(g,{content:"Open",primary:!0,onClick:()=>h(!0)}),e.jsx(o,{...n,onClose:v,onSave:I,open:s})]})},d=c(o=>e.jsx(t,{component:n=>e.jsxs(a,{as:r,open:o.open,children:[e.jsx(a.Header,{content:"Add Record"}),e.jsxs(a.Content,{children:[e.jsx(r.Input,{label:"Name"}),e.jsx(r.Input,{label:"Address"}),e.jsx(r.Input,{label:"Phone"})]}),n.children]}),onClose:o.onClose,onSave:o.onSave})),i=c(o=>e.jsx(t,{component:n=>e.jsxs(a,{as:r,open:o.open,children:[e.jsx(a.Header,{content:"Add Record"}),e.jsxs(a.Content,{children:[e.jsx(r.Input,{label:"Name"}),e.jsx(r.Input,{label:"Address"}),e.jsx(r.Input,{label:"Phone"})]}),n.children]}),item:{id:1},onClose:o.onClose,onInitialize:()=>new Promise(n=>{M.delay(n.bind(void 0,{}),5e3)}),onSave:o.onSave})),p=c(o=>e.jsx(t,{component:n=>e.jsxs(a,{as:r,open:o.open,noValidate:!0,children:[e.jsx(a.Header,{content:"Add Record"}),e.jsxs(a.Content,{children:[e.jsx(r.Input,{required:n.isRequired("name"),error:n.isError("name"),label:"Name",onChange:n.onTextInputChange.bind(void 0,"name")}),e.jsx(r.Input,{required:n.isRequired("address"),error:n.isError("address"),label:"Address",onChange:n.onTextInputChange.bind(void 0,"address")}),e.jsx(r.Input,{required:n.isRequired("phone"),error:n.isError("phone"),onChange:n.onTextInputChange.bind(void 0,"phone"),label:"Phone"})]}),n.children]}),onClose:o.onClose,onSave:o.onSave,required:["phone","name","address"]})),l=c(o=>e.jsx(t,{component:n=>e.jsxs(a,{as:r,open:o.open,children:[e.jsx(a.Header,{content:"Add Record"}),e.jsxs(a.Content,{children:[e.jsx(r.Input,{label:"Name"}),e.jsx(r.Input,{label:"Address"}),e.jsx(r.Input,{label:"Phone"}),e.jsx(r.Input,{label:"Field",required:!0,children:e.jsx(A,{collectionName:"items",modal:{component:j,onSave:()=>(u("save")(),Promise.resolve({}))},onSearch:s=>S.onLoad({items:P,search:s}),onSelection:u("selection"),renderOption:s=>({key:s.id,value:s.id,text:s.company,description:s.country})})})]}),n.children]}),onClose:o.onClose,onSave:o.onSave})),m=c(o=>e.jsx(t,{component:n=>e.jsxs(a,{as:r,open:o.open,children:[e.jsx(a.Header,{content:"Add record"}),e.jsxs(a.Content,{children:[e.jsxs(x,{warning:!0,visible:n.dirty,children:[e.jsxs(x.Header,{children:[e.jsx(b,{name:"exclamation triangle"}),"Warning"]}),e.jsx("p",{children:"You have unsaved changes."})]}),e.jsx(r.Input,{label:"Name",onChange:n.onTextInputChange.bind(void 0,"name"),value:n.item.name||""}),e.jsx(r.Input,{label:"Address",onChange:n.onTextInputChange.bind(void 0,"address"),value:n.item.address||""}),e.jsx(r.Input,{label:"Phone",onChange:n.onTextInputChange.bind(void 0,"phone"),value:n.item.phone||""})]}),n.children]}),item:{id:1,name:"Test",address:"123 Main St",phone:null},onClose:o.onClose,onSave:o.onSave}));d.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"Loading"};p.__docgenInfo={description:"",methods:[],displayName:"SaveError"};l.__docgenInfo={description:"",methods:[],displayName:"Toaster"};m.__docgenInfo={description:"",methods:[],displayName:"UnsavedChanges"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`withWrapper(props => <EditModal component={(innerProps: EditContainerProps) => <Modal as={Form} open={props.open}>
        <Modal.Header content='Add Record' />
        <Modal.Content>
          <Form.Input label='Name' />
          <Form.Input label='Address' />
          <Form.Input label='Phone' />
        </Modal.Content>
        {innerProps.children}
      </Modal>} onClose={props.onClose} onSave={props.onSave} />)`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`withWrapper(props => <EditModal component={(innerProps: EditContainerProps) => <Modal as={Form} open={props.open}>
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
})} onSave={props.onSave} />)`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`withWrapper(wrapperProps => <EditModal component={(props: EditContainerProps) => <Modal as={Form} open={wrapperProps.open} noValidate>
        <Modal.Header content='Add Record' />
        <Modal.Content>
          <Form.Input required={props.isRequired('name')} error={props.isError('name')} label='Name' onChange={props.onTextInputChange.bind(this, 'name')} />
          <Form.Input required={props.isRequired('address')} error={props.isError('address')} label='Address' onChange={props.onTextInputChange.bind(this, 'address')} />
          <Form.Input required={props.isRequired('phone')} error={props.isError('phone')} onChange={props.onTextInputChange.bind(this, 'phone')} label='Phone' />
        </Modal.Content>
        {props.children}
      </Modal>} onClose={wrapperProps.onClose} onSave={wrapperProps.onSave} required={['phone', 'name', 'address']} />)`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`withWrapper(props => <EditModal component={(innerProps: EditContainerProps) => <Modal as={Form} open={props.open}>
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
      })} />
          </Form.Input>
        </Modal.Content>
        {innerProps.children}
      </Modal>} onClose={props.onClose} onSave={props.onSave} />)`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`withWrapper(wrapperProps => <EditModal component={(props: EditContainerProps) => <Modal as={Form} open={wrapperProps.open}>
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
}} onClose={wrapperProps.onClose} onSave={wrapperProps.onSave} />)`,...m.parameters?.docs?.source}}};const je=["Default","Loading","SaveError","Toaster","UnsavedChanges"];export{d as Default,i as Loading,p as SaveError,l as Toaster,m as UnsavedChanges,je as __namedExportsOrder,Me as default};
