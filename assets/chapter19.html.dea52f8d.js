import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as s,e as o}from"./app.f8ee6222.js";const a={},t=o(`<h2 id="es6-class" tabindex="-1"><a class="header-anchor" href="#es6-class" aria-hidden="true">#</a> ES6-Class</h2><h3 id="class-\u7684\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#class-\u7684\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> Class \u7684\u57FA\u672C\u7528\u6CD5</h3><pre><code>class Person{

    constructor(name,age){
        this.name = name;
        this.age = age;
        //\u6BCF\u6B21\u5B9E\u4F8B\u5316\u90FD\u662F\u91CD\u590D\u521B\u5EFA\uFF0C\u4E0D\u5EFA\u8BAE
        this.getAge = function(){
            return age;
        }
    }

    // \u591A\u6B21\u5B9E\u4F8B\u5316\u5171\u4EAB\uFF0C\u4E5F\u5C31\u662F\u539F\u578B\u4E0A\u7684\u65B9\u6CD5
    speak(){
        console.log(&#39;invock speak&#39;);
    }
}
</code></pre><p>\u672C\u8D28\u4E0A\u5C31\u662F\u6784\u9020\u51FD\u6570</p><pre><code>typeof Person; //function
//\u901A\u8FC7\u539F\u578B\u6DFB\u52A0\u65B9\u6CD5\uFF0C\u4E0D\u5EFA\u8BAE\u751F\u4EA7\u73AF\u5883\u4F7F\u7528
Person.prototype.run = function(){};
</code></pre><p>\u8868\u8FBE\u5F0F\u5F62\u5F0F</p><pre><code>var Person = class {
    constructor(){
        console.log(&#39;\u521D\u59CB\u5316&#39;)\uFF1A
    }
};
</code></pre><p>\u7ACB\u5373\u6267\u884C\u7684\u7C7B</p><pre><code>new (class {
    constructor(){

    }
})();
</code></pre><p>\u5B9E\u4F8B\u5C5E\u6027\u548C\u5B9E\u4F8B\u65B9\u6CD5</p><pre><code>class Person{
    name = &#39;xiaoming&#39;;
    age = 18;
    //\u6BCF\u6B21\u5B9E\u4F8B\u5316\u90FD\u4F1A\u91CD\u590D\u521B\u5EFA
    getAge = function(){
        return this.age;
    }

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

}
</code></pre><p>\u9759\u6001\u5C5E\u6027\u548C\u9759\u6001\u65B9\u6CD5</p><pre><code>class Person{

    constructor(){
        console.log(&#39;constructor&#39;);
    }

    //\u4E0D\u8981\u8FD9\u4E48\u5199\uFF0C\u76EE\u524D\u53EA\u662F\u63D0\u6848\uFF0C\u6709\u517C\u5BB9\u6027\u95EE\u9898
    //static version = &#39;1.0.0&#39;;

    //\u5EFA\u8BAE\u6539\u5199\u4E3A\u9759\u6001\u65B9\u6CD5
    static getVersion(){
        return &#39;1.0.0&#39;;
    }

    static speak(){
        console.log(&#39;static speak&#39;,this); //\u8FD9\u91CC\u7684this\u6307\u5411Person\u7C7B\u5BF9\u8C61
    }

    speak(){
        console.log(&#39;speak&#39;,this); //\u8FD9\u91CC\u7684this\u6307\u5411Person\u5B9E\u4F8B
    }
}

// \u7B49\u4EF7\uFF0C\u4E0D\u5EFA\u8BAE\uFF0C\u6CA1\u6709\u5C01\u88C5\u6027
Person.version = &#39;1.0.0&#39;;
Person.speack = function(){

}
</code></pre><p>\u79C1\u6709\u5C5E\u6027\u548C\u79C1\u6709\u65B9\u6CD5</p><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u7C7B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u90FD\u662F\u516C\u5F00\u7684</p><ol><li><p>\u6A21\u62DF\u79C1\u6709\u5C5E\u6027\u548C\u65B9\u6CD5</p><p>_ \u5F00\u5934\u8868\u793A\u79C1\u6709</p></li><li><p>\u5C06\u79C1\u6709\u5C5E\u6027\u548C\u65B9\u6CD5\u79FB\u51FA\u7C7B\uFF0C\u56E0\u4E3A\u662F\u5728\u540C\u4E00\u4E2A\u4F5C\u7528\u57DF\u5185\uFF0C\u56E0\u6B64\u591A\u4E2A\u5B9E\u4F8B\u83B7\u53D6\u7684\u5C5E\u6027\u503C\u76F8\u7B49</p><pre><code> (function () {
     let name = &#39;&#39;;

     class Person {
         constructor(username) {
            name = username;
         }

         speak() {
            console.log(&#39;speak&#39;);
         }

         getName() {
             return name;
         }
     }

     window.Person = Person;
 })();

 (function () {
     const p = new Person(&#39;Alex&#39;);
     console.log(p.name);
     console.log(p.getName());
 })();
</code></pre></li></ol><h3 id="class\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#class\u7EE7\u627F" aria-hidden="true">#</a> Class\u7EE7\u627F</h3><p>\u5B50\u7C7B\u7EE7\u627F\u7236\u7C7B</p><pre><code>class Person {
   constructor(name, sex) {
     this.name = name;
     this.sex = sex;
        this.say = function () {
       console.log(&#39;say&#39;);
     };
   }
      speak() {
     console.log(&#39;speak&#39;);
   }
      static speak() {
     console.log(&#39;static speak&#39;);
   }
}   
class Programmer extends Person {
  constructor(name, sex) {
    super(name, sex);
  }
}
</code></pre><p>\u5B50\u7C7B\u6784\u9020\u51FD\u6570\u4E2D\uFF0Cthis \u64CD\u4F5C\u4E0D\u80FD\u653E\u5728 super \u524D\u9762</p><p>super\u4F5C\u4E3A\u51FD\u6570\u8C03\u7528<br> \u4EE3\u8868\u7236\u7C7B\u7684\u6784\u9020\u65B9\u6CD5\uFF0C\u53EA\u80FD\u7528\u5728\u5B50\u7C7B\u7684\u6784\u9020\u65B9\u6CD5\u4E2D\uFF0C\u7528\u5728\u5176\u4ED6\u5730\u65B9\u5C31\u4F1A\u62A5\u9519<br> super \u867D\u7136\u4EE3\u8868\u4E86\u7236\u7C7B\u7684\u6784\u9020\u65B9\u6CD5\uFF0C\u4F46\u662F\u5185\u90E8\u7684 this \u6307\u5411\u5B50\u7C7B\u7684\u5B9E\u4F8B</p><p>super\u4F5C\u4E3A\u5BF9\u8C61\u4F7F\u7528<br> \u5728\u6784\u9020\u65B9\u6CD5\u4E2D\u4F7F\u7528\u6216\u4E00\u822C\u65B9\u6CD5\u4E2D\u4F7F\u7528<br> super \u4EE3\u8868\u7236\u7C7B\u7684\u539F\u578B\u5BF9\u8C61 Person.prototype \u6240\u4EE5\u5B9A\u4E49\u5728\u7236\u7C7B\u5B9E\u4F8B\u4E0A\u7684\u65B9\u6CD5\u6216\u5C5E\u6027\uFF0C\u662F\u65E0\u6CD5\u901A\u8FC7 super \u8C03\u7528\u7684<br> \u901A\u8FC7 super \u8C03\u7528\u7236\u7C7B\u7684\u65B9\u6CD5\u65F6\uFF0C\u65B9\u6CD5\u5185\u90E8\u7684 this \u6307\u5411\u5F53\u524D\u7684\u5B50\u7C7B\u5B9E\u4F8B</p><p>super\u4F5C\u4E3A\u5BF9\u8C61\u4F7F\u7528<br> \u5728\u9759\u6001\u65B9\u6CD5\u4E2D\u4F7F\u7528<br> \u6307\u5411\u7236\u7C7B\uFF0C\u800C\u4E0D\u662F\u7236\u7C7B\u7684\u539F\u578B\u5BF9\u8C61<br> \u901A\u8FC7 super \u8C03\u7528\u7236\u7C7B\u7684\u65B9\u6CD5\u65F6\uFF0C\u65B9\u6CD5\u5185\u90E8\u7684 this \u6307\u5411\u5F53\u524D\u7684\u5B50\u7C7B\uFF0C\u800C\u4E0D\u662F\u5B50\u7C7B\u7684\u5B9E\u4F8B</p><p>\u4F7F\u7528 super \u7684\u65F6\u5019\uFF0C\u5FC5\u987B\u663E\u5F0F\u6307\u5B9A\u662F\u4F5C\u4E3A\u51FD\u6570\u8FD8\u662F\u4F5C\u4E3A\u5BF9\u8C61\u4F7F\u7528\uFF0C\u5426\u5219\u4F1A\u62A5\u9519</p><h3 id="\u7C7B\u548C\u5BF9\u8C61\u7684\u4E00\u4E9B\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u548C\u5BF9\u8C61\u7684\u4E00\u4E9B\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u7C7B\u548C\u5BF9\u8C61\u7684\u4E00\u4E9B\u6CE8\u610F\u4E8B\u9879</h3><p>\u6784\u9020\u51FD\u6570</p><pre><code>    function Parent(name){
        this.name = name;
    }
    function Children(name,age){
        Parent.call(this,name);
        this.age = age;
    }
    Children.prototype.foots = [&#39;fish&#39;,&#39;rice&#39;,&#39;chicken&#39;];
    Children.prototype.sport = &#39;football&#39;;
    let xiaoming = new Children(&quot;xiaoming&quot;,18);
    let xiaohong = new Children(&quot;xiaohong&quot;,20);

    //\u4F1A\u88AB\u5B9A\u4E49\u5230\u5C0F\u660E\u8FD9\u4E2A\u5BF9\u8C61\u7684\u5B9E\u4F8B\u4E0A
    xiaoming.sport = &#39;basketball&#39;;
    //\u4F1A\u88AB\u5B9A\u4E49\u5230\u5C0F\u660E\u8FD9\u4E2A\u5BF9\u8C61\u7684\u5B9E\u4F8B\u4E0A
    xiaoming.foots = [&#39;apple&#39;];

    console.log(xiaoming);
    console.log(xiaohong);
</code></pre><p>\u901A\u8FC7\u5B9E\u4F8B\u5BF9\u8C61\u4FEE\u6539\u539F\u578B\u4E0A\u9762\u7684\u5C5E\u6027\uFF08\u5C5E\u6027\u4E3A\u57FA\u672C\u7C7B\u578B\uFF09\uFF0C\u5E76\u4E0D\u662F\u4FEE\u6539\uFF0C\u800C\u662F\u5728\u8BE5\u5B9E\u4F8B\u5BF9\u8C61\u521B\u5EFA\u4E86\u4E00\u4E2A\u540C\u540D\u5C5E\u6027</p><p>\u901A\u8FC7\u5B9E\u4F8B\u5BF9\u8C61\u4FEE\u6539\u539F\u578B\u4E0A\u9762\u7684\u5F15\u7528\u7C7B\u578B,\u5982\u679C\u6574\u4F53\u4FEE\u6539\u8BE5\u5F15\u7528\u7C7B\u578B\uFF0C\u5E76\u4E0D\u662F\u4FEE\u6539\uFF0C\u800C\u662F\u5728\u8BE5\u5B9E\u4F8B\u5BF9\u8C61\u521B\u5EFA\u4E86\u4E00\u4E2A\u540C\u540D\u5C5E\u6027\uFF0C\u4E0D\u6539\u53D8\u539F\u578B\u4E0A\u9762\u7684\u5F15\u7528\u7C7B\u578B</p><p>\u901A\u8FC7\u5B9E\u4F8B\u5BF9\u8C61\u4FEE\u6539\u539F\u578B\u4E0A\u9762\u7684\u5F15\u7528\u7C7B\u578B,\u5982\u679C\u4FEE\u6539\u8BE5\u5F15\u7528\u7C7B\u578B\uFF08\u4E5F\u79F0\u5BF9\u8C61\uFF0C\u6BCF\u4E00\u4E2A\u5BF9\u8C61\u90FD\u662F\u952E\u503C\u5BF9\u7684\u7EC4\u5408\uFF09\u7684\u5C5E\u6027\uFF0C\u4F1A\u4FEE\u6539\u539F\u578B\u4E0A\u9762\u7684\u5F15\u7528\u7C7B\u578B</p><p>Class</p><pre><code>class Father {
     constructor(name){
         this.name = name;
     }
 }
 class Son extends Father{
     sex = &#39;men&#39;;
     constructor(name,age){
         super(name);
         this.age = age;
         this.sayHi = function(){
             console.log(&#39;hi&#39;);
         }

         // \u53EF\u4EE5\u901A\u8FC7\u7ED1\u5B9A\u4F5C\u7528\u57DF\u89E3\u51B3\u65B9\u6CD5\u88AB\u5355\u72EC\u63D0\u53D6\u65F6\uFF0Cthis\u6307\u5411\u95EE\u9898
         this.sayThis = this.sayThis.bind(this);
     }
     sayThis(){
         console.log(this);
     }
 }
 Son.prototype.name = &quot;\u5C0F\u7EA2&quot;;
 let son = new Son(&#39;\u5C0F\u660E&#39;,18);
 console.log(son);
 console.log(son.__proto__.constructor === Son);
 const { sayThis } = son;
 sayThis();
</code></pre><p>\u5B9E\u4F8B\u5C5E\u6027\u9664\u4E86\u5B9A\u4E49\u5728constructor()\u65B9\u6CD5\u91CC\u9762\u7684this\u4E0A\u9762\uFF0C\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u5728\u7C7B\u7684\u6700\u9876\u5C42</p><p>\u800Cclass\u4E2D\u5B9A\u4E49\u7684\u65B9\u6CD5\u90FD\u662F\u5B9E\u4F8B\u5BF9\u8C61\u539F\u578B\u94FE\u4E0A\u7684\u65B9\u6CD5</p><p>\u4E0D\u7BA1\u662F\u4E0D\u662Fclass\u7684\u65B9\u5F0F,\u5B9E\u4F8B\u5BF9\u8C61\u8981\u60F3\u5B9E\u73B0\u539F\u578B\u5C5E\u6027\u7684\u8BDD,\u5FC5\u987B\u901A\u8FC7prototype\u7684\u5F62\u5F0F\u8D4B\u503C\u624D\u884C</p><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0CsayThis\u65B9\u6CD5\u4E2D\u7684this\uFF0C\u9ED8\u8BA4\u6307\u5411Son\u7C7B\u7684\u5B9E\u4F8B\u3002\u4F46\u662F\uFF0C\u5982\u679C\u5C06\u8FD9\u4E2A\u65B9\u6CD5\u63D0\u53D6\u51FA\u6765\u5355\u72EC\u4F7F\u7528\uFF0Cthis\u4F1A\u6307\u5411\u8BE5\u65B9\u6CD5\u8FD0\u884C\u65F6\u6240\u5728\u7684\u73AF\u5883\uFF08\u7531\u4E8E class \u5185\u90E8\u662F\u4E25\u683C\u6A21\u5F0F\uFF0C\u6240\u4EE5 this \u5B9E\u9645\u6307\u5411\u7684\u662Fundefined\uFF09\uFF0C\u4ECE\u800C\u5BFC\u81F4\u627E\u4E0D\u5230sayThis\u65B9\u6CD5\u800C\u62A5\u9519\u3002</p>`,36),r=[t];function c(p,i){return e(),s("div",null,r)}var u=n(a,[["render",c],["__file","chapter19.html.vue"]]);export{u as default};
