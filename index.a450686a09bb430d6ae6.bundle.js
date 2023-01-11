(()=>{"use strict";var n,e={198:(n,e,r)=>{var t=r(294),o=r(745),i=r(379),a=r.n(i),A=r(795),l=r.n(A),s=r(569),d=r.n(s),c=r(565),m=r.n(c),u=r(216),g=r.n(u),B=r(589),p=r.n(B),b=r(780),h={};h.styleTagTransform=p(),h.setAttributes=m(),h.insert=d().bind(null,"head"),h.domAPI=l(),h.insertStyleElement=g();a()(b.Z,h);b.Z&&b.Z.locals&&b.Z.locals;const E=r.p+"e1ab293c382c53f6129e.png";var f="/home/isaac/project/frontend_mentor/qr-code/src/App.jsx";function C(){return t.createElement(t.Fragment,null,t.createElement("div",{className:"container",__source:{fileName:f,lineNumber:8,columnNumber:7}},t.createElement("div",{className:"card",__source:{fileName:f,lineNumber:9,columnNumber:9}},t.createElement("div",{className:"card-image",__source:{fileName:f,lineNumber:10,columnNumber:11}},t.createElement("img",{src:E,alt:"QR_CODE",__source:{fileName:f,lineNumber:11,columnNumber:13}})),t.createElement("div",{className:"card-body",__source:{fileName:f,lineNumber:13,columnNumber:11}},t.createElement("p",{className:"bold-text",__source:{fileName:f,lineNumber:14,columnNumber:13}},"Improve your front-end skills by building projects"),t.createElement("p",{className:"small-text",__source:{fileName:f,lineNumber:17,columnNumber:13}},"Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"))),t.createElement("div",{className:"distribution",__source:{fileName:f,lineNumber:24,columnNumber:9}},t.createElement("i",{__source:{fileName:f,lineNumber:25,columnNumber:11}},t.createElement("small",{__source:{fileName:f,lineNumber:26,columnNumber:13}},"Developer by  ",t.createElement("a",{href:"https://github.com/katongole-isaac/qr-code",__source:{fileName:f,lineNumber:28,columnNumber:15}},"isaac"))))))}var v=document.getElementById("root");(0,o.s)(v).render(t.createElement(C,{__source:{fileName:"/home/isaac/project/frontend_mentor/qr-code/src/index.js",lineNumber:8,columnNumber:13}}))},780:(n,e,r)=>{r.d(e,{Z:()=>A});var t=r(537),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap);"]),a.push([n.id,':root {\n  --cardBg: hsl(0, 0%, 100%);\n  --containerBg: hsl(212, 45%, 89%);\n  --cardMaxWidth: 300px;\n  --darkBlue: hsl(218, 44%, 22%);\n  --lightGrayTextColor: hsl(212, 45%, 89%);\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: var(--containerBg);\n  flex-direction: column;\n}\n\n.card {\n  background: var(--cardBg);\n  display: flex;\n  flex-direction: column;\n  max-width: var(--cardMaxWidth);\n  padding: 1em;\n  border-radius: 10px;\n  border-radius: 1px solid;\n  overflow: hidden;\n  box-shadow: 0 2 4 4 var(--cardBg);\n}\n\n.card-image {\n  border-radius: 10px;\n  overflow: hidden;\n  width: 100%;\n}\n\n.card-image img {\n  width: 100%;\n  height: 100%;\n}\n\n.card-body {\n  padding: 1em;\n  /* font-size: 15px; */\n  font-family: "Outfit", sans-serif;\n  padding-bottom: 1em;\n  /* border: 1px solid red; */\n}\n\n.card-body .bold-text {\n  font-weight: 700;\n  font-size: 1.3em;\n  color: var(--darkBlue);\n  line-height: 1.3em;\n  padding-bottom: 0.5em;\n}\n\n.card-body .small-text {\n  color: var(--lightGrayTextColor);\n  font-weight: 700;\n  font-size: 15px;\n  text-align: center;\n}\n\n.distribution {\n position: absolute;\n  bottom: 0;\n  padding: 1em;\n}\n',"",{version:3,sources:["webpack://./src/app.css"],names:[],mappings:"AAEA;EACE,0BAA0B;EAC1B,iCAAiC;EACjC,qBAAqB;EACrB,8BAA8B;EAC9B,wCAAwC;AAC1C;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;EACnB,wBAAwB;EACxB,gBAAgB;EAChB,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,qBAAqB;EACrB,iCAAiC;EACjC,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,gCAAgC;EAChC,gBAAgB;EAChB,eAAe;EACf,kBAAkB;AACpB;;AAEA;CACC,kBAAkB;EACjB,SAAS;EACT,YAAY;AACd",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap");\n\n:root {\n  --cardBg: hsl(0, 0%, 100%);\n  --containerBg: hsl(212, 45%, 89%);\n  --cardMaxWidth: 300px;\n  --darkBlue: hsl(218, 44%, 22%);\n  --lightGrayTextColor: hsl(212, 45%, 89%);\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: var(--containerBg);\n  flex-direction: column;\n}\n\n.card {\n  background: var(--cardBg);\n  display: flex;\n  flex-direction: column;\n  max-width: var(--cardMaxWidth);\n  padding: 1em;\n  border-radius: 10px;\n  border-radius: 1px solid;\n  overflow: hidden;\n  box-shadow: 0 2 4 4 var(--cardBg);\n}\n\n.card-image {\n  border-radius: 10px;\n  overflow: hidden;\n  width: 100%;\n}\n\n.card-image img {\n  width: 100%;\n  height: 100%;\n}\n\n.card-body {\n  padding: 1em;\n  /* font-size: 15px; */\n  font-family: "Outfit", sans-serif;\n  padding-bottom: 1em;\n  /* border: 1px solid red; */\n}\n\n.card-body .bold-text {\n  font-weight: 700;\n  font-size: 1.3em;\n  color: var(--darkBlue);\n  line-height: 1.3em;\n  padding-bottom: 0.5em;\n}\n\n.card-body .small-text {\n  color: var(--lightGrayTextColor);\n  font-weight: 700;\n  font-size: 15px;\n  text-align: center;\n}\n\n.distribution {\n position: absolute;\n  bottom: 0;\n  padding: 1em;\n}\n'],sourceRoot:""}]);const A=a}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={id:n,exports:{}};return e[n](i,i.exports,t),i.exports}t.m=e,n=[],t.O=(e,r,o,i)=>{if(!r){var a=1/0;for(d=0;d<n.length;d++){for(var[r,o,i]=n[d],A=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(t.O).every((n=>t.O[n](r[l])))?r.splice(l--,1):(A=!1,i<a&&(a=i));if(A){n.splice(d--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var d=n.length;d>0&&n[d-1][2]>i;d--)n[d]=n[d-1];n[d]=[r,o,i]},t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n={826:0};t.O.j=e=>0===n[e];var e=(e,r)=>{var o,i,[a,A,l]=r,s=0;if(a.some((e=>0!==n[e]))){for(o in A)t.o(A,o)&&(t.m[o]=A[o]);if(l)var d=l(t)}for(e&&e(r);s<a.length;s++)i=a[s],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(d)},r=self.webpackChunkplayground=self.webpackChunkplayground||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),t.nc=void 0;var o=t.O(void 0,[653],(()=>t(198)));o=t.O(o)})();
//# sourceMappingURL=index.a450686a09bb430d6ae6.bundle.js.map