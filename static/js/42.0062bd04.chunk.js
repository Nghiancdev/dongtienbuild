(this.webpackJsonpsaha_web=this.webpackJsonpsaha_web||[]).push([[42],{1020:function(e,n,t){"use strict";t.r(n);var c,i,a=t(20),r=t(6),o=t(10),l=t(2),s=t(4),d=t(8),_=t(11),u=t(778),h=t(777),p=t(0),m=_.a.section(c||(c=Object(o.a)(["\n  width: 260px;\n  flex-shrink: 0;\n  .category-column__mainContent {\n    /* position: sticky;\n    top: 0; */\n    overflow: hidden;\n  }\n  .category-column__content {\n    background-color: white;\n    box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.01);\n    .category-column__title {\n      padding: 14px 20px;\n      text-transform: uppercase;\n      border-bottom: 1px solid #f7f8f9;\n    }\n  }\n  .category-column__main {\n    color: #221f20;\n    line-height: 20px;\n    a {\n      font-size: 16px;\n      &:hover {\n        color: #221f20;\n      }\n    }\n    .category-column__allCategory {\n      a {\n        padding: 14px 20px;\n        display: block;\n      }\n      border-bottom: 1px solid #f7f8f9;\n    }\n    .category-column__item {\n      border-bottom: 1px solid #f7f8f9;\n      position: relative;\n      a {\n        display: flex;\n        column-gap: 10px;\n        justify-content: space-between;\n        align-items: center;\n        padding: 14px 20px;\n        background-color: white;\n        .category-column__item__name,\n        .category-column__item__childName {\n          text-overflow: ellipsis;\n          overflow: hidden;\n          white-space: nowrap;\n        }\n      }\n      .category-column__item__icon {\n        position: absolute;\n        cursor: pointer;\n        top: 10px;\n        right: 10px;\n        z-index: 10;\n        color: rgba(34, 31, 32, 0.6);\n        svg {\n          width: 20px;\n          height: 20px;\n        }\n      }\n      .category-column__item__child {\n        max-height: auto;\n        overflow: hidden;\n        transition: all 0.4s ease-out;\n        ul {\n          li {\n            padding-left: 15px;\n          }\n        }\n      }\n    }\n  }\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),b=_.a.h3(i||(i=Object(o.a)(['\n  font-size: 1.2rem;\n  position: relative;\n  &::before {\n    content: "";\n    position: absolute;\n    width: 20%;\n    height: 2px;\n    top: 105%;\n    left: 0;\n    background-color: ',";\n  }\n"])),(function(e){return e.colorTheme}));n.default=function(){var e=Object(s.c)((function(e){return e.category.categories})),n=Object(s.c)((function(e){return e.app.appTheme})),t=Object(l.useState)([]),c=Object(r.a)(t,2),i=c[0],o=c[1],_=function(e){var n=[];n=i.includes(e)?i.filter((function(n){return n!==e})):[].concat(Object(a.a)(i),[e]),o(n)};return Object(p.jsx)(m,{className:"category-column",children:Object(p.jsxs)("div",{className:"category-column__mainContent",children:[Object(p.jsxs)("div",{className:"category-column__content",children:[Object(p.jsx)("div",{className:"category-column__title",children:Object(p.jsx)(b,{colorTheme:"".concat(n.color_main_1),children:"Danh m\u1ee5c"})}),Object(p.jsxs)("div",{className:"category-column__main",children:[Object(p.jsx)("div",{className:"category-column__allCategory",children:Object(p.jsx)(d.b,{to:"/san-pham",children:Object(p.jsx)("div",{children:"T\u1ea5t c\u1ea3 s\u1ea3n ph\u1ea9m"})})}),e.length>0&&e.map((function(e){var n;return Object(p.jsxs)("div",{className:"category-column__item",children:[Object(p.jsx)(d.b,{to:"/san-pham?danh-muc=".concat(e.slug,"-").concat(e.id),children:Object(p.jsx)("div",{className:"category-column__item__name",title:e.name,children:e.name})}),e.category_children.length>0&&Object(p.jsx)(p.Fragment,{children:i.includes(e.id)?Object(p.jsx)("span",{className:"category-column__item__icon",onClick:function(){return _(e.id)},children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:Object(p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 12H6"})})}):Object(p.jsx)("span",{className:"category-column__item__icon",onClick:function(){return _(e.id)},children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:Object(p.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m6-6H6"})})})}),Object(p.jsx)("div",{className:"category-column__item__child",style:{maxHeight:i.includes(e.id)?"calc(40px*".concat(null===e||void 0===e||null===(n=e.category_children)||void 0===n?void 0:n.length,")"):"0",overflow:i.includes(e.id)?"visible":"hidden"},children:Object(p.jsx)("ul",{children:e.category_children.length>0&&e.category_children.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:"/san-pham?danh-muc-con=".concat(e.slug,"-").concat(e.id),children:Object(p.jsx)("div",{className:"category-column__item__childName",title:e.name,children:e.name})})},e.id)}))})})]},e.id)}))]})]}),Object(p.jsx)(h.a,{}),Object(p.jsx)(u.a,{})]})})}},777:function(e,n,t){"use strict";var c,i=t(51),a=t(3),r=t(6),o=t(10),l=t(2),s=t(4),d=t(44),_=t(11),u=t(7),h=t(0),p=_.a.div(c||(c=Object(o.a)(["\n  background-color: #ffffff;\n  padding: 10px;\n  margin-top: 10px;\n  .filter__price__title {\n    font-weight: 500;\n    margin-bottom: 20px;\n  }\n  .filter__price__distance {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 15px;\n    .filter__price__input input {\n      width: 95px;\n      height: 30px;\n      padding: 0 5px;\n      border: 1px solid rgba(0, 0, 0, 0.2);\n      border-radius: 3px;\n    }\n    .filter__price__line {\n      flex-shrink: 0;\n      width: 10px;\n      height: 1.5px;\n      background-color: rgba(0, 0, 0, 0.2);\n    }\n  }\n  .filter__price__apply {\n    width: 100%;\n    height: 30px;\n    text-align: center;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: all 0.5s;\n    &:hover {\n      opacity: 0.9;\n      transform: scale(1.03);\n    }\n  }\n  .filter__price__error {\n    font-size: 12px;\n    color: #ff424f;\n    margin-bottom: 10px;\n  }\n"])));n.a=function(){var e=Object(s.c)((function(e){return e.app.appTheme})),n=Object(d.useHistory)(),t=Object(l.useState)({min_price:new URLSearchParams(window.location.search).get("min_price")?Object(u.g)(new URLSearchParams(window.location.search).get("min_price")):"",max_price:new URLSearchParams(window.location.search).get("max_price")?Object(u.g)(new URLSearchParams(window.location.search).get("max_price")):""}),c=Object(r.a)(t,2),o=c[0],_=c[1],m=Object(l.useState)(""),b=Object(r.a)(m,2),j=b[0],g=b[1],f=function(e){var n=e.target.name,t=e.target.value;_(Object(a.a)(Object(a.a)({},o),{},Object(i.a)({},n,Object(u.g)(t)))),g("")};return Object(h.jsxs)(p,{className:"filter__price",children:[Object(h.jsx)("div",{id:"filter_price_clear",onClick:function(){_({min_price:"",max_price:""})}}),Object(h.jsx)("div",{className:"filter__price__title",children:"Kho\u1ea3ng gi\xe1"}),Object(h.jsxs)("div",{className:"filter__price__distance",children:[Object(h.jsx)("div",{className:"filter__price__input",children:Object(h.jsx)("input",{type:"text",name:"min_price",id:"filter__min__price",placeholder:"\u20ab T\u1eea",value:o.min_price,onChange:f})}),Object(h.jsx)("div",{className:"filter__price__line"}),Object(h.jsx)("div",{className:"filter__price__input",children:Object(h.jsx)("input",{type:"text",name:"max_price",id:"filter__max__price",placeholder:"\u20ab \u0110\u1ebeN",value:o.max_price,onChange:f})})]}),j?Object(h.jsx)("p",{className:"filter__price__error",children:j}):null,Object(h.jsx)("button",{className:"filter__price__apply",style:{backgroundColor:e.color_main_1,color:"#ffffff"},onClick:function(){var e=Number(Object(u.c)(o.min_price)),t=Number(Object(u.c)(o.max_price));if(e&&t&&e>t)g("Vui l\xf2ng ch\u1ecdn kho\u1ea3ng gi\xe1 ph\xf9 h\u1ee3p");else if(e||t||e&&t&&e<t){var c,i,a,r=new URLSearchParams(window.location.search),l=null!==(c=r.get("search"))&&void 0!==c?c:"",s=null!==(i=r.get("descending"))&&void 0!==i?i:"",d=null!==(a=r.get("sort_by"))&&void 0!==a?a:"",_="".concat(e&&t?"min_price=".concat(e,"&max_price=").concat(t):e?"min_price=".concat(e):"max_price=".concat(t)),h="/san-pham".concat(l||s&&d?"?search=".concat(l,"&sort_by=").concat(d,"&descending=").concat(s,"&")+_:"?".concat(_));n.push(h)}},children:"\xc1p d\u1ee5ng"})]})}},778:function(e,n,t){"use strict";var c,i=t(20),a=t(6),r=t(10),o=t(2),l=t(4),s=t(44),d=t(11),_=t(196),u=t(771),h=t.n(u),p=t(0),m=d.a.div(c||(c=Object(r.a)(["\n  background-color: #ffffff;\n  margin-top: 10px;\n  .filter__attribute__content {\n    display: flex;\n    flex-direction: column;\n    .filter__attribute__main {\n      padding: 10px;\n    }\n    .filter__attribute__name {\n      font-weight: 500;\n      margin-bottom: 15px;\n    }\n    .filter__attribute__line {\n      height: 10px;\n      background-color: #f7f7f7;\n    }\n  }\n  ul {\n    display: flex;\n    flex-direction: column;\n    row-gap: 8px;\n    li {\n      display: flex;\n      align-items: center;\n      column-gap: 10px;\n    }\n  }\n"])));n.a=function(e){var n=Object(l.b)(),t=Object(l.c)((function(e){return e.product.listAttributes})),c=Object(s.useHistory)(),r=Object(o.useState)([]),d=Object(a.a)(r,2),u=d[0],b=d[1],j=Object(o.useState)((function(){return"true"==new URLSearchParams(window.location.search).get("has_discount")})),g=Object(a.a)(j,2),f=g[0],x=g[1],v=Object(o.useState)((function(){var e;return new URLSearchParams(window.location.search).get("attribute_search_children_ids")?(e=new URLSearchParams(window.location.search).get("attribute_search_children_ids"))?null===e||void 0===e?void 0:e.split(","):[]:[]})),O=Object(a.a)(v,2),y=O[0],w=O[1];var N=h.a.parse(window.location.search),k=function(e){var n,t,a,r,o,l,s,d=[];d=y.includes(e)?y.filter((function(n){return n!==e})):[].concat(Object(i.a)(y),[e]);var _=function(e){for(var n=Object(i.a)(Object.keys(e)),t=0;t<n.length;t++)if("title"!==n[t]){if("danh-muc"===n[t]){var c=e[n[t]].split("-"),a=c[c.length-1];N.category_ids=a}else N[n[t]]=e[n[t]];if("danh-muc-con"===n[t]){var r=e[n[t]].split("-"),o=r[r.length-1];N.category_children_ids=o}}return Object(i.a)(Object.keys(N)).reduce((function(e,n){return"".concat(e).concat(n,"=").concat(N[n],"&")}),"?")}(N),u=new URLSearchParams(_),h=null!==(n=u.get("category_ids"))&&void 0!==n?n:"",p=null!==(t=u.get("category_children_ids"))&&void 0!==t?t:"",m=new URLSearchParams(window.location.search),b=null!==(a=m.get("min_price"))&&void 0!==a?a:"",j=null!==(r=m.get("max_price"))&&void 0!==r?r:"",g=null!==(o=m.get("search"))&&void 0!==o?o:"",x=null!==(l=m.get("descending"))&&void 0!==l?l:"",v=null!==(s=m.get("sort_by"))&&void 0!==s?s:"",O="".concat(b&&j?"min_price=".concat(b,"&max_price=").concat(j):b?"min_price=".concat(b):j?"max_price=".concat(j):""),k="/san-pham?".concat(g||x&&v?"search=".concat(g,"&sort_by=").concat(v,"&descending=").concat(x):"").concat(O?"&".concat(O):"").concat(d.length>0&&(g||x&&v)?"&attribute_search_children_ids=".concat(d.join(","),"&category_ids=").concat(h,"&category_children_ids=").concat(p):d.length>0?"attribute_search_children_ids=".concat(d.join(","),"&category_ids=").concat(h,"&category_children_ids=").concat(p):"").concat(f?"&has_discount=true":"");c.push(k),w(d)},S=function(e){var n,c,i=JSON.parse(JSON.stringify(u));i[e].collapse?i[e].data=t.list[e]:i[e].data.product_attribute_search_children=null===(n=t.list[e])||void 0===n||null===(c=n.product_attribute_search_children)||void 0===c?void 0:c.slice(0,5);i[e].collapse=!i[e].collapse,b(i)};return Object(o.useEffect)((function(){var e;if((null===(e=t.list)||void 0===e?void 0:e.length)>0){var n=[];t.list.forEach((function(e){var t,c,i,a=JSON.parse(JSON.stringify(e));(null===(t=a.product_attribute_search_children)||void 0===t?void 0:t.length)>5&&(a.product_attribute_search_children=null===(i=a.product_attribute_search_children)||void 0===i?void 0:i.slice(0,5));var r={collapse:(null===(c=e.product_attribute_search_children)||void 0===c?void 0:c.length)>5||null,data:a};n.push(r)})),b(n)}}),[t.list]),Object(o.useEffect)((function(){"LOADING"===t.status&&n(_.a.getProductAttributes())}),[n]),Object(p.jsxs)(m,{className:"filter__attribute",children:[Object(p.jsx)("div",{id:"filter_attribute_clear",onClick:function(){w([]),x(!1)}}),(null===u||void 0===u?void 0:u.length)>0&&Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"filter__attribute__content",children:[Object(p.jsxs)("div",{className:"filter__attribute__main",children:[Object(p.jsx)("div",{className:"filter__attribute__name",children:"Khuy\u1ebfn m\xe3i"}),Object(p.jsx)("ul",{children:Object(p.jsxs)("li",{children:[Object(p.jsx)("input",{type:"checkbox",id:"discount",name:"discount",checked:f,value:f,onChange:function(){var e,n,t,i,a,r=new URLSearchParams(window.location.search),o=null!==(e=r.get("min_price"))&&void 0!==e?e:"",l=null!==(n=r.get("max_price"))&&void 0!==n?n:"",s=null!==(t=r.get("search"))&&void 0!==t?t:"",d=null!==(i=r.get("descending"))&&void 0!==i?i:"",_=null!==(a=r.get("sort_by"))&&void 0!==a?a:"",u="".concat(o&&l?"min_price=".concat(o,"&max_price=").concat(l):o?"min_price=".concat(o):l?"max_price=".concat(l):""),h="/san-pham?".concat(s||d&&_?"search=".concat(s,"&sort_by=").concat(_,"&descending=").concat(d):"").concat(u?"&".concat(u):"").concat(y.length>0&&(s||d&&_)?"&attribute_search_children_ids=".concat(y.join(",")):y.length>0?"attribute_search_children_ids=".concat(y.join(",")):"","&has_discount=".concat(!f));c.push(h),x((function(e){return!e}))}}),Object(p.jsx)("label",{htmlFor:"discount",children:"Gi\u1ea3m gi\xe1"})]})})]}),Object(p.jsx)("div",{className:"filter__attribute__line"}),null===u||void 0===u?void 0:u.map((function(e,n){var t,c,i,a,r,o,l;return Object(p.jsx)("div",{children:(null===(t=e.data)||void 0===t||null===(c=t.product_attribute_search_children)||void 0===c?void 0:c.length)>0?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"filter__attribute__main",children:[Object(p.jsx)("div",{className:"filter__attribute__name",children:null===(i=e.data)||void 0===i?void 0:i.name}),(null===(a=e.data)||void 0===a||null===(r=a.product_attribute_search_children)||void 0===r?void 0:r.length)>0&&Object(p.jsx)("ul",{children:null===(o=e.data)||void 0===o||null===(l=o.product_attribute_search_children)||void 0===l?void 0:l.map((function(e){var n,t;return Object(p.jsxs)("li",{children:[Object(p.jsx)("input",{type:"checkbox",id:"".concat(e.name).concat(e.id),name:"".concat(e.name).concat(e.id),checked:y.includes(null===(n=e.id)||void 0===n?void 0:n.toString()),value:y.includes(null===(t=e.id)||void 0===t?void 0:t.toString()),onChange:function(){var n;return k(null===(n=e.id)||void 0===n?void 0:n.toString())}}),Object(p.jsx)("label",{htmlFor:"".concat(e.name).concat(e.id),children:e.name})]},e.id)}))}),null===e.collapse?null:e.collapse?Object(p.jsxs)("div",{className:"menu_collapse",style:{padding:"10px 0 5px"},onClick:function(){return S(n)},children:["Xem th\xeam ",Object(p.jsx)("i",{className:"fa fa-angle-double-down"})]}):Object(p.jsxs)("div",{className:"menu_collapse",style:{padding:"10px 0"},onClick:function(){return S(n)},children:["Thu g\u1ecdn ",Object(p.jsx)("i",{className:"fa fa-angle-double-up"})]})]}),Object(p.jsx)("div",{className:"filter__attribute__line"})]}):""},n)}))]})})]})}}}]);