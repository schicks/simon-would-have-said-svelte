import{S as F,i as N,s as R,e as p,t as k,c as d,a as v,g as E,d as o,f as c,F as b,h,k as P,l as S,n as j,H as q}from"./chunks/vendor-cdf01e9e.js";function C(i){let s,f=i[1].stack+"",n;return{c(){s=p("pre"),n=k(f)},l(t){s=d(t,"PRE",{});var a=v(s);n=E(a,f),a.forEach(o)},m(t,a){c(t,s,a),b(s,n)},p(t,a){a&2&&f!==(f=t[1].stack+"")&&h(n,f)},d(t){t&&o(s)}}}function w(i){let s,f,n,t,a=i[1].message+"",_,m,u,l=i[1].stack&&C(i);return{c(){s=p("h1"),f=k(i[0]),n=P(),t=p("p"),_=k(a),m=P(),l&&l.c(),u=S()},l(e){s=d(e,"H1",{});var r=v(s);f=E(r,i[0]),r.forEach(o),n=j(e),t=d(e,"P",{});var H=v(t);_=E(H,a),H.forEach(o),m=j(e),l&&l.l(e),u=S()},m(e,r){c(e,s,r),b(s,f),c(e,n,r),c(e,t,r),b(t,_),c(e,m,r),l&&l.m(e,r),c(e,u,r)},p(e,[r]){r&1&&h(f,e[0]),r&2&&a!==(a=e[1].message+"")&&h(_,a),e[1].stack?l?l.p(e,r):(l=C(e),l.c(),l.m(u.parentNode,u)):l&&(l.d(1),l=null)},i:q,o:q,d(e){e&&o(s),e&&o(n),e&&o(t),e&&o(m),l&&l.d(e),e&&o(u)}}}function z({error:i,status:s}){return{props:{error:i,status:s}}}function A(i,s,f){let{status:n}=s,{error:t}=s;return i.$$set=a=>{"status"in a&&f(0,n=a.status),"error"in a&&f(1,t=a.error)},[n,t]}class B extends F{constructor(s){super();N(this,s,A,w,R,{status:0,error:1})}}export default B;export{z as load};
