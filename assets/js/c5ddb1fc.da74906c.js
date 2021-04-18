(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{83:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(89)),o={title:"Particle Modules"},l={unversionedId:"particle-modules",id:"particle-modules",isDocsHomePage:!1,title:"Particle Modules",description:"Introduction",source:"@site/docs/06-particle-modules.md",sourceDirName:".",slug:"/particle-modules",permalink:"/docs/particle-modules",editUrl:"https://github.com/yiliansource/party-js/edit/main/docs/docs/06-particle-modules.md",version:"current",sidebarPosition:6,frontMatter:{title:"Particle Modules"},sidebar:"sidebar",previous:{title:"Custom Effects",permalink:"/docs/custom-effects"},next:{title:"Configuration",permalink:"/docs/configuration"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Pre-made Modules",id:"pre-made-modules",children:[]},{value:"Example",id:"example",children:[]}],s={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"Particles that are just static and do not change can look pretty boring. Particle modules allow certain particle properties to change over time, for example rotation or colour. These modules are registered at emitter creation, and are executed on a per-tick basis for each particle. They receive the particles themselves as a parameter, so they can alter the particle according to, for example, the particle's lifetime."),Object(i.b)("p",null,"They are implemented as class instances, using a single method override to drive their impact on the particles."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"abstract class ParticleModifierModule {\n    abstract apply(particle: Particle): void;\n}\n")),Object(i.b)("p",null,"Modules are commonly used in ",Object(i.b)("a",{parentName:"p",href:"/docs/templates"},"templates"),", and examples on how to use them yourself can be found on the ",Object(i.b)("a",{parentName:"p",href:"/docs/custom-effects"},"customization")," page. Usually, the changes these modules apply are driven through ",Object(i.b)("em",{parentName:"p"},"particle modifiers"),", which are similar to ",Object(i.b)("a",{parentName:"p",href:"/docs/variations"},"variations"),". A particle modifier can be represented by either a constant, a ",Object(i.b)("a",{parentName:"p",href:"/docs/utilities#splines"},"spline")," or a function taking a particle as a parameter and producing a value."),Object(i.b)("h2",{id:"pre-made-modules"},"Pre-made Modules"),Object(i.b)("p",null,"The pre-made modules include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CustomModifier"),": A powerful, universal module, that allows a developer to implement the ",Object(i.b)("inlineCode",{parentName:"li"},"apply")," method seen above themselves, via the ",Object(i.b)("inlineCode",{parentName:"li"},"modifier")," property of the class instance."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RotationOverLifetime"),": Allows you to control the rotation of the particles according to their lifetime, using a specified particle modifier."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SizeOverLifetime"),": Allows you to control the size (scale) of the particles according to their lifetime, using a specified particle modifier.")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"As an example on the usage, this is how the ",Object(i.b)("a",{parentName:"p",href:"/docs/templates#sparkles"},"sparkles")," template drives the particle's sizes:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const sizeModule = emitter.addModule(modules.SizeOverLifetime);\nsizeModule.size = new NumericSpline(\n    { time: 0, value: 0 },\n    { time: 0.3, value: 1 },\n    { time: 0.7, value: 1 },\n    { time: 1, value: 0 }\n);\n")))}p.isMDXComponent=!0},89:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return r?a.a.createElement(b,l(l({ref:t},s),{},{components:r})):a.a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);