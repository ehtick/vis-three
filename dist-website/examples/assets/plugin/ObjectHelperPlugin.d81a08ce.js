import{D as r}from"../Vis.es.e8e1b9b6.js";import{M as c,i as l,o as p,p as d,k as m,g as w,x as g,u as y,q as b}from"../three.5dc0577a.js";import"../vis-three.a3d50446.js";const s=new r().install("ObjectHelper").complete().setDom(document.getElementById("app")).setSize().play(),e=s.scene,t=new c(new l(10,10,10),new p({color:"rgb(255, 105, 100)"}));t.position.x=10;e.add(t);const a=new d("rgb(255, 255, 255)",1,30,0);a.position.y=20;e.add(a);const h=new m(t.geometry,new w({color:"yellow"}));e.add(h);const i=new g(t.geometry,new y({color:"blue"}));i.position.x=-10;e.add(i);const o=new b(180/Math.PI*45,16/9,5,70);o.position.set(0,20,50);o.lookAt(0,0,0);e.add(o);let n=!0;document.getElementById("operate").onclick=M=>{n=!n,s.setObjectHelper({show:n})};