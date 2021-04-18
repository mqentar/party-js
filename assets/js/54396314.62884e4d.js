(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(89)),o={title:"Utilities"},l={unversionedId:"utilities",id:"utilities",isDocsHomePage:!1,title:"Utilities",description:"The library provides various utility methods to build it's features on.",source:"@site/docs/09-utilities.md",sourceDirName:".",slug:"/utilities",permalink:"/docs/utilities",editUrl:"https://github.com/yiliansource/party-js/edit/main/docs/docs/09-utilities.md",version:"current",sidebarPosition:9,frontMatter:{title:"Utilities"},sidebar:"sidebar",previous:{title:"Components",permalink:"/docs/components"}},c=[{value:"Math",id:"math",children:[]},{value:"Randomization",id:"randomization",children:[]},{value:"Others",id:"others",children:[{value:"Despawning Rules",id:"despawning-rules",children:[]},{value:"Methods",id:"methods",children:[]}]}],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The library provides various utility methods to build it's features on."),Object(i.b)("h2",{id:"math"},"Math"),Object(i.b)("p",null,"Since there is a lot of calculation done under the hood, the library defines required mathematical operations that are commonly used."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"party.math.deg2rad; // \u03c0 / 180\nparty.math.rad2deg; // 180 / \u03c0\nparty.math.epsilon; // a small value to compare against\n\nparty.math.lerp(a, b, t); // linear interpolation from a to b by t\nparty.math.slerp(a, b, t); // lerp with easing applied\nparty.math.invlerp(a, b, v); // inverse lerp\nparty.math.clamp(value, min, max); // clamps the specified value between min and max\nparty.math.approximately(a, b); // a \u2248 b\n")),Object(i.b)("h2",{id:"randomization"},"Randomization"),Object(i.b)("p",null,'Common "random" operations in the library as helper methods. Note that the actual randomization implementation is still up to the underlying JavaScript implementation.'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"party.random.randomRange(min, max); // random number from min to max\nparty.random.pick(array); // random element in array\nparty.random.randomUnitVector(); // random 3d vector\nparty.random.randomInsideRect(rect); // random point inside a given rectangle\n")),Object(i.b)("h2",{id:"others"},"Others"),Object(i.b)("h3",{id:"despawning-rules"},"Despawning Rules"),Object(i.b)("p",null,"To allow variety in the way that particles disappear, the particle has the default despawning rules saved in a lookup under ",Object(i.b)("inlineCode",{parentName:"p"},"party.despawningRules"),". These are functions that take a particle as a parameter, and check whether the particle is ready to be despawned. By default, these rules include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"lifetime"),": The particle is despawned once it's lifetime is over."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bounds"),": The particle is despawned once it's position goes below the lower edge of the document.")),Object(i.b)("h3",{id:"methods"},"Methods"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"party.rotationToNormal(rotation); // converts euler angles (in degrees) to a normal vector.\nparty.sourceToRect(source); // converts a Point, HTMLElement or MouseEvent to a rect.\n")))}p.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?a.a.createElement(b,l(l({ref:t},s),{},{components:n})):a.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);