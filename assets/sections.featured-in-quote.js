(()=>{"use strict";var t,e={1961:(t,e,r)=>{r(1539),r(4747),r(8674),r(2707),r(5827),r(1038),r(8783);function o(t,e,r){var o=Array.from((e||document).querySelectorAll(t));return o.length||"throw on fail"!=r||n(t),o}function n(t){throw"Could not find element with selector ".concat(t)}var a=[];window.addEventListener("resize",(function(t){return a.forEach((function(t){return t()}))}));var i=o("[data-company-img-id]"),c=o("[data-company-quote-id]"),s=o("[data-company-author-id]");i.forEach((function(t){t.addEventListener("click",(function(){var e=t.dataset.companyImgId;i.forEach((function(t){t.classList.remove("active")})),t.classList.add("active"),c.forEach((function(t){t.dataset.companyQuoteId!==e?t.classList.remove("active"):t.classList.add("active")})),s.forEach((function(t){t.dataset.companyAuthorId!==e?t.classList.remove("active"):t.classList.add("active")}))}))}))},7028:()=>{}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var a=r[t]={exports:{}};return e[t].call(a.exports,a,a.exports,o),a.exports}o.m=e,t=[],o.O=(e,r,n,a)=>{if(!r){var i=1/0;for(u=0;u<t.length;u++){for(var[r,n,a]=t[u],c=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(o.O).every((t=>o.O[t](r[s])))?r.splice(s--,1):(c=!1,a<i&&(i=a));if(c){t.splice(u--,1);var f=n();void 0!==f&&(e=f)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[r,n,a]},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.j=857,(()=>{var t={857:0};o.O.j=e=>0===t[e];var e=(e,r)=>{var n,a,[i,c,s]=r,f=0;if(i.some((e=>0!==t[e]))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(s)var u=s(o)}for(e&&e(r);f<i.length;f++)a=i[f],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(u)},r=self.webpackChunkSkinShark=self.webpackChunkSkinShark||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),o.O(void 0,[4736],(()=>o(1961)));var n=o.O(void 0,[4736],(()=>o(7028)));n=o.O(n)})();