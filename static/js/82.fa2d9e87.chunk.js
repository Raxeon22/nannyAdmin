(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[82],{1250:function(e,t,a){"use strict";a.r(t);var c=a(461),n=a.n(c),s=a(462),r=a(19),i=a(0),l=a(481),j=a.n(l),o=a(497),d=a.n(o),u=a(499),b=(a(469),a(484),a(520)),O=a(683),h=a(666),x=a(694),m=a(460),f=a(482),p=a(464),g=a(120),v=a(474),y=a(476),w=a(479),N=a(457),S=a(496),k=a(492),C=a(493),F=a(502),_=a(486),D=a(487),z=a(494),B=a(480),E=a(1303),U=a(1304),A=a(1221),J=a(1223),P=a(8);t.default=function(){var e=Object(i.useState)(null),t=Object(r.a)(e,2),a=t[0],c=t[1],l=Object(i.useState)(null),o=Object(r.a)(l,2),L=o[0],R=o[1],V=Object(i.useState)(null),q=Object(r.a)(V,2),G=q[0],H=q[1],I=Object(i.useState)([]),K=Object(r.a)(I,2),M=K[0],Q=K[1],T=Object(i.useState)([]),W=Object(r.a)(T,2),X=W[0],Y=W[1],Z=Object(i.useState)([]),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ae=Object(i.useState)("French"),ce=Object(r.a)(ae,2),ne=ce[0],se=ce[1];Object(i.useEffect)((function(){var e=function(){var e=Object(s.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/banner/web?lang=".concat(ne));case 2:t=e.sent,a=t.data,Q(a.data),console.log(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a,L,G]);var re=function(e){c(a!==e?e:null)},ie=function(e){R(L!==e?e:null)},le=function(e){H(G!==e?e:null)},je=Object(i.useState)(null),oe=Object(r.a)(je,2),de=oe[0],ue=oe[1],be=Object(i.useState)(null),Oe=Object(r.a)(be,2),he=Oe[0],xe=Oe[1],me=new j.a({meta:{type:"avatar"},restrictions:{maxNumberOfFiles:1},autoProceed:!0});me.use(d.a),me.on("thumbnail:generated",(function(e,t){ue(e.data),te(t)}));var fe=new j.a({meta:{type:"avatar"},restrictions:{maxNumberOfFiles:1},autoProceed:!0});fe.use(d.a),fe.on("thumbnail:generated",(function(e,t){xe(e.data),Y(t)}));var pe=new FormData;pe.append("file",de),pe.append("lang",ne);var ge=function(){var e=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,m.a.post("/banner/web",pe,{});case 3:e.sent.data.success?(g.c.success(Object(P.jsx)(p.b,{title:"Success",text:"Banner Uploaded Successfully!"})),H(null)):g.c.error(Object(P.jsx)(p.a,{title:"error",text:"Something went wrong, try again later"}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ve=function(){var e=Object(s.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.delete("/banner?id=".concat(t));case 2:a=e.sent,console.log(a),a.data.success?(g.c.success(Object(P.jsx)(p.b,{title:"Success",text:"Banner Deleted Successfully!"})),c(null)):g.c.error(Object(P.jsx)(p.a,{title:"error",text:"Something went wrong, try again later"}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ye=new FormData;ye.append("file",he);var we=function(){var e=Object(s.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.put("/banner/".concat(t),ye,{});case 2:a=e.sent,console.log(a),a.data.success?(g.c.success(Object(P.jsx)(p.b,{title:"Success",text:"Banner Updated Successfully!"})),R(null)):g.c.error(Object(P.jsx)(p.a,{title:"error",text:"Something went wrong, try again later"}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(v.a,{children:Object(P.jsxs)(y.a,{children:[Object(P.jsx)(w.a,{children:"All Desktop Banners "}),Object(P.jsxs)("div",{className:"d-flex",children:[Object(P.jsx)(b.a,{className:"react-select w-25",defaultValue:ne,options:[{value:"French",label:"French"},{value:"English",label:"English"}],style:{width:"150px"},onChange:function(e){return se(e.value)}}),Object(P.jsx)("div",{className:"ml-auto mb-2",children:Object(P.jsx)(N.a,{color:"primary",onClick:function(){return le(0)},children:"Add new Banner"})})]}),Object(P.jsxs)(S.a,{isOpen:0===G,toggle:function(){return le(0)},className:"modal-dialog-centered",modalClassName:"modal-primary",children:[Object(P.jsx)(k.a,{toggle:function(){return le(0)},children:"Upload"}),Object(P.jsx)(C.a,{children:Object(P.jsx)(F.a,{children:Object(P.jsx)(_.a,{children:Object(P.jsxs)(D.a,{sm:"12",className:"mt-2",children:[Object(P.jsx)("h6",{children:" Upload Banners "}),Object(P.jsx)(u.a,{uppy:me}),null!==de?Object(P.jsx)("img",{className:"rounded mt-2",src:ee,alt:"avatar"}):null]})})})}),Object(P.jsx)(z.a,{children:Object(P.jsx)(N.a,{color:"primary",onClick:function(e){return ge(e)},children:"Submit"})})]},0),Object(P.jsxs)(B.a,{responsive:!0,children:[Object(P.jsx)("thead",{children:Object(P.jsxs)("tr",{children:[Object(P.jsx)("th",{children:"S.No"}),Object(P.jsx)("th",{children:"Banners"}),Object(P.jsx)("th",{children:"Actions"})]})}),Object(P.jsx)("tbody",{children:M.map((function(e,t){return Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{children:t+1}),Object(P.jsxs)("td",{children:[" ",Object(P.jsx)("img",{src:f.a+e.image,width:"auto",height:"200",alt:""})," "]}),Object(P.jsxs)("td",{children:[Object(P.jsxs)(E.a,{children:[Object(P.jsx)(U.a,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(P.jsx)(O.a,{size:15})}),Object(P.jsxs)(A.a,{right:!0,children:[Object(P.jsxs)(J.a,{href:"/",onClick:function(t){t.preventDefault(),ie(e._id)},children:[Object(P.jsx)(h.a,{className:"mr-50",size:15}),"  ",Object(P.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(P.jsxs)(J.a,{href:"/",onClick:function(t){t.preventDefault(),re(e._id)},children:[Object(P.jsx)(x.a,{className:"mr-50",size:15})," ",Object(P.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]}),Object(P.jsxs)(S.a,{isOpen:L===e._id,toggle:function(){return ie(e.id)},className:"modal-dialog-centered",modalClassName:"modal-primary",children:[Object(P.jsx)(k.a,{toggle:function(){return ie(e._id)},children:"Edit"}),Object(P.jsx)(C.a,{children:Object(P.jsx)(F.a,{children:Object(P.jsx)(_.a,{children:Object(P.jsxs)(D.a,{sm:"12",className:"mt-2",children:[Object(P.jsx)("h6",{children:" edit Banner "}),Object(P.jsx)(u.a,{uppy:fe}),null!==he?Object(P.jsx)("img",{className:"rounded mt-2",src:X,alt:"avatar"}):null]})})})}),Object(P.jsx)(z.a,{children:Object(P.jsx)(N.a,{color:"primary",onClick:function(){return we(e._id)},children:"Submit"})})]},e._id),Object(P.jsxs)(S.a,{isOpen:a===e._id,toggle:function(){return re(e._id)},className:"modal-dialog-centered",modalClassName:"modal-danger",children:[Object(P.jsx)(k.a,{toggle:function(){return re(e._id)},children:"Delete"}),Object(P.jsx)(C.a,{children:"Are you sure you want to delete this?"}),Object(P.jsx)(z.a,{children:Object(P.jsx)(N.a,{color:"danger",onClick:function(){return ve(e._id)},children:"delete"})})]},e.id)]})]},t)}))})]})]})})})}},460:function(e,t,a){"use strict";var c=a(83),n=a.n(c);t.a=n.a.create({baseURL:"https://nanybackendforadmin.herokuapp.com"})},464:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return j}));var c=a(0),n=a(467),s=a(647),r=a(624),i=(a(648),a(674),a(8)),l=function(e){return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)("div",{className:"toastify-header",children:Object(i.jsxs)("div",{className:"title-wrapper",children:[Object(i.jsx)(n.a,{size:"sm",color:"success",icon:Object(i.jsx)(s.a,{size:12})}),Object(i.jsx)("h6",{className:"toast-title",children:"Success!"})]})}),Object(i.jsx)("div",{className:"toastify-body",children:Object(i.jsx)("span",{role:"img","aria-label":"toast-text",children:e.text})})]})},j=function(e){return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)("div",{className:"toastify-header",children:Object(i.jsxs)("div",{className:"title-wrapper",children:[Object(i.jsx)(n.a,{size:"sm",color:"danger",icon:Object(i.jsx)(r.a,{size:12})}),Object(i.jsx)("h6",{className:"toast-title",children:"Error!"})]})}),Object(i.jsx)("div",{className:"toastify-body",children:Object(i.jsx)("span",{role:"img","aria-label":"toast-text",children:e.text})})]})}},469:function(e,t,a){}}]);
//# sourceMappingURL=82.fa2d9e87.chunk.js.map