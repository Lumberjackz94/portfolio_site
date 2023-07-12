import{s as L,v as U,r as A,g as v,c as P,e as R,h as b,z as x,d as N,k as g,w as $,l as G,i as J,m as W}from"../chunks/scheduler.283841f9.js";import{S as Y,i as F,d as S,v as K,a as h,e as m,g as w,p as z,n as j,s as M}from"../chunks/index.c9f7c5ae.js";import{a as C,u as T,G as I,s as q,b as O}from"../chunks/firebase.2a115845.js";const y="src/routes/login/+page.svelte";function D(c){let t,r="Sign in with Google",i,o;const u={c:function(){t=v("button"),t.textContent=r,this.h()},l:function(s){t=b(s,"BUTTON",{class:!0,"data-svelte-h":!0}),x(t)!=="svelte-eubzr8"&&(t.textContent=r),this.h()},h:function(){w(t,"class","btn btn-primary"),g(t,y,36,2,957)},m:function(s,f){h(s,t,f),i||(o=z(t,"click",c[1],!1,!1,!1,!1),i=!0)},p:$,d:function(s){s&&m(t),i=!1,o()}};return S("SvelteRegisterBlock",{block:u,id:D.name,type:"else",source:"(30:0) {:else}",ctx:c}),u}function H(c){let t,r,i=c[0].displayName+"",o,u,n,s="You are logged in",f,a,e="Sign out",d,k;const E={c:function(){t=v("h2"),r=G("Welcome, "),o=G(i),u=P(),n=v("p"),n.textContent=s,f=P(),a=v("button"),a.textContent=e,this.h()},l:function(l){t=b(l,"H2",{class:!0});var p=J(t);r=W(p,"Welcome, "),o=W(p,i),p.forEach(m),u=N(l),n=b(l,"P",{class:!0,"data-svelte-h":!0}),x(n)!=="svelte-1958qcl"&&(n.textContent=s),f=N(l),a=b(l,"BUTTON",{class:!0,"data-svelte-h":!0}),x(a)!=="svelte-ff3jf"&&(a.textContent=e),this.h()},h:function(){w(t,"class","card-title"),g(t,y,30,2,739),w(n,"class","text-center text-success"),g(n,y,31,2,798),w(a,"class","btn btn-warning"),g(a,y,32,2,858)},m:function(l,p){h(l,t,p),j(t,r),j(t,o),h(l,u,p),h(l,n,p),h(l,f,p),h(l,a,p),d||(k=z(a,"click",c[2],!1,!1,!1,!1),d=!0)},p:function(l,p){p&1&&i!==(i=l[0].displayName+"")&&M(o,i)},d:function(l){l&&(m(t),m(u),m(n),m(f),m(a)),d=!1,k()}};return S("SvelteRegisterBlock",{block:E,id:H.name,type:"if",source:"(24:0) {#if $user}",ctx:c}),E}function B(c){let t,r="Login",i,o;function u(a,e){return a[0]?H:D}let n=u(c),s=n(c);const f={c:function(){t=v("h2"),t.textContent=r,i=P(),s.c(),o=R(),this.h()},l:function(e){t=b(e,"H2",{"data-svelte-h":!0}),x(t)!=="svelte-bhb3ah"&&(t.textContent=r),i=N(e),s.l(e),o=R(),this.h()},h:function(){g(t,y,27,0,709)},m:function(e,d){h(e,t,d),h(e,i,d),s.m(e,d),h(e,o,d)},p:function(e,[d]){n===(n=u(e))&&s?s.p(e,d):(s.d(1),s=n(e),s&&(s.c(),s.m(o.parentNode,o)))},i:$,o:$,d:function(e){e&&(m(t),m(i),m(o)),s.d(e)}};return S("SvelteRegisterBlock",{block:f,id:B.name,type:"component",source:"",ctx:c}),f}function Q(c,t,r){let i;U(T,"user"),A(c,T,e=>r(0,i=e));let{$$slots:o={},$$scope:u}=t;K("Page",o,[]);async function n(){const e=new I,k=await(await q(C,e)).user.getIdToken();await fetch("/api/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:k})})}async function s(){await fetch("/api/signin",{method:"DELETE"}),await O(C)}const f=[];Object.keys(t).forEach(e=>{!~f.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<Page> was created with unknown prop '${e}'`)});const a=()=>O(C);return c.$capture_state=()=>({auth:C,user:T,GoogleAuthProvider:I,signInWithPopup:q,signOut:O,signInWithGoogle:n,signOutSSR:s,$user:i}),[i,n,a]}class tt extends Y{constructor(t){super(t),F(this,t,Q,B,L,{}),S("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:B.name})}}export{tt as component};
