if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise((async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()}))),c.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},c=(c,a)=>{Promise.all(c.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(c)};self.define=(c,d,i)=>{a[c]||(a[c]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+c.slice(1)};return Promise.all(d.map((c=>{switch(c){case"exports":return a;case"module":return r;default:return e(c)}}))).then((e=>{const c=i(...e);return a.default||(a.default=c),a}))})))}}define("./service-worker.js",["./workbox-b027a59c"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_merged_assets/_static/noscript.css",revision:"1a5e2651bf419b6261b64869ca95af04"},{url:"096b7430.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743010.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743011.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743012.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743013.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743014.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743015.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743016.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743017.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743018.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743019.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b74302.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743020.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b743021.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b74303.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b74304.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b74305.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b74306.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b74307.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b74308.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"096b74309.js",revision:"ec74730a3431c15e0adc46aeb6f12507"},{url:"2dbe227f.js",revision:"4ad8a630f214a2d1de28ca7c9bc72660"},{url:"400d78d8.js",revision:"39f2cce18037cd5f62b9f26659c7a987"},{url:"400d78d810.js",revision:"39f2cce18037cd5f62b9f26659c7a987"},{url:"400d78d811.js",revision:"39f2cce18037cd5f62b9f26659c7a987"},{url:"400d78d812.js",revision:"39f2cce18037cd5f62b9f26659c7a987"},{url:"400d78d813.js",revision:"39f2cce18037cd5f62b9f26659c7a987"},{url:"400d78d814.js",revision:"39f2cce18037cd5f62b9f26659c7a987"},{url:"400d78d815.js",revision:"39f2cce18037cd5f62b9f26659c7a987"},{url:"400d78d82.js",revision:"39f2cce18037cd5f62b9f26659c7a987"},{url:"400d78d83.js",revision:"39f2cce18037cd5f62b9f26659c7a987"},{url:"400d78d84.js",revision:"39f2cce18037cd5f62b9f26659c7a987"},{url:"400d78d85.js",revision:"39f2cce18037cd5f62b9f26659c7a987"},{url:"400d78d86.js",revision:"39f2cce18037cd5f62b9f26659c7a987"},{url:"400d78d87.js",revision:"39f2cce18037cd5f62b9f26659c7a987"},{url:"400d78d88.js",revision:"39f2cce18037cd5f62b9f26659c7a987"},{url:"400d78d89.js",revision:"39f2cce18037cd5f62b9f26659c7a987"},{url:"404.html",revision:"6b1a1a88d1af2d9d73276286dc883e34"},{url:"490f016e.css",revision:"1753244dada61e9655aa180c07b74687"},{url:"4d30c7b8.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"4d30c7b82.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"4d30c7b83.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"4d30c7b84.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"4d30c7b85.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"4d30c7b86.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"66113fa6.css",revision:"1b0655bc18c6d3c4bfd330f26d0ea6f7"},{url:"674edd8f.css",revision:"ebdaafd5c95bf5c76764e42a327faa27"},{url:"6aa23c15.js",revision:"f0a3caf357b23ed9d3bd3788c02c51f6"},{url:"6aa23c1510.js",revision:"f0a3caf357b23ed9d3bd3788c02c51f6"},{url:"6aa23c1511.js",revision:"f0a3caf357b23ed9d3bd3788c02c51f6"},{url:"6aa23c1512.js",revision:"f0a3caf357b23ed9d3bd3788c02c51f6"},{url:"6aa23c1513.js",revision:"f0a3caf357b23ed9d3bd3788c02c51f6"},{url:"6aa23c1514.js",revision:"f0a3caf357b23ed9d3bd3788c02c51f6"},{url:"6aa23c1515.js",revision:"f0a3caf357b23ed9d3bd3788c02c51f6"},{url:"6aa23c1516.js",revision:"f0a3caf357b23ed9d3bd3788c02c51f6"},{url:"6aa23c1517.js",revision:"f0a3caf357b23ed9d3bd3788c02c51f6"},{url:"6aa23c1518.js",revision:"f0a3caf357b23ed9d3bd3788c02c51f6"},{url:"6aa23c1519.js",revision:"f0a3caf357b23ed9d3bd3788c02c51f6"},{url:"6aa23c152.js",revision:"f0a3caf357b23ed9d3bd3788c02c51f6"},{url:"6aa23c1520.js",revision:"f0a3caf357b23ed9d3bd3788c02c51f6"},{url:"6aa23c1521.js",revision:"f0a3caf357b23ed9d3bd3788c02c51f6"},{url:"6aa23c153.js",revision:"f0a3caf357b23ed9d3bd3788c02c51f6"},{url:"6aa23c154.js",revision:"f0a3caf357b23ed9d3bd3788c02c51f6"},{url:"6aa23c155.js",revision:"f0a3caf357b23ed9d3bd3788c02c51f6"},{url:"6aa23c156.js",revision:"f0a3caf357b23ed9d3bd3788c02c51f6"},{url:"6aa23c157.js",revision:"f0a3caf357b23ed9d3bd3788c02c51f6"},{url:"6aa23c158.js",revision:"f0a3caf357b23ed9d3bd3788c02c51f6"},{url:"6aa23c159.js",revision:"f0a3caf357b23ed9d3bd3788c02c51f6"},{url:"81d5322c.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c10.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c11.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c12.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c13.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c14.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c15.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c16.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c17.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c18.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c2.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c3.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c4.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c5.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c6.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c7.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c8.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"81d5322c9.js",revision:"5dd5e89eac2b41c89cfe37a2b438ea9a"},{url:"936c291e.js",revision:"6945e8a03b0148165858ccf4086f65e3"},{url:"94d90def.js",revision:"f2c1c8016f3dab11281ce4c0bf98b439"},{url:"a0513237.css",revision:"a3d8fa08c801b54cf7b24db2c5e670d1"},{url:"a6a27882.js",revision:"08b0f2758ff6d207eb4a756ede11e955"},{url:"api/autocomplete/index.html",revision:"429ad27d597d453a7de4bd6c74b6ef08"},{url:"api/busy-signal/index.html",revision:"834476626e86be0ea722f6c548d37800"},{url:"api/code-actions/index.html",revision:"7f4ce375fafe7a4d4ada2bc0fb244615"},{url:"api/code-format/index.html",revision:"c157ef6c8669d27b24457681884f0911"},{url:"api/code-highlight/index.html",revision:"ddbe10b244a95f54a613f3adcf6ed0d0"},{url:"api/console/index.html",revision:"3973b0c5ab0b2b25d1aa1f32f7645f94"},{url:"api/datatip/index.html",revision:"580e87978b69eb7f6cbd2d9ce617ae0c"},{url:"api/definitions/index.html",revision:"5411fd38106fa62a38d6357c5603052c"},{url:"api/find-references/index.html",revision:"ef5a0403198ae8e662ba4e20df3ac31c"},{url:"api/hyperclick/index.html",revision:"cd7987a6dc81007412eae6f8754b7e32"},{url:"api/index.html",revision:"69257b25d737f6cf1ed38bd6827271c8"},{url:"api/linter/index.html",revision:"f5214ae2035011a8a3f613ee96e676cd"},{url:"api/main/index.html",revision:"031a5d7e8c4580c4fd119c84d1499825"},{url:"api/markdown-service/index.html",revision:"d05fe3d60a5867046ce3b117ee284a1f"},{url:"api/outline/index.html",revision:"952e656537f83f1dbd59495f43d6e648"},{url:"api/refactor/index.html",revision:"bb74b9b0d6fac5541550cc93210e70e5"},{url:"api/sig-help/index.html",revision:"8c989fc5f01cce5736860603f2266668"},{url:"api/text-edit/index.html",revision:"e986ab7f104558035ec8f9d167935c71"},{url:"api/uri/index.html",revision:"d452672d885af27e5e63b843c774098e"},{url:"b8c01bc2.css",revision:"93ea8bd0b5fbfa74d10ceb56c127a465"},{url:"c9ee07ee.js",revision:"af89c1d7838c59eabfc669c8dd09cd5f"},{url:"ec1e2d4e.js",revision:"3c43baa614ba8cd35e7223e4cd59bf5e"},{url:"ee401ad0.css",revision:"ccd2ebf5e605f3732ca3e83962c1c0f5"},{url:"getting-started/index.html",revision:"0b081dcd3daf1d5fcb481dc9db3d38be"},{url:"index.html",revision:"bdb87ed5089e52f1fdfbfa1e28e37aa3"}],{}),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
