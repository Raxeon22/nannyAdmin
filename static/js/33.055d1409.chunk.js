(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[33],{1133:function(e,t,a){"use strict";a.r(t);var r=a(30),n=a(2),c=a(459),s=a.n(c),o=a(460),i=a(19),l=a(0),u=a(473),d=a(509),b=(a(468),a(458)),p=a(517),h=a(510),j=a(499),f=a(462),m=a(120),O=a(472),x=a(492),y=a(480),g=a(475),v=a(487),E=a(500),N=a(486),S=a(1099),k=a(474),T=a(1167),M=a(484),w=a(479),R=a(464),C=a(494),I=a(455),L=a(482),D=a(485),P=a(512),A=a(8);t.default=function(){var e=Object(l.useState)(null),t=Object(i.a)(e,2),a=(t[0],t[1]),c=Object(l.useState)(null),F=Object(i.a)(c,2),U=(F[0],F[1]),_=Object(l.useState)(null),z=Object(i.a)(_,2),B=(z[0],z[1]),q=Object(l.useState)(null),H=Object(i.a)(q,2),K=(H[0],H[1]),Y=Object(l.useState)(""),G=Object(i.a)(Y,2),V=G[0],J=G[1],W=Object(l.useState)({text1:"",text2:"",text3:"",text4:"",video:""}),Q=Object(i.a)(W,2),X=Q[0],$=Q[1],Z=Object(l.useState)(u.EditorState.createEmpty()),ee=Object(i.a)(Z,2),te=ee[0],ae=ee[1],re=Object(l.useState)(!1),ne=Object(i.a)(re,2),ce=ne[0],se=ne[1],oe=Object(h.a)(te.getCurrentContent()),ie=Object(j.g)();Object(l.useEffect)((function(){var e=function(){var e=Object(o.a)(s.a.mark((function e(){var t,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/about",{});case 3:t=e.sent,a=t.data,r=a.data[0],J(r._id),ae(u.EditorState.createWithContent(Object(p.a)(r.text))),$({text1:r.txt1,text2:r.txt2,text3:r.txt3,text4:r.txt4,video:r.video}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var le=function(e){var t=e.target,a=t.name,c=t.value;$((function(e){return Object(n.a)(Object(n.a)({},e),{},Object(r.a)({},a,c))}))},ue={txt1:X.text1,txt2:X.text2,txt3:X.text3,txt4:X.text4,video:X.video,text:oe},de=function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),se(!0),e.next=4,b.a.put("/about/".concat(V),ue,{});case 4:e.sent.data.success?(m.c.success(Object(A.jsx)(f.b,{title:"Success",text:"Section updated Successfully!"})),ie.push("/frontend/about")):(setSuccess(!1),m.c.error(Object(A.jsx)(f.a,{title:"error",text:"Something went wrong, try again later"})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)(O.a,{children:[Object(A.jsx)(x.a,{children:Object(A.jsx)(y.a,{tag:"h4",children:"About Form"})}),Object(A.jsxs)(g.a,{children:[Object(A.jsxs)(v.a,{sm:"12",className:"my-2 p-0",children:[Object(A.jsx)("h6",{children:"About Content "}),Object(A.jsx)(d.Editor,{editorState:te,onEditorStateChange:function(e){return ae(e)}})]}),Object(A.jsx)(E.a,{children:Object(A.jsxs)(N.a,{children:[Object(A.jsx)(v.a,{md:"6",sm:"12",children:Object(A.jsxs)(S.a,{children:[Object(A.jsx)(k.a,{for:"icon",children:"Upload Icon"}),Object(A.jsx)(T.a,{onChange:function(e){return a(e.target.files[0])},name:"icon1",type:"file",id:"icon"})]})}),Object(A.jsxs)(v.a,{md:"6",sm:"12",children:[Object(A.jsx)(k.a,{for:"icon-text",children:"Icon Text"}),Object(A.jsxs)(M.a,{className:"input-group-merge",tag:S.a,children:[Object(A.jsx)(w.a,{addonType:"prepend",children:Object(A.jsx)(R.a,{children:Object(A.jsx)(D.j,{size:15})})}),Object(A.jsx)(C.a,{type:"text",name:"text1",value:X.text1,id:"icon-text",placeholder:"Enter your icon text",onChange:le})]})]}),Object(A.jsx)(v.a,{md:"6",sm:"12",children:Object(A.jsxs)(S.a,{children:[Object(A.jsx)(k.a,{for:"icon",children:"Upload Icon"}),Object(A.jsx)(T.a,{onChange:function(e){return U(e.target.files[0])},type:"file",id:"icon",name:"customFile"})]})}),Object(A.jsxs)(v.a,{md:"6",sm:"12",children:[Object(A.jsx)(k.a,{for:"icon-text",children:"Icon Text"}),Object(A.jsxs)(M.a,{className:"input-group-merge",tag:S.a,children:[Object(A.jsx)(w.a,{addonType:"prepend",children:Object(A.jsx)(R.a,{children:Object(A.jsx)(D.j,{size:15})})}),Object(A.jsx)(C.a,{type:"text",name:"text2",value:X.text2,id:"icon-text",placeholder:"Enter your icon text",onChange:le})]})]}),Object(A.jsx)(v.a,{md:"6",sm:"12",children:Object(A.jsxs)(S.a,{children:[Object(A.jsx)(k.a,{for:"icon",children:"Upload Icon"}),Object(A.jsx)(T.a,{onChange:function(e){return B(e.target.files[0])},type:"file",id:"icon",name:"customFile"})]})}),Object(A.jsxs)(v.a,{md:"6",sm:"12",children:[Object(A.jsx)(k.a,{for:"icon-text",children:"Icon Text"}),Object(A.jsxs)(M.a,{className:"input-group-merge",tag:S.a,children:[Object(A.jsx)(w.a,{addonType:"prepend",children:Object(A.jsx)(R.a,{children:Object(A.jsx)(D.j,{size:15})})}),Object(A.jsx)(C.a,{type:"text",name:"text3",value:X.text3,id:"icon-text",placeholder:"Enter your icon text",onChange:le})]})]}),Object(A.jsx)(v.a,{md:"6",sm:"12",children:Object(A.jsxs)(S.a,{children:[Object(A.jsx)(k.a,{for:"icon",children:"Upload Icon"}),Object(A.jsx)(T.a,{onChange:function(e){return K(e.target.files[0])},type:"file",id:"icon",name:"customFile"})]})}),Object(A.jsxs)(v.a,{md:"6",sm:"12",children:[Object(A.jsx)(k.a,{for:"icon-text",children:"Icon Text"}),Object(A.jsxs)(M.a,{className:"input-group-merge",tag:S.a,children:[Object(A.jsx)(w.a,{addonType:"prepend",children:Object(A.jsx)(R.a,{children:Object(A.jsx)(D.j,{size:15})})}),Object(A.jsx)(C.a,{type:"text",name:"text4",value:X.text4,id:"icon-text",placeholder:"Enter your icon text",onChange:le})]})]}),Object(A.jsxs)(v.a,{sm:"12",children:[Object(A.jsx)(k.a,{for:"url",children:"Video Url"}),Object(A.jsxs)(M.a,{className:"input-group-merge",tag:S.a,children:[Object(A.jsx)(w.a,{addonType:"prepend",children:Object(A.jsx)(R.a,{children:Object(A.jsx)(P.e,{size:15})})}),Object(A.jsx)(C.a,{type:"text",name:"video",value:X.video,onChange:le,placeholder:"Enter your Video Url"})]})]}),Object(A.jsx)(v.a,{sm:"12",className:"mt-2",children:Object(A.jsxs)(S.a,{className:"d-flex mb-0",children:[Object(A.jsx)(I.a.Ripple,{className:"mr-1",color:"primary",type:"submit",onClick:function(e){return de(e)},children:"Submit"}),ce?Object(A.jsx)(L.a,{color:"primary"}):null]})})]})})]})]})}},458:function(e,t,a){"use strict";var r=a(83),n=a.n(r);t.a=n.a.create({baseURL:"http://localhost:4000"})},462:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return l}));var r=a(0),n=a(466),c=a(638),s=a(616),o=(a(639),a(659),a(8)),i=function(e){return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsx)("div",{className:"toastify-header",children:Object(o.jsxs)("div",{className:"title-wrapper",children:[Object(o.jsx)(n.a,{size:"sm",color:"success",icon:Object(o.jsx)(c.a,{size:12})}),Object(o.jsx)("h6",{className:"toast-title",children:"Success!"})]})}),Object(o.jsx)("div",{className:"toastify-body",children:Object(o.jsx)("span",{role:"img","aria-label":"toast-text",children:e.text})})]})},l=function(e){return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsx)("div",{className:"toastify-header",children:Object(o.jsxs)("div",{className:"title-wrapper",children:[Object(o.jsx)(n.a,{size:"sm",color:"danger",icon:Object(o.jsx)(s.a,{size:12})}),Object(o.jsx)("h6",{className:"toast-title",children:"Error!"})]})}),Object(o.jsx)("div",{className:"toastify-body",children:Object(o.jsx)("span",{role:"img","aria-label":"toast-text",children:e.text})})]})}},464:function(e,t,a){"use strict";var r=a(18),n=a(23),c=a(0),s=a.n(c),o=a(5),i=a.n(o),l=a(62),u=a.n(l),d=a(82),b={tag:d.q,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,a=e.cssModule,c=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),i=Object(d.m)(u()(t,"input-group-text"),a);return s.a.createElement(c,Object(r.a)({},o,{className:i}))};p.propTypes=b,p.defaultProps={tag:"span"},t.a=p},468:function(e,t,a){},472:function(e,t,a){"use strict";var r=a(18),n=a(23),c=a(0),s=a.n(c),o=a(5),i=a.n(o),l=a(62),u=a.n(l),d=a(82),b={tag:d.q,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var t=e.className,a=e.cssModule,c=e.color,o=e.body,i=e.inverse,l=e.outline,b=e.tag,p=e.innerRef,h=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),j=Object(d.m)(u()(t,"card",!!i&&"text-white",!!o&&"card-body",!!c&&(l?"border":"bg")+"-"+c),a);return s.a.createElement(b,Object(r.a)({},h,{className:j,ref:p}))};p.propTypes=b,p.defaultProps={tag:"div"},t.a=p},475:function(e,t,a){"use strict";var r=a(18),n=a(23),c=a(0),s=a.n(c),o=a(5),i=a.n(o),l=a(62),u=a.n(l),d=a(82),b={tag:d.q,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var t=e.className,a=e.cssModule,c=e.innerRef,o=e.tag,i=Object(n.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.m)(u()(t,"card-body"),a);return s.a.createElement(o,Object(r.a)({},i,{className:l,ref:c}))};p.propTypes=b,p.defaultProps={tag:"div"},t.a=p},479:function(e,t,a){"use strict";var r=a(18),n=a(23),c=a(0),s=a.n(c),o=a(5),i=a.n(o),l=a(62),u=a.n(l),d=a(82),b=a(464),p={tag:d.q,addonType:i.a.oneOf(["prepend","append"]).isRequired,children:i.a.node,className:i.a.string,cssModule:i.a.object},h=function(e){var t=e.className,a=e.cssModule,c=e.tag,o=e.addonType,i=e.children,l=Object(n.a)(e,["className","cssModule","tag","addonType","children"]),p=Object(d.m)(u()(t,"input-group-"+o),a);return"string"===typeof i?s.a.createElement(c,Object(r.a)({},l,{className:p}),s.a.createElement(b.a,{children:i})):s.a.createElement(c,Object(r.a)({},l,{className:p,children:i}))};h.propTypes=p,h.defaultProps={tag:"div"},t.a=h},480:function(e,t,a){"use strict";var r=a(18),n=a(23),c=a(0),s=a.n(c),o=a(5),i=a.n(o),l=a(62),u=a.n(l),d=a(82),b={tag:d.q,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,a=e.cssModule,c=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),i=Object(d.m)(u()(t,"card-title"),a);return s.a.createElement(c,Object(r.a)({},o,{className:i}))};p.propTypes=b,p.defaultProps={tag:"div"},t.a=p},486:function(e,t,a){"use strict";var r=a(18),n=a(23),c=a(0),s=a.n(c),o=a(5),i=a.n(o),l=a(62),u=a.n(l),d=a(82),b=i.a.oneOfType([i.a.number,i.a.string]),p={tag:d.q,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},h={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e){var t=e.className,a=e.cssModule,c=e.noGutters,o=e.tag,i=e.form,l=e.widths,b=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];l.forEach((function(t,a){var r=e[t];if(delete b[t],r){var n=!a;p.push(n?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var h=Object(d.m)(u()(t,c?"no-gutters":null,i?"form-row":"row",p),a);return s.a.createElement(o,Object(r.a)({},b,{className:h}))};j.propTypes=p,j.defaultProps=h,t.a=j},487:function(e,t,a){"use strict";var r=a(18),n=a(23),c=a(0),s=a.n(c),o=a(5),i=a.n(o),l=a(62),u=a.n(l),d=a(82),b=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:b,offset:b})]),h={tag:d.q,xs:p,sm:p,md:p,lg:p,xl:p,className:i.a.string,cssModule:i.a.object,widths:i.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},m=function(e){var t=e.className,a=e.cssModule,c=e.widths,o=e.tag,i=Object(n.a)(e,["className","cssModule","widths","tag"]),l=[];c.forEach((function(t,r){var n=e[t];if(delete i[t],n||""===n){var c=!r;if(Object(d.k)(n)){var s,o=c?"-":"-"+t+"-",b=f(c,t,n.size);l.push(Object(d.m)(u()(((s={})[b]=n.size||""===n.size,s["order"+o+n.order]=n.order||0===n.order,s["offset"+o+n.offset]=n.offset||0===n.offset,s)),a))}else{var p=f(c,t,n);l.push(p)}}})),l.length||l.push("col");var b=Object(d.m)(u()(t,l),a);return s.a.createElement(o,Object(r.a)({},i,{className:b}))};m.propTypes=h,m.defaultProps=j,t.a=m},500:function(e,t,a){"use strict";var r=a(18),n=a(23),c=a(121),s=a(119),o=a(0),i=a.n(o),l=a(5),u=a.n(l),d=a(62),b=a.n(d),p=a(82),h={children:u.a.node,inline:u.a.bool,tag:p.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(c.a)(a)),a.submit=a.submit.bind(Object(c.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,c=e.inline,s=e.tag,o=e.innerRef,l=Object(n.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(p.m)(b()(t,!!c&&"form-inline"),a);return i.a.createElement(s,Object(r.a)({},l,{ref:o,className:u}))},t}(o.Component);j.propTypes=h,j.defaultProps={tag:"form"},t.a=j},517:function(e,t,a){"use strict";function r(e,t,a){for(var r=e.text,c=e.characterMeta,s=t.length,o=a.length,i=[],l=c.slice(0,0),u=0,d=r.indexOf(t);-1!==d;)i.push(r.slice(u,d)+a),l=l.concat(c.slice(u,d),n(c.slice(d,d+1),o)),u=d+s,d=r.indexOf(t,u);return i.push(r.slice(u)),l=l.concat(c.slice(u)),{text:i.join(""),characterMeta:l}}function n(e,t){for(var a=e.slice(0,0);t-- >0;)a=a.concat(e);return a}a.d(t,"a",(function(){return C}));var c=a(473),s=a(465),o=a(504);var i={a:1,abbr:1,area:1,audio:1,b:1,bdi:1,bdo:1,br:1,button:1,canvas:1,cite:1,code:1,command:1,datalist:1,del:1,dfn:1,em:1,embed:1,i:1,iframe:1,img:1,input:1,ins:1,kbd:1,keygen:1,label:1,map:1,mark:1,meter:1,noscript:1,object:1,output:1,progress:1,q:1,ruby:1,s:1,samp:1,script:1,select:1,small:1,span:1,strong:1,sub:1,sup:1,textarea:1,time:1,u:1,var:1,video:1,wbr:1,acronym:1,applet:1,basefont:1,big:1,font:1,isindex:1,strike:1,style:1,tt:1},l={area:1,base:1,br:1,col:1,colgroup:1,command:1,dl:1,embed:1,head:1,hgroup:1,hr:1,iframe:1,img:1,input:1,keygen:1,link:1,meta:1,ol:1,optgroup:1,option:1,param:1,script:1,select:1,source:1,style:1,table:1,tbody:1,textarea:1,tfoot:1,thead:1,title:1,tr:1,track:1,ul:1,wbr:1,basefont:1,dialog:1,dir:1,isindex:1},u={img:1};function d(e){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function b(e,t){var a=Object.keys(e);return Object.getOwnPropertySymbols&&a.push.apply(a,Object.getOwnPropertySymbols(e)),t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f=/^data:/i,m=Object(s.OrderedSet)(),O=new c.ContentBlock({key:Object(c.genKey)(),text:"",type:o.a.UNSTYLED,characterList:Object(s.List)(),depth:0}),x=/(\r\n|\r|\n)/g,y="\r",g=/^data-([a-z0-9-]+)$/,v={a:{href:"url",rel:"rel",target:"target",title:"title"},img:{src:"src",alt:"alt",width:"width",height:"height"}},E=function(e,t){var a={};if(v.hasOwnProperty(e))for(var r=v[e],n=0;n<t.attributes.length;n++){var c=t.attributes[n],s=c.name,o=c.value;if("string"===typeof o){var i=o;if(r.hasOwnProperty(s))a[r[s]]=i;else g.test(s)&&(a[s]=i)}}return a},N={a:function(e,t,a){var r,n=E(t,a);if(null!=(r=n.url)&&!r.match(f))return e.createEntity(o.b.LINK,n)},img:function(e,t,a){var r=E(t,a);if(null!=r.src)return e.createEntity(o.b.IMAGE,r)}},S=function(){function e(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};p(this,e),j(this,"contentStateForEntities",void 0),j(this,"blockStack",void 0),j(this,"blockList",void 0),j(this,"depth",void 0),j(this,"options",void 0),j(this,"inlineCreators",{Style:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return{type:"STYLE",style:e}})),Entity:function(e,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"MUTABLE";return{type:"ENTITY",entityKey:t.createEntity(e,k(a),r)}}}),this.options=a,this.contentStateForEntities=c.ContentState.createFromBlockArray([]),this.blockStack=[],this.blockList=[],this.depth=0}var t,a,n;return t=e,a=[{key:"process",value:function(e){this.processBlockElement(e);var t=[];return this.blockList.forEach((function(e){var a=function(e){var t="",a=Object(s.Seq)();return e.forEach((function(e){t+=e.text,a=a.concat(e.characterMeta)})),{text:t,characterMeta:a}}(e.textFragments),n=a.text,o=a.characterMeta,i=!1;if(n===y&&(i=!0,n=""),"pre"===e.tagName){var l=function(e,t){return"\n"===e.charAt(0)&&(e=e.slice(1),t=t.slice(1)),{text:e,characterMeta:t}}(n,o);n=l.text,o=l.characterMeta}else{var u=function(e,t){var a=function(e,t){for(;" "===e.charAt(0);)e=e.slice(1),t=t.slice(1);return{text:e,characterMeta:t}}(e=e.replace(/[ \t\n]/g," "),t);e=a.text,t=a.characterMeta;var n=function(e,t){for(;" "===e.slice(-1);)e=e.slice(0,-1),t=t.slice(0,-1);return{text:e,characterMeta:t}}(e,t);e=n.text,t=n.characterMeta;for(var c=e.length;c--;)" "===e.charAt(c)&&" "===e.charAt(c-1)&&(e=e.slice(0,c)+e.slice(c+1),t=t.slice(0,c).concat(t.slice(c+1)));var s=r({text:e,characterMeta:t},"\r ",y);e=s.text,t=s.characterMeta;var o=r({text:e,characterMeta:t}," \r",y);return e=o.text,t=o.characterMeta,{text:e,characterMeta:t}}(n,o);n=u.text,o=u.characterMeta}((n=n.split(y).join("\n")).length||i)&&t.push(new c.ContentBlock({key:Object(c.genKey)(),text:n,type:e.type,characterList:o.toList(),depth:e.depth,data:e.data?Object(s.Map)(e.data):Object(s.Map)()}))})),t.length||(t=[O]),c.ContentState.createFromBlockArray(t,this.contentStateForEntities.getEntityMap())}},{key:"getBlockTypeFromTagName",value:function(e){var t=this.options.blockTypes;if(t&&t[e])return t[e];switch(e){case"li":return"ol"===this.blockStack.slice(-1)[0].tagName?o.a.ORDERED_LIST_ITEM:o.a.UNORDERED_LIST_ITEM;case"blockquote":return o.a.BLOCKQUOTE;case"h1":return o.a.HEADER_ONE;case"h2":return o.a.HEADER_TWO;case"h3":return o.a.HEADER_THREE;case"h4":return o.a.HEADER_FOUR;case"h5":return o.a.HEADER_FIVE;case"h6":return o.a.HEADER_SIX;case"pre":return o.a.CODE;case"figure":return o.a.ATOMIC;default:return o.a.UNSTYLED}}},{key:"processBlockElement",value:function(e){if(e){var t,a,r=this.options.customBlockFn,n=e.nodeName.toLowerCase();if(r){var c=r(e);null!=c&&(t=c.type,a=c.data)}var s=!0;if(null==t&&(s=!1,t=this.getBlockTypeFromTagName(n)),t===o.a.CODE){var i=e.getAttribute("data-language");i&&(a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){j(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a,{language:i}))}var u=function(e){switch(e){case o.a.UNORDERED_LIST_ITEM:case o.a.ORDERED_LIST_ITEM:return!0;default:return!1}}(t),d=!l.hasOwnProperty(n);if(!s&&t===o.a.UNSTYLED){var p=this.blockStack.slice(-1)[0];p&&(t=p.type)}var h={tagName:n,textFragments:[],type:t,styleStack:[m],entityStack:[null],depth:u?this.depth:0,data:a};d&&(this.blockList.push(h),u&&(this.depth+=1)),this.blockStack.push(h),null!=e.childNodes&&Array.from(e.childNodes).forEach(this.processNode,this),this.blockStack.pop(),d&&u&&(this.depth-=1)}}},{key:"processInlineElement",value:function(e){var t=e.nodeName.toLowerCase();if("br"!==t){var a=this.blockStack.slice(-1)[0],r=a.styleStack.slice(-1)[0],n=a.entityStack.slice(-1)[0],c=this.options.customInlineFn,s=c?c(e,this.inlineCreators):null;if(null!=s)switch(s.type){case"STYLE":r=r.add(s.style);break;case"ENTITY":n=s.entityKey}else r=function(e,t,a){switch(t){case"b":case"strong":return e.add(o.c.BOLD);case"i":case"em":return e.add(o.c.ITALIC);case"u":case"ins":return e.add(o.c.UNDERLINE);case"code":return e.add(o.c.CODE);case"s":case"del":return e.add(o.c.STRIKETHROUGH);default:return a&&a[t]?e.add(a[t]):e}}(r,t,this.options.elementStyles),N.hasOwnProperty(t)&&(n=N[t](this,t,e)||n);a.styleStack.push(r),a.entityStack.push(n),null!=e.childNodes&&Array.from(e.childNodes).forEach(this.processNode,this),u.hasOwnProperty(t)&&this.processText("\xa0"),a.entityStack.pop(),a.styleStack.pop()}else this.processText(y)}},{key:"processTextNode",value:function(e){var t=e.nodeValue;t=(t=t.replace(x,"\n")).split("\u200b").join(y),this.processText(t)}},{key:"processText",value:function(e){var t=this.blockStack.slice(-1)[0],a=t.styleStack.slice(-1)[0],r=t.entityStack.slice(-1)[0],n=c.CharacterMetadata.create({style:a,entity:r}),o=Object(s.Repeat)(n,e.length);t.textFragments.push({text:e,characterMeta:o})}},{key:"processNode",value:function(e){if(1===e.nodeType){var t=e,a=t.nodeName.toLowerCase();i.hasOwnProperty(a)?this.processInlineElement(t):this.processBlockElement(t)}else 3===e.nodeType&&this.processTextNode(e)}},{key:"createEntity",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"MUTABLE";return this.contentStateForEntities=this.contentStateForEntities.createEntity(e,a,t),this.contentStateForEntities.getLastCreatedEntityKey()}}],a&&h(t.prototype,a),n&&h(t,n),e}();function k(e){var t={};if(null!==e&&"object"===d(e)&&!Array.isArray(e))for(var a=e,r=0,n=Object.keys(a);r<n.length;r++){var c=n[r],s=a[c];"string"===typeof s&&(t[c]=s)}return t}function T(e,t){return new S(t).process(e)}function M(e){var t;"undefined"!==typeof DOMParser?t=(new DOMParser).parseFromString(e,"text/html"):(t=document.implementation.createHTMLDocument("")).documentElement&&(t.documentElement.innerHTML=e);return t.body||t.createElement("body")}function w(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var R={};function C(e,t){var a=t||R,r=a.parser,n=w(a,["parser"]);return null==r&&(r=M),T(r(e),n)}}}]);
//# sourceMappingURL=33.055d1409.chunk.js.map