(this.webpackJsonpmeropustakalaya=this.webpackJsonpmeropustakalaya||[]).push([[12],{303:function(e,t,n){e.exports={button:"style_button__gUISQ",outLineButton:"style_outLineButton__1ilmX",title:"style_title__2QX4I",titleResponsive:"style_titleResponsive__qndZA",bookMark:"style_bookMark__1mP2L",rating:"style_rating__2e3ns",logo:"style_logo__3U8MO",profileImage:"style_profileImage__2SgI4",profileImage_form:"style_profileImage_form__2gE_b",deleteButtonContainer:"style_deleteButtonContainer__3doxX"}},304:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(316);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},305:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(20),a=n(41),o=n(2),i=(n(1),n(303)),c=n.n(i);function s(e){var t=e.title,n=e.fontSize,i=e.color,s=e.responsive,l=e.fontWeight,d=Object(a.a)(e,["title","fontSize","color","responsive","fontWeight"]);return Object(o.jsx)("div",Object(r.a)(Object(r.a)({},d),{},{className:s?c.a.titleResponsive:c.a.title,style:{fontSize:n,color:i,fontWeight:l},children:t}))}},306:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(2),a=(n(1),n(303)),o=n.n(a),i=n(6);function c(e){var t=e.fontSize,n=e.color,a=Object(i.g)();return Object(r.jsx)("div",{className:o.a.logo,style:{fontSize:t,color:n},onClick:function(){return a.push("/")},children:Object(r.jsx)("span",{children:"Mero Pustakalaya"})})}},308:function(e,t,n){e.exports={navContainer:"style_navContainer__11TKt",secondChild:"style_secondChild__HeZLg",footer:"style_footer__3f0CY",logo:"style_logo__2Zy9E",text:"style_text__2r980"}},310:function(e,t,n){e.exports={mainTempleteContainer:"templete_mainTempleteContainer__AhKGt",children:"templete_children__2aC7p",cardContainer:"templete_cardContainer__2CD3E",cardContainer_sm:"templete_cardContainer_sm__3pXP2",scrollContainer:"templete_scrollContainer__1uem3"}},311:function(e,t,n){e.exports={bookTempletContainer:"style_bookTempletContainer__o5dmP",header:"style_header__34M4B",buttonContainer:"style_buttonContainer__2Oe-s",tableContainer:"style_tableContainer__1eznz",utilsContainer:"style_utilsContainer__1PsdT",modelAdminContainer:"style_modelAdminContainer__2_Y4r",modelContent:"style_modelContent__2e2Kk",modelHeader:"style_modelHeader__-x8hJ",close:"style_close__3w-d8",chilrenContainer:"style_chilrenContainer__2jsBp",titleValueContainer:"style_titleValueContainer__Qf946",photoContainer:"style_photoContainer__1NOAb",image:"style_image__2PdUX"}},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(18),a=n.n(r),o=n(31),i=n(304),c=n(1),s=n(87),l=n.n(s),d=function(e,t){var n=Object(c.useState)([]),r=Object(i.a)(n,2),s=r[0],d=r[1],u=Object(c.useState)(null),j=Object(i.a)(u,2),b=j[0],_=j[1],m=Object(c.useState)(!0),f=Object(i.a)(m,2),h=f[0],O=f[1],p=Object(c.useState)(""),x=Object(i.a)(p,2),C=x[0],y=x[1];return Object(c.useEffect)((function(){return t.current&&Object(o.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l.a.all(e).then(l.a.spread((function(){for(var e=[],t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];n.forEach((function(t){return e.push(t.data.data)})),d(e),O(!1)}))).catch((function(e){if(!e.response)return y(500),_(!0),void O(!1);y(e.response.status),_(!0),O(!1)}));case 1:case"end":return t.stop()}}),t)})))(),function(){t.current=!1}}),[e,t]),{data:s,loading:h,error:b,setData:d,setError:_,setLoading:O,status:C}}},314:function(e,t,n){"use strict";var r=n(2),a=(n(1),n(86)),o=n(88),i=n(315);t.a=function(e){var t=e.loading,n=e.children,c=e.error,s=e.noNav,l=e.status;return t?s?Object(r.jsx)(a.a,{}):Object(r.jsx)(i.a,{children:Object(r.jsx)(a.a,{})}):c?s?Object(r.jsx)(o.a,{status:l}):Object(r.jsx)(i.a,{children:Object(r.jsx)(o.a,{status:l})}):s?n:Object(r.jsx)(i.a,{children:n})}},315:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var r=n(2),a=n(1),o=n(304),i=n(308),c=n.n(i),s=n(6),l=n(42),d=n(83),u=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(39),n.e(30)]).then(n.bind(null,565))})),j=Object(a.lazy)((function(){return n.e(35).then(n.bind(null,556))})),b=Object(a.lazy)((function(){return n.e(38).then(n.bind(null,557))})),_=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,571))}));function m(){var e,t=Object(s.g)(),n=Object(a.useState)(!1),i=Object(o.a)(n,2),m=i[0],f=i[1],h=Object(l.c)((function(e){return e.auth.role}));e="admin"===h?[{name:"dashboard",link:"/admin/dashboard"},{name:"books",child:[{name:"books",link:"/admin/book"},{name:"Category",link:"/admin/category"},{name:"Review",link:"/admin/bookReview"}]},{name:"clients",child:[{name:"users",link:"/admin/users"},{name:"Create clients",link:"/admin/createUser"}]},{name:"others",child:[{name:"Carousel",link:"/admin/carousel"},{name:"packages",link:"/admin/package"}]}]:[{id:1,name:"home",link:"/"},{id:2,name:"books",link:"/books"},{id:3,name:"save",link:"/save"}];var O=Object(l.b)(),p=function(){t.push("/access/login")},x=function(){t.push("/membership")},C=function(){f((function(e){return!e}))};return Object(r.jsx)("div",{className:c.a.navContainer,children:Object(r.jsxs)(a.Suspense,{children:[Object(r.jsx)(b,{navHanlder:C}),Object(r.jsxs)("div",{className:c.a.secondChild,children:[Object(r.jsx)(j,{navLink:e}),Object(r.jsx)(_,{loginHandler:p,membershipHandler:x})]}),Object(r.jsx)(u,{navLink:e,isNav:m,loginHandler:p,logoutHandler:function(){t.push("/"),O(Object(d.c)()),C()},navHanlder:C,role:h,membershipHandler:x})]})})}var f=n(310),h=n.n(f),O=n(306),p=n(82);function x(){return Object(r.jsxs)("div",{className:c.a.footer,children:[Object(r.jsx)(O.a,{color:"white"}),Object(r.jsx)("span",{className:c.a.text,children:"Verson 1.0.0"}),Object(r.jsxs)("span",{className:c.a.text,children:["designed and programmed with ",Object(r.jsx)(p.g,{color:"yellow"})," by Bibek Shrestha"]})]})}function C(e){var t=e.children;e.noCarusal,e.noFooter;return Object(r.jsxs)("div",{className:h.a.mainTempleteContainer,children:[Object(r.jsx)(m,{}),Object(r.jsxs)("div",{className:h.a.scrollContainer,children:[Object(r.jsx)("div",{className:h.a.children,children:t}),Object(r.jsx)(x,{})]})]})}},316:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(317);function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},317:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},320:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(2),a=(n(1),n(311)),o=n.n(a),i=n(305);function c(e){var t=e.title,n=e.children,a=e.buttonHandler,c=e.ButtonIcon,s=e.tooleTip;return Object(r.jsxs)("div",{className:o.a.bookTempletContainer,children:[Object(r.jsxs)("div",{className:o.a.header,children:[Object(r.jsx)(i.a,{title:t,fontSize:"20px",fontWeight:"bold"}),c&&Object(r.jsx)("div",{className:o.a.buttonContainer,onClick:a,children:Object(r.jsx)("abbr",{title:s,children:Object(r.jsx)(c,{color:"red"})})})]}),n]})}},322:function(e,t,n){e.exports={dashboardContainer:"adminStyle_dashboardContainer__3-odk",cardsContainer:"adminStyle_cardsContainer__3Oj4x",adminPageContainer:"adminStyle_adminPageContainer__33Kye",bookControlContainer:"adminStyle_bookControlContainer__3M8Zf",userControlContainer:"adminStyle_userControlContainer__3Xsl-",createUserContainer:"adminStyle_createUserContainer__2B3a6",createBookPageContainer:"adminStyle_createBookPageContainer__yAzzu",formContainer:"adminStyle_formContainer__3Z1kW",fileContainer:"adminStyle_fileContainer__1hUXN",fileShowContainer:"adminStyle_fileShowContainer__36-wK",bookReviewPageContainer:"adminStyle_bookReviewPageContainer__1YcPD",priceControlPageContainer:"adminStyle_priceControlPageContainer__3vAcy"}},327:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(2),a=(n(1),n(91)),o=n(29),i=n.n(o);function c(e){var t=e.isImageLoaded,n=e.size;return t?null:Object(r.jsx)("div",{className:i.a.imageLoadingContainer,children:Object(r.jsx)(a.a,{color:"gray",size:n||100})})}},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(2),a=(n(1),n(311)),o=n.n(a),i=n(318),c=n.n(i);function s(e){var t=e.tableHeaders,n=e.children,a=e.isNull,i=e.isLoading,s=e.errorMessage;return Object(r.jsxs)("div",{className:o.a.tableContainer,children:[Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:t&&t.map((function(e,t){return Object(r.jsx)("th",{children:e},t)}))})}),!i&&Object(r.jsx)("tbody",{children:n})]}),i||a||s?Object(r.jsxs)("div",{className:o.a.utilsContainer,children:[i&&Object(r.jsx)(c.a,{type:"ThreeDots",color:"red",height:25,width:80}),a&&!s&&Object(r.jsx)("span",{children:"No data"}),s&&Object(r.jsx)("span",{children:s})]}):null]})}},344:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(2),a=(n(1),n(303)),o=n.n(a);function i(e){var t=e.handler,n=e.name;return Object(r.jsx)("div",{className:o.a.deleteButtonContainer,children:Object(r.jsx)("button",{onClick:t,children:n||"Delete"})})}},368:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(304),a=n(2),o=n(1),i=n.n(o),c=n(311),s=n.n(c),l=n(327);function d(e){var t=e.imgUrl,n=i.a.useState(!1),o=Object(r.a)(n,2),c=o[0],d=o[1],u=function(){d(!0)};return Object(a.jsxs)("div",{className:s.a.photoContainer,children:[Object(a.jsx)(l.a,{isImageLoaded:c,size:30}),Object(a.jsx)("img",{src:t,alt:"bookImg",className:s.a.image,loading:"lazy",onError:u,onLoad:u})]})}},543:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var r=n(18),a=n.n(r),o=n(31),i=n(2),c=n(1),s=n.n(c),l=n(322),d=n.n(l),u=n(6),j=n(43),b=n(356),_=n(320),m=n(338),f=n(368),h=n(344),O=n(314),p=n(313);function x(){var e=Object(u.g)().push,t=s.a.useRef(!0),n=Object(p.a)([j.a.get("/books/adminBooks")],t),r=n.data,c=n.loading,l=n.error,x=n.setData,C=c||l?[]:r[0],y=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,window.confirm("Are you sure?")){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,j.a.delete("/books/".concat(t));case 6:n=C.filter((function(e){return e._id!==t})),x([n]),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert("Something went wrong, Please try again");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),v=!c&&!l&&C.map((function(t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)(f.a,{imgUrl:t.photo})}),Object(i.jsx)("td",{children:t.name}),Object(i.jsx)("td",{children:t.category}),Object(i.jsx)("td",{children:t.rating}),Object(i.jsx)("td",{children:t.pages}),Object(i.jsx)("td",{children:new Date(t.releasedAt).toLocaleString().split(",")[0]}),Object(i.jsx)("td",{children:Object(i.jsx)(h.a,{name:"View",handler:function(){return e("/book/view/".concat(t.file))}})}),Object(i.jsx)("td",{children:Object(i.jsx)(h.a,{name:"Update",handler:function(){e({pathname:"/admin/createBook",state:{book:t}})}})}),Object(i.jsx)("td",{children:Object(i.jsx)(h.a,{handler:function(){return y(t._id)}})})]},t._id)}));return Object(i.jsx)(O.a,{loading:c,error:l,children:Object(i.jsx)("div",{className:d.a.bookControlContainer,children:Object(i.jsx)(_.a,{title:"Book Details",ButtonIcon:b.c,buttonHandler:function(){e("/admin/createBook")},tooleTip:"Add Book",children:Object(i.jsx)(m.a,{tableHeaders:["Photo","Name","category","Rating","Pages","Add on","Files","",""],isNull:C.length<1,children:v})})})})}}}]);
//# sourceMappingURL=12.75af63f1.chunk.js.map