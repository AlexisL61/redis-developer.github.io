(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(260)),o=(a(265),a(266),a(261),a(262),{id:"index-spring",title:"Spring",sidebar_label:"Overview",slug:"/develop/java/spring/"}),c={unversionedId:"develop/java/spring/index-spring",id:"develop/java/spring/index-spring",isDocsHomePage:!1,title:"Spring",description:"Author: Brian Sam-Bodden",source:"@site/docs/develop/java/spring/getting-started.mdx",slug:"/develop/java/spring/",permalink:"/develop/java/spring/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/getting-started.mdx",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Java and Redis",permalink:"/develop/java"},next:{title:"Redis and Spring Course",permalink:"/develop/java/redis-and-spring-course"}},s=[],l={toc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Author: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/bsbodden"}),"Brian Sam-Bodden")),Object(i.b)("h4",{id:"data-driven-applications-with-spring-boot-and-redis"},"Data-Driven Applications with Spring Boot and Redis"),Object(i.b)("p",null,'Spring Boot is the most powerful and popular way to easily create stand-alone,\nproduction-grade Spring based Applications that you can "just run".'),Object(i.b)("p",null,"Paired with Redis, Spring and Spring Boot give unrivaled versatility. For a quick,\ntour of some of the cool things you can do with Spring and Redis checkout the session by\nJosh Long and Brian Sam-Bodden at RedisConf 2021:"),Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Yq8Cc7eOgF8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}d.isMDXComponent=!0},262:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(260),o=a(268);a(261),a(55);t.a=function(e){var t=r.a.useState(!1),a=t[0],n=t[1];return r.a.createElement("div",{className:"ri-container"},r.a.createElement("div",{className:"ri-description-short"},r.a.createElement("div",{className:"ri-icon"},r.a.createElement("span",{className:"fe fe-zap"})),r.a.createElement("div",{className:"ri-detail"},r.a.createElement("div",{className:"ri-title"},r.a.createElement("a",{href:e.page},e.title)),r.a.createElement("div",{className:"ri-description"},e.description,r.a.Children.count(e.children)>0&&r.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!a)}})))),a&&r.a.createElement("div",{className:"ri-description-long"},r.a.createElement(i.a,{components:o.a},e.children)))}},263:function(e,t,a){"use strict";var n=a(0),r=a(264);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},264:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},265:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(263),o=a(267),c=a(56),s=a.n(c),l=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,u=e.values,p=e.groupId,m=e.className,v=Object(i.a)(),b=v.tabGroupChoices,f=v.setTabGroupChoices,g=Object(n.useState)(c),h=g[0],j=g[1],w=n.Children.toArray(e.children);if(null!=p){var O=b[p];null!=O&&O!==h&&u.some((function(e){return e.value===O}))&&j(O)}var y=function(e){j(e),null!=p&&f(p,e)},E=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},m)},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},a)}))),t?Object(n.cloneElement)(w.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},266:function(e,t,a){"use strict";var n=a(3),r=a(0),i=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);