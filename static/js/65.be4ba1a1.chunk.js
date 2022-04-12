(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[65],{1121:function(e,a,c){},1296:function(e,a,c){"use strict";c.r(a);var s=c(19),t=c(0),r=c(1285),n=c(1225),l=c(1226),i=c(644),j=c(677),d=c(8),b=function(e){var a=e.activeTab,c=e.toggleTab;return Object(d.jsxs)(r.a,{className:"nav-left",pills:!0,vertical:!0,children:[Object(d.jsx)(n.a,{children:Object(d.jsxs)(l.a,{active:"1"===a,onClick:function(){return c("1")},children:[Object(d.jsx)(i.a,{size:18,className:"mr-1"}),Object(d.jsx)("span",{className:"font-weight-bold",children:"Profile"})]})}),Object(d.jsx)(n.a,{children:Object(d.jsxs)(l.a,{active:"2"===a,onClick:function(){return c("2")},children:[Object(d.jsx)(j.a,{size:18,className:"mr-1"}),Object(d.jsx)("span",{className:"font-weight-bold",children:"Change Password"})]})})]})},o=c(83),m=c.n(o),u=c(62),h=c.n(u),O=(c(1014),c(556)),x=c(502),p=c(486),f=c(487),g=c(1220),v=c(475),N=c(490),w=c(457),y=(c(770),c(552)),C=(c(522),c(467),c(675),c(1227)),P=function(e){var a=e.data,c=Object(O.c)(),r=c.register,n=c.errors,l=c.handleSubmit,i=c.control,j=c.setValue,b=c.trigger,o=Object(t.useState)(a.avatar?a.avatar:""),m=Object(s.a)(o,2),u=m[0],y=m[1];return Object(d.jsxs)(t.Fragment,{children:[Object(d.jsxs)(C.a,{children:[Object(d.jsx)(C.a,{className:"mr-25",left:!0,children:Object(d.jsx)(C.a,{object:!0,className:"rounded mr-50",src:u,alt:"Generic placeholder image",height:"80",width:"80"})}),Object(d.jsxs)(C.a,{className:"mt-75 ml-1",body:!0,children:[Object(d.jsxs)(w.a.Ripple,{tag:v.a,className:"mr-75",size:"sm",color:"primary",children:["Upload",Object(d.jsx)(N.a,{type:"file",onChange:function(e){var a=new FileReader,c=e.target.files;a.onload=function(){y(a.result)},a.readAsDataURL(c[0])},hidden:!0,accept:"image/*"})]}),Object(d.jsx)("p",{children:"Allowed JPG, GIF or PNG. Max size of 800kB"})]})]}),Object(d.jsx)(x.a,{className:"mt-2",onSubmit:l((function(e){return b()})),children:Object(d.jsxs)(p.a,{children:[Object(d.jsx)(f.a,{sm:"12",children:Object(d.jsxs)(g.a,{children:[Object(d.jsx)(v.a,{for:"name",children:"Admin Name"}),Object(d.jsx)(O.a,{defaultValue:a.fullName,control:i,as:N.a,id:"name",name:"fullName",placeholder:"Name",innerRef:r({required:!0}),onChange:function(e){return j("fullName",e.target.value)},className:h()({"is-invalid":n.fullName})})]})}),Object(d.jsx)(f.a,{sm:"12",children:Object(d.jsxs)(g.a,{children:[Object(d.jsx)(v.a,{for:"email",children:"Email"}),Object(d.jsx)(O.a,{defaultValue:a.email,control:i,as:N.a,type:"email",id:"email",name:"email",placeholder:"Email",innerRef:r({required:!0}),onChange:function(e){return j("email",e.target.value)},className:h()({"is-invalid":n.email})})]})}),Object(d.jsxs)(f.a,{className:"mt-2",sm:"12",children:[Object(d.jsx)(w.a.Ripple,{type:"submit",className:"mr-1",color:"primary",children:"Save changes"}),Object(d.jsx)(w.a.Ripple,{color:"secondary",outline:!0,children:"Cancel"})]})]})})]})},S=c(1216),R=c(1119),F=c(533),q=function(){var e=S.a().shape({"old-password":S.c().required(),"new-password":S.c().required(),"retype-new-password":S.c().required().oneOf([S.b("new-password"),null],"Passwords must match")}),a=Object(O.c)({resolver:Object(R.yupResolver)(e)}),c=a.register,s=a.errors,t=a.handleSubmit,r=a.trigger;return Object(d.jsxs)(x.a,{onSubmit:t((function(){return r()})),children:[Object(d.jsx)(p.a,{children:Object(d.jsx)(f.a,{sm:"12",children:Object(d.jsx)(g.a,{children:Object(d.jsx)(F.a,{label:"Current Password",htmlFor:"old-password",name:"old-password",innerRef:c({required:!0}),className:h()("input-group-merge",{"is-invalid":s["old-password"]})})})})}),Object(d.jsxs)(p.a,{children:[Object(d.jsx)(f.a,{sm:"6",children:Object(d.jsx)(g.a,{children:Object(d.jsx)(F.a,{label:"New Password",htmlFor:"new-password",name:"new-password",innerRef:c({required:!0}),className:h()("input-group-merge",{"is-invalid":s["new-password"]})})})}),Object(d.jsx)(f.a,{sm:"6",children:Object(d.jsx)(g.a,{children:Object(d.jsx)(F.a,{label:"Confirm Password",htmlFor:"retype-new-password",name:"retype-new-password",innerRef:c({required:!0}),className:h()("input-group-merge",{"is-invalid":s["retype-new-password"]})})})}),Object(d.jsxs)(f.a,{className:"mt-1",sm:"12",children:[Object(d.jsx)(w.a.Ripple,{type:"submit",className:"mr-1",color:"primary",children:"Save changes"}),Object(d.jsx)(w.a.Ripple,{color:"secondary",outline:!0,children:"Cancel"})]})]})]})},z=(c(1302),c(474)),T=c(476),k=c(1286),A=c(1287);c(1121),a.default=function(){var e=Object(t.useState)("1"),a=Object(s.a)(e,2),c=a[0],r=a[1],n=Object(t.useState)(null),l=Object(s.a)(n,2),i=l[0],j=l[1];return Object(t.useEffect)((function(){m.a.get("/account-setting/data").then((function(e){return j(e.data)}))}),[]),Object(d.jsxs)(t.Fragment,{children:[Object(d.jsx)(y.a,{breadCrumbTitle:"Account Settings",breadCrumbParent:"Pages",breadCrumbActive:"Account Settings"}),null!==i?Object(d.jsxs)(p.a,{children:[Object(d.jsx)(f.a,{className:"mb-2 mb-md-0",md:"3",children:Object(d.jsx)(b,{activeTab:c,toggleTab:function(e){r(e)}})}),Object(d.jsx)(f.a,{md:"9",children:Object(d.jsx)(z.a,{children:Object(d.jsx)(T.a,{children:Object(d.jsxs)(k.a,{activeTab:c,children:[Object(d.jsx)(A.a,{tabId:"1",children:Object(d.jsx)(P,{data:i.general})}),Object(d.jsx)(A.a,{tabId:"2",children:Object(d.jsx)(q,{})})]})})})})]}):null]})}},533:function(e,a,c){"use strict";var s=c(2),t=c(30),r=c(19),n=c(122),l=c(0),i=c(62),j=c.n(i),d=c(668),b=c(667),o=c(475),m=c(483),u=c(490),h=c(478),O=c(466),x=c(8),p=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName"],f=function(e){var a=e.label,c=e.hideIcon,i=e.showIcon,f=e.visible,g=e.className,v=e.htmlFor,N=e.placeholder,w=e.iconSize,y=e.inputClassName,C=Object(n.a)(e,p),P=Object(l.useState)(f),S=Object(r.a)(P,2),R=S[0],F=S[1];return Object(x.jsxs)(l.Fragment,{children:[a?Object(x.jsx)(o.a,{for:v,children:a}):null,Object(x.jsxs)(m.a,{className:j()(Object(t.a)({},g,g)),children:[Object(x.jsx)(u.a,Object(s.a)(Object(s.a)({type:!1===R?"password":"text",placeholder:N||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:j()(Object(t.a)({},y,y))},a&&v?{id:v}:{}),C)),Object(x.jsx)(h.a,{addonType:"append",onClick:function(){return F(!R)},children:Object(x.jsx)(O.a,{className:"cursor-pointer",children:function(){var e=w||14;return!1===R?c||Object(x.jsx)(d.a,{size:e}):i||Object(x.jsx)(b.a,{size:e})}()})})]})]})};a.a=f,f.defaultProps={visible:!1}},552:function(e,a,c){"use strict";var s=c(465),t=c(761),r=c(762),n=c(8);a.a=function(e){var a=e.breadCrumbTitle,c=e.breadCrumbParent,l=e.breadCrumbParent2,i=e.breadCrumbParent3,j=e.breadCrumbActive;return Object(n.jsx)("div",{className:"content-header row",children:Object(n.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(n.jsx)("div",{className:"row breadcrumbs-top",children:Object(n.jsxs)("div",{className:"col-12",children:[a?Object(n.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(n.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(n.jsxs)(t.a,{children:[Object(n.jsx)(r.a,{tag:"li",children:Object(n.jsx)(s.b,{to:"/",children:"Home"})}),Object(n.jsx)(r.a,{tag:"li",className:"text-primary",children:c}),l?Object(n.jsx)(r.a,{tag:"li",className:"text-primary",children:l}):"",i?Object(n.jsx)(r.a,{tag:"li",className:"text-primary",children:i}):"",Object(n.jsx)(r.a,{tag:"li",active:!0,children:j})]})})]})})})})}},770:function(e,a,c){}}]);
//# sourceMappingURL=65.be4ba1a1.chunk.js.map