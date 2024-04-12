var b=Object.defineProperty;var P=(a,r,h)=>r in a?b(a,r,{enumerable:!0,configurable:!0,writable:!0,value:h}):a[r]=h;var d=(a,r,h)=>(P(a,typeof r!="symbol"?r+"":r,h),h);import{j as n}from"./jsx-runtime-BTCK_S7S.js";import{u as S}from"./index.es28-C5Z9R2NB.js";import{r as y}from"./index-CBqU2yxZ.js";import{Y as I}from"./index.es3-CAJGsQNm.js";import{u as E}from"./uuid-BH6G0oTz.js";import{_ as o}from"./index-default-C_maRo4o.js";import{M as f}from"./Message-3p6wyYpA.js";import{I as x}from"./Icon-2tEtgK8g.js";import{I as j}from"./Input--hQVCRQV.js";import{i as m}from"./i18n-C8zWlANG.js";import{T as g}from"./Toaster-C1YYqOUE.js";const A="DataList",F="{}",D="ascending",N="descending",T=a=>{var r;return r=class extends y.Component{constructor(t){super(t);d(this,"pollingInterval");this.state=this.initializeState(t)}componentDidMount(){this.props.polling&&(this.pollingInterval=setInterval(this.fetchData.bind(this),this.props.polling))}componentDidUpdate(t){t.saved!==this.props.saved&&this.props.saved&&this.setState({saved:this.props.saved},this.fetchData.bind(this))}componentWillUnmount(){this.pollingInterval&&clearInterval(this.pollingInterval)}afterDelete(){return this.state.items.length===1?this.setState(t=>({page:t.page-1>1?t.page-1:1}),this.fetchData.bind(this)):this.fetchData()}afterDeleteAll(){this.setState({page:1},this.fetchData.bind(this))}fetchData(){this.setSession(),this.setState({loading:!0},()=>{const{page:t,perPage:e,search:i,sortColumn:s,sortDirection:c}=this.state,p={...this.state.filters,page:t,search:i,per_page:e,sort_by:s,sort_direction:c};this.props.onLoad(p).then(({data:l})=>{const u=l[this.props.collectionName],{pages:v,count:C}=l.list;this.setState({count:C,items:u,page:t,pages:v,loading:!1})})})}getDefaultFilters(t){const e=[];return t.filters&&t.filters.defaults&&o.each(t.filters.defaults.filters,i=>{const s=o.findWhere(t.filters.props.filters,{key:i.key});s&&e.push(this.onCreateFilter({...s,...i}))}),{filters:e}}getSessionKey(){return this.props.session?`${A}.${this.props.session.key}`:null}initializeState(t){const e=this.restoreSession(),i=e.filters||this.getDefaultFilters(t),s=e.page||1,c=e.perPage||t.defaultPerPage||o.first(t.perPageOptions),p=e.search||t.defaultSearch||null,l=e.sortColumn||t.defaultSort||null,u=e.sortDirection||t.defaultSortDirection||null;return{count:0,error:null,filters:i,items:[],loading:!1,page:s,pages:1,perPage:c,saved:t.saved||!1,search:p,sortColumn:l,sortDirection:u}}isFilterActive(){let t=!1;return o.each(o.values(this.state.filters),e=>{I.isEmpty(e)||(t=!0)}),t}onClearSearch(t){var e,i,s;this.onSearchChange(t,{value:""}),(s=(i=(e=this.searchRef)==null?void 0:e.inputRef)==null?void 0:i.current)==null||s.focus(),this.onSearch()}onCreateFilter(t){return{...t,uid:E()}}onDelete(t){return this.props.onDelete?this.props.onDelete(t).then(this.afterDelete.bind(this)).catch(this.onError.bind(this)):Promise.resolve()}onDeleteAll(){return this.props.onDeleteAll?this.props.onDeleteAll().then(this.afterDeleteAll.bind(this)):Promise.resolve()}onError(t){return this.props.resolveErrors&&this.setState({error:t})}onFilterChange(t){return new Promise(e=>{this.props.filters&&this.props.filters.onChange&&this.props.filters.onChange(t),this.setState({filters:t,page:1},()=>{this.fetchData(),e()})})}onPageChange(t,{activePage:e}){this.setState({page:e},this.fetchData.bind(this))}onPerPageChange(t,{value:e}){this.setState({perPage:e},this.fetchData.bind(this))}onSave(t){return this.props.onSave?Promise.resolve(this.props.onSave(t)).then(()=>this.setState({saved:!0},this.fetchData.bind(this))):Promise.resolve()}onSearch(){this.setState({page:1},this.fetchData.bind(this))}onSearchChange(t,{value:e}){this.setState({search:e})}onSort(t,e,i=1){let s=e;s||(s=this.state.sortColumn===t&&this.state.sortDirection===D?N:D),this.setState({sortColumn:t,sortDirection:s,page:i},this.fetchData.bind(this))}onInit(t=1){this.setState({sortColumn:"",sortDirection:"",page:t},this.fetchData.bind(this))}render(){const{filters:t={}}=this.props,{component:e,props:i,showLabels:s}=t;return n.jsxs(n.Fragment,{children:[n.jsx(a,{...this.props,count:this.state.count,filters:{active:this.isFilterActive(),component:e,onChange:this.onFilterChange.bind(this),showLabels:s,props:{...i,onCreateFilter:this.onCreateFilter.bind(this),item:this.state.filters}},items:this.state.items,loading:this.state.loading,page:this.state.page,pages:this.state.pages,perPage:this.state.perPage,onDelete:this.onDelete.bind(this),onDeleteAll:this.onDeleteAll.bind(this),onPageChange:this.onPageChange.bind(this),onPerPageChange:this.onPerPageChange.bind(this),onSave:this.onSave.bind(this),onSort:this.onSort.bind(this),onInit:this.onInit.bind(this),renderSearch:this.renderSearch.bind(this),sortColumn:this.state.sortColumn,sortDirection:this.state.sortDirection}),this.state.saved&&n.jsxs(g,{onDismiss:()=>this.setState({saved:!1}),type:g.MessageTypes.positive,children:[n.jsx(f.Header,{content:m.t("Common.messages.save.header")}),n.jsx(f.Content,{content:m.t("Common.messages.save.content")})]}),this.state.error&&n.jsxs(g,{onDismiss:()=>this.setState({error:!1}),timeout:0,type:g.MessageTypes.negative,children:[n.jsx(f.Header,{content:m.t("Common.messages.error.header")}),n.jsx(f.List,{items:this.props.resolveErrors&&this.props.resolveErrors(this.state.error)})]})]})}renderSearch(){return this.props.searchable?n.jsx(j,{"aria-label":"Search",type:"text",icon:n.jsx(x,{link:!o.isEmpty(this.state.search),name:o.isEmpty(this.state.search)?"search":"times",onClick:this.onClearSearch.bind(this)}),input:{"aria-label":"search"},ref:t=>{this.searchRef=t},loading:this.state.loading,onKeyDown:S.clearSearchTimer.bind(this),onKeyUp:S.setSearchTimer.bind(this,this.onSearch.bind(this)),onChange:this.onSearchChange.bind(this),size:"small",value:this.state.search}):null}restoreSession(){const t=this.getSessionKey();if(!t)return{};const e=sessionStorage.getItem(t)||F;return JSON.parse(e)}setSession(){const t=this.getSessionKey();if(!t)return;const{filters:e,page:i,perPage:s,search:c,sortColumn:p,sortDirection:l}=this.state;sessionStorage.setItem(t,JSON.stringify({filters:e,page:i,perPage:s,search:c,sortColumn:p,sortDirection:l}))}},d(r,"defaultProps",{filters:{},searchable:!0}),r},H=T;export{D as S,N as a,H as u};