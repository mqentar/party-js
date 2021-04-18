(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),i=(n(0),n(89)),a={title:"Components"},c={unversionedId:"components",id:"components",isDocsHomePage:!1,title:"Components",description:"To allow structured and clean functionalities, the library offers various component types to define properties like colour, positions, rotations or behaviour over time. They are all exported into the party object.",source:"@site/docs/08-components.md",sourceDirName:".",slug:"/components",permalink:"/docs/components",editUrl:"https://github.com/yiliansource/party-js/edit/main/docs/docs/08-components.md",version:"current",sidebarPosition:8,frontMatter:{title:"Components"},sidebar:"sidebar",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"Utilities",permalink:"/docs/utilities"}},l=[{value:"Colour",id:"colour",children:[]},{value:"Vector",id:"vector",children:[]},{value:"Splines",id:"splines",children:[{value:"Numeric Spline",id:"numeric-spline",children:[]},{value:"Gradient",id:"gradient",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To allow structured and clean functionalities, the library offers various component types to define properties like colour, positions, rotations or behaviour over time. They are all exported into the ",Object(i.b)("inlineCode",{parentName:"p"},"party")," object."),Object(i.b)("h2",{id:"colour"},"Colour"),Object(i.b)("p",null,"Allows the representation of colours through RGB components."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},'const a = new party.Colour(12, 59, 219);\nconst b = party.Colour.fromHex("#ffa68d");\nconst result = a.mix(b); // Colour (#8570b4)\n')),Object(i.b)("p",null,"As seen above, colours can be mixed together (with an optional weight). Note that this will create a new object, instead of modifying one of the components."),Object(i.b)("p",null,"Additionally, conversion from and to hexadecimal notation are supported, as well as conversion from HSL."),Object(i.b)("h2",{id:"vector"},"Vector"),Object(i.b)("p",null,"Allows the representation of things like location and rotation through XYZ components."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const vectorA = new Vector(1, 3, 5);\nconst vectorB = new Vector(2, 3, 1);\nconst vectorC = vectorA.add(vectorB); // (3, 6, 6)\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Vector")," class has various arithmetic vector math operations defined. Note that these always return a new vector, instead of altering an existing one."),Object(i.b)("p",null,"You can also create a 2D vector from a 2D angle. Note that a 90\xb0 angle will return (0, 1) correctly, but will point downwards in the DOM."),Object(i.b)("h2",{id:"splines"},"Splines"),Object(i.b)("p",null,"The library provides an abstract implementation of a spline, from which more specific implemenations stem. The basic concept is that a spline consists of spline keys, with a time and a value of an arbitrary type. Splines can be created through the constructor of the specific implementation, as seen further below."),Object(i.b)("h3",{id:"numeric-spline"},"Numeric Spline"),Object(i.b)("p",null,"A basic implementation of a numeric spline, with easing applied through cosine interpolation."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const mySpline = new party.NumericSpline(\n    { time: 0, value: 0 },\n    { time: 1, value: 1 }\n);\nconst result = mySpline.evaluate(0.2); // 0.0955\n")),Object(i.b)("h3",{id:"gradient"},"Gradient"),Object(i.b)("p",null,"In this implementation, the values of the spline keys consist of colours, which are mixed together to ease between them. The implementation also offers static utility methods to easily create gradients."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},'const a = new party.Colour(12, 59, 219);\nconst b = party.Colour.fromHex("#ffa68d");\nconst simpleGradient = party.Gradient.simple(a, b);\nconst result = simpleGradient.evaluate(0.6); // Colour (#9d7bac)\n')))}p.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(a,".").concat(m)]||u[m]||b[m]||i;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);