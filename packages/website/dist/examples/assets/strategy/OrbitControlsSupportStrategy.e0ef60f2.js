import"../modulepreload-polyfill.b7f2da20.js";import{W as r,C as d}from"../index.c0df7946.js";import{E as n}from"../index.0317c091.js";import{x as m}from"../vis-three.plugin-orbit-controls.es.1508a7f8.js";import{G as p}from"../index.5b5c1015.js";import{O as s}from"../index.e2e75f8b.js";import{E as g}from"../index.cee1ad1a.js";import{p as l,g as a}from"../vis-three.tdcm.es.ba892fff.js";import{f as c,w as f,k as h,h as u,c as S,g as P,e as y}from"../vis-three.module-particle.es.2f619925.js";import"../vis-three.module-helper.es.c2fc8b4c.js";import{g as b}from"../lil-gui.module.min.2435205c.js";import{L as M}from"../vis-three.strategy-orbit-controls-support.es.bfc29c0d.js";import"../curve.0ba3d968.js";import"../three.3f33d046.js";import"../ShaderPass.025732a5.js";import"../index.0a430562.js";import"../vis-three.plugin-loader-manager.es.3fc670d5.js";import"../vis-three.plugin-pointer-manager.es.28277630.js";import"../index.b5597af3.js";import"../G6.30609706.js";import"../Antdv.7b6104cc.js";import"../UnrealBloomPass.a03f7d16.js";import"../CSS3DRenderer.56d2804d.js";import"../vis-three.library-modifier.es.9bf56217.js";import"../vis-three.convenient.es.3345d486.js";const o=l({plugins:[r({antialias:!0,alpha:!0}),n({MSAA:!0}),d(),m(),p()],strategy:[s(),g(),M()],modules:[c,f,h,u,S,P,y]}).setDom(document.getElementById("app")).setSize().play();a.injectEngine=o;const i=a("Scene");o.setSceneBySymbol(i.vid);a.injectScene=i.vid;a("PointLight",{position:{x:30,y:50},distance:100});const A=a("MeshStandardMaterial"),w=a("BoxGeometry",{width:20,height:10,depth:20});a("Mesh",{material:A.vid,geometry:w.vid});const e=a("OrbitControls",{autoRotate:!0});window.engine=o;const t=new b;t.add(e,"enabled");t.add(e,"autoRotate");t.add(e,"autoRotateSpeed",-5,5,.1);t.add(e,"enableDamping");t.add(e,"dampingFactor",-5,5,.1);t.add(e,"enablePan");t.add(e,"panSpeed",-5,5,.1);t.add(e,"enableRotate");t.add(e,"rotateSpeed",-5,5,.1);t.add(e,"enableZoom");t.add(e,"zoomSpeed",-5,5,.1);t.add(e,"maxAzimuthAngle",-2*Math.PI,2*Math.PI,.1);t.add(e,"maxDistance",0,200,1);t.add(e,"maxPolarAngle",0,Math.PI,.1);t.add(e,"maxZoom",0,100,1);t.add(e,"minAzimuthAngle",-2*Math.PI,2*Math.PI,.1);t.add(e,"minDistance",0,200,1);t.add(e,"minPolarAngle",0,Math.PI,.1);t.add(e,"minZoom",0,100,1);window.addEventListener("resize",()=>{o.setSize()});