if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const a=e=>s(e,o),l={module:{uri:o},exports:t,require:a};i[o]=Promise.all(n.map((e=>l[e]||a(e)))).then((e=>(r(...e),t)))}}define(["./workbox-f3e6b16a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-i-AV4jAJ.css",revision:null},{url:"assets/index-Sb1zkIUA.js",revision:null},{url:"favicon.svg",revision:"b5d5d0fb5bba9363e126960912f10164"},{url:"index.html",revision:"a595a8b0d61fde5dd48c91ba331b7ea4"},{url:"maskable_icon_x192.png",revision:"aefa10e6658e1d682a9964a42cb560f2"},{url:"maskable_icon.png",revision:"e28f4569a89498b6eb7463bd7f24a6e8"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"0189858c1baaecb67f36128edd2e6ccb"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
