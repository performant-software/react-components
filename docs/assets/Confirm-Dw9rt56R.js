import{_ as B}from"./extends-CCbyfPlC.js";import{_ as y}from"./inheritsLoose-1HkgTRWY.js";import{h as P}from"./Transition-DSFEXhCu.js";import{_ as c,m as K}from"./getElementType-CckcRzoH.js";import{R as d,r as O}from"./index-CBqU2yxZ.js";import{B as h}from"./Button-Blq7Z6RX.js";import{M as p}from"./Modal-Bz2VEyQG.js";var f=function(l){y(s,l);function s(){for(var e,n=arguments.length,i=new Array(n),t=0;t<n;t++)i[t]=arguments[t];return e=l.call.apply(l,[this].concat(i))||this,e.handleCancel=function(r){c(e.props,"onCancel",r,e.props)},e.handleCancelOverrides=function(r){return{onClick:function(o,a){c(r,"onClick",o,a),e.handleCancel(o)}}},e.handleConfirmOverrides=function(r){return{onClick:function(o,a){c(r,"onClick",o,a),c(e.props,"onConfirm",o,e.props)}}},e}var C=s.prototype;return C.render=function(){var n=this.props,i=n.cancelButton,t=n.confirmButton,r=n.content,u=n.header,o=n.open,a=n.size,v=K(s,this.props),m={};return P(this.props,"open")&&(m.open=o),d.createElement(p,B({},v,m,{size:a,onClose:this.handleCancel}),p.Header.create(u,{autoGenerateKey:!1}),p.Content.create(r,{autoGenerateKey:!1}),d.createElement(p.Actions,null,h.create(i,{autoGenerateKey:!1,overrideProps:this.handleCancelOverrides}),h.create(t,{autoGenerateKey:!1,defaultProps:{primary:!0},overrideProps:this.handleConfirmOverrides})))},s}(O.Component);f.handledProps=["cancelButton","confirmButton","content","header","onCancel","onConfirm","open","size"];f.propTypes={};f.defaultProps={cancelButton:"Cancel",confirmButton:"OK",content:"Are you sure?",size:"small"};export{f as C};