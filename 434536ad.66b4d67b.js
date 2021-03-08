(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{129:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(126),o=n(135);n(127),n(55);t.a=function(e){var t=r.a.useState(!1),n=t[0],i=t[1];return r.a.createElement("div",{className:"ri-container"},r.a.createElement("div",{className:"ri-description-short"},r.a.createElement("div",{className:"ri-icon"},r.a.createElement("span",{className:"fe fe-zap"})),r.a.createElement("div",{className:"ri-detail"},r.a.createElement("div",{className:"ri-title"},r.a.createElement("a",{href:e.page},e.title)),r.a.createElement("div",{className:"ri-description"},e.description,r.a.Children.count(e.children)>0&&r.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return i(!n)}})))),n&&r.a.createElement("div",{className:"ri-description-long"},r.a.createElement(a.a,{components:o.a},e.children)))}},130:function(e,t,n){"use strict";var i=n(0),r=n(131);t.a=function(){var e=Object(i.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},131:function(e,t,n){"use strict";var i=n(0),r=Object(i.createContext)(void 0);t.a=r},132:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(130),o=n(128),s=n(56),c=n.n(s),d=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,p=e.values,b=e.groupId,u=e.className,m=Object(a.a)(),h=m.tabGroupChoices,j=m.setTabGroupChoices,v=Object(i.useState)(s),f=v[0],O=v[1],g=i.Children.toArray(e.children);if(null!=b){var y=h[b];null!=y&&y!==f&&p.some((function(e){return e.value===y}))&&O(y)}var N=function(e){O(e),null!=b&&j(b,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},u)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(i.cloneElement)(g.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},133:function(e,t,n){"use strict";var i=n(3),r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",Object(i.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var i=n(3),r=n(7),a=(n(0),n(126)),o=n(132),s=n(133),c=(n(127),n(129),{id:"index-node",title:"Node.js and Redis",sidebar_label:"Node.js",slug:"/develop/node/"}),d={unversionedId:"develop/node/index-node",id:"develop/node/index-node",isDocsHomePage:!1,title:"Node.js and Redis",description:"Find tutorials, examples and technical articles that will help you to develop with Redis and Node.js/JavaScript.",source:"@site/docs/develop/node/index-node.mdx",slug:"/develop/node/",permalink:"/develop/node/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/index-node.mdx",version:"current",sidebar_label:"Node.js",sidebar:"docs",previous:{title:"Python and Redis",permalink:"/develop/python/"},next:{title:"Go and Redis",permalink:"/develop/golang/"}},l=[{value:"Getting Started",id:"getting-started",children:[{value:"Step 1. Install the ioredis library using <code>npm</code> (or <code>yarn</code>)",id:"step-1-install-the-ioredis-library-using-npm-or-yarn",children:[]},{value:"Step 2. Write your application code",id:"step-2-write-your-application-code",children:[]},{value:"Step 1. Install the Redis library using <code>npm</code> (or <code>yarn</code>)",id:"step-1-install-the-redis-library-using-npm-or-yarn",children:[]},{value:"Step 2. Write your application code",id:"step-2-write-your-application-code-1",children:[]},{value:"More developer resources",id:"more-developer-resources",children:[]},{value:"Redis University",id:"redis-university",children:[]},{value:"Redis for JavaScript Developers",id:"redis-for-javascript-developers",children:[]}]}],p={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Find tutorials, examples and technical articles that will help you to develop with Redis and Node.js/JavaScript."),Object(a.b)("h2",{id:"getting-started"},"Getting Started"),Object(a.b)("p",null,"The Node.js community has built many client libraries that you can find ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.io/clients#nodejs"}),"here"),".\nFor your first steps with Node.js and Redis, this article will show how to use the recommended libraries: ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/luin/ioredis"}),"ioredis")," and ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/NodeRedis/node-redis"}),"node-redis"),"."),Object(a.b)(o.a,{defaultValue:"ioredis",values:[{label:"IO redis",value:"ioredis"},{label:"Node Redis",value:"node_redis"}],mdxType:"Tabs"},Object(a.b)(s.a,{value:"ioredis",mdxType:"TabItem"},Object(a.b)("h3",{id:"step-1-install-the-ioredis-library-using-npm-or-yarn"},"Step 1. Install the ioredis library using ",Object(a.b)("inlineCode",{parentName:"h3"},"npm")," (or ",Object(a.b)("inlineCode",{parentName:"h3"},"yarn"),")"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"```bash\nnpm install ioredis\n```\n")),Object(a.b)("h3",{id:"step-2-write-your-application-code"},"Step 2. Write your application code"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'```javascript\nconst Redis = require("ioredis");\nconst redis = new Redis(6379, "localhost");\n\nredis.set("mykey", "Hello from io-redis!");\nredis.get("mykey", function(err, result){\n    if (err) { throw err; }\n\n    console.log(result);\n});\n\n// use the promise instead of callback\nredis.get("mykey").then(function (result) {\n    console.log(result);\n});\n\nredis.zadd("vehicles", 0, "car", 0, "bike");\nredis.zrange("vehicles", 0, -1, "WITHSCORES").then((res) => console.log(res));\n\n```\n')),Object(a.b)("p",null,'Find more information about Redis & io-redis connections in the "',Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/redis-developer/redis-connect/tree/master/node.js/ioredis"}),"Redis Connect"),'".')),Object(a.b)(s.a,{value:"node_redis",mdxType:"TabItem"},Object(a.b)("h3",{id:"step-1-install-the-redis-library-using-npm-or-yarn"},"Step 1. Install the Redis library using ",Object(a.b)("inlineCode",{parentName:"h3"},"npm")," (or ",Object(a.b)("inlineCode",{parentName:"h3"},"yarn"),")"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"```bash\nnpm install redis\n```\n")),Object(a.b)("h3",{id:"step-2-write-your-application-code-1"},"Step 2. Write your application code"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'```javascript\nconst redis = require("redis");\n\nconst client = redis.createClient ({\n    port : 6379,\n    host : "localhost"\n});\n\nclient.set("mykey", "Hello from node-redis!");\nclient.get("mykey", function(err, result){\n    if (err) { throw err; }\n\n    console.log(result);\n});\n\nconst vehiclesData = ["vehicles", 4, "car", 2, "bike"];\nclient.zadd(vehiclesData, function(addError, addResponse) {\n    if (addError) { throw addError; }\n\n    console.log("added " + addResponse + " items.");\n\n    const query = ["vehicles", 0, -1];\n    client.zrange(query, function(rangeError, rangeResponse) {\n        if (rangeError) {throw rangeError;}\n        console.log("vehicles", rangeResponse);\n    });\n});\n\n```\n')),Object(a.b)("p",null,'Find more information about Redis & node-redis connections in the "',Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/redis-developer/redis-connect/tree/master/node.js/node-redis"}),"Redis Connect"),'".'))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"more-developer-resources"},"More developer resources"),Object(a.b)("div",{class:"row"},Object(a.b)("div",{class:"col"},Object(a.b)("h4",{id:"sample-code"},"Sample Code"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(i.a)({parentName:"strong"},{href:"https://github.com/redis-developer/basic-caching-demo-nodejs"}),"Basic Redis Caching")),"\nThis application call the GitHub API and cache the results into Redis."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(i.a)({parentName:"strong"},{href:"https://github.com/redis-developer/basic-redis-rate-limiting-demo-nodejs"}),"Redis Rate-Limiting")),"\nThis is a very simple app that demonstrates rate-limiting feature using Redis."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(i.a)({parentName:"strong"},{href:"https://github.com/redis-developer/redis-websockets-vue-notifications"}),"Notifications with WebSocket, Vue & Redis")),"\nThis project allow you to push notifications in a Vue application from a Redis ",Object(a.b)("inlineCode",{parentName:"p"},"PUBLISH")," using WebSockets.")),Object(a.b)("div",{class:"col"},Object(a.b)("h4",{id:"technical-articles--videos"},"Technical Articles & Videos"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(i.a)({parentName:"strong"},{href:"https://www.youtube.com/watch?v=H6rikGCYPUk"}),"Redis Rapid Tips: ioredis"))," (YouTube)"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(i.a)({parentName:"strong"},{href:"https://www.youtube.com/watch?v=dukkMLbzPfA"}),"Mapping Objects between Node and Redis"))," (YouTube)"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"redis-university"},"Redis University"),Object(a.b)("h3",{id:"redis-for-javascript-developers"},Object(a.b)("a",Object(i.a)({parentName:"h3"},{href:"https://university.redislabs.com/courses/ru102js/"}),"Redis for JavaScript Developers")),Object(a.b)("p",null,"Build full-fledged Redis applications with Node.js and Express."),Object(a.b)("div",{class:"text--center"},Object(a.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Ik1WXPX3WNU",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}b.isMDXComponent=!0}}]);