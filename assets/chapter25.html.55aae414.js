import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as a,e as d}from"./app.f8ee6222.js";const r={},i=d(`<h2 id="\u79FB\u52A8\u8FDB\u9636\u4E4B\u9AD8\u6548\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u79FB\u52A8\u8FDB\u9636\u4E4B\u9AD8\u6548\u5F00\u53D1" aria-hidden="true">#</a> \u79FB\u52A8\u8FDB\u9636\u4E4B\u9AD8\u6548\u5F00\u53D1</h2><h3 id="\u5A92\u4F53\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u5A92\u4F53\u67E5\u8BE2" aria-hidden="true">#</a> \u5A92\u4F53\u67E5\u8BE2</h3><p>\u4E00\u5957\u6837\u5F0F\u5F88\u96BE\u9002\u5E94\u5404\u79CD\u5927\u5C0F\u7684\u5C4F\u5E55<br> \u9488\u5BF9\u5404\u79CD\u5927\u5C0F\u7684\u5C4F\u5E55\u5199\u6837\u5F0F\uFF0C\u8BA9\u6211\u4EEC\u7684\u9875\u9762\u5728\u4E0D\u540C\u5927\u5C0F\u7684\u5C4F\u5E55\u4E0A\u90FD\u80FD\u6B63\u5E38\u663E\u793A</p><h4 id="\u5A92\u4F53\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5A92\u4F53\u7C7B\u578B" aria-hidden="true">#</a> \u5A92\u4F53\u7C7B\u578B</h4><p>all\uFF08\u6240\u6709\u8BBE\u5907 \u9ED8\u8BA4\u503C\uFF09 / screen\uFF08\u5C4F\u5E55\u8BBE\u5907\uFF09 / print\uFF08\u6253\u5370\u8BBE\u5907\uFF09 / speech\uFF08\u5C4F\u5E55\u9605\u8BFB\u5668\uFF0C\u4E00\u822C\u4F9B\u6B8B\u969C\u4EBA\u58EB\u4F7F\u7528\uFF09<br> all \u548C screen \u6BD4\u8F83\u5E38\u7528</p><pre><code>@media screen and (min-width: 320px) {
    body {
      background-color: red;
    }
}
</code></pre><h4 id="\u5A92\u4F53\u67E5\u8BE2\u4E2D\u7684\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#\u5A92\u4F53\u67E5\u8BE2\u4E2D\u7684\u903B\u8F91" aria-hidden="true">#</a> \u5A92\u4F53\u67E5\u8BE2\u4E2D\u7684\u903B\u8F91</h4><p>\u4E0E( and ) / \u6216( , ) / \u975E( not )</p><p>\u4E0E( and ) \u67E5\u8BE2\u6761\u4EF6\u5168\u90E8\u4E3A\u771F\u65F6\u751F\u6548</p><pre><code>//screen \u5E76\u4E14\u5C4F\u5E55\u5BBD\u5EA6 &gt;=320px \u4E14 &lt;= 375px
@media screen and (min-width: 320px) and (max-width: 375px) {
    body {
      background-color: red;
    }
}
</code></pre><p>\u6216( , ) \u67E5\u8BE2\u6761\u4EF6\u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A\u4E3A\u771F\u65F6\u751F\u6548</p><pre><code>//(screen \u5E76\u4E14\u5C4F\u5E55\u5BBD\u5EA6 &gt;= 375px) \u6216 (\u5C4F\u5E55\u5BBD\u5EA6 &lt;= 320px)
@media screen and (min-width: 375px), (max-width: 320px) {
    body {
      background-color: red;
    }
}
//(screen \u5E76\u4E14\u5C4F\u5E55\u5BBD\u5EA6 &gt;=375px) \u6216 (all \u5E76\u4E14\u5C4F\u5E55\u5BBD\u5EA6 &lt;= 320px)
@media screen and (min-width: 375px), all and (max-width: 320px) {
    body {
      background-color: red;
    }
}
</code></pre><p>\u975E( not ) \u5BF9\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u53D6\u53CD</p><pre><code>//\u5F53 not \u4E0E and \u540C\u65F6\u51FA\u73B0\uFF0Cnot \u5BF9\u6574\u4E2A\u5A92\u4F53\u67E5\u8BE2\u751F\u6548
//\u53D6\u53CD(screen \u5E76\u4E14\u5C4F\u5E55\u5BBD\u5EA6 &gt;=320px \u4E14 &lt;= 375px) 
@media not screen and (min-width: 320px) and (max-width: 375px) {
    body {
      background-color: red;
    }
}

//not \u4E0E\u9017\u53F7\u5206\u9694\u7684\u591A\u4E2A\u5A92\u4F53\u67E5\u8BE2\u540C\u65F6\u5B58\u5728\u65F6\uFF0Cnot \u53EA\u5BF9\u5B83\u6240\u5728\u7684\u90A3\u4E2A\u67E5\u8BE2\u751F\u6548
@media not screen and (min-width: 375px), all and (max-width: 320px) {
    body {
      background-color: red;
    }
}
</code></pre><h4 id="\u5A92\u4F53\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u5A92\u4F53\u7279\u6027" aria-hidden="true">#</a> \u5A92\u4F53\u7279\u6027</h4><p>width / max-width / min-width</p><p>-webkit-device-pixel-ratio / -webkit-max-device-pixel-ratio / -webkit-min-pixel-ratio</p><p>orientation: landscape / portrait</p><pre><code>//dpr &lt;= 2 \u4E14\u5C4F\u5E55\u6C34\u5E73\u65B9\u5411
@media (-webkit-max-device-pixel-ratio: 2) and (orientation: landscape) {
    body {
      background-color: red;
    }
}
</code></pre><h4 id="\u65AD\u70B9" tabindex="-1"><a class="header-anchor" href="#\u65AD\u70B9" aria-hidden="true">#</a> \u65AD\u70B9</h4><p>\u7ECF\u9A8C\u603B\u7ED3</p><p>Bootstrap \u7684\u65AD\u70B9</p><ul><li>xs: &lt; 576px \u8D85\u5C0F\u5C4F</li><li>sm: 576px ~ 768px \u5C0F\u5C4F</li><li>md: 768px ~ 992px \u4E2D\u5C4F</li><li>lg: 992px ~ 1200px \u5927\u5C4F</li><li>xl: &gt;= 1200px \u8D85\u5927\u5C4F</li></ul><p>\u5A92\u4F53\u67E5\u8BE2\u7684\u4E66\u5199\u4F4D\u7F6E</p><ul><li>\u6837\u5F0F\u8868\uFF08style \u6807\u7B7E\u6216\u5355\u72EC\u7684 CSS \u6587\u4EF6\uFF09\u4E2D\uFF08\u63A8\u8350\uFF09</li><li>\u6837\u5F0F\u5916\u94FE link \u4E2D\uFF08\u4E0D\u63A8\u8350\uFF09 <blockquote><p>&lt;link rel=&quot;stylesheet&quot; href=&quot;./css/mobile.css&quot; media=&quot;screen and (max-width: 768px)&quot;/&gt;</p></blockquote></li></ul>`,25),t=[i];function o(p,c){return n(),a("div",null,t)}var x=e(r,[["render",o],["__file","chapter25.html.vue"]]);export{x as default};
