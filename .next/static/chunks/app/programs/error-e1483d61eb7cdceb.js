(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8352],{4379:function(t,e,r){Promise.resolve().then(r.bind(r,2808))},2808:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return c}});var n=r(7437),s=r(3198),a=r(6819);function c(t){let{error:e,reset:r}=t,c=(0,s.I0)();return(0,n.jsxs)("div",{className:"py-28 px-4 text-black dark:text-white text-center ",children:[(0,n.jsx)("h1",{className:"text-center text-3xl sm:text-4xl md:text-5xl",children:"Page Error"}),(0,n.jsx)("button",{className:"mt-10 bg-violet-600 py-2 px-3 rounded-md text-lg text-white",onClick:()=>{r(),c((0,a.N)())},children:"Try Again"})]})}},6819:function(t,e,r){"use strict";r.d(e,{N:function(){return c}});var n=r(1554),s=r(64),a=r(9222);let c=(0,s.hg)("programs/getAllPrograms",async t=>{try{let e=await a.Z.get("".concat(n.Z,"/api/v1/programs?page=").concat(t?t.page:1,"&limit=12"),{withCredentials:!0});return e.data}catch(t){throw Error(t.response.data.error.message)}})},1554:function(t,e,r){"use strict";r.d(e,{B:function(){return n}}),e.Z="https://kin-api.onrender.com";let n="https://www.kinsust.org"}},function(t){t.O(0,[3306,6566,2971,596,1744],function(){return t(t.s=4379)}),_N_E=t.O()}]);