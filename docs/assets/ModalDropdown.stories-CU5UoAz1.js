import{j as o}from"./jsx-runtime-BTCK_S7S.js";import{r as M}from"./index-CBqU2yxZ.js";import{F as a}from"./Form-fErk-qk_.js";import{M as e}from"./Modal-Bz2VEyQG.js";import{a as h}from"./chunk-WFFRPTHA-B2vgThZf.js";import{B as i}from"./Button-Blq7Z6RX.js";import{D as y}from"./Dropdown-Di2cPjwR.js";import{i as g}from"./i18n-DOVQ27W-.js";import{w as x}from"./withTranslation-ZOkmm9-k.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CckcRzoH.js";import"./Label-Cq1fb1cd.js";import"./ModernAutoControlledComponent-DJBWk5EW.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Icon-2tEtgK8g.js";import"./includes-CQoJOerW.js";import"./toFinite-KQ8KevIC.js";import"./forEach-CXlln0XP.js";import"./Dimmer-D_gwaesu.js";import"./Portal-DvhHJPzU.js";import"./keyboardKey-OMDgGVm3.js";import"./index-DZGZymok.js";import"./objectWithoutPropertiesLoose-1QL-frMM.js";import"./Checkbox-C9uAfnsM.js";import"./_baseSet-6y0qliU9.js";import"./_baseAssignValue-izmKBXUH.js";import"./Input--hQVCRQV.js";import"./map-B4PnIEPz.js";import"./index-BBpNyw-T.js";import"./_arrayReduce-CrxnWFSq.js";import"./isEmpty-Cyb9hIKi.js";import"./preview-errors-CzpZmerH.js";import"./index-CKJfshIT.js";import"./v4-D8aEg3BZ.js";import"./without-BP-mqg2K.js";import"./isArrayLikeObject-CbXKTyfk.js";import"./deburr-CEfyoYOr.js";import"./filter-CVNi8iPS.js";import"./i18next-Sc0HEOoc.js";import"./toPropertyKey-hKuLU48H.js";import"./defineProperty-CCxoMnQV.js";import"./inherits-D5wXBZoG.js";import"./createClass-D2z1h_eG.js";import"./getPrototypeOf-BYVhAdwF.js";import"./defineProperty-BYUWwell.js";import"./defineProperty-CGC-R-Bs.js";import"./slicedToArray-w19uMldN.js";import"./unsupportedIterableToArray-CIVywHS6.js";import"./objectWithoutProperties--RY0eV0u.js";import"./utils-C_6BAdFC.js";import"./createClass-CyHhwgEe.js";class C extends M.Component{constructor(r){super(r),this.state={modalVisible:!1}}onClose(){this.setState({modalVisible:!1})}render(){return o.jsxs(o.Fragment,{children:[o.jsx(y,{className:"modal-dropdown",onClick:()=>this.setState({modalVisible:!0}),onSearchChange:()=>{},open:!1,search:!0,searchInput:{"aria-label":"Search"},selection:!0,searchQuery:this.props.searchQuery||""}),o.jsx(i.Group,{children:o.jsx(i,{basic:!0,content:g.t("Common.buttons.clear"),icon:"times",onClick:this.props.onClear.bind(this),type:"button"})}),this.renderModal()]})}renderModal(){return this.props.renderModal({onClose:this.onClose.bind(this),open:this.state.modalVisible})}}const f=x()(C);C.__docgenInfo={description:"",methods:[{name:"onClose",docblock:"Closes the modal.",modifiers:[],params:[],returns:null,description:"Closes the modal."},{name:"renderModal",docblock:`Renders the modal.

@returns {*}`,modifiers:[],params:[],returns:{type:{name:"mixed"}},description:"Renders the modal."}],displayName:"ModalDropdown",props:{onClear:{required:!0,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},renderModal:{required:!0,flowType:{name:"signature",type:"function",raw:"({ onClose: () => void, open: boolean }) => void",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{ onClose: () => void, open: boolean }",signature:{properties:[{key:"onClose",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"open",value:{name:"boolean",required:!0}}]}}}],return:{name:"void"}}},description:""},searchQuery:{required:!0,flowType:{name:"string",nullable:!0},description:""}}};const bo={title:"Components/Semantic UI/ModalDropdown"},t=()=>o.jsx(f,{onClear:h("clear"),renderModal:({onClose:s,open:r})=>o.jsxs(e,{closeIcon:!0,onClose:s,open:r,size:"small",children:[o.jsx(e.Header,{content:"Custom modal"}),o.jsx(e.Content,{content:"Custom content here"})]})}),n=()=>o.jsx(a,{children:o.jsx(a.Input,{label:"Test",children:o.jsx(f,{onClear:h("clear"),renderModal:({onClose:s,open:r})=>o.jsxs(e,{closeIcon:!0,onClose:s,open:r,size:"small",children:[o.jsx(e.Header,{content:"Custom modal"}),o.jsx(e.Content,{content:"Custom content here"})]}),searchQuery:"This is a really long search query to test the width of the input element"})})});t.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"AsForm"};var m,l,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => <ModalDropdown onClear={action('clear')} renderModal={({
  onClose,
  open
}) => <Modal closeIcon onClose={onClose} open={open} size='small'>
        <Modal.Header content='Custom modal' />
        <Modal.Content content='Custom content here' />
      </Modal>} />`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,c,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Form>
    <Form.Input label='Test'>
      <ModalDropdown onClear={action('clear')} renderModal={({
      onClose,
      open
    }) => <Modal closeIcon onClose={onClose} open={open} size='small'>
            <Modal.Header content='Custom modal' />
            <Modal.Content content='Custom content here' />
          </Modal>} searchQuery='This is a really long search query to test the width of the input element' />
    </Form.Input>
  </Form>`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const jo=["Default","AsForm"];export{n as AsForm,t as Default,jo as __namedExportsOrder,bo as default};
