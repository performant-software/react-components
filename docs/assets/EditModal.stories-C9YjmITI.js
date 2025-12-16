import{r as C,j as e}from"./iframe-Dd51AVec.js";import{F as r}from"./Form-BAaMsHdz.js";import{M as x}from"./Message-BqYdvJpQ.js";import{B as g}from"./Button-COgPdyHQ.js";import{I as b}from"./Icon-Be-bmVif.js";import{M as a}from"./Modal-CDe89cpY.js";import{_ as M}from"./index-default-B8-H6N8J.js";import{A as j}from"./AddModal-CH_9wWOj.js";import{A as S}from"./Api-DGMTLhRm.js";import{A}from"./AssociatedDropdown-Cz1zs4LJ.js";import{E as t}from"./EditModal-QFozVU8U.js";import{i as P}from"./Companies-Dq8qL_4h.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-fSudkH_h.js";import"./Label-DoRqLwn7.js";import"./ModernAutoControlledComponent-DgxHvlaW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./includes-COA85LJd.js";import"./toFinite-JyWO3W7G.js";import"./forEach-m0XN-fRo.js";import"./Dimmer-CaDuiwNx.js";import"./Portal-BCNDxyz_.js";import"./keyboardKey-CGzN62ID.js";import"./Checkbox-BKXzXWs_.js";import"./_baseSet-D7oIsAQS.js";import"./_baseAssignValue-BhO4aFuJ.js";import"./Dropdown-y6qPc3m_.js";import"./map-BK17dLm-.js";import"./without-Bt7dVsRr.js";import"./isArrayLikeObject-tQXbzKbF.js";import"./isEmpty-Cy-H3Tvh.js";import"./deburr-VT20eNUp.js";import"./index-Bvr92fDU.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-KfwrCHfk.js";import"./Input-CyvR7hoe.js";import"./index-DP4udi2o.js";import"./index.es28-mTj78mi0.js";import"./index.es35-NGGuPWEW.js";import"./index-default-C0I3bBxV.js";import"./i18n-DkobdbHY.js";import"./i18next-eNuDfwAU.js";import"./Toaster-DeZR4BcV.js";import"./Transition-DhHRhkqb.js";import"./index.es3-a1U3Wu2C.js";import"./index.es33-CBYGq4dU.js";import"./Loader-B5hWerz-.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,Me={title:"Components/Semantic UI/EditModal",component:t},c=o=>n=>{const[s,h]=C.useState(!1),v=C.useCallback(()=>{h(!1),u("close")()},[]),I=C.useCallback(()=>(h(!1),u("save")(),Promise.resolve()),[]);return e.jsxs(e.Fragment,{children:[e.jsx(g,{content:"Open",primary:!0,onClick:()=>h(!0)}),e.jsx(o,{...n,onClose:v,onSave:I,open:s})]})},d=c(o=>e.jsx(t,{component:n=>e.jsxs(a,{as:r,open:o.open,children:[e.jsx(a.Header,{content:"Add Record"}),e.jsxs(a.Content,{children:[e.jsx(r.Input,{label:"Name"}),e.jsx(r.Input,{label:"Address"}),e.jsx(r.Input,{label:"Phone"})]}),n.children]}),onClose:o.onClose,onSave:o.onSave})),i=c(o=>e.jsx(t,{component:n=>e.jsxs(a,{as:r,open:o.open,children:[e.jsx(a.Header,{content:"Add Record"}),e.jsxs(a.Content,{children:[e.jsx(r.Input,{label:"Name"}),e.jsx(r.Input,{label:"Address"}),e.jsx(r.Input,{label:"Phone"})]}),n.children]}),item:{id:1},onClose:o.onClose,onInitialize:()=>new Promise(n=>{M.delay(n.bind(void 0,{}),5e3)}),onSave:o.onSave})),p=c(o=>e.jsx(t,{component:n=>e.jsxs(a,{as:r,open:o.open,noValidate:!0,children:[e.jsx(a.Header,{content:"Add Record"}),e.jsxs(a.Content,{children:[e.jsx(r.Input,{required:n.isRequired("name"),error:n.isError("name"),label:"Name",onChange:n.onTextInputChange.bind(void 0,"name")}),e.jsx(r.Input,{required:n.isRequired("address"),error:n.isError("address"),label:"Address",onChange:n.onTextInputChange.bind(void 0,"address")}),e.jsx(r.Input,{required:n.isRequired("phone"),error:n.isError("phone"),onChange:n.onTextInputChange.bind(void 0,"phone"),label:"Phone"})]}),n.children]}),onClose:o.onClose,onSave:o.onSave,required:["phone","name","address"]})),l=c(o=>e.jsx(t,{component:n=>e.jsxs(a,{as:r,open:o.open,children:[e.jsx(a.Header,{content:"Add Record"}),e.jsxs(a.Content,{children:[e.jsx(r.Input,{label:"Name"}),e.jsx(r.Input,{label:"Address"}),e.jsx(r.Input,{label:"Phone"}),e.jsx(r.Input,{label:"Field",required:!0,children:e.jsx(A,{collectionName:"items",modal:{component:j,onSave:()=>(u("save")(),Promise.resolve({}))},onSearch:s=>S.onLoad({items:P,search:s}),onSelection:u("selection"),renderOption:s=>({key:s.id,value:s.id,text:s.company,description:s.country})})})]}),n.children]}),onClose:o.onClose,onSave:o.onSave})),m=c(o=>e.jsx(t,{component:n=>e.jsxs(a,{as:r,open:o.open,children:[e.jsx(a.Header,{content:"Add record"}),e.jsxs(a.Content,{children:[e.jsxs(x,{warning:!0,visible:n.dirty,children:[e.jsxs(x.Header,{children:[e.jsx(b,{name:"exclamation triangle"}),"Warning"]}),e.jsx("p",{children:"You have unsaved changes."})]}),e.jsx(r.Input,{label:"Name",onChange:n.onTextInputChange.bind(void 0,"name"),value:n.item.name||""}),e.jsx(r.Input,{label:"Address",onChange:n.onTextInputChange.bind(void 0,"address"),value:n.item.address||""}),e.jsx(r.Input,{label:"Phone",onChange:n.onTextInputChange.bind(void 0,"phone"),value:n.item.phone||""})]}),n.children]}),item:{id:1,name:"Test",address:"123 Main St",phone:null},onClose:o.onClose,onSave:o.onSave}));d.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"Loading"};p.__docgenInfo={description:"",methods:[],displayName:"SaveError"};l.__docgenInfo={description:"",methods:[],displayName:"Toaster"};m.__docgenInfo={description:"",methods:[],displayName:"UnsavedChanges"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`withWrapper(props => <EditModal component={(innerProps: EditContainerProps) => <Modal as={Form} open={props.open}>
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
