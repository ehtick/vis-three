import"../modulepreload-polyfill.b7f2da20.js";import{a1 as o,C as p,ag as m,c0 as E,c1 as f,c2 as h,c3 as L,c4 as M,R as u,c5 as y,c6 as G,c7 as T,c8 as v,c9 as N,w,a4 as B,N as n,d as s,ac as S,ae as W,ad as A,af as I}from"../three.237d835c.js";import{M as x}from"../index.790bec74.js";import{g as a}from"../vis-three.middleware.es.7f273029.js";import{C}from"../vis-three.convenient.es.7b860830.js";import{g as H}from"../lil-gui.module.min.095a7f3d.js";import"../index.1d3a6ec0.js";import"../index.202ebdec.js";import"../index.2e2f06f6.js";import"../ShaderPass.02f07bc0.js";import"../vis-three.plugin-orbit-controls.es.9991f892.js";import"../index.f318ae8c.js";import"../index.4ec3bfd2.js";import"../index.ea2b9d59.js";import"../index.591a8368.js";import"../index.a30a6c1f.js";import"../index.12fd638d.js";import"../index.32dc3bb0.js";import"../vis-three.plugin-keyboard-manager.es.417ffa7e.js";import"../Antdv.414c4eb5.js";import"../index.edc751ad.js";import"../CSS3DRenderer.ba0f6fa5.js";import"../index.e6be8a02.js";import"../index.2f498209.js";import"../index.117a61e1.js";import"../index.3b8dbf96.js";import"../index.c0475655.js";import"../index.2328f892.js";import"../index.c35e5a3e.js";import"../vis-three.plugin-pointer-manager.es.640cfa1a.js";import"../index.cd2c2c2e.js";import"../index.a089cc34.js";import"../index.bca5cc71.js";import"../index.692e1021.js";import"../index.90db9154.js";import"../vis-three.module-particle.es.8e43cbb8.js";import"../UnrealBloomPass.2cdbe9ee.js";import"../index.ee52b7bf.js";import"../index.bdaae9f1.js";import"../vis-three.strategy-orbit-controls-support.es.706978dc.js";import"../index.d3463d42.js";import"../vis-three.library-parser.es.5c9e4dac.js";import"../vis-three.strategy-multi-renderer.es.a35ffd0a.js";import"../vis-three.strategy-selection-prompt.es.fc4c19e4.js";import"../vis-three.plugin-loader-manager.es.c1771985.js";import"../G6.d44f13fb.js";const d=new C({width:800,height:160}).draw(r=>{r.textBaseline="middle",r.textAlign="center",r.fillStyle="rgb(206, 42, 230)",r.font=" bold 72px \u5FAE\u8F6F\u96C5\u9ED1",r.fillText("Hello World! 0",400,80)}).preview({top:"5%",left:"5%"}),l=new x().setDom(document.getElementById("app")).setSize().setStats(!0).registerResources({"example.canvas":d.getDom()});a.injectEngine=l;const c=a("Scene");l.setSceneBySymbol(c.vid).play();a.injectScene=!0;a("AmbientLight");const e=a("CanvasTexture",{url:"example.canvas"}),b=a("MeshBasicMaterial",{map:e.vid}),D=a("BoxGeometry",{width:20,height:20,depth:20});a("Mesh",{geometry:D.vid,material:b.vid});c.background=e.vid;const t=new H;t.add(e,"wrapS",{"THREE.RepeatWrapping":o,"THREE.ClampToEdgeWrapping":p,"THREE.MirroredRepeatWrapping":m});t.add(e,"wrapT",{"THREE.RepeatWrapping":o,"THREE.ClampToEdgeWrapping":p,"THREE.MirroredRepeatWrapping":m});t.add(e,"format",{AlphaFormat:E,RedFormat:f,RedIntegerFormat:h,RGFormat:L,RGIntegerFormat:M,RGBAFormat:u,RGBAIntegerFormat:y,LuminanceFormat:G,LuminanceAlphaFormat:T,DepthFormat:v,DepthStencilFormat:N});t.add(e,"encoding",{LinearEncoding:w,sRGBEncoding:B});t.add(e,"magFilter",{Nearest:n,Linear:s});t.add(e,"minFilter",{Nearest:n,Linear:s,NearestMipmapNearest:S,NearestMipmapLinear:W,LinearMipmapNearest:A,LinearMipmapLinear:I});t.add(e,"rotation",-Math.PI,Math.PI,.01);t.add({anisotropy:e.anisotropy},"anisotropy",1,5,1).onChange(r=>{e.anisotropy=2**r});const g=t.addFolder("repeat");g.add(e.repeat,"x",1,5,1);g.add(e.repeat,"y",1,5,1);const F=t.addFolder("offset");F.add(e.offset,"x",-1,1,.1);F.add(e.offset,"y",-1,1,.1);const R=t.addFolder("center");R.add(e.center,"x",-1,1,.1);R.add(e.center,"y",-1,1,.1);let i=0;setInterval(()=>{d.clear().draw(r=>{r.fillText(`Hello World! ${i}`,400,80)}),i+=1,e.needsUpdate=!0},1e3);