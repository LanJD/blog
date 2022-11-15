import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as a,e as r}from"./app.f8ee6222.js";const n={},p=r(`<h2 id="es6-module" tabindex="-1"><a class="header-anchor" href="#es6-module" aria-hidden="true">#</a> ES6-Module</h2><p>\u6A21\u5757\uFF1A\u4E00\u4E2A\u4E00\u4E2A\u7684\u5C40\u90E8\u4F5C\u7528\u57DF\u7684\u4EE3\u7801\u5757</p><p>\u6A21\u5757\u7CFB\u7EDF\u9700\u8981\u89E3\u51B3\u7684\u4E3B\u8981\u95EE\u9898<br> \u2460 \u6A21\u5757\u5316\u7684\u95EE\u9898<br> \u2461 \u6D88\u9664\u5168\u5C40\u53D8\u91CF<br> \u2462 \u7BA1\u7406\u52A0\u8F7D\u987A\u5E8F</p><p>\u4E00\u4E2A\u6A21\u5757\u6CA1\u6709\u5BFC\u51FA\uFF0C\u4E5F\u53EF\u4EE5\u5C06\u5176\u5BFC\u5165\uFF0C\u88AB\u5BFC\u5165\u7684\u4EE3\u7801\u90FD\u4F1A\u6267\u884C\u4E00\u904D\uFF0C\u4E5F\u4EC5\u4F1A\u6267\u884C\u4E00\u904D</p><h3 id="export-default" tabindex="-1"><a class="header-anchor" href="#export-default" aria-hidden="true">#</a> export default</h3><p>\u4E00\u4E2A\u6A21\u5757\u53EA\u80FD\u6709\u4E00\u4E2A export default\uFF0C\u5BFC\u5165\u65F6\u53EF\u4EE5\u968F\u4FBF\u8D77\u540D</p><pre><code>// ./home.js
const age =18;
export default age;

// ./index.js
import age from &#39;./home.js&#39;;
cosole.log(age);
</code></pre><h3 id="export" tabindex="-1"><a class="header-anchor" href="#export" aria-hidden="true">#</a> export</h3><p>\u4E0D\u80FD\u968F\u610F\u547D\u540D</p><p>export \u58F0\u660E\u6216\u8BED\u53E5</p><pre><code>// ./home.js
export const age = 18;

const name = \u2018\u5C0F\u660E\u2019;
export { name };

// ./index.js
import { name,age } from &#39;./home.js&#39;;
cosole.log(name,age); 
</code></pre><p>\u5BFC\u51FA\u5BFC\u5165\u65F6\u8D77\u522B\u540D</p><pre><code>export { fn as func, className, age };
import { func, age, className as Person } from &#39;./module.js&#39;;
</code></pre><p>\u6574\u4F53\u5BFC\u5165\uFF0C\u4F1A\u5BFC\u5165\u6240\u6709\u8F93\u51FA\uFF0C\u5305\u62EC\u901A\u8FC7 export default \u5BFC\u51FA\u7684</p><pre><code>export { fn as func, className, age };
import * as obj from &#39;./module.js&#39;;
</code></pre><p>\u540C\u65F6\u5BFC\u5165\uFF0C\u4E00\u5B9A\u662F export default \u7684\u5728\u524D</p><pre><code>export { fn as func, className, age };
export default 18;

import age2, { func, age, className } from &#39;./module.js&#39;; // \u221A
import { func, age, className },age2 from &#39;./module.js&#39;; // \xD7
</code></pre><h3 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h3><p>\u6A21\u5757\u4E2D\uFF0C\u9876\u5C42\u7684 this \u6307\u5411 undefined</p><p>import \u547D\u4EE4\u5177\u6709\u63D0\u5347\u6548\u679C\uFF0C\u4F1A\u63D0\u5347\u5230\u6574\u4E2A\u6A21\u5757\u7684\u5934\u90E8\uFF0C\u7387\u5148\u6267\u884C\uFF0Cimport \u6267\u884C\u7684\u65F6\u5019\uFF0C\u4EE3\u7801\u8FD8\u6CA1\u6267\u884C</p><p>import \u548C export \u547D\u4EE4\u53EA\u80FD\u5728\u6A21\u5757\u7684\u9876\u5C42\uFF0C\u4E0D\u80FD\u5728\u4EE3\u7801\u5757\u4E2D\u6267\u884C\uFF0C\u4F46\u662Fimport() \u53EF\u4EE5\u6309\u6761\u4EF6\u5BFC\u5165</p><p>\u5BFC\u5165\u5BFC\u51FA\u7684\u590D\u5408\u5199\u6CD5</p><pre><code>//\u590D\u5408\u5199\u6CD5\u5BFC\u51FA\u7684\uFF0C\u65E0\u6CD5\u5728\u5F53\u524D\u6A21\u5757\u4E2D\u4F7F\u7528
export { age } from &#39;./module.js&#39;;
console.log(age);

//\u7B49\u4EF7\u4E8E
import { age } from &#39;./module.js&#39;;
export { age } from &#39;./module.js&#39;;
console.log(age);
</code></pre>`,23),t=[p];function s(d,c){return o(),a("div",null,t)}var i=e(n,[["render",s],["__file","chapter20.html.vue"]]);export{i as default};
