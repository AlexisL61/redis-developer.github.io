(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{138:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return s})),i.d(t,"toc",(function(){return l})),i.d(t,"default",(function(){return u}));var n=i(3),a=i(7),r=(i(0),i(272)),o=(i(277),i(278),i(273),i(274),{id:"index-fixed-window",title:"How to Implement Fixed Window Rate Limiting using Redis",sidebar_label:"Overview",slug:"/develop/java/spring/rate-limiting/fixed-window"}),s={unversionedId:"develop/java/spring/rate-limiting/fixed-window/index-fixed-window",id:"develop/java/spring/rate-limiting/fixed-window/index-fixed-window",isDocsHomePage:!1,title:"How to Implement Fixed Window Rate Limiting using Redis",description:"Author: Brian Sam-Bodden",source:"@site/docs/develop/java/spring/rate-limiting/fixed-window/index-fixed-window.mdx",slug:"/develop/java/spring/rate-limiting/fixed-window",permalink:"/develop/java/spring/rate-limiting/fixed-window",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/rate-limiting/fixed-window/index-fixed-window.mdx",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Rate Limiting with Spring and Redis",permalink:"/develop/java/spring/rate-limiting"},next:{title:"Reactive Implementation",permalink:"/develop/java/spring/rate-limiting/fixed-window/reactive"}},l=[],c={toc:l};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Author: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/bsbodden"}),"Brian Sam-Bodden")),Object(r.b)("p",null,'The simplest approach to build a rate limiter is the "fixed window" implementation in which we cap the\nmaximum number of requests in a fixed window of time. For exmaple, if the window size is 1 hour, we can\n"fix" it at the top of the hour, like 12:00-12:59, 1:00-1:59, and so forth.'),Object(r.b)("p",null,"The procedure to implement a fixed window rate limiter is fairly simple, for each request we:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Identify the requester"),": This might be an API key, a token, a user's name or id, or even an IP address."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Find the current window"),': Use the current time to find the window. Assume that we are working with 1 hour windows\nand it\'s 3:15 PM, we could use a 24 hour clock and label this window "15".'),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Find the request count"),': Find the fixed window request count for the requester. For example, say we\'ve\nidentified the requester to be user with id "u123", and it\'s 3:15 PM. We will look for a count under the\nkey "u123:15" where the value store under that key is the count of requests for user u123 from 3:00 PM\nto 3:59:59 PM.'),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Increment the request count"),": Increment the request count for the window+user key."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Rate Limit if applicable"),": If the count exceeds the user's quota, then deny the request, otherwise, allow the\nrequests to proceed.")),Object(r.b)("p",null,'The fixed window recipe ignores the cost of the request (all requests are created equal) and in this particular implementation\nit uses a single quota for all all users. This simple implementation minimizes the CPU and I/O utilization but that comes with\nsome limitations. It is possible to experience spikes near the edges of the window, since APIs users might program their\nrequests in a "use or lose it" approach.'),Object(r.b)("p",null,"One way to minimize the spikiness in this scheme is to have multiple time windows of different granularity. For example, you can\nrate limit at the hour and minute levels, say, allowing a maximum of 2,000 request per hour, and a maximum of 33 requests\nper minute."),Object(r.b)("p",null,"This basic recipe using Redis Strings, a minute-size window and a quota of 20 requests is outlined on\nthe ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.com/redis-best-practices/basic-rate-limiting/"}),"Redis Blog"),". I'll summarize it here before we jump\ninto out Spring Reactive implementation:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"GET [user-api-key]:[current minute number]")," such as ",Object(r.b)("inlineCode",{parentName:"li"},'GET "u123:45"')),Object(r.b)("li",{parentName:"ol"},"If the result from line 1 is less than 20 (or the key is not found) go to step 4 otherwise continue to step 3"),Object(r.b)("li",{parentName:"ol"},"Reject the request."),Object(r.b)("li",{parentName:"ol"},"In an atomic way (using ",Object(r.b)("inlineCode",{parentName:"li"},"MULTI")," and ",Object(r.b)("inlineCode",{parentName:"li"},"EXEC"),") increment the key and set the expiry to 59 seconds into the future.",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"MULTI\nINCR [user-api-key]:[current minute number]\nEXPIRE [user-api-key]:[current minute number] 59\nEXEC\n"))),Object(r.b)("li",{parentName:"ol"},"Otherwise, fulfill the request.")),Object(r.b)("p",null,"Ok, now that we know the basic recipe, let's implement it in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/develop/java/spring/rate-limiting/fixed-window/reactive"}),"Spring")))}u.isMDXComponent=!0},274:function(e,t,i){"use strict";var n=i(0),a=i.n(n),r=i(272),o=i(280);i(273),i(55);t.a=function(e){var t=a.a.useState(!1),i=t[0],n=t[1];return a.a.createElement("div",{className:"ri-container"},a.a.createElement("div",{className:"ri-description-short"},a.a.createElement("div",{className:"ri-icon"},a.a.createElement("span",{className:"fe fe-zap"})),a.a.createElement("div",{className:"ri-detail"},a.a.createElement("div",{className:"ri-title"},a.a.createElement("a",{href:e.page},e.title)),a.a.createElement("div",{className:"ri-description"},e.description,a.a.Children.count(e.children)>0&&a.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!i)}})))),i&&a.a.createElement("div",{className:"ri-description-long"},a.a.createElement(r.a,{components:o.a},e.children)))}},275:function(e,t,i){"use strict";var n=i(0),a=i(276);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},276:function(e,t,i){"use strict";var n=i(0),a=Object(n.createContext)(void 0);t.a=a},277:function(e,t,i){"use strict";var n=i(0),a=i.n(n),r=i(275),o=i(279),s=i(56),l=i.n(s),c=37,u=39;t.a=function(e){var t=e.lazy,i=e.block,s=e.defaultValue,d=e.values,m=e.groupId,p=e.className,b=Object(r.a)(),h=b.tabGroupChoices,f=b.setTabGroupChoices,w=Object(n.useState)(s),v=w[0],j=w[1],g=n.Children.toArray(e.children);if(null!=m){var O=h[m];null!=O&&O!==v&&d.some((function(e){return e.value===O}))&&j(O)}var x=function(e){j(e),null!=m&&f(m,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":i},p)},d.map((function(e){var t=e.value,i=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,i){switch(i.keyCode){case u:!function(e,t){var i=e.indexOf(t)+1;e[i]?e[i].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var i=e.indexOf(t)-1;e[i]?e[i].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},i)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},278:function(e,t,i){"use strict";var n=i(3),a=i(0),r=i.n(a);t.a=function(e){var t=e.children,i=e.hidden,a=e.className;return r.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:i,className:a}),t)}}}]);