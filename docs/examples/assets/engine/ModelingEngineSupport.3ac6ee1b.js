import"../index.4424140c.js";import{g as e}from"../index.78634d72.js";import{E as o}from"../index.4885615c.js";import"../index.7c6e7a0c.js";import"../index.60f12b64.js";import"../index.7852bf6c.js";import"../index.263b27ed.js";import{W as i,C as a}from"../index.4f3227eb.js";import{E as n}from"../index.b258634a.js";import{O as s}from"../index.d0b96e45.js";import{S as m,T as p,a as l}from"../index.1295c70d.js";import{A as S}from"../index.9d92c10b.js";import{G as g}from"../index.01e9a77e.js";import{V as c}from"../index.022c67c5.js";import{S as f}from"../index.99b76596.js";import{K as d}from"../index.0a42f82e.js";import{O as u}from"../index.71105b7b.js";import{C as y,a as x}from"../index.3c49213a.js";import{C,a as h}from"../index.f941c4a3.js";import{E as P}from"../index.4509be7c.js";import{O as b}from"../index.a4d95c7b.js";import{O as R}from"../index.a05692be.js";import{S as E}from"../index.6e6533f1.js";import{G}from"../index.9cf5abfb.js";import{T as O}from"../index.4c692cb5.js";import{H as T}from"../index.cedb7fa3.js";import{C as w}from"../index.a421499a.js";import{C as M}from"../index.51c289eb.js";import{W as D}from"../index.45e13407.js";import{T as H}from"../index.080a7bc2.js";import{T as v}from"../index.94b5b771.js";import{O as W}from"../index.1675f760.js";import"../three.c9232d79.js";import"../G6.7751b749.js";import"../TextureDisplayer.5189c82c.js";import"../Antdv.05cc9b5f.js";import"../UnrealBloomPass.c6093897.js";class B extends o{constructor(r){super(r),this.install(i({antialias:!0,alpha:!0})).install(y()).install(C()).install(n({WebGLMultisampleRenderTarget:!0})).install(s()).install(a()).install(m()).install(S()).install(g()).install(c()).install(p()).install(f()).install(d()).install(u()),this.exec(x()).exec(h()).exec(P()).exec(b()).exec(R()).exec(l()).exec(E()).exec(G()).exec(O()).exec(T()).exec(w()).exec(M()).exec(D()).exec(H()).exec(v()).exec(W())}}const t=new B().setDom(document.getElementById("app")).setStats(!0).setSize().play();e.injectEngine=t;const L=e("Scene");t.setSceneBySymbol(L.vid);e.injectScene=!0;e("PointLight",{position:{x:30,y:50},distance:100});const V=e("MeshStandardMaterial",{color:"rgb(255, 0, 0)"}),j=e("BoxGeometry",{width:20,height:40,depth:60});e("BoxGeometry",{width:20,height:40,depth:60});e("Mesh",{geometry:j.vid,material:V.vid});window.engine=t;