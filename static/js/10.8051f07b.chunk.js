(this.webpackJsonpmeropustakalaya=this.webpackJsonpmeropustakalaya||[]).push([[10],{303:function(e,t,n){e.exports={button:"style_button__gUISQ",outLineButton:"style_outLineButton__1ilmX",title:"style_title__2QX4I",titleResponsive:"style_titleResponsive__qndZA",bookMark:"style_bookMark__1mP2L",rating:"style_rating__2e3ns",logo:"style_logo__3U8MO",profileImage:"style_profileImage__2SgI4",profileImage_form:"style_profileImage_form__2gE_b",deleteButtonContainer:"style_deleteButtonContainer__3doxX"}},305:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(20),r=n(41),i=n(2),o=(n(1),n(303)),s=n.n(o);function c(e){var t=e.title,n=e.fontSize,o=e.color,c=e.responsive,l=e.fontWeight,u=Object(r.a)(e,["title","fontSize","color","responsive","fontWeight"]);return Object(i.jsx)("div",Object(a.a)(Object(a.a)({},u),{},{className:c?s.a.titleResponsive:s.a.title,style:{fontSize:n,color:o,fontWeight:l},children:t}))}},306:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(2),r=(n(1),n(303)),i=n.n(r),o=n(6);function s(e){var t=e.fontSize,n=e.color,r=Object(o.g)();return Object(a.jsx)("div",{className:i.a.logo,style:{fontSize:t,color:n},onClick:function(){return r.push("/meropustakalaya/")},children:Object(a.jsx)("span",{children:"Mero Pustakalaya"})})}},307:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(20),r=n(41),i=n(2),o=(n(1),n(303)),s=n.n(o),c=n(318),l=n.n(c);function u(e){var t=e.title,n=e.fontSize,o=e.isOutline,c=e.onClickFn,u=e.type,d=e.backgroundColor,j=e.textColor,b=e.styleObj,m=e.children,_=e.isSubmitting,h=Object(r.a)(e,["title","fontSize","isOutline","onClickFn","type","backgroundColor","textColor","styleObj","children","isSubmitting"]);return Object(i.jsx)("button",Object(a.a)(Object(a.a)({},h),{},{type:u,className:o?s.a.outLineButton:s.a.button,style:Object(a.a)({fontSize:n,background:d,color:j},b),disabled:_,onClick:c,children:_?Object(i.jsx)(l.a,{type:"ThreeDots",color:"white",height:15,width:50}):t?t.toUpperCase():m}))}},308:function(e,t,n){e.exports={navContainer:"style_navContainer__11TKt",secondChild:"style_secondChild__HeZLg",footer:"style_footer__3f0CY",logo:"style_logo__2Zy9E",text:"style_text__2r980"}},310:function(e,t,n){e.exports={mainTempleteContainer:"templete_mainTempleteContainer__AhKGt",children:"templete_children__2aC7p",cardContainer:"templete_cardContainer__2CD3E",cardContainer_sm:"templete_cardContainer_sm__3pXP2",scrollContainer:"templete_scrollContainer__1uem3"}},311:function(e,t,n){e.exports={bookTempletContainer:"style_bookTempletContainer__o5dmP",header:"style_header__34M4B",buttonContainer:"style_buttonContainer__2Oe-s",tableContainer:"style_tableContainer__1eznz",utilsContainer:"style_utilsContainer__1PsdT",modelAdminContainer:"style_modelAdminContainer__2_Y4r",modelContent:"style_modelContent__2e2Kk",modelHeader:"style_modelHeader__-x8hJ",close:"style_close__3w-d8",chilrenContainer:"style_chilrenContainer__2jsBp",titleValueContainer:"style_titleValueContainer__Qf946",photoContainer:"style_photoContainer__1NOAb",image:"style_image__2PdUX"}},312:function(e,t,n){e.exports={inputContainer:"styleInput_inputContainer__3Gj7T",inputErrorStyle:"styleInput_inputErrorStyle__3eLpF",errorText:"styleInput_errorText__39ApX",selectInputContainer:"styleInput_selectInputContainer__39auF",textAreaInputContainer:"styleInput_textAreaInputContainer__Q3qQd",fileInputContainer:"styleInput_fileInputContainer__1LwNu"}},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(18),r=n.n(a),i=n(31),o=n(304),s=n(1),c=n(87),l=n.n(c),u=function(e,t){var n=Object(s.useState)([]),a=Object(o.a)(n,2),c=a[0],u=a[1],d=Object(s.useState)(null),j=Object(o.a)(d,2),b=j[0],m=j[1],_=Object(s.useState)(!0),h=Object(o.a)(_,2),p=h[0],f=h[1],O=Object(s.useState)(""),C=Object(o.a)(O,2),y=C[0],x=C[1];return Object(s.useEffect)((function(){return t.current&&Object(i.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l.a.all(e).then(l.a.spread((function(){for(var e=[],t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach((function(t){return e.push(t.data.data)})),u(e),f(!1)}))).catch((function(e){if(!e.response)return x(500),m(!0),void f(!1);x(e.response.status),m(!0),f(!1)}));case 1:case"end":return t.stop()}}),t)})))(),function(){t.current=!1}}),[e,t]),{data:c,loading:p,error:b,setData:u,setError:m,setLoading:f,status:y}}},314:function(e,t,n){"use strict";var a=n(2),r=(n(1),n(86)),i=n(88),o=n(315);t.a=function(e){var t=e.loading,n=e.children,s=e.error,c=e.noNav,l=e.status;return t?c?Object(a.jsx)(r.a,{}):Object(a.jsx)(o.a,{children:Object(a.jsx)(r.a,{})}):s?c?Object(a.jsx)(i.a,{status:l}):Object(a.jsx)(o.a,{children:Object(a.jsx)(i.a,{status:l})}):c?n:Object(a.jsx)(o.a,{children:n})}},315:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n(2),r=n(1),i=n(304),o=n(308),s=n.n(o),c=n(6),l=n(42),u=n(83),d=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(39),n.e(30)]).then(n.bind(null,565))})),j=Object(r.lazy)((function(){return n.e(35).then(n.bind(null,556))})),b=Object(r.lazy)((function(){return n.e(38).then(n.bind(null,557))})),m=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,571))}));function _(){var e,t=Object(c.g)(),n=Object(r.useState)(!1),o=Object(i.a)(n,2),_=o[0],h=o[1],p=Object(l.c)((function(e){return e.auth.role}));e="admin"===p?[{name:"dashboard",link:"/meropustakalaya/admin/dashboard"},{name:"books",child:[{name:"books",link:"/meropustakalaya/admin/book"},{name:"Category",link:"/meropustakalaya/admin/category"},{name:"Review",link:"/meropustakalaya/admin/bookReview"}]},{name:"clients",child:[{name:"users",link:"/meropustakalaya/admin/users"},{name:"Create clients",link:"/meropustakalaya/admin/createUser"}]},{name:"others",child:[{name:"Carousel",link:"/meropustakalaya/admin/carousel"},{name:"packages",link:"/meropustakalaya/admin/package"}]}]:[{id:1,name:"home",link:"/meropustakalaya/"},{id:2,name:"books",link:"/meropustakalaya/books"},{id:3,name:"save",link:"/meropustakalaya/save"}];var f=Object(l.b)(),O=function(){t.push("/meropustakalaya/access/login")},C=function(){t.push("/meropustakalaya/membership")},y=function(){h((function(e){return!e}))};return Object(a.jsx)("div",{className:s.a.navContainer,children:Object(a.jsxs)(r.Suspense,{children:[Object(a.jsx)(b,{navHanlder:y}),Object(a.jsxs)("div",{className:s.a.secondChild,children:[Object(a.jsx)(j,{navLink:e}),Object(a.jsx)(m,{loginHandler:O,membershipHandler:C})]}),Object(a.jsx)(d,{navLink:e,isNav:_,loginHandler:O,logoutHandler:function(){t.push("/meropustakalaya/"),f(Object(u.c)()),y()},navHanlder:y,role:p,membershipHandler:C})]})})}var h=n(310),p=n.n(h),f=n(306),O=n(82);function C(){return Object(a.jsxs)("div",{className:s.a.footer,children:[Object(a.jsx)(f.a,{color:"white"}),Object(a.jsx)("span",{className:s.a.text,children:"Verson 1.0.0"}),Object(a.jsxs)("span",{className:s.a.text,children:["designed and programmed with ",Object(a.jsx)(O.g,{color:"yellow"})," by Bibek Shrestha"]})]})}function y(e){var t=e.children;e.noCarusal,e.noFooter;return Object(a.jsxs)("div",{className:p.a.mainTempleteContainer,children:[Object(a.jsx)(_,{}),Object(a.jsxs)("div",{className:p.a.scrollContainer,children:[Object(a.jsx)("div",{className:p.a.children,children:t}),Object(a.jsx)(C,{})]})]})}},319:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(20),r=n(304),i=n(41),o=n(2),s=(n(1),n(309)),c=n(312),l=n.n(c);function u(e){var t=e.label,n=Object(i.a)(e,["label"]),c=Object(s.e)(n),u=Object(r.a)(c,2),d=u[0],j=u[1];return Object(o.jsxs)("div",{className:l.a.inputContainer,children:[Object(o.jsx)("label",{htmlFor:n.id||n.name,children:t}),Object(o.jsx)("input",Object(a.a)(Object(a.a)({className:j.touched&&j.error?l.a.inputErrorStyle:null},d),n)),j.touched&&j.error&&Object(o.jsx)("span",{className:l.a.errorText,children:j.error})]})}},320:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(2),r=(n(1),n(311)),i=n.n(r),o=n(305);function s(e){var t=e.title,n=e.children,r=e.buttonHandler,s=e.ButtonIcon,c=e.tooleTip;return Object(a.jsxs)("div",{className:i.a.bookTempletContainer,children:[Object(a.jsxs)("div",{className:i.a.header,children:[Object(a.jsx)(o.a,{title:t,fontSize:"20px",fontWeight:"bold"}),s&&Object(a.jsx)("div",{className:i.a.buttonContainer,onClick:r,children:Object(a.jsx)("abbr",{title:c,children:Object(a.jsx)(s,{color:"red"})})})]}),n]})}},322:function(e,t,n){e.exports={dashboardContainer:"adminStyle_dashboardContainer__3-odk",cardsContainer:"adminStyle_cardsContainer__3Oj4x",adminPageContainer:"adminStyle_adminPageContainer__33Kye",bookControlContainer:"adminStyle_bookControlContainer__3M8Zf",userControlContainer:"adminStyle_userControlContainer__3Xsl-",createUserContainer:"adminStyle_createUserContainer__2B3a6",createBookPageContainer:"adminStyle_createBookPageContainer__yAzzu",formContainer:"adminStyle_formContainer__3Z1kW",fileContainer:"adminStyle_fileContainer__1hUXN",fileShowContainer:"adminStyle_fileShowContainer__36-wK",bookReviewPageContainer:"adminStyle_bookReviewPageContainer__1YcPD",priceControlPageContainer:"adminStyle_priceControlPageContainer__3vAcy"}},336:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(2),r=(n(1),n(311)),i=n.n(r),o=n(82);function s(e){var t=e.children,n=e.title,r=e.closeHanlder;return Object(a.jsx)("div",{className:i.a.modelAdminContainer,children:Object(a.jsxs)("div",{className:i.a.modelContent,children:[Object(a.jsxs)("div",{className:i.a.modelHeader,children:[Object(a.jsx)("span",{children:n}),Object(a.jsx)("span",{className:i.a.close,onClick:r,children:Object(a.jsx)(o.e,{fontSize:"18px"})})]}),Object(a.jsx)("div",{className:i.a.chilrenContainer,children:t})]})})}},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(2),r=(n(1),n(311)),i=n.n(r),o=n(318),s=n.n(o);function c(e){var t=e.tableHeaders,n=e.children,r=e.isNull,o=e.isLoading,c=e.errorMessage;return Object(a.jsxs)("div",{className:i.a.tableContainer,children:[Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsx)("tr",{children:t&&t.map((function(e,t){return Object(a.jsx)("th",{children:e},t)}))})}),!o&&Object(a.jsx)("tbody",{children:n})]}),o||r||c?Object(a.jsxs)("div",{className:i.a.utilsContainer,children:[o&&Object(a.jsx)(s.a,{type:"ThreeDots",color:"red",height:25,width:80}),r&&!c&&Object(a.jsx)("span",{children:"No data"}),c&&Object(a.jsx)("span",{children:c})]}):null]})}},344:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(2),r=(n(1),n(303)),i=n.n(r);function o(e){var t=e.handler,n=e.name;return Object(a.jsx)("div",{className:i.a.deleteButtonContainer,children:Object(a.jsx)("button",{onClick:t,children:n||"Delete"})})}},534:function(e,t,n){e.exports={addCategoryContainer:"style_addCategoryContainer__2N3rC"}},569:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var a=n(18),r=n.n(a),i=n(31),o=n(304),s=n(2),c=n(1),l=n.n(c),u=n(338),d=n(320),j=n(330),b=n(319),m=n(534),_=n.n(m),h=n(307),p=n(336),f=n(323),O=n(309),C=n(43);function y(e){var t=e.categoryHandler,n=e.setData,a=function(){var e=Object(i.a)(r.a.mark((function e(a,i){var o,s,c,l,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=i.setSubmitting,s=i.setFieldError,o(!0),e.prev=2,e.next=5,C.a.post("/categories/",{name:a.name,title:a.title});case 5:c=e.sent,n((function(e){var t=[].concat(Object(j.a)(e[0]),[c.data.data]);return e[0]=t,e})),o(!1),t(),e.next=17;break;case 11:e.prev=11,e.t0=e.catch(2),l=e.t0.response.status,u=e.t0.response.data,400===l&&"name"===u.type?s("name",u.message):(alert("Something went wrong,Try later"),t()),o(!1);case 17:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(s.jsx)(p.a,{title:"Add  Category",closeHanlder:t,children:Object(s.jsx)("div",{className:_.a.addCategoryContainer,children:Object(s.jsx)(O.d,{initialValues:{name:"",title:""},validationSchema:f.b({name:f.c().required("Enter Category Name"),title:f.c().required("Enter Category Title")}),onSubmit:a,children:function(e){var t=e.isSubmitting;return Object(s.jsxs)(O.c,{children:[Object(s.jsx)(b.a,{type:"name",name:"name",placeholder:"Enter Unique Category Name"}),Object(s.jsx)(b.a,{type:"name",name:"title",placeholder:"Enter Category title"}),Object(s.jsx)(h.a,{title:"Add Category",isOutline:!0,type:"submit",isSubmitting:t})]})}})})})}var x=n(322),v=n.n(x),g=n(344),k=n(356),S=n(314),N=n(313);function w(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],j=function(){a((function(e){return!e}))},b=l.a.useRef(!0),m=Object(N.a)([C.a.get("/categories")],b),_=m.data,h=m.loading,p=m.error,f=m.setData,O=h||p?[]:_[0],x=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,window.confirm("Are you Sure?")){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,C.a.delete("/categories/".concat(t));case 6:f((function(e){var n=e[0].filter((function(e){return e._id!==t}));f([n])})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("Something went wrong try again");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsx)(S.a,{loading:h,error:p,children:Object(s.jsxs)("div",{className:v.a.adminPageContainer,children:[Object(s.jsx)(d.a,{title:"Book Categories",buttonHandler:j,ButtonIcon:k.c,children:Object(s.jsx)(u.a,{tableHeaders:["Name","Title",""],isNull:O.length<1,children:O.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.name}),Object(s.jsx)("td",{children:e.title}),Object(s.jsx)("td",{children:Object(s.jsx)(g.a,{handler:function(){return x(e._id)}})})]},e._id)}))})}),n&&Object(s.jsx)(y,{categoryHandler:j,setData:f})]})})}}}]);
//# sourceMappingURL=10.8051f07b.chunk.js.map