import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as a,e as r}from"./app.f8ee6222.js";const t={},c=r(`<h2 id="\u5B9A\u65F6\u5668\u548C\u5EF6\u65F6\u5668" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u65F6\u5668\u548C\u5EF6\u65F6\u5668" aria-hidden="true">#</a> \u5B9A\u65F6\u5668\u548C\u5EF6\u65F6\u5668</h2><h3 id="\u5B9A\u65F6\u5668" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u65F6\u5668" aria-hidden="true">#</a> \u5B9A\u65F6\u5668</h3><p>setInterval()\u51FD\u6570\u53EF\u4EE5\u91CD\u590D\u8C03\u7528\u4E00\u4E2A\u51FD\u6570\uFF0C\u5728\u6BCF\u6B21\u8C03\u7528\u4E4B\u95F4\u5177\u6709\u56FA\u5B9A\u7684\u65F6\u95F4\u95F4\u9694</p><pre><code>setInterval(function() {
    //\u8FD9\u4E2A\u51FD\u6570\u5C06\u81EA\u52A8\u88AB\u4EE5\u56FA\u5B9A\u95F4\u9694\u65F6\u95F4\u8C03\u7528
},2000);
</code></pre><p>setInterval()\u51FD\u6570\u53EF\u4EE5\u63A5\u6536\u7B2C3\u30014.....\u4E2A\u53C2\u6570\uFF0C\u5B83\u4EEC\u5C06\u6309\u987A\u5E8F\u4F20\u5165\u51FD\u6570</p><pre><code>setInterval(function(a,b) {
    //\u5F62\u53C2a\u7684\u503C\u4E3A88\uFF0C\u5F62\u53C2b\u7684\u503C\u4E3A66
},2000\uFF0C88,66);
</code></pre><p>\u5177\u540D\u51FD\u6570\u4E5F\u53EF\u4EE5\u4F20\u5165setInterval</p><pre><code>var a = 0;
function fun(){
    console.log(++a);
}

setInterval(fun,1000);
</code></pre><h3 id="\u6E05\u695A\u5B9A\u65F6\u5668" tabindex="-1"><a class="header-anchor" href="#\u6E05\u695A\u5B9A\u65F6\u5668" aria-hidden="true">#</a> \u6E05\u695A\u5B9A\u65F6\u5668</h3><p>clearInterval()\u51FD\u6570\u53EF\u4EE5\u6E05\u9664\u4E00\u4E2A\u5B9A\u65F6\u5668</p><pre><code>// \u8BBE\u7F6E\u5B9A\u65F6\u5668\uFF0C\u5E76\u4E14\u7528timer\u53D8\u91CF\u63A5\u6536\u8FD9\u4E2A\u5B9A\u65F6\u5668
var timer = setInterval(function() {

},2000);

// \u70B9\u51FB\u6309\u94AE\u65F6\uFF0C\u6E05\u695A\u5B9A\u65F6\u5668
oBtn.onclick = function() {
    clearInterval(timer);
}
</code></pre><h3 id="\u5EF6\u65F6\u5668" tabindex="-1"><a class="header-anchor" href="#\u5EF6\u65F6\u5668" aria-hidden="true">#</a> \u5EF6\u65F6\u5668</h3><p>setTimeout()\u51FD\u6570\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E2A\u5EF6\u65F6\u5668\uFF0C\u5F53\u6307\u5B9A\u65F6\u95F4\u5230\u4E86\u4E4B\u540E\uFF0C\u4F1A\u6267\u884C\u51FD\u6570\u4E00\u6B21\uFF0C\u4E0D\u518D\u91CD\u590D\u6267\u884C</p><pre><code>setTimeout(function() {
    //\u8FD9\u4E2A\u51FD\u6570\u56DE\u57282\u79D2\u540E\u6267\u884C\u4E00\u6B21
},2000);
</code></pre><p>clearTimeout()\u51FD\u6570\u53EF\u4EE5\u6E05\u9664\u5EF6\u65F6\u5668\uFF0C\u548CclearInterval()\u975E\u5E38\u7C7B\u4F3C</p><h3 id="\u5F02\u6B65" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65" aria-hidden="true">#</a> \u5F02\u6B65</h3><p>setInterval()\u548CsetTimeout()\u662F\u4E24\u4E2A\u5F02\u6B65\u8BED\u53E5</p><p>\u5F02\u6B65 (asynchronous) : \u4E0D\u4F1A\u963B\u585ECPU\u7EE7\u7EED\u6267\u884C\u5176\u4ED6\u8BED\u53E5\u5F53\u5F02\u6B65\u5B8C\u6210\u65F6\uFF0C\u4F1A\u6267\u884C\u201C\u56DE\u8C03\u51FD\u6570(callback)</p><h3 id="\u51FD\u6570\u8282\u6D41" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u8282\u6D41" aria-hidden="true">#</a> \u51FD\u6570\u8282\u6D41</h3><p>\u51FD\u6570\u8282\u6D41:\u4E00\u4E2A\u51FD\u6570\u6267\u884C\u4E00\u6B21\u540E\uFF0C\u53EA\u6709\u5927\u4E8E\u8BBE\u5B9A\u7684\u6267\u884C\u5468\u671F\u540E\u624D\u5141\u8BB8\u6267\u884C\u7B2C\u4E8C\u6B21</p><p>\u51FD\u6570\u8282\u6D41\u975E\u5E38\u5BB9\u6613\u5B9E\u73B0\uFF0C\u53EA\u9700\u8981\u501F\u52A9setTimeout()\u5EF6\u65F6\u5668</p><pre><code>var lock = true;

function \u9700\u8981\u8282\u6D41\u7684\u51FD\u6570() {
    //\u5982\u679C\u9501\u65F6\u5173\u95ED\u72B6\u6001\uFF0C\u5219\u4E0D\u6267\u884C
    if(!lock) return;

    // \u5173\u9501
    lock = false;

    //\u6307\u5B9A\u6BEB\u79D2\u6570\u540E\u5C06\u9501\u6253\u5F00
    setTimeout(function() {
        lock = true;
    },2000);
}
</code></pre>`,22),o=[c];function i(d,h){return n(),a("div",null,o)}var p=e(t,[["render",i],["__file","chapter12.html.vue"]]);export{p as default};
