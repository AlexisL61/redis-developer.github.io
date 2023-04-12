"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[550],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},50358:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),i=a(52263);const r="authorByline_VoxI",o="authorLabel_a70t",s="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:a}=(0,i.Z)(),l=a.customFields.authors;return n.createElement(n.Fragment,null,t.authors&&n.createElement("div",{className:"docAuthors"},n.createElement("hr",null),t.authors.map((e=>n.createElement("div",{key:e,className:r},n.createElement("img",{className:s,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),n.createElement("div",null,n.createElement("div",{className:o},"Author:"),n.createElement("div",null,n.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),n.createElement("hr",null)))}},31525:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905)),r=a(50358);const o={id:"index-database-migration-aws-elasticache-redis-enterprise-cloud",title:"How to migrate your database from AWS ElastiCache to Redis without any downtime",sidebar_label:"Online Data Migration from AWS Elasticache to Redis",slug:"/create/aws/import/database-migration-aws-elasticache-redis-enterprise-cloud/",authors:["ajeet"]},s=void 0,l={unversionedId:"create/aws/import/index-database-migration-aws-elasticache-redis-enterprise-cloud",id:"create/aws/import/index-database-migration-aws-elasticache-redis-enterprise-cloud",title:"How to migrate your database from AWS ElastiCache to Redis without any downtime",description:"Most of the database migration tools available today are offline in nature. They are complex and require manual intervention.",source:"@site/docs/create/aws/import/index-database-migration-aws-elasticache-redis-enterprise-cloud.mdx",sourceDirName:"create/aws/import",slug:"/create/aws/import/database-migration-aws-elasticache-redis-enterprise-cloud/",permalink:"/create/aws/import/database-migration-aws-elasticache-redis-enterprise-cloud/",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/aws/import/index-database-migration-aws-elasticache-redis-enterprise-cloud.mdx",tags:[],version:"current",lastUpdatedAt:1668100601,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"index-database-migration-aws-elasticache-redis-enterprise-cloud",title:"How to migrate your database from AWS ElastiCache to Redis without any downtime",sidebar_label:"Online Data Migration from AWS Elasticache to Redis",slug:"/create/aws/import/database-migration-aws-elasticache-redis-enterprise-cloud/",authors:["ajeet"]},sidebar:"docs",previous:{title:"Building a Real-Time Bidding Platform using NodeJS, AWS Lambda and Redis",permalink:"/create/aws/bidding-on-aws"},next:{title:"Building a Real-Time Chat application on AWS using Python and Redis",permalink:"/create/aws/chatapp"}},c={},d=[{value:"Introducing RIOT",id:"introducing-riot",level:2},{value:"Prerequisites:",id:"prerequisites",level:2},{value:"Step 1 - Setting up an Amazon EC2 instance",id:"step-1---setting-up-an-amazon-ec2-instance",level:2},{value:"Step 2 - Install the redis-cli tool",id:"step-2---install-the-redis-cli-tool",level:2},{value:"Verify the connectivity with the ElastiCache database",id:"verify-the-connectivity-with-the-elasticache-database",level:2},{value:"Step 3 - Using the RIOT migration tool",id:"step-3---using-the-riot-migration-tool",level:2},{value:"Prerequisites:",id:"prerequisites-1",level:2},{value:"Install Java",id:"install-java",level:3},{value:"Installing RIOT",id:"installing-riot",level:3},{value:"Step 4 - Migrate the data",id:"step-4---migrate-the-data",level:2},{value:"Important notes",id:"important-notes",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d};function p(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{frontMatter:o,mdxType:"Authors"}),(0,i.kt)("p",null,"Most of the database migration tools available today are offline in nature. They are complex and require manual intervention."),(0,i.kt)("p",null,"If you want to migrate your data from Amazon ElastiCache to Redis Enterprise Cloud, for example, the usual process is to back up your ElastiCache data to an Amazon S3 bucket and then import your data using the Redis Enterprise Cloud UI. This process can require painful downtime and could result in data loss. Other available techniques include creating point-in-time snapshots of the source Redis server and applying the changes to the destination servers to keep both the servers in sync. That might sound like a good approach, but it can be challenging when you have to maintain dozens of scripts to implement the migration strategy."),(0,i.kt)("p",null,"So we\u2019ve come up with a different approach:"),(0,i.kt)("h2",{id:"introducing-riot"},"Introducing RIOT"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(30412).Z,width:"1999",height:"584"})),(0,i.kt)("p",null,"RIOT is an open source online migration tool built by Julien Ruaux, a Solution Architect at Redis. RIOT implements client-side replication using a producer/consumer approach. The producer is the combination of the key and value readers that have a connection to ElastiCache. The key reader component identifies keys to be replicated using scan and keyspace notifications. For each key, the value reader component performs a DUMP and handles the resulting key+bytes to the consumer (writer), which performs a RESTORE on the Redis Enterprise connection."),(0,i.kt)("p",null,"This blog post will show how to perform a seamless online migration of databases from ElastiCache to Redis Enterprise Cloud."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites:"),(0,i.kt)("p",null,"You will require a few resources to use the migration tool:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Redis Enterprise Cloud subscription, sign up ",(0,i.kt)("a",{parentName:"li",href:"https://redis.com/try-free/"},"here")),(0,i.kt)("li",{parentName:"ul"},"Amazon ElastiCache (a primary endpoint in the case of a single-master EC and a configuration endpoint in the case of a clustered EC: Refer to Finding Connection Endpoints on the ElastiCache documentation to learn more)"),(0,i.kt)("li",{parentName:"ul"},"An Amazon EC2 instance based on Linux")),(0,i.kt)("h2",{id:"step-1---setting-up-an-amazon-ec2-instance"},"Step 1 - Setting up an Amazon EC2 instance"),(0,i.kt)("p",null,"You can either create a new EC2 instance or leverage an existing one. In our example, we will first create an instance on Amazon Web Services (AWS). The most common scenario is to access an ElastiCache cluster from an Amazon EC2 instance in the same Amazon Virtual Private Cloud (Amazon VPC). We have used Ubuntu 16.04 LTS for this setup, but you can choose the Ubuntu or Debian distribution of your choice."),(0,i.kt)("p",null,"Use SSH to connect to this new EC2 instance from your computer as shown here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ssh -i \u201cpublic key\u201d <AWS EC2 Instance>\n")),(0,i.kt)("h2",{id:"step-2---install-the-redis-cli-tool"},"Step 2 - Install the redis-cli tool"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo apt update\n# sudo apt install -y redis-tools\n")),(0,i.kt)("h2",{id:"verify-the-connectivity-with-the-elasticache-database"},"Verify the connectivity with the ElastiCache database"),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ redis-cli -h <Elasticache Primary Endpoint > -p 6379\n")),(0,i.kt)("p",null,"Command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo redis-cli -h <elasticache primary endpoint> -p 6379\n")),(0,i.kt)("p",null,"Ensure that the above command allows you to connect to the remote Redis database successfully."),(0,i.kt)("h2",{id:"step-3---using-the-riot-migration-tool"},"Step 3 - Using the RIOT migration tool"),(0,i.kt)("p",null,"Run the commands below to set up the migration tool."),(0,i.kt)("h2",{id:"prerequisites-1"},"Prerequisites:"),(0,i.kt)("h3",{id:"install-java"},"Install Java"),(0,i.kt)("p",null,"We recommended using OpenJDK 11 or later:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo add-apt-repository ppa:openjdk-r/ppa && sudo apt-get update -q && sudo apt install -y openjdk-11-jdk\n")),(0,i.kt)("h3",{id:"installing-riot"},"Installing RIOT"),(0,i.kt)("p",null,"Unzip the package and make sure the RIOT binaries are in place, as shown here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wget https://github.com/Redislabs-Solution-Architects/riot/releases/download/v2.0.8/riot-redis-2.0.8.zip\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"unzip riot-redis-2.0.8.zip\ncd riot-redis-2.0.8/bin/\n")),(0,i.kt)("p",null,"You can check the version of RIOT by running the command below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'./riot-redis --version\nRIOT version "2.0.8"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bin/riot-redis --help\nUsage: riot-redis [OPTIONS] [COMMAND]\n  -q, --quiet         Log errors only\n  -d, --debug         Log in debug mode (includes normal stacktrace)\n  -i, --info          Set log level to info\n  -h, --help          Show this help message and exit.\n  -V, --version       Print version information and exit.\nRedis connection options\n  -r, --redis=<uri>   Redis connection string (default: redis://localhost:6379)\n  -c, --cluster       Connect to a Redis Cluster\n  -m, --metrics       Show metrics\n  -p, --pool=<int>    Max pool connections (default: 8)\nCommands:\n  replicate, r  Replicate a source Redis database in a target Redis database\n  info, i       Display INFO command output\n  latency, l    Calculate latency stats\n  ping, p       Execute PING command\n")),(0,i.kt)("p",null,"Once Java and RIOT are installed, we are all set to begin the migration process with the command below, which replicates data directly from the source (ElastiCache) to the target (Redis Enterprise Cloud)."),(0,i.kt)("h2",{id:"step-4---migrate-the-data"},"Step 4 - Migrate the data"),(0,i.kt)("p",null,"Finally, it\u2019s time to replicate the data from ElastiCache to Redis Enterprise Cloud by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo ./riot-redis -r redis://<source Elasticache endpoint>:6379 replicate -r redis://password@<Redis Enterprise Cloud endpoint>:port --live\n")),(0,i.kt)("p",null,"ElastiCache can be configured in two ways: clustered and non-clustered. In the chart below, the first row shows what commands you should perform for the non-clustered scenario, while the second row shows the command for the clustered scenario with a specific database namespace:"),(0,i.kt)("p",null,"As you can see, whenever you have a clustered ElastiCache, you need to pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"\u2013cluster")," option before specifying the source ElastiCache endpoint."),(0,i.kt)("h2",{id:"important-notes"},"Important notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Perform user acceptance testing of the migration before using it in production."),(0,i.kt)("li",{parentName:"ul"},"Once the migration is complete, ensure that application traffic gets successfully redirected to the Redis Enterprise endpoint."),(0,i.kt)("li",{parentName:"ul"},"Perform the migration process during a period of low traffic to minimize the chance of data loss.")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"If you\u2019re looking for a simple and easy-to-use live migration tool that can help you move data from Amazon ElastiCache to Redis Enterprise Cloud with no downtime, RIOT is a promising option."))}p.isMDXComponent=!0},30412:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ajeet-riot-blog-1-c485eb485da7e268572402897924d564.png"}}]);