import"../modulepreload-polyfill.b7f2da20.js";import{M as i,B as a,a as r,P as m,L as d,b as p,V as g}from"../three.53c13b85.js";import{U as f}from"../UnrealBloomPass.3e69e790.js";import{W as l,C as c}from"../index.40bdee24.js";import{u}from"../index.8051b4a0.js";import{E as w}from"../index.0ac2cd23.js";const e=u({plugins:[l({antialias:!0,alpha:!0}),c(),w({WebGLMultisampleRenderTarget:!0})]}).setDom(document.getElementById("app")).setSize(),o=e.scene,n=new i(new a(10,10,10),new r({color:"rgb(255, 105, 100)"}));n.position.x=10;o.add(n);const t=new m("rgb(255, 255, 255)",1,300,0);t.position.y=30;o.add(t);const P=new d(n.geometry);o.add(P);const s=new p(n.geometry);s.position.x=-10;o.add(s);e.effectComposer.addPass(new f(new g(e.dom.offsetWidth,e.dom.offsetHeight),1.5,0,0));e.render();window.engine=e;