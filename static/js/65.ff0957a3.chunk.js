(this.webpackJsonpsaha_web=this.webpackJsonpsaha_web||[]).push([[65],{1089:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return b}));var c=e(3),i=e(7),o=e(4),s=e(0);function a(n){var t=Object(o.c)((function(n){return n.app.appTheme})),e=n.product,c=(e.price,e.product_discount),a=e.images,l=(e.id,e.min_price),r=e.max_price,d=e.product_id,u="/img/default_product.jpg";return c&&c.discount_price,a.length&&(u=a[0].image_url),Object(s.jsxs)("div",{className:"discount-product-card",onClick:function(){window.location.href="/san-pham/".concat(d)},children:[Object(s.jsx)("div",{className:"image",children:Object(s.jsx)("div",{className:"img-container",children:Object(s.jsx)("img",{src:u,alt:""})})}),Object(s.jsx)("div",{className:"price",style:{color:t.color_main_1},children:l===r?Object(i.e)(l):"".concat(Object(i.e)(l)," - ").concat(Object(i.e)(r))}),Object(s.jsxs)("div",{className:"prev-price",children:["S\u1ed1 l\u01b0\u1ee3ng: ",n.quantity]})]})}var l=e(135),r=e.n(l),d=e(31),u=e(58),h=e.n(u);function b(n){var t,e,l=n.bonusProductLadder,u=l.discount_type,b=l.value_discount,j=l.start_time,m=l.end_time,p=l.amount,v=l.bonus_products_ladder,g=l.value_limit_total,f=n.name;console.log(n.bonusProductLadder,"ttt"),console.log(n.bonusProductLadder);var O=null===(t=v[0])||void 0===t?void 0:t.product,x=null;O&&(x=O.name,O=[O]);var _=[],y=[];console.log(O),(null===(e=O)||void 0===e?void 0:e.length)>0&&O.forEach((function(n){_.push(n)}));var N={infinite:_.length>4,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:600,settings:{infinite:_.length>2,slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{infinite:_.length>4,slidesToShow:4,slidesToScroll:1}},{breakpoint:992,settings:{infinite:_.length>5,slidesToShow:5,slidesToScroll:1}}]};(null===v||void 0===v?void 0:v.length)>0&&v.forEach((function(n){y.push(Object(c.a)(Object(c.a)({},n.bo_product),{},{from_quantity:n.from_quantity,bo_quantity:n.bo_quantity}))}));b=0==u?Object(i.e)(b):b+"%",h()(j).format("DD-MM-YYYY");var T=h()(m).format("DD-MM-YYYY"),w=(Object(i.e)(g)," ");(null===_||void 0===_?void 0:_.length)>0&&_.forEach((function(n,t){w=t==_.length-1?" "+n.name:w+", "+n.name}));var q=Object(o.b)();var S="";S=[];return console.log(y,x),(null===y||void 0===y?void 0:y.length)>0&&null!==x&&y.forEach((function(n,t){console.log(n),t==y.length-1?S.push(Object(s.jsxs)("div",{style:{marginTop:"8px"},children:["-"," ","Mua ".concat(n.from_quantity," s\u1ea3n ph\u1ea9m ").concat(x," - T\u1eb7ng  ").concat(n.bo_quantity)+" "+n.name+","]})):S.push(Object(s.jsxs)("div",{style:{marginTop:"8px"},children:["-"," ","Mua ".concat(n.from_quantity," s\u1ea3n ph\u1ea9m ").concat(x," - T\u1eb7ng ").concat(n.bo_quantity)+" "+n.name+","]}))})),console.log(_),Object(s.jsxs)("div",{className:"combo-card",children:[Object(s.jsx)("button",{className:"info-btn buy-now-btn",style:{right:"141px"},onClick:function(){return function(n){n.forEach((function(n){q(d.a.addCart({product_id:n.id,quantity:1,distributes:[]},!0))})),setTimeout((function(){window.location.href="/gio-hang"}),3e3)}(_)},children:"Mua ngay"}),Object(s.jsx)("button",{className:"info-btn",children:"Th\u01b0\u1edfng s\u1ea3n ph\u1ea9m"}),Object(s.jsxs)("div",{className:"top",children:[Object(s.jsx)("div",{className:"name",children:Object(s.jsx)("div",{children:f})}),Object(s.jsxs)("div",{className:"info",children:[Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"date",children:["HSD: ",T]}),p?Object(s.jsxs)("div",{className:"note",children:["S\u1ed1 l\u01b0\u1ee3ng c\xf3 h\u1ea1n: ",p]}):Object(s.jsxs)("div",{className:"note",children:["S\u1ed1 l\u01b0\u1ee3ng kh\xf4ng gi\u1edbi h\u1ea1n ",p]}),Object(s.jsxs)("div",{className:"note",children:["\u01afu \u0111\xe3i: ",S]})]}),Object(s.jsx)("div",{className:"note",children:"\xc1p d\u1ee5ng khi mua c\xe1c s\u1ea3n ph\u1ea9m b\xean d\u01b0\u1edbi"})]})]}),Object(s.jsx)("div",{className:"products",children:Object(s.jsx)(r.a,Object(c.a)(Object(c.a)({},N),{},{children:_.map((function(n,t){return Object(s.jsx)("div",{className:"card-wraper",children:Object(s.jsx)(a,{product:n,quantity:n.quantity})},t)}))}))})]})}}}]);