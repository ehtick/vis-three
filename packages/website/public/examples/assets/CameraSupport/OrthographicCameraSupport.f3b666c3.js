import"../common.006007ed.js";import{M as n,g as t}from"../Vis.es.a3304217.js";import{g as d}from"../lil-gui.module.min.2e05211e.js";import"../three.75af7ea3.js";import"../vis-three.69d8f933.js";const i=new n().setDom(document.getElementById("app")).setStats(!0).setSize().play();t.injectEngine=i;const a=t("Scene");i.setScene(a.vid);t.injectScene=a.vid;t("PointLight",{position:{x:30,y:50},distance:100});const r=t("MeshStandardMaterial"),s=t("BoxGeometry",{width:20,height:10,depth:20}),m=t("Mesh",{material:r.vid,geometry:s.vid}),e=t("OrthographicCamera",{far:200,position:{y:50},zoom:16,lookAt:m.vid}),o=new d;o.add(e,"left",-2e3,2e3,10);o.add(e,"right",-2e3,2e3,10);o.add(e,"top",-2e3,2e3,10);o.add(e,"bottom",-2e3,2e3,10);o.add(e,"near",0,2e3,10);o.add(e,"far",0,2e3,10);o.add(e,"zoom",0,50,1);o.add(e,"adaptiveWindow");document.getElementById("default").onclick=()=>{i.setViewpoint("default")};document.getElementById("orthographicCamera").onclick=()=>{i.setCamera(e.vid)};window.addEventListener("resize",()=>{i.setSize()});