(this.webpackJsonpsaha_web=this.webpackJsonpsaha_web||[]).push([[46],{1062:function(n,e,i){"use strict";i.r(e);var t=i(6),a=i(2),o=i.n(a),d=i(4),r=i(1),l=i(12),s=(i(195),i(830)),c=i(0),u=o.a.lazy((function(){return i.e(82).then(i.bind(null,967))})),h=o.a.lazy((function(){return i.e(81).then(i.bind(null,968))})),p=o.a.lazy((function(){return Promise.resolve().then(i.bind(null,117))}));e.default=function(){var n,e,i=Object(d.b)(),m=Object(d.c)((function(n){return n.user.myReview})),v=Object(d.c)((function(n){return n.user.awaitReview})),x=Object(a.useState)({data:null,index:0}),g=Object(t.a)(x,2),b=g[0],j=g[1],w=Object(a.useState)(!1),f=Object(t.a)(w,2),O=f[0],_=f[1],y=Object(a.useState)("await"),N=Object(t.a)(y,2),k=N[0],S=N[1],R=function(n,e,i){_(!0),n.video_url?j({data:n,index:"video"===e?i:i+1}):j({data:n,index:i})},L={await:Object(c.jsx)("div",{className:"container row",children:null===(n=v.list)||void 0===n?void 0:n.map((function(n,e){var i;return Object(c.jsx)(h,{name:n.product.name,images:null===(i=n.product)||void 0===i?void 0:i.images,stars:n.stars,content:n.content,id:n.product.id,order_code:n.order_code},e)}))}),reviewed:Object(c.jsxs)("div",{className:"container",children:[null===(e=m.list)||void 0===e?void 0:e.map((function(n,e){var i;return Object(c.jsx)(u,{name:n.product.name,images:null===(i=n.product)||void 0===i?void 0:i.images,stars:n.stars,content:n.content,id:n.product.id,video_url_review:n.video_url,images_review:n.images?JSON.parse(n.images):[],review:n,handleShowImageVideoEvaluate:R},e)})),Object(c.jsx)(s.a,{showModal:O,reviewSelected:b,setShowModal:_,setReviewSelected:j})]})};return Object(a.useEffect)((function(){document.title="\u0110\xe1nh gi\xe1 c\u1ee7a t\xf4i",console.log(m),m.status!==r.constants.LOADING&&v.status!==r.constants.LOADING||(i(l.a.getUserReview()),i(l.a.getUserAwaitReview()))})),Object(c.jsxs)(o.a.Fragment,{children:[m.status===r.constants.LOADING?null:Object(c.jsx)("div",{className:"review-page",children:Object(c.jsx)("div",{className:"collaborator-page",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"row tabs",children:[Object(c.jsx)("div",{onClick:function(){S("await"),i(l.a.getUserAwaitReview())},className:"await"===k?"active":"",children:"Ch\u1edd \u0111\xe1nh gi\xe1"}),Object(c.jsx)("div",{onClick:function(){S("reviewed"),i(l.a.getUserReview())},className:"reviewed"===k?"active":"",style:{marginLeft:"1.5em",marginRight:"1.5em"},children:"\u0110\xe3 \u0111\xe1nh gi\xe1"})]}),L[k]]})})}),m.status===r.constants.LOADING?null:Object(c.jsx)(p,{})]})}},830:function(n,e,i){"use strict";var t,a=i(3),o=i(10),d=i(2),r=i(77),l=i.n(r),s=i(135),c=i.n(s),u=i(11),h=i(1),p=i(0),m=u.a.div(t||(t=Object(o.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 500;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .modal_overlay {\n    position: absolute;\n    inset: 0;\n    background-color: rgba(0, 0, 0, 0.3);\n  }\n  .modal_content {\n    position: absolute;\n    z-index: 10;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    border-radius: 10px;\n    .modal_image {\n      max-width: 1140px;\n      width: 100%;\n      border-radius: 10px;\n      overflow: hidden;\n      .modal_header {\n        display: flex;\n        justify-content: flex-end;\n        padding: 8px;\n        span {\n          width: 32px;\n          height: 32px;\n          cursor: pointer;\n          border-radius: 100rem;\n          background-color: rgba(0, 0, 0, 0.3);\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          color: white;\n          svg {\n            width: 20px;\n            height: 20px;\n          }\n        }\n      }\n    }\n    .modal_text {\n      display: flex;\n      padding: 20px 40px;\n      column-gap: 12px;\n      .modal_img {\n        width: 550px;\n        height: 550px;\n        padding: 4px;\n        border-radius: 10px;\n        overflow: hidden;\n        border: 1px solid #dee2e6;\n        &:hover .slick-arrow {\n          visibility: visible;\n          opacity: 1;\n        }\n        .slick-arrow {\n          border-radius: 100%;\n          width: 40px;\n          height: 40px;\n          visibility: hidden;\n          opacity: 0;\n          transition: all 0.3s;\n        }\n        .slick-next {\n          right: 0px;\n        }\n        .slick-prev {\n          left: 0px;\n        }\n        video {\n          width: 100% !important;\n          height: 540px !important;\n        }\n        img {\n          width: 100% !important;\n          height: 540px !important;\n          object-fit: cover;\n          border-radius: 10px !important;\n        }\n      }\n    }\n    .image_detail {\n      width: 340px;\n    }\n    .list_image {\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);\n      gap: 10px;\n      margin-top: 12px;\n      .bg_video,\n      .bg_img {\n        position: relative;\n        overflow: hidden;\n        cursor: pointer;\n        height: 90px;\n        border-radius: 10px;\n      }\n      .bg_video video {\n        object-fit: cover;\n      }\n      .bg_video video,\n      .bg_img img {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        border-radius: 10px;\n      }\n      .overlayImage {\n        position: absolute;\n        inset: 0;\n        z-index: 10;\n        transition: all 0.3s;\n        &:hover {\n          background-color: rgba(255, 255, 255, 0.2);\n        }\n      }\n    }\n  }\n  @media (max-width: 1200px) {\n    .modal_content {\n      .modal_text {\n        padding: 15px 30px;\n        .modal_img {\n          width: 400px;\n          height: 400px;\n          video {\n            height: 390px !important;\n          }\n          img {\n            height: 390px !important;\n          }\n        }\n      }\n      .image_detail {\n        width: 200px;\n      }\n      .list_image {\n        grid-template-columns: repeat(2, 1fr);\n      }\n    }\n  }\n  @media (max-width: 768px) {\n    .modal_content {\n      width: 100%;\n      .modal_text {\n        flex-direction: column;\n        padding: 15px;\n        .modal_img {\n          width: 100%;\n          height: 350px;\n          video {\n            height: 340px !important;\n          }\n          img {\n            height: 340px !important;\n          }\n        }\n      }\n      .image_detail {\n        width: 100%;\n      }\n      .list_image {\n        grid-template-columns: repeat(5, 1fr);\n        .bg_video,\n        .bg_img {\n          height: 70px;\n        }\n      }\n    }\n  }\n"])));e.a=function(n){var e,i,t,o,r,s=n.setShowModal,u=void 0===s?function(){}:s,v=n.showModal,x=void 0!==v&&v,g=n.reviewSelected,b=void 0===g?{data:null,index:0}:g,j=n.setReviewSelected,w=void 0===j?function(){}:j,f=Object(d.useRef)(),O=function(n){return n?JSON.parse(n):""};Object(d.useEffect)((function(){document.body.style.overflow=x?"hidden":"visible"}),[x]),Object(d.useEffect)((function(){var n="";return b.data&&(n=setTimeout((function(){f.current.slickGoTo(b.index)}),300)),function(){return clearTimeout(n)}}),[b.data,b.index]);var _=function(){u(!1),w({data:null,index:0})};return l.a.createPortal(Object(p.jsxs)(m,{style:{visibility:"".concat(x?"visible":"hidden"),opacity:"".concat(x?"1":"0"),transition:"all .5s"},children:[Object(p.jsx)("div",{className:"modal_overlay",onClick:_}),Object(p.jsx)("div",{className:"modal_content",children:Object(p.jsxs)("div",{className:"modal_image",children:[Object(p.jsx)("div",{className:"modal_header",children:Object(p.jsx)("div",{onClick:_,children:Object(p.jsx)("span",{children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})})}),Object(p.jsx)("div",{className:"flex px-10 py-5 gap-x-3 modal_text",children:Object(p.jsx)("div",{className:"modal_img",children:b.data?Object(p.jsxs)(c.a,Object(a.a)(Object(a.a)({ref:f},{infinite:!0,slidesToShow:1,slidesToScroll:1}),{},{style:{width:"100%",height:"100%"},children:[null!==(e=b.data)&&void 0!==e&&e.video_url?Object(p.jsx)("div",{className:"videoModal",children:Object(p.jsx)("video",{style:{height:"440px",width:"400px",borderRadius:"10px",cursor:"pointer"},controls:!0,muted:!0,autoPlay:"autoplay",preLoad:"auto",loop:!0,children:Object(p.jsx)("source",{src:null===(i=b.data)||void 0===i?void 0:i.video_url})})}):null,(null===(t=O(null===(o=b.data)||void 0===o?void 0:o.images))||void 0===t?void 0:t.length)>0?O(null===(r=b.data)||void 0===r?void 0:r.images).map((function(n,e){return Object(p.jsx)("div",{className:"imageModal",children:Object(p.jsx)("div",{className:"imgModal-container",children:Object(p.jsx)("img",{src:n,alt:"\u1ea3nh s\u1ea3n ph\u1ea9m",style:{background:"url(".concat(h.constants.DEFAULT_PRODUCT_IMG,")"),backgroundSize:"contain",width:"400px",height:"440px",borderRadius:"10px",cursor:"pointer"}})})},e)})):null]})):null})})]})})]}),document.querySelector("body"))}}}]);