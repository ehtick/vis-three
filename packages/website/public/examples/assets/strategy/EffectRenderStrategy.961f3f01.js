import"../modulepreload-polyfill.b7f2da20.js";import{M as s,B as i,a as m,P as d,L as p,b as g,V as l}from"../three.837c9bb0.js";import{U as c}from"../UnrealBloomPass.caa1ad7b.js";import{W as f,C as u}from"../index.be5e1784.js";import{E as h}from"../index.db239e15.js";import{R as M}from"../index.813bc471.js";import{d as P}from"../index.5fd0e639.js";import{E as w}from"../index.c0066b9f.js";import"../Pass.1ae4f2a0.js";const e=P({plugins:[f({antialias:!0,alpha:!0}),u(),h({WebGLMultisampleRenderTarget:!0}),M()],strategy:[w()]}).setDom(document.getElementById("app")).setSize(),t=e.scene,o=new s(new i(10,10,10),new m({color:"rgb(255, 105, 100)"}));o.position.x=10;t.add(o);const n=new d("rgb(255, 255, 255)",1,300,0);n.position.y=30;t.add(n);const y=new p(o.geometry);t.add(y);const r=new g(o.geometry);r.position.x=-10;t.add(r);e.effectComposer.addPass(new c(new l(e.dom.offsetWidth,e.dom.offsetHeight),1.5,0,0));e.play();e.renderManager.addEventListener("render",a=>{e.camera.position.x=100*Math.sin(a.total),e.camera.position.z=100*Math.cos(a.total),e.camera.lookAt(0,0,0)});