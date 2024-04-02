"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[985],{0:function(e,n,t){var r=t(5893),o=t(639),i=t(7741),s=(t(7294),t(1954)),l=t(1163);n.Z=function(e){var n=e.title,t=e.actionTitle,c=e.actionLink,u=(0,l.useRouter)();return(0,r.jsxs)(o.kC,{children:[(0,r.jsx)(o.xu,{p:"4",pl:"0",display:"flex",justifyContent:"center",alignItems:"center",children:(0,r.jsx)(o.X6,{size:"md",children:n})}),(0,r.jsx)(o.LZ,{}),t&&c&&(0,r.jsx)(o.xu,{p:"4",pr:"0",children:(0,r.jsx)(i.zx,{textTransform:"none",leftIcon:(0,r.jsx)(s.JO,{icon:"akar-icons:plus"}),type:"button",onClick:function(){return u.push(c)},colorScheme:"blue",width:"full",size:"md",variant:"solid",children:t})})]})}},4607:function(e,n,t){var r=t(5893),o=t(639),i=t(5610);t(7294);n.Z=function(){return(0,r.jsx)(o.kC,{flex:"1",justifyContent:"center",alignItems:"center",children:(0,r.jsx)(i.$,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl"})})}},5149:function(e,n,t){t.d(n,{Z:function(){return J}});var r=t(1799),o=t(5893),i=t(7568),s=t(9396),l=t(9534),c=t(4051),u=t.n(c),a=t(7294),x=t(9653),d=t(639),p=t(3835),f=t(8395),m=t(5868),h=t(2710),j=t(7741),g=t(2494),y={fill:"none",stroke:"currentColor",strokeWidth:"2px",strokeLinecap:"round",strokeLinejoin:"round"},v=function(e){return(0,o.jsxs)(g.JO,(0,s.Z)((0,r.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentcolor"},y,e),{children:[(0,o.jsx)("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),(0,o.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),(0,o.jsx)("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}))},b=t(5085),C=t(5150),k="/app/module",w=t(9473),Z=t(1954),O=t(1664),I=t.n(O),z=t(1163),B=t(3299),_=t(96);function L(e){var n=e.children,t=(0,B.useSession)().data,r=(0,w.I0)(),s=(0,x.qY)(),l=s.isOpen,c=s.onOpen,f=s.onClose,m=(0,w.v9)((function(e){return e.module})).modules;(0,a.useEffect)((function(){h()}),[]);var h=function(){var e=(0,i.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(function(){var e=(0,i.Z)(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.ZP.get(k).then((function(e){var t=e.result;n((0,C.U)({modules:t}))})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.jsxs)(d.xu,{minH:"100vh",children:[(0,o.jsx)(R,{onClose:function(){return f},data:t,display:{base:"none",md:"block"},modules:m}),(0,o.jsx)(p.dy,{autoFocus:!1,isOpen:l,placement:"left",onClose:f,returnFocusOnClose:!1,onOverlayClick:f,size:"full",children:(0,o.jsx)(p.sc,{children:(0,o.jsx)(R,{data:t,onClose:f,modules:m})})}),(0,o.jsx)(U,{display:{base:"flex",md:"none"},onOpen:c}),(0,o.jsx)(d.xu,{ml:[0,300,300],mr:{base:0,md:10},p:"4",children:n})]})}var R=function(e){var n,t=e.onClose,i=e.data,c=e.modules,u=(0,l.Z)(e,["onClose","data","modules"]),a=(0,z.useRouter)();return(0,o.jsxs)(d.xu,(0,s.Z)((0,r.Z)({bgColor:"#000",borderRight:"1px",borderRightColor:(0,f.ff)("gray.200","gray.700"),w:["full",270,270],pos:"fixed",h:"full"},u),{children:[(0,o.jsx)(d.kC,{h:"5",alignItems:"center",justifyContent:"space-between",children:(0,o.jsx)(m.P,{style:{color:"white",marginTop:20,marginLeft:10},display:{base:"flex",md:"none"},onClick:t})}),(0,o.jsx)(d.kC,{p:"5",borderBottom:"1px",alignItems:"center",justifyContent:"center",children:(0,o.jsx)("img",{width:"120",src:"/images/logo.png"})}),c.map((function(e){return(0,o.jsx)(N,{icon:e.icon,route:e.route,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Z.JO,{icon:e.icon}),(0,o.jsx)(d.xv,{style:{color:a.pathname.includes(e.route)?"#F3BB45":"#fff"},marginLeft:"2",children:e.label})]})},e.name)})),(0,o.jsx)(d.xu,{style:{position:"absolute",bottom:10},children:(0,o.jsxs)(h.v2,{children:[(0,o.jsx)(h.j2,{_hover:{bg:"rgb(30 41 59 / 1)"},_expanded:{bg:"#000"},_focus:{bg:"#000"},backgroundColor:"#000",color:"#fff",fontSize:"sm",textTransform:"none",as:j.zx,rightIcon:(0,o.jsx)(Z.JO,{icon:"bx:chevron-down"}),children:null===i||void 0===i||null===(n=i.user)||void 0===n?void 0:n.email}),(0,o.jsx)(h.qy,{children:(0,o.jsx)(h.sN,{onClick:function(){return(0,B.signOut)({callbackUrl:_.GW+"/auth/login"})},children:"Logout"})})]})})]}))},N=function(e){var n=e.children,t=(e.icon,e.route),i=(0,l.Z)(e,["children","icon","route"]),c=(0,z.useRouter)();return(0,o.jsx)(I(),{href:t,style:{textDecoration:"none",color:"#eeeeee"},children:(0,o.jsx)(d.kC,(0,s.Z)((0,r.Z)({align:"center",p:"4",mx:"4",borderRadius:"lg",role:"group",cursor:"pointer",color:c.pathname.includes(t)?"#F3BB45":"#fff"},i),{children:n}))})},U=function(e){var n=e.onOpen,t=(0,l.Z)(e,["onOpen"]);return(0,o.jsx)(d.kC,(0,s.Z)((0,r.Z)({ml:{base:0,md:48},px:{base:4,md:24},height:"20",alignItems:"center",bg:(0,f.ff)("#eeeeee","#eeeeee"),borderBottomWidth:"1px",borderBottomColor:(0,f.ff)("gray.200","gray.700"),justifyContent:"flex-start"},t),{children:(0,o.jsx)(j.hU,{variant:"outline",onClick:n,"aria-label":"open menu",icon:(0,o.jsx)(v,{})})}))},F=t(36),P=t(840),T=t(4607);var E=function(){return(0,o.jsxs)(d.kC,{left:"320px",position:"fixed",bottom:"0",children:[(0,o.jsx)(d.xu,{p:"4",pl:"0",display:"flex",justifyContent:"center",alignItems:"center",children:(0,o.jsxs)(d.X6,{as:"h6",size:"sm",mb:"2",children:["  ",(0,o.jsx)(I(),{href:"/privacy-policy",children:"  Privacy Policy"})]})}),(0,o.jsx)(d.xu,{p:"4",pl:"0",display:"flex",justifyContent:"center",alignItems:"center",children:(0,o.jsx)(d.X6,{as:"h6",size:"sm",mb:"2",children:(0,o.jsx)(I(),{href:"/term-of-use",children:"Terms Of Use"})})})]})},J=function(e){return function(n){var t=(0,z.useRouter)(),i=(0,B.useSession)().status;return"loading"==i?(0,o.jsx)(P.xjn,{theme:F.v,children:(0,o.jsx)(T.Z,{})}):"authenticated"==i?(0,o.jsxs)(P.xjn,{theme:F.v,children:[(0,o.jsx)(L,{children:(0,o.jsx)(e,(0,r.Z)({},n))}),(0,o.jsx)("div",{style:{marginBottom:50}}),(0,o.jsx)(E,{})]}):void t.push("/auth/login")}}},5500:function(e,n,t){t.d(n,{p:function(){return s}});var r=t(5893),o=t(9008),i=t.n(o),s=function(e){var n=e.title,t=e.currentUrl,o=void 0===t?"https://Opinion Nation.com/":t,s=e.description,l=void 0===s?"Earn points by completing surveys":s,c=e.imagePreviewUrl,u=void 0===c?"https://Opinion Nation.com/":c,a="".concat(n," | Opinion Nation");return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:a}),(0,r.jsx)("meta",{name:"title",content:n}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"twitter:title",content:n}),(0,r.jsx)("meta",{property:"twitter:url",content:o}),(0,r.jsx)("meta",{property:"og:url",content:o}),(0,r.jsx)("meta",{name:"description",content:l}),(0,r.jsx)("meta",{property:"twitter:description",content:l}),(0,r.jsx)("meta",{property:"og:description",content:l}),(0,r.jsx)("meta",{property:"og:image",content:u}),(0,r.jsx)("meta",{property:"twitter:image",content:u}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"})]})}}}]);