import{e as j,q as g,u as c,z as Y,y as T,f as H,A as L,B as k}from"./@vue_reactivity@3.5.13-DVqfZfgJ.js";import{m as C,n as I,l as P,w as y,j as $,q as W,t as _}from"./@vue_runtime-core@3.5.13-D0UggR25.js";function A(e){return L()?(k(e),!0):!1}const h=new WeakMap,Q=(...e)=>{var t;const n=e[0],r=(t=$())==null?void 0:t.proxy;if(r==null&&!W())throw new Error("injectLocal must be called in setup");return r&&h.has(r)&&n in h.get(r)?h.get(r)[n]:_(...e)},F=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const x=Object.prototype.toString,U=e=>x.call(e)==="[object Object]",S=()=>{};function O(e,t){function n(...r){return new Promise((s,o)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(s).catch(o)})}return n}const R=e=>e();function E(e,t={}){let n,r,s=S;const o=a=>{clearTimeout(a),s(),s=S};let i;return a=>{const l=c(e),f=c(t.maxWait);return n&&o(n),l<=0||f!==void 0&&f<=0?(r&&(o(r),r=null),Promise.resolve(a())):new Promise((p,d)=>{s=t.rejectOnCancel?d:p,i=a,f&&!r&&(r=setTimeout(()=>{n&&o(n),r=null,p(i())},f)),n=setTimeout(()=>{r&&o(r),r=null,p(a())},l)})}}function N(e=R){const t=g(!0);function n(){t.value=!1}function r(){t.value=!0}const s=(...o)=>{t.value&&e(...o)};return{isActive:T(t),pause:n,resume:r,eventFilter:s}}function ee(e){return e.endsWith("rem")?Number.parseFloat(e)*16:Number.parseFloat(e)}function G(e){return $()}function te(e){return Array.isArray(e)?e:[e]}function ne(...e){if(e.length!==1)return Y(...e);const t=e[0];return typeof t=="function"?T(H(()=>({get:t,set:S}))):g(t)}function re(e,t=200,n={}){return O(E(t,n),e)}function V(e,t,n={}){const{eventFilter:r=R,...s}=n;return y(e,O(r,t),s)}function oe(e,t,n={}){const{eventFilter:r,...s}=n,{eventFilter:o,pause:i,resume:u,isActive:a}=N(r);return{stop:V(e,t,{...s,eventFilter:o}),pause:i,resume:u,isActive:a}}function se(e,t=!0,n){G()?C(e,n):t?e():I(e)}const q=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i,z=/[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function X(e,t,n,r){let s=e<12?"AM":"PM";return r&&(s=s.split("").reduce((o,i)=>o+=`${i}.`,"")),n?s.toLowerCase():s}function m(e){const t=["th","st","nd","rd"],n=e%100;return e+(t[(n-20)%10]||t[n]||t[0])}function Z(e,t,n={}){var r;const s=e.getFullYear(),o=e.getMonth(),i=e.getDate(),u=e.getHours(),a=e.getMinutes(),l=e.getSeconds(),f=e.getMilliseconds(),p=e.getDay(),d=(r=n.customMeridiem)!=null?r:X,w={Yo:()=>m(s),YY:()=>String(s).slice(-2),YYYY:()=>s,M:()=>o+1,Mo:()=>m(o+1),MM:()=>`${o+1}`.padStart(2,"0"),MMM:()=>e.toLocaleDateString(c(n.locales),{month:"short"}),MMMM:()=>e.toLocaleDateString(c(n.locales),{month:"long"}),D:()=>String(i),Do:()=>m(i),DD:()=>`${i}`.padStart(2,"0"),H:()=>String(u),Ho:()=>m(u),HH:()=>`${u}`.padStart(2,"0"),h:()=>`${u%12||12}`.padStart(1,"0"),ho:()=>m(u%12||12),hh:()=>`${u%12||12}`.padStart(2,"0"),m:()=>String(a),mo:()=>m(a),mm:()=>`${a}`.padStart(2,"0"),s:()=>String(l),so:()=>m(l),ss:()=>`${l}`.padStart(2,"0"),SSS:()=>`${f}`.padStart(3,"0"),d:()=>p,dd:()=>e.toLocaleDateString(c(n.locales),{weekday:"narrow"}),ddd:()=>e.toLocaleDateString(c(n.locales),{weekday:"short"}),dddd:()=>e.toLocaleDateString(c(n.locales),{weekday:"long"}),A:()=>d(u,a),AA:()=>d(u,a,!1,!0),a:()=>d(u,a,!0),aa:()=>d(u,a,!0,!0)};return t.replace(z,(D,v)=>{var M,b;return(b=v??((M=w[D])==null?void 0:M.call(w)))!=null?b:D})}function B(e){if(e===null)return new Date(Number.NaN);if(e===void 0)return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){const t=e.match(q);if(t){const n=t[2]-1||0,r=(t[7]||"0").substring(0,3);return new Date(t[1],n,t[3]||1,t[4]||0,t[5]||0,t[6]||0,r)}}return new Date(e)}function ae(e,t="HH:mm:ss",n={}){return P(()=>Z(B(c(e)),c(t),n))}function ie(e,t=1e3,n={}){const{immediate:r=!0,immediateCallback:s=!1}=n;let o=null;const i=g(!1);function u(){o&&(clearInterval(o),o=null)}function a(){i.value=!1,u()}function l(){const f=c(t);f<=0||(i.value=!0,s&&e(),u(),i.value&&(o=setInterval(e,f)))}if(r&&F&&l(),j(t)||typeof t=="function"){const f=y(t,()=>{i.value&&F&&l()});A(f)}return A(a),{isActive:i,pause:a,resume:l}}function ue(e=!1,t={}){const{truthyValue:n=!0,falsyValue:r=!1}=t,s=j(e),o=g(e);function i(u){if(arguments.length)return o.value=u,o.value;{const a=c(n);return o.value=o.value===a?c(r):a,o.value}}return s?i:[o,i]}function ce(e,t,n){return y(e,t,{...n,immediate:!0})}export{ne as a,se as b,U as c,A as d,oe as e,Q as f,ue as g,re as h,F as i,ae as j,ee as p,te as t,ie as u,ce as w};
