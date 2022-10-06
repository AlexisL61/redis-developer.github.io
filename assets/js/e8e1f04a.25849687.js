"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[5050],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return h}});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),l=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=l(e.components);return r.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),h=n,g=u["".concat(o,".").concat(h)]||u[h]||d[h]||i;return t?r.createElement(g,s(s({ref:a},c),{},{components:t})):r.createElement(g,s({ref:a},c))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=u;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},31486:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var r=t(87462),n=t(63366),i=(t(67294),t(3905)),s=["components"],p={id:"index-usingjavascript",title:"How to query Graph data in Redis using JavaScript",sidebar_label:"RedisGraph and JavaScript",slug:"/howtos/redisgraph/using-javascript",authors:["ajeet"]},o=void 0,l={unversionedId:"howtos/redisgraph/using-javascript/index-usingjavascript",id:"howtos/redisgraph/using-javascript/index-usingjavascript",title:"How to query Graph data in Redis using JavaScript",description:"RedisGraph is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. Show how your data is connected through multiple visualization integrations including RedisInsight, Linkurious, and Graphileon. Query graphs using the industry-standard Cypher query language and easily use graph capabilities from application code.",source:"@site/docs/howtos/redisgraph/using-javascript/index-usingjavascript.mdx",sourceDirName:"howtos/redisgraph/using-javascript",slug:"/howtos/redisgraph/using-javascript",permalink:"/howtos/redisgraph/using-javascript",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisgraph/using-javascript/index-usingjavascript.mdx",tags:[],version:"current",lastUpdatedAt:1655488379,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-usingjavascript",title:"How to query Graph data in Redis using JavaScript",sidebar_label:"RedisGraph and JavaScript",slug:"/howtos/redisgraph/using-javascript",authors:["ajeet"]},sidebar:"docs",previous:{title:"RedisGraph and Ruby",permalink:"/howtos/redisgraph/using-ruby"},next:{title:"RedisGraph and Go",permalink:"/howtos/redisgraph/using-go"}},c={},d=[{value:"RedisGraph JavaScript Client",id:"redisgraph-javascript-client",level:2},{value:"Step 1. Run RedisMod Docker container",id:"step-1-run-redismod-docker-container",level:3},{value:"Step 2. Verify if RedisGraph module is loaded",id:"step-2-verify-if-redisgraph-module-is-loaded",level:3},{value:"Step 3. Clone the repository",id:"step-3-clone-the-repository",level:3},{value:"Step 4. Install the packages locally",id:"step-4-install-the-packages-locally",level:3},{value:"Step 5. Write a JavaScript code",id:"step-5-write-a-javascript-code",level:3},{value:"Step 6. Execute the Script",id:"step-6-execute-the-script",level:3},{value:"Step 7. Monitor the Graph query",id:"step-7-monitor-the-graph-query",level:3},{value:"Step 8. Install RedisInsight",id:"step-8-install-redisinsight",level:3},{value:"Step 9. Accessing RedisInsight",id:"step-9-accessing-redisinsight",level:3},{value:"Step 10. Run the Graph Query",id:"step-10-run-the-graph-query",level:3},{value:"References",id:"references",level:3}],u={toc:d};function h(e){var a=e.components,p=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,p,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"RedisGraph is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. Show how your data is connected through multiple visualization integrations including RedisInsight, Linkurious, and Graphileon. Query graphs using the industry-standard Cypher query language and easily use graph capabilities from application code."),(0,i.kt)("h2",{id:"redisgraph-javascript-client"},"RedisGraph JavaScript Client"),(0,i.kt)("p",null,"Follow the steps below to get started with RedisGraph with Java:"),(0,i.kt)("h3",{id:"step-1-run-redismod-docker-container"},"Step 1. Run RedisMod Docker container"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -p 6379:6379 --name redislabs/redismod\n")),(0,i.kt)("h3",{id:"step-2-verify-if-redisgraph-module-is-loaded"},"Step 2. Verify if RedisGraph module is loaded"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," info modules\n # Modules\n module:name=graph,ver=20405,api=1,filters=0,usedby=[],using=[],options=[]\n")),(0,i.kt)("h3",{id:"step-3-clone-the-repository"},"Step 3. Clone the repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," git clone https://github.com/RedisGraph/redisgraph.js\n")),(0,i.kt)("h3",{id:"step-4-install-the-packages-locally"},"Step 4. Install the packages locally"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," npm install redisgraph.js\n")),(0,i.kt)("h3",{id:"step-5-write-a-javascript-code"},"Step 5. Write a JavaScript code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const RedisGraph = require('redisgraph.js').Graph;\n\nlet graph = new RedisGraph('social');\n\n(async () => {\n  await graph.query(\"CREATE (:person{name:'roi',age:32})\");\n  await graph.query(\"CREATE (:person{name:'amit',age:30})\");\n  await graph.query(\n    \"MATCH (a:person), (b:person) WHERE (a.name = 'roi' AND b.name='amit') CREATE (a)-[:knows]->(b)\",\n  );\n\n  // Match query.\n  let res = await graph.query(\n    'MATCH (a:person)-[:knows]->(:person) RETURN a.name',\n  );\n  while (res.hasNext()) {\n    let record = res.next();\n    console.log(record.get('a.name'));\n  }\n  console.log(res.getStatistics().queryExecutionTime());\n\n  // Match with parameters.\n  let param = { age: 30 };\n  res = await graph.query('MATCH (a {age: $age}) return a.name', param);\n  while (res.hasNext()) {\n    let record = res.next();\n    console.log(record.get('a.name'));\n  }\n\n  // Named paths matching.\n  res = await graph.query('MATCH p = (a:person)-[:knows]->(:person) RETURN p');\n  while (res.hasNext()) {\n    let record = res.next();\n    // See path.js for more path API.\n    console.log(record.get('p').nodeCount);\n  }\n  graph.deleteGraph();\n  graph.close();\n})();\n")),(0,i.kt)("p",null,'Save the above file as "app.js".'),(0,i.kt)("h3",{id:"step-6-execute-the-script"},"Step 6. Execute the Script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"}," node app.js\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," roi\n 0.1789\n amit\n 2\n")),(0,i.kt)("h3",{id:"step-7-monitor-the-graph-query"},"Step 7. Monitor the Graph query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},' 1632898652.415702 [0 172.17.0.1:64144] "info"\n 1632898652.418225 [0 172.17.0.1:64144] "graph.query" "social" "CREATE (:person{name:\'roi\',age:32})" "--compact"\n 1632898652.420399 [0 172.17.0.1:64144] "graph.query" "social" "CREATE (:person{name:\'amit\',age:30})" "--compact"\n 1632898652.421857 [0 172.17.0.1:64144] "graph.query" "social" "MATCH (a:person), (b:person) WHERE (a.name = \'roi\' AND b.name=\'amit\') CREATE (a)-[:knows]->(b)" "--compact"\n 1632898652.424911 [0 172.17.0.1:64144] "graph.query" "social" "MATCH (a:person)-[:knows]->(:person) RETURN a.name" "--compact"\n 1632898652.429658 [0 172.17.0.1:64144] "graph.query" "social" "CYPHER age=30  MATCH (a {age: $age}) return a.name" "--compact"\n 1632898652.431221 [0 172.17.0.1:64144] "graph.query" "social" "MATCH p = (a:person)-[:knows]->(:person) RETURN p" "--compact"\n 1632898652.433146 [0 172.17.0.1:64144] "graph.query" "social" "CALL db.labels()" "--compact"\n 1632898652.434781 [0 172.17.0.1:64144] "graph.query" "social" "CALL db.propertyKeys()" "--compact"\n 1632898652.436574 [0 172.17.0.1:64144] "graph.query" "social" "CALL db.relationshipTypes()" "--compact"\n 1632898652.438559 [0 172.17.0.1:64144] "graph.delete" "social"\n')),(0,i.kt)("h3",{id:"step-8-install-redisinsight"},"Step 8. Install RedisInsight"),(0,i.kt)("p",null,"Run the RedisInsight container. The easiest way is to run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -d -v redisinsight:/db -p 8001:8001 redislabs/redisinsight:latest\n")),(0,i.kt)("h3",{id:"step-9-accessing-redisinsight"},"Step 9. Accessing RedisInsight"),(0,i.kt)("p",null,"Next, point your browser to http://localhost:8001."),(0,i.kt)("h3",{id:"step-10-run-the-graph-query"},"Step 10. Run the Graph Query"),(0,i.kt)("p",null,"You can display the number of records returned by a query:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"My Image",src:t(31680).Z,width:"3086",height:"1616"})),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/howtos/redisgraphmovies/"},"Building Movies database app using RedisGraph and NodeJS")),(0,i.kt)("li",{parentName:"ul"},"Learn more about RedisGraph in the ",(0,i.kt)("a",{parentName:"li",href:"https://oss.redis.com/redisgraph/"},"Quickstart")," tutorial."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/explore/redisinsight/redisgraph"},"Query, Visualize and Manipulate Graphs using RedisGraph Browser Tool"))),(0,i.kt)("h2",{id:""}),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<img\n  src="/img/launchpad.png"\n  className="thumb"\n  loading="lazy"\n  alt="Redis Launchpad"\n/>\n')))))}h.isMDXComponent=!0},31680:function(e,a,t){a.Z=t.p+"assets/images/redisgraph_ioredisgraph_java-8123a72e86bbf34b975e397cd01deb1d.png"}}]);