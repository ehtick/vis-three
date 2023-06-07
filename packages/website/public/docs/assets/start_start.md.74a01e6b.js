import{_ as s,o as a,c as n,O as l}from"./chunks/framework.a8fb2c59.js";const i=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[],"relativePath":"start/start.md","filePath":"start/start.md"}'),o={name:"start/start.md"},p=l(`<h1 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to &quot;开始&quot;">​</a></h1><h2 id="安装-three-js" tabindex="-1">安装 three.js <a class="header-anchor" href="#安装-three-js" aria-label="Permalink to &quot;安装 three.js&quot;">​</a></h2><p><code>vis-three</code>依赖于<code>three</code>，但是不强制依赖某一个特定版本，最优的依赖版本是官网示例的<code>three</code>版本，所以在安装<code>vis-three</code>之前，需要先安装<code>three</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i three</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>目前所有示例所使用的 three.js 版本为：<code>^0.141.0</code></p></div><h2 id="安装-vis-three" tabindex="-1">安装 vis-three <a class="header-anchor" href="#安装-vis-three" aria-label="Permalink to &quot;安装 vis-three&quot;">​</a></h2><p>在你使用和安装<code>vis-three</code>之前，你可以根据你目前的技术水准、项目周期或者业务需要去选择相关的开发流程和集成模式，<code>vis-three</code>提供了几种模式去进行，下面从高效到高拓展进行列举。</p><h2 id="使用预置原生-3d-引擎" tabindex="-1">使用预置原生 3D 引擎 <a class="header-anchor" href="#使用预置原生-3d-引擎" aria-label="Permalink to &quot;使用预置原生 3D 引擎&quot;">​</a></h2><p>官方提供的已经集成好的原生 3D 引擎包括：</p><ol><li><code>@vis-three/engine-display</code>展示用的原生 3D 引擎——如：模型展示等</li><li><code>@vis-three/engine-modeling</code>编辑用的原生 3D 引擎——如：编辑器应用等</li></ol><h3 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i @vis-three/engine-display</span></span>
<span class="line"><span style="color:#A6ACCD;">// 或者</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i @vis-three/engine-modeling</span></span></code></pre></div><h3 id="引擎使用" tabindex="-1">引擎使用 <a class="header-anchor" href="#引擎使用" aria-label="Permalink to &quot;引擎使用&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> THREE </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">three</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DisplayEngine</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@vis-three/engine-display</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// import { ModelingEngine } from &quot;@vis-three/engine-modeling&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> engine </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">DisplayEngine</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setDom</span><span style="color:#A6ACCD;">(document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setSize</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">play</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">engine</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Mesh</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">BoxBufferGeometry</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">MeshBasicMaterial</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rgb(255, 105, 100)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="引擎功能拓展" tabindex="-1">引擎功能拓展 <a class="header-anchor" href="#引擎功能拓展" aria-label="Permalink to &quot;引擎功能拓展&quot;">​</a></h3><p>预置的引擎已经提供了大部分通用的功能模块，面对三方插件与面对特定的业务性功能需要自己根据具体情况进行开发相关的插件和策略，这个时候就需要额外安装拓展功能。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// controls.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ControlsPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ControlsPlugin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./controls.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">LoaderManagerPlugin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@vis-three/plugin-loader-manager</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">EffectRenderStrategy</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@vis-three/strategy-effect-render</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> engine </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">DisplayEngine</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">install</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">LoaderManagerPlugin</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">install</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">ControlsPlugin</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">EffectRenderStrategy</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setDom</span><span style="color:#A6ACCD;">(document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">play</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="引擎功能注销" tabindex="-1">引擎功能注销 <a class="header-anchor" href="#引擎功能注销" aria-label="Permalink to &quot;引擎功能注销&quot;">​</a></h3><p>有时候我们会面对官方提供的引擎中有部分功能不需要的情况，或者说是影响了当前的效果的情况，那么我们在使用时，可以动态进行引擎修改。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> engine </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">DisplayEngine</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">uninstall</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">LoaderManagerPlugin</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rollback</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">EffectRenderStrategy</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setDom</span><span style="color:#A6ACCD;">(document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">play</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="使用预置配置化-3d-引擎" tabindex="-1">使用预置配置化 3D 引擎 <a class="header-anchor" href="#使用预置配置化-3d-引擎" aria-label="Permalink to &quot;使用预置配置化 3D 引擎&quot;">​</a></h2><p>官方提供的已经集成好的原生 3D 引擎包括：</p><ol><li><code>@vis-three/engine-display-support</code>展示用的配置化 3D 引擎——如：模型展示等</li><li><code>@vis-three/engine-modeling-support</code>编辑用的配置化 3D 引擎——如：编辑器应用等</li></ol><h3 id="安装依赖-1" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖-1" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i @vis-three/middleware</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i @vis-three/engine-display-support</span></span>
<span class="line"><span style="color:#A6ACCD;">// 或者</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i @vis-three/engine-modeling-support</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>由于使用配置化引擎需要用到配置化相关的功能，为了 IDE 等有相关提示，我们可以预先安装<code>@vis-three/middleware</code></p></div><h3 id="引擎使用-1" tabindex="-1">引擎使用 <a class="header-anchor" href="#引擎使用-1" aria-label="Permalink to &quot;引擎使用&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> THREE </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">three</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DisplayEngineSupport</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@vis-three/engine-display-support</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// import { ModelingEngineSupport } from &quot;@vis-three/engine-modeling-support&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">generateConfig</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CONFIGTYPE</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@vis-three/middleware</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> engine </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">DisplayEngineSupport</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setDom</span><span style="color:#A6ACCD;">(document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setSize</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">play</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> scene </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generateConfig</span><span style="color:#A6ACCD;">(CONFIGTYPE</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">SCENE)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">engine</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setSceneBySymbol</span><span style="color:#A6ACCD;">(scene</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vid)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">generateConfig</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">injectScene </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> material </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generateConfig</span><span style="color:#A6ACCD;">(CONFIGTYPE</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MESHBASICMATERIAL</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rgb(255, 0, 0)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> geometry </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generateConfig</span><span style="color:#A6ACCD;">(CONFIGTYPE</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">BOXGEOMETRY</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">depth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> mesh </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generateConfig</span><span style="color:#A6ACCD;">(CONFIGTYPE</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MESH</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">geometry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> geometry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vid</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">material</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> material</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vid</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">engine</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">applyConfig</span><span style="color:#A6ACCD;">(material</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> geometry</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> mesh)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="功能拓展与注销功能与原生一致。" tabindex="-1">功能拓展与注销功能与原生一致。 <a class="header-anchor" href="#功能拓展与注销功能与原生一致。" aria-label="Permalink to &quot;功能拓展与注销功能与原生一致。&quot;">​</a></h3><h2 id="按需自定义组装原生-3d-引擎" tabindex="-1">按需自定义组装原生 3D 引擎 <a class="header-anchor" href="#按需自定义组装原生-3d-引擎" aria-label="Permalink to &quot;按需自定义组装原生 3D 引擎&quot;">​</a></h2><h2 id="按需自定义组装配置化-3d-引擎" tabindex="-1">按需自定义组装配置化 3D 引擎 <a class="header-anchor" href="#按需自定义组装配置化-3d-引擎" aria-label="Permalink to &quot;按需自定义组装配置化 3D 引擎&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>vis-three</code>官方的所有子包都在<code>npm</code>的<code>@vis-three</code>组织下，大家可以根据需要进行相关的查找安装使用。</p></div>`,33),e=[p];function t(c,r,D,y,F,A){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{i as __pageData,d as default};