(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[65],{1124:function(e,t,c){"use strict";c.r(t);var a=c(459),r=c.n(a),s=c(460),n=c(19),i=c(0),l=(c(468),c(467),c(481),c(666)),j=c(653),u=c(675),d=c(583),o=c(458),b=c(472),x=c(492),O=c(480),h=c(475),m=c(500),p=c(486),f=c(487),v=c(474),g=c(484),y=c(1099),N=c(479),w=c(464),A=c(494),S=c(455),_=c(482),k=c(476),z=c(1168),C=c(1169),D=c(1100),E=c(1102),T=c(493),F=c(488),J=c(489),R=c(490),L=c(462),U=c(120),q=c(8);t.default=function(){var e=Object(i.useState)(null),t=Object(n.a)(e,2),c=t[0],a=t[1],B=Object(i.useState)(null),G=Object(n.a)(B,2),H=G[0],I=G[1],K=Object(i.useState)([]),M=Object(n.a)(K,2),P=M[0],Q=M[1],V=Object(i.useState)(""),W=Object(n.a)(V,2),X=W[0],Y=W[1],Z=Object(i.useState)(""),$=Object(n.a)(Z,2),ee=$[0],te=$[1],ce=Object(i.useState)(!1),ae=Object(n.a)(ce,2),re=ae[0],se=ae[1],ne=Object(i.useState)(!1),ie=Object(n.a)(ne,2),le=ie[0],je=ie[1];Object(i.useEffect)((function(){var e=function(){var e=Object(s.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("/attribute");case 3:t=e.sent,c=t.data,Q(c.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[re,le,c]);var ue=function(e){a(c!==e?e:null)},de=function(e){I(H!==e?e:null)},oe=function(){var e=Object(s.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),se(!0),e.next=4,o.a.post("/attribute",{Attribute:X});case 4:(c=e.sent).data.success?(U.c.success(Object(q.jsx)(L.b,{title:"Success",text:"Attribute Added Successfully!"})),se(!1),Y("")):(se(!1),U.c.error(Object(q.jsx)(L.a,{title:"error",text:c.data.message})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(s.a)(r.a.mark((function e(t){var c,a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("/attribute?_id=".concat(t));case 3:c=e.sent,a=c.data,s=a.data[0],te(s.attribute),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),xe=function(){var e=Object(s.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.delete("/attribute?id=".concat(t));case 2:(c=e.sent).data.success?(U.c.success(Object(q.jsx)(L.b,{title:"Success",text:"Attribute Deleted Succesfully!"})),ue(t)):U.c.error(Object(q.jsx)(L.a,{title:"error",text:c.data.message}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(s.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return je(!0),e.next=3,o.a.put("/attribute/".concat(t),{attribute:ee});case 3:(c=e.sent).data.success?(U.c.success(Object(q.jsx)(L.b,{title:"Success",text:"attribute Added Successfully!"})),je(!1),de(t)):(je(!1),U.c.error(Object(q.jsx)(L.a,{title:"error",text:c.data.message})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)(b.a,{children:[Object(q.jsx)(x.a,{children:Object(q.jsx)(O.a,{tag:"h4",children:"Add New Attribute Name"})}),Object(q.jsx)(h.a,{children:Object(q.jsx)(m.a,{children:Object(q.jsxs)(p.a,{children:[Object(q.jsxs)(f.a,{sm:"12",children:[Object(q.jsx)(v.a,{for:"att-name",children:"Attribute Name"}),Object(q.jsxs)(g.a,{className:"input-group-merge",tag:y.a,children:[Object(q.jsx)(N.a,{addonType:"prepend",children:Object(q.jsx)(w.a,{children:Object(q.jsx)(d.a,{size:15})})}),Object(q.jsx)(A.a,{onChange:function(e){return Y(e.currentTarget.value)},value:X,type:"text",placeholder:"Enter your Attibute name"})]})]}),Object(q.jsx)(f.a,{sm:"12",className:"",children:Object(q.jsxs)(y.a,{className:"d-flex mb-0",children:[Object(q.jsx)(S.a.Ripple,{className:"mr-1",color:"primary",type:"submit",onClick:function(e){return oe(e)},children:"Submit"}),re?Object(q.jsx)(_.a,{color:"primary"}):null]})})]})})})]}),Object(q.jsx)(b.a,{children:Object(q.jsxs)(h.a,{children:[Object(q.jsx)(O.a,{children:"All Attribute Names"}),Object(q.jsxs)(k.a,{responsive:!0,children:[Object(q.jsx)("thead",{children:Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{children:"Attribute Name"}),Object(q.jsx)("th",{children:"Actions"})]})}),Object(q.jsx)("tbody",{children:P.map((function(e,t){return Object(q.jsxs)("tr",{children:[Object(q.jsx)("td",{children:e.attribute}),Object(q.jsxs)("td",{children:[Object(q.jsxs)(z.a,{children:[Object(q.jsx)(C.a,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(q.jsx)(l.a,{size:15})}),Object(q.jsxs)(D.a,{right:!0,children:[Object(q.jsxs)(E.a,{href:"/",onClick:function(t){be(e._id),t.preventDefault(),de(e._id)},children:[Object(q.jsx)(j.a,{className:"mr-50",size:15}),"  ",Object(q.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(q.jsxs)(E.a,{href:"/",onClick:function(t){t.preventDefault(),ue(e._id)},children:[Object(q.jsx)(u.a,{className:"mr-50",size:15})," ",Object(q.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]}),Object(q.jsxs)(T.a,{isOpen:H===e._id,toggle:function(){return de(e._id)},className:"modal-dialog-centered",modalClassName:"modal-primary",children:[Object(q.jsx)(F.a,{toggle:function(){return de(e._id)},children:"Edit"}),Object(q.jsx)(J.a,{children:Object(q.jsx)(m.a,{children:Object(q.jsx)(p.a,{children:Object(q.jsxs)(f.a,{sm:"12",children:[Object(q.jsx)(v.a,{for:"att-name",children:"Attribute Name"}),Object(q.jsxs)(g.a,{className:"input-group-merge",tag:y.a,children:[Object(q.jsx)(N.a,{addonType:"prepend",children:Object(q.jsx)(w.a,{children:Object(q.jsx)(d.a,{size:15})})}),Object(q.jsx)(A.a,{type:"text",name:"name",value:ee,onChange:function(e){return te(e.currentTarget.value)},placeholder:"Enter your Attibute name"})]})]})})})}),Object(q.jsxs)(R.a,{children:[Object(q.jsx)(S.a,{color:"primary",onClick:function(){return Oe(e._id)},children:"Submit"}),le?Object(q.jsx)(_.a,{color:"primary"}):null]})]},e._id),Object(q.jsxs)(T.a,{isOpen:c===e._id,toggle:function(){return ue(e._id)},className:"modal-dialog-centered",modalClassName:"modal-danger",children:[Object(q.jsx)(F.a,{toggle:function(){return ue(e._id)},children:"Delete"}),Object(q.jsx)(J.a,{children:"Are you sure you want to delete this?"}),Object(q.jsx)(R.a,{children:Object(q.jsx)(S.a,{color:"danger",onClick:function(){return xe(e._id)},children:"delete"})})]},e._id)]})]},t+e._id)}))})]})]})})]})}},458:function(e,t,c){"use strict";var a=c(83),r=c.n(a);t.a=r.a.create({baseURL:"http://localhost:4000"})},462:function(e,t,c){"use strict";c.d(t,"b",(function(){return l})),c.d(t,"a",(function(){return j}));var a=c(0),r=c(466),s=c(638),n=c(616),i=(c(639),c(659),c(8)),l=function(e){return Object(i.jsxs)(a.Fragment,{children:[Object(i.jsx)("div",{className:"toastify-header",children:Object(i.jsxs)("div",{className:"title-wrapper",children:[Object(i.jsx)(r.a,{size:"sm",color:"success",icon:Object(i.jsx)(s.a,{size:12})}),Object(i.jsx)("h6",{className:"toast-title",children:"Success!"})]})}),Object(i.jsx)("div",{className:"toastify-body",children:Object(i.jsx)("span",{role:"img","aria-label":"toast-text",children:e.text})})]})},j=function(e){return Object(i.jsxs)(a.Fragment,{children:[Object(i.jsx)("div",{className:"toastify-header",children:Object(i.jsxs)("div",{className:"title-wrapper",children:[Object(i.jsx)(r.a,{size:"sm",color:"danger",icon:Object(i.jsx)(n.a,{size:12})}),Object(i.jsx)("h6",{className:"toast-title",children:"Error!"})]})}),Object(i.jsx)("div",{className:"toastify-body",children:Object(i.jsx)("span",{role:"img","aria-label":"toast-text",children:e.text})})]})}},467:function(e,t,c){},468:function(e,t,c){}}]);
//# sourceMappingURL=65.b29516cc.chunk.js.map