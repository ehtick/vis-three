import{C as g,a as l,g as e}from"../Vis.es.0345dbb6.js";import"../three.8f03b6f1.js";import"../vis-three.9866afe7.js";const m=new g({width:256,height:256}).draw(t=>{t.textBaseline="middle",t.textAlign="center",t.fillStyle="rgb(206, 42, 230)",t.font=" bold 72px \u5FAE\u8F6F\u96C5\u9ED1",t.fillText("LINE",128,128)}).preview(),n=new l().setDom(document.getElementById("app")).setSize().setStats(!0).registerResources({"example.canvas":m.get()}),i=e("PointLight",{position:{x:30,y:50},distance:100}),s=e("CanvasTexture",{url:"example.canvas"}),a=e("MeshStandardMaterial",{map:s.vid}),o=e("BoxGeometry",{width:20,height:20,depth:20,widthSegments:10,heightSegments:10,depthSegments:10}),r=e("Line",{material:a.vid,geometry:o.vid}),d=e("Scene",{children:[i.vid,r.vid]});n.applyConfig(i,s,a,o,r,d);n.setScene(d.vid).play();