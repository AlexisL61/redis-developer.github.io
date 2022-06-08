(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{304:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),o=(r(0),r(393)),a=(r(394),["components"]),c={id:"index-observability",title:"Ensuring Observability in Redis",sidebar_label:"Observability",slug:"/operate/redis-at-scale/observability",authors:["justin"],isEditable:!1},s={unversionedId:"operate/redis-at-scale/observability/index-observability",id:"operate/redis-at-scale/observability/index-observability",isDocsHomePage:!1,title:"Ensuring Observability in Redis",description:"Hello World! Observability",source:"@site/docs/operate/redis-at-scale/observability/index-observability.mdx",slug:"/operate/redis-at-scale/observability",permalink:"/operate/redis-at-scale/observability",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/operate/redis-at-scale/observability/index-observability.mdx",version:"current",lastUpdatedAt:1652821384,sidebar_label:"Observability"},u=[],l={toc:u};function b(e){var t=e.components,r=Object(i.a)(e,a);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Hello World! Observability"))}b.isMDXComponent=!0},393:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),p=n,f=b["".concat(a,".").concat(p)]||b[p]||d[p]||o;return r?i.a.createElement(f,c(c({ref:t},u),{},{components:r})):i.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},394:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a}));var n=r(20),i=r(401);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,a=o.forcePrependBaseUrl,c=void 0!==a&&a,s=o.absolute,u=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(i.b)(r))return r;if(c)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+l:l}(o,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},401:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}))}}]);