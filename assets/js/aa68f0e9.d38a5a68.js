"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7367],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),y=o,m=d["".concat(l,".").concat(y)]||d[y]||p[y]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61804:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const i={},a=void 0,s={unversionedId:"howtos/solutions/real-time-inventory/local-inventory-search/api/inventory-search",id:"howtos/solutions/real-time-inventory/local-inventory-search/api/inventory-search",title:"inventory-search",description:"The code that follows shows an example API request and response for the inventorySearch API:",source:"@site/docs/howtos/solutions/real-time-inventory/local-inventory-search/api/inventory-search.mdx",sourceDirName:"howtos/solutions/real-time-inventory/local-inventory-search/api",slug:"/howtos/solutions/real-time-inventory/local-inventory-search/api/inventory-search",permalink:"/howtos/solutions/real-time-inventory/local-inventory-search/api/inventory-search",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/real-time-inventory/local-inventory-search/api/inventory-search.mdx",tags:[],version:"current",lastUpdatedAt:1686097580,formattedLastUpdatedAt:"Jun 7, 2023",frontMatter:{}},l={},c=[],u={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The code that follows shows an example API request and response for the ",(0,o.kt)("inlineCode",{parentName:"p"},"inventorySearch")," API:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"inventorySearch API Request")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="POST http://localhost:3000/api/inventorySearch"',title:'"POST','http://localhost:3000/api/inventorySearch"':!0},'{\n    "sku":1019688,\n    "searchRadiusInKm":500,\n    "userLocation": {\n        "latitude": 42.880230,\n        "longitude": -78.878738\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"inventorySearch API Response")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "storeId": "02_NY_ROCHESTER",\n      "storeLocation": {\n        "longitude": -77.608849,\n        "latitude": 43.156578\n      },\n      "sku": 1019688,\n      "quantity": 38\n    },\n    {\n      "storeId": "05_NY_WATERTOWN",\n      "storeLocation": {\n        "longitude": -75.910759,\n        "latitude": 43.974785\n      },\n      "sku": 1019688,\n      "quantity": 31\n    },\n    {\n      "storeId": "10_NY_POUGHKEEPSIE",\n      "storeLocation": {\n        "longitude": -73.923912,\n        "latitude": 41.70829\n      },\n      "sku": 1019688,\n      "quantity": 45\n    }\n  ],\n  "error": null\n}\n')),(0,o.kt)("p",null,"When you make a request, it goes through the API gateway to the ",(0,o.kt)("inlineCode",{parentName:"p"},"inventory service"),". Ultimately, it ends up calling an ",(0,o.kt)("inlineCode",{parentName:"p"},"inventorySearch")," function which looks as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/inventory-service.ts"',title:'"src/inventory-service.ts"'},"/**\n * Search Product in stores within search radius.\n *\n * :param _inventoryFilter: Product Id (sku), searchRadiusInKm and current userLocation\n * :return: Inventory product list\n */\nstatic async inventorySearch(_inventoryFilter: IInventoryBodyFilter): Promise<IStoresInventory[]> {\n    const nodeRedisClient = getNodeRedisClient();\n\n    const repository = StoresInventoryRepo.getRepository();\n    let retItems: IStoresInventory[] = [];\n\n    if (nodeRedisClient && repository && _inventoryFilter?.sku\n        && _inventoryFilter?.userLocation?.latitude\n        && _inventoryFilter?.userLocation?.longitude) {\n\n        const lat = _inventoryFilter.userLocation.latitude;\n        const long = _inventoryFilter.userLocation.longitude;\n        const radiusInKm = _inventoryFilter.searchRadiusInKm || 1000;\n\n        const queryBuilder = repository.search()\n            .where('sku')\n            .eq(_inventoryFilter.sku)\n            .and('quantity')\n            .gt(0)\n            .and('storeLocation')\n            .inRadius((circle) => {\n                return circle\n                    .latitude(lat)\n                    .longitude(long)\n                    .radius(radiusInKm)\n                    .kilometers\n            });\n\n        console.log(queryBuilder.query);\n        /* Sample queryBuilder query\n          ( ( (@sku:[1019688 1019688]) (@quantity:[(0 +inf]) ) (@storeLocation:[-78.878738 42.88023 500 km]) )\n        */\n\n        retItems = <IStoresInventory[]>await queryBuilder.return.all();\n\n        /* Sample command to run query directly on CLI\n          FT.SEARCH StoresInventory:index '( ( (@sku:[1019688 1019688]) (@quantity:[(0 +inf]) ) (@storeLocation:[-78.878738 42.88023 500 km]) )'\n        */\n\n\n        if (!retItems.length) {\n            throw `Product not found with in ${radiusInKm}km range!`;\n        }\n    }\n    else {\n        throw `Input params failed !`;\n    }\n    return retItems;\n}\n")))}p.isMDXComponent=!0}}]);