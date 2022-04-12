(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[81],{1214:function(e,t,s){},1309:function(e,t,s){"use strict";s.r(t);var a=s(461),c=s.n(a),r=s(462),n=s(19),o=s(0),i=s(486),l=s(487),d=s(460),j=s(122),b=s(474),x=s(476),u=s(8),m=["icon","color","stats","statTitle","className"],h=function(e){var t=e.icon,s=e.color,a=e.stats,c=e.statTitle,r=e.className;Object(j.a)(e,m);return Object(u.jsx)(b.a,{className:"text-center",children:Object(u.jsxs)(x.a,{className:r,children:[Object(u.jsx)("div",{className:"avatar p-50 m-0 mb-1 ".concat(s?"bg-light-".concat(s):"bg-light-primary"),children:Object(u.jsx)("div",{className:"avatar-content",children:t})}),Object(u.jsx)("h2",{className:"font-weight-bolder",children:a}),Object(u.jsx)("p",{className:"card-text line-ellipsis",children:c})]})})},g=(s(621),s(1214),s(688)),O=s(652),p=s(592),v=s(537),f=s(489),y=s(1215);t.default=function(){var e=Object(o.useState)({services:0,orders:0,customers:0,employees:0,bookings:0,categories:0,products:0}),t=Object(n.a)(e,2),s=t[0],a=t[1];return Object(o.useEffect)((function(){var e=function(){var e=Object(r.a)(c.a.mark((function e(){var t,s,r,n,o,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/service");case 3:return t=e.sent,e.next=6,d.a.get("/auth/employee");case 6:return s=e.sent,e.next=9,d.a.get("/auth/customer");case 9:return r=e.sent,e.next=12,d.a.get("/category");case 12:return n=e.sent,e.next=15,d.a.get("/order");case 15:return o=e.sent,e.next=18,d.a.get("/booking");case 18:return i=e.sent,e.next=21,d.a.get("/product");case 21:l=e.sent,console.log(t.data.data.length),a({services:t.data.data.length,orders:o.data.data.length,customers:r.data.data.length,employees:s.data.data.length,bookings:i.data.data.length,categories:n.data.data.length,products:l.data.data.length}),e.next=29;break;case 26:e.prev=26,e.t0=e.catch(0),console.log(e.t0);case 29:case"end":return e.stop()}}),e,null,[[0,26]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsx)("div",{id:"dashboard-ecommerce",children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(l.a,{xl:"3",md:"4",sm:"6",children:Object(u.jsx)(h,{icon:Object(u.jsx)(v.a,{size:28}),color:"info",stats:s.bookings,statTitle:"Bookings"})}),Object(u.jsx)(l.a,{xl:"3",md:"4",sm:"6",children:Object(u.jsx)(h,{icon:Object(u.jsx)(g.a,{size:28}),color:"danger",stats:s.orders,statTitle:"Orders"})}),Object(u.jsx)(l.a,{xl:"3",md:"4",sm:"6",children:Object(u.jsx)(h,{icon:Object(u.jsx)(f.l,{size:28}),color:"warning",stats:s.customers,statTitle:"Customers"})}),Object(u.jsx)(l.a,{xl:"3",md:"4",sm:"6",children:Object(u.jsx)(h,{icon:Object(u.jsx)(y.a,{size:28}),color:"primary",stats:s.employees,statTitle:"Employees"})}),Object(u.jsx)(l.a,{xl:"3",md:"4",sm:"6",children:Object(u.jsx)(h,{icon:Object(u.jsx)(O.a,{size:28}),color:"danger",stats:s.services,statTitle:"Services"})}),Object(u.jsx)(l.a,{xl:"3",md:"4",sm:"6",children:Object(u.jsx)(h,{icon:Object(u.jsx)(p.c,{size:28}),color:"success",stats:s.categories,statTitle:"Categories"})}),Object(u.jsx)(l.a,{xl:"3",md:"4",sm:"6",children:Object(u.jsx)(h,{icon:Object(u.jsx)(p.b,{size:28}),color:"primary",stats:s.products,statTitle:"Products"})})]})})}},460:function(e,t,s){"use strict";var a=s(83),c=s.n(a);t.a=c.a.create({baseURL:"https://nanybackendforadmin.herokuapp.com"})},621:function(e,t,s){}}]);
//# sourceMappingURL=81.a1a0763a.chunk.js.map