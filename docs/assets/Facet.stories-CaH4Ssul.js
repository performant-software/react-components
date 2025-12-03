import{j as e,r as c}from"./iframe-DjZg4LCJ.js";import{F as n}from"./Form-CecPGzu4.js";import{B as F}from"./Button-BfwSthv4.js";import{C as l}from"./Checkbox-CgV92q-M.js";import{F as r}from"./Facet-C1CjItZ1.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-CAZyNRJI.js";import"./Label-Bh5L599Z.js";import"./ModernAutoControlledComponent-BMzS269y.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Icon-tpspPEMM.js";import"./includes-CONzxizI.js";import"./toFinite-BAYWAdIs.js";import"./forEach-A59iOPX4.js";import"./Dimmer-CCyRt7B_.js";import"./Portal-ryYdJBeB.js";import"./keyboardKey-Dib6OvmA.js";import"./Dropdown-F4rgfcN7.js";import"./map-DtdA0n9n.js";import"./without--0CyYUzZ.js";import"./isArrayLikeObject-CUXhdROG.js";import"./isEmpty-BBVcPIVn.js";import"./deburr-DugsZdwn.js";import"./index-CxAXPjQd.js";import"./_baseSet-Dvm44Wtg.js";import"./_baseAssignValue-8K9yYogk.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-CPefKB_L.js";import"./Input-DVvUAtuL.js";import"./Divider-CrjZxc3R.js";import"./Header-BLFNvs1J.js";import"./Accordion-DNQ0dtUU.js";const T={title:"Components/Semantic UI/Facet",component:r},a=()=>e.jsx(r,{title:"Department",children:e.jsxs(n,{children:[e.jsx(n.Field,{children:e.jsx(l,{label:"Appliances"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Bath & Faucets"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Building Materials"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Doors & Windows"})})]})}),t=()=>e.jsx(r,{defaultActive:!1,title:"Department",children:e.jsxs(n,{children:[e.jsx(n.Field,{children:e.jsx(l,{label:"Appliances"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Bath & Faucets"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Building Materials"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Doors & Windows"})})]})}),s=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{divided:!0,title:"Department",children:e.jsxs(n,{children:[e.jsx(n.Field,{children:e.jsx(l,{label:"Appliances"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Bath & Faucets"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Building Materials"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Doors & Windows"})})]})}),e.jsx(r,{divided:!0,title:"Brand",children:e.jsxs(n,{children:[e.jsx(n.Field,{children:e.jsx(l,{label:"American Standard"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Andersen"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Delta"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Kohler"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"LG"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Samsung"})})]})})]}),d=()=>{const i=c.useRef(),m=c.useCallback(()=>{const{current:o}=i;o&&o.collapse()},[i.current]),p=c.useCallback(()=>{const{current:o}=i;o&&o.expand()},[i.current]);return e.jsxs(e.Fragment,{children:[e.jsx(r,{innerRef:i,title:"Department",children:e.jsxs(n,{children:[e.jsx(n.Field,{children:e.jsx(l,{label:"Appliances"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Bath & Faucets"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Building Materials"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Doors & Windows"})})]})}),e.jsx(F,{content:"Expand",onClick:p}),e.jsx(F,{content:"Collapse",onClick:m})]})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"Collapsed"};s.__docgenInfo={description:"",methods:[],displayName:"Divided"};d.__docgenInfo={description:"",methods:[],displayName:"ExpandCollapse"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <Facet title='Department'>
    <Form>
      <Form.Field>
        <Checkbox label='Appliances' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='Bath & Faucets' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='Building Materials' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='Doors & Windows' />
      </Form.Field>
    </Form>
  </Facet>`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Facet defaultActive={false} title='Department'>
    <Form>
      <Form.Field>
        <Checkbox label='Appliances' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='Bath & Faucets' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='Building Materials' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='Doors & Windows' />
      </Form.Field>
    </Form>
  </Facet>`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <>
    <Facet divided title='Department'>
      <Form>
        <Form.Field>
          <Checkbox label='Appliances' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='Bath & Faucets' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='Building Materials' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='Doors & Windows' />
        </Form.Field>
      </Form>
    </Facet>
    <Facet divided title='Brand'>
      <Form>
        <Form.Field>
          <Checkbox label='American Standard' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='Andersen' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='Delta' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='Kohler' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='LG' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='Samsung' />
        </Form.Field>
      </Form>
    </Facet>
  </>`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const ref = useRef();

  /**
   * Collapses the facet via the imperative function.
   *
   * @type {(function(): void)|*}
   */
  const onCollapse = useCallback(() => {
    const {
      current: instance
    } = ref;
    if (instance) {
      instance.collapse();
    }
  }, [ref.current]);

  /**
   * Expands the facet via the imperative function.
   *
   * @type {(function(): void)|*}
   */
  const onExpand = useCallback(() => {
    const {
      current: instance
    } = ref;
    if (instance) {
      instance.expand();
    }
  }, [ref.current]);
  return <>
      <Facet innerRef={ref} title='Department'>
        <Form>
          <Form.Field>
            <Checkbox label='Appliances' />
          </Form.Field>
          <Form.Field>
            <Checkbox label='Bath & Faucets' />
          </Form.Field>
          <Form.Field>
            <Checkbox label='Building Materials' />
          </Form.Field>
          <Form.Field>
            <Checkbox label='Doors & Windows' />
          </Form.Field>
        </Form>
      </Facet>
      <Button content='Expand' onClick={onExpand} />
      <Button content='Collapse' onClick={onCollapse} />
    </>;
}`,...d.parameters?.docs?.source}}};const V=["Default","Collapsed","Divided","ExpandCollapse"];export{t as Collapsed,a as Default,s as Divided,d as ExpandCollapse,V as __namedExportsOrder,T as default};
