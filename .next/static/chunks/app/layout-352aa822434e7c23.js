(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{1285:function(e,a,t){Promise.resolve().then(t.bind(t,7762))},7762:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return ee}});var r=t(7437),s=t(8846),l=t.n(s),n=t(4033),o=t(4606),i=t(8910);t(8999);var c=t(7431),d=t(2265),u=t(171),m=()=>{let[e,a]=(0,d.useState)(!1),t=(0,d.useRef)(null),r=e=>{t.current&&!t.current.contains(e.target)&&a(!1)};return(0,d.useEffect)(()=>(document.addEventListener("click",r),()=>{document.removeEventListener("click",r)}),[]),{isOpen:e,toggleMenu:()=>{a(!e)},dropDownRef:t}},h=t(1396),g=t.n(h),f=t(6691),p=t.n(f),x=t(3198),y=t(1554),b=t(64),w=t(9222);let j=(0,b.hg)("advisors/getAllAdvisors",async()=>{try{let e=await w.Z.get("".concat(y.Z,"/api/v1/advisors"));return e.data}catch(e){throw Error(e.response.data.error.message)}}),v=(0,b.hg)("ecs/getAllEC",async()=>{try{let e=await w.Z.get("".concat(y.Z,"/api/v1/ec"),{withCredentials:!0});return e.data}catch(e){throw Error(e.response.data.error.message)}}),N=(0,b.hg)("ecs/getSingleEC",async e=>{try{let a=await w.Z.get("".concat(y.Z,"/api/v1/ec/").concat(e),{withCredentials:!0});return a.data}catch(e){throw Error(e.response.data.error.message)}});var k=t(6819),C=t(5520),S=t(6718),E=t(3931),O=t(1210);function Z(){let e=(0,n.usePathname)(),a=(0,x.I0)(),t="";"dark"===(t=localStorage.getItem("theme")||"light")?(document.querySelector("body").classList.add("dark"),t="dark"):(document.querySelector("body").classList.remove("dark"),t="light");let{user:s,message:l}=(0,x.v9)(O.nr),{isOpen:h,toggleMenu:f,dropDownRef:y}=m(),[b,w]=(0,d.useState)("relative");(0,d.useEffect)(()=>{let e=window.scrollY,a=()=>{e>window.scrollY?w("sticky"):w(""),e=window.scrollY};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[b]);let N=()=>{a((0,E.Kv)())},Z=(0,n.useRouter)();(0,d.useEffect)(()=>{"Successfully Logout."===l&&(u.Am.success(l),a((0,O.Eo)()),Z.push("/login"))},[l,a,Z]);let I=(0,d.useRef)(null),[_,z]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{a((0,E.RZ)()),a(j()),a(v()),a((0,k.N)()),a((0,C.L)()),a((0,S.L)())},[a]),(0,r.jsx)("nav",{className:"  top-0  bg-[#fafafaf0] dark:bg-[#0f1829] shadow-md     border  dark:border-[#1b2341] dark:border-b dark:border-t-0 dark:border-l-0 dark:border-r-0 ".concat(b," "),style:{zIndex:"100"},children:(0,r.jsxs)("div",{className:" navbar  px-4 py-0 xl:w-[1200px] m-auto ",children:[(0,r.jsxs)("div",{className:"navbar-start  w-fit grow lg:grow-0 ",ref:y,children:[(0,r.jsx)("button",{className:"p-2 text-[#374246] dark:text-white bg-[#5a7b862c] cursor-pointer dark:bg-[#9f98b720] rounded-md lg:hidden",onClick:()=>{f(!h)},children:(0,r.jsx)(c.ZES,{className:"text-[22px] "})}),(0,r.jsx)("div",{className:"dropdown",children:h&&(0,r.jsxs)("ul",{tabIndex:0,className:"top-[33px] -left-[54px] p-2 shadow  rounded-b-md w-60 absolute dark:bg-[#0f0826f7] space-y-[1px] bg-[#f1f5f9] lg:hidden",ref:I,style:{zIndex:"300"},children:[(0,r.jsx)("li",{className:"",onClick:()=>{f(!h)},children:(0,r.jsx)(g(),{href:"/",className:"".concat("/"===e?"active":""," custom-style-menu-a"),children:"Home"})}),(0,r.jsxs)("li",{className:"text-[#334155]  active:bg-transparent   ",children:[(0,r.jsx)("label",{htmlFor:"menu-toggle",className:"flex justify-between w-full cursor-pointer",children:(0,r.jsxs)("span",{className:" w-full h-full custom-style-menu-a new-menu flex justify-between py-[6px] px-[10px]",children:["About Us",(0,r.jsx)(i.Ix0,{className:"text-xl"})]})}),(0,r.jsx)("input",{type:"checkbox",id:"menu-toggle",className:"hidden"}),(0,r.jsxs)("ul",{className:"    space-y-[2px] shadow-md mt-1 vertical-child-1 bg-white dark:bg-[#1f273476] z-50  rounded-md ",children:[(0,r.jsx)("li",{className:"rounded-[4px]",onClick:()=>{f(!h)},children:(0,r.jsx)(g(),{href:"/our-history",className:"".concat("/our-history/"===e?"active":""," custom-style-menu-a"),children:"Our History"})}),(0,r.jsx)("li",{onClick:()=>{f(!h)},children:(0,r.jsx)(g(),{href:"/executive-committee",className:"".concat("/executive-committee/"===e?"active":""," custom-style-menu-a"),children:"Executive Committee"})}),(0,r.jsx)("li",{onClick:()=>{f(!h)},children:(0,r.jsx)(g(),{href:"/advisors",className:"".concat("/advisors/"===e?"active":""," custom-style-menu-a"),children:"Advisors"})}),(0,r.jsx)("li",{onClick:()=>{f(!h)},children:(0,r.jsx)(g(),{href:"/faq",className:"".concat("/faq/"===e?"active":""," custom-style-menu-a"),children:"FAQ"})})]})]}),(0,r.jsxs)("li",{className:" text-[#334155]  active:bg-transparent ",children:[(0,r.jsx)("label",{htmlFor:"menu-toggle2",className:"flex justify-between w-full",children:(0,r.jsxs)("span",{className:"custom-style-menu-a flex justify-between py-[6px] px-[10px] cursor-pointer hover:text-white w-full h-full",children:["Wings",(0,r.jsx)(i.Ix0,{className:"text-xl"})]})}),(0,r.jsx)("input",{type:"checkbox",id:"menu-toggle2",className:"hidden"}),(0,r.jsxs)("ul",{className:" space-y-[2px] shadow-md mt-1 vertical-child-2 bg-white z-30 dark:bg-[#1f273476]  rounded-md ",children:[(0,r.jsx)("li",{onClick:()=>{f(!h)},children:(0,r.jsx)(g(),{href:"/wings/kin-school",className:"".concat("/wings/kin-school/"===e?"active":""," custom-style-menu-a"),children:"KIN School"})}),(0,r.jsx)("li",{onClick:()=>{f(!h)},children:(0,r.jsx)(g(),{href:"/wings/blood-donation",className:"".concat("/wings/blood-donation/"===e?"active":""," custom-style-menu-a"),children:"Blood Donation"})}),(0,r.jsx)("li",{onClick:()=>{f(!h)},children:(0,r.jsx)(g(),{href:"/wings/social-awareness",className:"".concat("/wings/social-awareness/"===e?"active":""," custom-style-menu-a"),children:"Social Awareness"})}),(0,r.jsx)("li",{onClick:()=>{f(!h)},children:(0,r.jsx)(g(),{href:"/wings/charity&aid",className:"".concat("/wings/charity&aid/"===e?"active":""," custom-style-menu-a"),children:"Charity & Aid"})}),(0,r.jsx)("li",{onClick:()=>{f(!h)},children:(0,r.jsx)(g(),{href:"/wings/winter-cloth-distribution",className:"".concat("/wings/winter-cloth-distribution/"===e?"active":""," custom-style-menu-a"),children:"Winter Cloth Distribution"})})]})]}),(0,r.jsx)("li",{onClick:()=>{f(!h)},children:(0,r.jsx)(g(),{href:"/posts",className:"".concat("/posts/"===e?"active":""," custom-style-menu-a"),children:"Blog"})}),(0,r.jsx)("li",{onClick:()=>{f(!h)},children:(0,r.jsx)(g(),{href:"/programs",className:"".concat("/programs/"===e?"active":""," custom-style-menu-a"),children:"Programs"})}),_&&(0,r.jsx)("li",{onClick:()=>{f(!h)},children:(0,r.jsx)(g(),{href:"/organizing-week",className:"".concat("/organizing-week/"===e?"active":""," custom-style-menu-a"),children:"Organizing Week"})}),s&&(0,r.jsx)("li",{onClick:()=>{f(!h)},children:(0,r.jsx)(g(),{href:"/profile",className:"".concat("/profile/"===e?"active":""," custom-style-menu-a"),children:"Profile"})}),(0,r.jsx)("li",{onClick:()=>{f(!h)},children:s?(0,r.jsx)(g(),{className:"  custom-style-menu-a",onClick:N,href:"",children:"Sign Out"}):(0,r.jsx)(g(),{href:"/login",className:"".concat("/login/"===e?"active":""," custom-style-menu-a"),children:"Login"})})]})}),(0,r.jsxs)(g(),{className:" h-full  md:mx-0 w-full",href:"/",children:[(0,r.jsx)(p(),{src:"/images/logo/logo_black.webp",alt:"",className:"h-16 dark:hidden block mx-auto w-auto",width:100,height:52,placeholder:"blur",blurDataURL:"/images/blur/blur.webp",loading:"lazy"}),(0,r.jsx)(p(),{src:"/images/logo/logo_white.webp",alt:"",className:"h-16 dark:block hidden mx-auto w-auto",width:100,height:52,placeholder:"blur",blurDataURL:"/images/blur/blur.webp",loading:"lazy"})]})]}),(0,r.jsx)("div",{className:"navbar-center hidden lg:flex p-0 grow ",children:(0,r.jsxs)("ul",{className:"menu menu-horizontal p-0 menu-compact space-x-2 mx-auto",children:[(0,r.jsx)("li",{children:(0,r.jsx)(g(),{href:"/",className:"".concat("/"===e?"active":""," custom-style-menu-a"),children:"Home"})}),(0,r.jsxs)("li",{children:[(0,r.jsxs)("span",{className:"custom-style-menu-a",children:["About Us",(0,r.jsx)(i.Ix0,{className:"text-xl"})]}),(0,r.jsxs)("ul",{className:"py-0 shadow-md  top-[35px] dark:bg-[#0f0826] dark:text-zinc-100    bg-[#f1f5f9] text-[#000]  drop-child-1",style:{zIndex:"100"},children:[(0,r.jsx)("li",{children:(0,r.jsx)(g(),{href:"/our-history",className:"".concat("/our-history/"===e?"active":""," custom-style-menu-a"),children:"Our History"})}),(0,r.jsx)("li",{children:(0,r.jsx)(g(),{href:"/executive-committee",className:"".concat("/executive-committee/"===e?"active":""," custom-style-menu-a"),children:"Executive Committee"})}),(0,r.jsx)("li",{children:(0,r.jsx)(g(),{href:"/advisors",className:"".concat("/advisors/"===e?"active":""," custom-style-menu-a "),children:"Advisors"})}),(0,r.jsx)("li",{children:(0,r.jsx)(g(),{href:"/faq",className:"".concat("/faq/"===e?"active":""," custom-style-menu-a mb-[-1px]"),children:"FAQ"})})]})]}),(0,r.jsxs)("li",{children:[(0,r.jsxs)("span",{className:"custom-style-menu-a",children:["Wings",(0,r.jsx)(i.Ix0,{className:"text-xl"})]}),(0,r.jsxs)("ul",{className:"py-0 m-0 shadow-md   dark:bg-[#0f0826]     bg-[#f1f5f9]    drop-child-2",style:{zIndex:"100"},children:[(0,r.jsx)("li",{children:(0,r.jsx)(g(),{href:"/wings/kin-school",className:"".concat("/wings/kin-school/"===e?"active":""," custom-style-menu-a"),children:"KIN School"})}),(0,r.jsx)("li",{children:(0,r.jsx)(g(),{href:"/wings/blood-donation",className:"".concat("/wings/blood-donation/"===e?"active":""," custom-style-menu-a"),children:"Blood Donation"})}),(0,r.jsx)("li",{children:(0,r.jsx)(g(),{href:"/wings/social-awareness",className:"".concat("/wings/social-awareness/"===e?"active":""," custom-style-menu-a"),children:"Social Awareness"})}),(0,r.jsx)("li",{children:(0,r.jsx)(g(),{href:"/wings/charity&aid",className:"".concat("/wings/charity&aid/"===e?"active":""," custom-style-menu-a"),children:"Charity & Aid"})}),(0,r.jsx)("li",{className:"",children:(0,r.jsx)(g(),{href:"/wings/winter-cloth-distribution",className:"".concat("/wings/winter-cloth-distribution/"===e?"active":""," custom-style-menu-a mb-[-1px]"),children:"Winter Cloth Distribution"})})]})]}),(0,r.jsx)("li",{children:(0,r.jsx)(g(),{href:"/posts",className:"".concat("/posts/"===e?"active":""," custom-style-menu-a"),children:"Blog"})}),(0,r.jsx)("li",{children:(0,r.jsx)(g(),{href:"/programs",className:"".concat("/programs/"===e?"active":""," custom-style-menu-a"),children:"Programs"})}),_&&(0,r.jsx)("li",{children:(0,r.jsx)(g(),{href:"/organizing-week",className:"".concat("/organizing-week/"===e?"active":""," custom-style-menu-a"),children:"Organizing Week"})}),s&&(0,r.jsx)("li",{children:(0,r.jsx)(g(),{href:"/profile",className:"".concat("/profile/"===e?"active":""," custom-style-menu-a"),children:"Profile"})}),(0,r.jsx)("li",{children:s?(0,r.jsx)(g(),{className:"custom-style-menu-a",href:"",onClick:N,children:"Sign Out"}):(0,r.jsx)(g(),{href:"/login",className:"".concat("/login/"===e?"active":""," custom-style-menu-a"),children:"Login"})})]})}),(0,r.jsx)("div",{className:"navbar-end  w-fit",children:(0,r.jsxs)("button",{className:"border dark:border-zinc-800 p-3 rounded-full  text-[#374246] dark:text-white bg-[#5a7b862c] cursor-pointer dark:bg-[#9f98b720] ",onClick:()=>{"light"===t?(document.querySelector("body").classList.add("dark"),localStorage.setItem("theme","dark"),t="dark"):(document.querySelector("body").classList.remove("dark"),localStorage.setItem("theme","light"),t="light")},children:[(0,r.jsx)(o.gLD,{className:"block dark:hidden   "}),(0,r.jsx)(o.UD2,{className:"dark:block hidden"})]})})]})})}t(3177),t(3538);var I=t(1678),_=t(2410),z=t(1266),A=t(3159);t(9506);var L=t(9644);function R(){let e=(0,x.I0)();(0,d.useEffect)(()=>{var e,a;null===(a=document)||void 0===a||null===(e=a.querySelector(".modal"))||void 0===e||e.addEventListener("click",()=>{var e,a,t;(null===(a=document)||void 0===a?void 0:null===(e=a.querySelector(".modal"))||void 0===e?void 0:e.previousElementSibling.checked)&&(null===(t=document.querySelector(".modal"))||void 0===t||t.previousElementSibling.click())})},[]);let a=(0,d.useRef)(null);return(0,r.jsxs)("footer",{className:"bg-[#f9fbfc]  dark:bg-[#0f1829] border-t  dark:border-[#211d4c] ",children:[(0,r.jsxs)("section",{className:" text-base xl:w-[1200px]    mx-auto footer pt-10 pb-12  px-3  m-auto  items-start justify-center md:justify-between ",children:[(0,r.jsxs)("div",{className:" mx-auto justify-items-center md:justify-items-start text-center md:text-left ",children:[(0,r.jsx)("span",{className:"",children:(0,r.jsxs)(g(),{href:"/",className:"cursor-pointer ",children:[(0,r.jsx)(p(),{src:"/images/logo/logo_white.webp",alt:"KIN logo",className:"h-[52px] hidden dark:block w-auto ",width:150,height:60,placeholder:"blur",blurDataURL:"/images/blur/blur.webp",loading:"lazy"}),(0,r.jsx)(p(),{src:"/images/logo/logo_black.webp",alt:"KIN logo",className:"  w-fit dark:hidden  h-[52px]",width:150,height:60,placeholder:"blur",blurDataURL:"/images/blur/blur.webp",loading:"lazy"})]})}),(0,r.jsx)("p",{className:" font-['Hind_Siliguri']  -mt-2 text-[#3e5060] dark:text-[#b2bac2]",children:"আত্মার কাছে দায়বদ্ধতায় হাতে রাখি হাত"}),(0,r.jsxs)("div",{className:"text-[#3e5060] dark:text-[#b2bac2]",children:[(0,r.jsx)("p",{className:"pb-[6px] pt-3 font-semibold",children:"Enter Your Email address:"}),(0,r.jsxs)("form",{className:"flex gap-2",onSubmit:a=>{a.preventDefault();let t=new FormData(a.target),{email:r}=Object.fromEntries(t.entries());if(!r)return u.Am.error("Email is required!"),!1;let s=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(r);if(!s)return u.Am.error("Invalid Email Address"),!1;e((0,L.F)({email:r}))},ref:a,children:[(0,r.jsx)("input",{type:"text",name:"email",placeholder:"example@gmail.com ",className:"py-3   rounded-md w-full px-3 bg-[#fff] border dark:bg-[#392f57d1] dark:border-[#848485]"}),(0,r.jsx)("input",{type:"submit",value:"Subscribe",className:"bg-[#d3e4f5] text-[#007fff] font-bold dark:bg-[#1e4976]  py-2 px-3 rounded-md dark:text-white cursor-pointer"})]})]})]}),(0,r.jsxs)("div",{className:" py-8 md:py-0 text-[#3e5060] dark:text-[#b2bac2] flex flex-col  gap-2  items-center md:items-start mx-auto contact-section ",children:[(0,r.jsx)("h2",{className:"pb-3 text-[#000102] dark:text-[#ffffff] font-bold  ",children:"CONTACT"}),(0,r.jsxs)("a",{href:"tel:+8801975467878",className:"",children:[(0,r.jsx)(o.lfG,{className:"w-6   h-6 inline-block mx-1 p-[3px]"}),"+8801975-467878"]}),(0,r.jsxs)("a",{href:"tel:+8801615467878",className:" flex items-center gap-2 ml-1",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"20",height:"20",x:"0",y:"0",viewBox:"0 0 64 64",children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"M32 2a30 30 0 1 0 30 30A30.037 30.037 0 0 0 32 2zm3.72 17.56c1.64-1.92 4.13-4.81 4.13-6.39a.715.715 0 0 1 1.43 0c0 1.65 2.69 4.71 4.35 6.65a8.53 8.53 0 0 1 .78 10.07 7.34 7.34 0 0 1-5.85 3.29 7.316 7.316 0 0 1-5.84-3.29 8.534 8.534 0 0 1 1-10.33zm14.6 29.53a12.525 12.525 0 0 1-16.82-.7L15.61 30.5a12.511 12.511 0 0 1-.7-16.81c1.19-1.76 3.39-2.34 5.01-.79l4.48 4.48a3.09 3.09 0 0 1-.49 4.73 3.228 3.228 0 0 0-.93 4.5c2.42 3.68 10.61 11.87 14.31 14.35a3.302 3.302 0 0 0 4.64-.87 3.051 3.051 0 0 1 4.71-.46l4.46 4.46a3.057 3.057 0 0 1 .89 2.29 3.529 3.529 0 0 1-1.67 2.71z",fill:"#f40505","data-original":"#000000",opacity:"1"})})}),"+8801615-467878"]}),(0,r.jsxs)("a",{className:"",href:"mailto: kinsust03@gmail.com",children:[(0,r.jsx)(i.hoL,{className:"w-6  h-6 inline-block mx-1 p-[3px]"}),"kinsust03@gmail.com"]}),(0,r.jsxs)("a",{href:"https://goo.gl/maps/x35EyojkSbMZY3rh7",target:"_blank",rel:"noReferrer",className:"     flex items-center ",children:[(0,r.jsx)(c.k9l,{className:"w-6  h-6 inline-block mx-1 p-[3px]"}),"Shahjalal University of Science & Technology, Sylhet-3114, Bangladesh"]})]}),(0,r.jsxs)("div",{className:" text-[#3e5060] dark:text-[#b2bac2]  flex flex-col gap-[6px] items-center md:items-start mx-auto explore-section",children:[(0,r.jsx)("h2",{className:"pb-3 text-black dark:text-white  font-bold  ",children:"EXPLORE"}),(0,r.jsx)(g(),{className:"",href:"/our-history",children:"Our History"}),(0,r.jsx)(g(),{className:"",href:"/programs",children:"Campaigns"}),(0,r.jsx)(g(),{className:"",href:"/executive-committee",children:"Executive Committee"}),(0,r.jsx)(g(),{href:"/faq",className:"",children:"FAQ"})]})]}),(0,r.jsx)("div",{className:" xl:w-[1200px] mx-auto  ",children:(0,r.jsx)("hr",{className:"h-[1px] border-none bg-[#bfbebe50] dark:bg-[#211d4c]"})}),(0,r.jsxs)("div",{className:" grid md:grid-cols-2 md:justify-items-between xl:w-[1200px] py-8 px-4  mx-auto text-[#3e5060] items-center dark:text-[#b2bac2]",children:[(0,r.jsxs)("p",{className:" md:order-1 order-2 dark:text-[#e2e8f0]   text-center md:text-left",children:["Copyright \xa9 2023"," ",(0,r.jsx)("span",{className:"text-red-600 font-['Arial_black'] dark:text-red-600",children:"KIN"})," ",", A Voluntary Organization of SUST"]}),(0,r.jsxs)("div",{className:"social-icons order-1 md:order-2 flex pb-4 md:pb-0 gap-4  md:justify-end mx-auto md:mx-0 ",children:[(0,r.jsx)("a",{href:"https://www.linkedin.com/company/kin-a-voluntary-organisation-of-sust/",target:"_blank",className:"text-[#0077b5]  dark:bg-[#6267d21e]  flex items-center h-12 rounded-full w-12  justify-center ",rel:"noreferrer",children:(0,r.jsx)(I.h6E,{className:"fill-[#435562] text-md dark:fill-white  "})}),(0,r.jsx)("a",{href:"https://www.youtube.com/@kinsust3885",target:"_blank",rel:"noreferrer",className:"text-[#0077b5]   dark:bg-[#6267d21e]  flex items-center h-12 rounded-full w-12  justify-center ",children:(0,r.jsx)(_.tPx,{className:"fill-[#435562] text-md dark:fill-white "})}),(0,r.jsx)("a",{href:"//www.facebook.com/KINSUST",rel:"noreferrer",target:"_blank",className:"  text-[#0077b5]  dark:bg-[#6267d21e]  flex items-center h-12 rounded-full w-12  justify-center ",children:(0,r.jsx)(z.f1b,{className:"fill-[#435562] text-md dark:fill-white "})}),(0,r.jsx)("a",{href:"//www.instagram.com/kin_sust/",rel:"noreferrer",target:"_blank",className:" text-[#0077b5]  dark:bg-[#6267d21e]  flex items-center h-12 rounded-full w-12  justify-center ",children:(0,r.jsx)(A.Zf_,{className:"fill-[#435562] text-md dark:fill-white "})})]})]})]})}t(3096);let P=(0,b.oM)({name:"advisors",initialState:{advisors:[],error:null,message:null},reducers:{setMessageEmpty:e=>{e.message=null,e.error=null}},extraReducers:e=>{e.addCase(j.rejected,(e,a)=>{e.error=a.error.message}).addCase(j.fulfilled,(e,a)=>{e.advisors=a.payload.data})}}),{setMessageEmpty:M}=P.actions;var U=P.reducer;let D=(0,b.oM)({name:"ecs",initialState:{ecs:[],error:null,message:null,pagination:null,ec:null},reducers:{setMessageEmpty:e=>{e.message=null,e.error=null}},extraReducers:e=>{e.addCase(v.rejected,(e,a)=>{e.error=a.error.message}).addCase(v.fulfilled,(e,a)=>{e.ecs=a.payload.data,e.ec=a.payload.data[0],localStorage.setItem("ecs",JSON.stringify(a.payload.data)),localStorage.setItem("ec",JSON.stringify(a.payload.data[0])),e.pagination=a.payload.pagination}).addCase(N.rejected,(e,a)=>{e.error=a.error.message}).addCase(N.fulfilled,(e,a)=>{e.ec=a.payload.data})}}),{setMessageEmpty:J}=D.actions;var K=D.reducer;let B=(0,b.oM)({name:"programs",initialState:{programs:[],error:null,message:null,pagination:null},reducers:{setMessageEmpty:e=>{e.message=null,e.error=null}},extraReducers:e=>{e.addCase(k.N.rejected,(e,a)=>{e.error=a.error.message}).addCase(k.N.fulfilled,(e,a)=>{e.programs=a.payload.data,e.pagination=a.payload.pagination,localStorage.setItem("programs",JSON.stringify(a.payload.data)),localStorage.setItem("programs.pagination",JSON.stringify(a.payload.pagination))})}}),{setMessageEmpty:q}=B.actions;var F=B.reducer;let H=(0,b.oM)({name:"blogs",initialState:{blogs:[],error:null,message:null,blog:null,pagination:null},reducers:{setMessageEmpty:e=>{e.message=null,e.error=null},setBlogEmpty:e=>{e.blog=null}},extraReducers:e=>{e.addCase(C.L.rejected,(e,a)=>{e.error=a.error.message}).addCase(C.L.fulfilled,(e,a)=>{e.blogs=a.payload.data,e.pagination=a.payload.pagination,localStorage.setItem("blogs",JSON.stringify(a.payload.data)),localStorage.setItem("blogs.pagination",JSON.stringify(a.payload.pagination))}).addCase(C.VK.rejected,(e,a)=>{e.error=a.error.message}).addCase(C.VK.fulfilled,(e,a)=>{e.blog=a.payload.data,localStorage.setItem("blog",JSON.stringify(a.payload.data))}).addCase(C.AH.rejected,(e,a)=>{e.error=a.error.message}).addCase(C.AH.fulfilled,(e,a)=>{e.message=a.payload.message,e.blog=a.payload.data,localStorage.setItem("blog",JSON.stringify(a.payload.data))})}}),{setMessageEmpty:T}=H.actions,{setBlogEmpty:V}=H.actions;var W=H.reducer;let $=(0,b.oM)({name:"sliders",initialState:{sliders:[],error:null,message:null},reducers:{setMessageEmpty:e=>{e.message=null,e.error=null}},extraReducers:e=>{e.addCase(S.L.rejected,(e,a)=>{e.error=a.error.message}).addCase(S.L.fulfilled,(e,a)=>{e.sliders=a.payload.data,localStorage.setItem("sliders",JSON.stringify(a.payload.data))})}}),{setMessageEmpty:G}=$.actions;var Y=$.reducer,Q=t(2707);let X=(0,b.xC)({reducer:{auth:O.ZP,advisors:U,programs:F,blogs:W,ecs:K,sliders:Y,subscriber:Q.Z},middleware:e=>e({}),devTools:!0});function ee(e){let{children:a}=e;return(0,r.jsxs)("html",{lang:"en",children:[(0,r.jsxs)("head",{children:[(0,r.jsx)("meta",{name:"owner",content:"KIN,A Voluntary Organization"}),(0,r.jsx)("meta",{name:"keywords",content:"kinsust, kin ,kin school,kin blood donation, sust"}),(0,r.jsx)("meta",{name:"distribution",content:"Global"}),(0,r.jsx)("meta",{name:"author",content:"Md.Rejoyan Islam"}),(0,r.jsx)("meta",{property:"fb:pages",content:"192895057402251"}),(0,r.jsx)("meta",{property:"fb:app_id",content:"1438139603344595"}),(0,r.jsx)("meta",{name:"copyright",content:"KIN,A Voluntary Organization "}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"twitter:title",content:"KIN,A Voluntary Organization"}),(0,r.jsx)("link",{rel:"canonical",href:"".concat(y.B)}),(0,r.jsx)("meta",{property:"og:url",content:"".concat(y.B)}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon.png",type:"image/png"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.png",type:"image/png"})]}),(0,r.jsxs)("body",{className:"".concat(l().className," bg-transparent"),children:[(0,r.jsxs)(x.zt,{store:X,children:[(0,r.jsx)(Z,{}),(0,r.jsx)("main",{children:a}),(0,r.jsx)(R,{})]}),(0,r.jsx)(u.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})]})}t(6518),t(2286)},3931:function(e,a,t){"use strict";t.d(a,{Al:function(){return d},DO:function(){return u},Gd:function(){return g},Kv:function(){return i},N$:function(){return n},OU:function(){return x},RJ:function(){return p},RZ:function(){return c},Zy:function(){return m},aT:function(){return f},kE:function(){return h},n$:function(){return o}});var r=t(1554),s=t(64),l=t(9222);let n=(0,s.hg)("auth/userRegister",async e=>{try{let a=await l.Z.post("".concat(r.Z,"/api/v1/auth/register"),e,{withCredentials:!0});return a.data}catch(e){throw Error(e.response.data.error.message)}}),o=(0,s.hg)("auth/userLogin",async e=>{let{router:a}=e;try{let t=await l.Z.post("".concat(r.Z,"/api/v1/auth/login"),{...e.data},{withCredentials:!0});return setTimeout(()=>{a.push("/profile")}),t.data}catch(e){throw Error(e.response.data.error.message)}}),i=(0,s.hg)("auth/userLogout",async()=>{try{let e=await l.Z.post("".concat(r.Z,"/api/v1/auth/logout"),{},{withCredentials:!0});return e.data}catch(e){throw Error(e.response.data.error.message)}}),c=(0,s.hg)("auth/loggedInUser",async()=>{try{let e=await l.Z.get("".concat(r.Z,"/api/v1/auth/me"),{withCredentials:!0});return e.data}catch(e){throw Error(e.response.data.error.message)}}),d=(0,s.hg)("auth/updateUserData",async e=>{try{let a=await l.Z.patch("".concat(r.Z,"/api/v1/users/").concat(e.id),e.data,{withCredentials:!0});return a.data}catch(e){throw Error(e.response.data.error.message)}}),u=(0,s.hg)("auth/updateUserPhoto",async e=>{let{userId:a}=Object.fromEntries(e);try{let t=await l.Z.patch("".concat(r.Z,"/api/v1/users/").concat(a),e,{withCredentials:!0});return t.data}catch(e){throw Error(e.response.data.error.message)}}),m=(0,s.hg)("auth/updateUserPassword",async e=>{try{let a=await l.Z.patch("".concat(r.Z,"/api/v1/users/password-update"),e,{withCredentials:!0});return a.data}catch(e){throw Error(e.response.data.error.message)}}),h=(0,s.hg)("auth/sendActiveCode",async e=>{try{let a=await l.Z.post("".concat(r.Z,"/api/v1/auth/resend-active-code"),e,{withCredentials:!0});return a.data}catch(e){throw Error(e.response.data.error.message)}}),g=(0,s.hg)("auth/activeAccount",async e=>{try{let a=await l.Z.post("".concat(r.Z,"/api/v1/auth/activate"),e,{withCredentials:!0});return a.data}catch(e){throw Error(e.response.data.error.message)}}),f=(0,s.hg)("auth/findAccount",async e=>{try{let a=await l.Z.post("".concat(r.Z,"/api/v1/auth/find-account"),e,{withCredentials:!0});return a.data}catch(e){throw Error(e.response.data.error.message)}}),p=(0,s.hg)("auth/passwordResetCodeSend",async e=>{try{let a=await l.Z.post("".concat(r.Z,"/api/v1/auth/password-reset-code"),e,{withCredentials:!0});return a.data}catch(e){throw Error(e.response.data.error.message)}}),x=(0,s.hg)("auth/passwordReset",async e=>{console.log(e);try{let a=await l.Z.post("".concat(r.Z,"/api/v1/auth/password-reset"),e,{withCredentials:!0});return a.data}catch(e){throw Error(e.response.data.error.message)}})},1210:function(e,a,t){"use strict";t.d(a,{Eo:function(){return i},nr:function(){return o}});var r=t(64),s=t(3931),l=t(7713);let n=(0,r.oM)({name:"auth",initialState:{user:null,error:null,message:null},reducers:{setMessageEmpty:e=>{e.message=null,e.error=null}},extraReducers:e=>{e.addCase(s.N$.rejected,(e,a)=>{e.error=a.error.message}).addCase(s.N$.fulfilled,(e,a)=>{e.message=a.payload.message}).addCase(s.n$.rejected,(e,a)=>{e.error=a.error.message}).addCase(s.n$.fulfilled,(e,a)=>{e.user=a.payload.data,e.message=a.payload.message,(0,l.setCookie)("token",a.payload.data.accessToken,{secure:!0,sameSite:"none"}),localStorage.setItem("user",JSON.stringify(a.payload.data))}).addCase(s.Kv.rejected,(e,a)=>{e.error=a.error.message}).addCase(s.Kv.fulfilled,(e,a)=>{e.user=null,e.message=a.payload.message,localStorage.removeItem("user"),(0,l.deleteCookie)("token",{secure:!0,sameSite:"none"})}).addCase(s.RZ.rejected,e=>{e.user=null}).addCase(s.RZ.fulfilled,(e,a)=>{e.user=a.payload.data,localStorage.setItem("user",JSON.stringify(a.payload.data))}).addCase(s.Al.rejected,(e,a)=>{e.error=a.error.message}).addCase(s.Al.fulfilled,(e,a)=>{e.user=a.payload.data,e.message=a.payload.message,localStorage.setItem("user",JSON.stringify(a.payload.data))}).addCase(s.DO.rejected,e=>{e.error="Something went wrong!."}).addCase(s.DO.fulfilled,(e,a)=>{e.user=a.payload.data,e.message="Photo updated successfully!",localStorage.setItem("user",JSON.stringify(a.payload.data))}).addCase(s.Zy.rejected,e=>{e.error="Something went wrong!."}).addCase(s.Zy.fulfilled,(e,a)=>{e.user=a.payload.data,e.message=a.payload.message}).addCase(s.kE.rejected,e=>{e.error="Something went wrong to send active code in your email!."}).addCase(s.kE.fulfilled,(e,a)=>{e.message=a.payload.message}).addCase(s.Gd.rejected,(e,a)=>{e.error=a.error.message}).addCase(s.Gd.fulfilled,(e,a)=>{e.message=a.payload.message}).addCase(s.aT.rejected,(e,a)=>{e.error=a.error.message}).addCase(s.aT.fulfilled,e=>{e.message="User found!"}).addCase(s.RJ.rejected,(e,a)=>{e.error=a.error.message}).addCase(s.RJ.fulfilled,(e,a)=>{e.message=a.payload.message}).addCase(s.OU.rejected,(e,a)=>{e.error=a.error.message}).addCase(s.OU.fulfilled,(e,a)=>{e.message=a.payload.message})}}),o=e=>e.auth,{setMessageEmpty:i}=n.actions;a.ZP=n.reducer},5520:function(e,a,t){"use strict";t.d(a,{AH:function(){return i},L:function(){return n},VK:function(){return o}});var r=t(1554),s=t(64),l=t(9222);let n=(0,s.hg)("blogs/getAllBlogs",async e=>{try{let a=await l.Z.get("".concat(r.Z,"/api/v1/posts?page=").concat(e?e.page:1,"&limit=10"),{withCredentials:!0});return a.data}catch(e){throw Error(e.response.data.error.message)}}),o=(0,s.hg)("blogs/getSingleBlog",async e=>{try{let a=await l.Z.get("".concat(r.Z,"/api/v1/posts/").concat(e),{withCredentials:!0});return a.data}catch(e){throw Error(e.response.data.error.message)}}),i=(0,s.hg)("blogs/commentOnBlog",async e=>{try{let{id:a,data:t}=e,s=await l.Z.patch("".concat(r.Z,"/api/v1/posts/").concat(a),{comment:{...t}},{withCredentials:!0});return s.data}catch(e){throw Error(e.response.data.error.message)}})},6819:function(e,a,t){"use strict";t.d(a,{N:function(){return n}});var r=t(1554),s=t(64),l=t(9222);let n=(0,s.hg)("programs/getAllPrograms",async e=>{try{let a=await l.Z.get("".concat(r.Z,"/api/v1/programs?page=").concat(e?e.page:1,"&limit=12"),{withCredentials:!0});return a.data}catch(e){throw Error(e.response.data.error.message)}})},1554:function(e,a,t){"use strict";t.d(a,{B:function(){return r}}),a.Z="https://kin-api.onrender.com";let r="https://www.kinsust.org"},6718:function(e,a,t){"use strict";t.d(a,{L:function(){return n}});var r=t(64),s=t(9222),l=t(1554);let n=(0,r.hg)("sliders/allSliders",async()=>{try{let e=await s.Z.get("".concat(l.Z,"/api/v1/sliders"),{withCredentials:!0});return e.data}catch(e){throw Error(e.response.data.error.message)}})},9644:function(e,a,t){"use strict";t.d(a,{F:function(){return n}});var r=t(64),s=t(9222),l=t(1554);let n=(0,r.hg)("subscriber/addSubscriber",async e=>{try{let a=await s.Z.post("".concat(l.Z,"/api/v1/subscribers"),e,{withCredentials:!0});return a.data}catch(e){throw Error(e.response.data.error.message)}})},2707:function(e,a,t){"use strict";t.d(a,{E:function(){return n}});var r=t(64),s=t(9644);let l=(0,r.oM)({name:"subscriber",initialState:{subscriber:null,error:null,message:null},reducers:{setMessageEmpty:e=>{e.message=null,e.error=null}},extraReducers:e=>{e.addCase(s.F.rejected,(e,a)=>{e.error=a.error.message}).addCase(s.F.fulfilled,(e,a)=>{e.subscriber=a.payload.data,e.message=a.payload.message})}}),{setMessageEmpty:n}=l.actions;a.Z=l.reducer},1295:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),function(e,a){for(var t in a)Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}(a,{default:function(){return c},unstable_getImgProps:function(){return i}});let r=t(1024),s=t(2301),l=t(7873),n=t(3222),o=r._(t(6515)),i=e=>{(0,l.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:a}=(0,s.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,t]of Object.entries(a))void 0===t&&delete a[e];return{props:a}},c=n.Image},3177:function(){},2286:function(){},3096:function(){},6518:function(){},3538:function(){},9506:function(){},8999:function(){},8846:function(e){e.exports={style:{fontFamily:"'__Hind_Siliguri_7f8b02', '__Hind_Siliguri_Fallback_7f8b02'",fontStyle:"normal"},className:"__className_7f8b02"}},6691:function(e,a,t){e.exports=t(1295)},1396:function(e,a,t){e.exports=t(6685)},1172:function(e,a,t){"use strict";t.d(a,{w_:function(){return i}});var r=t(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(s),n=function(){return(n=Object.assign||function(e){for(var a,t=1,r=arguments.length;t<r;t++)for(var s in a=arguments[t])Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s]);return e}).apply(this,arguments)},o=function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>a.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)0>a.indexOf(r[s])&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};function i(e){return function(a){return r.createElement(c,n({attr:n({},e.attr)},a),function e(a){return a&&a.map(function(a,t){return r.createElement(a.tag,n({key:t},a.attr),e(a.child))})}(e.child))}}function c(e){var a=function(a){var t,s=e.attr,l=e.size,i=e.title,c=o(e,["attr","size","title"]),d=l||a.size||"1em";return a.className&&(t=a.className),e.className&&(t=(t?t+" ":"")+e.className),r.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,s,c,{className:t,style:n(n({color:e.color||a.color},a.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==l?r.createElement(l.Consumer,null,function(e){return a(e)}):a(s)}}},function(e){e.O(0,[8447,2400,1582,2420,1724,9982,6652,3306,3222,6566,6685,8427,4013,2971,596,1744],function(){return e(e.s=1285)}),_N_E=e.O()}]);