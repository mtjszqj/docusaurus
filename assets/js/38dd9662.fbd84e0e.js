"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49751],{7673:(e,t,n)=>{n.d(t,{A:()=>r});let r=n.p+"assets/images/social-card-7e038d19ea67c686e90e1f599f7256d0.png"},15995:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(62540);n(63696);var s=n(11750);function a({children:e,hidden:t,className:n}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)("tabItem_pnkT",n),hidden:t,children:e})}},27446:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(62540),s=n(63696),a=n(11750),o=n(7846),i=n(49519),l=n(96439),c=n(19739),u=n(66904),d=n(79244);function h(e){var t,n;return null!==(n=null===(t=s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function p({value:e,tabValues:t}){return t.some(t=>t.value===e)}var g=n(10709);function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}function m(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function f({className:e,block:t,selectedValue:n,selectValue:s,tabValues:i}){let l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{let t=e.currentTarget,r=i[l.indexOf(t)].value;r!==n&&(c(t),s(r))},d=e=>{var t,n;let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=l.indexOf(e.currentTarget)+1;r=null!==(t=l[n])&&void 0!==t?t:l[0];break}case"ArrowLeft":{let t=l.indexOf(e.currentTarget)-1;r=null!==(n=l[t])&&void 0!==n?n:l[l.length-1]}}null==r||r.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},e),children:i.map(({value:e,label:t,attributes:s})=>(0,r.jsx)("li",m(b({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>l.push(e),onKeyDown:d,onClick:u},s),{className:(0,a.A)("tabs__item","tabItem_AQgk",null==s?void 0:s.className,{"tabs__item--active":n===e}),children:null!=t?t:e}),e))})}function j({lazy:e,children:t,selectedValue:n}){let o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){let e=o.find(e=>e.props.value===n);return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))})}function x(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,a=function(e){let{values:t,children:n}=e;return(0,s.useMemo)(()=>{let e=null!=t?t:h(n).map(({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r}));return!function(e){let t=(0,u.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[o,g]=(0,s.useState)(()=>(function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let r=null!==(n=t.find(e=>e.default))&&void 0!==n?n:t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:a})),[b,m]=function({queryString:e=!1,groupId:t}){let n=(0,i.W6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,c.aZ)(r),(0,s.useCallback)(e=>{var t,s;if(!r)return;let a=new URLSearchParams(n.location.search);a.set(r,e),n.replace((t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({},n.location),s=s={search:a.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(s)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}),t))},[r,n])]}({queryString:n,groupId:r}),[f,j]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[n,r]=(0,d.Dv)(t);return[n,(0,s.useCallback)(e=>{t&&r.set(e)},[t,r])]}({groupId:r}),x=(()=>{let e=null!=b?b:f;return p({value:e,tabValues:a})?e:null})();return(0,l.A)(()=>{x&&g(x)},[x]),{selectedValue:o,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);g(e),m(e),j(e)},[m,j,a]),tabValues:a}}(e);return(0,r.jsxs)("div",{className:(0,a.A)("tabs-container","tabList_Qoir"),children:[(0,r.jsx)(f,b({},t,e)),(0,r.jsx)(j,b({},t,e))]})}function y(e){let t=(0,g.A)();return(0,r.jsx)(x,m(b({},e),{children:h(e.children)}),String(t))}},70361:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(62540);n(63696);var s=n(11750);let a="dot_giz1",o="bar_rrRL";function i({children:e,minHeight:t,url:n="http://localhost:3000",style:i,bodyStyle:l}){var c,u;return(0,r.jsxs)("div",{className:"browserWindow_my1Q",style:(c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({},i),u=u={minHeight:t},Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(u)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(u)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(u,e))}),c),children:[(0,r.jsxs)("div",{className:"browserWindowHeader_jXSR",children:[(0,r.jsxs)("div",{className:"buttons_uHc7",children:[(0,r.jsx)("span",{className:a,style:{background:"#f25f58"}}),(0,r.jsx)("span",{className:a,style:{background:"#fbbe3c"}}),(0,r.jsx)("span",{className:a,style:{background:"#58cb42"}})]}),(0,r.jsx)("div",{className:(0,s.A)("browserWindowAddressBar_Pd8y","text--truncate"),children:n}),(0,r.jsx)("div",{className:"browserWindowMenuIcon_Vhuh",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:o}),(0,r.jsx)("span",{className:o}),(0,r.jsx)("span",{className:o})]})})]}),(0,r.jsx)("div",{className:"browserWindowBody_Idgs",style:l,children:e})]})}},53940:(e,t,n)=>{n.d(t,{A:()=>r});let r=n.p+"assets/images/social-card-7e038d19ea67c686e90e1f599f7256d0.png"},11537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>r,toc:()=>h});var r=n(55142),s=n(62540),a=n(43023),o=n(70361),i=n(27446),l=n(15995);let c={title:"Docusaurus 2.3",authors:["slorber"],tags:["release"],image:"./img/social-card.png",date:new Date("2023-01-27T00:00:00.000Z")},u=void 0,d={image:n(7673).A,authorsImageUrls:[void 0]},h=[{value:"Highlights",id:"highlights",level:2},{value:"Google Tag Manager plugin",id:"google-tag-manager-plugin",level:3},{value:"Tabs Query String Support",id:"tabs-query-string-support",level:3},{value:"Nested admonitions",id:"nested-admonitions",level:3},{value:"Blog <code>createFeedItems</code>",id:"blog-createfeeditems",level:3},{value:"Translations",id:"translations",level:3},{value:"Other changes",id:"other-changes",level:2}];function p(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["We are happy to announce ",(0,s.jsx)(t.strong,{children:"Docusaurus 2.3"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The upgrade should be easy: as explained in our ",(0,s.jsx)(t.a,{href:"/community/release-process",children:"release process documentation"}),", minor versions respect ",(0,s.jsx)(t.a,{href:"https://semver.org/",children:"Semantic Versioning"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Docusaurus 2.2 social card",src:n(53940).A+"",width:"1200",height:"600"})}),"\n",(0,s.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,s.jsx)(t.h3,{id:"google-tag-manager-plugin",children:"Google Tag Manager plugin"}),"\n",(0,s.jsx)(t.p,{children:"Google Tag Manager is a tag management system that allows great flexibility. It enables analytics and marketing teams to easily load other third-party trackers and fire analytics tags."}),"\n",(0,s.jsxs)(t.p,{children:["We now have a ",(0,s.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-tag-manager/",children:(0,s.jsx)(t.code,{children:"@docusaurus/plugin-google-tag-manager"})})," package that you can use alongside or as an alternative to the existing ",(0,s.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag/",children:"gtag.js plugin"})," (refer to ",(0,s.jsx)(t.a,{href:"https://support.google.com/tagmanager/answer/7582054",children:"this doc"})," to understand when to use which solution)."]}),"\n",(0,s.jsxs)(t.admonition,{title:"Google is sunsetting Universal Analytics",type:"warning",children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://blog.google/products/marketingplatform/analytics/prepare-for-future-with-google-analytics-4/",children:"Google will sunset its Universal Analytics"})," on ",(0,s.jsx)(t.strong,{children:"July 1, 2023"}),", and ask users to migrate to ",(0,s.jsx)(t.strong,{children:"Google Analytics 4"}),"."]}),(0,s.jsxs)(t.p,{children:["Therefore, we are also ",(0,s.jsxs)(t.strong,{children:["deprecating our existing ",(0,s.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-analytics",children:(0,s.jsx)(t.code,{children:"@docusaurus/plugin-google-analytics"})})]})," package. Docusaurus users should create a new Google Analytics 4 property, and migrate to the ",(0,s.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag/",children:"gtag.js plugin"}),", or the ",(0,s.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-tag-manager/",children:"Google Tag Manager plugin"}),". Refer to the ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/issues/7221",children:"dedicated Docusaurus issue"})," for details and questions."]})]}),"\n",(0,s.jsx)(t.h3,{id:"tabs-query-string-support",children:"Tabs Query String Support"}),"\n",(0,s.jsxs)(t.p,{children:["It is now possible to link a selected tab to a query string parameter. When a tab is selected, it will be stored in your browser URL as a ",(0,s.jsx)(t.code,{children:"?qs-param=tab-value"})," search parameter."]}),"\n",(0,s.jsx)(t.p,{children:"This feature allows deep-linking to a specific documentation tab that will pre-selected on page load."}),"\n",(0,s.jsxs)(t.p,{children:["When used alongside the ",(0,s.jsx)(t.code,{children:"groupId"})," prop, the query string tab value takes precedence over the ",(0,s.jsx)(t.code,{children:"localStorage"})," value."]}),"\n",(0,s.jsxs)(t.p,{children:["Make sure to check the ",(0,s.jsx)(t.a,{href:"/docs/markdown-features/tabs#query-string",children:"documentation"})," and the demo below to understand how it works:"]}),"\n","\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'<Tabs groupId="current-os" queryString>\n  <TabItem value="android" label="Android">\n    Android\n  </TabItem>\n  <TabItem value="ios" label="iOS">\n    iOS\n  </TabItem>\n</Tabs>\n'})}),"\n",(0,s.jsx)(o.A,{children:(0,s.jsxs)(i.A,{groupId:"current-os",queryString:!0,children:[(0,s.jsx)(l.A,{value:"android",label:"Android",children:(0,s.jsx)(t.p,{children:"Android"})}),(0,s.jsx)(l.A,{value:"ios",label:"iOS",children:(0,s.jsx)(t.p,{children:"iOS"})})]})}),"\n",(0,s.jsx)(t.h3,{id:"nested-admonitions",children:"Nested admonitions"}),"\n",(0,s.jsx)(t.p,{children:"It is now possible to nest one admonition within another by adding extra colons for the outer/enclosing admonition:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-md",children:"::::tip[nested admonitions]\n\nYou can now nest one admonition within another!\n\n:::danger\n\nUse this sparingly when it makes sense.\n\n:::\n\n::::\n"})}),"\n",(0,s.jsxs)(t.admonition,{title:"nested admonitions",type:"tip",children:[(0,s.jsx)(t.p,{children:"You can now nest one admonition within another!"}),(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsx)(t.p,{children:"Use this sparingly when it makes sense."})})]}),"\n",(0,s.jsxs)(t.h3,{id:"blog-createfeeditems",children:["Blog ",(0,s.jsx)(t.code,{children:"createFeedItems"})]}),"\n",(0,s.jsxs)(t.p,{children:["A new blog plugin option ",(0,s.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-blog/#CreateFeedItemsFn",children:(0,s.jsx)(t.code,{children:"feedOptions.createFeedItems"})})," gives you more control over the RSS/Atom feed generation. It is now possible to transform/filter/limit feed items through a new callback."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:'title="docusaurus.config.js"',children:"[\n  '@docusaurus/preset-classic',\n  {\n    blog: {\n      feedOptions: {\n        // highlight-start\n        createFeedItems: async (params) => {\n          const {blogPosts, defaultCreateFeedItems, ...rest} = params;\n          return defaultCreateFeedItems({\n            // keep only the 10 most recent blog posts in the feed\n            blogPosts: blogPosts.filter((item, index) => index < 10),\n            ...rest,\n          });\n        },\n        // highlight-end\n      },\n    },\n  },\n];\n"})}),"\n",(0,s.jsx)(t.h3,{id:"translations",children:"Translations"}),"\n",(0,s.jsx)(t.p,{children:"We added or completed the default theme translation support for multiple languages:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\u{1F1F8}\u{1F1EE} ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8541",children:"#8541"})," Slovenian"]}),"\n",(0,s.jsxs)(t.li,{children:["\u{1F1F9}\u{1F1F7} ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8289",children:"#8289"})," Turkish"]}),"\n",(0,s.jsxs)(t.li,{children:["\u{1F1EE}\u{1F1F7} ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8406",children:"#8406"})," Farsi"]}),"\n",(0,s.jsxs)(t.li,{children:["\u{1F1F5}\u{1F1F1} ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8525",children:"#8525"})," Polish"]}),"\n",(0,s.jsxs)(t.li,{children:["\u{1F1E8}\u{1F1F3} ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8423",children:"#8423"})," Chinese"]}),"\n",(0,s.jsxs)(t.li,{children:["\u{1F1F8}\u{1F1EA} ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8312",children:"#8312"})," Swedish"]}),"\n",(0,s.jsxs)(t.li,{children:["\u{1F1FB}\u{1F1F3} ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8450",children:"#8450"})," Vietnamese"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Completing theme translations is an ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/issues/3526",children:"ongoing effort"})," and an easy way to contribute to Docusaurus. We add new theme features regularly, for which we often ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/issues/3526",children:"need new translations"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,s.jsx)(t.p,{children:"Other notable changes include:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8463",children:"#8463"})," and ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8328",children:"#8328"}),": fix some annoying Docusaurus layout issues"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8539",children:"#8539"}),": Algolia plugin ",(0,s.jsx)(t.code,{children:"options.searchPagePath"})," should be correctly applied to search modal footer"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8462",children:"#8462"}),": Algolia plugin now makes it easier to transform displayed search results with custom logic"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/8397",children:"#8397"}),": the ",(0,s.jsx)(t.code,{children:"deploy"})," CLI now understands git url ",(0,s.jsx)(t.code,{children:"insteadOf"})," config"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Check the ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"/changelog/2.3.0",children:"2.3.0 changelog entry"})})," for an exhaustive list of changes."]})]})}function g(e={}){let{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},43023:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(63696);let s={},a=r.createContext(s);function o(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}},55142:e=>{e.exports=JSON.parse('{"permalink":"/blog/releases/2.3","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/releases/2.3/index.mdx","source":"@site/blog/releases/2.3/index.mdx","title":"Docusaurus 2.3","description":"We are happy to announce Docusaurus 2.3.","date":"2023-01-27T00:00:00.000Z","tags":[{"inline":false,"label":"Release","permalink":"/blog/tags/release","description":"Blog posts about Docusaurus\' new releases"}],"readingTime":2.89,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer, This Week In React editor","url":"https://thisweekinreact.com","page":{"permalink":"/blog/authors/slorber"},"description":"A freelance React and React-Native developer near Paris and Docusaurus maintainer. Also runs ThisWeekInReact.com, a newsletter to stay updated with the React ecosystem.\\n","socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"title":"Docusaurus 2.3","authors":["slorber"],"tags":["release"],"image":"./img/social-card.png","date":"2023-01-27T00:00:00.000Z"},"unlisted":false,"lastUpdatedAt":1727448384000,"lastUpdatedBy":"dependabot[bot]","prevItem":{"title":"Docusaurus 2.4","permalink":"/blog/releases/2.4"},"nextItem":{"title":"Docusaurus 2.2","permalink":"/blog/releases/2.2"}}')}}]);