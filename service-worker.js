if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const a=s=>l(s,r),d={module:{uri:r},exports:t,require:a};e[r]=Promise.all(i.map((s=>d[s]||a(s)))).then((s=>(n(...s),t)))}}define(["./workbox-6da860f9"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"adf3300c2a7e72e13d732bf3ae69640e"},{url:"assets/01-comments.html.2bf98014.js",revision:null},{url:"assets/01-comments.html.db9b9a3f.js",revision:null},{url:"assets/01-commit.html.61ca340d.js",revision:null},{url:"assets/01-commit.html.b36f5e6e.js",revision:null},{url:"assets/01-rfc-what-and-why.html.369c5228.js",revision:null},{url:"assets/01-rfc-what-and-why.html.55bc6bed.js",revision:null},{url:"assets/01-vue-sfc.html.2002ddbe.js",revision:null},{url:"assets/01-vue-sfc.html.fe19853a.js",revision:null},{url:"assets/02-branch-naming.html.349ac197.js",revision:null},{url:"assets/02-branch-naming.html.875ade6f.js",revision:null},{url:"assets/02-bubble-pod-rfc.html.8fec86f1.js",revision:null},{url:"assets/02-bubble-pod-rfc.html.ca7eaa27.js",revision:null},{url:"assets/404.html.d2dc3323.js",revision:null},{url:"assets/404.html.e8f94ba6.js",revision:null},{url:"assets/app.8c9586a1.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.281c0e5e.js",revision:null},{url:"assets/index.html.2e529294.js",revision:null},{url:"assets/index.html.2f73dd4b.js",revision:null},{url:"assets/index.html.32de138c.js",revision:null},{url:"assets/index.html.5069a3a5.js",revision:null},{url:"assets/index.html.55eb354f.js",revision:null},{url:"assets/index.html.56f19172.js",revision:null},{url:"assets/index.html.79ac8a17.js",revision:null},{url:"assets/index.html.7d493548.js",revision:null},{url:"assets/index.html.8c2768fd.js",revision:null},{url:"assets/index.html.943c1775.js",revision:null},{url:"assets/index.html.96a5b92b.js",revision:null},{url:"assets/index.html.9bb401f3.js",revision:null},{url:"assets/index.html.a3735a9b.js",revision:null},{url:"assets/index.html.b2669785.js",revision:null},{url:"assets/index.html.bb2f31e8.js",revision:null},{url:"assets/index.html.c4ac3d52.js",revision:null},{url:"assets/index.html.d4e86d91.js",revision:null},{url:"assets/index.html.dcf93104.js",revision:null},{url:"assets/index.html.f4f6c3ac.js",revision:null},{url:"assets/READMD.html.98c3405a.js",revision:null},{url:"assets/READMD.html.abf501ad.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/style.13fa5176.css",revision:null},{url:"index.html",revision:"9d03590e9eb4dd98f86d94fd7709e4ef"},{url:"mermaid/index.html",revision:"0e0357fcbadb2aadf5e3de74c76bc527"},{url:"RFC/docs/01-introduction/01-rfc-what-and-why.html",revision:"0751a61bb125eed2c2401020ca2401bf"},{url:"RFC/docs/01-introduction/02-bubble-pod-rfc.html",revision:"eaa83efcefb4c87449b1a0c8e9b33e1b"},{url:"RFC/docs/01-introduction/index.html",revision:"2bea3613988fd8cc83582e6097032e27"},{url:"RFC/docs/02-basic-coding-standard/01-comments.html",revision:"1958438237836fe710770887a0266fc7"},{url:"RFC/docs/02-basic-coding-standard/index.html",revision:"16db967c5e2f81b45d3342d3014a65b5"},{url:"RFC/docs/03-development-experience/index.html",revision:"02946dd17f683218feb4ce7fbe45552b"},{url:"RFC/docs/04-project-managment/READMD.html",revision:"a628d648e4c6e87815d49e44b0edf1a2"},{url:"RFC/docs/05-ionic-app/01-vue-sfc.html",revision:"c88bd3bfd20666555ca405b754b5c43f"},{url:"RFC/docs/05-ionic-app/index.html",revision:"e09301f1e9d5fbe60ae07b5f3a4b6ac6"},{url:"RFC/docs/06-nestjs-backend/index.html",revision:"fb43f3179e8f74b24f4a7c63b6420211"},{url:"RFC/docs/07-git/01-commit.html",revision:"e5c255cf33671bfdd4f9e8c07816b48e"},{url:"RFC/docs/07-git/02-branch-naming.html",revision:"151f74e51bc06397ca5bf45b76a40553"},{url:"RFC/docs/07-git/index.html",revision:"a63e65e0cdae355d3aa86493f0a7041a"},{url:"RFC/index.html",revision:"8bf22d499cba5d086a5cbdff742712f6"},{url:"subpage/index.html",revision:"30208835a6470b2a998abff4595f5a51"}],{})}));