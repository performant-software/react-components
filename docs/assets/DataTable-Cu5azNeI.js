var C=Object.defineProperty;var q=(l,o,e)=>o in l?C(l,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[o]=e;var c=(l,o,e)=>(q(l,typeof o!="symbol"?o+"":o,e),e);import{j as t}from"./jsx-runtime-BTCK_S7S.js";import{o as h}from"./index.es28-Dp3-vHIY.js";import{r as g}from"./index-CBqU2yxZ.js";import{Y as w}from"./index.es3-Dgr_7mVc.js";import{T as i}from"./Table-Xx3vjhN9.js";import{B as x}from"./Button-Blq7Z6RX.js";import{L as T}from"./Loader-CooidObp.js";import{C as b}from"./Checkbox-C9uAfnsM.js";import{P as R}from"./Popup-BP01NTlV.js";import{_ as d}from"./index-default-C_maRo4o.js";import{i as u}from"./i18n-C8zWlANG.js";import{I as E}from"./Icon-2tEtgK8g.js";import{D as y}from"./Dropdown-Di2cPjwR.js";import{D as S}from"./Draggable-KQRXc-DM.js";import{u as j}from"./List-tmAiyZhD.js";import{R as P}from"./Portal-DvhHJPzU.js";const v=l=>t.jsx("div",{className:"column-resize",onMouseDown:l.onMouseDown.bind(void 0),role:"presentation",children:" "});v.__docgenInfo={description:"",methods:[],displayName:"ColumnResize",props:{onMouseDown:{required:!0,flowType:{name:"signature",type:"function",raw:"(e: MouseEvent) => void",signature:{arguments:[{name:"e",type:{name:"MouseEvent"}}],return:{name:"void"}}},description:""}}};const A=l=>{var o;return o=class extends g.Component{constructor(e){super(e),this.state={columns:e.columns}}componentDidUpdate(e){w.isEqual(e.columns,this.props.columns)||this.setState({columns:this.props.columns})}onColumnCheckbox(e){this.setState(n=>({columns:d.map(n.columns,a=>a.name===e.name?{...a,hidden:!a.hidden}:a)}))}onDrag(e,n){this.setState(a=>{const r=[],s=[];d.each(a.columns,(m,k)=>{m.label&&m.label.length?r.push(m):s.push({index:k,column:m})});const p=r[e];return r.splice(e,1),r.splice(n,0,p),d.each(s,m=>r.splice(m.index,0,m.column)),{columns:r}})}render(){return t.jsx(l,{...this.props,className:`data-table-column-selector ${this.props.className}`,columns:this.state.columns,renderListHeader:this.renderHeader.bind(this)})}renderHeader(){return this.props.configurable||this.props.renderListHeader?t.jsxs(t.Fragment,{children:[this.props.renderListHeader&&this.props.renderListHeader(),this.props.configurable&&t.jsx(y,{"aria-label":"Select Columns",basic:!0,button:!0,icon:"cog",className:"icon configure-button open-right",closeOnBlur:!1,children:t.jsx(y.Menu,{children:this.state.columns.filter(e=>e.label&&e.label.length).map((e,n)=>t.jsx(S,{id:e.name,index:n,onDrag:this.onDrag.bind(this),children:t.jsxs(y.Item,{"aria-dropeffect":"move",onClick:a=>a.stopPropagation(),children:[t.jsx(E,{name:"bars"}),t.jsx(b,{"aria-label":"Select Column",checked:!e.hidden,label:e.label,onClick:this.onColumnCheckbox.bind(this,e)})]})},e.name))})})]}):null}},c(o,"defaultProps",{className:""}),o};class f extends g.Component{constructor(e){super(e);c(this,"columnRefs");c(this,"onClick");c(this,"onMouseMove");c(this,"onMouseUp");this.state={resize:null,activePanel:null},this.initializeColumnRefs(),this.onClick=this.onPreventClick.bind(this),this.onMouseMove=this.onColumnResize.bind(this),this.onMouseUp=this.afterColumnResize.bind(this)}afterColumnResize(){this.state.resize&&h.isBrowser()&&(document.addEventListener("click",this.onClick,!0),this.setState({resize:void 0}))}initializeColumnRefs(){this.columnRefs={},d.each(this.props.columns,e=>{this.columnRefs[e.name]=g.createRef()})}componentDidMount(){h.isBrowser()&&(document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onMouseUp))}componentDidUpdate(e){w.isEqual(e.columns,this.props.columns)||this.initializeColumnRefs()}componentWillUnmount(){h.isBrowser()&&(document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp))}getColumnCount(){let e=this.props.columns.length;return this.props.actions&&this.props.actions.length&&(e+=1),e}onColumnResize(e){const{resize:n}=this.state;if(n){const{columnRef:a,offset:r}=n;a.current.style.width=`${r+e.pageX}px`}}onPreventClick(e){e.stopPropagation(),h.isBrowser()&&document.removeEventListener("click",this.onClick,!0)}onSelectAll(e){let n;e?n=[...this.props.items||[]]:n=d.reject(this.props.items,this.props.isRowSelected.bind(this)),d.each(n,this.props.onRowSelect&&this.props.onRowSelect.bind(this))}render(){return t.jsxs(i,{className:"data-table",...this.props.tableProps,children:[t.jsx(i.Header,{children:t.jsxs(i.Row,{children:[this.renderSelectHeader(),this.props.columns.map(this.renderHeaderCell.bind(this)),this.renderActionsHeader()]})}),t.jsxs(i.Body,{children:[this.props.items&&this.props.items.map(this.renderItem.bind(this)),this.renderEmptyTableRow(),this.renderLoading()]})]})}renderActionButton(e,n,a){if(a.render)return a.render(e,n);const r=t.jsx(x,{"aria-label":a.name,basic:!0,compact:!0,color:a.color,icon:a.icon,onClick:a.onClick&&a.onClick.bind(this,e),title:a.title},`${a.name}-${n}`);if(a.popup){const{content:s,title:p}=a.popup;return t.jsx(R,{content:s,header:p,hideOnScroll:!0,mouseEnterDelay:500,position:"top right",trigger:r})}return r}renderActions(e,n){if(!(this.props.actions&&this.props.actions.length))return null;const a=this.props.actions.filter(r=>!r.accept||r.accept(e)).map(r=>{let s={};return r.name==="edit"?s={popup:{title:u.t("DataTable.actions.edit.title"),content:u.t("DataTable.actions.edit.content")}}:r.name==="copy"?s={popup:{title:u.t("DataTable.actions.copy.title"),content:u.t("DataTable.actions.copy.content")}}:r.name==="delete"&&(s={popup:{title:u.t("DataTable.actions.delete.title"),content:u.t("DataTable.actions.delete.content")}}),d.defaults(r,s)});return t.jsx(i.Cell,{className:"actions-cell",children:a.map(this.renderActionButton.bind(this,e,n))},n)}renderActionsHeader(){return this.props.actions&&this.props.actions.length?t.jsx(i.HeaderCell,{children:u.t("DataTable.columns.actions")}):null}renderCell(e,n){if(n.hidden)return null;let a;return n.render?a=n.render(e):n.resolve?a=n.resolve(e):a=e[n.name],t.jsx(i.Cell,{className:n.className,children:a},`${e.id}-${n.name}`)}renderEmptyTableRow(){return this.props.loading||this.props.items&&this.props.items.length?null:this.props.renderEmptyRow?this.props.renderEmptyRow():t.jsx(i.Row,{children:t.jsx(i.Cell,{colSpan:this.getColumnCount(),textAlign:"center",children:t.jsx("div",{className:"empty-container",children:this.props.renderEmptyMessage()})})})}renderHeaderCell(e){return e.hidden?null:e.renderHeader?e.renderHeader():t.jsx(P,{innerRef:this.columnRefs[e.name],children:t.jsxs(i.HeaderCell,{sorted:this.props.sortColumn===e.name?this.props.sortDirection:null,onClick:()=>this.props.onColumnClick(e),children:[e.label,t.jsx(v,{onMouseDown:n=>{const a=this.columnRefs[e.name],r=a.current.offsetWidth-n.pageX;this.setState({resize:{columnRef:a,offset:r}})}})]},e.name)})}renderItem(e,n){const a=[this.renderSelectCheckbox(e,n),this.props.columns.map(this.renderCell.bind(this,e)),this.renderActions(e,n)],r=s=>{s.target.nodeName==="TD"&&this.setState(p=>({activePanel:p.activePanel===e.id?"":e.id}))};return this.props.renderItem?this.props.renderItem(e,n,a):t.jsxs(t.Fragment,{children:[t.jsx(i.Row,{onClick:this.props.expandableRows?r:()=>{},className:this.props.expandableRows?"expandable":"",children:a},n),this.props.expandableRows&&t.jsx(i.Row,{className:this.state.activePanel===e.id?"expanded-panel":"hidden",children:this.props.expandPanel&&this.props.expandPanel(e,this.state.activePanel)})]})}renderLoading(){return this.props.loading?t.jsx(i.Row,{children:t.jsx(i.Cell,{colSpan:this.getColumnCount(),textAlign:"center",children:t.jsx(T,{active:!0,content:u.t("DataTable.loading"),inline:!0})})}):null}renderSelectCheckbox(e,n){return this.props.selectable&&this.props.onRowSelect&&this.props.isRowSelected?t.jsx(i.Cell,{className:"select-cell",children:t.jsx(b,{onClick:this.props.onRowSelect.bind(this,e),checked:this.props.isRowSelected(e)})},`select-cell-${n}`):null}renderSelectHeader(){if(!this.props.selectable)return null;const e=this.props.items&&this.props.items.length&&d.every(this.props.items,this.props.isRowSelected.bind(this));return t.jsx(i.HeaderCell,{className:"select-cell",children:t.jsx(b,{onClick:this.onSelectAll.bind(this,e),checked:e})})}}c(f,"defaultProps");f.defaultProps={actions:void 0,addButton:{location:"top",color:"green"},buttons:[],count:0,className:"",csvExportButton:void 0,expandableRows:!1,expandPanel:void 0,filters:void 0,items:[],loading:!1,modal:void 0,page:1,pages:1,onColumnClick:()=>{},onCopy:void 0,onPageChange:()=>{},renderDeleteModal:void 0,renderEmptyRow:void 0,renderSearch:void 0,renderItem:void 0,showRecordCount:!1,sortColumn:void 0,sortDirection:void 0};const Y=A(j(f));f.__docgenInfo={description:"",methods:[{name:"afterColumnResize",docblock:`If the resize object is present on the state, sets the capture click handler on the document and
clears the resize object on the state.`,modifiers:[],params:[],returns:null,description:`If the resize object is present on the state, sets the capture click handler on the document and
clears the resize object on the state.`},{name:"initializeColumnRefs",docblock:"Initializes a ref for each table column.",modifiers:[],params:[],returns:null,description:"Initializes a ref for each table column."},{name:"getColumnCount",docblock:`Returns the actual column count. This will be the number of columns +1 if the table allows actions.

@returns {number}`,modifiers:[],params:[],returns:{type:{name:"number"}},description:"Returns the actual column count. This will be the number of columns +1 if the table allows actions."},{name:"onColumnResize",docblock:`Resizes the current column based on the user's mouse position.

@param e`,modifiers:[],params:[{name:"e",optional:!1,type:{name:"MouseEvent",alias:"MouseEvent"}}],returns:null,description:"Resizes the current column based on the user's mouse position."},{name:"onPreventClick",docblock:`Stops progagation of the onclick event. The column resizing seems to trigger the 'click' event on the <th>
containing the <div> used to resize the column. Since the <th> already provides a 'click' event, this makes for
an awkward user experience because it will trigger a column sort each time a column is resized.

This function will capture the onclick prior to it bubbling to the <th> element and prevent it from happening. It
will also remove the event listener from the document so that clicks elsewhere in the document are not prevented.

@param e`,modifiers:[],params:[{name:"e",optional:!1,type:{name:"Event",alias:"Event"}}],returns:null,description:`Stops progagation of the onclick event. The column resizing seems to trigger the 'click' event on the <th>
containing the <div> used to resize the column. Since the <th> already provides a 'click' event, this makes for
an awkward user experience because it will trigger a column sort each time a column is resized.

This function will capture the onclick prior to it bubbling to the <th> element and prevent it from happening. It
will also remove the event listener from the document so that clicks elsewhere in the document are not prevented.`},{name:"onSelectAll",docblock:`Selects all of the items in the current collection.

@param allSelected`,modifiers:[],params:[{name:"allSelected",optional:!1}],returns:null,description:"Selects all of the items in the current collection."},{name:"renderActionButton",docblock:`Renders the action button for the passed item and action.

@param item
@param action
@param index

@returns {*}`,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}},{name:"index",optional:!1,type:{name:"number"}},{name:"action",optional:!1,type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"content",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}}]},required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any, index: number) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}},{name:"index",type:{name:"number"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!1}},{key:"title",value:{name:"string",required:!1}}]},alias:"Action"}}],returns:{type:{name:"mixed"}},description:"Renders the action button for the passed item and action."},{name:"renderActions",docblock:`Renders the actions for the passed item.

@param item
@param index

@returns {null|*}`,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}},{name:"index",optional:!1,type:{name:"number"}}],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the actions for the passed item."},{name:"renderActionsHeader",docblock:`Renders the action list header.

@returns {null|*}`,modifiers:[],params:[],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the action list header."},{name:"renderCell",docblock:`Renders the table cell for the passed item/column.

@param item
@param column

@returns {*}`,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}},{name:"column",optional:!1,type:{name:"Column",alias:"Column"}}],returns:{type:{name:"mixed"}},description:"Renders the table cell for the passed item/column."},{name:"renderEmptyTableRow",docblock:`Renders the empty table row.

@returns {null|*}`,modifiers:[],params:[],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the empty table row."},{name:"renderHeaderCell",docblock:`Renders the table header cell for the passed column.

@param column

@returns {*}`,modifiers:[],params:[{name:"column",optional:!1,type:{name:"Column",alias:"Column"}}],returns:{type:{name:"mixed"}},description:"Renders the table header cell for the passed column."},{name:"renderItem",docblock:`Renders the table row for the passed item.

@param item
@param index

@returns {*}`,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}},{name:"index",optional:!1,type:{name:"number"}}],returns:{type:{name:"mixed"}},description:"Renders the table row for the passed item."},{name:"renderLoading",docblock:null,modifiers:[],params:[],returns:null},{name:"renderSelectCheckbox",docblock:`Renders the select checkbox for the passed item.

@returns {null|*}`,modifiers:[],params:[{name:"item",optional:!1},{name:"index",optional:!1}],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the select checkbox for the passed item."},{name:"renderSelectHeader",docblock:`Renders the select list header.

@returns {null|*}`,modifiers:[],params:[],returns:{type:{name:"union",elements:[{name:"mixed"}]}},description:"Renders the select list header."}],displayName:"DataTable",props:{actions:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
handled specially by the <code>List</code> higher-order component.`,defaultValue:{value:"undefined",computed:!0}},addButton:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  basic: boolean,
  color: string,
  content?: string,
  inverted?: boolean,
  location: string,
  onClick?: () => void,
  secondary?: boolean
}`,signature:{properties:[{key:"basic",value:{name:"boolean",required:!0}},{key:"color",value:{name:"string",required:!0}},{key:"content",value:{name:"string",required:!1}},{key:"inverted",value:{name:"boolean",required:!1}},{key:"location",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"secondary",value:{name:"boolean",required:!1}}]}},description:`If provided, a button will display in the list header allowing the addition of items to the list. When clicked,
the <code>modal</code> prop will be rendered.`,defaultValue:{value:`{
  location: 'top',
  color: 'green'
}`,computed:!1}},buttons:{required:!1,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  accept?: () => boolean,
  render: (index?: number) => Element<any>
}`,signature:{properties:[{key:"accept",value:{name:"signature",type:"function",raw:"() => boolean",signature:{arguments:[],return:{name:"boolean"}},required:!1}},{key:"render",value:{name:"signature",type:"function",raw:"(index?: number) => Element<any>",signature:{arguments:[{name:"index",type:{name:"number"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!0}}]}}],raw:"Array<ListButton>"},description:`A list of arbitrary buttons to the display in the list header. All actions will be handled by the consuming
component.
<br />
<br />

In addition to the props listed here for each button, buttons will also accept any of the Semantic UI
<a href="https://react.semantic-ui.com/elements/button/" target="_blank">Button</a> props.`,defaultValue:{value:"[]",computed:!1}},count:{required:!1,flowType:{name:"number"},description:"The number of total records in the list (not just the current page).",defaultValue:{value:"0",computed:!1}},className:{required:!1,flowType:{name:"string"},description:"CSS class name to append to the <code>div</code> container.",defaultValue:{value:"''",computed:!1}},csvExportButton:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  basic: boolean,
  color: string,
  location: string,
  onClick?: () => void
}`,signature:{properties:[{key:"basic",value:{name:"boolean",required:!0}},{key:"color",value:{name:"string",required:!0}},{key:"location",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},description:"If provided, a CSV export button will be rendered in the list header.",defaultValue:{value:"undefined",computed:!0}},deleteButton:{required:!1,flowType:{name:"signature",type:"object",raw:`{
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
passing the new filters the <code>onLoad</code> callback.`,defaultValue:{value:"undefined",computed:!0}},modal:{required:!1,flowType:{name:"signature",type:"object",raw:`{
  component: ComponentType<any>,
  props: any,
  state: any
}`,signature:{properties:[{key:"component",value:{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>",required:!0}},{key:"props",value:{name:"any",required:!0}},{key:"state",value:{name:"any",required:!0}}]}},description:'If provided, the passed modal will be rendered when the "add" button is clicked.',defaultValue:{value:"undefined",computed:!0}},onCopy:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}}},description:`If provided, this callback is fired when the "copy" action is clicked for an item. The consuming component
should generate a copy of the selected item and return that value. The return value is then set at the
current item in the edit modal.`,defaultValue:{value:"undefined",computed:!0}},onDelete:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:'Callback fired when the "delete" action is clicked for an item.'},onDeleteAll:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Promise<any>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:"Callback fired when the delete all button is clicked. This prop expects a Promise as the return value."},onPageChange:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the page is changed via the pagination component.",defaultValue:{value:"() => {}",computed:!1}},onPerPageChange:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the per page value is changed."},onSave:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => Promise<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:`Callback fired when the save button is clicked in the add/edit modal. This function expects a Promise as the
return value.`},page:{required:!1,flowType:{name:"number"},description:"Current page number.",defaultValue:{value:"1",computed:!1}},pages:{required:!1,flowType:{name:"number"},description:"Number of pages in the list.",defaultValue:{value:"1",computed:!1}},perPage:{required:!1,flowType:{name:"number"},description:"The number of records to display per page."},perPageOptions:{required:!1,flowType:{name:"Array",elements:[{name:"number"}],raw:"Array<number>"},description:"The options to display in the dropdown for the per page selector."},renderDeleteModal:{required:!1,flowType:{name:"signature",type:"function",raw:"({ selectedItem: any, onCancel: () => void, onConfirm: () => void }) => Element<any>",signature:{arguments:[{name:"",type:{name:"signature",type:"object",raw:"{ selectedItem: any, onCancel: () => void, onConfirm: () => void }",signature:{properties:[{key:"selectedItem",value:{name:"any",required:!0}},{key:"onCancel",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"onConfirm",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:'Custom render function for the modal that appears on the "delete" action.',defaultValue:{value:"undefined",computed:!0}},renderListHeader:{required:!1,flowType:{name:"signature",type:"function",raw:"() => ?Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>",nullable:!0}}},description:"If provided, this function will return a JSX element that will prepend to the list header."},renderSearch:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:"If provided, this function will return a JSX element that will replace the default search input.",defaultValue:{value:"undefined",computed:!0}},searchable:{required:!1,flowType:{name:"boolean"},description:"Returns true if the renderSearch prop should be used to render a search input element."},selectable:{required:!1,flowType:{name:"boolean"},description:`If set to <code>true</code>, checkboxes will render as the first table column, allowing each row to be selectable.
The consuming component is responsible for tracking the selected items.`},showRecordCount:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, the total number of records will display in the list header.",defaultValue:{value:"false",computed:!1}},columns:{required:!0,flowType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  className?: string,
  hidden?: boolean,
  label?: string,
  name: string,
  render?: (item: any) => Element<any>,
  renderHeader?: (item: any) => Element<any>,
  resolve?: (item: any) => any,
  sortable: boolean
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"hidden",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"name",value:{name:"string",required:!0}},{key:"render",value:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!1}},{key:"renderHeader",value:{name:"signature",type:"function",raw:"(item: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}},required:!1}},{key:"resolve",value:{name:"signature",type:"function",raw:"(item: any) => any",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"any"}},required:!1}},{key:"sortable",value:{name:"boolean",required:!0}}]}}],raw:"Array<Column>"},description:`An array of columns to display within the <code>Table</code>.
<br />
<br />

If only a <code>name</code> attribute is provided, the value for each record will be pulled from the item property
matching that name.
<br />
<br />

If a <code>resolve</code> callback is provided, the item will be passed to the function and the return value will
display as the property value.
<br />
<br />

If a <code>render</code> callback is provided, the item will be passed to the function and the return JSX
will display as the property value.`},configurable:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, columns can be shown/hidden by the user."},expandableRows:{required:!1,flowType:{name:"boolean"},description:"If <code>true</code>, the rows of the table can be expanded and collapsed.",defaultValue:{value:"false",computed:!1}},expandPanel:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any, activePanel: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}},{name:"activePanel",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:"Function that returns JSX to render when the row for the passed item is expanded.",defaultValue:{value:"undefined",computed:!0}},isRowSelected:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any) => boolean",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"boolean"}}},description:"Callback returning <code>true</code> if the row for the passed item is selected."},items:{required:!1,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>",nullable:!0},description:"An array of objects to render as rows in the list.",defaultValue:{value:"[]",computed:!1}},loading:{required:!1,flowType:{name:"boolean"},description:"Set to <code>true</code> if the list is currently loading data. If true, a loading indicator will display.",defaultValue:{value:"false",computed:!1}},onClearSelected:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback to clear the selected set of records."},onColumnClick:{required:!1,flowType:{name:"signature",type:"function",raw:"(column: Column) => void",signature:{arguments:[{name:"column",type:{name:"Column"}}],return:{name:"void"}}},description:"Callback fired when the passed column is clicked.",defaultValue:{value:"() => {}",computed:!1}},onRowSelect:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any)=> void",signature:{arguments:[{name:"item",type:{name:"any"}}],return:{name:"void"}}},description:`Callback fired when the passed item is selected. This callback is <i>only</i> fired if the <code>selectable</code>
prop is passed as <code>true</code>.`},onSelectAll:{required:!1,flowType:{name:"signature",type:"function",raw:"(items: Array<any>) => void",signature:{arguments:[{name:"items",type:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"}}],return:{name:"void"}}},description:"Callback fired when the select all checkbox in the table header is clicked."},renderEmptyMessage:{required:!1,flowType:{name:"signature",type:"function",raw:"() => Element<any>",signature:{arguments:[],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:"A function that returns a JSX element to render when the list is empty."},renderEmptyRow:{required:!1,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`A function that returns a custom JSX element to render when the list is empty. This element will replace the
entire single row of the table.`,defaultValue:{value:"undefined",computed:!0}},renderItem:{required:!1,flowType:{name:"signature",type:"function",raw:"(item: any, index: number, children?: any) => Element<any>",signature:{arguments:[{name:"item",type:{name:"any"}},{name:"index",type:{name:"number"}},{name:"children",type:{name:"any"}}],return:{name:"Element",elements:[{name:"any"}],raw:"Element<any>"}}},description:`A function that returns a custom JSX element to render for the passed item. This element will replace the entire
table row.`,defaultValue:{value:"undefined",computed:!0}},sortColumn:{required:!1,flowType:{name:"string"},description:"Name of the current sort column.",defaultValue:{value:"undefined",computed:!0}},sortDirection:{required:!1,flowType:{name:"string"},description:"Current sort direction (ascending or descending).",defaultValue:{value:"undefined",computed:!0}},tableProps:{required:!1,flowType:{name:"any"},description:`Customization props for the
<a target="_blank" href="https://react.semantic-ui.com/collections/table/"><code>Table</code></a>
component.`}}};export{Y as D};
