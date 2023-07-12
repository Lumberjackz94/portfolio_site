import{o as He,t as we}from"../chunks/scheduler.283841f9.js";import{S as Be,a as Ge,I as q,g as Fe,f as Me,b as _e,c as le,s as ee,i as ye,d as M,e as J,P as Ve,h as et}from"../chunks/singletons.91d2ce55.js";import{u as tt}from"../chunks/parse.bee59afc.js";import{R as ze,H as te}from"../chunks/control.f5b05b5f.js";function nt(n,o){return n==="/"||o==="ignore"?n:o==="never"?n.endsWith("/")?n.slice(0,-1):n:o==="always"&&!n.endsWith("/")?n+"/":n}function at(n){return n.split("%25").map(decodeURI).join("%25")}function rt(n){for(const o in n)n[o]=decodeURIComponent(n[o]);return n}const ot=["href","pathname","search","searchParams","toString","toJSON"];function it(n,o){const i=new URL(n);for(const c of ot)Object.defineProperty(i,c,{get(){return o(),n[c]},enumerable:!0,configurable:!0});return st(i),i}function st(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const ct="/__data.json";function lt(n){return n.replace(/\/$/,"")+ct}function ft(...n){let o=5381;for(const i of n)if(typeof i=="string"){let c=i.length;for(;c;)o=o*33^i.charCodeAt(--c)}else if(ArrayBuffer.isView(i)){const c=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);let d=c.length;for(;d;)o=o*33^c[--d]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}let Se=0;const fe=window.fetch;function ut(){Se+=1}function dt(){Se-=1}{let n=!1;(async()=>{n=new Error().stack.includes("check_stack_trace")})(),window.fetch=(i,c)=>{const d=i instanceof Request?i.url:i.toString(),p=new Error().stack.split(`
`),v=p.findIndex(h=>h.includes("load@")||h.includes("at load")),_=p.slice(0,v+2).join(`
`);return(n?_.includes("src/runtime/client/client.js"):Se)&&console.warn(`Loading ${d} using \`window.fetch\`. For best results, use the \`fetch\` that is passed to your \`load\` function: https://kit.svelte.dev/docs/load#making-fetch-requests`),(i instanceof Request?i.method:(c==null?void 0:c.method)||"GET")!=="GET"&&ne.delete(xe(i)),fe(i,c)}}const ne=new Map;function pt(n,o){const i=xe(n,o),c=document.querySelector(i);if(c!=null&&c.textContent){const{body:d,...p}=JSON.parse(c.textContent),v=c.getAttribute("data-ttl");return v&&ne.set(i,{body:d,init:p,ttl:1e3*Number(v)}),Promise.resolve(new Response(d,p))}return fe(n,o)}function ht(n,o,i){if(ne.size>0){const c=xe(n,i),d=ne.get(c);if(d){if(performance.now()<d.ttl&&["default","force-cache","only-if-cached",void 0].includes(i==null?void 0:i.cache))return new Response(d.body,d.init);ne.delete(c)}}return fe(o,i)}function xe(n,o){let c=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(o!=null&&o.headers||o!=null&&o.body){const d=[];o.headers&&d.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&d.push(o.body),c+=`[data-hash="${ft(...d)}"]`}return c}const gt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function mt(n){const o=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${_t(n).map(c=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(d)return o.push({name:d[1],matcher:d[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const p=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);if(p)return o.push({name:p[1],matcher:p[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!c)return;const v=c.split(/\[(.+?)\](?!\])/);return"/"+v.map((k,E)=>{if(E%2){if(k.startsWith("x+"))return ve(String.fromCharCode(parseInt(k.slice(2),16)));if(k.startsWith("u+"))return ve(String.fromCharCode(...k.slice(2).split("-").map(A=>parseInt(A,16))));const h=gt.exec(k);if(!h)throw new Error(`Invalid param: ${k}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,N,I,T,O]=h;return o.push({name:T,matcher:O,optional:!!N,rest:!!I,chained:I?E===1&&v[0]==="":!1}),I?"(.*?)":N?"([^/]*)?":"([^/]+?)"}return ve(k)}).join("")}).join("")}/?$`),params:o}}function wt(n){return!/^\([^)]+\)$/.test(n)}function _t(n){return n.slice(1).split("/").filter(wt)}function yt(n,o,i){const c={},d=n.slice(1);let p=0;for(let v=0;v<o.length;v+=1){const _=o[v];let k=d[v-p];if(_.chained&&_.rest&&p&&(k=d.slice(v-p,v+1).filter(E=>E).join("/"),p=0),k===void 0){_.rest&&(c[_.name]="");continue}if(!_.matcher||i[_.matcher](k)){c[_.name]=k;const E=o[v+1],h=d[v+1];E&&!E.rest&&E.optional&&h&&_.chained&&(p=0);continue}if(_.optional&&_.chained){p++;continue}return}if(!p)return c}function ve(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function vt({nodes:n,server_loads:o,dictionary:i,matchers:c}){const d=new Set(o);return Object.entries(i).map(([_,[k,E,h]])=>{const{pattern:N,params:I}=mt(_),T={id:_,exec:O=>{const A=N.exec(O);if(A)return yt(A,I,c)},errors:[1,...h||[]].map(O=>n[O]),layouts:[0,...E||[]].map(v),leaf:p(k)};return T.errors.length=T.layouts.length=Math.max(T.errors.length,T.layouts.length),T});function p(_){const k=_<0;return k&&(_=~_),[k,n[_]]}function v(_){return _===void 0?_:[d.has(_),n[_]]}}function We(n){try{return JSON.parse(sessionStorage[n])}catch{}}function Ke(n,o){const i=JSON.stringify(o);try{sessionStorage[n]=i}catch{}}function bt(n){return n.filter(o=>o!=null)}function kt(n){function o(i,c){if(i)for(const d in i){if(d[0]==="_"||n.has(d))continue;const p=[...n.values()],v=Et(d,c==null?void 0:c.slice(c.lastIndexOf(".")))??`valid exports are ${p.join(", ")}, or anything with a '_' prefix`;throw new Error(`Invalid export '${d}'${c?` in ${c}`:""} (${v})`)}}return o}function Et(n,o=".js"){const i=[];if(Re.has(n)&&i.push(`+layout${o}`),Ye.has(n)&&i.push(`+page${o}`),Xe.has(n)&&i.push(`+layout.server${o}`),St.has(n)&&i.push(`+page.server${o}`),xt.has(n)&&i.push(`+server${o}`),i.length>0)return`'${n}' is a valid export in ${i.slice(0,-1).join(", ")}${i.length>1?" or ":""}${i.at(-1)}`}const Re=new Set(["load","prerender","csr","ssr","trailingSlash","config"]),Ye=new Set([...Re,"entries"]),Xe=new Set([...Re]),St=new Set([...Xe,"actions","entries"]),xt=new Set(["GET","POST","PATCH","PUT","DELETE","OPTIONS","HEAD","prerender","trailingSlash","config","entries"]),Rt=kt(Ye);async function $t(n){var o;for(const i in n)if(typeof((o=n[i])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([c,d])=>[c,await d])));return n}function Lt(n,o){const i=/^(moz-icon|view-source|jar):/.exec(o);i&&console.warn(`${n}: Calling \`depends('${o}')\` will throw an error in Firefox because \`${i[1]}\` is a special URI scheme`)}const be="x-sveltekit-invalidated",B=We(Be)??{},Z=We(Ge)??{};function ke(n){B[n]=ee()}function Pt(n,o){var De;const i=vt(n),c=n.nodes[0],d=n.nodes[1];c(),d();const p=document.documentElement,v=[],_=[];let k=null;const E={before_navigate:[],after_navigate:[]};let h={branch:[],error:null,url:null},N=!1,I=!1,T=!0,O=!1,A=!1,V=!1,z=!1,H,j=(De=history.state)==null?void 0:De[q];j||(j=Date.now(),history.replaceState({...history.state,[q]:j},"",location.href));const ue=B[j];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let F,ae,W;async function $e(){if(W=W||Promise.resolve(),await W,!W)return;W=null;const e=new URL(location.href),s=X(e,!0);k=null;const t=ae={},r=s&&await he(s);if(t===ae&&r){if(r.type==="redirect")return re(new URL(r.location,e).href,{},[e.pathname],t);r.props.page!==void 0&&(F=r.props.page),H.$set(r.props)}}function Le(e){_.some(s=>s==null?void 0:s.snapshot)&&(Z[e]=_.map(s=>{var t;return(t=s==null?void 0:s.snapshot)==null?void 0:t.capture()}))}function Pe(e){var s;(s=Z[e])==null||s.forEach((t,r)=>{var a,l;(l=(a=_[r])==null?void 0:a.snapshot)==null||l.restore(t)})}function Ae(){ke(j),Ke(Be,B),Le(j),Ke(Ge,Z)}async function re(e,{noScroll:s=!1,replaceState:t=!1,keepFocus:r=!1,state:a={},invalidateAll:l=!1},f,y){return typeof e=="string"&&(e=new URL(e,Fe(document))),ce({url:e,scroll:s?ee():null,keepfocus:r,redirect_chain:f,details:{state:a,replaceState:t},nav_token:y,accepted:()=>{l&&(z=!0)},blocked:()=>{},type:"goto"})}async function Oe(e){return k={id:e.id,promise:he(e).then(s=>(s.type==="loaded"&&s.state.error&&(k=null),s))},k.promise}async function oe(...e){const t=i.filter(r=>e.some(a=>r.exec(a))).map(r=>Promise.all([...r.layouts,r.leaf].map(a=>a==null?void 0:a[1]())));await Promise.all(t)}function Ue(e){var r;if(e.state.error&&document.querySelector("vite-error-overlay"))return;h=e.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),F=e.props.page,H=new n.root({target:o,props:{...e.props,stores:M,components:_},hydrate:!0}),Pe(j);const t={from:null,to:{params:h.params,route:{id:((r=h.route)==null?void 0:r.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};E.after_navigate.forEach(a=>a(t)),I=!0}async function Y({url:e,params:s,branch:t,status:r,error:a,route:l,form:f}){let y="never";for(const u of t)(u==null?void 0:u.slash)!==void 0&&(y=u.slash);e.pathname=nt(e.pathname,y),e.search=e.search;const m={type:"loaded",state:{url:e,params:s,branch:t,error:a,route:l},props:{constructors:bt(t).map(u=>u.node.component)}};f!==void 0&&(m.props.form=f);let w={},S=!F,R=0;for(let u=0;u<Math.max(t.length,h.branch.length);u+=1){const g=t[u],P=h.branch[u];(g==null?void 0:g.data)!==(P==null?void 0:P.data)&&(S=!0),g&&(w={...w,...g.data},S&&(m.props[`data_${R}`]=w),R+=1)}return(!h.url||e.href!==h.url.href||h.error!==a||f!==void 0&&f!==F.form||S)&&(m.props.page={error:a,params:s,route:{id:(l==null?void 0:l.id)??null},status:r,url:new URL(e),form:f??null,data:S?w:F.data}),m}async function de({loader:e,parent:s,url:t,params:r,route:a,server_data_node:l}){var w,S,R;let f=null;const y={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},m=await e();if(Rt(m.universal),(w=m.universal)!=null&&w.load){let x=function(...g){for(const P of g){Lt(a.id,P);const{href:U}=new URL(P,t);y.dependencies.add(U)}};const u={route:{get id(){return y.route=!0,a.id}},params:new Proxy(r,{get:(g,P)=>(y.params.add(P),g[P])}),data:(l==null?void 0:l.data)??null,url:it(t,()=>{y.url=!0}),async fetch(g,P){let U;g instanceof Request?(U=g.url,P={body:g.method==="GET"||g.method==="HEAD"?void 0:await g.blob(),cache:g.cache,credentials:g.credentials,headers:g.headers,integrity:g.integrity,keepalive:g.keepalive,method:g.method,mode:g.mode,redirect:g.redirect,referrer:g.referrer,referrerPolicy:g.referrerPolicy,signal:g.signal,...P}):U=g;const D=new URL(U,t);return x(D.href),D.origin===t.origin&&(U=D.href.slice(t.origin.length)),I?ht(U,D.href,P):pt(U,P)},setHeaders:()=>{},depends:x,parent(){return y.parent=!0,s()}};try{if(ut(),f=await m.universal.load.call(null,u)??null,f!=null&&Object.getPrototypeOf(f)!==Object.prototype)throw new Error(`a load function related to route '${a.id}' returned ${typeof f!="object"?`a ${typeof f}`:f instanceof Response?"a Response object":Array.isArray(f)?"an array":"a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`)}finally{dt()}f=f?await $t(f):null}return{node:m,loader:e,server:l,universal:(S=m.universal)!=null&&S.load?{type:"data",data:f,uses:y}:null,data:f??(l==null?void 0:l.data)??null,slash:((R=m.universal)==null?void 0:R.trailingSlash)??(l==null?void 0:l.slash)}}function je(e,s,t,r,a){if(z)return!0;if(!r)return!1;if(r.parent&&e||r.route&&s||r.url&&t)return!0;for(const l of r.params)if(a[l]!==h.params[l])return!0;for(const l of r.dependencies)if(v.some(f=>f(new URL(l))))return!0;return!1}function pe(e,s){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?s??null:null}async function he({id:e,invalidating:s,url:t,params:r,route:a}){if((k==null?void 0:k.id)===e)return k.promise;const{errors:l,layouts:f,leaf:y}=a,m=[...f,y];l.forEach(b=>b==null?void 0:b().catch(()=>{})),m.forEach(b=>b==null?void 0:b[1]().catch(()=>{}));let w=null;const S=h.url?e!==h.url.pathname+h.url.search:!1,R=h.route?a.id!==h.route.id:!1;let x=!1;const u=m.map((b,L)=>{var K;const $=h.branch[L],C=!!(b!=null&&b[0])&&(($==null?void 0:$.loader)!==b[1]||je(x,R,S,(K=$.server)==null?void 0:K.uses,r));return C&&(x=!0),C});if(u.some(Boolean)){try{w=await Je(t,u)}catch(b){return ie({status:b instanceof te?b.status:500,error:await Q(b,{url:t,params:r,route:{id:a.id}}),url:t,route:a})}if(w.type==="redirect")return w}const g=w==null?void 0:w.nodes;let P=!1;const U=m.map(async(b,L)=>{var ge;if(!b)return;const $=h.branch[L],C=g==null?void 0:g[L];if((!C||C.type==="skip")&&b[1]===($==null?void 0:$.loader)&&!je(P,R,S,(ge=$.universal)==null?void 0:ge.uses,r))return $;if(P=!0,(C==null?void 0:C.type)==="error")throw C;return de({loader:b[1],url:t,params:r,route:a,parent:async()=>{var qe;const Ne={};for(let me=0;me<L;me+=1)Object.assign(Ne,(qe=await U[me])==null?void 0:qe.data);return Ne},server_data_node:pe(C===void 0&&b[0]?{type:"skip"}:C??null,b[0]?$==null?void 0:$.server:void 0)})});for(const b of U)b.catch(()=>{});const D=[];for(let b=0;b<m.length;b+=1)if(m[b])try{D.push(await U[b])}catch(L){if(L instanceof ze)return{type:"redirect",location:L.location};let $=500,C;if(g!=null&&g.includes(L))$=L.status??$,C=L.error;else if(L instanceof te)$=L.status,C=L.body;else{if(await M.updated.check())return await G(t);C=await Q(L,{params:r,url:t,route:{id:a.id}})}const K=await Ie(b,D,l);return K?await Y({url:t,params:r,branch:D.slice(0,K.idx).concat(K.node),status:$,error:C,route:a}):await Ce(t,{id:a.id},C,$)}else D.push(void 0);return await Y({url:t,params:r,branch:D,status:200,error:null,route:a,form:s?void 0:null})}async function Ie(e,s,t){for(;e--;)if(t[e]){let r=e;for(;!s[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:s,url:t,route:r}){const a={};let l=null;if(n.server_loads[0]===0)try{const w=await Je(t,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;l=w.nodes[0]??null}catch{(t.origin!==location.origin||t.pathname!==location.pathname||N)&&await G(t)}const y=await de({loader:c,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:pe(l)}),m={node:await d(),loader:d,universal:null,server:null,data:null};return await Y({url:t,params:a,branch:[y,m],status:e,error:s,route:null})}function X(e,s){if(ye(e,J))return;const t=se(e);for(const r of i){const a=r.exec(t);if(a)return{id:e.pathname+e.search,invalidating:s,route:r,params:rt(a),url:e}}}function se(e){return at(e.pathname.slice(J.length)||"/")}function Te({url:e,type:s,intent:t,delta:r}){var y,m;let a=!1;const l={from:{params:h.params,route:{id:((y=h.route)==null?void 0:y.id)??null},url:h.url},to:{params:(t==null?void 0:t.params)??null,route:{id:((m=t==null?void 0:t.route)==null?void 0:m.id)??null},url:e},willUnload:!t,type:s};r!==void 0&&(l.delta=r);const f={...l,cancel:()=>{a=!0}};return A||E.before_navigate.forEach(w=>w(f)),a?null:l}async function ce({url:e,scroll:s,keepfocus:t,redirect_chain:r,details:a,type:l,delta:f,nav_token:y={},accepted:m,blocked:w}){var U,D,b;const S=X(e,!1),R=Te({url:e,type:l,delta:f,intent:S});if(!R){w();return}const x=j;m(),A=!0,I&&M.navigating.set(R),ae=y;let u=S&&await he(S);if(!u){if(ye(e,J))return await G(e);u=await Ce(e,{id:null},await Q(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(S==null?void 0:S.url)||e,ae!==y)return!1;if(u.type==="redirect")if(r.length>10||r.includes(e.pathname))u=await ie({status:500,error:await Q(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(u.location,e).href,{},[...r,e.pathname],y),!1;else((U=u.props.page)==null?void 0:U.status)>=400&&await M.updated.check()&&await G(e);if(v.length=0,z=!1,O=!0,ke(x),Le(x),(D=u.props.page)!=null&&D.url&&u.props.page.url.pathname!==e.pathname&&(e.pathname=(b=u.props.page)==null?void 0:b.url.pathname),a){const L=a.replaceState?0:1;if(a.state[q]=j+=L,history[a.replaceState?"replaceState":"pushState"](a.state,"",e),!a.replaceState){let $=j+1;for(;Z[$]||B[$];)delete Z[$],delete B[$],$+=1}}k=null,I?(h=u.state,u.props.page&&(u.props.page.url=e),H.$set(u.props)):Ue(u);const{activeElement:g}=document;if(await we(),T){const L=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));s?scrollTo(s.x,s.y):L?L.scrollIntoView():scrollTo(0,0)}const P=document.activeElement!==g&&document.activeElement!==document.body;!t&&!P&&Ee(),T=!0,u.props.page&&(F=u.props.page),A=!1,l==="popstate"&&Pe(j),E.after_navigate.forEach(L=>L(R)),M.navigating.set(null),O=!1}async function Ce(e,s,t,r){if(e.origin===location.origin&&e.pathname===location.pathname&&!N)return await ie({status:r,error:t,url:e,route:s});if(r!==404){console.error("An error occurred while loading the page. This will cause a full page reload. (This message will only appear during development.)");debugger}return await G(e)}function G(e){return location.href=e.href,new Promise(()=>{})}function Ze(){let e;p.addEventListener("mousemove",l=>{const f=l.target;clearTimeout(e),e=setTimeout(()=>{r(f,2)},20)});function s(l){r(l.composedPath()[0],1)}p.addEventListener("mousedown",s),p.addEventListener("touchstart",s,{passive:!0});const t=new IntersectionObserver(l=>{for(const f of l)f.isIntersecting&&(oe(se(new URL(f.target.href))),t.unobserve(f.target))},{threshold:0});function r(l,f){const y=Me(l,p);if(!y)return;const{url:m,external:w,download:S}=_e(y,J);if(w||S)return;const R=le(y);if(!R.reload)if(f<=R.preload_data){const x=X(m,!1);x&&Oe(x).then(u=>{u.type==="loaded"&&u.state.error&&console.warn(`Preloading data for ${x.url.pathname} failed with the following error: ${u.state.error.message}
If this error is transient, you can ignore it. Otherwise, consider disabling preloading for this route. This route was preloaded due to a data-sveltekit-preload-data attribute. See https://kit.svelte.dev/docs/link-options for more info`)})}else f<=R.preload_code&&oe(se(m))}function a(){t.disconnect();for(const l of p.querySelectorAll("a")){const{url:f,external:y,download:m}=_e(l,J);if(y||m)continue;const w=le(l);w.reload||(w.preload_code===Ve.viewport&&t.observe(l),w.preload_code===Ve.eager&&oe(se(f)))}}E.after_navigate.push(a),a()}function Q(e,s){return e instanceof te?e.body:(console.warn("The next HMR update will cause the page to reload"),n.hooks.handleError({error:e,event:s})??{message:s.route.id!=null?"Internal Error":"Not Found"})}return{after_navigate:e=>{He(()=>(E.after_navigate.push(e),()=>{const s=E.after_navigate.indexOf(e);E.after_navigate.splice(s,1)}))},before_navigate:e=>{He(()=>(E.before_navigate.push(e),()=>{const s=E.before_navigate.indexOf(e);E.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{if(I&&!O)throw new Error("Can only disable scroll handling during navigation");(O||!I)&&(T=!1)},goto:(e,s={})=>re(e,s,[]),invalidate:e=>{if(typeof e=="function")v.push(e);else{const{href:s}=new URL(e,location.href);v.push(t=>t.href===s)}return $e()},invalidate_all:()=>(z=!0,$e()),preload_data:async e=>{const s=new URL(e,Fe(document)),t=X(s,!1);if(!t)throw new Error(`Attempted to preload a URL that does not belong to this app: ${s}`);await Oe(t)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const s=new URL(location.href),{branch:t,route:r}=h;if(!r)return;const a=await Ie(h.branch.length,t,r.errors);if(a){const l=await Y({url:s,params:h.params,branch:t.slice(0,a.idx).concat(a.node),status:e.status??500,error:e.error,route:r});h=l.state,H.$set(l.props),we().then(Ee)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(H.$set({form:null,page:{...F,form:e.data,status:e.status}}),await we(),H.$set({form:e.data}),e.type==="success"&&Ee())},_start_router:()=>{var s;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{var a;let r=!1;if(Ae(),!A){const l={from:{params:h.params,route:{id:((a=h.route)==null?void 0:a.id)??null},url:h.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};E.before_navigate.forEach(f=>f(l))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ae()}),(s=navigator.connection)!=null&&s.saveData||Ze(),p.addEventListener("click",t=>{var x;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Me(t.composedPath()[0],p);if(!r)return;const{url:a,external:l,target:f,download:y}=_e(r,J);if(!a)return;if(f==="_parent"||f==="_top"){if(window.parent!==window)return}else if(f&&f!=="_self")return;const m=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||y)return;if(l||m.reload){Te({url:a,type:"link"})?A=!0:t.preventDefault();return}const[S,R]=a.href.split("#");if(R!==void 0&&S===location.href.split("#")[0]){if(h.url.hash===a.hash){t.preventDefault(),(x=r.ownerDocument.getElementById(R))==null||x.scrollIntoView();return}if(V=!0,ke(j),e(a),!m.replace_state)return;V=!1,t.preventDefault()}ce({url:a,scroll:m.noscroll?ee():null,keepfocus:m.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:m.replace_state??a.href===location.href},accepted:()=>t.preventDefault(),blocked:()=>t.preventDefault(),type:"link"})}),p.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const f=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ye(f,J))return;const y=t.target,{keep_focus:m,noscroll:w,reload:S,replace_state:R}=le(y);if(S)return;t.preventDefault(),t.stopPropagation();const x=new FormData(y),u=a==null?void 0:a.getAttribute("name");u&&x.append(u,(a==null?void 0:a.getAttribute("value"))??""),f.search=new URLSearchParams(x).toString(),ce({url:f,scroll:w?ee():null,keepfocus:m??!1,redirect_chain:[],details:{state:{},replaceState:R??f.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[q]){if(t.state[q]===j)return;const a=B[t.state[q]];if(h.url.href.split("#")[0]===location.href.split("#")[0]){B[j]=ee(),j=t.state[q],scrollTo(a.x,a.y);return}const l=t.state[q]-j;await ce({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=t.state[q]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}else if(!V){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[q]:++j},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&M.navigating.set(null)});function e(t){h.url=t,M.page.set({...F,url:t}),M.page.notify()}},_hydrate:async({status:e=200,error:s,node_ids:t,params:r,route:a,data:l,form:f})=>{N=!0;const y=new URL(location.href);({params:r={},route:a={id:null}}=X(y,!1)||{});let m;try{const w=t.map(async(x,u)=>{const g=l[u];return g!=null&&g.uses&&(g.uses=Qe(g.uses)),de({loader:n.nodes[x],url:y,params:r,route:a,parent:async()=>{const P={};for(let U=0;U<u;U+=1)Object.assign(P,(await w[U]).data);return P},server_data_node:pe(g)})}),S=await Promise.all(w),R=i.find(({id:x})=>x===a.id);if(R){const x=R.layouts;for(let u=0;u<x.length;u++)x[u]||S.splice(u,0,void 0)}m=await Y({url:y,params:r,branch:S,status:e,error:s,form:f,route:R??null})}catch(w){if(w instanceof ze){await G(new URL(w.location,location.href));return}m=await ie({status:w instanceof te?w.status:500,error:await Q(w,{url:y,params:r,route:a}),url:y,route:a})}Ue(m)}}}async function Je(n,o){const i=new URL(n);if(i.pathname=lt(n.pathname),n.searchParams.has(be))throw new Error(`Cannot used reserved query parameter "${be}"`);i.searchParams.append(be,o.map(d=>d?"1":"0").join(""));const c=await fe(i.href);if(!c.ok)throw new te(c.status,await c.json());return new Promise(async d=>{var h;const p=new Map,v=c.body.getReader(),_=new TextDecoder;function k(N){return tt(N,{Promise:I=>new Promise((T,O)=>{p.set(I,{fulfil:T,reject:O})})})}let E="";for(;;){const{done:N,value:I}=await v.read();if(N&&!E)break;for(E+=!I&&E?`
`:_.decode(I);;){const T=E.indexOf(`
`);if(T===-1)break;const O=JSON.parse(E.slice(0,T));if(E=E.slice(T+1),O.type==="redirect")return d(O);if(O.type==="data")(h=O.nodes)==null||h.forEach(A=>{(A==null?void 0:A.type)==="data"&&(A.uses=Qe(A.uses),A.data=k(A.data))}),d(O);else if(O.type==="chunk"){const{id:A,data:V,error:z}=O,H=p.get(A);p.delete(A),z?H.reject(k(z)):H.fulfil(k(V))}}}})}function Qe(n){return{dependencies:new Set((n==null?void 0:n.dependencies)??[]),params:new Set((n==null?void 0:n.params)??[]),parent:!!(n!=null&&n.parent),route:!!(n!=null&&n.route),url:!!(n!=null&&n.url)}}function Ee(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const o=document.body,i=o.getAttribute("tabindex");o.tabIndex=-1,o.focus({preventScroll:!0,focusVisible:!1}),i!==null?o.setAttribute("tabindex",i):o.removeAttribute("tabindex");const c=getSelection();if(c&&c.type!=="None"){const d=[];for(let p=0;p<c.rangeCount;p+=1)d.push(c.getRangeAt(p));setTimeout(()=>{if(c.rangeCount===d.length){for(let p=0;p<c.rangeCount;p+=1){const v=d[p],_=c.getRangeAt(p);if(v.commonAncestorContainer!==_.commonAncestorContainer||v.startContainer!==_.startContainer||v.endContainer!==_.endContainer||v.startOffset!==_.startOffset||v.endOffset!==_.endOffset)return}c.removeAllRanges()}})}}}{const n=console.warn;console.warn=function(...i){i.length===1&&/<(Layout|Page|Error)(_[\w$]+)?> was created (with unknown|without expected) prop '(data|form)'/.test(i[0])||n(...i)}}async function It(n,o,i){o===document.body&&console.warn(`Placing %sveltekit.body% directly inside <body> is not recommended, as your app may break for users who have certain browser extensions installed.

Consider wrapping it in an element:

<div style="display: contents">
  %sveltekit.body%
</div>`);const c=Pt(n,o);et({client:c}),i?await c._hydrate(i):c.goto(location.href,{replaceState:!0}),c._start_router()}export{It as start};
