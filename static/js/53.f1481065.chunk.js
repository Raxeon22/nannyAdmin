(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[53],{1112:function(e,t,a){"use strict";a.r(t);var s=a(19),n=a(0),o=a(472),i=a(475),r=a(480),c=a(476),l=a(1167),d=a(1168),p=a(1169),u=a(1100),m=a(1102),h=a(493),b=a(488),g=a(489),f=a(490),O=a(455),j=a(50),v=a(666),y=a(675),C=a(8),N=[{id:1,no:1,review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis odio vitae nisi accumsan",image:j.default},{no:2,id:2,review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis odio vitae nisi accumsan",image:j.default},{no:3,id:3,review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis odio vitae nisi accumsan",image:j.default},{no:4,id:4,review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis odio vitae nisi accumsan",image:j.default}];t.default=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],j=t[1],k=function(e){j(a!==e?e:null)};return Object(C.jsx)(o.a,{children:Object(C.jsxs)(i.a,{children:[Object(C.jsx)(r.a,{children:"customers Reviews"}),Object(C.jsxs)(c.a,{responsive:!0,children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"Customer Image"}),Object(C.jsx)("th",{children:"Customer Reviews"}),Object(C.jsx)("th",{children:"Show"}),Object(C.jsx)("th",{children:"Action"})]})}),Object(C.jsx)("tbody",{children:N.map((function(e,t){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:e.image,class:"rounded-circle",height:"60",width:"60",alt:""})}),Object(C.jsx)("td",{children:e.review}),Object(C.jsx)("td",{children:Object(C.jsx)(l.a,{className:"custom-control-secondary",type:"switch",id:e.id,name:"secondary",inline:!0,defaultChecked:!0})}),Object(C.jsxs)("td",{children:[Object(C.jsxs)(d.a,{children:[Object(C.jsx)(p.a,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(C.jsx)(v.a,{size:15})}),Object(C.jsx)(u.a,{right:!0,children:Object(C.jsxs)(m.a,{href:"/",onClick:function(t){t.preventDefault(),k(e.id)},children:[Object(C.jsx)(y.a,{className:"mr-50",size:15})," ",Object(C.jsx)("span",{className:"align-middle",children:"Delete"})]})})]}),Object(C.jsxs)(h.a,{isOpen:a===e.id,toggle:function(){return k(e.id)},className:"modal-dialog-centered",modalClassName:"modal-danger",children:[Object(C.jsx)(b.a,{toggle:function(){return k(e.id)},children:"Delete"}),Object(C.jsx)(g.a,{children:"Are you sure you want to delete this?"}),Object(C.jsx)(f.a,{children:Object(C.jsx)(O.a,{color:"danger",onClick:function(){return k(e.id)},children:"delete"})})]},e.id)]})]},t)}))})]})]})})}},472:function(e,t,a){"use strict";var s=a(18),n=a(23),o=a(0),i=a.n(o),r=a(5),c=a.n(r),l=a(62),d=a.n(l),p=a(82),u={tag:p.q,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},m=function(e){var t=e.className,a=e.cssModule,o=e.color,r=e.body,c=e.inverse,l=e.outline,u=e.tag,m=e.innerRef,h=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(p.m)(d()(t,"card",!!c&&"text-white",!!r&&"card-body",!!o&&(l?"border":"bg")+"-"+o),a);return i.a.createElement(u,Object(s.a)({},h,{className:b,ref:m}))};m.propTypes=u,m.defaultProps={tag:"div"},t.a=m},475:function(e,t,a){"use strict";var s=a(18),n=a(23),o=a(0),i=a.n(o),r=a(5),c=a.n(r),l=a(62),d=a.n(l),p=a(82),u={tag:p.q,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},m=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,r=e.tag,c=Object(n.a)(e,["className","cssModule","innerRef","tag"]),l=Object(p.m)(d()(t,"card-body"),a);return i.a.createElement(r,Object(s.a)({},c,{className:l,ref:o}))};m.propTypes=u,m.defaultProps={tag:"div"},t.a=m},476:function(e,t,a){"use strict";var s=a(18),n=a(23),o=a(0),i=a.n(o),r=a(5),c=a.n(r),l=a(62),d=a.n(l),p=a(82),u={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:p.q,responsiveTag:p.q,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},m=function(e){var t=e.className,a=e.cssModule,o=e.size,r=e.bordered,c=e.borderless,l=e.striped,u=e.dark,m=e.hover,h=e.responsive,b=e.tag,g=e.responsiveTag,f=e.innerRef,O=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),j=Object(p.m)(d()(t,"table",!!o&&"table-"+o,!!r&&"table-bordered",!!c&&"table-borderless",!!l&&"table-striped",!!u&&"table-dark",!!m&&"table-hover"),a),v=i.a.createElement(b,Object(s.a)({},O,{ref:f,className:j}));if(h){var y=Object(p.m)(!0===h?"table-responsive":"table-responsive-"+h,a);return i.a.createElement(g,{className:y},v)}return v};m.propTypes=u,m.defaultProps={tag:"table",responsiveTag:"div"},t.a=m},480:function(e,t,a){"use strict";var s=a(18),n=a(23),o=a(0),i=a.n(o),r=a(5),c=a.n(r),l=a(62),d=a.n(l),p=a(82),u={tag:p.q,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.tag,r=Object(n.a)(e,["className","cssModule","tag"]),c=Object(p.m)(d()(t,"card-title"),a);return i.a.createElement(o,Object(s.a)({},r,{className:c}))};m.propTypes=u,m.defaultProps={tag:"div"},t.a=m},488:function(e,t,a){"use strict";var s=a(18),n=a(23),o=a(0),i=a.n(o),r=a(5),c=a.n(r),l=a(62),d=a.n(l),p=a(82),u={tag:p.q,wrapTag:p.q,toggle:c.a.func,className:c.a.string,cssModule:c.a.object,children:c.a.node,closeAriaLabel:c.a.string,charCode:c.a.oneOfType([c.a.string,c.a.number]),close:c.a.object},m=function(e){var t,a=e.className,o=e.cssModule,r=e.children,c=e.toggle,l=e.tag,u=e.wrapTag,m=e.closeAriaLabel,h=e.charCode,b=e.close,g=Object(n.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),f=Object(p.m)(d()(a,"modal-header"),o);if(!b&&c){var O="number"===typeof h?String.fromCharCode(h):h;t=i.a.createElement("button",{type:"button",onClick:c,className:Object(p.m)("close",o),"aria-label":m},i.a.createElement("span",{"aria-hidden":"true"},O))}return i.a.createElement(u,Object(s.a)({},g,{className:f}),i.a.createElement(l,{className:Object(p.m)("modal-title",o)},r),b||t)};m.propTypes=u,m.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=m},489:function(e,t,a){"use strict";var s=a(18),n=a(23),o=a(0),i=a.n(o),r=a(5),c=a.n(r),l=a(62),d=a.n(l),p=a(82),u={tag:p.q,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.tag,r=Object(n.a)(e,["className","cssModule","tag"]),c=Object(p.m)(d()(t,"modal-body"),a);return i.a.createElement(o,Object(s.a)({},r,{className:c}))};m.propTypes=u,m.defaultProps={tag:"div"},t.a=m},490:function(e,t,a){"use strict";var s=a(18),n=a(23),o=a(0),i=a.n(o),r=a(5),c=a.n(r),l=a(62),d=a.n(l),p=a(82),u={tag:p.q,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.tag,r=Object(n.a)(e,["className","cssModule","tag"]),c=Object(p.m)(d()(t,"modal-footer"),a);return i.a.createElement(o,Object(s.a)({},r,{className:c}))};m.propTypes=u,m.defaultProps={tag:"div"},t.a=m},493:function(e,t,a){"use strict";var s=a(470),n=a(18),o=a(121),i=a(119),r=a(0),c=a.n(r),l=a(5),d=a.n(l),p=a(62),u=a.n(p),m=a(37),h=a.n(m),b=a(82),g={children:d.a.node.isRequired,node:d.a.any},f=function(e){function t(){return e.apply(this,arguments)||this}Object(i.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return b.f?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(c.a.Component);f.propTypes=g;var O=f,j=a(483);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function C(){}var N=d.a.shape(j.a.propTypes),k={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,scrollable:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:N,modalTransition:N,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func]),unmountOnClose:d.a.bool,returnFocusAfterClose:d.a.bool,container:b.r},T=Object.keys(k),x={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:C,onClosed:C,modalTransition:{timeout:b.e.Modal},backdropTransition:{mountOnEnter:!0,timeout:b.e.Fade},unmountOnClose:!0,returnFocusAfterClose:!0,container:"body"},E=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(o.a)(a)),a.handleBackdropClick=a.handleBackdropClick.bind(Object(o.a)(a)),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(o.a)(a)),a.handleEscape=a.handleEscape.bind(Object(o.a)(a)),a.handleStaticBackdropAnimation=a.handleStaticBackdropAnimation.bind(Object(o.a)(a)),a.handleTab=a.handleTab.bind(Object(o.a)(a)),a.onOpened=a.onOpened.bind(Object(o.a)(a)),a.onClosed=a.onClosed.bind(Object(o.a)(a)),a.manageFocusAfterClose=a.manageFocusAfterClose.bind(Object(o.a)(a)),a.clearBackdropAnimationTimeout=a.clearBackdropAnimationTimeout.bind(Object(o.a)(a)),a.state={isOpen:!1,showStaticBackdropAnimation:!1},a}Object(i.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props,t=e.isOpen,a=e.autoFocus,s=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),a&&this.setFocus()),s&&s(),this._isMounted=!0},a.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),(this.props.isOpen||this.state.isOpen)&&this.close()),this._isMounted=!1},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||C)(e,t)},a.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||C)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(b.h.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which){var t=this.getFocusableChildren(),a=t.length;if(0!==a){for(var s=this.getFocusedChild(),n=0,o=0;o<a;o+=1)if(t[o]===s){n=o;break}e.shiftKey&&0===n?(e.preventDefault(),t[a-1].focus()):e.shiftKey||n!==a-1||(e.preventDefault(),t[0].focus())}}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&e.keyCode===b.l.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},a.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout((function(){e.setState({showStaticBackdropAnimation:!1})}),100)},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._mountContainer=Object(b.j)(this.props.container),this._mountContainer.appendChild(this._element)),this._originalBodyPadding=Object(b.i)(),Object(b.g)(),0===t.openCount&&(document.body.className=u()(document.body.className,Object(b.m)("modal-open",this.props.cssModule))),t.openCount+=1},a.destroy=function(){this._element&&(this._mountContainer.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},a.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},a.close=function(){if(t.openCount<=1){var e=Object(b.m)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(b.p)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(b.n)(this.props,T),s="modal-dialog";return c.a.createElement("div",Object(n.a)({},a,{className:Object(b.m)(u()(s,this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),c.a.createElement("div",{className:Object(b.m)(u()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var a=this.props,s=a.wrapClassName,o=a.modalClassName,i=a.backdropClassName,r=a.cssModule,l=a.isOpen,d=a.backdrop,p=a.role,m=a.labelledBy,h=a.external,g=a.innerRef,f={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":m,role:p,tabIndex:"-1"},v=this.props.fade,C=y(y(y({},j.a.defaultProps),this.props.modalTransition),{},{baseClass:v?this.props.modalTransition.baseClass:"",timeout:v?this.props.modalTransition.timeout:0}),N=y(y(y({},j.a.defaultProps),this.props.backdropTransition),{},{baseClass:v?this.props.backdropTransition.baseClass:"",timeout:v?this.props.backdropTransition.timeout:0}),k=d&&(v?c.a.createElement(j.a,Object(n.a)({},N,{in:l&&!!d,cssModule:r,className:Object(b.m)(u()("modal-backdrop",i),r)})):c.a.createElement("div",{className:Object(b.m)(u()("modal-backdrop","show",i),r)}));return c.a.createElement(O,{node:this._element},c.a.createElement("div",{className:Object(b.m)(s)},c.a.createElement(j.a,Object(n.a)({},f,C,{in:l,onEntered:this.onOpened,onExited:this.onClosed,cssModule:r,className:Object(b.m)(u()("modal",o,this.state.showStaticBackdropAnimation&&"modal-static"),r),innerRef:g}),h,this.renderModalDialog()),k))}return null},a.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(c.a.Component);E.propTypes=k,E.defaultProps=x,E.openCount=0;t.a=E}}]);
//# sourceMappingURL=53.f1481065.chunk.js.map