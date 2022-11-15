import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as n,e as o}from"./app.f8ee6222.js";const s={},t=o(`<h2 id="es6-promise" tabindex="-1"><a class="header-anchor" href="#es6-promise" aria-hidden="true">#</a> ES6-Promise</h2><p>Promise \u662F\u5F02\u6B65\u64CD\u4F5C\u7684\u4E00\u79CD\u89E3\u51B3\u65B9\u6848\uFF0C\u4E00\u822C\u7528\u6765\u89E3\u51B3\u5C42\u5C42\u5D4C\u5957\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u56DE\u8C03\u5730\u72F1 callback hell\uFF09\u7684\u95EE\u9898</p><p>Promise \u6709 3 \u79CD\u72B6\u6001\uFF0C\u4E00\u5F00\u59CB\u662F pending\uFF08\u672A\u5B8C\u6210\uFF09\uFF0C\u6267\u884C resolve\uFF0C\u53D8\u6210 fulfilled(resolved) =&gt; \u5DF2\u6210\u529F\uFF0C\u6267\u884C reject\uFF0C\u53D8\u6210 rejected =&gt; \u5DF2\u5931\u8D25</p><ul><li>pending \u521D\u59CB\u5316\u5F85\u5B9A\u72B6\u6001</li><li>fulfilled(resolved) \u6210\u529F\u89E3\u51B3\u72B6\u6001</li><li>rejected \u62D2\u7EDD\u72B6\u6001</li></ul><p>Promise \u7684\u72B6\u6001\u4E00\u65E6\u53D8\u5316\uFF0C\u5C31\u4E0D\u4F1A\u518D\u6539\u53D8\u4E86</p><h3 id="then\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#then\u65B9\u6CD5" aria-hidden="true">#</a> then\u65B9\u6CD5</h3><p>pending-&gt;fulfilled \u65F6\uFF0C\u6267\u884C then \u7684\u7B2C\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570<br> pending-&gt;rejected \u65F6\uFF0C\u6267\u884C then \u7684\u7B2C\u4E8C\u4E2A\u56DE\u8C03\u51FD\u6570</p><p>then \u65B9\u6CD5\u6267\u884C\u540E\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 Promise \u5BF9\u8C61<br> \u5728 then \u7684\u56DE\u8C03\u51FD\u6570\u4E2D\uFF0Creturn \u540E\u9762\u7684\u4E1C\u897F\uFF0C\u4F1A\u7528 Promise \u5305\u88C5\u4E00\u4E0B\uFF0C\u9ED8\u8BA4\u8FD4\u56DE\u7684\u6C38\u8FDC\u90FD\u662F\u6210\u529F\u72B6\u6001\u7684 Promise \u5BF9\u8C61</p><pre><code>new Promise((resolve,reject) =&gt; {
   //\u6210\u529F\u56DE\u8C03\u7ED9\u4E0B\u4E00\u4E2Athen
   resolve();
}).then(
  () =&gt; {
    console.log(&#39;success1&#39;);
    return new Promise((resolve,reject) =&gt; {
      //\u9519\u8BEF\u56DE\u8C03\u7ED9\u4E0B\u4E00\u4E2Athen
      reject();
    })
  },
  () =&gt; {
    console.log(&#39;err1&#39;);
    //\u9ED8\u8BA4\u56DE\u8C03\u7ED9\u4E0B\u4E00\u4E2Athen\u662F\u6210\u529F\uFF0C\u5E76\u4E14return\u540E\u9762\u7684\u4E1C\u897F\u4F1A\u88AB\u5305\u88C5\u6210Promise
    return undefined;
  }
).then(
  () =&gt; {
    console.log(&#39;success2&#39;);
  },
  () =&gt; {
    console.log(&#39;err2&#39;);
  }
);
</code></pre><h3 id="catch\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#catch\u65B9\u6CD5" aria-hidden="true">#</a> catch\u65B9\u6CD5</h3><p>catch \u4E13\u95E8\u7528\u6765\u5904\u7406 rejected \u72B6\u6001</p><p>catch \u672C\u8D28\u4E0A\u662F then \u7684\u7279\u4F8B\uFF1A then(null, err =&gt; {});</p><p>catch \u53EF\u4EE5\u6355\u83B7\u5B83\u524D\u9762\u7684\u9519\u8BEF\uFF0C\u4E00\u822C\u603B\u662F\u5EFA\u8BAE\uFF0CPromise \u5BF9\u8C61\u540E\u9762\u8981\u8DDF catch \u65B9\u6CD5\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5904\u7406 Promise \u5185\u90E8\u53D1\u751F\u7684\u9519\u8BEF</p><pre><code>new Promise((resolve,reject) =&gt; {
  //\u9519\u8BEF\u56DE\u8C03\u4F1A\u88ABcatch\u6355\u83B7
  reject(&#39;reason&#39;);
}).then(data =&gt; {
  console.log(&#39;success&#39;,data);
}).catch(err =&gt; {
  console.log(&#39;err&#39;,err);
});
</code></pre><h3 id="finally\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#finally\u65B9\u6CD5" aria-hidden="true">#</a> finally\u65B9\u6CD5</h3><p>Promise \u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4E0D\u8BBA\u5982\u4F55\u53D8\u5316\u90FD\u4F1A\u6267\u884C\uFF0C\u4E0D\u53D8\u5316\u4E0D\u6267\u884C</p><p>finally() \u672C\u8D28\u4E0A\u662F then() \u7684\u7279\u4F8B\uFF0C\u4F1A\u628A\u54CD\u5E94\u7684\u72B6\u6001\u539F\u6837\u8FD4\u56DE\u51FA\u53BB</p><pre><code>new Promise((resolve, reject) =&gt; {
  // resolve(123);
  reject(&#39;reason&#39;);
})
.finally(() =&gt; {
   console.log(&#39;finally&#39;)
})
.catch(err =&gt; {
  console.log(err);
});
</code></pre><h3 id="promise-resolve" tabindex="-1"><a class="header-anchor" href="#promise-resolve" aria-hidden="true">#</a> Promise.resolve</h3><p>\u662F\u6210\u529F\u72B6\u6001 Promise \u7684\u4E00\u79CD\u7B80\u5199\u5F62\u5F0F</p><pre><code>new Promise(resolve =&gt; resolve(&#39;foo&#39;));
// \u7B80\u5199
Promise.resolve(&#39;foo&#39;);
</code></pre><p>\u4F20\u9012\u53C2\u6570\uFF1A\u4E00\u822C\u53C2\u6570\u4F1A\u4E00\u6A21\u4E00\u6837\u88AB\u4F20\u9012</p><pre><code>Promise.resolve(&#39;foo&#39;).then(data =&gt; {
  console.log(data);
});
</code></pre><p>\u4F20\u9012\u53C2\u6570\uFF1APromise\u5BF9\u8C61\u65F6\uFF0C\u4F1A\u76F4\u63A5\u8FD4\u56DE\u8FD9\u4E2APromise\u5BF9\u8C61\uFF0C\u4EC0\u4E48\u90FD\u4E0D\u505A\uFF0C\u540E\u9762\u7684 then \u4F1A\u6839\u636E\u4F20\u9012\u7684 Promise \u5BF9\u8C61\u7684\u72B6\u6001\u53D8\u5316\u51B3\u5B9A\u6267\u884C\u54EA\u4E00\u4E2A\u56DE\u8C03</p><pre><code>const p1 = new Promise(resolve =&gt; {
  setTimeout(resolve, 1000, &#39;\u6211\u6267\u884C\u4E86&#39;);
  // setTimeout(() =&gt; {
  //   resolve(&#39;\u6211\u6267\u884C\u4E86&#39;);
  // }, 1000);
});
Promise.resolve(p1).then(data =&gt; {
  console.log(data);
});

// \u7B49\u4EF7\u4E8E
p1.then(data =&gt; {
  console.log(data);
});
console.log(Promise.resolve(p1) === p1);
</code></pre><p>\u4F20\u9012\u53C2\u6570\uFF1A\u5177\u6709 then \u65B9\u6CD5\u7684\u5BF9\u8C61\uFF0C\u4F1A\u6267\u884Cthen\u3002\u7279\u6B8A\u7528\u6CD5</p><pre><code>const thenable = {
  then(resolve, reject) {
    console.log(&#39;then&#39;);
    resolve(&#39;data&#39;);
    // reject(&#39;reason&#39;);
  }
};
Promise.resolve(thenable).then(
  data =&gt; console.log(data),
  err =&gt; console.log(err)
);
console.log(Promise.resolve(thenable));
</code></pre><h3 id="promise-reject" tabindex="-1"><a class="header-anchor" href="#promise-reject" aria-hidden="true">#</a> Promise.reject</h3><p>\u5931\u8D25\u72B6\u6001 Promise \u7684\u4E00\u79CD\u7B80\u5199\u5F62\u5F0F</p><pre><code>new Promise((resolve, reject) =&gt; {
  reject(&#39;reason&#39;);
});
// \u7B49\u4EF7\u4E8E
Promise.reject(&#39;reason&#39;);
</code></pre><p>\u4E0D\u7BA1\u4EC0\u4E48\u53C2\u6570\uFF0C\u90FD\u4F1A\u539F\u5C01\u4E0D\u52A8\u5730\u5411\u540E\u4F20\u9012\uFF0C\u4F5C\u4E3A\u540E\u7EED\u65B9\u6CD5\u7684\u53C2\u6570</p><h3 id="promise-all" tabindex="-1"><a class="header-anchor" href="#promise-all" aria-hidden="true">#</a> Promise.all</h3><p>Promise.all() \u5173\u6CE8\u591A\u4E2A Promise \u5BF9\u8C61\u7684\u72B6\u6001\u53D8\u5316</p><p>\u4F20\u5165\u591A\u4E2A Promise \u5B9E\u4F8B\uFF0C\u5305\u88C5\u6210\u4E00\u4E2A\u65B0\u7684 Promise \u5B9E\u4F8B\u8FD4\u56DE</p><p>Promise.all() \u7684\u72B6\u6001\u53D8\u5316\u4E0E\u6240\u6709\u4F20\u5165\u7684 Promise \u5B9E\u4F8B\u5BF9\u8C61\u72B6\u6001\u6709\u5173\uFF0C\u76F8\u5F53\u4E8E\uFF08&amp;&amp;\uFF09\u64CD\u4F5C<br> \u6240\u6709\u72B6\u6001\u90FD\u53D8\u6210 resolved\uFF0C\u6700\u7EC8\u7684\u72B6\u6001\u624D\u4F1A\u53D8\u6210 resolved<br> \u53EA\u8981\u6709\u4E00\u4E2A\u53D8\u6210 rejected\uFF0C\u6700\u7EC8\u7684\u72B6\u6001\u5C31\u53D8\u6210 rejected</p><h3 id="promise-race" tabindex="-1"><a class="header-anchor" href="#promise-race" aria-hidden="true">#</a> Promise.race</h3><p>Promise.race() \u7684\u72B6\u6001\u53D6\u51B3\u4E8E\u7B2C\u4E00\u4E2A\u5B8C\u6210\u7684 Promise \u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u5982\u679C\u7B2C\u4E00\u4E2A\u5B8C\u6210\u7684\u6210\u529F\u4E86\uFF0C\u90A3\u6700\u7EC8\u7684\u5C31\u6210\u529F\uFF1B\u5982\u679C\u7B2C\u4E00\u4E2A\u5B8C\u6210\u7684\u5931\u8D25\u4E86\uFF0C\u90A3\u6700\u7EC8\u7684\u5C31\u5931\u8D25\u3002\u7ADE\u4E89\u5B9E\u73B0\u7ED3\u679C</p><h3 id="promise-allsettled" tabindex="-1"><a class="header-anchor" href="#promise-allsettled" aria-hidden="true">#</a> Promise.allSettled</h3><p>Promise.allSettled() \u7684\u72B6\u6001\u4E0E\u4F20\u5165\u7684Promise \u72B6\u6001\u65E0\u5173\uFF0C\u6C38\u8FDC\u90FD\u662F\u6210\u529F\u7684\uFF0C\u5B83\u53EA\u4F1A\u5FE0\u5B9E\u7684\u8BB0\u5F55\u4E0B\u5404\u4E2A Promise \u7684\u8868\u73B0</p><h3 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h3><p>resolve \u6216 reject \u51FD\u6570\u6267\u884C\u540E\u7684\u4EE3\u7801\u4F1A\u6B63\u5E38\u6267\u884C<br> \u63A8\u8350\u5728\u8C03\u7528 resolve \u6216 reject \u51FD\u6570\u7684\u65F6\u5019\u52A0\u4E0A return\uFF0C\u4E0D\u518D\u6267\u884C\u5B83\u4EEC\u540E\u9762\u7684\u4EE3\u7801</p><pre><code>new Promise((resolve, reject) =&gt; {
  // return resolve(123);
  return reject(&#39;reason&#39;)     
});
</code></pre><p>Promise.all/race/allSettled \u7684\u53C2\u6570\u95EE\u9898\uFF1A<br> \u53C2\u6570\u5982\u679C\u4E0D\u662F Promise \u6570\u7EC4\uFF0C\u4F1A\u5C06\u4E0D\u662F Promise \u7684\u6570\u7EC4\u5143\u7D20\u8F6C\u53D8\u6210 Promise \u5BF9\u8C61<br> \u4E0D\u53EA\u662F\u6570\u7EC4\uFF0C\u4EFB\u4F55\u53EF\u904D\u5386\u7684\u90FD\u53EF\u4EE5\u4F5C\u4E3A\u53C2\u6570</p><pre><code>Promise.all([1, 2, 3]).then(datas =&gt; {
  console.log(datas);
});
//\u7B49\u4EF7\u4E8E
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(datas =&gt; {
  console.log(datas);
});
</code></pre>`,44),a=[t];function l(i,c){return r(),n("div",null,a)}var p=e(s,[["render",l],["__file","chapter18.html.vue"]]);export{p as default};
