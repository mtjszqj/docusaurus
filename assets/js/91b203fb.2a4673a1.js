"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92726],{22047:(e,r,n)=>{n.d(r,{A:()=>j});var t=n(62540);n(63696);var l=n(11750),a=n(46222),o=n(36372),s=n(13111),i=n(14652),c=n(81912),u=n(37425);let d={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function p({href:e,children:r}){return(0,t.jsx)(o.A,{href:e,className:(0,l.A)("card padding--lg",d.cardContainer),children:r})}function h({href:e,icon:r,title:n,description:a}){return(0,t.jsxs)(p,{href:e,children:[(0,t.jsxs)(u.A,{as:"h2",className:(0,l.A)("text--truncate",d.cardTitle),title:n,children:[r," ",n]}),a&&(0,t.jsx)("p",{className:(0,l.A)("text--truncate",d.cardDescription),title:a,children:a})]})}function m({item:e}){var r;let n=(0,a.Nr)(e),l=function(){let{selectMessage:e}=(0,s.W)();return r=>e(r,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r}))}();return n?(0,t.jsx)(h,{href:n,icon:"\u{1F5C3}\uFE0F",title:e.label,description:null!==(r=e.description)&&void 0!==r?r:l(e.items.length)}):null}function f({item:e}){var r,n;let l=(0,i.A)(e.href)?"\u{1F4C4}\uFE0F":"\u{1F517}",o=(0,a.cC)(null!==(r=e.docId)&&void 0!==r?r:void 0);return(0,t.jsx)(h,{href:e.href,icon:l,title:e.label,description:null!==(n=e.description)&&void 0!==n?n:null==o?void 0:o.description})}function g({item:e}){switch(e.type){case"link":return(0,t.jsx)(f,{item:e});case"category":return(0,t.jsx)(m,{item:e});default:throw Error(`unknown item type ${JSON.stringify(e)}`)}}function b({className:e}){let r=(0,a.$S)();return(0,t.jsx)(j,{items:r.items,className:e})}function j(e){let{items:r,className:n}=e;if(!r)return(0,t.jsx)(b,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}({},e));let o=(0,a.d1)(r);return(0,t.jsx)("section",{className:(0,l.A)("row",n),children:o.map((e,r)=>(0,t.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,t.jsx)(g,{item:e})},r))})}},15995:(e,r,n)=>{n.d(r,{A:()=>a});var t=n(62540);n(63696);var l=n(11750);function a({children:e,hidden:r,className:n}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.A)("tabItem_pnkT",n),hidden:r,children:e})}},27446:(e,r,n)=>{n.d(r,{A:()=>x});var t=n(62540),l=n(63696),a=n(11750),o=n(7846),s=n(49519),i=n(96439),c=n(19739),u=n(66904),d=n(79244);function p(e){var r,n;return null!==(n=null===(r=l.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===r?void 0:r.filter(Boolean))&&void 0!==n?n:[]}function h({value:e,tabValues:r}){return r.some(r=>r.value===e)}var m=n(10709);function f(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}function g(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}),e}function b({className:e,block:r,selectedValue:n,selectValue:l,tabValues:s}){let i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{let r=e.currentTarget,t=s[i.indexOf(r)].value;t!==n&&(c(r),l(t))},d=e=>{var r,n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=i.indexOf(e.currentTarget)+1;t=null!==(r=i[n])&&void 0!==r?r:i[0];break}case"ArrowLeft":{let r=i.indexOf(e.currentTarget)-1;t=null!==(n=i[r])&&void 0!==n?n:i[i.length-1]}}null==t||t.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},e),children:s.map(({value:e,label:r,attributes:l})=>(0,t.jsx)("li",g(f({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>i.push(e),onKeyDown:d,onClick:u},l),{className:(0,a.A)("tabs__item","tabItem_AQgk",null==l?void 0:l.className,{"tabs__item--active":n===e}),children:null!=r?r:e}),e))})}function j({lazy:e,children:r,selectedValue:n}){let o=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){let e=o.find(e=>e.props.value===n);return e?(0,l.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:o.map((e,r)=>(0,l.cloneElement)(e,{key:r,hidden:e.props.value!==n}))})}function v(e){let r=function(e){let{defaultValue:r,queryString:n=!1,groupId:t}=e,a=function(e){let{values:r,children:n}=e;return(0,l.useMemo)(()=>{let e=null!=r?r:p(n).map(({props:{value:e,label:r,attributes:n,default:t}})=>({value:e,label:r,attributes:n,default:t}));return!function(e){let r=(0,u.XI)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,n])}(e),[o,m]=(0,l.useState)(()=>(function({defaultValue:e,tabValues:r}){var n;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let t=null!==(n=r.find(e=>e.default))&&void 0!==n?n:r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:r,tabValues:a})),[f,g]=function({queryString:e=!1,groupId:r}){let n=(0,s.W6)(),t=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:r});return[(0,c.aZ)(t),(0,l.useCallback)(e=>{var r,l;if(!t)return;let a=new URLSearchParams(n.location.search);a.set(t,e),n.replace((r=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}({},n.location),l=l={search:a.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(l)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(l)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(l,e))}),r))},[t,n])]}({queryString:n,groupId:t}),[b,j]=function({groupId:e}){let r=e?`docusaurus.tab.${e}`:null,[n,t]=(0,d.Dv)(r);return[n,(0,l.useCallback)(e=>{r&&t.set(e)},[r,t])]}({groupId:t}),v=(()=>{let e=null!=f?f:b;return h({value:e,tabValues:a})?e:null})();return(0,i.A)(()=>{v&&m(v)},[v]),{selectedValue:o,selectValue:(0,l.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);m(e),g(e),j(e)},[g,j,a]),tabValues:a}}(e);return(0,t.jsxs)("div",{className:(0,a.A)("tabs-container","tabList_Qoir"),children:[(0,t.jsx)(b,f({},r,e)),(0,t.jsx)(j,f({},r,e))]})}function x(e){let r=(0,m.A)();return(0,t.jsx)(v,g(f({},e),{children:p(e.children)}),String(r))}},13111:(e,r,n)=>{n.d(r,{W:()=>i});var t=n(63696),l=n(99468);let a=["zero","one","two","few","many","other"];function o(e){return a.filter(r=>e.includes(r))}let s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){let e=function(){let{i18n:{currentLocale:e}}=(0,l.A)();return(0,t.useMemo)(()=>{try{return function(e){let r=new Intl.PluralRules(e);return{locale:e,pluralForms:o(r.resolvedOptions().pluralCategories),select:e=>r.select(e)}}(e)}catch(r){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${r.message}
`),s}},[e])}();return{selectMessage:(r,n)=>(function(e,r,n){let t=e.split("|");if(1===t.length)return t[0];t.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);let l=n.select(r);return t[Math.min(n.pluralForms.indexOf(l),t.length-1)]})(n,r,e)}}},88917:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>t,toc:()=>p});let t=JSON.parse('{"id":"migration/index","title":"Upgrading Docusaurus","description":"Docusaurus versioning is based on the major.minor.patch scheme and respects Semantic Versioning.","source":"@site/docs/migration/index.mdx","sourceDirName":"migration","slug":"/migration","permalink":"/docs/migration","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/migration/index.mdx","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1727448384000,"frontMatter":{"slug":"/migration"},"sidebar":"docs","previous":{"title":"Client architecture","permalink":"/docs/advanced/client"},"next":{"title":"To Docusaurus v3","permalink":"/docs/migration/v3"}}');var l=n(62540),a=n(43023),o=n(27446),s=n(15995),i=n(22047);let c={slug:"/migration"},u="Upgrading Docusaurus",d={},p=[{value:"Troubleshooting upgrades",id:"troubleshooting-upgrades",level:2},{value:"Run the <code>clear</code> command",id:"run-the-clear-command",level:3},{value:"Remove <code>node_modules</code> and your lock file(s)",id:"remove-node_modules-and-your-lock-files",level:3}];function h(e){let r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.header,{children:(0,l.jsx)(r.h1,{id:"upgrading-docusaurus",children:"Upgrading Docusaurus"})}),"\n",(0,l.jsxs)(r.p,{children:["Docusaurus versioning is based on the ",(0,l.jsx)(r.code,{children:"major.minor.patch"})," scheme and respects ",(0,l.jsx)(r.a,{href:"https://semver.org/",children:(0,l.jsx)(r.strong,{children:"Semantic Versioning"})}),"."]}),"\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.strong,{children:"Breaking changes"})," are only released on major version upgrades, and thoroughly documented in the following upgrade guides."]}),"\n","\n",(0,l.jsx)(i.A,{}),"\n",(0,l.jsx)(r.h2,{id:"troubleshooting-upgrades",children:"Troubleshooting upgrades"}),"\n",(0,l.jsx)(r.p,{children:"When upgrading Docusaurus you may experience issues caused by mismatching cached dependencies - there are a few troubleshooting steps you should perform to resolve these common issues before reporting a bug or seeking support."}),"\n",(0,l.jsxs)(r.h3,{id:"run-the-clear-command",children:["Run the ",(0,l.jsx)(r.code,{children:"clear"})," command"]}),"\n",(0,l.jsx)(r.p,{children:"This CLI command is used to clear a Docusaurus site's generated assets, caches and build artifacts."}),"\n",(0,l.jsxs)(o.A,{groupId:"npm2yarn",children:[(0,l.jsx)(s.A,{value:"npm",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"npm run clear\n"})})}),(0,l.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"yarn clear\n"})})}),(0,l.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"pnpm run clear\n"})})})]}),"\n",(0,l.jsxs)(r.h3,{id:"remove-node_modules-and-your-lock-files",children:["Remove ",(0,l.jsx)(r.code,{children:"node_modules"})," and your lock file(s)"]}),"\n",(0,l.jsxs)(r.p,{children:["Remove the ",(0,l.jsx)(r.code,{children:"node_modules"})," folder and your package manager's lock file using the following:"]}),"\n",(0,l.jsxs)(o.A,{children:[(0,l.jsx)(s.A,{label:"Bash",value:"bash",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"rm -rf node_modules yarn.lock package-lock.json\n"})})}),(0,l.jsx)(s.A,{label:"PowerShell",value:"powershell",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-powershell",children:"@('node_modules','yarn.lock','package-lock.json') | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue\n"})})})]}),"\n",(0,l.jsxs)(r.p,{children:["Then reinstall packages and regenerate the ",(0,l.jsx)(r.code,{children:"lock"})," file using:"]}),"\n",(0,l.jsxs)(o.A,{groupId:"npm2yarn",children:[(0,l.jsx)(s.A,{value:"npm",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"npm install\n"})})}),(0,l.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"yarn install\n"})})}),(0,l.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"pnpm install\n"})})})]})]})}function m(e={}){let{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},43023:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>s});var t=n(63696);let l={},a=t.createContext(l);function o(e){let r=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);