import"../modulepreload-polyfill.b7f2da20.js";/* empty css               */import{U as y,b_ as L,cr as x,aQ as b,cs as C,ct as N,ab as s,C as d,aF as c,cj as T,b7 as S,ck as G,b6 as B,cl as A,R as I,cm as W,cn as D,co as H,cp as q,cq as w,N as g,c as l,aC as U,aE as j,aD as V,at as v}from"../three.3f33d046.js";import{M as P}from"../index.1133522a.js";import{g as r,v as a}from"../vis-three.tdcm.es.ba892fff.js";import{g as _}from"../lil-gui.module.min.2435205c.js";import"../index.c0df7946.js";import"../curve.0ba3d968.js";import"../index.0317c091.js";import"../ShaderPass.025732a5.js";import"../vis-three.plugin-orbit-controls.es.1508a7f8.js";import"../index.98a0d82e.js";import"../index.ca8957d4.js";import"../index.bdebbb5d.js";import"../index.5b5c1015.js";import"../index.336b965b.js";import"../vis-three.plugin-transform-controls.es.5244fee5.js";import"../index.9b9e13dd.js";import"../vis-three.plugin-keyboard-manager.es.16e92de2.js";import"../Antdv.7b6104cc.js";import"../index.fd7db63a.js";import"../CSS3DRenderer.56d2804d.js";import"../index.0a430562.js";import"../index.fe593856.js";import"../index.cee1ad1a.js";import"../index.e2e75f8b.js";import"../index.f411c2bc.js";import"../index.457fa50b.js";import"../index.b5597af3.js";import"../vis-three.plugin-pointer-manager.es.28277630.js";import"../index.2c9e736c.js";import"../index.bbdc45c2.js";import"../index.e7386c00.js";import"../index.82f2a702.js";import"../index.82346856.js";import"../vis-three.module-particle.es.2f619925.js";import"../UnrealBloomPass.a03f7d16.js";import"../vis-three.library-modifier.es.9bf56217.js";import"../vis-three.convenient.es.3345d486.js";import"../index.f17582aa.js";import"../vis-three.strategy-orbit-controls-support.es.bfc29c0d.js";import"../index.4caff7a1.js";import"../vis-three.module-helper.es.c2fc8b4c.js";import"../vis-three.library-parser.es.0233fa92.js";import"../vis-three.strategy-multi-renderer.es.91c74cfe.js";import"../vis-three.strategy-selection-prompt.es.9e058aa8.js";import"../vis-three.plugin-loader-manager.es.3fc670d5.js";import"../G6.30609706.js";const i=new P().setDom(document.getElementById("app")).setSize().setStats(!0).play();r.injectEngine=i;const R=r("Scene");i.setSceneBySymbol(a(R));r.injectScene=!0;i.loaderManager.setPath("/examples/");i.loadResourcesAsync(["/texture/hdr/livingRoom.hdr","/texture/dds/Tire_N02-dxt.dds"]).then(u=>{console.log(u);const e=i.generateLoadTextureConfig("/texture/hdr/livingRoom.hdr"),o=i.generateLoadTextureConfig("/texture/dds/Tire_N02-dxt.dds");console.log(i.getObjectBySymbol(a(o)));const F=r("MeshBasicMaterial",{map:a(e)}),M=r("MeshBasicMaterial",{map:a(o)}),f=r("BoxGeometry",{width:20,height:20,depth:20}),h=r("SphereGeometry",{radius:10});r("Mesh",{geometry:a(f),material:a(M),position:{x:-25}}),r("Mesh",{geometry:a(h),material:a(F),position:{x:25}}),R.background=a(e);const t=new _;t.add(e,"mapping",{UVMapping:y,CubeReflectionMapping:L,CubeRefractionMapping:x,EquirectangularReflectionMapping:b,EquirectangularRefractionMapping:C,CubeUVReflectionMapping:N}),t.add(e,"wrapS",{"THREE.RepeatWrapping":s,"THREE.ClampToEdgeWrapping":d,"THREE.MirroredRepeatWrapping":c}),t.add(e,"wrapT",{"THREE.RepeatWrapping":s,"THREE.ClampToEdgeWrapping":d,"THREE.MirroredRepeatWrapping":c}),t.add(e,"format",{AlphaFormat:T,RedFormat:S,RedIntegerFormat:G,RGFormat:B,RGIntegerFormat:A,RGBAFormat:I,RGBAIntegerFormat:W,LuminanceFormat:D,LuminanceAlphaFormat:H,DepthFormat:q,DepthStencilFormat:w}),t.add(e,"encoding",{LinearEncoding:void 0,sRGBEncoding:void 0}),t.add(e,"magFilter",{Nearest:g,Linear:l}),t.add(e,"minFilter",{Nearest:g,Linear:l,NearestMipmapNearest:U,NearestMipmapLinear:j,LinearMipmapNearest:V,LinearMipmapLinear:v}),t.add(e,"rotation",-Math.PI,Math.PI,.01),t.add({anisotropy:e.anisotropy},"anisotropy",1,5,1).onChange(E=>{e.anisotropy=2**E});const p=t.addFolder("repeat");p.add(e.repeat,"x",1,5,1),p.add(e.repeat,"y",1,5,1);const n=t.addFolder("offset");n.add(e.offset,"x",-1,1,.1),n.add(e.offset,"y",-1,1,.1);const m=t.addFolder("center");m.add(e.center,"x",-1,1,.1),m.add(e.center,"y",-1,1,.1)});