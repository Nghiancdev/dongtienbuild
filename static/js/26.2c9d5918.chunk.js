(this.webpackJsonpsaha_web=this.webpackJsonpsaha_web||[]).push([[26,54],{1019:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return o}));var n=c(8),i=c(4),a=(c(7),c(769),c(1),c(781)),r=c(777),l=c(778),s=c(0);function o(e){var t=Object(i.c)((function(e){return e.category.categories})),c=Object(i.c)((function(e){return e.app.appTheme}));e.bannerAds;return Object(s.jsxs)("div",{className:"categories-column",children:[Object(s.jsxs)("div",{className:"column",children:[5==c.home_page_type?Object(s.jsx)(a.a,{title:"Danh m\u1ee5c s\u1ea3n ph\u1ea9m"}):Object(s.jsx)("div",{className:"main-title",children:Object(s.jsx)("h3",{children:"Danh m\u1ee5c"})}),Object(s.jsxs)(n.b,{className:"all-img",style:{display:"flex"},to:"/san-pham",children:[Object(s.jsx)("img",{className:"image-title",src:"/img/cubes.png",style:{width:"30px",marginRight:"17px",objectFit:"contain"}}),Object(s.jsx)("div",{style:{marginTop:"5px"},children:"T\u1ea5t c\u1ea3 s\u1ea3n ph\u1ea9m"})]}),t.map((function(e,t){return Object(s.jsx)("div",{className:"menu-main",children:Object(s.jsxs)(n.b,{style:{cursor:"pointer",display:"flex",alignItems:"normal"},to:"/san-pham?danh-muc=".concat(e.slug,"-").concat(e.id),children:[Object(s.jsx)("div",{className:"image",children:Object(s.jsx)("div",{className:"img-nav",children:Object(s.jsx)("img",{src:e.image_url})})}),Object(s.jsx)("div",{className:"name-list",style:{marginTop:6},children:e.name}),e.category_children.length>0&&Object(s.jsx)("i",{className:"fas fa-chevron-right",style:{color:c.color_main_1,marginTop:9}}),Object(s.jsx)("div",{className:"sub-menu-1",children:Object(s.jsx)("ul",{children:e.category_children.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)(n.b,{style:{cursor:"pointer",display:"flex"},to:"/san-pham?danh-muc-con=".concat(e.slug,"-").concat(e.id),children:Object(s.jsxs)("div",{className:"sub-menu-1-item",children:[Object(s.jsx)("div",{className:"image",children:Object(s.jsx)("div",{className:"img-list",children:Object(s.jsx)("img",{src:e.image_url})})}),Object(s.jsxs)("div",{className:"list-names",children:[" ",e.name]})]})})})}))})})]},t)})}))]}),Object(s.jsx)(r.a,{}),Object(s.jsx)(l.a,{})]})}},769:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return a}));c(135);var n=c(4),i=c(0);function a(e){Object(n.c)((function(e){return e.app.appTheme}));var t=e.banners;e.discountProducts;return Object(i.jsx)("div",{className:"",style:{marginTop:"14px"},children:t.map((function(e,t){return Object(i.jsx)("a",{href:null==e.link_to?"#":e.link_to,className:"clearfix",children:Object(i.jsx)("img",{style:{height:"450px",width:"100%",objectFit:"cover"},href:null==e.link_to?"#":e.link_to,src:e.image_url,alt:e.title})})}))})}},777:function(e,t,c){"use strict";var n,i=c(51),a=c(3),r=c(6),l=c(10),s=c(2),o=c(4),d=c(44),u=c(11),_=c(7),h=c(0),p=u.a.div(n||(n=Object(l.a)(["\n  background-color: #ffffff;\n  padding: 10px;\n  margin-top: 10px;\n  .filter__price__title {\n    font-weight: 500;\n    margin-bottom: 20px;\n  }\n  .filter__price__distance {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 15px;\n    .filter__price__input input {\n      width: 95px;\n      height: 30px;\n      padding: 0 5px;\n      border: 1px solid rgba(0, 0, 0, 0.2);\n      border-radius: 3px;\n    }\n    .filter__price__line {\n      flex-shrink: 0;\n      width: 10px;\n      height: 1.5px;\n      background-color: rgba(0, 0, 0, 0.2);\n    }\n  }\n  .filter__price__apply {\n    width: 100%;\n    height: 30px;\n    text-align: center;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: all 0.5s;\n    &:hover {\n      opacity: 0.9;\n      transform: scale(1.03);\n    }\n  }\n  .filter__price__error {\n    font-size: 12px;\n    color: #ff424f;\n    margin-bottom: 10px;\n  }\n"])));t.a=function(){var e=Object(o.c)((function(e){return e.app.appTheme})),t=Object(d.useHistory)(),c=Object(s.useState)({min_price:new URLSearchParams(window.location.search).get("min_price")?Object(_.g)(new URLSearchParams(window.location.search).get("min_price")):"",max_price:new URLSearchParams(window.location.search).get("max_price")?Object(_.g)(new URLSearchParams(window.location.search).get("max_price")):""}),n=Object(r.a)(c,2),l=n[0],u=n[1],m=Object(s.useState)(""),b=Object(r.a)(m,2),j=b[0],g=b[1],f=function(e){var t=e.target.name,c=e.target.value;u(Object(a.a)(Object(a.a)({},l),{},Object(i.a)({},t,Object(_.g)(c)))),g("")};return Object(h.jsxs)(p,{className:"filter__price",children:[Object(h.jsx)("div",{id:"filter_price_clear",onClick:function(){u({min_price:"",max_price:""})}}),Object(h.jsx)("div",{className:"filter__price__title",children:"Kho\u1ea3ng gi\xe1"}),Object(h.jsxs)("div",{className:"filter__price__distance",children:[Object(h.jsx)("div",{className:"filter__price__input",children:Object(h.jsx)("input",{type:"text",name:"min_price",id:"filter__min__price",placeholder:"\u20ab T\u1eea",value:l.min_price,onChange:f})}),Object(h.jsx)("div",{className:"filter__price__line"}),Object(h.jsx)("div",{className:"filter__price__input",children:Object(h.jsx)("input",{type:"text",name:"max_price",id:"filter__max__price",placeholder:"\u20ab \u0110\u1ebeN",value:l.max_price,onChange:f})})]}),j?Object(h.jsx)("p",{className:"filter__price__error",children:j}):null,Object(h.jsx)("button",{className:"filter__price__apply",style:{backgroundColor:e.color_main_1,color:"#ffffff"},onClick:function(){var e=Number(Object(_.c)(l.min_price)),c=Number(Object(_.c)(l.max_price));if(e&&c&&e>c)g("Vui l\xf2ng ch\u1ecdn kho\u1ea3ng gi\xe1 ph\xf9 h\u1ee3p");else if(e||c||e&&c&&e<c){var n,i,a,r=new URLSearchParams(window.location.search),s=null!==(n=r.get("search"))&&void 0!==n?n:"",o=null!==(i=r.get("descending"))&&void 0!==i?i:"",d=null!==(a=r.get("sort_by"))&&void 0!==a?a:"",u="".concat(e&&c?"min_price=".concat(e,"&max_price=").concat(c):e?"min_price=".concat(e):"max_price=".concat(c)),h="/san-pham".concat(s||o&&d?"?search=".concat(s,"&sort_by=").concat(d,"&descending=").concat(o,"&")+u:"?".concat(u));t.push(h)}},children:"\xc1p d\u1ee5ng"})]})}},778:function(e,t,c){"use strict";var n,i=c(20),a=c(6),r=c(10),l=c(2),s=c(4),o=c(44),d=c(11),u=c(196),_=c(771),h=c.n(_),p=c(0),m=d.a.div(n||(n=Object(r.a)(["\n  background-color: #ffffff;\n  margin-top: 10px;\n  .filter__attribute__content {\n    display: flex;\n    flex-direction: column;\n    .filter__attribute__main {\n      padding: 10px;\n    }\n    .filter__attribute__name {\n      font-weight: 500;\n      margin-bottom: 15px;\n    }\n    .filter__attribute__line {\n      height: 10px;\n      background-color: #f7f7f7;\n    }\n  }\n  ul {\n    display: flex;\n    flex-direction: column;\n    row-gap: 8px;\n    li {\n      display: flex;\n      align-items: center;\n      column-gap: 10px;\n    }\n  }\n"])));t.a=function(e){var t=Object(s.b)(),c=Object(s.c)((function(e){return e.product.listAttributes})),n=Object(o.useHistory)(),r=Object(l.useState)([]),d=Object(a.a)(r,2),_=d[0],b=d[1],j=Object(l.useState)((function(){return"true"==new URLSearchParams(window.location.search).get("has_discount")})),g=Object(a.a)(j,2),f=g[0],x=g[1],v=Object(l.useState)((function(){var e;return new URLSearchParams(window.location.search).get("attribute_search_children_ids")?(e=new URLSearchParams(window.location.search).get("attribute_search_children_ids"))?null===e||void 0===e?void 0:e.split(","):[]:[]})),O=Object(a.a)(v,2),y=O[0],w=O[1];var N=h.a.parse(window.location.search),k=function(e){var t,c,a,r,l,s,o,d=[];d=y.includes(e)?y.filter((function(t){return t!==e})):[].concat(Object(i.a)(y),[e]);var u=function(e){for(var t=Object(i.a)(Object.keys(e)),c=0;c<t.length;c++)if("title"!==t[c]){if("danh-muc"===t[c]){var n=e[t[c]].split("-"),a=n[n.length-1];N.category_ids=a}else N[t[c]]=e[t[c]];if("danh-muc-con"===t[c]){var r=e[t[c]].split("-"),l=r[r.length-1];N.category_children_ids=l}}return Object(i.a)(Object.keys(N)).reduce((function(e,t){return"".concat(e).concat(t,"=").concat(N[t],"&")}),"?")}(N),_=new URLSearchParams(u),h=null!==(t=_.get("category_ids"))&&void 0!==t?t:"",p=null!==(c=_.get("category_children_ids"))&&void 0!==c?c:"",m=new URLSearchParams(window.location.search),b=null!==(a=m.get("min_price"))&&void 0!==a?a:"",j=null!==(r=m.get("max_price"))&&void 0!==r?r:"",g=null!==(l=m.get("search"))&&void 0!==l?l:"",x=null!==(s=m.get("descending"))&&void 0!==s?s:"",v=null!==(o=m.get("sort_by"))&&void 0!==o?o:"",O="".concat(b&&j?"min_price=".concat(b,"&max_price=").concat(j):b?"min_price=".concat(b):j?"max_price=".concat(j):""),k="/san-pham?".concat(g||x&&v?"search=".concat(g,"&sort_by=").concat(v,"&descending=").concat(x):"").concat(O?"&".concat(O):"").concat(d.length>0&&(g||x&&v)?"&attribute_search_children_ids=".concat(d.join(","),"&category_ids=").concat(h,"&category_children_ids=").concat(p):d.length>0?"attribute_search_children_ids=".concat(d.join(","),"&category_ids=").concat(h,"&category_children_ids=").concat(p):"").concat(f?"&has_discount=true":"");n.push(k),w(d)},S=function(e){var t,n,i=JSON.parse(JSON.stringify(_));i[e].collapse?i[e].data=c.list[e]:i[e].data.product_attribute_search_children=null===(t=c.list[e])||void 0===t||null===(n=t.product_attribute_search_children)||void 0===n?void 0:n.slice(0,5);i[e].collapse=!i[e].collapse,b(i)};return Object(l.useEffect)((function(){var e;if((null===(e=c.list)||void 0===e?void 0:e.length)>0){var t=[];c.list.forEach((function(e){var c,n,i,a=JSON.parse(JSON.stringify(e));(null===(c=a.product_attribute_search_children)||void 0===c?void 0:c.length)>5&&(a.product_attribute_search_children=null===(i=a.product_attribute_search_children)||void 0===i?void 0:i.slice(0,5));var r={collapse:(null===(n=e.product_attribute_search_children)||void 0===n?void 0:n.length)>5||null,data:a};t.push(r)})),b(t)}}),[c.list]),Object(l.useEffect)((function(){"LOADING"===c.status&&t(u.a.getProductAttributes())}),[t]),Object(p.jsxs)(m,{className:"filter__attribute",children:[Object(p.jsx)("div",{id:"filter_attribute_clear",onClick:function(){w([]),x(!1)}}),(null===_||void 0===_?void 0:_.length)>0&&Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"filter__attribute__content",children:[Object(p.jsxs)("div",{className:"filter__attribute__main",children:[Object(p.jsx)("div",{className:"filter__attribute__name",children:"Khuy\u1ebfn m\xe3i"}),Object(p.jsx)("ul",{children:Object(p.jsxs)("li",{children:[Object(p.jsx)("input",{type:"checkbox",id:"discount",name:"discount",checked:f,value:f,onChange:function(){var e,t,c,i,a,r=new URLSearchParams(window.location.search),l=null!==(e=r.get("min_price"))&&void 0!==e?e:"",s=null!==(t=r.get("max_price"))&&void 0!==t?t:"",o=null!==(c=r.get("search"))&&void 0!==c?c:"",d=null!==(i=r.get("descending"))&&void 0!==i?i:"",u=null!==(a=r.get("sort_by"))&&void 0!==a?a:"",_="".concat(l&&s?"min_price=".concat(l,"&max_price=").concat(s):l?"min_price=".concat(l):s?"max_price=".concat(s):""),h="/san-pham?".concat(o||d&&u?"search=".concat(o,"&sort_by=").concat(u,"&descending=").concat(d):"").concat(_?"&".concat(_):"").concat(y.length>0&&(o||d&&u)?"&attribute_search_children_ids=".concat(y.join(",")):y.length>0?"attribute_search_children_ids=".concat(y.join(",")):"","&has_discount=".concat(!f));n.push(h),x((function(e){return!e}))}}),Object(p.jsx)("label",{htmlFor:"discount",children:"Gi\u1ea3m gi\xe1"})]})})]}),Object(p.jsx)("div",{className:"filter__attribute__line"}),null===_||void 0===_?void 0:_.map((function(e,t){var c,n,i,a,r,l,s;return Object(p.jsx)("div",{children:(null===(c=e.data)||void 0===c||null===(n=c.product_attribute_search_children)||void 0===n?void 0:n.length)>0?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"filter__attribute__main",children:[Object(p.jsx)("div",{className:"filter__attribute__name",children:null===(i=e.data)||void 0===i?void 0:i.name}),(null===(a=e.data)||void 0===a||null===(r=a.product_attribute_search_children)||void 0===r?void 0:r.length)>0&&Object(p.jsx)("ul",{children:null===(l=e.data)||void 0===l||null===(s=l.product_attribute_search_children)||void 0===s?void 0:s.map((function(e){var t,c;return Object(p.jsxs)("li",{children:[Object(p.jsx)("input",{type:"checkbox",id:"".concat(e.name).concat(e.id),name:"".concat(e.name).concat(e.id),checked:y.includes(null===(t=e.id)||void 0===t?void 0:t.toString()),value:y.includes(null===(c=e.id)||void 0===c?void 0:c.toString()),onChange:function(){var t;return k(null===(t=e.id)||void 0===t?void 0:t.toString())}}),Object(p.jsx)("label",{htmlFor:"".concat(e.name).concat(e.id),children:e.name})]},e.id)}))}),null===e.collapse?null:e.collapse?Object(p.jsxs)("div",{className:"menu_collapse",style:{padding:"10px 0 5px"},onClick:function(){return S(t)},children:["Xem th\xeam ",Object(p.jsx)("i",{className:"fa fa-angle-double-down"})]}):Object(p.jsxs)("div",{className:"menu_collapse",style:{padding:"10px 0"},onClick:function(){return S(t)},children:["Thu g\u1ecdn ",Object(p.jsx)("i",{className:"fa fa-angle-double-up"})]})]}),Object(p.jsx)("div",{className:"filter__attribute__line"})]}):""},t)}))]})})]})}},781:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));c(2);var n=c(0);function i(e){return Object(n.jsxs)("div",{style:{backgroundColor:"white","border-bottom":"2px dotted #e5e5e5",paddingTop:10},className:"product-category-toggle-1 flex items-center","data-url":"/danh-muc-san-pham",children:[Object(n.jsx)("em",{className:"ri-align-left"}),Object(n.jsxs)("strong",{children:["\xa0\xa0",e.title]}),Object(n.jsx)("em",{className:"ri-arrow-drop-down-fill"})]})}}}]);