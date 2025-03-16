import{v as S}from"./@vue_runtime-dom@3.5.13-BVspzEjS.js";import{I as F}from"./@iconify_vue@4.3.0_vue@3.5.13_typescript@5.6.3_-NS46C8hN.js";import{_ as L}from"./Table.vue_vue_type_script_setup_true_lang-Chiz9bMU.js";import{n as P,_ as R,f as A}from"./index-BK_Wyeji.js";import{u as U}from"./vue-router@4.5.0_vue@3.5.13_typescript@5.6.3_-Ck-ukzwP.js";import{d as q,w as N,c as f,i,a as e,z as B,X as w,o as p,F as I,S as V,H,E as j,I as M}from"./@vue_runtime-core@3.5.13-D0UggR25.js";import{q as m,k as D,v as s,e as y}from"./@vue_reactivity@3.5.13-DVqfZfgJ.js";import{_ as E}from"./music-library-broken-C_XgvIRf.js";import{M as h,p as X}from"./@vue_shared@3.5.13-oPavf41m.js";import{_ as G}from"./outline-play-circle-DUWIY64_.js";import{s as J}from"./enum-DefmansI.js";import"./axios@1.7.9-upsvKRUO.js";import"./nprogress@0.2.0-2myQQFUx.js";import"./artplayer@5.2.2-DS9jODRL.js";import"./pinia@2.3.1_typescript@5.6.3_vue@3.5.13_typescript@5.6.3_-Bbm25ImI.js";import"./vue-demi@0.14.10_vue@3.5.13_typescript@5.6.3_-Dq6ymT-8.js";import"./@vueuse_core@12.5.0_typescript@5.6.3-DxQS7b1s.js";import"./@vueuse_shared@12.5.0_typescript@5.6.3-CYuF3qNP.js";import"./element-plus@2.9.3_vue@3.5.13_typescript@5.6.3_-cDIutw2K.js";import"./lodash-es@4.17.21-C-zDejYo.js";import"./@vueuse_shared@9.13.0_vue@3.5.13_typescript@5.6.3_-C-4_69NP.js";import"./@vueuse_core@9.13.0_vue@3.5.13_typescript@5.6.3_-CSKvZi15.js";import"./@element-plus_icons-vue@2.3.1_vue@3.5.13_typescript@5.6.3_-DA6ZXMEE.js";import"./@sxzz_popperjs-es@2.11.7-D9SI2xQl.js";import"./@ctrl_tinycolor@3.6.1-r5W6hzzQ.js";import"./dayjs@1.11.13-B9vLV8e8.js";import"./async-validator@4.2.5-9PlIezaS.js";import"./memoize-one@6.0.0-BdPwpGay.js";import"./normalize-wheel-es@1.2.0-B6fDCfyv.js";import"./@floating-ui_dom@1.6.13-CajCCXHK.js";import"./@floating-ui_core@1.6.9-B4d9L5V3.js";import"./@floating-ui_utils@0.2.9-CfPjaTyQ.js";import"./vue-i18n@11.0.1_vue@3.5.13_typescript@5.6.3_-DcD3Ohgl.js";import"./@intlify_core-base@11.0.1-BZLI_61R.js";import"./@intlify_shared@11.0.1-i7e918a7.js";import"./@intlify_message-compiler@11.0.1-CJM0b8Rk.js";import"./pinia-plugin-persistedstate@4.2.0_pinia@2.3.1_typescript@5.6.3_vue@3.5.13_typescript@5.6.3___rollup@4.29.1-_Zka_ujQ.js";import"./destr@2.0.3-CVtkxrq9.js";import"./deep-pick-omit@1.2.1-CegYQlcN.js";const K={class:"flex-1 h-full flex flex-col overflow-hidden"},O={class:"mx-auto flex w-full justify-center mt-4"},Q=q({__name:"songs",props:{selected:{type:String,default:"1"}},setup(x){const o=U(),_=x,c=m(),n=m(1),l=m(30),v=D({size:"default",disabled:!1,background:!1,layout:"total, sizes, prev, pager, next, jumper",total:0,pageSizes:[20,30,40,50]}),k=()=>{d()},z=()=>{d()},d=()=>{c.value=void 0,P({kw:o.query.query,offset:n.value,limit:l.value,type:_.selected}).then(t=>{c.value=t.result,v.total=t.result.songCount})};return N(()=>[o.query.query,_.selected],t=>{t[0]&&(!t[1]||t[1]!="1"||d())},{immediate:!0}),(t,r)=>{var b;const C=L,$=w("el-pagination");return p(),f("div",K,[i(C,{data:(b=s(c))==null?void 0:b.songs,class:"flex-1 overflow-x-hidden"},null,8,["data"]),e("nav",O,[i($,B({"page-size":s(l),"onUpdate:pageSize":r[0]||(r[0]=a=>y(l)?l.value=a:null),currentPage:s(n),"onUpdate:currentPage":r[1]||(r[1]=a=>y(n)?n.value=a:null)},s(v),{onSizeChange:k,onCurrentChange:z}),null,16,["page-size","currentPage"])])])}}}),W={class:"flex-1 h-full flex flex-col overflow-hidden"},Y={class:"flex-1 overflow-x-hidden"},Z={class:"grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6"},ee={class:"flex flex-col space-y-1.5 p-0"},te={class:"relative"},se={class:"p-4"},oe={class:"font-semibold tracking-tight text-lg mb-2 line-clamp-1"},ne={class:"flex items-center justify-between text-sm text-muted-foreground"},re={class:"flex items-center"},le={class:"relative flex shrink-0 overflow-hidden rounded-full w-4 h-4 mr-2"},ie=["alt","src"],ae={class:"flex items-center gap-1"},ce={key:0,class:"items-center p-4 pt-0 flex justify-between text-sm text-muted-foreground"},ue={class:"mx-auto flex w-full justify-center mt-4"},de=q({__name:"albums",props:{selected:{type:String,default:"10"}},setup(x){const o=U(),_=x,c=m(),n=m(1),l=m(30),v=D({size:"default",disabled:!1,background:!1,layout:"total, sizes, prev, pager, next, jumper",total:0,pageSizes:[20,30,40,50]}),k=()=>{d()},z=()=>{d()},d=()=>{c.value=void 0,P({kw:o.query.query,offset:n.value,limit:l.value,type:_.selected}).then(t=>{c.value=t.result,v.total=t.result.albumCount})};return N(()=>[o.query.query,_.selected],t=>{t[0]&&(!t[1]||t[1]!="10"||d())},{immediate:!0}),(t,r)=>{var a;const C=w("el-image"),$=E,b=w("el-pagination");return p(),f("div",W,[e("div",Y,[e("div",Z,[(p(!0),f(I,null,V((a=s(c))==null?void 0:a.albums,u=>(p(),f("div",{key:u.id,class:"rounded-lg hover:bg-background transition duration-300 border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg"},[e("div",ee,[e("div",te,[i(C,{alt:u.name,lazy:"",class:"w-full aspect-square object-cover",src:u.picUrl},null,8,["alt","src"]),r[2]||(r[2]=e("button",{class:"inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 w-10 absolute bottom-2 right-2 rounded-full"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-play h-4 w-4"},[e("polygon",{points:"6 3 20 12 6 21 6 3"})])],-1))])]),e("div",se,[e("h3",oe,h(u.name),1),e("div",ne,[e("div",re,[e("span",le,[e("img",{class:"aspect-square h-full w-full",alt:u.artist.name,src:u.artist.picUrl},null,8,ie)]),e("span",null,h(u.artist.name),1)]),e("div",ae,[i($),e("span",null,h(u.size),1)])])]),u.transNames?(p(),f("div",ce,h(u.transNames[0]),1)):H("",!0)]))),128))])]),e("nav",ue,[i(b,B({"page-size":s(l),"onUpdate:pageSize":r[0]||(r[0]=u=>y(l)?l.value=u:null),currentPage:s(n),"onUpdate:currentPage":r[1]||(r[1]=u=>y(n)?n.value=u:null)},s(v),{onSizeChange:k,onCurrentChange:z}),null,16,["page-size","currentPage"])])])}}}),fe={};function pe(x,o){return p(),f("div",null,"艺术家")}const ge=R(fe,[["render",pe]]),me={class:"flex-1 h-full flex flex-col overflow-hidden"},_e={class:"flex-1 overflow-x-hidden"},ve={class:"grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6"},he={class:"flex flex-col space-y-1.5 p-0"},xe={class:"relative"},be={class:"p-4"},we={class:"font-semibold tracking-tight text-lg mb-2 line-clamp-1"},ye={class:"flex items-center justify-between text-sm text-muted-foreground"},ke={class:"flex items-center"},ze={class:"relative flex shrink-0 overflow-hidden rounded-full w-4 h-4 mr-2"},Ce={class:"flex items-center gap-1"},$e={class:"items-center p-4 pt-0 flex justify-between text-sm text-muted-foreground"},Se={class:"flex items-center gap-1"},je={class:"mx-auto flex w-full justify-center mt-4"},qe=q({__name:"songList",props:{selected:{type:String,default:"10"}},setup(x){const o=U(),_=x,c=m(),n=m(1),l=m(30),v=D({size:"default",disabled:!1,background:!1,layout:"total, sizes, prev, pager, next, jumper",total:0,pageSizes:[20,30,40,50]}),k=()=>{d()},z=()=>{d()},d=()=>{c.value=void 0,P({kw:o.query.query,offset:n.value,limit:l.value,type:_.selected}).then(t=>{c.value=t.result,v.total=t.result.playlistCount})};return N(()=>[o.query.query,_.selected],t=>{t[0]&&(!t[1]||t[1]!="1000"||d())},{immediate:!0}),(t,r)=>{var T;const C=w("el-image"),$=w("el-avatar"),b=E,a=G,u=w("el-pagination");return p(),f("div",me,[e("div",_e,[e("div",ve,[(p(!0),f(I,null,V((T=s(c))==null?void 0:T.playlists,g=>(p(),f("div",{key:g.id,class:"rounded-lg hover:bg-background transition duration-300 border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg"},[e("div",he,[e("div",xe,[i(C,{alt:g.name,lazy:"",class:"w-full aspect-square object-cover",src:g.coverImgUrl},null,8,["alt","src"]),r[2]||(r[2]=e("button",{class:"inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 w-10 absolute bottom-2 right-2 rounded-full"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-play h-4 w-4"},[e("polygon",{points:"6 3 20 12 6 21 6 3"})])],-1))])]),e("div",be,[e("h3",we,h(g.name),1),e("div",ye,[e("div",ke,[e("span",ze,[i($,{class:"aspect-square h-full w-full",alt:g.creator.nickname,src:g.creator.avatarUrl},null,8,["alt","src"])]),e("span",null,h(g.creator.nickname),1)]),e("div",Ce,[i(b),e("span",null,h(g.trackCount),1)])])]),e("div",$e,[e("div",Se,[i(a),e("span",null,h(s(A)(g.playCount)),1)])])]))),128))])]),e("nav",je,[i(u,B({"page-size":s(l),"onUpdate:pageSize":r[0]||(r[0]=g=>y(l)?l.value=g:null),currentPage:s(n),"onUpdate:currentPage":r[1]||(r[1]=g=>y(n)?n.value=g:null)},s(v),{onSizeChange:k,onCurrentChange:z}),null,16,["page-size","currentPage"])])])}}}),Pe={class:"flex-1 h-full flex flex-col overflow-hidden"},Ue={class:"flex-1 overflow-x-hidden"},Ne={class:"grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6"},Be={class:"flex flex-col space-y-1.5 p-0"},Ie={class:"relative"},Ve={class:"px-4 py-2"},De={class:"font-semibold tracking-tight text-lg line-clamp-1 text-center"},Te={class:"mx-auto flex w-full justify-center mt-4"},Ee=q({__name:"mv",props:{selected:{type:String,default:"1004"}},setup(x){const o=U(),_=x,c=m(),n=m(1),l=m(20),v=D({size:"default",disabled:!1,background:!1,layout:"total, sizes, prev, pager, next, jumper",total:0,pageSizes:[20,30,40,50]}),k=()=>{d()},z=()=>{d()},d=()=>{c.value=void 0,P({kw:o.query.query,offset:n.value,limit:l.value,type:_.selected}).then(t=>{c.value=t.result,v.total=t.result.mvCount})};return N(()=>[o.query.query,_.selected],t=>{t[0]&&(!t[1]||t[1]!="1004"||d())},{immediate:!0}),(t,r)=>{var b;const C=w("el-image"),$=w("el-pagination");return p(),f("div",Pe,[e("div",Ue,[e("div",Ne,[(p(!0),f(I,null,V((b=s(c))==null?void 0:b.mvs,a=>(p(),f("div",{key:a.id,class:"rounded-lg hover:bg-background transition duration-300 border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg"},[e("div",Be,[e("div",Ie,[i(C,{alt:a.name,lazy:"",class:"w-full aspect-square object-cover h-44",src:a.cover},null,8,["alt","src"]),r[2]||(r[2]=e("button",{class:"inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 w-10 absolute bottom-2 right-2 rounded-full"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-play h-4 w-4"},[e("polygon",{points:"6 3 20 12 6 21 6 3"})])],-1))])]),e("div",Ve,[e("h3",De,h(a.name),1)])]))),128))])]),e("nav",Te,[i($,B({"page-size":s(l),"onUpdate:pageSize":r[0]||(r[0]=a=>y(l)?l.value=a:null),"current-page":s(n),"onUpdate:currentPage":r[1]||(r[1]=a=>y(n)?n.value=a:null)},s(v),{onSizeChange:k,onCurrentChange:z}),null,16,["page-size","current-page"])])])}}}),Fe={class:"p-4 w-full h-full overflow-x-hidden flex flex-col"},Le={class:"mb-2"},Re={class:"inline-flex h-10 items-center rounded-lg bg-muted/70 p-1 text-muted-foreground w-full justify-start mb-2 overflow-x-auto"},Ae=["onClick"],He={class:"w-5 h-5"},qt=q({__name:"index",setup(x){const o=m("1");return(_,c)=>(p(),f("div",Fe,[e("div",Le,[e("div",Re,[(p(!0),f(I,null,V(s(J),n=>(p(),f("button",{key:n.id,onClick:l=>o.value=n.id,class:X([{"bg-background text-foreground shadow-sm":s(o)===n.id},"inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"])},[e("div",He,[i(s(F),{icon:n.icon,class:"w-full h-full"},null,8,["icon"])]),M(" "+h(n.label),1)],10,Ae))),128))])]),j(i(Q,{selected:s(o)},null,8,["selected"]),[[S,s(o)=="1"]]),j(i(de,{selected:s(o)},null,8,["selected"]),[[S,s(o)=="10"]]),j(i(ge,{selected:s(o)},null,8,["selected"]),[[S,s(o)=="100"]]),j(i(qe,{selected:s(o)},null,8,["selected"]),[[S,s(o)=="1000"]]),j(i(Ee,{selected:s(o)},null,8,["selected"]),[[S,s(o)=="1004"]])]))}});export{qt as default};
