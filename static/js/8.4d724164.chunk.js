(this.webpackJsonpmeropustakalaya=this.webpackJsonpmeropustakalaya||[]).push([[8],{303:function(e,t,n){e.exports={button:"style_button__gUISQ",outLineButton:"style_outLineButton__1ilmX",title:"style_title__2QX4I",titleResponsive:"style_titleResponsive__qndZA",bookMark:"style_bookMark__1mP2L",rating:"style_rating__2e3ns",logo:"style_logo__3U8MO",profileImage:"style_profileImage__2SgI4",profileImage_form:"style_profileImage_form__2gE_b",deleteButtonContainer:"style_deleteButtonContainer__3doxX"}},305:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(20),r=n(41),i=n(2),s=(n(1),n(303)),o=n.n(s);function c(e){var t=e.title,n=e.fontSize,s=e.color,c=e.responsive,l=e.fontWeight,u=Object(r.a)(e,["title","fontSize","color","responsive","fontWeight"]);return Object(i.jsx)("div",Object(a.a)(Object(a.a)({},u),{},{className:c?o.a.titleResponsive:o.a.title,style:{fontSize:n,color:s,fontWeight:l},children:t}))}},306:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(2),r=(n(1),n(303)),i=n.n(r),s=n(6);function o(e){var t=e.fontSize,n=e.color,r=Object(s.g)();return Object(a.jsx)("div",{className:i.a.logo,style:{fontSize:t,color:n},onClick:function(){return r.push("/")},children:Object(a.jsx)("span",{children:"Mero Pustakalaya"})})}},307:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(20),r=n(41),i=n(2),s=(n(1),n(303)),o=n.n(s),c=n(318),l=n.n(c);function u(e){var t=e.title,n=e.fontSize,s=e.isOutline,c=e.onClickFn,u=e.type,d=e.backgroundColor,_=e.textColor,b=e.styleObj,j=e.children,m=e.isSubmitting,p=Object(r.a)(e,["title","fontSize","isOutline","onClickFn","type","backgroundColor","textColor","styleObj","children","isSubmitting"]);return Object(i.jsx)("button",Object(a.a)(Object(a.a)({},p),{},{type:u,className:s?o.a.outLineButton:o.a.button,style:Object(a.a)({fontSize:n,background:d,color:_},b),disabled:m,onClick:c,children:m?Object(i.jsx)(l.a,{type:"ThreeDots",color:"white",height:15,width:50}):t?t.toUpperCase():j}))}},308:function(e,t,n){e.exports={navContainer:"style_navContainer__11TKt",secondChild:"style_secondChild__HeZLg",footer:"style_footer__3f0CY",logo:"style_logo__2Zy9E",text:"style_text__2r980"}},310:function(e,t,n){e.exports={mainTempleteContainer:"templete_mainTempleteContainer__AhKGt",children:"templete_children__2aC7p",cardContainer:"templete_cardContainer__2CD3E",cardContainer_sm:"templete_cardContainer_sm__3pXP2",scrollContainer:"templete_scrollContainer__1uem3"}},311:function(e,t,n){e.exports={bookTempletContainer:"style_bookTempletContainer__o5dmP",header:"style_header__34M4B",buttonContainer:"style_buttonContainer__2Oe-s",tableContainer:"style_tableContainer__1eznz",utilsContainer:"style_utilsContainer__1PsdT",modelAdminContainer:"style_modelAdminContainer__2_Y4r",modelContent:"style_modelContent__2e2Kk",modelHeader:"style_modelHeader__-x8hJ",close:"style_close__3w-d8",chilrenContainer:"style_chilrenContainer__2jsBp",titleValueContainer:"style_titleValueContainer__Qf946",photoContainer:"style_photoContainer__1NOAb",image:"style_image__2PdUX"}},312:function(e,t,n){e.exports={inputContainer:"styleInput_inputContainer__3Gj7T",inputErrorStyle:"styleInput_inputErrorStyle__3eLpF",errorText:"styleInput_errorText__39ApX",selectInputContainer:"styleInput_selectInputContainer__39auF",textAreaInputContainer:"styleInput_textAreaInputContainer__Q3qQd",fileInputContainer:"styleInput_fileInputContainer__1LwNu"}},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(18),r=n.n(a),i=n(31),s=n(304),o=n(1),c=n(87),l=n.n(c),u=function(e,t){var n=Object(o.useState)([]),a=Object(s.a)(n,2),c=a[0],u=a[1],d=Object(o.useState)(null),_=Object(s.a)(d,2),b=_[0],j=_[1],m=Object(o.useState)(!0),p=Object(s.a)(m,2),h=p[0],f=p[1],O=Object(o.useState)(""),C=Object(s.a)(O,2),x=C[0],y=C[1];return Object(o.useEffect)((function(){return t.current&&Object(i.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l.a.all(e).then(l.a.spread((function(){for(var e=[],t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach((function(t){return e.push(t.data.data)})),u(e),f(!1)}))).catch((function(e){if(!e.response)return y(500),j(!0),void f(!1);y(e.response.status),j(!0),f(!1)}));case 1:case"end":return t.stop()}}),t)})))(),function(){t.current=!1}}),[e,t]),{data:c,loading:h,error:b,setData:u,setError:j,setLoading:f,status:x}}},314:function(e,t,n){"use strict";var a=n(2),r=(n(1),n(86)),i=n(88),s=n(315);t.a=function(e){var t=e.loading,n=e.children,o=e.error,c=e.noNav,l=e.status;return t?c?Object(a.jsx)(r.a,{}):Object(a.jsx)(s.a,{children:Object(a.jsx)(r.a,{})}):o?c?Object(a.jsx)(i.a,{status:l}):Object(a.jsx)(s.a,{children:Object(a.jsx)(i.a,{status:l})}):c?n:Object(a.jsx)(s.a,{children:n})}},315:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(2),r=n(1),i=n(304),s=n(308),o=n.n(s),c=n(6),l=n(42),u=n(83),d=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(39),n.e(30)]).then(n.bind(null,565))})),_=Object(r.lazy)((function(){return n.e(35).then(n.bind(null,556))})),b=Object(r.lazy)((function(){return n.e(38).then(n.bind(null,557))})),j=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,571))}));function m(){var e,t=Object(c.g)(),n=Object(r.useState)(!1),s=Object(i.a)(n,2),m=s[0],p=s[1],h=Object(l.c)((function(e){return e.auth.role}));e="admin"===h?[{name:"dashboard",link:"/admin/dashboard"},{name:"books",child:[{name:"books",link:"/admin/book"},{name:"Category",link:"/admin/category"},{name:"Review",link:"/admin/bookReview"}]},{name:"clients",child:[{name:"users",link:"/admin/users"},{name:"Create clients",link:"/admin/createUser"}]},{name:"others",child:[{name:"Carousel",link:"/admin/carousel"},{name:"packages",link:"/admin/package"}]}]:[{id:1,name:"home",link:"/"},{id:2,name:"books",link:"/books"},{id:3,name:"save",link:"/save"}];var f=Object(l.b)(),O=function(){t.push("/access/login")},C=function(){t.push("/membership")},x=function(){p((function(e){return!e}))};return Object(a.jsx)("div",{className:o.a.navContainer,children:Object(a.jsxs)(r.Suspense,{children:[Object(a.jsx)(b,{navHanlder:x}),Object(a.jsxs)("div",{className:o.a.secondChild,children:[Object(a.jsx)(_,{navLink:e}),Object(a.jsx)(j,{loginHandler:O,membershipHandler:C})]}),Object(a.jsx)(d,{navLink:e,isNav:m,loginHandler:O,logoutHandler:function(){t.push("/"),f(Object(u.c)()),x()},navHanlder:x,role:h,membershipHandler:C})]})})}var p=n(310),h=n.n(p),f=n(306),O=n(82);function C(){return Object(a.jsxs)("div",{className:o.a.footer,children:[Object(a.jsx)(f.a,{color:"white"}),Object(a.jsx)("span",{className:o.a.text,children:"Verson 1.0.0"}),Object(a.jsxs)("span",{className:o.a.text,children:["designed and programmed with ",Object(a.jsx)(O.g,{color:"yellow"})," by Bibek Shrestha"]})]})}function x(e){var t=e.children;e.noCarusal,e.noFooter;return Object(a.jsxs)("div",{className:h.a.mainTempleteContainer,children:[Object(a.jsx)(m,{}),Object(a.jsxs)("div",{className:h.a.scrollContainer,children:[Object(a.jsx)("div",{className:h.a.children,children:t}),Object(a.jsx)(C,{})]})]})}},319:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(20),r=n(304),i=n(41),s=n(2),o=(n(1),n(309)),c=n(312),l=n.n(c);function u(e){var t=e.label,n=Object(i.a)(e,["label"]),c=Object(o.e)(n),u=Object(r.a)(c,2),d=u[0],_=u[1];return Object(s.jsxs)("div",{className:l.a.inputContainer,children:[Object(s.jsx)("label",{htmlFor:n.id||n.name,children:t}),Object(s.jsx)("input",Object(a.a)(Object(a.a)({className:_.touched&&_.error?l.a.inputErrorStyle:null},d),n)),_.touched&&_.error&&Object(s.jsx)("span",{className:l.a.errorText,children:_.error})]})}},321:function(e,t,n){e.exports={homePage:"style_homePage__3NPkk",saveContainer:"style_saveContainer__i5EvO",bookPage:"style_bookPage__q8YA5",bookDetailContainer:"style_bookDetailContainer__fdJuX",authCloseContainer:"style_authCloseContainer__eIw0x",authContainer:"style_authContainer__2mmZw",buttonContainer:"style_buttonContainer__p3sM2",membershipPageContainer:"style_membershipPageContainer__3hgSq",priceContainer:"style_priceContainer__3IuMf",profileContainer:"style_profileContainer__wE-Cb",pdfPageContainer:"style_pdfPageContainer__1aJoZ",fileContainer:"style_fileContainer__2ItpE",notFoundPageContainer:"style_notFoundPageContainer__29LIv",icon:"style_icon__3sfgg"}},325:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(2),r=(n(1),n(303)),i=n.n(r),s=n(42);function o(e){var t=e.userForm,n=e.userName,r=Object(s.c)((function(e){return e.auth})).name;return Object(a.jsx)("div",{className:t?i.a.profileImage_form:i.a.profileImage,children:Object(a.jsx)("span",{children:n?n.charAt(0):r.charAt(0)})})}},331:function(e,t,n){e.exports={userCommentContainer:"style_userCommentContainer__2DU3A",content:"style_content__27_7V",dateStyle:"style_dateStyle__1Lkn3",bookContainer:"style_bookContainer__3izP2",imageContainer:"style_imageContainer__2NJCG",image:"style_image__BaXCa",detailsContainer:"style_detailsContainer__1leOA",title:"style_title__1V14P",auther:"style_auther__2qMMm",iconContainer:"style_iconContainer__1bYDk",bookDetailCardTempleteContainer:"style_bookDetailCardTempleteContainer__2EDMo"}},333:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(2),r=(n(1),n(331)),i=n.n(r);function s(e){var t=e.title,n=e.children;return Object(a.jsxs)("div",{className:i.a.bookDetailCardTempleteContainer,children:[Object(a.jsx)("div",{className:i.a.title,children:t}),Object(a.jsx)("div",{className:i.a.content,children:n})]})}},336:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(2),r=(n(1),n(311)),i=n.n(r),s=n(82);function o(e){var t=e.children,n=e.title,r=e.closeHanlder;return Object(a.jsx)("div",{className:i.a.modelAdminContainer,children:Object(a.jsxs)("div",{className:i.a.modelContent,children:[Object(a.jsxs)("div",{className:i.a.modelHeader,children:[Object(a.jsx)("span",{children:n}),Object(a.jsx)("span",{className:i.a.close,onClick:r,children:Object(a.jsx)(s.e,{fontSize:"18px"})})]}),Object(a.jsx)("div",{className:i.a.chilrenContainer,children:t})]})})}},337:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e,t){var n=new Date(t)-new Date(e);return n<1?0:Math.round(n/864e5)}},355:function(e,t,n){e.exports={forgetPasswordContainer:"style_forgetPasswordContainer__3e8FH",imageContainer:"style_imageContainer__2HP-m",profile:"style_profile__iNz4x",formContainer:"style_formContainer__2xIKw",inputErrorStyle:"style_inputErrorStyle__35e3K",errorText:"style_errorText__2XYrd",changePassword:"style_changePassword__LMcbW",membershipContainer:"style_membershipContainer__9jSzv"}},366:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(){return{type:"accountPopCard"}}},367:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(2),r=(n(1),n(311)),i=n.n(r);function s(e){var t=e.title,n=e.value;return Object(a.jsxs)("div",{className:i.a.titleValueContainer,children:[Object(a.jsxs)("span",{children:[t," : "]}),Object(a.jsx)("span",{children:n})]})}},559:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var a=n(18),r=n.n(a),i=n(31),s=n(304),o=n(2),c=n(1),l=n.n(c),u=n(321),d=n.n(u),_=n(6),b=n(42),j=n(83),m=n(366),p=n(43),h=n(309),f=n(336),O=n(319),C=n(307),x=n(355),y=n.n(x),v=n(323);function g(e){var t=e.forgetPasswordHanlder,n=Object(c.useState)(!1),a=Object(s.a)(n,2),l=a[0],u=a[1],d=function(){var e=Object(i.a)(r.a.mark((function e(n,a){var i,s,o,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.setSubmitting,s=a.setFieldError,e.prev=1,u(!0),i(!0),e.next=6,p.a.put("/auths/password/",n);case 6:u(!1),i(!1),t(!1),alert("Password Change Sucessfully"),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(1),e.t0.response&&(o=e.t0.response.status,c=e.t0.response.data.name,l=e.t0.response.data.message),400===o&&"password"===c?s("password",l):400===o&&"newPassword"===c?s("newPassword",l):alert("Something went wrong, try later"),u(!1),i(!1);case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(o.jsx)(f.a,{closeHanlder:function(){return t(l)},title:"Change Password",children:Object(o.jsx)("div",{className:y.a.forgetPasswordContainer,children:Object(o.jsx)(h.d,{initialValues:{password:"",newPassword:""},validationSchema:v.b({password:v.c().min(4).max(100).required("Enter Current Password"),newPassword:v.c().min(4).max(100).required("Enter New Password")}),onSubmit:d,children:function(e){var t=e.isSubmitting;return Object(o.jsxs)(h.c,{children:[Object(o.jsx)(O.a,{type:"password",name:"password",placeholder:"Current Password"}),Object(o.jsx)(O.a,{type:"password",name:"newPassword",placeholder:"New Password"}),Object(o.jsx)(C.a,{type:"submit",title:"continue",isSubmitting:t})]})}})})})}var w=n(333),k=n(367),S=n(337);function P(){var e=Object(b.c)((function(e){return e.auth.subscriptionDetail})),t=Object(_.g)().push,n=Object(_.h)();return Object(o.jsx)(w.a,{title:"Membership",children:Object(o.jsxs)("div",{className:y.a.membershipContainer,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(k.a,{title:"Start At",value:e?new Date(e.start_at).toDateString():"-"}),Object(o.jsx)(k.a,{title:"Update At",value:e&&e.update_at?new Date(e.update_at).toDateString():"-"}),Object(o.jsx)(k.a,{title:"Expires At",value:e?new Date(e.expires_at).toDateString():"-"}),Object(o.jsx)(k.a,{title:"Remaining Day",value:e?"".concat(Object(S.a)(Date.now(),e.expires_at)," days"):"-"})]}),Object(o.jsx)(C.a,{title:e?"Renew Subscribtion":"subscribe",fontSize:"10px",isOutline:!0,onClickFn:function(){return t({pathname:"/membership",state:{path:n.pathname}})}})]})})}function N(e){var t=e.submitHandler,n=e.user,a=e.forgetPasswordHandler;return Object(o.jsx)(w.a,{title:"General",children:Object(o.jsx)(h.d,{initialValues:{name:n.name,email:n.email},validationSchema:v.b({name:v.c().required("Name must be entered"),email:v.c().email().required("Email must be entered")}),onSubmit:t,children:function(e){var t=e.isSubmitting;return Object(o.jsxs)(h.c,{className:y.a.formContainer,children:[Object(o.jsx)(O.a,{name:"name",placeholder:"Enter your name",type:"text"}),Object(o.jsx)(O.a,{disabled:!0,name:"email",placeholder:"Enter your Email",type:"email"}),Object(o.jsxs)("div",{children:[Object(o.jsx)(C.a,{isSubmitting:t,title:"Save change",fontSize:"10px",type:"submit"}),Object(o.jsx)("span",{className:y.a.changePassword,onClick:function(){return a(!1)},children:"Change password"})]})]})}})})}var I=n(305),D=n(325);function E(e){var t=e.user,n=e.logoutHandler;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(I.a,{title:"Account",fontSize:"35px"}),Object(o.jsxs)("div",{className:y.a.imageContainer,children:[Object(o.jsxs)("div",{className:y.a.profile,children:[Object(o.jsx)(D.a,{userForm:!0}),Object(o.jsx)(I.a,{title:t.name,fontSize:"25px"})]}),Object(o.jsx)(C.a,{title:"signout",isOutline:!0,onClickFn:n})]})]})}var H=n(313),z=n(314);function A(){var e=l.a.useRef(!0),t=Object(H.a)([p.a.get("/users/me")],e),n=t.data,a=t.setData,u=t.loading,h=t.error,f=Object(_.g)(),O=Object(b.b)(),C=Object(c.useState)(!1),x=Object(s.a)(C,2),y=x[0],v=x[1],w=Object(b.c)((function(e){return e.auth.role})),k=function(e){e||v((function(e){return!e}))},S=n[0],I=function(){var e=Object(i.a)(r.a.mark((function e(t,n){var i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.setSubmitting,e.prev=1,i(!0),t.name!==S.name){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,p.a.put("/users/",{name:t.name});case 7:s=e.sent,a([s.data.data]),i(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),alert("Something went wrong try again"),i(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(o.jsx)(z.a,{loading:u,error:h,children:Object(o.jsxs)("div",{className:d.a.profileContainer,children:[Object(o.jsx)(E,{user:S,logoutHandler:function(){f.push("/"),O(Object(j.c)()),O(Object(m.a)())}}),Object(o.jsx)(N,{submitHandler:I,user:S,forgetPasswordHandler:k}),"user"===w&&Object(o.jsx)(P,{user:S}),y&&Object(o.jsx)(g,{forgetPasswordHanlder:k})]})})}}}]);
//# sourceMappingURL=8.4d724164.chunk.js.map