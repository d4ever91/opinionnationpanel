(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{4190:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/support",function(){return r(9816)}])},3949:function(n,e,r){"use strict";r.d(e,{d:function(){return x}});var t=r(1799),i=r(5893),u=r(6696);function c(n){var e=n.columns;return(0,i.jsx)(u.Tr,{children:e.map((function(n,e){var r=n.headerAlign;return(0,i.jsx)(u.Th,{padding:"4",textAlign:r,textTransform:"none",bgColor:"#fafafa",borderTop:"1px solid #f2f4f9",children:n.title},e)}))})}var o=r(639),s=r(7026),a=r(1954),l=(r(7294),function(n){var e=n.pageNo,r=n.limit,t=n.total,u=n.changeAction,c=Math.ceil(Number(t)/Number(r));return(0,i.jsxs)(o.xu,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,i.jsx)(o.xu,{mt:"4",children:(0,i.jsxs)(s.Ph,{onChange:function(n){return u("limit",n.target.value)},size:"sm",defaultValue:r,children:[(0,i.jsx)("option",{value:10,children:"10"}),(0,i.jsx)("option",{value:20,children:"20"}),(0,i.jsx)("option",{value:30,children:"30"})]})}),(0,i.jsx)(o.xu,{mt:"4",children:(0,i.jsxs)(o.aV,{display:"flex",justifyContent:"right",children:[(0,i.jsx)(o.rU,{onClick:function(){return 1!=e&&u("pageNo",e-1)},children:(0,i.jsxs)(o.HC,{m:"0",p:"2",pt:"2",pb:"2",color:"blue.500",opacity:1==e?.5:1,borderRadius:"4",display:"flex",children:[(0,i.jsx)(a.JO,{fontSize:"23",icon:"grommet-icons:form-previous"}),(0,i.jsx)(o.xv,{children:"Previous"})]})}),(0,i.jsx)(o.rU,{onClick:function(){return e!=c&&u("pageNo",e+1)},children:(0,i.jsxs)(o.HC,{m:"0",p:"2",pt:"2",pb:"2",color:"blue.500",opacity:e==c?.5:1,borderRadius:"4",display:"flex",children:[(0,i.jsx)(o.xv,{children:"Next"}),(0,i.jsx)(a.JO,{fontSize:"23",icon:"grommet-icons:form-next"})]})})]})})]})}),d=r(6486);function f(n){var e=n.item,r=n.column,t=(0,d.get)(e,r.key),c=r.rowAlign;return(0,i.jsx)(u.Td,{padding:"4",textAlign:c,borderTop:"1px solid #f2f4f9",children:r.render?r.render(r,e):t})}function p(n){var e=n.data,r=n.columns;return(0,i.jsx)(i.Fragment,{children:e.map((function(n,e){return(0,i.jsx)(u.Tr,{children:r.map((function(e,r){return(0,i.jsx)(f,{item:n,column:e},"table-row-cell-".concat(r))}))},"table-body-".concat(e))}))})}function x(n){var e=n.data,r=n.meta,o=n.columns,s=n.navigation,a=n.changeAction;return(0,i.jsxs)(u.xJ,{children:[(0,i.jsxs)(u.iA,{size:"lg",children:[(0,i.jsx)(u.hr,{children:(0,i.jsx)(c,{columns:o})}),(0,i.jsx)(u.p3,{children:e.length?(0,i.jsx)(p,{data:e,columns:o}):(0,i.jsx)(u.Tr,{children:(0,i.jsx)(u.Td,{textAlign:"center",align:"center",colSpan:8,children:"No Data Found"})})})]}),r&&e&&e.length>0&&"page"==s&&(0,i.jsx)(l,(0,t.Z)({changeAction:a},r))]})}},1961:function(n,e,r){"use strict";var t=r(5893),i=r(3835),u=r(7741),c=r(7294);e.Z=function(n){var e=n.onClose,r=n.isOpen,o=n.onSubmit,s=c.useRef();return(0,t.jsx)(i.aR,{isOpen:r,leastDestructiveRef:s,onClose:e,children:(0,t.jsx)(i.dh,{children:(0,t.jsxs)(i._T,{children:[(0,t.jsx)(i.fY,{fontSize:"lg",fontWeight:"bold",children:"Delete"}),(0,t.jsx)(i.iP,{children:"Are you sure?"}),(0,t.jsxs)(i.xo,{children:[(0,t.jsx)(u.zx,{ref:s,onClick:e,children:"Cancel"}),(0,t.jsx)(u.zx,{colorScheme:"red",onClick:o,ml:3,children:"Delete"})]})]})})})}},4702:function(n,e,r){"use strict";r.d(e,{Fp:function(){return x},Nq:function(){return v},PR:function(){return h},TO:function(){return j},Zy:function(){return m},kX:function(){return b}});var t=r(7568),i=r(4051),u=r.n(i),c=r(9842),o=r(6452),s="/app/user",a="/app/user/get",l="/app/code",d="/app/user/update",f="/app/password/update",p="/app/user/remove",x=function(){return function(){var n=(0,t.Z)(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e((0,o.zD)(!0)),n.abrupt("return",c.ZP.get(s).then((function(n){var r=n.result;e((0,o.U2)(r))})).catch((function(n){e((0,o.zD)(!1))})));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(n){return function(){var e=(0,t.Z)(u().mark((function e(r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r((0,o.zD)(!0)),e.abrupt("return",c.ZP.get(a+"/"+n).then((function(n){var e=n.result;r((0,o.Zr)(e))})).catch((function(n){r((0,o.zD)(!1))})));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},j=function(n){return function(){var e=(0,t.Z)(u().mark((function e(r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r((0,o.zD)(!0)),e.abrupt("return",c.ZP.get(l+"?token="+n).then((function(n){var e=n.result;r((0,o.Zr)(e))})).catch((function(n){r((0,o.zD)(!1))})));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},v=function(n,e){return function(){var r=(0,t.Z)(u().mark((function r(t){return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t((0,o.zD)(!0)),r.abrupt("return",c.ZP.put(d+"/"+n,e).then((function(n){var e=n.result;t((0,o.Vx)(e))})).catch((function(n){t((0,o.zD)(!1))})));case 2:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()},m=function(n,e){return function(){var r=(0,t.Z)(u().mark((function r(t){return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t((0,o.zD)(!0)),r.abrupt("return",c.ZP.put(f+"/"+n,e).then((function(n){var e=n.result;t((0,o.Vx)(e))})).catch((function(n){t((0,o.zD)(!1))})));case 2:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()},b=function(n){return function(){var e=(0,t.Z)(u().mark((function e(r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r((0,o.zD)(!0)),e.abrupt("return",c.ZP.delete(p+"/"+n).then((function(n){var e=n.result;r((0,o.Od)(e))})).catch((function(n){r((0,o.zD)(!1))})));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}},4703:function(n,e,r){"use strict";r.d(e,{_:function(){return t}});var t=[{label:"Active",value:1,color:"blue"},{label:"Paused",value:2,color:"blue"},{label:"Draft",value:3,color:"blue"},{label:"Closed",value:4,color:"blue"}]},9816:function(n,e,r){"use strict";r.r(e),r.d(e,{SupportList:function(){return z}});var t=r(7568),i=r(1799),u=r(9396),c=r(4051),o=r.n(c),s=r(5893),a=r(7294),l=r(5152),d=r.n(l),f=r(5149),p=r(5500),x=r(3949),h=r(639),j=r(9653),v=r(8034),m=r(9473),b=r(4702),g=r(0),y=r(1954),C=r(4607),k=r(1961),w=r(1163),Z=r(4703),z=function(){var n=(0,w.useRouter)(),e=(0,a.useState)({}),r=(e[0],e[1],(0,m.I0)()),c=(0,m.v9)((function(n){return n.survey})),l=c.isLoading,d=c.surveys,f=c.users,z=c.statuses,_=c.countries,D=c.meta,O=(f&&f.map((function(n){return(0,u.Z)((0,i.Z)({},n),{label:n.email+"("+n.count+")",value:n._id})})),_&&_.map((function(n){return(0,u.Z)((0,i.Z)({},n),{label:n.name+"("+n.count+")",value:n._id})})),z&&z.map((function(n){return(0,u.Z)((0,i.Z)({},n),{label:n.label+"("+n.count+")",value:n.value})})),[{key:"status",title:"Date",width:200,render:function(n,e){var r=e.status;return(0,s.jsxs)(h.xu,{display:"flex",children:[(0,s.jsx)(y.JO,{icon:"ci:dot-04-l",color:Z._.find((function(n){return n.value==r})).color,fontSize:24}),(0,s.jsx)(h.xv,{children:Z._.find((function(n){return n.value==r})).label})]})}},{key:"surveyCode",title:"Project",width:200,render:function(e,r){var t=r._id,i=r.surveyCode;return(0,s.jsx)(h.xu,{children:(0,s.jsx)(h.rU,{onClick:function(){return n.push("/app/survey/".concat(t,"/edit"))},children:i})})}},{key:"surveyName",title:"Description",width:200},{key:"progress",title:"Priority",headerAlign:"center",rowAlign:"center",width:200,render:function(n,e){var r=e.requiredCompletes,t=e.complete;return(0,s.jsx)(h.xu,{children:(0,s.jsx)(h.xv,{children:t+"/"+r})})}},{key:"_id",title:"Action",width:200,render:function(e,i){var u=i._id,c=i.surveyStatus,a=(0,j.qY)(),l=a.isOpen,d=a.onOpen,f=a.onClose,p=function(){var n=(0,t.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r((0,b.kX)(u));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,s.jsxs)(h.kC,{children:[(0,s.jsx)(k.Z,{isOpen:l,onClose:f,onSubmit:p}),1==c&&(0,s.jsx)(h.rU,{marginRight:"3","aria-label":"Edit",onClick:function(){return n.push("/app/survey/".concat(u,"/edit"))},children:(0,s.jsx)(y.JO,{fontSize:24,icon:"carbon:play-filled-alt",color:"#cad6f3"})}),2==c&&(0,s.jsx)(h.rU,{marginRight:"3","aria-label":"Edit",onClick:function(){return n.push("/app/survey/".concat(u,"/edit"))},children:(0,s.jsx)(y.JO,{fontSize:24,icon:"material-symbols:pause",color:"#cad6f3"})}),(0,s.jsx)(h.rU,{marginRight:"3","aria-label":"Edit",onClick:d,children:(0,s.jsx)(y.JO,{fontSize:24,icon:"fa-regular:clone",color:"#cad6f3"})}),(0,s.jsx)(h.rU,{marginRight:"3","aria-label":"Delete",onClick:d,children:(0,s.jsx)(y.JO,{fontSize:24,icon:"ion:stats-chart",color:"#cad6f3"})})]},u)}}]);return(0,s.jsxs)(h.xu,{children:[(0,s.jsx)(p.p,{title:"Support"}),(0,s.jsx)(g.Z,{title:"Support"}),l?(0,s.jsx)(C.Z,{}):(0,s.jsxs)(h.rj,{templateColumns:"repeat(2, 1fr)",gap:5,children:[(0,s.jsx)(h.xu,{style:{border:"1px solid rgba(0, 0, 0, 0.18)"},display:"flex",justifyContent:"space-between",alignItems:"center",bgColor:"#fff",padding:"4",borderRadius:"8px",children:(0,s.jsx)(h.xu,{display:"flex",justifyContent:"left",children:(0,s.jsxs)(h.xu,{ml:"4",children:[(0,s.jsx)(h.X6,{as:"h6",size:"sm",mb:"2",children:"Open Tickets"}),(0,s.jsx)(h.xv,{sx:{color:"#74758F"},children:"200"})]})})}),(0,s.jsx)(h.xu,{style:{border:"1px solid rgba(0, 0, 0, 0.18)"},display:"flex",justifyContent:"space-between",alignItems:"center",bgColor:"#fff",padding:"4",borderRadius:"8px",children:(0,s.jsx)(h.xu,{display:"flex",justifyContent:"left",children:(0,s.jsxs)(h.xu,{ml:"4",children:[(0,s.jsx)(h.X6,{as:"h6",size:"sm",mb:"2",children:"Closed Tickets"}),(0,s.jsx)(h.xv,{sx:{color:"#74758F"},children:"0"})]})})})]}),(0,s.jsx)(h.xu,{sx:{mt:10},bgColor:"white",children:(0,s.jsxs)(v.mQ,{variant:"enclosed",children:[(0,s.jsxs)(v.td,{children:[(0,s.jsx)(v.OK,{children:"Tickets Open"}),(0,s.jsx)(v.OK,{children:"Tickets Closed"})]}),(0,s.jsxs)(v.nP,{children:[(0,s.jsx)(v.x4,{children:(0,s.jsx)(x.d,{data:d,meta:D,columns:O})}),(0,s.jsx)(v.x4,{children:(0,s.jsx)(x.d,{data:d,meta:D,columns:O})})]})]})})]})};e.default=d()((function(){return Promise.resolve((0,f.Z)(z))}),{ssr:!1})}},function(n){n.O(0,[662,285,954,387,42,985,774,888,179],(function(){return e=4190,n(n.s=e);var e}));var e=n.O();_N_E=e}]);