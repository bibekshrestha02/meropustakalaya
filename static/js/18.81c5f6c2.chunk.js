(this.webpackJsonpmeropustakalaya=this.webpackJsonpmeropustakalaya||[]).push([[18],{303:function(e,t,a){e.exports={button:"style_button__gUISQ",outLineButton:"style_outLineButton__1ilmX",title:"style_title__2QX4I",titleResponsive:"style_titleResponsive__qndZA",bookMark:"style_bookMark__1mP2L",rating:"style_rating__2e3ns",logo:"style_logo__3U8MO",profileImage:"style_profileImage__2SgI4",profileImage_form:"style_profileImage_form__2gE_b",deleteButtonContainer:"style_deleteButtonContainer__3doxX"}},306:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(2),r=(a(1),a(303)),o=a.n(r),i=a(6);function s(e){var t=e.fontSize,a=e.color,r=Object(i.g)();return Object(n.jsx)("div",{className:o.a.logo,style:{fontSize:t,color:a},onClick:function(){return r.push("/meropustakalaya/")},children:Object(n.jsx)("span",{children:"Mero Pustakalaya"})})}},308:function(e,t,a){e.exports={navContainer:"style_navContainer__11TKt",secondChild:"style_secondChild__HeZLg",footer:"style_footer__3f0CY",logo:"style_logo__2Zy9E",text:"style_text__2r980"}},310:function(e,t,a){e.exports={mainTempleteContainer:"templete_mainTempleteContainer__AhKGt",children:"templete_children__2aC7p",cardContainer:"templete_cardContainer__2CD3E",cardContainer_sm:"templete_cardContainer_sm__3pXP2",scrollContainer:"templete_scrollContainer__1uem3"}},313:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(18),r=a.n(n),o=a(31),i=a(304),s=a(1),l=a(87),c=a.n(l),u=function(e,t){var a=Object(s.useState)([]),n=Object(i.a)(a,2),l=n[0],u=n[1],d=Object(s.useState)(null),m=Object(i.a)(d,2),b=m[0],_=m[1],j=Object(s.useState)(!0),f=Object(i.a)(j,2),h=f[0],p=f[1],C=Object(s.useState)(""),O=Object(i.a)(C,2),y=O[0],k=O[1];return Object(s.useEffect)((function(){return t.current&&Object(o.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c.a.all(e).then(c.a.spread((function(){for(var e=[],t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];a.forEach((function(t){return e.push(t.data.data)})),u(e),p(!1)}))).catch((function(e){if(!e.response)return k(500),_(!0),void p(!1);k(e.response.status),_(!0),p(!1)}));case 1:case"end":return t.stop()}}),t)})))(),function(){t.current=!1}}),[e,t]),{data:l,loading:h,error:b,setData:u,setError:_,setLoading:p,status:y}}},314:function(e,t,a){"use strict";var n=a(2),r=(a(1),a(86)),o=a(88),i=a(315);t.a=function(e){var t=e.loading,a=e.children,s=e.error,l=e.noNav,c=e.status;return t?l?Object(n.jsx)(r.a,{}):Object(n.jsx)(i.a,{children:Object(n.jsx)(r.a,{})}):s?l?Object(n.jsx)(o.a,{status:c}):Object(n.jsx)(i.a,{children:Object(n.jsx)(o.a,{status:c})}):l?a:Object(n.jsx)(i.a,{children:a})}},315:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var n=a(2),r=a(1),o=a(304),i=a(308),s=a.n(i),l=a(6),c=a(42),u=a(83),d=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(39),a.e(30)]).then(a.bind(null,565))})),m=Object(r.lazy)((function(){return a.e(35).then(a.bind(null,556))})),b=Object(r.lazy)((function(){return a.e(38).then(a.bind(null,557))})),_=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(22)]).then(a.bind(null,571))}));function j(){var e,t=Object(l.g)(),a=Object(r.useState)(!1),i=Object(o.a)(a,2),j=i[0],f=i[1],h=Object(c.c)((function(e){return e.auth.role}));e="admin"===h?[{name:"dashboard",link:"/meropustakalaya/admin/dashboard"},{name:"books",child:[{name:"books",link:"/meropustakalaya/admin/book"},{name:"Category",link:"/meropustakalaya/admin/category"},{name:"Review",link:"/meropustakalaya/admin/bookReview"}]},{name:"clients",child:[{name:"users",link:"/meropustakalaya/admin/users"},{name:"Create clients",link:"/meropustakalaya/admin/createUser"}]},{name:"others",child:[{name:"Carousel",link:"/meropustakalaya/admin/carousel"},{name:"packages",link:"/meropustakalaya/admin/package"}]}]:[{id:1,name:"home",link:"/meropustakalaya/"},{id:2,name:"books",link:"/meropustakalaya/books"},{id:3,name:"save",link:"/meropustakalaya/save"}];var p=Object(c.b)(),C=function(){t.push("/meropustakalaya/access/login")},O=function(){t.push("/meropustakalaya/membership")},y=function(){f((function(e){return!e}))};return Object(n.jsx)("div",{className:s.a.navContainer,children:Object(n.jsxs)(r.Suspense,{children:[Object(n.jsx)(b,{navHanlder:y}),Object(n.jsxs)("div",{className:s.a.secondChild,children:[Object(n.jsx)(m,{navLink:e}),Object(n.jsx)(_,{loginHandler:C,membershipHandler:O})]}),Object(n.jsx)(d,{navLink:e,isNav:j,loginHandler:C,logoutHandler:function(){t.push("/meropustakalaya/"),p(Object(u.c)()),y()},navHanlder:y,role:h,membershipHandler:O})]})})}var f=a(310),h=a.n(f),p=a(306),C=a(82);function O(){return Object(n.jsxs)("div",{className:s.a.footer,children:[Object(n.jsx)(p.a,{color:"white"}),Object(n.jsx)("span",{className:s.a.text,children:"Verson 1.0.0"}),Object(n.jsxs)("span",{className:s.a.text,children:["designed and programmed with ",Object(n.jsx)(C.g,{color:"yellow"})," by Bibek Shrestha"]})]})}function y(e){var t=e.children;e.noCarusal,e.noFooter;return Object(n.jsxs)("div",{className:h.a.mainTempleteContainer,children:[Object(n.jsx)(j,{}),Object(n.jsxs)("div",{className:h.a.scrollContainer,children:[Object(n.jsx)("div",{className:h.a.children,children:t}),Object(n.jsx)(O,{})]})]})}},322:function(e,t,a){e.exports={dashboardContainer:"adminStyle_dashboardContainer__3-odk",cardsContainer:"adminStyle_cardsContainer__3Oj4x",adminPageContainer:"adminStyle_adminPageContainer__33Kye",bookControlContainer:"adminStyle_bookControlContainer__3M8Zf",userControlContainer:"adminStyle_userControlContainer__3Xsl-",createUserContainer:"adminStyle_createUserContainer__2B3a6",createBookPageContainer:"adminStyle_createBookPageContainer__yAzzu",formContainer:"adminStyle_formContainer__3Z1kW",fileContainer:"adminStyle_fileContainer__1hUXN",fileShowContainer:"adminStyle_fileShowContainer__36-wK",bookReviewPageContainer:"adminStyle_bookReviewPageContainer__1YcPD",priceControlPageContainer:"adminStyle_priceControlPageContainer__3vAcy"}},531:function(e,t,a){e.exports={adminDetailCardContainer:"style_adminDetailCardContainer__3zXwi",dataContainer:"style_dataContainer__3sbJx",title:"style_title__3rquN",icon:"style_icon__x2q0L"}},568:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var n=a(2),r=a(1),o=a.n(r),i=a(531),s=a.n(i);function l(e){var t=e.title,a=e.number,r=e.Icon;return Object(n.jsx)("div",{className:s.a.adminDetailCardContainer,children:Object(n.jsxs)("div",{className:s.a.dataContainer,children:[Object(n.jsx)("span",{className:s.a.icon,children:Object(n.jsx)(r,{})}),Object(n.jsx)("span",{className:s.a.title,children:t}),Object(n.jsx)("span",{children:a})]})})}var c=a(82),u=a(532),d=a(533),m=a(91),b=a(322),_=a.n(b),j=a(314),f=a(43),h=a(313);function p(){var e=o.a.useRef(!0),t=Object(h.a)([f.a.get("/admins/dashboard")],e),a=t.data,r=t.loading,i=t.error,s=r||i?{}:a[0],b=s.totalAdmin,p=s.totalBook,C=s.totalCategory,O=s.totalPackage,y=s.totalReview,k=s.totalSubscribeUser,x=s.totalUnverifiedUser,v=s.totalUser,g=s.totalVerifiedUser;return Object(n.jsx)(j.a,{loading:r,error:i,children:Object(n.jsx)("div",{className:_.a.dashboardContainer,children:Object(n.jsxs)("div",{className:_.a.cardsContainer,children:[Object(n.jsx)(l,{title:"Total Users",number:v,Icon:c.i}),Object(n.jsx)(l,{title:"Total Subscribtion",number:k,Icon:c.j}),Object(n.jsx)(l,{title:"Total Admin",number:b,Icon:u.b}),Object(n.jsx)(l,{title:"Total Books",number:p,Icon:c.a}),Object(n.jsx)(l,{title:"Total Category",number:C,Icon:u.a}),Object(n.jsx)(l,{title:"Total Books Reviews",number:y,Icon:d.b}),Object(n.jsx)(l,{title:"Total Package",number:O,Icon:d.a}),Object(n.jsx)(l,{title:"Total Unverified Users",number:x,Icon:m.b}),Object(n.jsx)(l,{title:"Total Verified Users",number:g,Icon:m.c})]})})})}}}]);
//# sourceMappingURL=18.81c5f6c2.chunk.js.map