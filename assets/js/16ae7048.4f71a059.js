"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[9933,1638,3007,8962,1849],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return a?n.createElement(m,s(s({ref:t},h),{},{components:a})):n.createElement(m,s({ref:t},h))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},50358:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),r=a(52263);const i="authorByline_VoxI",s="authorLabel_a70t",o="authorProfileImage_URwT";const c=function(e){let{frontMatter:t}=e;const{siteConfig:a}=(0,r.Z)(),c=a.customFields.authors;return n.createElement(n.Fragment,null,t.authors&&n.createElement("div",{className:"docAuthors"},n.createElement("hr",null),t.authors.map((e=>n.createElement("div",{key:e,className:i},n.createElement("img",{className:o,src:`/img/${c[e].image?c[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${c[e].name}`}),n.createElement("div",null,n.createElement("div",{className:s},"Author:"),n.createElement("div",null,n.createElement("a",{href:c[e].link,target:"_blank"},c[e].name),", ",c[e].title))))),n.createElement("hr",null)))}},94047:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={},s=void 0,o={unversionedId:"howtos/solutions/caching-architecture/common-caching/caching-movie-app",id:"howtos/solutions/caching-architecture/common-caching/caching-movie-app",title:"caching-movie-app",description:"The demo application used in the rest of this tutorial showcases a movie application with basic create, read, update, and delete (CRUD) operations.",source:"@site/docs/howtos/solutions/caching-architecture/common-caching/caching-movie-app.mdx",sourceDirName:"howtos/solutions/caching-architecture/common-caching",slug:"/howtos/solutions/caching-architecture/common-caching/caching-movie-app",permalink:"/howtos/solutions/caching-architecture/common-caching/caching-movie-app",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/caching-architecture/common-caching/caching-movie-app.mdx",tags:[],version:"current",lastUpdatedAt:1681340538,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{}},c={},l=[],h={toc:l};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The demo application used in the rest of this tutorial showcases a movie application with basic create, read, update, and delete (CRUD) operations.\n",(0,r.kt)("img",{alt:"demo-01",src:a(82989).Z,width:"2616",height:"1348"})),(0,r.kt)("p",null,"The movie application dashboard contains a search section at the top and a list of movie cards in the middle. The floating plus icon displays a pop-up when the user selects it, permitting the user to enter new movie details. The search section has a text search bar and a toggle link between text search and basic (that is, form-based) search. Each movie card has edit and delete icons, which are displayed when a mouse hovers over the card."))}d.isMDXComponent=!0},2327:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={},s=void 0,o={unversionedId:"howtos/solutions/caching-architecture/common-caching/redis-gears",id:"howtos/solutions/caching-architecture/common-caching/redis-gears",title:"redis-gears",description:"What is RedisGears?",source:"@site/docs/howtos/solutions/caching-architecture/common-caching/redis-gears.mdx",sourceDirName:"howtos/solutions/caching-architecture/common-caching",slug:"/howtos/solutions/caching-architecture/common-caching/redis-gears",permalink:"/howtos/solutions/caching-architecture/common-caching/redis-gears",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/caching-architecture/common-caching/redis-gears.mdx",tags:[],version:"current",lastUpdatedAt:1681340538,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{}},c={},l=[{value:"What is RedisGears?",id:"what-is-redisgears",level:3},{value:"How do I use RedisGears?",id:"how-do-i-use-redisgears",level:3},{value:"Using gears-cli",id:"using-gears-cli",level:3},{value:"RedisGears references",id:"redisgears-references",level:3}],h={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"what-is-redisgears"},"What is RedisGears?"),(0,r.kt)("p",null,"RedisGears is a programmable serverless engine for transaction, batch, and event-driven data processing allowing users to write and run their own functions on data stored in Redis."),(0,r.kt)("p",null,"Functions can be implemented in different languages, including Python and C, and can be executed by the RedisGears engine in one of two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Batch"),": triggered by the ",(0,r.kt)("a",{parentName:"li",href:"https://oss.redislabs.com/redisgears/functions.html#run"},"Run")," action, execution is immediate and on existing data"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Event"),": triggered by the ",(0,r.kt)("a",{parentName:"li",href:"https://oss.redislabs.com/redisgears/functions.html#register"},"Register")," action, execution is triggered by new events and on their data")),(0,r.kt)("p",null,"Some ",(0,r.kt)("strong",{parentName:"p"},"batch")," type operations RedisGears can do:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run an operation on all keys in the KeySpace or keys matching a certain pattern like :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Prefix all KeyNames with ",(0,r.kt)("inlineCode",{parentName:"li"},"person:")),(0,r.kt)("li",{parentName:"ul"},"Delete all keys whose value is smaller than zero"),(0,r.kt)("li",{parentName:"ul"},"Write all the KeyNames starting with ",(0,r.kt)("inlineCode",{parentName:"li"},"person:")," to a set"))),(0,r.kt)("li",{parentName:"ul"},"Run a set of operations on all(or matched) keys where the output of one operation is the input of another like",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Find all keys with a prefix ",(0,r.kt)("inlineCode",{parentName:"li"},"person:")," (assume all of them are of type hash)"),(0,r.kt)("li",{parentName:"ul"},"Increase user's days_old by 1, then sum them by age group (10-20, 20-30 etc.)"),(0,r.kt)("li",{parentName:"ul"},"Add today's stats to the sorted set of every client, calculate last 7 days average and save the computed result in a string")))),(0,r.kt)("p",null,"Some ",(0,r.kt)("strong",{parentName:"p"},"event")," type operations RedisGears can do:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RedisGears can also register event listeners that will trigger a function execution every time a watched key is changed like",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Listen for all operations on all keys and keep a list of all KeyNames in the KeySpace"),(0,r.kt)("li",{parentName:"ul"},"Listen for DEL operations on keys with a prefix ",(0,r.kt)("inlineCode",{parentName:"li"},"I-AM-IMPORTANT:"),' and asynchronously dump them in a "deleted keys" log file'),(0,r.kt)("li",{parentName:"ul"},"Listen for all HINCRBY operations on the element score of keys with a prefix ",(0,r.kt)("inlineCode",{parentName:"li"},"player:")," and synchronously update a user's level when the score reaches 1000")))),(0,r.kt)("h3",{id:"how-do-i-use-redisgears"},"How do I use RedisGears?"),(0,r.kt)("p",null,"Run the Docker container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -p 6379:6379 redislabs/redisgears:latest\n")),(0,r.kt)("p",null,"For a very simple example that lists all keys in your Redis database with a prefix of ",(0,r.kt)("inlineCode",{parentName:"p"},"person:")," create the following python script and name it ",(0,r.kt)("inlineCode",{parentName:"p"},"hello_gears.py")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"gb = GearsBuilder() gb.run('person:*')\n")),(0,r.kt)("p",null,"Execute your function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'docker exec -i redisgears redis-cli RG.PYEXECUTE "`cat hello_gears.py`"\n')),(0,r.kt)("h3",{id:"using-gears-cli"},"Using gears-cli"),(0,r.kt)("p",null,"The gears-cli tool provides an easier way to execute RedisGears functions, specially if you need to pass some parameters too."),(0,r.kt)("p",null,"It's written in Python and can be installed with ",(0,r.kt)("inlineCode",{parentName:"p"},"pip"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pip install gears-cli\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"gears-cli hello_gears.py REQUIREMENTS rgsync\n")),(0,r.kt)("p",null,"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"gears-cli --help\nusage: gears-cli [-h] [--host HOST] [--port PORT]\n[--requirements REQUIREMENTS] [--password PASSWORD] path [extra_args [extra_args ...]]\n")),(0,r.kt)("h3",{id:"redisgears-references"},"RedisGears references"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://oss.redis.com/redisgears/"},"RedisGears docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/RedisGears/rgsync"},"rgsync docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.redis.com/latest/modules/redisgears/installing-redisgears/"},"Installing RedisGears")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redis.com/blog/introduction-to-redisgears/"},"Introduction to RedisGears blog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=J4clHQJScZQ&list=PL83Wfqi-zYZFvs80ncPAPHt-CEuimHl6Q&index=3"},"RedisGears GA - RedisConf 2020 video")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=6SGWx5DtoCQ"},"Conference talk video by creator of RedisGears")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/RedisGears/rgsync/tree/master/examples/mongo"},"Redis Gears sync with MongoDB"))))}d.isMDXComponent=!0},87269:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={},s=void 0,o={unversionedId:"howtos/solutions/caching-architecture/common-caching/source-code-movie-app",id:"howtos/solutions/caching-architecture/common-caching/source-code-movie-app",title:"source-code-movie-app",description:"Below are the commands to clone the source code (frontend and backend) for the application used in this tutorial",source:"@site/docs/howtos/solutions/caching-architecture/common-caching/source-code-movie-app.mdx",sourceDirName:"howtos/solutions/caching-architecture/common-caching",slug:"/howtos/solutions/caching-architecture/common-caching/source-code-movie-app",permalink:"/howtos/solutions/caching-architecture/common-caching/source-code-movie-app",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/caching-architecture/common-caching/source-code-movie-app.mdx",tags:[],version:"current",lastUpdatedAt:1681340538,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{}},c={},l=[],h={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"GITHUB CODE",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Below are the commands to clone the source code (frontend and backend) for the application used in this tutorial"),(0,r.kt)("p",{parentName:"admonition"},"git clone ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/ebook-speed-mern-frontend.git"},"https://github.com/redis-developer/ebook-speed-mern-frontend.git")),(0,r.kt)("p",{parentName:"admonition"},"git clone ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/ebook-speed-mern-backend.git"},"https://github.com/redis-developer/ebook-speed-mern-backend.git"))))}d.isMDXComponent=!0},72716:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={},s=void 0,o={unversionedId:"howtos/solutions/caching-architecture/common-caching/write-behind-vs-write-through",id:"howtos/solutions/caching-architecture/common-caching/write-behind-vs-write-through",title:"write-behind-vs-write-through",description:"There are two related write patterns, and the main differences between them are as follows",source:"@site/docs/howtos/solutions/caching-architecture/common-caching/write-behind-vs-write-through.mdx",sourceDirName:"howtos/solutions/caching-architecture/common-caching",slug:"/howtos/solutions/caching-architecture/common-caching/write-behind-vs-write-through",permalink:"/howtos/solutions/caching-architecture/common-caching/write-behind-vs-write-through",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/caching-architecture/common-caching/write-behind-vs-write-through.mdx",tags:[],version:"current",lastUpdatedAt:1681831622,formattedLastUpdatedAt:"Apr 18, 2023",frontMatter:{}},c={},l=[],h={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are two related write patterns, and the main differences between them are as follows"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Write Behind"),(0,r.kt)("th",{parentName:"tr",align:null},"Write through"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Syncs data asynchronously"),(0,r.kt)("td",{parentName:"tr",align:null},"Syncs data synchronously/ immediately")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data between the cache and the system of record (database) is ",(0,r.kt)("strong",{parentName:"td"},"inconsistent for a short time")),(0,r.kt)("td",{parentName:"tr",align:null},"Data between the cache and the system of record (database) is always ",(0,r.kt)("strong",{parentName:"td"},"consistent"))))))}d.isMDXComponent=!0},38758:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>h,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),i=a(50358),s=a(2327),o=(a(94047),a(87269),a(72716));a.p;const c=a.p+"assets/images/04-redis-hash-view-60f80a4e61ad1cea85683cafd6380b44.png",l=a.p+"assets/images/07-redis-hash-updated-view-76ca19ead049df0d64f15942ea85dd32.png",h={id:"index-write-through",title:"How to use Redis for Write through caching strategy",sidebar_label:"How to use Redis for Write through caching strategy",slug:"/howtos/solutions/caching-architecture/write-through",authors:["prasan","will"]},d=void 0,p={unversionedId:"howtos/solutions/caching-architecture/write-through/index-write-through",id:"howtos/solutions/caching-architecture/write-through/index-write-through",title:"How to use Redis for Write through caching strategy",description:"What is write-through caching?",source:"@site/docs/howtos/solutions/caching-architecture/write-through/index-write-through.mdx",sourceDirName:"howtos/solutions/caching-architecture/write-through",slug:"/howtos/solutions/caching-architecture/write-through",permalink:"/howtos/solutions/caching-architecture/write-through",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/caching-architecture/write-through/index-write-through.mdx",tags:[],version:"current",lastUpdatedAt:1682101763,formattedLastUpdatedAt:"Apr 21, 2023",frontMatter:{id:"index-write-through",title:"How to use Redis for Write through caching strategy",sidebar_label:"How to use Redis for Write through caching strategy",slug:"/howtos/solutions/caching-architecture/write-through",authors:["prasan","will"]},sidebar:"docs",previous:{title:"How to use Redis for Write-behind Caching",permalink:"/howtos/solutions/caching-architecture/write-behind"},next:{title:"How to use Redis for Cache Prefetching Strategy",permalink:"/howtos/solutions/caching-architecture/cache-prefetching"}},u={},m=[{value:"What is write-through caching?",id:"what-is-write-through-caching",level:2},{value:"Why you should use Redis for write-through caching",id:"why-you-should-use-redis-for-write-through-caching",level:2},{value:"Redis programmability for write-through caching using RedisGears",id:"redis-programmability-for-write-through-caching-using-redisgears",level:2},{value:"Programming Redis using the write-through pattern",id:"programming-redis-using-the-write-through-pattern",level:3},{value:"Verifying the write-through pattern using RedisInsight",id:"verifying-the-write-through-pattern-using-redisinsight",level:3},{value:"Ready to use Redis for write-through caching?",id:"ready-to-use-redis-for-write-through-caching",level:2},{value:"Additional resources",id:"additional-resources",level:2}],g={toc:m};function k(e){let{components:t,...d}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{frontMatter:h,mdxType:"Authors"}),(0,r.kt)("h2",{id:"what-is-write-through-caching"},"What is write-through caching?"),(0,r.kt)("p",null,"Imagine you've built a movie streaming app. You used PostgreSQL as your data store, and as you needed to scale you implemented caching using Redis. However, now you are experiencing slowness in reflecting of updated user profile or subscription."),(0,r.kt)("p",null,'For example, When a user purchases or modifies subscription, user expects the changes to be reflected immediately on his account so that the desired movie/ show of new subscription is enabled for watching.\nSo you need a way of quickly providing strong consistency of user data. In such situation, What you need is called the "write-through pattern."'),(0,r.kt)("p",null,"With the ",(0,r.kt)("strong",{parentName:"p"},"Write-through")," pattern, every time an application writes data to the cache, it also updates the records in the database, unlike ",(0,r.kt)("a",{parentName:"p",href:"/howtos/solutions/caching-architecture/write-behind"},"Write behind")," the thread waits in this pattern until the write to the database is also completed."),(0,r.kt)("p",null,"Below is a diagram of the write-through pattern for the application:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"write-through-pattern using Redis in a movie streaming application",src:a(22651).Z,width:"1192",height:"271"})),(0,r.kt)("p",null,"The pattern works as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The application reads and writes data to Redis."),(0,r.kt)("li",{parentName:"ol"},"Redis syncs any changed data to the PostgreSQL database ",(0,r.kt)("strong",{parentName:"li"},"synchronously/ immediately"),".")),(0,r.kt)("p",null,"Note : the ",(0,r.kt)("strong",{parentName:"p"},"Redis server is blocked")," until a response from the main database is received."),(0,r.kt)(o.default,{mdxType:"WritePatternDifferences"}),(0,r.kt)("p",null,"Learn more about ",(0,r.kt)("a",{parentName:"p",href:"/howtos/solutions/caching-architecture/write-behind"},"Write behind pattern")),(0,r.kt)("h2",{id:"why-you-should-use-redis-for-write-through-caching"},"Why you should use Redis for write-through caching"),(0,r.kt)("p",null,"Write-through caching with Redis ensures that the (critical data) cache is always up-to-date with the database, providing ",(0,r.kt)("strong",{parentName:"p"},"strong consistency")," and ",(0,r.kt)("strong",{parentName:"p"},"improving application performance"),"."),(0,r.kt)("p",null,"consider below scenarios of different applications :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"E-commerce application"),": In an e-commerce application, write-through caching can be used to ensure consistency of product inventory. Whenever a customer purchases a product, the inventory count should be updated immediately to avoid overselling. Redis can be used to cache the inventory count, and every update to the count can be written through to the database. This ensures that the inventory count in the cache is always up-to-date, and customers are not able to purchase items that are out of stock.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Banking application"),": In a banking application, write-through caching can be used to ensure consistency of account balances. Whenever a transaction is made, the account balance should be updated immediately to avoid overdrafts or other issues. Redis can be used to cache the account balances, and every transaction can be written through to the database. This ensures that the balance in the cache is always up-to-date, and transactions can be processed with strong consistency.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Online gaming platform"),": Suppose you have an online gaming platform where users can play games against each other. With write-through caching, any changes made to a user's score or game state would be saved to the database and also cached in Redis. This ensures that any subsequent reads for that user's score or game state would hit the cache first. This helps to reduce the load on the database and ensures that the game state displayed to users is always up-to-date.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Claims Processing System"),": In an insurance claims processing system, claims data needs to be consistent and up-to-date across different systems and applications. With write-through caching in Redis, new claims data can be written to both the database and Redis cache. This ensures that different applications always have the most up-to-date information about the claims, making it easier for claims adjusters to access the information they need to process claims more quickly and efficiently.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Healthcare Applications"),": In healthcare applications, patient data needs to be consistent and up-to-date across different systems and applications. With write-through caching in Redis, updated patient data can be written to both the database and Redis cache, ensuring that different applications always have the latest patient information. This can help improve patient care by providing accurate and timely information to healthcare providers.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Social media application"),": In a social media application, write-through caching can be used to ensure consistency of user profiles. Whenever a user updates their profile, the changes should be reflected immediately to avoid showing outdated information to other users. Redis can be used to cache the user profiles, and every update can be written through to the database. This ensures that the profile information in the cache is always up-to-date, and users can see accurate information about each other."))),(0,r.kt)("h2",{id:"redis-programmability-for-write-through-caching-using-redisgears"},"Redis programmability for write-through caching using RedisGears"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can skip reading this section if you are already familiar with RedisGears)")),(0,r.kt)(s.default,{mdxType:"RedisGears"}),(0,r.kt)("h3",{id:"programming-redis-using-the-write-through-pattern"},"Programming Redis using the write-through pattern"),(0,r.kt)("p",null,"For our sample code, we will demonstrate writing ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," to Redis and then writing through to PostgreSQL. Use the docker-compose.yml file below to setup required environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},"version: '3.9'\nservices:\n  redis:\n    container_name: redis\n    image: 'redislabs/redismod:latest'\n    ports:\n      - 6379:6379\n    deploy:\n      replicas: 1\n      restart_policy:\n        condition: on-failure\n  postgres:\n    image: postgres\n    restart: always\n    environment:\n      POSTGRES_USER: root\n      POSTGRES_PASSWORD: password\n      POSTGRES_DB: example\n  adminer:\n    image: adminer\n    restart: always\n    ports:\n      - 8080:8080\n")),(0,r.kt)("p",null,"To run the docker-compose file, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker compose up -d\n")),(0,r.kt)("p",null,"This will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Redis")," server, a ",(0,r.kt)("inlineCode",{parentName:"p"},"PostgreSQL")," server, and an ",(0,r.kt)("inlineCode",{parentName:"p"},"Adminer")," server. Adminer is a web-based database management tool that allows you to view and edit data in your database."),(0,r.kt)("p",null,"Next, open your browser to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080/?pgsql=postgres&username=root&db=example&ns=public&sql="},"http://localhost:8080/?pgsql=postgres&username=root&db=example&ns=public&sql="),". You will have to input the password (which is ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," in the example above),"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"adminer-login",src:a(37411).Z,width:"1472",height:"790"})),(0,r.kt)("p",null,"then you will be taken to a SQL command page. Run the following SQL command to create a table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="users.sql"',title:'"users.sql"'},"CREATE TABLE users (\n    id SERIAL PRIMARY KEY,\n    username VARCHAR(255) UNIQUE NOT NULL,\n    email VARCHAR(255) UNIQUE NOT NULL,\n    password_hash VARCHAR(255) NOT NULL,\n    first_name VARCHAR(255),\n    last_name VARCHAR(255),\n    date_of_birth DATE,\n    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,\n    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP\n);\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"adminer-table-creation",src:a(59753).Z,width:"1930",height:"1152"})),(0,r.kt)("p",null,"Developers need to load some code (say python in our example) to the Redis server before using the write-through pattern (which syncs data from Redis to the system of record). Redis server has a RedisGears module that interprets the python code and syncs the data from Redis to the system of record."),(0,r.kt)("p",null,"Now, we need to create a RedisGears recipe that will write through to the PostgreSQL database. The following Python code will write through to the PostgreSQL database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="write-through.py"',title:'"write-through.py"'},"from rgsync import RGWriteThrough\nfrom rgsync.Connectors import PostgresConnector, PostgresConnection\n\n'''\nCreate Postgres connection object\n'''\nconnection = PostgresConnection('root', 'password', 'postgres:5432/example')\n\n'''\nCreate Postgres users connector\n'''\nusersConnector = PostgresConnector(connection, 'users', 'id')\n\nusersMappings = {\n    'username': 'username',\n    'email': 'email',\n    'pwhash': 'password_hash',\n    'first': 'first_name',\n    'last': 'last_name',\n    'dob': 'date_of_birth',\n    'created_at': 'created_at',\n    'updated_at': 'updated_at',\n}\n\nRGWriteThrough(GB, keysPrefix='__',     mappings=usersMappings,\n               connector=usersConnector, name='UsersWriteThrough', version='99.99.99')\n")),(0,r.kt)("p",null,'Make sure you create the file "write-through.py" because the next instructions will use it. For the purpose of this example we are showing how to map Redis hash fields to PostgreSQL table columns. The ',(0,r.kt)("inlineCode",{parentName:"p"},"RGWriteThrough")," function takes in the ",(0,r.kt)("inlineCode",{parentName:"p"},"usersMapping"),", where the keys are the Redis hash keys and the values are the PostgreSQL table columns."),(0,r.kt)("admonition",{title:"What is a RedisGears recipe?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A collection of RedisGears functions and any dependencies they may have that implement a high-level functional purpose is called a ",(0,r.kt)("inlineCode",{parentName:"p"},"recipe"),'.\nExample : "RGJSONWriteThrough" function in above python code')),(0,r.kt)("p",null,'The python file has a few dependencies in order to work. Below is the requirements.txt file that contains the dependencies, create it alongside the "write-through.py" file:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="requirements.txt"',title:'"requirements.txt"'},"rgsync\npsycopg2-binary\ncryptography\n")),(0,r.kt)("p",null,"There are two ways (gears CLI and RG.PYEXECUTE) to load that Python file into the Redis server:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Using the gears command-line interface (CLI)")),(0,r.kt)("p",null,"Find more information about the Gears CLI at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RedisGears/gears-cli"},"gears-cli")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RedisGears/rgsync#running-the-recipe"},"rgsync"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# install\npip install gears-cli\n")),(0,r.kt)("p",null,"To run our write-through recipe using ",(0,r.kt)("inlineCode",{parentName:"p"},"gears-cli"),", we need to run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ gears-cli run --host localhost --port 6379 write-through.py --requirements requirements.txt\n")),(0,r.kt)("p",null,'You should get a response that says "OK". That is how you know you have successfully loaded the Python file into the Redis server.'),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are on Windows, we recommend you use WSL to install and use gears-cli.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Using the RG.PYEXECUTE from the Redis command line.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Via redis cli\nRG.PYEXECUTE 'pythonCode' REQUIREMENTS rgsync psycopg2-binary cryptography\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The RG.PYEXECUTE command can also be executed from the Node.js code\n(Consult ",(0,r.kt)("u",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/ebook-speed-mern-backend/blob/main/data/write-through/wt-main.js"},"the sample Node file"))," for more details)")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Find more examples in the ",(0,r.kt)("u",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/RedisGears/rgsync/tree/master/examples/"},"Redis Gears GitHub repository")),".")),(0,r.kt)("h3",{id:"verifying-the-write-through-pattern-using-redisinsight"},"Verifying the write-through pattern using RedisInsight"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"RedisInsight is the free redis GUI for viewing data in redis. ",(0,r.kt)("u",null,(0,r.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/"},"Click here to download.")))),(0,r.kt)("p",null,"The next step is to verify that RedisGears is syncing data between Redis and PostgreSQL. Note that in our Python file we specified a prefix for the keys. In this case, we specified ",(0,r.kt)("inlineCode",{parentName:"p"},"__")," as the prefix, ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," as the table, and ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," as the unique identifier. This instructs RedisGears to look for the following key format: ",(0,r.kt)("inlineCode",{parentName:"p"},"__{users:<id>}"),". Try running the following command in the Redis command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hset __{users:1} username john email john@gmail.com pwhash d1e8a70b5ccab1dc2f56bbf7e99f064a660c08e361a35751b9c483c88943d082 first John last Doe dob 1990-01-01 created_at 2023-04-20 updated_at 2023-04-20\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"redis-hash-insert",src:a(59498).Z,width:"2606",height:"738"})),(0,r.kt)("p",null,"Check ",(0,r.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/"},"RedisInsight")," to verify that the hash value made it into Redis. After RedisGears is done processing the ",(0,r.kt)("inlineCode",{parentName:"p"},"__{users:1}")," key, it will be deleted from Redis and replaced by the ",(0,r.kt)("inlineCode",{parentName:"p"},"users:1")," key. Check RedisInsight to verify that the ",(0,r.kt)("inlineCode",{parentName:"p"},"users:1")," key is in Redis."),(0,r.kt)("img",{src:c,alt:"redis-hash-view",width:"500",className:"margin-bottom--md"}),(0,r.kt)("p",null,"Next, confirm that the user is inserted in PostgreSQL too by opening up the ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080/?pgsql=postgres&username=root&db=example&ns=public&select=users"},"select page in Adminer"),". You should see the user inserted in the table."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"adminer-hash-view",src:a(87876).Z,width:"2612",height:"912"})),(0,r.kt)("p",null,"This is how you can use RedisGears to write through to PostgreSQL, and so far we have only added a hash key. You can also update specific hash fields and it will be reflected in your PostgreSQL database. Run the following command to update the ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," field:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> hset __{users:1} username bar\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"redis-hash-update",src:a(10877).Z,width:"2616",height:"590"})),(0,r.kt)("p",null,"In RedisInsight, verify that the ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," field is updated"),(0,r.kt)("img",{src:l,alt:"redis-hash-updated-view",width:"500",className:"margin-bottom--md"}),(0,r.kt)("p",null,"Now go into Adminer and check the ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," field. You should see that it has been updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"bar"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"adminer-updated-hash-view",src:a(2623).Z,width:"2608",height:"904"})),(0,r.kt)("h2",{id:"ready-to-use-redis-for-write-through-caching"},"Ready to use Redis for write-through caching?"),(0,r.kt)("p",null,"You now know how to use Redis for write-through caching. It's possible to incrementally adopt Redis wherever needed with different strategies/patterns. For more resources on the topic of caching, check out the links below:"),(0,r.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Caching with Redis",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/howtos/solutions/caching-architecture/write-behind"},"Write behind caching")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/howtos/solutions/caching-architecture/cache-prefetching"},"Cache prefetching")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/howtos/solutions/microservices/caching"},"Query caching")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/c/Redisinc"},"Redis YouTube channel")),(0,r.kt)("li",{parentName:"ul"},"Clients like ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/redis/node-redis"},"Node Redis")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/redis/redis-om-node"},"Redis om Node")," help you to use Redis in Node.js applications."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redis.com/redis-enterprise/redis-insight/"},"RedisInsight")," : To view your Redis data or to play with raw Redis commands in the workbench"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redis.com/try-free/"},"Try Redis Enterprise for free"))))}k.isMDXComponent=!0},82989:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/demo-01-e8fece1a10d65e2298fa3e312b75ce29.png"},37411:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/01-adminer-login-8171c8f7e673dd1ceb17bbef20b7ad50.png"},59753:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/02-adminer-table-creation-2acfc18d0e9eadb5e81e59150e58571a.png"},59498:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/03-redis-hash-insert-6e4940cc3da97e400d35fbb01afc3709.png"},87876:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/05-adminer-hash-view-2d499bd76cb7098e9bc68f5953033460.png"},10877:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/06-redis-hash-update-79c18f02b89c5d440a12b6df4bb22be9.png"},2623:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/08-adminer-updated-hash-view-b01f9585080ed6c2cba6fec66a25bfd7.png"},22651:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pattern-wt-78d52966a7e1338b3bcc2950025a5dff.png"}}]);