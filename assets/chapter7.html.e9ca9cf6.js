import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as r,e as n}from"./app.f8ee6222.js";const a={},i=n(`<h2 id="css3\u8FC7\u6E21\u4E0E\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#css3\u8FC7\u6E21\u4E0E\u52A8\u753B" aria-hidden="true">#</a> CSS3\u8FC7\u6E21\u4E0E\u52A8\u753B</h2><h3 id="\u8FC7\u5EA6\u7684\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u5EA6\u7684\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u8FC7\u5EA6\u7684\u57FA\u672C\u4F7F\u7528</h3><p>transition\u8FC7\u6E21\u5C5E\u6027\u662FCSS3\u6D53\u58A8\u91CD\u5F69\u7684\u7279\u6027,\u8FC7\u6E21\u53EF\u4EE5\u4E3A\u4E00\u4E2A\u5143\u7D20\u5728\u4E0D\u540C\u6837\u5F0F\u4E4B\u95F4\u53D8\u5316\u81EA\u52A8\u6DFB\u52A0\u201C\u8865\u95F4\u52A8\u753B\u201D\u3002<br> \u8FC7\u6E21\u4ECEIE16\u5F00\u59CB\u517C\u5BB9,\u79FB\u52A8\u7AEF\u517C\u5BB9\u826F\u597D<br> \u66FE\u51E0\u4F55\u65F6,\u7F51\u9875\u4E0A\u7684\u52A8\u753B\u7279\u6548\u57FA\u672C\u90FD\u662F\u7531JavaScript\u5B9A\u65F6\u5668\u5B9E\u73B0\u7684,\u73B0\u5728\u9010\u6B65\u6539\u4E3A\u4F7F\u7528CSS3\u8FC7\u6E21<br> \u4F18\u70B9\uFF1A\u52A8\u753B\u66F4\u7EC6\u817B\uFF0C\u5185\u5B58\u5F00\u9500\u5C0F</p><p>transition\u5C5E\u6027\u67094\u4E2A\u8981\u7D20</p><pre><code>transition: width 1s linear 8s;
</code></pre><p>transition: \u8FC7\u5EA6\u5C5E\u6027 \u52A8\u753B\u65F6\u957F\uFF08\u79D2\uFF09 \u53D8\u5316\u901F\u5EA6\u66F2\u7EBF \u5EF6\u8FDF\u65F6\u95F4</p><p>\u6240\u6709\u6570\u503C\u7C7B\u578B\u7684\u5C5E\u6027,\u90FD\u53EF\u4EE5\u53C2\u4E0E\u8FC7\u6E21,\u6BD4\u5982width\u3001height\u3001left\u3001top\u3001border-radius\u3002<br> \u80CC\u666F\u989C\u8272\u548C\u6587\u5B57\u989C\u8272\u90FD\u53EF\u4EE5\u88AB\u8FC7\u6E21<br> \u6240\u6709\u53D8\u5F62(\u5305\u62EC2D\u548C3D)\u90FD\u80FD\u88AB\u8FC7\u6E21<br> \u5982\u679C\u8981\u6240\u6709\u5C5E\u6027\u90FD\u53C2\u4E0E\u8FC7\u6E21,\u53EF\u4EE5\u5199all</p><p>\u8FC7\u6E21\u7684\u56DB\u4E2A\u5C0F\u5C5E\u6027</p><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u610F\u4E49</th></tr></thead><tbody><tr><td style="text-align:center;">transition-property</td><td style="text-align:center;">\u54EA\u4E9B\u5C5E\u6027\u8981\u8FC7\u6E21</td></tr><tr><td style="text-align:center;">transition-duration</td><td style="text-align:center;">\u52A8\u753B\u65F6\u95F4</td></tr><tr><td style="text-align:center;">transition-timing-function</td><td style="text-align:center;">\u52A8\u753B\u53D8\u5316\u66F2\u7EBF\uFF08\u7F13\u52A8\u6548\u679C\uFF09</td></tr><tr><td style="text-align:center;">transition-delay</td><td style="text-align:center;">\u5EF6\u8FDF\u65F6\u95F4</td></tr></tbody></table><h3 id="\u8FC7\u5EA6\u7F13\u52A8\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u5EA6\u7F13\u52A8\u6548\u679C" aria-hidden="true">#</a> \u8FC7\u5EA6\u7F13\u52A8\u6548\u679C</h3><p>transition\u7684\u7B2C\u4E09\u4E2A\u53C2\u6570\u5C31\u662F\u7F13\u52A8\u53C2\u6570,\u4E5F\u662F\u53D8\u5316\u901F\u5EA6\u66F2\u7EBF</p><ul><li>ease \u89C4\u5B9A\u8FC7\u6E21\u6548\u679C\uFF0C\u5148\u7F13\u6162\u5730\u5F00\u59CB\uFF0C\u7136\u540E\u52A0\u901F\uFF0C\u7136\u540E\u7F13\u6162\u5730\u7ED3\u675F\uFF08\u9ED8\u8BA4\uFF09</li><li>linear \u89C4\u5B9A\u4ECE\u5F00\u59CB\u5230\u7ED3\u675F\u5177\u6709\u76F8\u540C\u901F\u5EA6\u7684\u8FC7\u6E21\u6548\u679C</li><li>ease-in \u89C4\u5B9A\u7F13\u6162\u5F00\u59CB\u7684\u8FC7\u6E21\u6548\u679C</li><li>ease-out \u89C4\u5B9A\u7F13\u6162\u7ED3\u675F\u7684\u8FC7\u6E21\u6548\u679C</li><li>ease-in-out \u89C4\u5B9A\u7F13\u6162\u7ED3\u675F\u7684\u8FC7\u6E21\u6548\u679C</li><li>cubic-bezier(n,n,n,n) \u5141\u8BB8\u60A8\u5728\u4E09\u6B21\u8D1D\u585E\u5C14\u51FD\u6570\u4E2D\u5B9A\u4E49\u81EA\u5DF1\u7684\u503C</li></ul><h3 id="\u8D1D\u585E\u5C14\u66F2\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u8D1D\u585E\u5C14\u66F2\u7EBF" aria-hidden="true">#</a> \u8D1D\u585E\u5C14\u66F2\u7EBF</h3><p>\u7F51\u7AD9https://cubic-bezier.com/\u53EF\u4EE5\u751F\u6210\u8D1D\u585E\u5C14\u66F2\u7EBF\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u52A8\u753B\u7F13\u52A8\u53C2\u6570</p><h3 id="\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B" aria-hidden="true">#</a> \u52A8\u753B</h3><p>\u53EF\u4EE5\u4F7F\u7528@keyframes\u6765\u5B9A\u4E49\u52A8\u753B,keyframes\u8868\u793A\u201C\u5173\u952E\u5E27\u201D,\u5728\u9879\u76EE\u4E0A\u7EBF\u524D,\u8981\u8865\u4E0A@-webkit-\u8FD9\u6837\u7684\u79C1\u6709\u524D\u7F00</p><pre><code>@keyframes r {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
</code></pre><p>\u5B9A\u4E49\u52A8\u753B\u4E4B\u540E,\u5C31\u53EF\u4EE5\u4F7F\u7528animation\u5C5E\u6027\u8C03\u7528\u52A8\u753B</p><pre><code>animation: r 1s linear 0s;
</code></pre><p>\u7B2C\u4E94\u4E2A\u53C2\u6570\u5C31\u662F\u52A8\u753B\u7684\u6267\u884C\u6B21\u6570</p><pre><code>animation: r 1s linear 0s 3;
</code></pre><p>\u5982\u679C\u60F3\u6C38\u8FDC\u6267\u884C\u53EF\u4EE5\u5199infinite</p><pre><code>animations: r 1s linear 0s infinite;
</code></pre><p>\u5982\u679C\u60F3\u8BA9\u52A8\u753B\u7684\u7B2C2\u30014\u30016...(\u5076\u6570\u6B21)\u81EA\u52A8\u9006\u5411\u6267\u884C,\u90A3\u4E48\u8981\u52A0\u4E0Aalternate\u53C2\u6570\u5373\u53EF</p><pre><code>animation: movelr 2s linear 0s infinite alternate;
</code></pre><p>\u5982\u679C\u60F3\u8BA9\u52A8\u753B\u505C\u6B62\u5728\u6700\u540E\u7ED3\u675F\u72B6\u6001,\u90A3\u4E48\u8981\u52A0\u4E0Aforwards</p><pre><code>animation: changeToCircle 1s linear 0s forwards;
</code></pre><p>\u591A\u5173\u952E\u5E27\u52A8\u753B</p><pre><code>@keyframes changeColor {
    0% {
        background-color: red;
    }
    20% {
        background-color: yellow;
    }
    40% {
        background-color: blue;
    }
    60% {
        background-color: green;
    }
    80% {
        background-color: purple;
    }
    100% {
        background-color: orange;
    }
}
</code></pre>`,29),o=[i];function d(c,l){return t(),r("div",null,o)}var h=e(a,[["render",d],["__file","chapter7.html.vue"]]);export{h as default};
