(this.webpackJsonpmeropustakalaya=this.webpackJsonpmeropustakalaya||[]).push([[21],{305:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(20),r=n(41),i=n(2),s=(n(1),n(303)),c=n.n(s);function o(e){var t=e.title,n=e.fontSize,s=e.color,o=e.responsive,l=e.fontWeight,u=Object(r.a)(e,["title","fontSize","color","responsive","fontWeight"]);return Object(i.jsx)("div",Object(a.a)(Object(a.a)({},u),{},{className:o?c.a.titleResponsive:c.a.title,style:{fontSize:n,color:s,fontWeight:l},children:t}))}},307:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(20),r=n(41),i=n(2),s=(n(1),n(303)),c=n.n(s),o=n(318),l=n.n(o);function u(e){var t=e.title,n=e.fontSize,s=e.isOutline,o=e.onClickFn,u=e.type,j=e.backgroundColor,b=e.textColor,d=e.styleObj,p=e.children,h=e.isSubmitting,v=Object(r.a)(e,["title","fontSize","isOutline","onClickFn","type","backgroundColor","textColor","styleObj","children","isSubmitting"]);return Object(i.jsx)("button",Object(a.a)(Object(a.a)({},v),{},{type:u,className:s?c.a.outLineButton:c.a.button,style:Object(a.a)({fontSize:n,background:j,color:b},d),disabled:h,onClick:o,children:h?Object(i.jsx)(l.a,{type:"ThreeDots",color:"white",height:15,width:50}):t?t.toUpperCase():p}))}},312:function(e,t,n){e.exports={inputContainer:"styleInput_inputContainer__3Gj7T",inputErrorStyle:"styleInput_inputErrorStyle__3eLpF",errorText:"styleInput_errorText__39ApX",selectInputContainer:"styleInput_selectInputContainer__39auF",textAreaInputContainer:"styleInput_textAreaInputContainer__Q3qQd",fileInputContainer:"styleInput_fileInputContainer__1LwNu"}},321:function(e,t,n){e.exports={homePage:"style_homePage__3NPkk",saveContainer:"style_saveContainer__i5EvO",bookPage:"style_bookPage__q8YA5",bookDetailContainer:"style_bookDetailContainer__fdJuX",authCloseContainer:"style_authCloseContainer__eIw0x",authContainer:"style_authContainer__2mmZw",buttonContainer:"style_buttonContainer__p3sM2",membershipPageContainer:"style_membershipPageContainer__3hgSq",priceContainer:"style_priceContainer__3IuMf",profileContainer:"style_profileContainer__wE-Cb",pdfPageContainer:"style_pdfPageContainer__1aJoZ",fileContainer:"style_fileContainer__2ItpE",notFoundPageContainer:"style_notFoundPageContainer__29LIv",icon:"style_icon__3sfgg"}},325:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(2),r=(n(1),n(303)),i=n.n(r),s=n(42);function c(e){var t=e.userForm,n=e.userName,r=Object(s.c)((function(e){return e.auth})).name;return Object(a.jsx)("div",{className:t?i.a.profileImage_form:i.a.profileImage,children:Object(a.jsx)("span",{children:n?n.charAt(0):r.charAt(0)})})}},332:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(18),r=n.n(a),i=n(31),s=n(2),c=(n(1),n(303)),o=n.n(c),l=n(82),u=n(42),j=n(83),b=n(43);function d(e){var t=e.bookId,n=e.toogler,a=Object(u.b)(),c=Object(u.c)((function(e){return e.auth.isLogin})),d=Object(u.c)((function(e){return e.auth.savedBooks.includes(t)})),p=function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(Object(j.d)(t)),n&&n(t),e.next=4,b.a.post("/users/saves/".concat(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c?d?Object(s.jsx)(l.b,{className:o.a.bookMark,onClick:p}):Object(s.jsx)(l.c,{className:o.a.bookMark,onClick:p}):null}},333:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(2),r=(n(1),n(331)),i=n.n(r);function s(e){var t=e.title,n=e.children;return Object(a.jsxs)("div",{className:i.a.bookDetailCardTempleteContainer,children:[Object(a.jsx)("div",{className:i.a.title,children:t}),Object(a.jsx)("div",{className:i.a.content,children:n})]})}},340:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(20),r=n(304),i=n(41),s=n(2),c=(n(1),n(309)),o=n(312),l=n.n(o);function u(e){var t=e.label,n=Object(i.a)(e,["label"]),o=Object(c.e)(n),u=Object(r.a)(o,2),j=u[0],b=u[1];return Object(s.jsxs)("div",{className:l.a.textAreaInputContainer,children:[Object(s.jsx)("label",{htmlFor:n.id||n.name,children:t}),Object(s.jsx)("textarea",Object(a.a)(Object(a.a)({className:b.touched&&b.error?l.a.inputErrorStyle:null},j),n)),b.touched&&b.error?Object(s.jsx)("span",{className:l.a.errorText,children:b.error}):null]})}},347:function(e,t,n){e.exports={reviewCardContainer:"style_reviewCardContainer__3l13U",ratingContainer:"style_ratingContainer__1Mtmb",errorText:"style_errorText__1d4Pr",userCommentContainer:"style_userCommentContainer__2xXxG",content:"style_content__3oxL4",delete:"style_delete__5H8Im",bookDetailsHeaderContainer:"style_bookDetailsHeaderContainer__3wzzX",imageContainer:"style_imageContainer__1szfF",bookImage:"style_bookImage__3x_km"}},558:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var a=n(2),r=n(1),i=n.n(r),s=n(6),c=n(321),o=n.n(c),l=n(304),u=n(347),j=n.n(u),b=n(307),d=n(305),p=n(326),h=n(332),v=n(42),O=n(333),x=n(327);function m(e){var t=e.data,n=e.navigateBookFile,r=i.a.useState(!1),s=Object(l.a)(r,2),c=s[0],o=s[1],u=function(){o(!0)},m=Object(v.c)((function(e){return e.auth.isLogin}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:j.a.bookDetailsHeaderContainer,children:[Object(a.jsxs)("div",{className:j.a.imageContainer,children:[Object(a.jsx)(x.a,{isImageLoaded:c}),Object(a.jsx)("img",{src:t.photo,alt:"bImage",className:j.a.bookImage,onLoad:u,onError:u})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(d.a,{title:t.name,fontSize:"25px"}),Object(a.jsxs)("span",{className:j.a.auther,children:["Author : ",t.autherName]}),Object(a.jsxs)("span",{children:["Pages : ",t.pages]}),m&&Object(a.jsxs)("span",{children:["save for later ",Object(a.jsx)(h.a,{bookId:t._id})]}),Object(a.jsx)(p.a,{value:t.rating,size:20,isEdit:!1}),Object(a.jsx)(b.a,{styleObj:{fontSize:"16px",width:"200px"},title:"Read now",fontSize:"13px",onClickFn:n})]})]}),Object(a.jsx)(O.a,{title:"Overview",children:Object(a.jsx)("span",{children:t.description})})]})}var _=n(325);function f(e){var t=e.data;return Object(a.jsx)(O.a,{title:"Reader Reviews",children:t.reviews?t.reviews.length<1?Object(a.jsx)("span",{children:"No reviews yet"}):t.reviews.map((function(e,t){return Object(a.jsxs)("div",{className:j.a.userCommentContainer,children:[Object(a.jsx)("div",{children:Object(a.jsx)(_.a,{userName:e.user.name})}),Object(a.jsxs)("div",{className:j.a.content,children:[Object(a.jsx)("span",{children:e.user.name}),Object(a.jsx)(p.a,{value:e.rating,isEdit:!1}),Object(a.jsx)("span",{children:e.review}),Object(a.jsx)("span",{style:{display:"block",color:"gray"},children:new Date(e.createAt).toDateString()})]})]},t)})):null})}var g=n(18),C=n.n(g),w=n(20),y=n(31);function k(e){var t=e.review,n=e.deleteHandler,i=Object(r.useState)(!1),s=Object(l.a)(i,2),c=s[0],o=s[1];return Object(a.jsx)(O.a,{title:"Your Review",children:Object(a.jsxs)("div",{className:j.a.userCommentContainer,children:[Object(a.jsx)("div",{children:Object(a.jsx)(_.a,{userName:t.user.name})}),Object(a.jsxs)("div",{className:j.a.content,children:[Object(a.jsx)("span",{children:t.user.name}),Object(a.jsx)(p.a,{value:t.rating,isEdit:!1}),Object(a.jsx)("span",{children:t.review}),Object(a.jsxs)("span",{style:{display:"block",color:"gray"},children:[new Date(t.createAt).toDateString(),Object(a.jsx)("button",{disabled:c,className:j.a.delete,onClick:function(){n(t._id,o)},children:c?Object(a.jsx)("span",{children:"Deleting..."}):Object(a.jsx)("span",{children:"Delete"})})]})]})]})})}var N=n(309),S=n(340),I=n(323);function D(e){var t=e.reviewHandler,n=Object(v.c)((function(e){return e.auth.isLogin})),r=Object(a.jsx)("span",{children:"Login to add your reviews"});return n&&(r=Object(a.jsx)(N.d,{initialValues:{rating:0,review:""},validationSchema:I.b({review:I.c().required("Write Your review"),rating:I.a().required()}),onSubmit:t,children:function(e){var t=e.setFieldValue,n=e.errors,r=e.values,i=e.isSubmitting;return Object(a.jsxs)(N.c,{className:j.a.reviewCardContainer,children:[Object(a.jsxs)("div",{className:j.a.ratingContainer,children:[Object(a.jsx)("span",{children:"your rating*"}),Object(a.jsx)(p.a,{isEdit:!0,size:20,name:"rating",value:r.rating,onChange:function(e){t("rating",e)}}),n.rating&&Object(a.jsxs)("span",{className:j.a.errorText,children:["*",n.rating]})]}),Object(a.jsx)(S.a,{name:"review",placeholder:"Write your comment  "}),Object(a.jsx)("div",{children:Object(a.jsx)(b.a,{title:"Submit",type:"submit",fontSize:"18px",isSubmitting:i})})]})}})),Object(a.jsx)(O.a,{title:"Write your review",children:r})}var z=n(43);function F(e){var t=e.data,n=e.setData,r=function(){var e=Object(y.a)(C.a.mark((function e(a,r){var i,s,c,o;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.setSubmitting,e.prev=1,i(!0),e.next=5,z.a.post("/reviews/",{book:t._id,review:a.review,rating:a.rating});case 5:s=e.sent,c=s.data.data,o=[Object(w.a)(Object(w.a)({},t),{},{reviews:t.reviews.concat(c),userReview:c})],n(o),i(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),i(!1),alert("Something went wrong try again");case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n){return e.apply(this,arguments)}}(),i=function(){var e=Object(y.a)(C.a.mark((function e(a,r){var i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,window.confirm("Are you sure?")){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,z.a.delete("/reviews/".concat(a));case 6:r(!0),i=[Object(w.a)(Object(w.a)({},t),{},{reviews:t.reviews.filter((function(e){return e._id!==a})),userReview:null})],n(i),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert("Something went wrong. Try Again");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}();return t.userReview?Object(a.jsx)(k,{review:t.userReview,deleteHandler:i}):Object(a.jsx)(D,{reviewHandler:r})}var A=n(313),L=n(314);function P(e){e.navigation;var t=Object(s.i)().id,n=Object(s.g)(),r=n.push,c=n.location,l=Object(v.c)((function(e){return e.auth.isLogin})),u=Object(v.c)((function(e){return e.auth.subscriptionDetail})),j=!!u&&Date.now()<=new Date(u.expires_at),b=i.a.useRef(!0),d=Object(A.a)([z.a.get("/books/".concat(t))],b),p=d.data,h=d.loading,O=d.error,x=d.setData;return Object(a.jsx)(L.a,{loading:h,error:O,children:Object(a.jsxs)("div",{className:o.a.bookDetailContainer,children:[Object(a.jsx)(m,{data:p[0],navigateBookFile:function(){r(l?j?"/book/view/".concat(t):{pathname:"/membership",state:{path:c.pathname,message:"get membership to get access"}}:{pathname:"/access/login",state:{path:c.pathname,message:"Login To Get Access"}})}}),Object(a.jsx)(F,{data:p[0],setData:x}),Object(a.jsx)(f,{data:p[0]})]})})}}}]);
//# sourceMappingURL=21.93872e07.chunk.js.map