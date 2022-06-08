(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{113:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(393)),i=(a(398),a(399),a(394),a(395)),s=["components"],c={id:"index-operate",title:"Operate Your Redis Database",sidebar_label:"Overview",slug:"/operate"},l={unversionedId:"operate/index-operate",id:"operate/index-operate",isDocsHomePage:!1,title:"Operate Your Redis Database",description:"The following links demonstrate various ways to provision Redis and accelerate app deployment using Devops.",source:"@site/docs/operate/index-operate.mdx",slug:"/operate",permalink:"/operate",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/operate/index-operate.mdx",version:"current",lastUpdatedAt:1652821384,sidebar_label:"Overview",sidebar:"docs",previous:{title:"RIOT",permalink:"/explore/riot"},next:{title:"Continuous Integration/Deployment",permalink:"/operate/continuous-integration-continuous-deployment"}},d=[],u={toc:d};function p(e){var t=e.components,a=Object(o.a)(e,s);return Object(r.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The following links demonstrate various ways to provision Redis and accelerate app deployment using Devops."),Object(r.b)("a",{href:"https://redis.com/blog/why-devops-teams-love-redis-enterprise/"},Object(r.b)("img",{src:"/img/logos/devopslogo.png",alt:"docusaurus mascot"})),Object(r.b)("h1",{id:"explore-by-category"},"Explore by Category"),Object(r.b)("div",{class:"row"},Object(r.b)("div",{class:"col continuous"},Object(r.b)(i.a,{title:"Continuous Integration and Deployment",description:"Embed Redis into your CI/CD Process",preview:"/img/logos/devops.png",page:"/operate/continuous-integration-continuous-deployment",mdxType:"RedisCard"})),Object(r.b)("div",{class:"col observability"},Object(r.b)(i.a,{title:"Observability",description:"Observe key indicators critical to operating Redis",page:"/operate/observability",mdxType:"RedisCard"})),Object(r.b)("div",{class:"col provisioning"},Object(r.b)(i.a,{title:"Provisioning",description:"Automate delivery of Redis to your org",page:"/operate/provisioning",mdxType:"RedisCard"})),Object(r.b)("div",{class:"col scale"},Object(r.b)(i.a,{title:"Running Redis at Scale",description:"Create a performant, stable, and secure deployment of Redis",page:"/operate/redis-at-scale",mdxType:"RedisCard"})),Object(r.b)("div",{class:"col orchestration"},Object(r.b)(i.a,{title:"Orchestration",description:"Connect your containerized workloads to Redis",page:"/operate/orchestration",mdxType:"RedisCard"}))))}p.isMDXComponent=!0},395:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(393),i=a(400);a(394),a(59);t.a=function(e){var t=o.a.useState(!1),a=t[0],n=t[1];return o.a.createElement("div",{className:"ri-container"},o.a.createElement("div",{className:"ri-description-short"},o.a.createElement("div",{className:"ri-icon"},o.a.createElement("span",{className:"fe fe-zap"})),o.a.createElement("div",{className:"ri-detail"},o.a.createElement("div",{className:"ri-title"},o.a.createElement("a",{href:e.page},e.title)),o.a.createElement("div",{className:"ri-description"},e.description,o.a.Children.count(e.children)>0&&o.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!a)}})))),a&&o.a.createElement("div",{className:"ri-description-long"},o.a.createElement(r.a,{components:i.a},e.children)))}},396:function(e,t,a){"use strict";var n=a(0),o=a(397);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},397:function(e,t,a){"use strict";var n=a(0),o=Object(n.createContext)(void 0);t.a=o},398:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(396),i=a(402),s=a(60),c=a.n(s),l=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,u=e.values,p=e.groupId,m=e.className,b=Object(r.a)(),v=b.tabGroupChoices,f=b.setTabGroupChoices,g=Object(n.useState)(s),y=g[0],O=g[1],h=n.Children.toArray(e.children);if(null!=p){var j=v[p];null!=j&&j!==y&&u.some((function(e){return e.value===j}))&&O(j)}var C=function(e){O(e),null!=p&&f(p,e)},x=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},m)},u.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return C(t)},onClick:function(){C(t)}},a)}))),t?Object(n.cloneElement)(h.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},399:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);