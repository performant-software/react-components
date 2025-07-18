import{r as C,j as e}from"./iframe-BPWyo1ml.js";import{F as r}from"./Form-ClhUWp7q.js";import{M as x}from"./Message-BYGMVLVX.js";import{B as g}from"./Button-4UTl3zWh.js";import{I as b}from"./Icon-jme1Xn38.js";import{M as a}from"./Modal-C7r7-T10.js";import{_ as M}from"./index-default-B8-H6N8J.js";import{A as j}from"./AddModal-C1ev6d2N.js";import{A as S}from"./Api-DGMTLhRm.js";import{A}from"./AssociatedDropdown-FrKZsBao.js";import{E as t}from"./EditModal-DaDhkIIe.js";import{i as P}from"./Companies-Dq8qL_4h.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-_MvlUdE4.js";import"./Label-BoodK5V_.js";import"./ModernAutoControlledComponent-YfVkZAu6.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-DPOpDRSZ.js";import"./toFinite-TVPM6KGA.js";import"./forEach-DkM9CNVk.js";import"./Dimmer-Cc_1Rffq.js";import"./Portal-CMKTsJj1.js";import"./keyboardKey-D0kxxHqZ.js";import"./Checkbox-C9s8UeCZ.js";import"./_baseSet-CdjV8XzC.js";import"./_baseAssignValue-B_GkWFP9.js";import"./Dropdown-BN9I38ur.js";import"./map-PCFjh3mh.js";import"./without-elm7P8Lj.js";import"./isArrayLikeObject-Bjky3Eyc.js";import"./isEmpty-BuKxTBqx.js";import"./deburr-DvXLs-DJ.js";import"./index-1knMejfY.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-B8Ew4z8i.js";import"./Input-CCAhbxsm.js";import"./index-O73er_T2.js";import"./index.es27-qSesx2Cv.js";import"./index.es34-NGGuPWEW.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";import"./Toaster-BtymTRI2.js";import"./Transition-B0lefbC1.js";import"./index.es3-Dl2cgxD2.js";import"./index.es32-BPmKt0WH.js";import"./Loader-D2fDqbKe.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Components/Semantic UI/EditModal",component:t},c=o=>n=>{const[s,h]=C.useState(!1),v=C.useCallback(()=>{h(!1),u("close")()},[]),I=C.useCallback(()=>(h(!1),u("save")(),Promise.resolve()),[]);return e.jsxs(e.Fragment,{children:[e.jsx(g,{content:"Open",primary:!0,onClick:()=>h(!0)}),e.jsx(o,{...n,onClose:v,onSave:I,open:s})]})},d=c(o=>e.jsx(t,{component:n=>e.jsxs(a,{as:r,open:o.open,children:[e.jsx(a.Header,{content:"Add Record"}),e.jsxs(a.Content,{children:[e.jsx(r.Input,{label:"Name"}),e.jsx(r.Input,{label:"Address"}),e.jsx(r.Input,{label:"Phone"})]}),n.children]}),onClose:o.onClose,onSave:o.onSave})),i=c(o=>e.jsx(t,{component:n=>e.jsxs(a,{as:r,open:o.open,children:[e.jsx(a.Header,{content:"Add Record"}),e.jsxs(a.Content,{children:[e.jsx(r.Input,{label:"Name"}),e.jsx(r.Input,{label:"Address"}),e.jsx(r.Input,{label:"Phone"})]}),n.children]}),item:{id:1},onClose:o.onClose,onInitialize:()=>new Promise(n=>{M.delay(n.bind(void 0,{}),5e3)}),onSave:o.onSave})),p=c(o=>e.jsx(t,{component:n=>e.jsxs(a,{as:r,open:o.open,noValidate:!0,children:[e.jsx(a.Header,{content:"Add Record"}),e.jsxs(a.Content,{children:[e.jsx(r.Input,{required:n.isRequired("name"),error:n.isError("name"),label:"Name",onChange:n.onTextInputChange.bind(void 0,"name")}),e.jsx(r.Input,{required:n.isRequired("address"),error:n.isError("address"),label:"Address",onChange:n.onTextInputChange.bind(void 0,"address")}),e.jsx(r.Input,{required:n.isRequired("phone"),error:n.isError("phone"),onChange:n.onTextInputChange.bind(void 0,"phone"),label:"Phone"})]}),n.children]}),onClose:o.onClose,onSave:o.onSave,required:["phone","name","address"]})),l=c(o=>e.jsx(t,{component:n=>e.jsxs(a,{as:r,open:o.open,children:[e.jsx(a.Header,{content:"Add Record"}),e.jsxs(a.Content,{children:[e.jsx(r.Input,{label:"Name"}),e.jsx(r.Input,{label:"Address"}),e.jsx(r.Input,{label:"Phone"}),e.jsx(r.Input,{label:"Field",required:!0,children:e.jsx(A,{collectionName:"items",modal:{component:j,onSave:()=>(u("save")(),Promise.resolve({}))},onSearch:s=>S.onLoad({items:P,search:s}),onSelection:u("selection"),renderOption:s=>({key:s.id,value:s.id,text:s.company,description:s.country})})})]}),n.children]}),onClose:o.onClose,onSave:o.onSave})),m=c(o=>e.jsx(t,{component:n=>e.jsxs(a,{as:r,open:o.open,children:[e.jsx(a.Header,{content:"Add record"}),e.jsxs(a.Content,{children:[e.jsxs(x,{warning:!0,visible:n.dirty,children:[e.jsxs(x.Header,{children:[e.jsx(b,{name:"exclamation triangle"}),"Warning"]}),e.jsx("p",{children:"You have unsaved changes."})]}),e.jsx(r.Input,{label:"Name",onChange:n.onTextInputChange.bind(void 0,"name"),value:n.item.name||""}),e.jsx(r.Input,{label:"Address",onChange:n.onTextInputChange.bind(void 0,"address"),value:n.item.address||""}),e.jsx(r.Input,{label:"Phone",onChange:n.onTextInputChange.bind(void 0,"phone"),value:n.item.phone||""})]}),n.children]}),item:{id:1,name:"Test",address:"123 Main St",phone:null},onClose:o.onClose,onSave:o.onSave}));d.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"Loading"};p.__docgenInfo={description:"",methods:[],displayName:"SaveError"};l.__docgenInfo={description:"",methods:[],displayName:"Toaster"};m.__docgenInfo={description:"",methods:[],displayName:"UnsavedChanges"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`withWrapper(props => <EditModal component={(innerProps: EditContainerProps) => <Modal as={Form} open={props.open}>
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
