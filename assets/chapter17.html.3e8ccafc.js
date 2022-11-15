import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as o,e as a}from"./app.f8ee6222.js";const r={},c=a(`<h2 id="es6\u8BED\u6CD5\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#es6\u8BED\u6CD5\u6269\u5C55" aria-hidden="true">#</a> ES6\u8BED\u6CD5\u6269\u5C55</h2><h3 id="\u5269\u4F59\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5269\u4F59\u53C2\u6570" aria-hidden="true">#</a> \u5269\u4F59\u53C2\u6570</h3><p>\u5269\u4F59\u53C2\u6570\u6C38\u8FDC\u662F\u4E2A\u6570\u7EC4\uFF0C\u5373\u4F7F\u6CA1\u6709\u503C\uFF0C\u4E5F\u662F\u7A7A\u6570\u7EC4</p><pre><code>const add = (x, y, z, ...args) =&gt; {};
</code></pre><p>\u7BAD\u5934\u51FD\u6570\u7684\u53C2\u6570\u90E8\u5206\u5373\u4F7F\u53EA\u6709\u4E00\u4E2A\u5269\u4F59\u53C2\u6570\uFF0C\u4E5F\u4E0D\u80FD\u7701\u7565\u5706\u62EC\u53F7\uFF0C\u4F7F\u7528\u5269\u4F59\u53C2\u6570\u66FF\u4EE3 arguments \u83B7\u53D6\u5B9E\u9645\u53C2\u6570</p><pre><code>const add = (...args) =&gt; {};
</code></pre><p>\u5269\u4F59\u53C2\u6570\u53EA\u80FD\u662F\u6700\u540E\u4E00\u4E2A\u53C2\u6570\uFF0C\u4E4B\u540E\u4E0D\u80FD\u518D\u6709\u5176\u4ED6\u53C2\u6570\uFF0C\u5426\u5219\u4F1A\u62A5\u9519</p><p>\u5269\u4F59\u53C2\u6570\u4E0D\u4E00\u5B9A\u975E\u8981\u4F5C\u4E3A\u51FD\u6570\u53C2\u6570\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u4E0E\u89E3\u6784\u8D4B\u503C\u7ED3\u5408\u4F7F\u7528\uFF0C\u5E76\u4E14\u5FC5\u987B\u662F\u6700\u540E\u4E00\u4E2A</p><pre><code>const [num, ...args] = [1, 2, 3, 4];
console.log(num, args);

const func = ([num, ...args]) =&gt; {};
func([1, 2, 3]);

const { x, y, ...z } = { a: 3, x: 1, y: 2, b: 4 };
console.log(x, y, z);

const func = ({ x, y, ...z }) =&gt; {};
func({ a: 3, x: 1, y: 2, b: 4 });
</code></pre><h3 id="\u6570\u7EC4\u7684\u5C55\u5F00\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u7684\u5C55\u5F00\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u6570\u7EC4\u7684\u5C55\u5F00\u8FD0\u7B97\u7B26</h3><p>\u6570\u7EC4\u5C55\u5F00\u8FD0\u7B97\u7B26\u7684\u57FA\u672C\u7528\u6CD5</p><pre><code>console.log(Math.min(...[3, 1, 2]));
//\u76F8\u5F53\u4E8E
//console.log(Math.min(3, 1, 2));
</code></pre><p>\u590D\u5236\u6570\u7EC4</p><pre><code>const a = [1, 2];
const c = [...a];
</code></pre><p>\u5408\u5E76\u6570\u7EC4</p><pre><code>const a = [1, 2];
const b = [3];
const c = [4, 5];
console.log([...a, ...b, ...c]);
</code></pre><p>\u5B57\u7B26\u4E32\u8F6C\u4E3A\u6570\u7EC4</p><pre><code>console.log([...&#39;alex&#39;]);
</code></pre><p>\u5E38\u89C1\u7684\u7C7B\u6570\u7EC4\u8F6C\u5316\u4E3A\u6570\u7EC4</p><pre><code>  //arguments
  function func() {
    console.log([...arguments]);
  }
  func(1, 2);

  // NodeList
  console.log(document.querySelectorAll(&#39;p&#39;));
  console.log([...document.querySelectorAll(&#39;p&#39;)].push); //\u53D8\u6210\u6570\u7EC4\uFF0C\u6709\u6570\u7EC4\u65B9\u6CD5
</code></pre><h3 id="\u5BF9\u8C61\u7684\u5C55\u5F00\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7684\u5C55\u5F00\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u5BF9\u8C61\u7684\u5C55\u5F00\u8FD0\u7B97\u7B26</h3><p>\u5BF9\u8C61\u7684\u5C55\u5F00\uFF1A\u628A\u5C5E\u6027\u7F57\u5217\u51FA\u6765\uFF0C\u7528\u9017\u53F7\u5206\u9694\uFF0C\u653E\u5230\u4E00\u4E2A {} \u4E2D\uFF0C\u6784\u6210\u65B0\u5BF9\u8C61</p><pre><code>const apple = {
   color: &#39;\u7EA2\u8272&#39;,
   shape: &#39;\u7403\u5F62&#39;,
   taste: &#39;\u751C&#39;
};
console.log({...apple});
</code></pre><p>\u5408\u5E76\u5BF9\u8C61\u65F6\uFF0C\u65B0\u5BF9\u8C61\u62E5\u6709\u5168\u90E8\u5C5E\u6027\uFF0C\u76F8\u540C\u5C5E\u6027\uFF0C\u540E\u8005\u8986\u76D6\u524D\u8005</p><p>\u5982\u679C\u5C55\u5F00\u4E00\u4E2A\u7A7A\u5BF9\u8C61\uFF0C\u5219\u6CA1\u6709\u4EFB\u4F55\u6548\u679C</p><p>\u5982\u679C\u5C55\u5F00\u7684\u4E0D\u662F\u5BF9\u8C61\uFF0C\u5219\u4F1A\u81EA\u52A8\u5C06\u5176\u8F6C\u4E3A\u5BF9\u8C61\uFF0C\u518D\u5C06\u5176\u5C5E\u6027\u7F57\u5217\u51FA\u6765</p><pre><code>console.log({ ...1 }); // {}
console.log({ ...undefined }); // {}
console.log({ ...null });  // {}
console.log({ ...true }); // {}
</code></pre><p>\u5982\u679C\u5C55\u5F00\u8FD0\u7B97\u7B26\u540E\u9762\u662F\u5B57\u7B26\u4E32\uFF0C\u5B83\u4F1A\u81EA\u52A8\u8F6C\u6210\u4E00\u4E2A\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61\uFF0C\u56E0\u6B64\u8FD4\u56DE\u7684\u4E0D\u662F\u7A7A\u5BF9\u8C61</p><pre><code>console.log({ ...&#39;alex&#39; });
</code></pre><p>\u5982\u679C\u5C55\u5F00\u8FD0\u7B97\u7B26\u540E\u9762\u662F\u6570\u7EC4\uFF0C\u548C\u5B57\u7B26\u4E32\u7C7B\u4F3C</p><pre><code>console.log({ ...[1, 2, 3] });
</code></pre><p>\u4E0D\u4F1A\u5C55\u5F00\u5BF9\u8C61\u4E2D\u7684\u5BF9\u8C61\u5C5E\u6027\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u5408\u5E76\u5BF9\u8C61\u4E2D\u5BF9\u8C61\u7684\u5C5E\u6027\u503C</p><p>\u5E94\u75281\uFF1A\u590D\u5236\u5BF9\u8C61</p><pre><code>const a = { x: 1, y: 2 };
const c = { ...a };
</code></pre><p>\u5E94\u75282\uFF1A\u7528\u6237\u53C2\u6570\u548C\u9ED8\u8BA4\u53C2\u6570</p><pre><code>const logUser = userParam =&gt; {
    const defaultParam = {
      username: &#39;ZhangSan&#39;,
      age: 0,
      sex: &#39;male&#39;
    };
    const param = { ...defaultParam, ...userParam };
    const { username, age, sex } = { ...defaultParam, ...userParam }; //\u89E3\u6784\u8D4B\u503C
    console.log(username, age, sex);
  };
logUser();
logUser({username: &#39;Xiaoming&#39;});
</code></pre><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h3><p>Set \u662F\u4E00\u7CFB\u5217\u65E0\u5E8F\u3001\u6CA1\u6709\u91CD\u590D\u503C\u7684\u6570\u636E\u96C6\u5408</p><pre><code>  const s = new Set();
  s.add(1);
  s.add(2);
  console.log(s);
</code></pre><p>add\u65B9\u6CD5\uFF0C\u6DFB\u52A0\u6210\u5458\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8FDE\u7F00\u5199\u6CD5</p><pre><code> s.add(1).add(2).add(3);
</code></pre><p>has\u65B9\u6CD5\uFF0C\u5224\u65AD\u662F\u5426\u6709\u67D0\u6210\u5458</p><pre><code> console.log(s.has(1));
</code></pre><p>delete\u65B9\u6CD5\uFF0C\u5220\u9664\u6307\u5B9A\u6210\u5458</p><pre><code> s.delete(1);
 //\u4F7F\u7528 delete \u5220\u9664\u4E0D\u5B58\u5728\u7684\u6210\u5458\uFF0C\u4EC0\u4E48\u90FD\u4E0D\u4F1A\u53D1\u751F\uFF0C\u4E5F\u4E0D\u4F1A\u62A5\u9519
 s.delete(19);
</code></pre><p>clear\u65B9\u6CD5\uFF0C\u6E05\u7A7A\u6210\u5458</p><pre><code> s.clear();
</code></pre><p>forEach\u65B9\u6CD5\u904D\u5386\uFF0C\u6309\u7167\u6210\u5458\u6DFB\u52A0\u8FDB\u96C6\u5408\u7684\u987A\u5E8F\u904D\u5386</p><pre><code>s.forEach(function(value,key,set){
    //Set \u4E2D\uFF0Cvalue == key
    console.log(value,key,set);
},document);
</code></pre><p>size\u5C5E\u6027</p><pre><code>let size = s.size;
</code></pre><p>Set \u6784\u9020\u51FD\u6570\u7684\u53C2\u6570</p><p>\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\u53EF\u4EE5\u6709\uFF0C\u6570\u7EC4\u3001\u5B57\u7B26\u4E32\u3001arguments\u3001NodeList\u3001Set \u7B49</p><pre><code>const s1 = new Set([1, 2, 1]);
const s2 = new Set(&#39;hello&#39;);
const s3 = new Set(document.querySelectorAll(&#39;p&#39;));
const s4 = new Set(new Set([1,2,3,6]));
function func(){
    const s5 = new Set(arguments);
}
func(1,2,1);
</code></pre><p>Set \u5BF9\u91CD\u590D\u503C\u7684\u5224\u65AD\u57FA\u672C\u9075\u5FAA\u4E25\u683C\u76F8\u7B49\uFF08===\uFF09<br> \u4F46\u662F\u5BF9\u4E8E NaN \u7684\u5224\u65AD\u4E0E === \u4E0D\u540C\uFF0CSet \u4E2D NaN \u7B49\u4E8E NaN</p><p>\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528 Set</p><ul><li>\u6570\u7EC4\u6216\u5B57\u7B26\u4E32\u53BB\u91CD\u65F6</li><li>\u4E0D\u9700\u8981\u901A\u8FC7\u4E0B\u6807\u8BBF\u95EE\uFF0C\u53EA\u9700\u8981\u904D\u5386\u65F6</li><li>\u4E3A\u4E86\u4F7F\u7528 Set \u63D0\u4F9B\u7684\u65B9\u6CD5\u548C\u5C5E\u6027\u65F6\uFF08add delete clear has forEach size \u7B49\uFF09</li></ul><p>\u5E94\u75281\uFF1A\u6570\u7EC4\u53BB\u91CD</p><pre><code>console.log([...new Set([1, 2, 1])]);
</code></pre><p>\u5E94\u75282\uFF1A\u5B57\u7B26\u4E32\u53BB\u91CD</p><pre><code>console.log([...new Set(&#39;abbacbd&#39;)].join(&#39;&#39;));
</code></pre><p>\u5E94\u75283\uFF1A\u5B58\u653E DOM \u5143\u7D20</p><pre><code>const s = new Set(document.querySelectorAll(&#39;p&#39;));
s.forEach(function(v){
    v.style.color = &#39;red&#39;;
})
</code></pre><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h3><p>Map \u548C\u5BF9\u8C61\u90FD\u662F\u952E\u503C\u5BF9\u7684\u96C6\u5408</p><p>Map \u548C\u5BF9\u8C61\u7684\u533A\u522B:<br> \u5BF9\u8C61\u4E00\u822C\u7528\u5B57\u7B26\u4E32\u5F53\u4F5C\u952E<br> \u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF1A\u6570\u5B57\u3001\u5B57\u7B26\u4E32\u3001\u5E03\u5C14\u503C\u3001undefined\u3001null\uFF0C\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF1A\u5BF9\u8C61\uFF08[]\u3001{}\u3001\u51FD\u6570\u3001Set\u3001Map \u7B49\uFF09\u3002\u4EE5\u4E0A\u90FD\u53EF\u4EE5\u4F5C\u4E3A Map \u7684\u952E</p><p>set\u65B9\u6CD5\uFF0C\u6DFB\u52A0\u6210\u5458\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8FDE\u7F00\u5199\u6CD5\uFF0C \u4F7F\u7528 set \u6DFB\u52A0\u7684\u65B0\u6210\u5458\uFF0C\u952E\u5982\u679C\u5DF2\u7ECF\u5B58\u5728\uFF0C\u540E\u6DFB\u52A0\u7684\u952E\u503C\u5BF9\u8986\u76D6\u5DF2\u6709\u7684</p><pre><code>const map = new Map();
map.set(&#39;age&#39;,18).set(true,&#39;true&#39;);
</code></pre><p>get\u65B9\u6CD5\u83B7\u53D6\u6307\u5B9A\u6210\u5458\uFF0Cget \u83B7\u53D6\u4E0D\u5B58\u5728\u7684\u6210\u5458\uFF0C\u8FD4\u56DE undefined</p><pre><code>cosole.log(map.get(&#39;age&#39;));
cosole.log(map.get(true));
</code></pre><p>has\u65B9\u6CD5\uFF0C\u5224\u65AD\u662F\u5426\u6709\u67D0\u6210\u5458</p><pre><code>console.log(map.has(&#39;age&#39;)); //true
</code></pre><p>delete\u65B9\u6CD5\uFF0C\u5220\u9664\u6307\u5B9A\u6210\u5458\uFF0C\u4F7F\u7528 delete \u5220\u9664\u4E0D\u5B58\u5728\u7684\u6210\u5458\uFF0C\u4EC0\u4E48\u90FD\u4E0D\u4F1A\u53D1\u751F\uFF0C\u4E5F\u4E0D\u4F1A\u62A5\u9519</p><pre><code>map.delete(&#39;age&#39;);
</code></pre><p>clear\u65B9\u6CD5\uFF0C\u6E05\u7A7A\u6210\u5458</p><pre><code>map.clear();
</code></pre><p>forEach\u65B9\u6CD5\u904D\u5386</p><pre><code>map.forEach(function(value,key,map){
    console.log(value,key,map)
});
</code></pre><p>size\u5C5E\u6027</p><pre><code>let size = map.size;
</code></pre><p>Map \u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\u6709\u54EA\u4E9B</p><p>\u4F20\u5165\u6570\u7EC4</p><p>\u53EA\u80FD\u4F20\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u800C\u4E14\u5FC5\u987B\u4F53\u73B0\u51FA\u952E\u548C\u503C</p><pre><code>console.log(new Map([
    [&#39;name&#39;, &#39;alex&#39;],
    [&#39;age&#39;, 18]
]));
</code></pre><p>\u4F20\u5165Set\u3001Map \u7B49</p><p>Set \u4E2D\u4E5F\u5FC5\u987B\u4F53\u73B0\u51FA\u952E\u548C\u503C</p><pre><code>const s = new Set([
  [&#39;name&#39;, &#39;alex&#39;],
  [&#39;age&#39;, 18]
]);
console.log(new Map(s));
console.log(s);

// \u590D\u5236\u4E86\u4E00\u4E2A\u65B0\u7684 Map
const m1 = new Map([
   [&#39;name&#39;, &#39;alex&#39;],
   [&#39;age&#39;, 18]
]);
console.log(m1);
const m2 = new Map(m1);
console.log(m2, m2 === m1);
</code></pre><p>Map\u4E2D\u5982\u4F55\u5224\u65AD\u952E\u503C\u5BF9\u662F\u5426\u76F8\u540C</p><p>\u57FA\u672C\u9075\u5FAA\u4E25\u683C\u76F8\u7B49\uFF08===\uFF09<br> \u4F8B\u5916\u5C31\u662F NaN\uFF0CMap \u4E2D NaN \u4E5F\u662F\u7B49\u4E8E NaN</p><p>\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528 Map</p><p>\u5982\u679C\u53EA\u662F\u9700\u8981 key -&gt; value \u7684\u7ED3\u6784\uFF0C\u6216\u8005\u9700\u8981\u5B57\u7B26\u4E32\u4EE5\u5916\u7684\u503C\u505A\u952E\uFF0C\u4F7F\u7528 Map \u66F4\u5408\u9002</p><h3 id="\u904D\u5386\u5668\u4E0Efor-of\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386\u5668\u4E0Efor-of\u5FAA\u73AF" aria-hidden="true">#</a> \u904D\u5386\u5668\u4E0Efor...of\u5FAA\u73AF</h3><p>Iterator\uFF1A\u904D\u5386\u5668\uFF08\u8FED\u4EE3\u5668\uFF09</p><pre><code>const it = [1, 2][Symbol.iterator]();
console.log(it.next()); // {value: 1, done: false}
console.log(it.next()); // {value: 2, done: false}
console.log(it.next()); // {value: undefined, done: true}
console.log(it.next()); // {value: undefined, done: true}
</code></pre><p>Symbol.iterator\uFF08\u53EF\u904D\u5386\u5BF9\u8C61\u7684\u751F\u6210\u65B9\u6CD5\uFF09 -&gt; it\uFF08\u53EF\u904D\u5386\u5BF9\u8C61\uFF09 -&gt; it.next() -&gt; it.next() -&gt; ...\uFF08\u76F4\u5230 done \u4E3A true\uFF09</p><p>for...of \u7684\u7528\u6CD5</p><pre><code>const arr = [1,2,3,4,5,6,7,8]
for(const item of arr){
    console.log(item);
}
</code></pre><p>for...of \u5FAA\u73AF\u53EA\u4F1A\u904D\u5386\u51FA\u90A3\u4E9B done \u4E3A false \u65F6\uFF0C\u5BF9\u5E94\u7684 value \u503C</p><p>\u53EF\u4EE5\u4E0E break\u3001continue \u4E00\u8D77\u4F7F\u7528</p><p>\u5728 for...of \u4E2D\u53D6\u5F97\u6570\u7EC4\u7684\u7D22\u5F15</p><p>keys() \u5F97\u5230\u7684\u662F\u7D22\u5F15\u7684\u53EF\u904D\u5386\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u904D\u5386\u51FA\u7D22\u5F15\u503C</p><pre><code>const arr = [1,2,3,4,5,6,7,8]
for (const key of arr.keys()) {
    console.log(key);
}
</code></pre><p>values() \u5F97\u5230\u7684\u662F\u503C\u7684\u53EF\u904D\u5386\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u904D\u5386\u51FA\u503C</p><pre><code>for (const value of arr.values()) {
    console.log(value);
}
</code></pre><p>entries() \u5F97\u5230\u7684\u662F\u7D22\u5F15+\u503C\u7EC4\u6210\u7684\u6570\u7EC4\u7684\u53EF\u904D\u5386\u5BF9\u8C61</p><pre><code>for (const entries of arr.entries()) {
    console.log(entries);
}

//\u89E3\u6784\u5199\u6CD5
for (const [index,value] of arr.entries()) {
    console.log(index, value);
}
</code></pre><p>\u53EA\u8981\u6709 Symbol.iterator \u65B9\u6CD5\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u751F\u6210\u53EF\u904D\u5386\u5BF9\u8C61\uFF0C\u5C31\u662F\u53EF\u904D\u5386\u7684</p><p>\u53EA\u8981\u53EF\u904D\u5386\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528 for...of \u5FAA\u73AF\u6765\u7EDF\u4E00\u904D\u5386</p><p>\u539F\u751F\u53EF\u904D\u5386\u7684\u6709\u54EA\u4E9B</p><ul><li>\u6570\u7EC4</li><li>\u5B57\u7B26\u4E32</li><li>Set</li><li>Map</li><li>arguments</li><li>NodeList</li></ul><p>\u975E\u539F\u751F\u53EF\u904D\u5386\u7684\u6709\u54EA\u4E9B</p><ul><li>\u4E00\u822C\u7684\u5BF9\u8C61</li></ul><p>\u6570\u7EC4\u7684\u5C55\u5F00\u8FD0\u7B97\u7B26\u4F7F\u7528\u4E86for...of\u673A\u5236\uFF0C\u56E0\u6B64\u53EF\u904D\u5386\u7684\u5BF9\u8C61\u4E5F\u90FD\u53EF\u4EE5\u4F7F\u7528\u5C55\u5F00\u8FD0\u7B97\u7B26<br> \u6570\u7EC4\u7684\u89E3\u6784\u8D4B\u503C\u4F7F\u7528\u4E86for...of\u673A\u5236\uFF0C\u56E0\u6B64\u53EF\u904D\u5386\u7684\u5BF9\u8C61\u4E5F\u90FD\u53EF\u4EE5\u4F7F\u7528\u89E3\u6784\u8D4B\u503C</p><p>Set\u3001Map\u7684\u6784\u9020\u51FD\u6570\u4E5F\u662F\u4F7F\u7528\u4E86\u8FED\u4EE3\u5668\u7684\u539F\u7406\uFF0C\u56E0\u6B64\u53EF\u4EE5\u4F20\u5165\u53EF\u8FED\u4EE3\u5BF9\u8C61\u4F5C\u4E3A\u521D\u59CB\u5316\u6570\u636E</p><h3 id="es6\u5B57\u7B26\u4E32\u65B0\u589E\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#es6\u5B57\u7B26\u4E32\u65B0\u589E\u65B9\u6CD5" aria-hidden="true">#</a> ES6\u5B57\u7B26\u4E32\u65B0\u589E\u65B9\u6CD5</h3><h4 id="includes-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#includes-\u65B9\u6CD5" aria-hidden="true">#</a> includes()\u65B9\u6CD5</h4><p>\u67E5\u627E\u662F\u5426\u5305\u542B\u5B57\u7B26\u5185\u5BB9</p><pre><code>console.log(&#39;abc&#39;.includes(&#39;a&#39;));
console.log(&#39;abc&#39;.includes(&#39;ab&#39;));
console.log(&#39;abc&#39;.includes(&#39;bc&#39;));
console.log(&#39;abc&#39;.includes(&#39;ac&#39;)); // false
</code></pre><p>\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u8868\u793A\u5F00\u59CB\u641C\u7D22\u7684\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u662F 0</p><pre><code>console.log(&#39;abc&#39;.includes(&#39;a&#39;));
console.log(&#39;abc&#39;.includes(&#39;a&#39;, 0));
console.log(&#39;abc&#39;.includes(&#39;a&#39;, 1)); // false
</code></pre><h4 id="padstart-\u3001padend-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#padstart-\u3001padend-\u65B9\u6CD5" aria-hidden="true">#</a> padStart()\u3001padEnd()\u65B9\u6CD5</h4><p>\u8865\u5168\u5B57\u7B26\u4E32\u957F\u5EA6</p><pre><code>console.log(&#39;x&#39;.padStart(5, &#39;ab&#39;)); //ababx
console.log(&#39;x&#39;.padEnd(5, &#39;ab&#39;)); //xabab
console.log(&#39;x&#39;.padEnd(4, &#39;ab&#39;)); //xaba
</code></pre><p>\u539F\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF0C\u7B49\u4E8E\u6216\u5927\u4E8E\u6700\u5927\u957F\u5EA6\uFF0C\u4E0D\u4F1A\u6D88\u51CF\u539F\u5B57\u7B26\u4E32\uFF0C\u5B57\u7B26\u4E32\u8865\u5168\u4E0D\u751F\u6548\uFF0C\u8FD4\u56DE\u539F\u5B57\u7B26\u4E32</p><pre><code>console.log(&#39;xxx&#39;.padStart(2, &#39;ab&#39;)); //xxx
console.log(&#39;xxx&#39;.padEnd(2, &#39;ab&#39;)); //xxx
</code></pre><p>\u7528\u6765\u8865\u5168\u7684\u5B57\u7B26\u4E32\u4E0E\u539F\u5B57\u7B26\u4E32\u957F\u5EA6\u4E4B\u548C\u8D85\u8FC7\u4E86\u6700\u5927\u957F\u5EA6\uFF0C\u622A\u53BB\u8D85\u51FA\u4F4D\u6570\u7684\u8865\u5168\u5B57\u7B26\u4E32\uFF0C\u539F\u5B57\u7B26\u4E32\u4E0D\u52A8</p><pre><code>console.log(&#39;abc&#39;.padStart(10, &#39;0123456789&#39;)); //0123456abc
console.log(&#39;abc&#39;.padEnd(10, &#39;0123456789&#39;)); //abc0123456
</code></pre><p>\u5982\u679C\u7701\u7565\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u7A7A\u683C\u8865\u5168\u957F\u5EA6</p><pre><code>console.log(&#39;x&#39;.padStart(4)); //\u7A7A\u683C\u7A7A\u683C\u7A7A\u683Cx
console.log(&#39;x&#39;.padEnd(4)); //x\u7A7A\u683C\u7A7A\u683C\u7A7A\u683C
</code></pre><h4 id="trimstart-\u3001trimend-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#trimstart-\u3001trimend-\u65B9\u6CD5" aria-hidden="true">#</a> trimStart()\u3001trimEnd()\u65B9\u6CD5</h4><p>\u6E05\u9664\u5B57\u7B26\u4E32\u7684\u9996\u6216\u5C3E\u7A7A\u683C\uFF0C\u4E2D\u95F4\u7684\u7A7A\u683C\u4E0D\u4F1A\u6E05\u9664</p><pre><code>const s = &#39;  a b c  &#39;;
console.log(s);
console.log(s.trimStart()); //\u6E05\u695A\u524D\u9762\u7684\u7A7A\u683C
console.log(s.trimLeft()); //\u6E05\u695A\u524D\u9762\u7684\u7A7A\u683C
console.log(s.trimEnd()); //\u6E05\u695A\u7ED3\u5C3E\u7684\u7A7A\u683C
console.log(s.trimRight()); //\u6E05\u695A\u7ED3\u5C3E\u7684\u7A7A\u683C
console.log(s.trim()); //\u6E05\u695A\u5DE6\u53F3\u4E24\u8FB9\u7684\u7A7A\u683C
</code></pre><h3 id="es6\u6570\u7EC4\u65B0\u589E\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#es6\u6570\u7EC4\u65B0\u589E\u65B9\u6CD5" aria-hidden="true">#</a> ES6\u6570\u7EC4\u65B0\u589E\u65B9\u6CD5</h3><h4 id="includes-\u65B9\u6CD5-1" tabindex="-1"><a class="header-anchor" href="#includes-\u65B9\u6CD5-1" aria-hidden="true">#</a> includes()\u65B9\u6CD5</h4><p>\u5224\u65AD\u6570\u7EC4\u4E2D\u662F\u5426\u5305\u542B\u67D0\u4E2A\u6210\u5458</p><p>console.log([1, 2, 3].includes(&#39;2&#39;)); // false console.log([1, 2, 3].includes(2)); // true</p><p>\u7B2C\u4E8C\u4E2A\u53C2\u6570\u8868\u793A\u641C\u7D22\u7684\u8D77\u59CB\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u503C\u662F 0</p><pre><code>console.log([1, 2, 3].includes(2, 2));
</code></pre><p>\u57FA\u672C\u9075\u5FAA\u4E25\u683C\u76F8\u7B49\uFF08===\uFF09,\u4F46\u662F\u5BF9\u4E8E NaN \u7684\u5224\u65AD\u4E0E === \u4E0D\u540C\uFF0Cincludes \u8BA4\u4E3A NaN === NaN</p><h4 id="array-from" tabindex="-1"><a class="header-anchor" href="#array-from" aria-hidden="true">#</a> Array.from()</h4><p>\u5C06\u5176\u4ED6\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u6210\u6570\u7EC4</p><h5 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u7528\u6CD5</h5><pre><code>console.log(Array.from(&#39;str&#39;));
</code></pre><p>\u54EA\u4E9B\u53EF\u4EE5\u901A\u8FC7 Array.from() \u8F6C\u6362\u6210\u6570\u7EC4<br> \u6240\u6709\u53EF\u904D\u5386\u7684\uFF0C\u6570\u7EC4\u3001\u5B57\u7B26\u4E32\u3001Set\u3001Map\u3001NodeList\u3001arguments<br> \u62E5\u6709 length \u5C5E\u6027\u7684\u4EFB\u610F\u5BF9\u8C61\uFF0C\u4F46\u53EA\u904D\u5386\u6570\u503C\u7C7B\u578B\u7684\u952E</p><pre><code>console.log(Array.from(new Set([1, 2, 1])));
console.log([...new Set([1, 2, 1])]);

const obj = {
  &#39;0&#39;: &#39;a&#39;,
  &#39;1&#39;: &#39;b&#39;,
  name: &#39;Alex&#39;, //\u4E0D\u4F1A\u88AB\u8F6C\u6362
  length: 3
};
console.log(Array.from(obj)); 
</code></pre><h5 id="\u7B2C\u4E8C\u4E2A\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u4E2A\u53C2\u6570" aria-hidden="true">#</a> \u7B2C\u4E8C\u4E2A\u53C2\u6570</h5><p>\u4F5C\u7528\u7C7B\u4F3C\u4E8E\u6570\u7EC4\u7684 map \u65B9\u6CD5\uFF0C\u7528\u6765\u5BF9\u6BCF\u4E2A\u5143\u7D20\u8FDB\u884C\u5904\u7406\uFF0C\u5C06\u5904\u7406\u540E\u7684\u503C\u653E\u5165\u8FD4\u56DE\u7684\u6570\u7EC4</p><pre><code>console.log(
  [1, 2].map(value =&gt; {
    return value * 2;
  })
);
console.log(Array.from(&#39;12&#39;, value =&gt; value * 2));
console.log(Array.from(&#39;12&#39;).map(value =&gt; value * 2));
</code></pre><h5 id="\u7B2C\u4E09\u4E2A\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u4E2A\u53C2\u6570" aria-hidden="true">#</a> \u7B2C\u4E09\u4E2A\u53C2\u6570</h5><p>\u4FEE\u6539this\u6307\u5411</p><pre><code>Array.from(
    &#39;12&#39;,
    value =&gt; {
      console.log(this);
    },
    document
  );
Array.from(
  &#39;12&#39;,
  function () {
    console.log(this);
  },
  document
);
</code></pre><h4 id="find-\u3001findindex" tabindex="-1"><a class="header-anchor" href="#find-\u3001findindex" aria-hidden="true">#</a> find()\u3001findIndex()</h4><p>find()\uFF1A\u627E\u5230\u6EE1\u8DB3\u6761\u4EF6\u7684\u4E00\u4E2A\u7ACB\u5373\u8FD4\u56DE<br> findIndex()\uFF1A\u627E\u5230\u6EE1\u8DB3\u6761\u4EF6\u7684\u4E00\u4E2A\uFF0C\u7ACB\u5373\u8FD4\u56DE\u5176\u7D22\u5F15<br> \u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3Athis\u6307\u5411</p><p>\u57FA\u672C\u7528\u6CD5</p><pre><code>let v = [1, 5, 10, 15].find(function (value, index, arr) {
  // console.log(value, index, arr);
  console.log(this);
  return value &gt; 9;
}, document);
let index = [1, 5, 10, 15].findIndex((value, index, arr) =&gt; {
  // console.log(value, index, arr);
  return value &gt; 9;
}, document);
</code></pre><h3 id="es6\u5BF9\u8C61\u65B0\u589E\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#es6\u5BF9\u8C61\u65B0\u589E\u65B9\u6CD5" aria-hidden="true">#</a> ES6\u5BF9\u8C61\u65B0\u589E\u65B9\u6CD5</h3><h4 id="object-assign" tabindex="-1"><a class="header-anchor" href="#object-assign" aria-hidden="true">#</a> Object.assign()</h4><p>\u7528\u6765\u5408\u5E76\u5BF9\u8C61\uFF0C\u76F4\u63A5\u5408\u5E76\u5230\u4E86\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E2D\uFF0C\u8FD4\u56DE\u7684\u5C31\u662F\u5408\u5E76\u540E\u7684\u5BF9\u8C61</p><pre><code>Object.assign(\u76EE\u6807\u5BF9\u8C61, \u6E90\u5BF9\u8C611,\u6E90\u5BF9\u8C612,...): \u76EE\u6807\u5BF9\u8C61
</code></pre><p>\u6CE8\u610F\u4E8B\u9879\uFF0C\u57FA\u672C\u6570\u636E\u7C7B\u578B\u4F5C\u4E3A\u6E90\u5BF9\u8C61\uFF0C\u4E0E\u5BF9\u8C61\u7684\u5C55\u5F00\u7C7B\u4F3C\uFF0C\u5148\u8F6C\u6362\u6210\u5BF9\u8C61\uFF0C\u518D\u5408\u5E76</p><pre><code>console.log(Object.assign({}, undefined));
console.log(Object.assign({}, null));
console.log(Object.assign({}, 1));
console.log(Object.assign({}, true));
console.log(Object.assign({}, &#39;str&#39;));
</code></pre><h4 id="object-keys-\u3001object-values-\u548C-object-entries" tabindex="-1"><a class="header-anchor" href="#object-keys-\u3001object-values-\u548C-object-entries" aria-hidden="true">#</a> Object.keys()\u3001Object.values() \u548C Object.entries()</h4><p>\u57FA\u672C\u7528\u6CD5</p><pre><code>const person = {
  name: &#39;Alex&#39;,
  age: 18
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
</code></pre><p>\u4E0E\u6570\u7EC4\u7C7B\u4F3C\u65B9\u6CD5\u7684\u533A\u522B<br> \u6570\u7EC4\u7684 keys()\u3001values()\u3001entries() \u7B49\u65B9\u6CD5\u662F\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u7684\u90FD\u662F Iterator<br> \u5BF9\u8C61\u7684 Object.keys()\u3001Object.values()\u3001Object.entries() \u7B49\u65B9\u6CD5\u662F\u6784\u9020\u51FD\u6570\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u7684\u662F\u6570\u7EC4</p><p>Object.keys()/values()/entires() \u5E76\u4E0D\u80FD\u4FDD\u8BC1\u987A\u5E8F\u4E00\u5B9A\u662F\u4F60\u770B\u5230\u7684\u6837\u5B50\uFF0C\u8FD9\u4E00\u70B9\u548C for in \u662F\u4E00\u6837\u7684</p>`,166),p=[c];function s(d,l){return n(),o("div",null,p)}var h=e(r,[["render",s],["__file","chapter17.html.vue"]]);export{h as default};
