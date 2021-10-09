"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[2772],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8100:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={},s="FileManager",c={unversionedId:"api/classes/FileManager",id:"api/classes/FileManager",isDocsHomePage:!1,title:"FileManager",description:"Manage the creation, deletion and renaming of files from the UI.",source:"@site/docs/api/classes/FileManager.md",sourceDirName:"api/classes",slug:"/api/classes/FileManager",permalink:"/obsidian-plugin-docs/api/classes/FileManager",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/classes/FileManager.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ExtraButtonComponent",permalink:"/obsidian-plugin-docs/api/classes/ExtraButtonComponent"},next:{title:"FileSystemAdapter",permalink:"/obsidian-plugin-docs/api/classes/FileSystemAdapter"}},u=[{value:"Methods",id:"methods",children:[{value:"getNewFileParent",id:"getnewfileparent",children:[]},{value:"renameFile",id:"renamefile",children:[]},{value:"generateMarkdownLink",id:"generatemarkdownlink",children:[]}]}],p={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"filemanager"},"FileManager"),(0,i.kt)("p",null,"Manage the creation, deletion and renaming of files from the UI."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"getnewfileparent"},"getNewFileParent"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"getNewFileParent(sourcePath: string): TFolder;\n")),(0,i.kt)("p",null,"Gets the folder that new files should be saved to, given the user's preferences."),(0,i.kt)("h3",{id:"renamefile"},"renameFile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"renameFile(file: TAbstractFile, newPath: string): Promise<void>;\n")),(0,i.kt)("p",null,"Rename or move a file safely, and update all links to it depending on the user's preferences."),(0,i.kt)("h3",{id:"generatemarkdownlink"},"generateMarkdownLink"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"generateMarkdownLink(file: TFile, sourcePath: string, subpath?: string, alias?: string): string;\n")),(0,i.kt)("p",null,"Generate a markdown link based on the user's preferences."))}d.isMDXComponent=!0}}]);