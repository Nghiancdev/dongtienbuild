(this.webpackJsonpsaha_web=this.webpackJsonpsaha_web||[]).push([[66],{1087:function(e,c,i){"use strict";i.r(c),i.d(c,"default",(function(){return j}));var t=i(3),n=i(7),s=i(4),a=i(0);function o(e){var c=Object(s.c)((function(e){return e.app.appTheme})),i=e.product,t=(i.price,i.product_discount),o=i.images,l=i.id,r=i.min_price,d=i.max_price,j="/img/default_product.jpg";return t&&t.discount_price,o.length&&(j=o[0].image_url),Object(a.jsxs)("div",{className:"discount-product-card",onClick:function(){window.location.href="/san-pham/".concat(l)},children:[Object(a.jsx)("div",{className:"image",children:Object(a.jsx)("div",{className:"img-container",children:Object(a.jsx)("img",{src:j,alt:""})})}),Object(a.jsx)("div",{className:"price",style:{color:c.color_main_1},children:r===d?Object(n.e)(r):"".concat(Object(n.e)(r)," - ").concat(Object(n.e)(d))}),Object(a.jsxs)("div",{className:"prev-price",children:["S\u1ed1 l\u01b0\u1ee3ng: ",e.quantity]})]})}var l=i(135),r=i.n(l),d=i(31);function j(e){var c=e.name,i=e.value,l=e.type,j=e.products,u=e.end,b=e.set_limit_amount,h={infinite:j.length>4,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:600,settings:{infinite:j.length>2,slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{infinite:j.length>4,slidesToShow:4,slidesToScroll:1}},{breakpoint:992,settings:{infinite:j.length>5,slidesToShow:5,slidesToScroll:1}}]},m=Object(s.b)();return console.log(j,"aaa"),Object(a.jsxs)("div",{className:"combo-card",children:[Object(a.jsx)("button",{className:"info-btn buy-now-btn",onClick:function(){return function(e){e.forEach((function(e){var c;m(d.a.addCart({product_id:e.product.id,quantity:null!==(c=e.quantity)&&void 0!==c?c:1,distributes:[]},!0))})),setTimeout((function(){window.location.href="/gio-hang"}),3e3)}(j)},children:"Mua ngay"}),Object(a.jsx)("button",{className:"info-btn",children:"Combo"}),Object(a.jsxs)("div",{className:"top",children:[Object(a.jsx)("div",{className:"name",children:Object(a.jsx)("div",{children:c})}),Object(a.jsxs)("div",{className:"info",children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"value",children:["Gi\u1ea3m ",1===l?i+"%":"\u20ab"+Object(n.e)(i)]}),Object(a.jsxs)("div",{className:"date",children:["HSD: ",u.split(" ")[0]]}),0==b?Object(a.jsx)("div",{className:"note",children:"S\u1ed1 l\u01b0\u1ee3ng kh\xf4ng gi\u1edbi h\u1ea1n"}):Object(a.jsx)("div",{className:"note",children:"S\u1ed1 l\u01b0\u1ee3ng c\xf3 h\u1ea1n"})]}),Object(a.jsx)("div",{className:"note",children:"\xc1p d\u1ee5ng khi mua combo s\u1ea3n ph\u1ea9m b\xean d\u01b0\u1edbi"})]})]}),Object(a.jsx)("div",{className:"products",children:Object(a.jsx)(r.a,Object(t.a)(Object(t.a)({},h),{},{children:j.map((function(e,c){return Object(a.jsx)("div",{className:"card-wraper",children:Object(a.jsx)(o,{product:e.product,quantity:e.quantity})},c)}))}))})]})}}}]);