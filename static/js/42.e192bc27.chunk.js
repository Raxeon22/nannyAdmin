(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[42],{1157:function(e,a,t){"use strict";t.r(a);var s=t(2),c=t(459),n=t.n(c),r=t(460),i=t(19),o=t(499),l=t(463),d=t(0),u=t(646),j=t(123),b=t(612),p=t(486),m=t(487),f=t(480),h=t(534),O=t(500),x=t(1099),g=t(474),v=t(455),N=t(482),w=(t(527),t(125)),y=t(613),z=t(458),P=t(462),M=t(120),k=t(8);a.default=function(){var e=Object(o.g)(),a=Object(d.useState)({newPassword:"",confirmPassword:""}),t=Object(i.a)(a,2),c=t[0],R=t[1],S=Object(d.useContext)(j.b),T=Object(i.a)(S,1)[0],C=Object(d.useState)(!1),E=Object(i.a)(C,2),q=E[0],F=E[1],I=function(){var a=Object(r.a)(n.a.mark((function a(t){var s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),F(!0),a.next=4,z.a.post("auth/resetpassword",{email:T,password:c.newPassword,confirmpassword:c.confirmPassword});case 4:s=a.sent,console.log(s),s.data.success?(M.c.success(Object(k.jsx)(P.b,{title:"Success",text:s.data.message})),e.push("/")):(F(!1),M.c.error(Object(k.jsx)(P.a,{title:"error",text:s.data.message})));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(k.jsx)("div",{className:"auth-wrapper auth-v2",children:Object(k.jsxs)(p.a,{className:"auth-inner m-0",children:[Object(k.jsx)(l.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:Object(k.jsx)("img",{src:w.a,width:"200",height:"auto",alt:""})}),Object(k.jsx)(m.a,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(k.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(k.jsx)("img",{className:"img-fluid",src:y.a,alt:"Login V2"})})}),Object(k.jsx)(m.a,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(k.jsxs)(m.a,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[Object(k.jsx)(f.a,{tag:"h2",className:"font-weight-bold mb-1",children:"Reset Password"}),Object(k.jsx)(h.a,{className:"mb-2",children:"Your new password must be different from previously used passwords"}),Object(k.jsxs)(O.a,{className:"auth-reset-password-form mt-2",onSubmit:function(e){return e.preventDefault()},children:[Object(k.jsxs)(x.a,{children:[Object(k.jsx)(g.a,{className:"form-label",for:"new-password",children:"New Password"}),Object(k.jsx)(b.a,{className:"input-group-merge",value:c.newPassword,onChange:function(e){return R(Object(s.a)(Object(s.a)({},c),{},{newPassword:e.target.value}))},id:"new-password",autoFocus:!0})]}),Object(k.jsxs)(x.a,{children:[Object(k.jsx)(g.a,{className:"form-label",for:"confirm-password",children:"Confirm Password"}),Object(k.jsx)(b.a,{className:"input-group-merge",value:c.confirmPassword,onChange:function(e){return R(Object(s.a)(Object(s.a)({},c),{},{confirmPassword:e.target.value}))},id:"confirm-password"})]}),Object(k.jsxs)(v.a.Ripple,{color:"primary",block:!0,onClick:function(e){return I(e)},children:["Set New Password",q?Object(k.jsx)(N.a,{color:"light",size:"sm",className:"mx-1"}):null]})]}),Object(k.jsx)("p",{className:"text-center mt-2",children:Object(k.jsxs)(l.b,{to:"/otp",children:[Object(k.jsx)(u.a,{className:"mr-25",size:14}),Object(k.jsx)("span",{className:"align-middle",children:"Back to Otp"})]})})]})})]})})}},458:function(e,a,t){"use strict";var s=t(83),c=t.n(s);a.a=c.a.create({baseURL:"https://nanybackendforadmin.herokuapp.com"})},462:function(e,a,t){"use strict";t.d(a,"b",(function(){return o})),t.d(a,"a",(function(){return l}));var s=t(0),c=t(466),n=t(638),r=t(616),i=(t(639),t(659),t(8)),o=function(e){return Object(i.jsxs)(s.Fragment,{children:[Object(i.jsx)("div",{className:"toastify-header",children:Object(i.jsxs)("div",{className:"title-wrapper",children:[Object(i.jsx)(c.a,{size:"sm",color:"success",icon:Object(i.jsx)(n.a,{size:12})}),Object(i.jsx)("h6",{className:"toast-title",children:"Success!"})]})}),Object(i.jsx)("div",{className:"toastify-body",children:Object(i.jsx)("span",{role:"img","aria-label":"toast-text",children:e.text})})]})},l=function(e){return Object(i.jsxs)(s.Fragment,{children:[Object(i.jsx)("div",{className:"toastify-header",children:Object(i.jsxs)("div",{className:"title-wrapper",children:[Object(i.jsx)(c.a,{size:"sm",color:"danger",icon:Object(i.jsx)(r.a,{size:12})}),Object(i.jsx)("h6",{className:"toast-title",children:"Error!"})]})}),Object(i.jsx)("div",{className:"toastify-body",children:Object(i.jsx)("span",{role:"img","aria-label":"toast-text",children:e.text})})]})}},464:function(e,a,t){"use strict";var s=t(18),c=t(23),n=t(0),r=t.n(n),i=t(5),o=t.n(i),l=t(62),d=t.n(l),u=t(82),j={tag:u.q,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,n=e.tag,i=Object(c.a)(e,["className","cssModule","tag"]),o=Object(u.m)(d()(a,"input-group-text"),t);return r.a.createElement(n,Object(s.a)({},i,{className:o}))};b.propTypes=j,b.defaultProps={tag:"span"},a.a=b},479:function(e,a,t){"use strict";var s=t(18),c=t(23),n=t(0),r=t.n(n),i=t(5),o=t.n(i),l=t(62),d=t.n(l),u=t(82),j=t(464),b={tag:u.q,addonType:o.a.oneOf(["prepend","append"]).isRequired,children:o.a.node,className:o.a.string,cssModule:o.a.object},p=function(e){var a=e.className,t=e.cssModule,n=e.tag,i=e.addonType,o=e.children,l=Object(c.a)(e,["className","cssModule","tag","addonType","children"]),b=Object(u.m)(d()(a,"input-group-"+i),t);return"string"===typeof o?r.a.createElement(n,Object(s.a)({},l,{className:b}),r.a.createElement(j.a,{children:o})):r.a.createElement(n,Object(s.a)({},l,{className:b,children:o}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},484:function(e,a,t){"use strict";var s=t(18),c=t(23),n=t(0),r=t.n(n),i=t(5),o=t.n(i),l=t(62),d=t.n(l),u=t(82),j={tag:u.q,size:o.a.string,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,n=e.tag,i=e.size,o=Object(c.a)(e,["className","cssModule","tag","size"]),l=Object(u.m)(d()(a,"input-group",i?"input-group-"+i:null),t);return r.a.createElement(n,Object(s.a)({},o,{className:l}))};b.propTypes=j,b.defaultProps={tag:"div"},a.a=b},494:function(e,a,t){"use strict";var s=t(18),c=t(23),n=t(121),r=t(119),i=t(0),o=t.n(i),l=t(5),d=t.n(l),u=t(62),j=t.n(u),b=t(82),p={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:b.q,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(n.a)(t)),t.focus=t.focus.bind(Object(n.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,n=e.type,r=e.bsSize,i=e.valid,l=e.invalid,d=e.tag,u=e.addon,p=e.plaintext,m=e.innerRef,f=Object(c.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(n)>-1,O=new RegExp("\\D","g"),x=d||("select"===n||"textarea"===n?n:"input"),g="form-control";p?(g+="-plaintext",x=d||"input"):"file"===n?g+="-file":"range"===n?g+="-range":h&&(g=u?null:"form-check-input"),f.size&&O.test(f.size)&&(Object(b.s)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=f.size,delete f.size);var v=Object(b.m)(j()(a,l&&"is-invalid",i&&"is-valid",!!r&&"form-control-"+r,g),t);return("input"===x||d&&"function"===typeof d)&&(f.type=n),f.children&&!p&&"select"!==n&&"string"===typeof x&&"select"!==x&&(Object(b.s)('Input with a type of "'+n+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete f.children),o.a.createElement(x,Object(s.a)({},f,{ref:m,className:v,"aria-invalid":l}))},a}(o.a.Component);m.propTypes=p,m.defaultProps={type:"text"},a.a=m},527:function(e,a,t){},534:function(e,a,t){"use strict";var s=t(18),c=t(23),n=t(0),r=t.n(n),i=t(5),o=t.n(i),l=t(62),d=t.n(l),u=t(82),j={tag:u.q,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,n=e.tag,i=Object(c.a)(e,["className","cssModule","tag"]),o=Object(u.m)(d()(a,"card-text"),t);return r.a.createElement(n,Object(s.a)({},i,{className:o}))};b.propTypes=j,b.defaultProps={tag:"p"},a.a=b},612:function(e,a,t){"use strict";var s=t(2),c=t(30),n=t(19),r=t(124),i=t(0),o=t(62),l=t.n(o),d=t(655),u=t(654),j=t(474),b=t(484),p=t(494),m=t(479),f=t(464),h=t(8),O=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName"],x=function(e){var a=e.label,t=e.hideIcon,o=e.showIcon,x=e.visible,g=e.className,v=e.htmlFor,N=e.placeholder,w=e.iconSize,y=e.inputClassName,z=Object(r.a)(e,O),P=Object(i.useState)(x),M=Object(n.a)(P,2),k=M[0],R=M[1];return Object(h.jsxs)(i.Fragment,{children:[a?Object(h.jsx)(j.a,{for:v,children:a}):null,Object(h.jsxs)(b.a,{className:l()(Object(c.a)({},g,g)),children:[Object(h.jsx)(p.a,Object(s.a)(Object(s.a)({type:!1===k?"password":"text",placeholder:N||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:l()(Object(c.a)({},y,y))},a&&v?{id:v}:{}),z)),Object(h.jsx)(m.a,{addonType:"append",onClick:function(){return R(!k)},children:Object(h.jsx)(f.a,{className:"cursor-pointer",children:function(){var e=w||14;return!1===k?t||Object(h.jsx)(d.a,{size:e}):o||Object(h.jsx)(u.a,{size:e})}()})})]})]})};a.a=x,x.defaultProps={visible:!1}},613:function(e,a,t){"use strict";a.a=t.p+"static/media/reset-password-v2-dark.8b773a08.svg"}}]);
//# sourceMappingURL=42.e192bc27.chunk.js.map