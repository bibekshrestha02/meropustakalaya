(this.webpackJsonpmeropustakalaya=this.webpackJsonpmeropustakalaya||[]).push([[17],{303:function(e,t,n){e.exports={button:"style_button__gUISQ",outLineButton:"style_outLineButton__1ilmX",title:"style_title__2QX4I",titleResponsive:"style_titleResponsive__qndZA",bookMark:"style_bookMark__1mP2L",rating:"style_rating__2e3ns",logo:"style_logo__3U8MO",profileImage:"style_profileImage__2SgI4",profileImage_form:"style_profileImage_form__2gE_b",deleteButtonContainer:"style_deleteButtonContainer__3doxX"}},305:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(20),r=n(41),i=n(2),o=(n(1),n(303)),s=n.n(o);function c(e){var t=e.title,n=e.fontSize,o=e.color,c=e.responsive,l=e.fontWeight,u=Object(r.a)(e,["title","fontSize","color","responsive","fontWeight"]);return Object(i.jsx)("div",Object(a.a)(Object(a.a)({},u),{},{className:c?s.a.titleResponsive:s.a.title,style:{fontSize:n,color:o,fontWeight:l},children:t}))}},306:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(2),r=(n(1),n(303)),i=n.n(r),o=n(6);function s(e){var t=e.fontSize,n=e.color,r=Object(o.g)();return Object(a.jsx)("div",{className:i.a.logo,style:{fontSize:t,color:n},onClick:function(){return r.push("/meropustakalaya/")},children:Object(a.jsx)("span",{children:"Mero Pustakalaya"})})}},307:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(20),r=n(41),i=n(2),o=(n(1),n(303)),s=n.n(o),c=n(318),l=n.n(c);function u(e){var t=e.title,n=e.fontSize,o=e.isOutline,c=e.onClickFn,u=e.type,b=e.backgroundColor,d=e.textColor,j=e.styleObj,m=e.children,_=e.isSubmitting,p=Object(r.a)(e,["title","fontSize","isOutline","onClickFn","type","backgroundColor","textColor","styleObj","children","isSubmitting"]);return Object(i.jsx)("button",Object(a.a)(Object(a.a)({},p),{},{type:u,className:o?s.a.outLineButton:s.a.button,style:Object(a.a)({fontSize:n,background:b,color:d},j),disabled:_,onClick:c,children:_?Object(i.jsx)(l.a,{type:"ThreeDots",color:"white",height:15,width:50}):t?t.toUpperCase():m}))}},308:function(e,t,n){e.exports={navContainer:"style_navContainer__11TKt",secondChild:"style_secondChild__HeZLg",footer:"style_footer__3f0CY",logo:"style_logo__2Zy9E",text:"style_text__2r980"}},310:function(e,t,n){e.exports={mainTempleteContainer:"templete_mainTempleteContainer__AhKGt",children:"templete_children__2aC7p",cardContainer:"templete_cardContainer__2CD3E",cardContainer_sm:"templete_cardContainer_sm__3pXP2",scrollContainer:"templete_scrollContainer__1uem3"}},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(18),r=n.n(a),i=n(31),o=n(304),s=n(1),c=n(87),l=n.n(c),u=function(e,t){var n=Object(s.useState)([]),a=Object(o.a)(n,2),c=a[0],u=a[1],b=Object(s.useState)(null),d=Object(o.a)(b,2),j=d[0],m=d[1],_=Object(s.useState)(!0),p=Object(o.a)(_,2),f=p[0],h=p[1],O=Object(s.useState)(""),y=Object(o.a)(O,2),g=y[0],k=y[1];return Object(s.useEffect)((function(){return t.current&&Object(i.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l.a.all(e).then(l.a.spread((function(){for(var e=[],t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach((function(t){return e.push(t.data.data)})),u(e),h(!1)}))).catch((function(e){if(!e.response)return k(500),m(!0),void h(!1);k(e.response.status),m(!0),h(!1)}));case 1:case"end":return t.stop()}}),t)})))(),function(){t.current=!1}}),[e,t]),{data:c,loading:f,error:j,setData:u,setError:m,setLoading:h,status:g}}},314:function(e,t,n){"use strict";var a=n(2),r=(n(1),n(86)),i=n(88),o=n(315);t.a=function(e){var t=e.loading,n=e.children,s=e.error,c=e.noNav,l=e.status;return t?c?Object(a.jsx)(r.a,{}):Object(a.jsx)(o.a,{children:Object(a.jsx)(r.a,{})}):s?c?Object(a.jsx)(i.a,{status:l}):Object(a.jsx)(o.a,{children:Object(a.jsx)(i.a,{status:l})}):c?n:Object(a.jsx)(o.a,{children:n})}},315:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(2),r=n(1),i=n(304),o=n(308),s=n.n(o),c=n(6),l=n(42),u=n(83),b=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(39),n.e(30)]).then(n.bind(null,565))})),d=Object(r.lazy)((function(){return n.e(35).then(n.bind(null,556))})),j=Object(r.lazy)((function(){return n.e(38).then(n.bind(null,557))})),m=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,571))}));function _(){var e,t=Object(c.g)(),n=Object(r.useState)(!1),o=Object(i.a)(n,2),_=o[0],p=o[1],f=Object(l.c)((function(e){return e.auth.role}));e="admin"===f?[{name:"dashboard",link:"/meropustakalaya/admin/dashboard"},{name:"books",child:[{name:"books",link:"/meropustakalaya/admin/book"},{name:"Category",link:"/meropustakalaya/admin/category"},{name:"Review",link:"/meropustakalaya/admin/bookReview"}]},{name:"clients",child:[{name:"users",link:"/meropustakalaya/admin/users"},{name:"Create clients",link:"/meropustakalaya/admin/createUser"}]},{name:"others",child:[{name:"Carousel",link:"/meropustakalaya/admin/carousel"},{name:"packages",link:"/meropustakalaya/admin/package"}]}]:[{id:1,name:"home",link:"/meropustakalaya/"},{id:2,name:"books",link:"/meropustakalaya/books"},{id:3,name:"save",link:"/meropustakalaya/save"}];var h=Object(l.b)(),O=function(){t.push("/meropustakalaya/access/login")},y=function(){t.push("/meropustakalaya/membership")},g=function(){p((function(e){return!e}))};return Object(a.jsx)("div",{className:s.a.navContainer,children:Object(a.jsxs)(r.Suspense,{children:[Object(a.jsx)(j,{navHanlder:g}),Object(a.jsxs)("div",{className:s.a.secondChild,children:[Object(a.jsx)(d,{navLink:e}),Object(a.jsx)(m,{loginHandler:O,membershipHandler:y})]}),Object(a.jsx)(b,{navLink:e,isNav:_,loginHandler:O,logoutHandler:function(){t.push("/meropustakalaya/"),h(Object(u.c)()),g()},navHanlder:g,role:f,membershipHandler:y})]})})}var p=n(310),f=n.n(p),h=n(306),O=n(82);function y(){return Object(a.jsxs)("div",{className:s.a.footer,children:[Object(a.jsx)(h.a,{color:"white"}),Object(a.jsx)("span",{className:s.a.text,children:"Verson 1.0.0"}),Object(a.jsxs)("span",{className:s.a.text,children:["designed and programmed with ",Object(a.jsx)(O.g,{color:"yellow"})," by Bibek Shrestha"]})]})}function g(e){var t=e.children;e.noCarusal,e.noFooter;return Object(a.jsxs)("div",{className:f.a.mainTempleteContainer,children:[Object(a.jsx)(_,{}),Object(a.jsxs)("div",{className:f.a.scrollContainer,children:[Object(a.jsx)("div",{className:f.a.children,children:t}),Object(a.jsx)(y,{})]})]})}},321:function(e,t,n){e.exports={homePage:"style_homePage__3NPkk",saveContainer:"style_saveContainer__i5EvO",bookPage:"style_bookPage__q8YA5",bookDetailContainer:"style_bookDetailContainer__fdJuX",authCloseContainer:"style_authCloseContainer__eIw0x",authContainer:"style_authContainer__2mmZw",buttonContainer:"style_buttonContainer__p3sM2",membershipPageContainer:"style_membershipPageContainer__3hgSq",priceContainer:"style_priceContainer__3IuMf",profileContainer:"style_profileContainer__wE-Cb",pdfPageContainer:"style_pdfPageContainer__1aJoZ",fileContainer:"style_fileContainer__2ItpE",notFoundPageContainer:"style_notFoundPageContainer__29LIv",icon:"style_icon__3sfgg"}},399:function(e,t,n){e.exports={membershipCard:"style_membershipCard__354Qq"}},562:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var a=n(18),r=n.n(a),i=n(31),o=n(304),s=n(2),c=n(1),l=n.n(c),u=n(306),b=n(305),d=n(321),j=n.n(d),m=n(399),_=n.n(m),p=n(530);function f(e){var t=e.packages,n=e.selectValueFn,a=e.selectedPackage;return t.map((function(e){return Object(s.jsxs)("div",{onClick:function(){n(e._id)},className:_.a.membershipCard,children:[a===e._id?Object(s.jsx)(p.a,{}):Object(s.jsx)(p.b,{}),Object(s.jsxs)("div",{children:[Object(s.jsx)(b.a,{title:e.name,fontSize:"18px"}),Object(s.jsx)(b.a,{title:"Rs. ".concat(e.price),fontSize:"14px",color:"gray"})]})]},e._id)}))}var h=n(307);function O(e){var t=e.selectedPrice,n=e.subscribeHandler,a=e.isSubmiting;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:_.a.priceContainer,children:[Object(s.jsx)(b.a,{title:"Total Bill",fontSize:"14px"}),Object(s.jsx)(b.a,{title:"Rs.".concat(t),fontSize:"18px"})]}),Object(s.jsx)(h.a,{title:"Pay Now",onClickFn:n,isSubmitting:a})]})}var y=n(42),g=n(83),k=n(6),x=n(314),C=n(313),v=n(43);function S(){var e=l.a.useRef(!0),t=Object(k.g)(),n=Object(y.b)(),a=Object(c.useState)(""),d=Object(o.a)(a,2),m=d[0],_=d[1],p=Object(c.useState)(""),h=Object(o.a)(p,2),S=h[0],P=h[1],w=Object(c.useState)(!1),N=Object(o.a)(w,2),z=N[0],I=N[1],H=Object(C.a)([v.a.get("/packages")],e),E=H.data,F=H.loading,L=H.error,B=E[0],R=function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,I(!0),e.next=4,n(Object(g.e)(m));case 4:I(!1),alert("Sucessfully subscribed"),t.push(t.location.state?t.location.state.path:"/meropustakalaya/"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("Something went wrong. Please try again."),I(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(s.jsx)(x.a,{loading:F,error:L,noNav:!0,children:Object(s.jsxs)("div",{className:j.a.membershipPageContainer,children:[Object(s.jsx)(u.a,{color:"#ef5354",fontSize:"30px"}),Object(s.jsx)(b.a,{title:"Get unlimited access to every Books",fontSize:"20px"}),Object(s.jsx)(f,{packages:B,selectValueFn:function(e){_(e);var t=B.findIndex((function(t){return t._id===e}));P(B[t].price)},selectedPackage:m}),m&&Object(s.jsx)(O,{isSubmiting:z,selectedPrice:S,subscribeHandler:R})]})})}}}]);
//# sourceMappingURL=17.d99fd2ef.chunk.js.map