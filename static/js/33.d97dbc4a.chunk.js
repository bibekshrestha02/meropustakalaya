(this.webpackJsonpmeropustakalaya=this.webpackJsonpmeropustakalaya||[]).push([[33],{305:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(20),r=n(41),o=n(2),i=(n(1),n(303)),c=n.n(i);function s(e){var t=e.title,n=e.fontSize,i=e.color,s=e.responsive,l=e.fontWeight,u=Object(r.a)(e,["title","fontSize","color","responsive","fontWeight"]);return Object(o.jsx)("div",Object(a.a)(Object(a.a)({},u),{},{className:s?c.a.titleResponsive:c.a.title,style:{fontSize:n,color:i,fontWeight:l},children:t}))}},321:function(e,t,n){e.exports={homePage:"style_homePage__3NPkk",saveContainer:"style_saveContainer__i5EvO",bookPage:"style_bookPage__q8YA5",bookDetailContainer:"style_bookDetailContainer__fdJuX",authCloseContainer:"style_authCloseContainer__eIw0x",authContainer:"style_authContainer__2mmZw",buttonContainer:"style_buttonContainer__p3sM2",membershipPageContainer:"style_membershipPageContainer__3hgSq",priceContainer:"style_priceContainer__3IuMf",profileContainer:"style_profileContainer__wE-Cb",pdfPageContainer:"style_pdfPageContainer__1aJoZ",fileContainer:"style_fileContainer__2ItpE",notFoundPageContainer:"style_notFoundPageContainer__29LIv",icon:"style_icon__3sfgg"}},332:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(18),r=n.n(a),o=n(31),i=n(2),c=(n(1),n(303)),s=n.n(c),l=n(82),u=n(42),j=n(83),b=n(43);function d(e){var t=e.bookId,n=e.toogler,a=Object(u.b)(),c=Object(u.c)((function(e){return e.auth.isLogin})),d=Object(u.c)((function(e){return e.auth.savedBooks.includes(t)})),f=function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(Object(j.d)(t)),n&&n(t),e.next=4,b.a.post("/users/saves/".concat(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c?d?Object(i.jsx)(l.b,{className:s.a.bookMark,onClick:f}):Object(i.jsx)(l.c,{className:s.a.bookMark,onClick:f}):null}},346:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var a=n(2),r=n(1),o=n(310),i=n.n(o),c=n(304),s=n(331),l=n.n(s),u=n(326),j=n(40),b=n(332),d=n(42),f=n(327);function h(e){var t=e.title,n=e.imageURL,o=e.auther,i=e.rating,s=e.id,h=e.small,_=e.toogler,g=Object(r.useState)(!1),m=Object(c.a)(g,2),O=m[0],x=m[1],p=Object(d.c)((function(e){return e.auth.savedBooks.some((function(e){return e===s}))})),C=function(){x(!0)};return Object(a.jsxs)("div",{className:h?l.a.bookContainer_sm:l.a.bookContainer,children:[Object(a.jsx)(j.b,{to:"/book/".concat(s),style:{textDecoration:"none"},children:Object(a.jsxs)("div",{className:l.a.imageContainer,children:[Object(a.jsx)(f.a,{isImageLoaded:O}),Object(a.jsx)("img",{src:n,alt:"fail to load img ",className:l.a.image,loading:"lazy",onLoad:C,onError:C})]})}),Object(a.jsxs)("div",{className:l.a.detailsContainer,children:[Object(a.jsxs)(j.b,{to:"/book/".concat(s),style:{textDecoration:"none"},children:[Object(a.jsx)("span",{className:l.a.title,children:t}),Object(a.jsx)("span",{className:l.a.auther,children:o})]}),Object(a.jsxs)("div",{className:l.a.iconContainer,children:[Object(a.jsx)(u.a,{value:i,isEdit:!1,size:h?16:25}),Object(a.jsx)(b.a,{isSave:p,bookId:s,toogler:_})]})]})]})}function _(e){var t=e.data,n=e.toogler;return Object(a.jsx)("div",{className:i.a.cardContainer,children:t.length<1?Object(a.jsx)("span",{children:"No Book Data"}):t.map((function(e){return Object(a.jsx)(h,{title:e.name,auther:e.autherName,imageURL:e.photo,rating:e.rating,id:e._id,toogler:n},e._id)}))})}},374:function(e,t,n){e.exports={categoryCard:"style_categoryCard__Cs5DR",inputContainer:"style_inputContainer__37VWS",filterContainer:"style_filterContainer__S9Vcx",filterBtn:"style_filterBtn__2uBZd"}},561:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n(18),r=n.n(a),o=n(31),i=n(2),c=n(1),s=n.n(c),l=n(321),u=n.n(l),j=n(346),b=n(304),d=n(82),f=n(374),h=n.n(f),_=n(309),g=n(305);function m(e){var t=e.category,n=e.filterSubmitHandler,a=[{id:1,name:"-releasedAt",title:"New Arrivals"},{id:2,name:"-rating",title:"Most Rated"}];return Object(i.jsx)("div",{className:h.a.categoryCard,children:Object(i.jsx)(_.d,{initialValues:{category:[],sortBy:[]},onSubmit:n,children:function(e){var n=e.submitForm,r=e.handleChange;return Object(i.jsxs)(_.c,{className:h.a.inputContainer,children:[Object(i.jsx)(g.a,{title:"Sort By",fontSize:"18px"}),a.map((function(e){return Object(i.jsxs)("label",{children:[Object(i.jsx)(_.b,{type:"checkbox",onChange:function(e){r(e),n()},name:"sort",value:e.name}),Object(i.jsxs)("span",{children:[" ",e.title]})]},e.id)})),Object(i.jsx)(g.a,{title:"Categories",fontSize:"18px"}),t&&t.map((function(e){return Object(i.jsxs)("label",{children:[Object(i.jsx)(_.b,{type:"checkbox",onChange:function(e){r(e),n()},name:"category",value:e.name}),Object(i.jsxs)("span",{children:[" ",e.title]})]},e._id)}))]})}})})}function O(e){var t=e.category,n=e.filterSubmitHandler,a=Object(c.useState)(!0),r=Object(b.a)(a,2),o=r[0],s=r[1];return Object(i.jsxs)("div",{className:h.a.filterContainer,children:[Object(i.jsxs)("div",{className:h.a.filterBtn,onClick:function(){s((function(e){return!e}))},children:[Object(i.jsx)(d.f,{})," Filters"]}),o&&Object(i.jsx)(m,{category:t,filterSubmitHandler:n})]})}var x=n(313),p=n(43),C=n(314);function v(){var e=s.a.useRef(!0),t=Object(x.a)([p.a.get("/books"),p.a.get("/categories")],e),n=t.data,a=t.setData,c=t.error,l=t.loading,b=t.setError,d=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,o,i,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.category,o=(o=t.sort)&&o.join(),n=n&&n.join(),e.next=7,p.a.get("/books?category=".concat(n,"&sort=").concat(o));case 7:i=e.sent,c=i.data.data,a((function(e){return[c,e[1]]})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),b(!0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsx)(C.a,{loading:l,error:c,children:Object(i.jsxs)("div",{className:u.a.bookPage,children:[Object(i.jsx)(O,{category:n[1],filterSubmitHandler:d}),Object(i.jsx)("div",{children:Object(i.jsx)(j.a,{title:"Books",data:n[0]})})]})})}}}]);
//# sourceMappingURL=33.d97dbc4a.chunk.js.map