!function(){"use strict";var e,c,f,a,d,b={},t={};function n(e){var c=t[e];if(void 0!==c)return c.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(f.exports,f,f.exports,n),f.loaded=!0,f.exports}n.m=b,n.c=t,e=[],n.O=function(c,f,a,d){if(!f){var b=1/0;for(i=0;i<e.length;i++){f=e[i][0],a=e[i][1],d=e[i][2];for(var t=!0,r=0;r<f.length;r++)(!1&d||b>=d)&&Object.keys(n.O).every((function(e){return n.O[e](f[r])}))?f.splice(r--,1):(t=!1,d<b&&(b=d));if(t){e.splice(i--,1);var o=a();void 0!==o&&(c=o)}}return c}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[f,a,d]},n.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(c,{a:c}),c},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var d=Object.create(null);n.r(d);var b={};c=c||[null,f({}),f([]),f(f)];for(var t=2&a&&e;"object"==typeof t&&!~c.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((function(c){b[c]=function(){return e[c]}}));return b.default=function(){return e},n.d(d,b),d},n.d=function(e,c){for(var f in c)n.o(c,f)&&!n.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:c[f]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(c,f){return n.f[f](e,c),c}),[]))},n.u=function(e){return"assets/js/"+({45:"da68fbd0",53:"935f2afb",80:"91cb17b9",142:"f90b8585",158:"4a56a20b",171:"6d156ccf",233:"c93d9ad3",237:"86842cd5",347:"aff9baa7",361:"c31147c5",364:"ec03da17",369:"001e5ac9",385:"29013e04",452:"17b7a222",501:"aad9e746",588:"e442809f",639:"535925b5",647:"06c85d7e",704:"2690ac3d",726:"3ed2e529",744:"b5a8bfb4",866:"49469bd0",888:"daecef9f",893:"135cdd4b",910:"14027285",917:"0693d764",1004:"c198a180",1119:"bc9d384b",1144:"9cb4c8ce",1240:"23fb9f30",1459:"b2e184e8",1474:"ab88e966",1512:"bc1db509",1601:"e2025eaf",1615:"80818ba7",1651:"b18a335e",1707:"bbe6ed79",1715:"0e293577",1749:"6153734e",1792:"7487b0a7",1864:"89493174",2084:"2f5b7258",2143:"b8553ba6",2163:"31cfe0f1",2167:"672a3c28",2177:"963d3718",2248:"8a1dc453",2249:"4e49bf42",2294:"14744253",2310:"02068d48",2441:"3e9ce244",2540:"f833b3c0",2704:"7138da17",2728:"b5a13296",2772:"4beaf601",2878:"dec54d1f",2964:"216ac04b",3063:"d01df0d0",3335:"adb47fc5",3412:"977e6cb2",3488:"c79014e9",3539:"98717cc9",3582:"bba37c3d",3608:"9e4087bc",3665:"1637ce6a",3695:"4f44d06f",3713:"4c436d88",3749:"a038106e",3751:"3720c009",3858:"17908ccc",3872:"3ade1b16",3947:"63bf93f5",4090:"811c1560",4121:"55960ee5",4128:"a09c2993",4140:"255c1757",4149:"9fa5cf0d",4176:"273eacc9",4229:"94595bb4",4343:"104653c0",4366:"d965b09f",4511:"662e19d1",4643:"65df3d35",4652:"e0867364",4669:"e2a0dfea",4678:"8936cf06",4710:"0055ac4a",4998:"414d1721",5105:"91fb8d53",5150:"1be10386",5157:"f161eaae",5280:"5e4e4979",5281:"bc0f8875",5282:"981cc417",5301:"6973eccd",5333:"b60a0e90",5374:"f0cfb477",5398:"9c0dbaf8",5447:"7839ce03",5499:"3628b613",5556:"ad7618a8",5561:"b9eeef81",5576:"01638ced",5616:"6f99ff55",5666:"6ac53020",5776:"932f8e72",5817:"61dcfb20",5913:"8c053a0b",5922:"bca5810b",5965:"acbe9b3e",5978:"c64997ca",6040:"457c6288",6096:"3ab50e33",6137:"1b3a9b3b",6180:"60ec77a0",6201:"5f5c8d25",6213:"2e174830",6300:"1f565990",6401:"68db487c",6495:"1c5bd2b0",6524:"71112c09",6532:"96ea9229",6568:"205374ac",6599:"3ba22fae",6644:"1452e153",6711:"6dbea44c",6733:"c7a025e3",6831:"9df14900",6972:"a6710203",7059:"a2d399dd",7061:"b7a47a32",7190:"84fcd296",7309:"109bae49",7348:"d5733254",7392:"f37e4849",7442:"8800fe90",7451:"597040e7",7468:"ae17180c",7476:"7ac60c84",7496:"a7fc2154",7516:"dcec8102",7579:"6eddb3c7",7633:"a4f4a92a",7759:"33744549",7847:"300f4a0f",7910:"c9f891c9",7918:"17896441",7922:"ebc4e8c6",7959:"cf9923dc",7982:"6c5fab8e",8011:"7776a642",8033:"fceb3869",8036:"ecb7f075",8117:"061a34e5",8194:"8513aa73",8319:"77a07f8e",8416:"d5935102",8434:"cb3ff2c4",8448:"194936bc",8461:"faa54b10",8463:"e6d13da3",8467:"588692c2",8515:"483c5cd4",8611:"d63f6fbe",8634:"296b09cf",8680:"3283033c",8749:"30801268",8762:"af004250",8786:"18973a6d",8845:"fde7150e",8889:"7fce6f2e",8942:"8e2589cb",8992:"2e1b2728",9021:"1dc2d6ff",9064:"73c51c2c",9102:"4382f69c",9196:"260c24bb",9244:"9a1ed90f",9264:"1fdf2673",9300:"48057268",9360:"71e03ff7",9470:"de7243ca",9473:"3ceec7c0",9514:"1be78505",9735:"4ba7e5a3",9748:"d9a4b074",9806:"5e310d09",9835:"bb732a52",9871:"7ca4ff6e",9921:"734881e8",9985:"09fcac42"}[e]||e)+"."+{45:"bf70908a",53:"12f0533f",80:"871c26c0",142:"aa8841c0",158:"c282a0a1",171:"09fdc4ae",233:"4256c058",237:"c9acc8d7",347:"3b9090ca",361:"d74fd355",364:"5d649d99",369:"568c9131",385:"b99a37a9",452:"82785c18",501:"07f3c53d",588:"fbd37e46",639:"9b7bb1b5",647:"db50b4e1",704:"b878ffd2",726:"21a4b4c2",744:"36088b13",866:"14138f5d",888:"896e7ae5",893:"7c3f4844",910:"5881f3c0",917:"da83a24b",1004:"5c36b4d0",1119:"45c99f4a",1144:"7b9d0dca",1240:"4e08900d",1459:"cb8a5d2b",1474:"155320ad",1512:"6016f909",1601:"c4316d6c",1615:"b355f05e",1651:"e05c463f",1707:"fb00d9e2",1715:"0e6f8b02",1749:"4dff3026",1792:"5cbf4307",1864:"111bc56c",2084:"c8da0384",2143:"3797510a",2163:"54beeff8",2167:"804e1855",2177:"991d2fd8",2248:"baa6637f",2249:"28d994ce",2294:"986bd7c7",2310:"57578948",2441:"37ea89da",2540:"07e0e729",2704:"bd8f52f7",2728:"cbae657d",2772:"b62b3079",2878:"e40e72c4",2964:"27b53757",3063:"542fda1b",3335:"04c45882",3412:"1cf02547",3488:"0ae83846",3539:"06efbf3a",3582:"66543768",3608:"a8ce4c6c",3665:"f420f987",3695:"1bd5695f",3713:"be0309b9",3749:"dcc2219b",3751:"71d0e2b7",3858:"1466478d",3872:"dc5dab2a",3947:"66773eb3",4090:"bfec0d06",4121:"6e0079f3",4128:"5d0569a7",4140:"2b612976",4149:"58cee568",4176:"82409727",4229:"d792b40b",4343:"e0994cf2",4366:"3794e14d",4511:"5c83f23d",4608:"39032163",4643:"de249dac",4652:"30c925ba",4669:"1561bdba",4678:"04204c33",4710:"d32f8038",4998:"e904e57f",5105:"1e6eef39",5150:"115f8ca1",5157:"10d5cc74",5280:"eca5a0b4",5281:"b25c785d",5282:"0cbc70e5",5301:"f93c7ed4",5333:"160869b5",5374:"fac9b345",5398:"4f4ce066",5447:"64665d40",5499:"ba3bedd7",5556:"c9d0ee3e",5561:"4f754369",5576:"c152bb3e",5616:"526b43d1",5666:"193ccdcd",5776:"82e2f29b",5817:"eac6e508",5913:"e3bf1d2b",5922:"444399d8",5965:"5a0132e0",5978:"87f10cde",6040:"03f86a18",6096:"cdbff341",6137:"bce424f5",6159:"d6b26721",6180:"35e5eb94",6201:"6bed2a87",6213:"d0353490",6300:"83e2418c",6401:"e64037eb",6495:"d7b650de",6524:"f2a5e7c8",6532:"5dc6d7c8",6568:"ed83721e",6599:"0390649f",6644:"e9e8e979",6698:"36fe3723",6711:"3c7d6496",6733:"0ae2d07d",6831:"d1f3f277",6972:"979b8b50",7059:"bfb88a8b",7061:"db65cc19",7190:"5deda936",7309:"9928152b",7348:"c89ed609",7392:"e8d9fadd",7442:"86d42f32",7451:"c18ef869",7468:"4a8dc27e",7476:"be26d70a",7496:"ea059607",7516:"23dffb5d",7579:"1f1c74ad",7633:"9c2a512a",7759:"2b1b04b0",7847:"d9e412c4",7910:"bdb2a3d5",7918:"9e81220b",7922:"d625a3e7",7959:"c9343723",7982:"c61d509a",8011:"5a563738",8033:"afb5bfae",8036:"24733ae8",8117:"d70157d2",8194:"de7d3442",8319:"16449c48",8416:"67659e87",8434:"50155d04",8448:"ad9ef562",8461:"ffe81133",8463:"c07457c6",8467:"4d0b5dbf",8515:"b3aa59e6",8611:"81ad8daa",8624:"15ff4ab0",8634:"6c32d61c",8680:"ac815669",8749:"c6ef5447",8762:"e2a39b02",8786:"46f21a69",8845:"302f1891",8889:"b77db3e0",8942:"88712648",8992:"cea9df4d",9021:"3850c6a2",9064:"4a9f833c",9102:"cc7178b8",9196:"35329dee",9244:"5716d3b1",9264:"67c192a0",9300:"00863aa9",9360:"04bd3747",9470:"a264337f",9473:"d468f914",9514:"4b3d3986",9735:"0c8ff414",9748:"97fc1e31",9806:"7f1fec11",9835:"699549e6",9871:"f36a1a37",9921:"bf37c9c8",9985:"71b86bf2"}[e]+".js"},n.miniCssF=function(e){return"assets/css/styles.a314a5da.css"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},a={},d="obsidian-plugin-docs:",n.l=function(e,c,f,b){if(a[e])a[e].push(c);else{var t,r;if(void 0!==f)for(var o=document.getElementsByTagName("script"),i=0;i<o.length;i++){var u=o[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==d+f){t=u;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",d+f),t.src=e),a[e]=[c];var s=function(c,f){t.onerror=t.onload=null,clearTimeout(l);var d=a[e];if(delete a[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((function(e){return e(f)})),c)return c(f)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=s.bind(null,t.onerror),t.onload=s.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},n.p="/obsidian-plugin-docs/",n.gca=function(e){return e={14027285:"910",14744253:"2294",17896441:"7918",30801268:"8749",33744549:"7759",48057268:"9300",89493174:"1864",da68fbd0:"45","935f2afb":"53","91cb17b9":"80",f90b8585:"142","4a56a20b":"158","6d156ccf":"171",c93d9ad3:"233","86842cd5":"237",aff9baa7:"347",c31147c5:"361",ec03da17:"364","001e5ac9":"369","29013e04":"385","17b7a222":"452",aad9e746:"501",e442809f:"588","535925b5":"639","06c85d7e":"647","2690ac3d":"704","3ed2e529":"726",b5a8bfb4:"744","49469bd0":"866",daecef9f:"888","135cdd4b":"893","0693d764":"917",c198a180:"1004",bc9d384b:"1119","9cb4c8ce":"1144","23fb9f30":"1240",b2e184e8:"1459",ab88e966:"1474",bc1db509:"1512",e2025eaf:"1601","80818ba7":"1615",b18a335e:"1651",bbe6ed79:"1707","0e293577":"1715","6153734e":"1749","7487b0a7":"1792","2f5b7258":"2084",b8553ba6:"2143","31cfe0f1":"2163","672a3c28":"2167","963d3718":"2177","8a1dc453":"2248","4e49bf42":"2249","02068d48":"2310","3e9ce244":"2441",f833b3c0:"2540","7138da17":"2704",b5a13296:"2728","4beaf601":"2772",dec54d1f:"2878","216ac04b":"2964",d01df0d0:"3063",adb47fc5:"3335","977e6cb2":"3412",c79014e9:"3488","98717cc9":"3539",bba37c3d:"3582","9e4087bc":"3608","1637ce6a":"3665","4f44d06f":"3695","4c436d88":"3713",a038106e:"3749","3720c009":"3751","17908ccc":"3858","3ade1b16":"3872","63bf93f5":"3947","811c1560":"4090","55960ee5":"4121",a09c2993:"4128","255c1757":"4140","9fa5cf0d":"4149","273eacc9":"4176","94595bb4":"4229","104653c0":"4343",d965b09f:"4366","662e19d1":"4511","65df3d35":"4643",e0867364:"4652",e2a0dfea:"4669","8936cf06":"4678","0055ac4a":"4710","414d1721":"4998","91fb8d53":"5105","1be10386":"5150",f161eaae:"5157","5e4e4979":"5280",bc0f8875:"5281","981cc417":"5282","6973eccd":"5301",b60a0e90:"5333",f0cfb477:"5374","9c0dbaf8":"5398","7839ce03":"5447","3628b613":"5499",ad7618a8:"5556",b9eeef81:"5561","01638ced":"5576","6f99ff55":"5616","6ac53020":"5666","932f8e72":"5776","61dcfb20":"5817","8c053a0b":"5913",bca5810b:"5922",acbe9b3e:"5965",c64997ca:"5978","457c6288":"6040","3ab50e33":"6096","1b3a9b3b":"6137","60ec77a0":"6180","5f5c8d25":"6201","2e174830":"6213","1f565990":"6300","68db487c":"6401","1c5bd2b0":"6495","71112c09":"6524","96ea9229":"6532","205374ac":"6568","3ba22fae":"6599","1452e153":"6644","6dbea44c":"6711",c7a025e3:"6733","9df14900":"6831",a6710203:"6972",a2d399dd:"7059",b7a47a32:"7061","84fcd296":"7190","109bae49":"7309",d5733254:"7348",f37e4849:"7392","8800fe90":"7442","597040e7":"7451",ae17180c:"7468","7ac60c84":"7476",a7fc2154:"7496",dcec8102:"7516","6eddb3c7":"7579",a4f4a92a:"7633","300f4a0f":"7847",c9f891c9:"7910",ebc4e8c6:"7922",cf9923dc:"7959","6c5fab8e":"7982","7776a642":"8011",fceb3869:"8033",ecb7f075:"8036","061a34e5":"8117","8513aa73":"8194","77a07f8e":"8319",d5935102:"8416",cb3ff2c4:"8434","194936bc":"8448",faa54b10:"8461",e6d13da3:"8463","588692c2":"8467","483c5cd4":"8515",d63f6fbe:"8611","296b09cf":"8634","3283033c":"8680",af004250:"8762","18973a6d":"8786",fde7150e:"8845","7fce6f2e":"8889","8e2589cb":"8942","2e1b2728":"8992","1dc2d6ff":"9021","73c51c2c":"9064","4382f69c":"9102","260c24bb":"9196","9a1ed90f":"9244","1fdf2673":"9264","71e03ff7":"9360",de7243ca:"9470","3ceec7c0":"9473","1be78505":"9514","4ba7e5a3":"9735",d9a4b074:"9748","5e310d09":"9806",bb732a52:"9835","7ca4ff6e":"9871","734881e8":"9921","09fcac42":"9985"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(c,f){var a=n.o(e,c)?e[c]:void 0;if(0!==a)if(a)f.push(a[2]);else if(/^(1303|532)$/.test(c))e[c]=0;else{var d=new Promise((function(f,d){a=e[c]=[f,d]}));f.push(a[2]=d);var b=n.p+n.u(c),t=new Error;n.l(b,(function(f){if(n.o(e,c)&&(0!==(a=e[c])&&(e[c]=void 0),a)){var d=f&&("load"===f.type?"missing":f.type),b=f&&f.target&&f.target.src;t.message="Loading chunk "+c+" failed.\n("+d+": "+b+")",t.name="ChunkLoadError",t.type=d,t.request=b,a[1](t)}}),"chunk-"+c,c)}},n.O.j=function(c){return 0===e[c]};var c=function(c,f){var a,d,b=f[0],t=f[1],r=f[2],o=0;if(b.some((function(c){return 0!==e[c]}))){for(a in t)n.o(t,a)&&(n.m[a]=t[a]);if(r)var i=r(n)}for(c&&c(f);o<b.length;o++)d=b[o],n.o(e,d)&&e[d]&&e[d][0](),e[b[o]]=0;return n.O(i)},f=self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[];f.forEach(c.bind(null,0)),f.push=c.bind(null,f.push.bind(f))}()}();