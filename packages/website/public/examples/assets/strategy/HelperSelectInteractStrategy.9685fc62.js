import{v as d}from"../index.4424140c.js";import{M as m,B as l,a as g,P as c,L as p,b as u}from"../three.c9232d79.js";import{W as f,C as P}from"../index.4f3227eb.js";import{P as y}from"../index.263b27ed.js";import{E}from"../index.60f12b64.js";import{O as b}from"../index.71105b7b.js";import{S as h,T as v,a as w}from"../index.1295c70d.js";import{H as L}from"../index.cedb7fa3.js";import"../TextureDisplayer.5189c82c.js";const e=d({plugins:[f({antialias:!0,alpha:!0}),P(),y(),E(),h(),b(),v()],strategy:[w(),L()]}).setDom(document.getElementById("app")).setSize(),t=e.scene,n=new m(new l(10,10,10),new g({color:"rgb(255, 105, 100)"}));n.position.x=10;t.add(n);const o=new c("rgb(255, 255, 255)",1,300,0);o.position.y=15;t.add(o);const S=new p(n.geometry);t.add(S);const a=new u(n.geometry);a.position.x=-10;t.add(a);window.engine=e;e.render();e.addEventListener("selected",i=>{let r="";i.objects.forEach(s=>{r+=`<div class="selected-elem">${s.uuid}</div>`}),document.getElementById("selected").innerHTML=r,e.render()});e.transformControls.addEventListener("objectChange",()=>{e.render()});