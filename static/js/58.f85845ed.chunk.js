(this.webpackJsonpsaha_web=this.webpackJsonpsaha_web||[]).push([[58],{1066:function(e,c,s){"use strict";s.r(c);var n=s(6),a=s(2),t=s.n(a),i=s(4),l=s(12),r=s(1),o=s(9),j=(s(195),s(0)),h=t.a.lazy((function(){return Promise.resolve().then(s.bind(null,117))}));c.default=function(){var e=Object(i.c)((function(e){return e.app.appTheme})),c=Object(i.b)(),s=Object(i.c)((function(e){return e.user.profile})),m=Object(i.c)((function(e){return e.user.badges})),d=Object(i.c)((function(e){return e.user.status})),b=t.a.useState(""),f=Object(n.a)(b,2),u=(f[0],f[1]);return Object(a.useEffect)((function(){d===r.constants.LOADING&&c(l.a.getUserProfile())})),Object(j.jsx)(t.a.Fragment,{children:d===r.constants.SUCCESS?Object(j.jsxs)(t.a.Fragment,{children:[Object(j.jsxs)("div",{className:"account-page",children:[Object(j.jsx)("div",{className:"account-info",style:{position:"unset"},children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"avt",children:s.name[0]}),Object(j.jsxs)("div",{style:{marginLeft:"1em"},children:[Object(j.jsx)("div",{className:"name",children:s.name}),Object(j.jsx)("div",{className:"email",children:s.email}),Object(j.jsx)("div",{className:"phone",children:s.phone_number})]})]})}),Object(j.jsxs)("div",{style:{marginTop:"0.5em"},children:[Object(j.jsxs)("a",{href:"/don-hang",className:"link row",children:[Object(j.jsx)("i",{class:"fas fa-money-bill icon-user",style:{color:e.color_main_1}})," ",Object(j.jsx)("div",{style:{marginLeft:"0.75em"},children:"\u0110\u01a1n h\xe0ng c\u1ee7a t\xf4i"})]}),Object(j.jsxs)("a",{href:"/san-pham-da-mua",className:"link row",children:[Object(j.jsx)("i",{class:"fas fa-shopping-cart icon-user",style:{color:e.color_main_1}})," ",Object(j.jsx)("div",{style:{marginLeft:"0.75em"},children:"S\u1ea3n ph\u1ea9m \u0111\xe3 mua"})]}),Object(j.jsxs)("a",{href:"/dia-chi",className:"link row",children:[Object(j.jsx)("i",{class:"fas fa-map-marker icon-user",style:{color:e.color_main_1}})," ",Object(j.jsx)("div",{style:{marginLeft:"0.75em"},children:"\u0110\u1ecba ch\u1ec9 nh\u1eadn h\xe0ng"})]}),Object(j.jsxs)("a",{href:"/danh-gia-cua-toi",className:"link row",children:[Object(j.jsx)("i",{class:"fas fa-star icon-user",style:{color:e.color_main_1}})," ",Object(j.jsx)("div",{style:{marginLeft:"0.75em"},children:" \u0110\xe1nh gi\xe1 c\u1ee7a t\xf4i"})]}),Object(j.jsxs)("a",{href:"/yeu-thich",className:"link row",children:[Object(j.jsx)("i",{class:"far fa-grin-hearts icon-user",style:{color:e.color_main_1}})," ",Object(j.jsx)("div",{style:{marginLeft:"0.75em"},children:" S\u1ea3n ph\u1ea9m y\xeau th\xedch"})]}),!s.is_agency&&Object(j.jsx)("div",{children:s.is_collaborator||null!=m.collaborator_register_request?Object(j.jsxs)("a",{href:"/cong-tac-vien",className:"link row",children:[Object(j.jsx)("i",{class:"fas fa-hand-holding-medical icon-user",style:{color:e.color_main_1}})," ",Object(j.jsxs)("div",{style:{marginLeft:"0.75em"},children:[" ","V\xed c\u1ed9ng t\xe1c vi\xean"]})]}):Object(j.jsxs)("a",{onClick:function(e){e.preventDefault(),c(o.a.changePopup(r.constants.COLLABORATOR_REGIS_POPUP))},className:"link row",href:"/cong-tac-vien",children:[Object(j.jsx)("i",{class:"fas fa-hands-helping icon-user",style:{color:e.color_main_1}})," ",Object(j.jsxs)("div",{style:{marginLeft:"0.75em"},children:[" ","\u0110\u0103ng k\xfd c\u1ed9ng t\xe1c vi\xean"]})]})}),s.is_agency&&1!=m.status_collaborator&&Object(j.jsxs)("a",{href:"/dai-ly",className:"link row",children:[Object(j.jsx)("i",{class:"fas fa-hotel icon-user",style:{color:e.color_main_1}})," ",Object(j.jsx)("div",{style:{marginLeft:"0.75em"},children:" \u0110\u1ea1i l\xfd"})]}),!s.is_agency&&1!=m.status_collaborator&&Object(j.jsxs)("a",{onClick:function(e){e.preventDefault(),c(o.a.changePopup(r.constants.AGENCY_REGIS_POPUP))},href:"/dai-ly",className:"link row",children:[Object(j.jsx)("i",{class:"fas fa-hotel icon-user",style:{color:e.color_main_1}})," ",Object(j.jsxs)("div",{style:{marginLeft:"0.75em"},children:[" ","\u0110\u0103ng k\xfd l\xe0m \u0111\u1ea1i l\xfd"]})]}),Object(j.jsxs)("a",{href:"/xu-tich-luy",className:"link row",children:[Object(j.jsx)("i",{class:"fab fa-bitcoin icon-user",style:{color:e.color_main_1}})," ",Object(j.jsx)("div",{style:{marginLeft:"0.75em"},children:" Xu t\xedch l\u0169y"})]}),Object(j.jsxs)("a",{onClick:function(){u(""),c(o.a.changePopup(r.constants.PROFILE_POPUP))},className:"link row",children:[Object(j.jsx)("i",{class:"fas fa-edit icon-user",style:{color:e.color_main_1}})," ",Object(j.jsx)("div",{style:{marginLeft:"0.75em"},children:" C\u1eadp nh\u1eadt th\xf4ng tin"})]})]}),Object(j.jsx)("button",{onClick:function(){c(l.a.accountLogout()),window.location.href="/"},children:"\u0110\u0103ng xu\u1ea5t"})]}),Object(j.jsx)(h,{})]}):null})}}}]);