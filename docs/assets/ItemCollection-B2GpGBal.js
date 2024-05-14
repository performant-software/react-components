var s=Object.defineProperty;var l=(t,e,n)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var i=(t,e,n)=>(l(t,typeof e!="symbol"?e+"":e,n),n);import{j as r}from"./jsx-runtime-D9TvR9R2.js";import{g as m}from"./index.es30-Cot0rGUw.js";import{r as u}from"./index-C0dDX-lL.js";import{u as d}from"./uuid-BH6G0oTz.js";import{L as c}from"./Loader-lqR_Ikjg.js";import{_ as p}from"./index-default-C_maRo4o.js";import{i as y}from"./i18n-CM1tepcX.js";import{I as f}from"./Items-lQkL-rUW.js";class a extends u.Component{constructor(e){super(e),this.state={page:1}}getClassName(){const e=["item-collection"];return this.props.className&&e.push(this.props.className),e.join(" ")}getItems(){const e=this.state.page*this.props.perPage,n=this.props.items&&this.props.items.slice(0,e)||[];return p.filter(n,o=>!o._destroy)}onBottomReached(){this.props.loading||this.setState(e=>({page:e.page+1}),()=>{this.props.onBottomReached&&this.props.onBottomReached(this.state.page)})}onDelete(e){return this.props.onDelete(e),Promise.resolve()}onSave(e){if(this.props.onSave){const n=e.uid?e.uid:d();this.props.onSave({...e,uid:n})}return Promise.resolve()}render(){return r.jsx(m,{context:this.props.context,offset:this.props.scrollOffset,onBottomReached:this.onBottomReached.bind(this),children:r.jsx(f,{...this.props,items:this.getItems(),className:this.getClassName(),onDelete:this.onDelete.bind(this),onSave:this.onSave.bind(this),children:r.jsx(c,{active:this.props.loading,content:y.t("Common.messages.loading")})})})}}i(a,"defaultProps");a.defaultProps={addButton:{location:"top"},buttons:[],className:"",configurable:!0,modal:void 0,onCopy:void 0,onDrag:void 0,onSave:()=>{},perPage:Number.MAX_SAFE_INTEGER,renderDeleteModal:void 0,renderEmptyRow:void 0,scrollOffset:0};const E=a;a.__docgenInfo={description:`An <code>ItemCollection</code> component can be used to render a list of records stored on an object in memory. This
component is responsible for handling infinite scroll and rendering the <code>Items</code> component, which handles
the presentation.`,methods:[{name:"getClassName",docblock:`Returns the concatenated class names.

@returns {string}`,modifiers:[],params:[],returns:{type:{name:"string"}},description:"Returns the concatenated class names."},{name:"getItems",docblock:`Returns the list of items to render based on the current page.

@returns {Array<T>|*[]}`,modifiers:[],params:[],returns:{type:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"}},description:"Returns the list of items to render based on the current page."},{name:"onBottomReached",docblock:"Increments the page number and fetches the data.",modifiers:[],params:[],returns:null,description:"Increments the page number and fetches the data."},{name:"onDelete",docblock:`Calls the onDelete prop and returns a promise.

@param item

@returns {Promise<unknown>}`,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}}],returns:{type:{name:"Promise",elements:[{name:"unknown"}]}},description:"Calls the onDelete prop and returns a promise."},{name:"onSave",docblock:`Calls the onSave prop and returns a promise.

@param item

@returns {Promise<unknown>}`,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}}],returns:{type:{name:"Promise",elements:[{name:"unknown"}]}},description:"Calls the onSave prop and returns a promise."}],displayName:"ItemCollection",props:{actions:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  accept: (item: any) => boolean,
  color?: string,
  icon?: string,
  name: string,
  onClick?: (item: any) => void,
  popup: {
    content: string,
    title: string
  },
  render?: (item: any, index: number) => Element<any>,
  title?: string
}`,signature:{properties:[{key:"accept",value:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}},required:!0}},{key:"color",value:{name:"string",required:!1}},{key:"icon",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}},required:!1}},{key:"popup",value:{name:"signature",type:"object",raw:`{
  content: string,
  title: string
}`,signature:{properties:[{key:"content",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}}]},required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any, index: number) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}},{name:"index",type:{name:"number"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!1}},{key:"title",value:{name:"string",required:!1}}]}}],raw:"Array<Action>"},description:`A list of actions to render for each element in the row. Actions with the names "edit" and "delete" will be
handled specially by the <code>List</code> higher-order component.`},addButton:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  basic: boolean,
  color: string,
  content?: string,
  inverted?: boolean,
  location: string,
  onClick?: () => void,
  secondary?: boolean
}`,signature:{properties:[{key:"basic",value:{name:"boolean",required:!0}},{key:"color",value:{name:"string",required:!0}},{key:"content",value:{name:"string",required:!1}},{key:"inverted",value:{name:"boolean",required:!1}},{key:"location",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"secondary",value:{name:"boolean",required:!1}}]}},description:`If provided, a button will display in the list header allowing the addition of items to the list. When clicked,
the <code>modal</code> prop will be rendered.`,defaultValue:{value:`{
  location: 'top'
}`,computed:!1}},buttons:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  accept?: () => boolean,
  render: (index?: number) => Element<any>
}`,signature:{properties:[{key:"accept",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(index?: number) => Element<any>",signature:{arguments:[{name:"index",type:{name:"number"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!0}}]}}],raw:"Array<ListButton>"},description:`A list of arbitrary buttons to the display in the list header. All actions will be handled by the consuming
component.
<br />
<br />

In addition to the props listed here for each button, buttons will also accept any of the Semantic UI
<a href="https://react.semantic-ui.com/elements/button/" target="_blank">Button</a> props.`,defaultValue:{value:"[]",computed:!1}},count:{required:!1,flowType:{name:"number"},description:"The number of total records in the list (not just the current page)."},className:{required:!1,flowType:{name:"string"},description:"CSS class name to append to the <code>div</code> container.",defaultValue:{value:"''",computed:!1}},csvExportButton:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  basic: boolean,
  color: string,
  location: string,
  onClick?: () => void
}`,signature:{properties:[{key:"basic",value:{name:"boolean",required:!0}},{key:"color",value:{name:"string",required:!0}},{key:"location",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},description:"If provided, a CSV export button will be rendered in the list header."},deleteButton:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  color: string,
  location: string,
  onClick?: () => void
}`,signature:{properties:[{key:"color",value:{name:"string",required:!0}},{key:"location",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},description:'If provided, a "delete all" button will be rendered in the list header.'},filters:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  active: boolean,
  component: Component<{}>,
  props?: any,
  state?: any,
  onChange: (params: any) => Promise<any>,
  showLabels?: boolean
}`,signature:{properties:[{key:"active",value:{name:"boolean",required:!0}},{key:"component",value:{name:"Component",elements:[{name:"signature",type:"object",raw:"{}",signature:{properties:[]}}],raw:"Component<{}>",required:!0}},{key:"props",value:{name:"any",required:!1}},{key:"state",value:{name:"any",required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(params: any) => Promise<any>",signature:{arguments:[{name:"params",type:{name:"any"}}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}},required:!0}},{key:"showLabels",value:{name:"boolean",required:!1}}]}},description:`If provided, the passed <code>component</code> will be rendered when the filter button is clicked.
<br />
<br />

Values passed in the <code>defaults</code> and <code>props</code> properties will be made available in the
passed component.
<br />
<br />

The <code>onChange</code> callback will fire when the filters are modified. This action will also reload the list,
passing the new filters the <code>onLoad</code> callback.`},modal:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  component: ComponentType<any>,
  props: any,
  state: any
}`,signature:{properties:[{key:"component",value:{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>",required:!0}},{key:"props",value:{name:"any",required:!0}},{key:"state",value:{name:"any",required:!0}}]}},description:'If provided, the passed modal will be rendered when the "add" button is clicked.',defaultValue:{value:"undefined",computed:!0}},onCopy:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}}},description:`If provided, this callback is fired when the "copy" action is clicked for an item. The consuming component
should generate a copy of the selected item and return that value. The return value is then set at the
current item in the edit modal.`,defaultValue:{value:"undefined",computed:!0}},onDelete:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:'Callback fired when the "delete" action is clicked for an item.'},onDeleteAll:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:"Callback fired when the delete all button is clicked. This prop expects a Promise as the return value."},onPageChange:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the page is changed via the pagination component."},onPerPageChange:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the per page value is changed."},onSave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:`Callback fired when the save button is clicked in the add/edit modal. This function expects a Promise as the
return value.`,defaultValue:{value:"() => {}",computed:!1}},page:{required:!1,flowType:{name:"number"},description:"Current page number."},pages:{required:!1,flowType:{name:"number"},description:"Number of pages in the list."},perPage:{required:!1,flowType:{name:"number"},description:"The number of records to display per page.",defaultValue:{value:"Number.MAX_SAFE_INTEGER",computed:!0}},perPageOptions:{required:!1,flowType:{name:"Array",elements:[{name:"number"}],raw:"Array<number>"},description:"The options to display in the dropdown for the per page selector."},renderDeleteModal:{required:!1,flowType:{name:"signature",type:"function",raw:"({ selectedItem: any, onCancel: () => void, onConfirm: () => void }) => Element<any>",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{ selectedItem: any, onCancel: () => void, onConfirm: () => void }",signature:{properties:[{key:"selectedItem",value:{name:"any",required:!0}},{key:"onCancel",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onConfirm",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:'Custom render function for the modal that appears on the "delete" action.',defaultValue:{value:"undefined",computed:!0}},renderListHeader:{required:!1,flowType:{name:"signature",type:"function",raw:"() => ?Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>",nullable:!0}}},description:"If provided, this function will return a JSX element that will prepend to the list header."},renderSearch:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:"If provided, this function will return a JSX element that will replace the default search input."},searchable:{required:!1,flowType:{name:"boolean"},description:"Returns true if the renderSearch prop should be used to render a search input element."},selectable:{required:!1,flowType:{name:"boolean"},description:`If set to <code>true</code>, checkboxes will render as the first table column, allowing each row to be selectable.
The consuming component is responsible for tracking the selected items.`},showRecordCount:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, the total number of records will display in the list header."},as:{required:!1,flowType:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"},description:"Renders the Card/Item component as the passed component."},asProps:{required:!1,flowType:{name:"any"},description:"Props to supply to the Card/Item component."},children:{required:!1,flowType:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"},description:"Child elements to append below the list content."},isRowSelected:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}}},description:"Callback returning <code>true</code> if the row for the passed item is selected."},items:{required:!0,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"},description:"An array of objects to render as rows in the list."},itemsPerRow:{required:!1,flowType:{name:"number"},description:"The number of cards to display per row in the grid view."},link:{required:!1,flowType:{name:"boolean"},description:"If true, the list items will be formatted as a link."},onDrag:{required:!1,flowType:{name:"signature",type:"function",raw:"(dragIndex: number, hoverIndex: number) => void",signature:{arguments:[{name:"dragIndex",type:{name:"number"}},{name:"hoverIndex",type:{name:"number"}}],return:{name:"void"}}},description:"Callback fired when a table row is dragged",defaultValue:{value:"undefined",computed:!0}},onRowSelect:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:`Callback fired when the passed item is selected. This callback is <i>only</i> fired if the <code>selectable</code>
prop is passed as <code>true</code>.`},onSelectAllRows:{required:!1,flowType:{name:"signature",type:"function",raw:"(items: Array<any>) => void",signature:{arguments:[{name:"items",type:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"}}],return:{name:"void"}}},description:"Callback fired when the select all checkbox is checked."},renderAdditionalContent:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:"A function that returns a JSX element to render as additional card content."},renderDescription:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:`A function that returns a JSX element to render as the card description.
See Semantic UI <a href="https://react.semantic-ui.com/views/card/">Card</a>.`},renderEmptyList:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:"A function that returns a JSX element to render when the list has no items."},renderExtra:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:`A function that returns a JSX element to render as the card extra content.
See Semantic UI <a href="https://react.semantic-ui.com/views/card/">Card</a>.`},renderHeader:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:`A function that returns a JSX element to render as the card header.
See Semantic UI <a href="https://react.semantic-ui.com/views/card/">Card</a>.`},renderImage:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:`A function that returns a JSX element to render as the card image.
See Semantic UI <a href="https://react.semantic-ui.com/views/card/">Card</a>.`},renderMeta:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:`A function that returns a JSX element to render as the card meta.
See Semantic UI <a href="https://react.semantic-ui.com/views/card/">Card</a>.`},view:{required:!0,flowType:{name:"number"},description:`Toggles between list view and grid view. This prop is provided by the <code>ItemsToggle</code> higher-order
component.`},context:{required:!0,flowType:{name:"signature",type:"object",raw:`{
  current: HTMLElement
}`,signature:{properties:[{key:"current",value:{name:"HTMLElement",required:!0}}]}},description:`The DOM element responsible for infinite scrolling. If no context is provided, the document <code>body</code>
will be assumed.`},loading:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, the list will display a loading indicator."},onBottomReached:{required:!1,flowType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{name:"page",type:{name:"number"}}],return:{name:"void"}}},description:"Callback fired when the bottom of the scroll container is reached."},scrollOffset:{required:!1,flowType:{name:"number"},description:`The number of pixels from the bottom of the scroll container the <code>onBottomReached</code> callback
should fire.`,defaultValue:{value:"0",computed:!1}},configurable:{defaultValue:{value:"true",computed:!1},required:!1},renderEmptyRow:{defaultValue:{value:"undefined",computed:!0},required:!1}}};export{E as I};