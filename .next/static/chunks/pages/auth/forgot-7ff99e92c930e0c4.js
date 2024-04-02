(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[596],{979:function(e,t,n){"use strict";n.d(t,{BZ:function(){return f},II:function(){return d},xH:function(){return N}});var r=n(7294),i=n(3234),a=n(2067),u=n(4520),s=n(5336),l=n(8387),o=n(4031),c=n(6076),d=(0,a.Gp)((function(e,t){const{htmlSize:n,...l}=e,o=(0,a.jC)("Input",l),c=(0,u.Lr)(l),d=(0,i.Yp)(c),p=(0,s.cx)("chakra-input",e.className);return r.createElement(a.m$.input,{size:n,...d,__css:o.field,ref:t,className:p})}));d.displayName="Input",d.id="Input";var[p,m]=(0,l.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),f=(0,a.Gp)((function(e,t){const n=(0,a.jC)("Input",e),{children:i,className:l,...d}=(0,u.Lr)(e),m=(0,s.cx)("chakra-input__group",l),f={},h=(0,o.W)(i),v=n.field;h.forEach((e=>{n&&(v&&"InputLeftElement"===e.type.id&&(f.paddingStart=v.height??v.h),v&&"InputRightElement"===e.type.id&&(f.paddingEnd=v.height??v.h),"InputRightAddon"===e.type.id&&(f.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(f.borderStartRadius=0))}));const g=h.map((t=>{var n,i;const a=(0,c.oA)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(i=t.props)?void 0:i.variant)||e.variant});return"Input"!==t.type.id?(0,r.cloneElement)(t,a):(0,r.cloneElement)(t,Object.assign(a,f,t.props))}));return r.createElement(a.m$.div,{className:m,ref:t,__css:{width:"100%",display:"flex",position:"relative"},...d},r.createElement(p,{value:n},g))}));f.displayName="InputGroup";var h={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},v=(0,a.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),g=(0,a.Gp)((function(e,t){const{placement:n="left",...i}=e,a=h[n]??{},u=m();return r.createElement(v,{ref:t,...i,__css:{...u.addon,...a}})}));g.displayName="InputAddon";var x=(0,a.Gp)((function(e,t){return r.createElement(g,{ref:t,placement:"left",...e,className:(0,s.cx)("chakra-input__left-addon",e.className)})}));x.displayName="InputLeftAddon",x.id="InputLeftAddon";var I=(0,a.Gp)((function(e,t){return r.createElement(g,{ref:t,placement:"right",...e,className:(0,s.cx)("chakra-input__right-addon",e.className)})}));I.displayName="InputRightAddon",I.id="InputRightAddon";var E=(0,a.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),_=(0,a.Gp)((function(e,t){const{placement:n="left",...i}=e,a=m(),u=a.field,s={["left"===n?"insetStart":"insetEnd"]:"0",width:(null==u?void 0:u.height)??(null==u?void 0:u.h),height:(null==u?void 0:u.height)??(null==u?void 0:u.h),fontSize:null==u?void 0:u.fontSize,...a.element};return r.createElement(E,{ref:t,__css:s,...i})}));_.id="InputElement",_.displayName="InputElement";var y=(0,a.Gp)((function(e,t){const{className:n,...i}=e,a=(0,s.cx)("chakra-input__left-element",n);return r.createElement(_,{ref:t,placement:"left",className:a,...i})}));y.id="InputLeftElement",y.displayName="InputLeftElement";var N=(0,a.Gp)((function(e,t){const{className:n,...i}=e,a=(0,s.cx)("chakra-input__right-element",n);return r.createElement(_,{ref:t,placement:"right",className:a,...i})}));N.id="InputRightElement",N.displayName="InputRightElement"},8642:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/forgot",function(){return n(6926)}])},9724:function(e,t,n){"use strict";var r=n(1799),i=n(5893),a=n(3299),u=n(1163),s=n(36),l=n(840),o=n(7421),c=n(6112);t.Z=function(e){return function(t){var n=(0,u.useRouter)(),d=(0,a.useSession)().status;if("authenticated"==d&&n.push("/app/dashboard"),"authenticated"!==d&&"loading"!==d)return(0,i.jsxs)(l.xjn,{theme:s.v,children:[(0,i.jsx)(o.h,{}),(0,i.jsx)(e,(0,r.Z)({},t)),(0,i.jsx)(c.$,{})]})}}},6926:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return S},default:function(){return w}});var r=n(5893),i=n(36),a=n(840),u=n(9724),s=n(7294),l=n(639),o=n(5500),c=n(8276),d=n(1163),p=n(7568),m=n(1799),f=n(9396),h=n(828),v=n(4051),g=n.n(v),x=n(2175),I=n(7258),E=n(3234),_=n(979),y=n(7741),N=n(9465),b=function(){var e=(0,c.$G)().t,t=(0,h.Z)(s.useState(!1),2),n=(t[0],t[1],(0,h.Z)(s.useState(!1),2)),i=n[0],a=(n[1],(0,N.p)().showToast,function(){var e=(0,p.Z)(g().mark((function e(t){return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),u=I.object().shape({email:I.string().email().required("Email must be valid")});return(0,r.jsx)(x.J9,{onSubmit:function(e){a(e)},validateOnBlur:!1,validateOnChange:!0,validationSchema:u,initialValues:{email:""},children:function(t){return(0,r.jsxs)(x.l0,{autoComplete:"off",noValidate:!0,onSubmit:t.handleSubmit,children:[(0,r.jsxs)(E.NI,{isInvalid:t.errors.email&&t.touched.email,children:[(0,r.jsx)(_.II,(0,f.Z)((0,m.Z)({},t.getFieldProps("email")),{type:"email",placeholder:e("login.email"),size:"lg"})),(0,r.jsx)(E.J1,{children:t.errors.email})]}),(0,r.jsx)(y.zx,{isLoading:i,color:"white",type:"submit",style:{backgroundColor:"#3A7EC6"},mt:4,width:"full",size:"lg",variant:"solid",children:e("login.send")})]})}})},j=function(){var e=(0,d.useRouter)();e.locale,(0,c.$G)().t;return(0,r.jsxs)(l.Kq,{minH:"100vh",direction:{base:"column",md:"row"},children:[(0,r.jsx)(o.p,{title:"Login"}),(0,r.jsx)(l.kC,{p:8,flex:1,align:"center",justify:"center",children:(0,r.jsx)(l.Kq,{spacing:4,w:"full",maxW:"md",children:(0,r.jsx)(b,{})})})]})},S=((0,u.Z)(j),!0),w=(0,u.Z)((function(){return(0,r.jsx)(a.xjn,{theme:i.v,children:(0,r.jsx)(j,{})})}))},828:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(3375);var i=n(1566);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||(0,r.Z)(e,t)||(0,i.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[810,285,345,258,502,774,888,179],(function(){return t=8642,e(e.s=t);var t}));var t=e.O();_N_E=t}]);