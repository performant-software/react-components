import{j as e,r as c}from"./iframe-BLgZWRCp.js";import{F as n}from"./Form-xCzzVPQ4.js";import{B as F}from"./Button-DBnOKBlt.js";import{C as l}from"./Checkbox-BoNeAj1w.js";import{F as r}from"./Facet-DN4qunWx.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./getElementType-1IYaeY7q.js";import"./Label-CA5c1o9n.js";import"./ModernAutoControlledComponent-BNuszL3K.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Icon-CxJFFl9I.js";import"./includes-U-4bWchp.js";import"./toFinite-B0zBBCYH.js";import"./forEach-B66pbtzg.js";import"./Dimmer-DQZjKlMb.js";import"./Portal-SWFjn5WJ.js";import"./keyboardKey-TMamj3A2.js";import"./Dropdown-B39ca9nf.js";import"./map-CWHsrrW0.js";import"./without-hXNxFN8L.js";import"./isArrayLikeObject-qJU1iGYR.js";import"./isEmpty-CV68PeRk.js";import"./deburr-CFKzU-xv.js";import"./index-C2wuau_u.js";import"./_baseSet-Auq_ii7C.js";import"./_baseAssignValue-BYD9r0Sk.js";import"./_arrayReduce-CrxnWFSq.js";import"./filter-B61iGI06.js";import"./Input-DA954Y-9.js";import"./Divider-DALBslVw.js";import"./Header-D9--OkAc.js";import"./Accordion-B5rAH2Bn.js";const T={title:"Components/Semantic UI/Facet",component:r},a=()=>e.jsx(r,{title:"Department",children:e.jsxs(n,{children:[e.jsx(n.Field,{children:e.jsx(l,{label:"Appliances"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Bath & Faucets"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Building Materials"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Doors & Windows"})})]})}),t=()=>e.jsx(r,{defaultActive:!1,title:"Department",children:e.jsxs(n,{children:[e.jsx(n.Field,{children:e.jsx(l,{label:"Appliances"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Bath & Faucets"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Building Materials"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Doors & Windows"})})]})}),s=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{divided:!0,title:"Department",children:e.jsxs(n,{children:[e.jsx(n.Field,{children:e.jsx(l,{label:"Appliances"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Bath & Faucets"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Building Materials"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Doors & Windows"})})]})}),e.jsx(r,{divided:!0,title:"Brand",children:e.jsxs(n,{children:[e.jsx(n.Field,{children:e.jsx(l,{label:"American Standard"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Andersen"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Delta"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Kohler"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"LG"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Samsung"})})]})})]}),d=()=>{const i=c.useRef(),m=c.useCallback(()=>{const{current:o}=i;o&&o.collapse()},[i.current]),p=c.useCallback(()=>{const{current:o}=i;o&&o.expand()},[i.current]);return e.jsxs(e.Fragment,{children:[e.jsx(r,{innerRef:i,title:"Department",children:e.jsxs(n,{children:[e.jsx(n.Field,{children:e.jsx(l,{label:"Appliances"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Bath & Faucets"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Building Materials"})}),e.jsx(n.Field,{children:e.jsx(l,{label:"Doors & Windows"})})]})}),e.jsx(F,{content:"Expand",onClick:p}),e.jsx(F,{content:"Collapse",onClick:m})]})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"Collapsed"};s.__docgenInfo={description:"",methods:[],displayName:"Divided"};d.__docgenInfo={description:"",methods:[],displayName:"ExpandCollapse"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <Facet title='Department'>
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
