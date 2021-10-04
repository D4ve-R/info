(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5883],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=l(r),p=i,m=d["".concat(u,".").concat(p)]||d[p]||f[p]||o;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},983:function(e,t,r){"use strict";r.d(t,{M:function(){return a}});var n=r(7294),i=r(9205),o="titleOffset_2I3u",c="iconContainer_1xRA",a=function(e){var t=e.title?n.createElement("div",{className:"card__header"},n.createElement("span",{className:c},e.icon&&n.createElement(i.A,{icon:e.icon,link:e.link,active:"true"})),n.createElement("h3",{className:e.icon&&o},e.title)):"";return n.createElement("div",{className:"card-demo",style:{margin:"2rem"}},n.createElement("div",{className:"card"},t,n.createElement("div",{className:"card__body"},n.createElement("p",null," ",e.children," "))))}},9205:function(e,t,r){"use strict";r.d(t,{A:function(){return l}});var n=r(7294),i="hidden_2JtY",o="iconContainer_2Rnc",c="visible_2147",a="link_Lh4h",u="clickable_3vcc",l=function(e){var t=" "+(e.active?c:i),r=a+" "+(e.link&&u);return n.createElement("div",{className:o+t},n.createElement("a",{href:e.link,className:r},e.icon||"\ud83d\ude80"))}},2050:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),c=r(983),a=["components"],u={title:"\ud83e\uddbe \u6700\u9069\u5316",sidebar_position:5},l={unversionedId:"Guide/web-ifc-three/Tutorials/Optimization",id:"Guide/web-ifc-three/Tutorials/Optimization",isDocsHomePage:!1,title:"\ud83e\uddbe \u6700\u9069\u5316",description:"\ud83d\udea7\ud83d\udc77\u200d\u2640\ufe0f\u5efa\u8a2d\u4e2d \ud83d\udc77\u200d\u2642\ufe0f\ud83d\udea7",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/Guide/web-ifc-three/Tutorials/Optimization.mdx",sourceDirName:"Guide/web-ifc-three/Tutorials",slug:"/Guide/web-ifc-three/Tutorials/Optimization",permalink:"/info/ja/docs/Guide/web-ifc-three/Tutorials/Optimization",version:"current",sidebarPosition:5,frontMatter:{title:"\ud83e\uddbe \u6700\u9069\u5316",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc53 \u96a0\u853d",permalink:"/info/ja/docs/Guide/web-ifc-three/Tutorials/Hiding"},next:{title:"\u306f\u3058\u3081\u306b",permalink:"/info/ja/docs/Guide/web-ifc-viewer/Introduction"}},s=[{value:"\ud83d\udea7\ud83d\udc77\u200d\u2640\ufe0f\u5efa\u8a2d\u4e2d \ud83d\udc77\u200d\u2642\ufe0f\ud83d\udea7",id:"\u2640\ufe0f\u5efa\u8a2d\u4e2d-\u2642\ufe0f",children:[]}],f={toc:s};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u2640\ufe0f\u5efa\u8a2d\u4e2d-\u2642\ufe0f"},"\ud83d\udea7\ud83d\udc77\u200d\u2640\ufe0f\u5efa\u8a2d\u4e2d \ud83d\udc77\u200d\u2642\ufe0f\ud83d\udea7"),(0,o.kt)(c.M,{icon:"\ud83d\udc99",title:"IFC.js\u306b\u8208\u5473\u3092\u6301\u3063\u3066\u3044\u305f\u3060\u304d\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002",mdxType:"IfcCard"},"\u73fe\u5728\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u4e2d\u3067\u3059\u3002\u305d\u308c\u307e\u3067\u306e\u9593\u3001",(0,o.kt)("a",{href:"https://discord.com/invite/g7Uzn2KSwB"},"Discord\u30c1\u30e3\u30f3\u30cd\u30eb"),"\u306b\u53c2\u52a0\u3057\u3066\u3001IFC.js\u306e\u5b9f\u88c5\u3084\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3078\u306e\u53c2\u52a0\u306b\u5fc5\u8981\u306a\u8cea\u554f\u3092\u3057\u3066\u307f\u3066\u306f\u3044\u304b\u304c\u3067\u3057\u3087\u3046\u304b\u3002"))}d.isMDXComponent=!0}}]);