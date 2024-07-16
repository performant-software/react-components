var q=Object.defineProperty;var x=(m,u,e)=>u in m?q(m,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):m[u]=e;var p=(m,u,e)=>(x(m,typeof u!="symbol"?u+"":u,e),e);import{j as a}from"./jsx-runtime-D9TvR9R2.js";import{o as f}from"./index.es30-BLbcNbkX.js";import{r as b}from"./index-C0dDX-lL.js";import{Y as w}from"./index.es3-xdXs6Ttq.js";import{T as o}from"./Table-fIf_AepQ.js";import{B as T}from"./Button-CJhT71wt.js";import{L as R}from"./Loader-lqR_Ikjg.js";import{C as v}from"./Checkbox-B3tsCUtI.js";import{P as E}from"./Popup-BfkG08Zy.js";import{_ as s}from"./index-default-C_maRo4o.js";import{i as d}from"./i18n-CM1tepcX.js";import{I as S}from"./Icon-C_3d7-zE.js";import{D as g}from"./Dropdown-DwNow7wJ.js";import{D as j}from"./Draggable-DKUpfzgU.js";import{L as k}from"./ListSession-hS-NIzK1.js";import{u as P}from"./List-7_Pqb1BT.js";import{R as A}from"./Portal-B8DXQ6EK.js";const C=m=>a.jsx("div",{className:"column-resize",onMouseDown:m.onMouseDown.bind(void 0),role:"presentation",children:" "});C.__docgenInfo={description:"",methods:[],displayName:"ColumnResize",props:{onMouseDown:{required:!0,flowType:{name:"signature",type:"function",raw:"(e: MouseEvent) => void",signature:{arguments:[{name:"e",type:{name:"MouseEvent"}}],return:{name:"void"}}},description:""}}};const I=m=>{var u;return u=class extends b.Component{constructor(e){super(e),this.state=this.initializeState(e)}componentDidUpdate(e,n){w.isEqual(e.columns,this.props.columns)||this.setState({columns:this.props.columns}),w.isEqual(n.columns,this.state.columns)||this.setSession()}initializeState(e){const{key:n,storage:t}=e.session||{},r=k.restoreSession(n,t)||{};if(s.isEmpty(r.columns))return{columns:e.columns};const i=[];s.each(r.columns,l=>{const h=s.findWhere(e.columns,{name:l.name});h&&i.push({...h,...l})});const c=s.pluck(i,"name");return s.each(e.columns,l=>{s.contains(c,l.name)||i.push(l)}),{columns:i}}onColumnCheckbox(e){this.setState(n=>({columns:s.map(n.columns,t=>t.name===e.name?{...t,hidden:!t.hidden}:t)}))}onDrag(e,n){this.setState(t=>{const r=[],i=[];s.each(t.columns,(l,h)=>{l.label&&l.label.length?r.push(l):i.push({index:h,column:l})});const c=r[e];return r.splice(e,1),r.splice(n,0,c),s.each(i,l=>r.splice(l.index,0,l.column)),{columns:r}})}render(){return a.jsx(m,{...this.props,className:`data-table-column-selector ${this.props.className}`,columns:this.state.columns,renderListHeader:this.renderHeader.bind(this)})}renderHeader(){return this.props.configurable||this.props.renderListHeader?a.jsxs(a.Fragment,{children:[this.props.renderListHeader&&this.props.renderListHeader(),this.props.configurable&&a.jsx(g,{"aria-label":"Select Columns",basic:!0,button:!0,icon:"cog",className:"icon configure-button open-right",closeOnBlur:!1,children:a.jsx(g.Menu,{children:this.state.columns.filter(e=>e.label&&e.label.length).map((e,n)=>a.jsx(j,{id:e.name,index:n,onDrag:this.onDrag.bind(this),children:a.jsxs(g.Item,{"aria-dropeffect":"move",onClick:t=>t.stopPropagation(),children:[a.jsx(S,{name:"bars"}),a.jsx(v,{"aria-label":"Select Column",checked:!e.hidden,label:e.label,onClick:this.onColumnCheckbox.bind(this,e)})]})},e.name))})})]}):null}setSession(){const{key:e,storage:n}=this.props.session||{};if(!e)return;const t=s.map(this.state.columns,r=>s.pick(r,"name","hidden"));k.setSession(e,n,{columns:t})}},p(u,"defaultProps",{className:""}),u};class y extends b.Component{constructor(e){super(e);p(this,"columnRefs");p(this,"onClick");p(this,"onMouseMove");p(this,"onMouseUp");this.state={resize:null,activePanel:null},this.initializeColumnRefs(),this.onClick=this.onPreventClick.bind(this),this.onMouseMove=this.onColumnResize.bind(this),this.onMouseUp=this.afterColumnResize.bind(this)}afterColumnResize(){this.state.resize&&f.isBrowser()&&(document.addEventListener("click",this.onClick,!0),this.setState({resize:void 0}))}initializeColumnRefs(){this.columnRefs={},s.each(this.props.columns,e=>{this.columnRefs[e.name]=b.createRef()})}componentDidMount(){f.isBrowser()&&(document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onMouseUp))}componentDidUpdate(e){w.isEqual(e.columns,this.props.columns)||this.initializeColumnRefs()}componentWillUnmount(){f.isBrowser()&&(document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp))}getColumnCount(){let e=this.props.columns.length;return this.props.actions&&this.props.actions.length&&(e+=1),e}onColumnResize(e){const{resize:n}=this.state;if(n){const{columnRef:t,offset:r}=n;t.current.style.width=`${r+e.pageX}px`}}onPreventClick(e){e.stopPropagation(),f.isBrowser()&&document.removeEventListener("click",this.onClick,!0)}onSelectAll(e){let n;e?n=[...this.props.items||[]]:n=s.reject(this.props.items,this.props.isRowSelected.bind(this)),s.each(n,this.props.onRowSelect&&this.props.onRowSelect.bind(this))}render(){return a.jsxs(o,{className:"data-table",...this.props.tableProps,children:[a.jsx(o.Header,{children:a.jsxs(o.Row,{children:[this.renderSelectHeader(),this.props.columns.map(this.renderHeaderCell.bind(this)),this.renderActionsHeader()]})}),a.jsxs(o.Body,{children:[this.props.items&&this.props.items.map(this.renderItem.bind(this)),this.renderEmptyTableRow(),this.renderLoading()]})]})}renderActionButton(e,n,t){if(t.render)return t.render(e,n);const r=a.jsx(T,{"aria-label":t.name,basic:!0,compact:!0,color:t.color,icon:t.icon,onClick:t.onClick&&t.onClick.bind(this,e),title:t.title},`${t.name}-${n}`);if(t.popup){const{content:i,title:c}=t.popup;return a.jsx(E,{content:i,header:c,hideOnScroll:!0,mouseEnterDelay:500,position:"top right",trigger:r})}return r}renderActions(e,n){if(!(this.props.actions&&this.props.actions.length))return null;const t=this.props.actions.filter(r=>!r.accept||r.accept(e)).map(r=>{let i={};return r.name==="edit"?i={popup:{title:d.t("DataTable.actions.edit.title"),content:d.t("DataTable.actions.edit.content")}}:r.name==="copy"?i={popup:{title:d.t("DataTable.actions.copy.title"),content:d.t("DataTable.actions.copy.content")}}:r.name==="delete"&&(i={popup:{title:d.t("DataTable.actions.delete.title"),content:d.t("DataTable.actions.delete.content")}}),s.defaults(r,i)});return a.jsx(o.Cell,{className:"actions-cell",children:t.map(this.renderActionButton.bind(this,e,n))},n)}renderActionsHeader(){return this.props.actions&&this.props.actions.length?a.jsx(o.HeaderCell,{children:d.t("DataTable.columns.actions")}):null}renderCell(e,n){if(n.hidden)return null;let t;return n.render?t=n.render(e):n.resolve?t=n.resolve(e):t=e[n.name],a.jsx(o.Cell,{className:n.className,children:t},`${e.id}-${n.name}`)}renderEmptyTableRow(){return this.props.loading||this.props.items&&this.props.items.length?null:this.props.renderEmptyRow?this.props.renderEmptyRow():a.jsx(o.Row,{children:a.jsx(o.Cell,{colSpan:this.getColumnCount(),textAlign:"center",children:a.jsx("div",{className:"empty-container",children:this.props.renderEmptyMessage()})})})}renderHeaderCell(e){return e.hidden?null:e.renderHeader?e.renderHeader():a.jsx(A,{innerRef:this.columnRefs[e.name],children:a.jsxs(o.HeaderCell,{sorted:this.props.sortColumn===e.name?this.props.sortDirection:null,onClick:()=>this.props.onColumnClick(e),children:[e.label,a.jsx(C,{onMouseDown:n=>{const t=this.columnRefs[e.name],r=t.current.offsetWidth-n.pageX;this.setState({resize:{columnRef:t,offset:r}})}})]},e.name)})}renderItem(e,n){const t=[this.renderSelectCheckbox(e,n),this.props.columns.map(this.renderCell.bind(this,e)),this.renderActions(e,n)],r=i=>{i.target.nodeName==="TD"&&this.setState(c=>({activePanel:c.activePanel===e.id?"":e.id}))};return this.props.renderItem?this.props.renderItem(e,n,t):a.jsxs(a.Fragment,{children:[a.jsx(o.Row,{onClick:this.props.expandableRows?r:()=>{},className:this.props.expandableRows?"expandable":"",children:t},n),this.props.expandableRows&&a.jsx(o.Row,{className:this.state.activePanel===e.id?"expanded-panel":"hidden",children:this.props.expandPanel&&this.props.expandPanel(e,this.state.activePanel)})]})}renderLoading(){return this.props.loading?a.jsx(o.Row,{children:a.jsx(o.Cell,{colSpan:this.getColumnCount(),textAlign:"center",children:a.jsx(R,{active:!0,content:d.t("DataTable.loading"),inline:!0})})}):null}renderSelectCheckbox(e,n){return this.props.selectable&&this.props.onRowSelect&&this.props.isRowSelected?a.jsx(o.Cell,{className:"select-cell",children:a.jsx(v,{onClick:this.props.onRowSelect.bind(this,e),checked:this.props.isRowSelected(e)})},`select-cell-${n}`):null}renderSelectHeader(){if(!this.props.selectable)return null;const e=this.props.items&&this.props.items.length&&s.every(this.props.items,this.props.isRowSelected.bind(this));return a.jsx(o.HeaderCell,{className:"select-cell",children:a.jsx(v,{onClick:this.onSelectAll.bind(this,e),checked:e})})}}p(y,"defaultProps");y.defaultProps={actions:void 0,addButton:{location:"top",color:"green"},buttons:[],count:0,className:"",csvExportButton:void 0,expandableRows:!1,expandPanel:void 0,filters:void 0,items:[],loading:!1,modal:void 0,page:1,pages:1,onColumnClick:()=>{},onCopy:void 0,onPageChange:()=>{},renderDeleteModal:void 0,renderEmptyRow:void 0,renderSearch:void 0,renderItem:void 0,showRecordCount:!1,sortColumn:void 0,sortDirection:void 0};const K=I(P(y));y.__docgenInfo={description:"",methods:[{name:"afterColumnResize",docblock:`If the resize object is present on the state, sets the capture click handler on the document and
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
component.`}}};export{K as D};
