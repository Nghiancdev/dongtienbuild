(this.webpackJsonpsaha_web=this.webpackJsonpsaha_web||[]).push([[49,71],{837:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return c}));var n=i(4),a=i(0);function c(){var e=Object(n.c)((function(e){return e.app.appTheme}));return Object(a.jsx)("div",{className:"data-loading",children:Object(a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",display:"block",shapeRendering:"auto"},width:"100px",height:"100px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(a.jsx)("g",{transform:"rotate(0 50 50)",children:Object(a.jsx)("rect",{x:"47",y:"26",rx:"3",ry:"6",width:"6",height:"12",fill:e.color_main_1,children:Object(a.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.5s",begin:"-0.8333333333333334s",repeatCount:"indefinite"})})}),Object(a.jsx)("g",{transform:"rotate(60 50 50)",children:Object(a.jsx)("rect",{x:"47",y:"26",rx:"3",ry:"6",width:"6",height:"12",fill:e.color_main_1,children:Object(a.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.5s",begin:"-0.6666666666666666s",repeatCount:"indefinite"})})}),Object(a.jsx)("g",{transform:"rotate(120 50 50)",children:Object(a.jsx)("rect",{x:"47",y:"26",rx:"3",ry:"6",width:"6",height:"12",fill:e.color_main_1,children:Object(a.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.5s",begin:"-0.5s",repeatCount:"indefinite"})})}),Object(a.jsx)("g",{transform:"rotate(180 50 50)",children:Object(a.jsx)("rect",{x:"47",y:"26",rx:"3",ry:"6",width:"6",height:"12",fill:e.color_main_1,children:Object(a.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.5s",begin:"-0.3333333333333333s",repeatCount:"indefinite"})})}),Object(a.jsx)("g",{transform:"rotate(240 50 50)",children:Object(a.jsx)("rect",{x:"47",y:"26",rx:"3",ry:"6",width:"6",height:"12",fill:e.color_main_1,children:Object(a.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.5s",begin:"-0.16666666666666666s",repeatCount:"indefinite"})})}),Object(a.jsx)("g",{transform:"rotate(300 50 50)",children:Object(a.jsx)("rect",{x:"47",y:"26",rx:"3",ry:"6",width:"6",height:"12",fill:e.color_main_1,children:Object(a.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.5s",begin:"0s",repeatCount:"indefinite"})})})]})})}},970:function(e,t,i){"use strict";i.r(t);var n=i(20),a=i(2),c=i.n(a),r=i(771),s=i.n(r),l=i(8),o=i(4),d=(i(1),i(195),i(837),i(0)),u=c.a.lazy((function(){return i.e(70).then(i.bind(null,1042))})),j=c.a.lazy((function(){return Promise.resolve().then(i.bind(null,49))}));function h(e){var t=s.a.parse(e.location.search),i=Object(o.c)((function(e){return e.news.list})),a=Object(o.c)((function(e){return e.news.categories}));return Object(d.jsx)(c.a.Fragment,{children:Object(d.jsxs)("div",{className:"news-list",style:{padding:"0px 10px 0px 10px"},children:[Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("h3",{children:"Danh m\u1ee5c tin t\u1ee9c"}),Object(d.jsxs)("h4",{children:[Object(d.jsx)("span",{onClick:function(){window.location.href="/"},children:"Trang ch\u1ee7 /"})," ","Danh m\u1ee5c tin t\u1ee9c"]})]}),Object(d.jsx)("div",{className:"news-category",children:a.list.map((function(e,t){return Object(d.jsx)(l.b,{className:"news-category-card",to:e.title?"/tin-tuc?danh-muc=".concat(e.slug,"-").concat(e.id):"/tin-tuc?danh-muc=".concat(e.id),children:e.title},t)}))}),Object(d.jsx)("div",{className:"row",style:{},children:i.data.map((function(e,t){return Object(d.jsx)("div",{className:"card-container",children:Object(d.jsx)(u,{id:e.id,date:e.created_at,title:e.title,img:e.image_url,quote:e.summary,slug:e.slug})},t)}))}),Object(d.jsx)(j,{currentPage:i.current_page,totalPage:i.last_page,handlePageSelect:function(e){for(var i=Object(n.a)(Object.keys(e)),a=0;a<i.length;a++)"title"!==i[a]&&(t[i[a]]=e[i[a]]);var c=Object(n.a)(Object.keys(t)).reduce((function(e,i){return"".concat(e).concat(i,"=").concat(t[i],"&")}),"?");window.location.href=window.location.origin+window.location.pathname+c}})]})})}t.default=c.a.memo(h)}}]);