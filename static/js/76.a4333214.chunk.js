(this.webpackJsonpsaha_web=this.webpackJsonpsaha_web||[]).push([[76],{1071:function(t,n,e){"use strict";e.r(n);var s=e(2),c=e.n(s),i=e(4),a=e(1),r=(e(195),e(196)),o=e(0),u=c.a.lazy((function(){return e.e(77).then(e.bind(null,832))})),l=c.a.lazy((function(){return e.e(18).then(e.bind(null,980))})),d=c.a.lazy((function(){return Promise.all([e.e(10),e.e(45)]).then(e.bind(null,1048))})),b=c.a.lazy((function(){return e.e(33).then(e.bind(null,1050))})),p=c.a.lazy((function(){return Promise.resolve().then(e.bind(null,117))}));n.default=function(t){var n,e=Object(i.b)(),j=Object(i.c)((function(t){return t.product.info})),f=Object(i.c)((function(t){return t.product.info.is_favorite})),h=Object(i.c)((function(t){return t.product.similar})),O=Object(i.c)((function(t){return t.product.review})),m=-1;if(t.match.params.id){var v=t.match.params.id.split("-");m=v[v.length-1]}return Object(s.useEffect)((function(){j.status===a.constants.LOADING&&e(r.a.getProductInfo(m)),j.status===a.constants.SUCCESS&&(parseInt(m)!==j.id?e({type:a.constants.RESET_PRODUCT_STATUS}):(null!=j.seo_title&&j.seo_title.length>0?document.title=j.seo_title:document.title=j.name,window.scrollTo({top:0,behavior:"smooth"}),h.status===a.constants.LOADING&&e(r.a.getSimilarProducts(m)),O.status===a.constants.LOADING&&e(r.a.getProductReview(m))))}),[t.match.params.id,j]),Object(o.jsxs)(c.a.Fragment,{children:[j.status===a.constants.LOADING?Object(o.jsx)(u,{}):Object(o.jsx)(c.a.Fragment,{children:Object(o.jsxs)("div",{className:"product-info-page container",children:[Object(o.jsx)(d,{product:j,isLiked:f}),Object(o.jsx)(l,{products:null!==(n=null===h||void 0===h?void 0:h.list)&&void 0!==n?n:[]}),Object(o.jsx)(b,{description:j.description,attributes:j.attributes,productId:m})]})}),j.status===a.constants.LOADING?null:Object(o.jsx)(p,{})]})}}}]);