(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{6659:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/register",function(){return s(2842)}])},9724:function(e,r,s){"use strict";var t=s(1799),i=s(5893),n=s(3299),a=s(1163),l=s(36),o=s(840),c=s(7421),u=s(6112);r.Z=function(e){return function(r){var s=(0,a.useRouter)(),d=(0,n.useSession)().status;if("authenticated"==d&&s.push("/app/dashboard"),"authenticated"!==d&&"loading"!==d)return(0,i.jsxs)(o.xjn,{theme:l.v,children:[(0,i.jsx)(c.h,{}),(0,i.jsx)(e,(0,t.Z)({},r)),(0,i.jsx)(u.$,{})]})}}},2842:function(e,r,s){"use strict";s.r(r),s.d(r,{__N_SSG:function(){return k},default:function(){return z}});var t=s(5893),i=s(36),n=s(840),a=s(9724),l=(s(7294),s(639)),o=s(5500),c=s(7568),u=s(1799),d=s(9396),h=s(4051),m=s.n(h),x=s(2175),p=s(7258),f=s(9842),g="/auth/register";var j=s(9473),v=s(3234),N=s(979),y=s(3749),w=s(7741),I=s(8276),Z=function(){var e=(0,I.$G)().t,r=(0,j.v9)((function(e){return e.loading})).isLoading,s=function(){var e=(0,c.Z)(m().mark((function e(r,s){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t=r,f.ZP.post(g,t).then((function(e){return e.result}));case 2:s();case 3:case"end":return e.stop()}var t}),e)})));return function(r,s){return e.apply(this,arguments)}}(),i=p.object().shape({firstName:p.string().trim().required("First Name is required"),lastName:p.string().trim().required("Last Name is required"),email:p.string().email().required("Email must be valid"),terms:p.boolean().required("")});return(0,t.jsx)(x.J9,{onSubmit:function(e,r){var t=r.resetForm;s(e,t)},validateOnBlur:!1,validateOnChange:!0,enableReinitialize:!0,validationSchema:i,initialValues:{firstName:"",lastName:"",email:"",company:"",terms:!1,news:!1},children:function(s){return(0,t.jsxs)(x.l0,{onSubmit:s.handleSubmit,children:[(0,t.jsxs)(v.NI,{isInvalid:s.errors.firstName&&s.touched.firstName,children:[(0,t.jsx)(N.II,(0,d.Z)((0,u.Z)({},s.getFieldProps("firstName")),{type:"text",placeholder:e("register.firstName"),size:"lg"})),(0,t.jsx)(v.J1,{children:s.errors.firstName})]}),(0,t.jsxs)(v.NI,{mt:4,isInvalid:s.errors.lastName&&s.touched.lastName,children:[(0,t.jsx)(N.II,(0,d.Z)((0,u.Z)({},s.getFieldProps("lastName")),{type:"text",placeholder:e("register.lastName"),size:"lg"})),(0,t.jsx)(v.J1,{children:s.errors.lastName})]}),(0,t.jsxs)(v.NI,{mt:4,isInvalid:s.errors.email&&s.touched.email,children:[(0,t.jsx)(N.II,(0,d.Z)((0,u.Z)({},s.getFieldProps("email")),{type:"email",placeholder:e("register.emai"),size:"lg"})),(0,t.jsx)(v.J1,{children:s.errors.email})]}),(0,t.jsxs)(v.NI,{mt:4,isInvalid:s.errors.company&&s.touched.company,children:[(0,t.jsx)(N.II,(0,d.Z)((0,u.Z)({},s.getFieldProps("company")),{type:"text",placeholder:e("register.company")+"(Optional)",size:"lg"})),(0,t.jsx)(v.J1,{children:s.errors.company})]}),(0,t.jsxs)(v.NI,{mt:4,isInvalid:s.errors.terms&&s.touched.terms,children:[(0,t.jsxs)(y.XZ,{name:"terms",checked:s.values.terms,onChange:s.handleChange,size:"md",children:[e("register.policy1")," ",(0,t.jsx)(l.rU,{style:{color:"#F3BB45"},href:"/term-of-use",children:e("register.policy2")}),e("register.policy3"),(0,t.jsx)(l.rU,{style:{color:"#F3BB45"},href:"/privacy-policy",children:e("register.policy4")})]}),(0,t.jsx)(v.J1,{children:s.errors.terms})]}),(0,t.jsxs)(v.NI,{mt:4,isInvalid:s.errors.news&&s.touched.news,children:[(0,t.jsx)(y.XZ,{name:"news",checked:s.values.news,onChange:s.handleChange,size:"md",children:e("register.news")}),(0,t.jsx)(v.J1,{children:s.errors.news})]}),(0,t.jsx)(w.zx,{isLoading:r,isDisabled:!s.values.terms||!s.values.news,color:"white",type:"submit",style:{backgroundColor:"#F3BB45"},mt:4,width:"full",size:"lg",variant:"solid",children:e("register.createAccount")})]})}})},_=s(1163),b=function(){var e=(0,I.$G)().t,r=(0,_.useRouter)(),s=r.locale;return(0,t.jsxs)(l.Kq,{minH:"100vh",direction:{base:"column",md:"row"},children:[(0,t.jsx)(o.p,{title:"Register"}),(0,t.jsx)(l.kC,{p:8,flex:1,align:"center",justify:"center",children:(0,t.jsxs)(l.Kq,{spacing:4,w:"full",maxW:"md",children:[(0,t.jsx)(Z,{}),(0,t.jsxs)(l.xv,{style:{textAlign:"center"},fontSize:"md",children:["  ",e("register.already")+" ?",(0,t.jsx)(l.rU,{style:{color:"#F3BB45"},onClick:function(){return e="/auth/login",r.push(e,e,{locale:s});var e},children:" "+e("register.login")})]})]})})]})},k=((0,a.Z)(b),!0),z=(0,a.Z)((function(){return(0,t.jsx)(n.xjn,{theme:i.v,children:(0,t.jsx)(b,{})})}))}},function(e){e.O(0,[810,285,345,258,806,502,774,888,179],(function(){return r=6659,e(e.s=r);var r}));var r=e.O();_N_E=r}]);