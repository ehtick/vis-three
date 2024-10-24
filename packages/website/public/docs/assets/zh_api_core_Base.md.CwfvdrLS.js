import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.BjUghlZR.js";const o=JSON.parse('{"title":"基座","description":"","frontmatter":{},"headers":[],"relativePath":"zh/api/core/Base.md","filePath":"zh/api/core/Base.md"}'),l={name:"zh/api/core/Base.md"},t=n(`<h1 id="基座" tabindex="-1">基座 <a class="header-anchor" href="#基座" aria-label="Permalink to &quot;基座&quot;">​</a></h1><p><code>vis-three</code>的底层逻辑基座，集成了插件的安装销毁逻辑与策略的执行回滚辑，可以直接使用或通过继承供其他环境使用。</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">class</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> CesiumEngine</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Base</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> engine</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> new</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> CesiumEngine</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">engine</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  .</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">install</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">CesiumRendererPlugin</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">())</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  .</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">install</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">RenderManagerPlugin</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">())</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  .</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">exec</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">CesiumRenderStrategy</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">());</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">engine.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">rollback</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;CesiumRenderStrategy&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">);</span></span></code></pre></div><h2 id="继承" tabindex="-1">继承 <a class="header-anchor" href="#继承" aria-label="Permalink to &quot;继承&quot;">​</a></h2><p><a href="./EventDispatcher.html">EventDispatcher</a></p><h2 id="构造" tabindex="-1">构造 <a class="header-anchor" href="#构造" aria-label="Permalink to &quot;构造&quot;">​</a></h2><p>无</p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="plugintables" tabindex="-1">pluginTables <a class="header-anchor" href="#plugintables" aria-label="Permalink to &quot;pluginTables&quot;">​</a></h3><p>安装的插件集合。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">Map</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&lt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">string, PluginOptions</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&lt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">Base</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&gt;&gt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span></code></pre></div><h3 id="strategytables" tabindex="-1">strategyTables <a class="header-anchor" href="#strategytables" aria-label="Permalink to &quot;strategyTables&quot;">​</a></h3><p>安装的策略集合。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">Map</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&lt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">string, StrategyOptions</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&lt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">Base</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&gt;&gt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span></code></pre></div><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><h3 id="install" tabindex="-1">install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;install&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 安装插件</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> plugin</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 插件选项对象</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@returns</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> this</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">install&lt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">E</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Base</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;(</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">plugin</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> PluginOptions</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">E</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;)</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> E</span></span></code></pre></div><ul><li><strong>示例</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> engine</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> new</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Base</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">engine.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">install</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  CesiumRendererPlugin</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    alpha: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">true</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  })</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">);</span></span></code></pre></div><h3 id="uninstall" tabindex="-1">uninstall <a class="header-anchor" href="#uninstall" aria-label="Permalink to &quot;uninstall&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 卸载插件</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> name</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 插件名称</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@returns</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> this</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">uninstall</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(name: string): </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">this</span></span></code></pre></div><ul><li><strong>示例</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> engine</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> new</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Base</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">engine.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">uninstall</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;CesiumRendererPlugin&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">);</span></span></code></pre></div><h3 id="exec" tabindex="-1">exec <a class="header-anchor" href="#exec" aria-label="Permalink to &quot;exec&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 执行策略</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> strategy</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 策略选项对象</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@returns</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> this</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">exec&lt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">E</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Base</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;(</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">strategy</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> StrategyOptions</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">E</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;)</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> E</span></span></code></pre></div><ul><li><strong>示例</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> engine</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> new</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Base</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">engine.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">exec</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">CesiumRenderStrategy</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">());</span></span></code></pre></div><h3 id="rollback" tabindex="-1">rollback <a class="header-anchor" href="#rollback" aria-label="Permalink to &quot;rollback&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 回滚策略</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> name</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 策略名称</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@returns</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> this</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">rollback</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(name: string): </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">this</span></span></code></pre></div><ul><li><strong>示例</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> engine</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> new</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Base</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">engine.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">rollback</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;CesiumRenderStrategy&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">);</span></span></code></pre></div>`,38),h=[t];function e(p,k,r,d,g,E){return a(),i("div",null,h)}const y=s(l,[["render",e]]);export{o as __pageData,y as default};