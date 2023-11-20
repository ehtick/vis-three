import{P as y,M as u,B as L,a as S,A as f,bf as P,W as p,bG as v,S as w,h as g,q as x,v as M,L as E,b as R,a_ as C}from"./three.837c9bb0.js";var D=Object.defineProperty,z=(s,e,t)=>e in s?D(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,n=(s,e,t)=>(z(s,typeof e!="symbol"?e+"":e,t),t);class W{constructor(e){n(this,"canvas"),this.canvas=document.createElement("canvas");const t=window.devicePixelRatio;this.canvas.width=((e==null?void 0:e.width)||512)*t,this.canvas.height=((e==null?void 0:e.height)||512)*t,this.canvas.style.backgroundColor=(e==null?void 0:e.bgColor)||"rgb(255, 255, 255)";const i=this.canvas.getContext("2d");i&&i.scale(window.devicePixelRatio,window.devicePixelRatio)}get(){return this.canvas}getDom(){return this.canvas}clear(e=0,t=0,i,r){!i&&(i=this.canvas.width),!r&&(r=this.canvas.height);const o=this.canvas.getContext("2d");return o?(o.clearRect(e,t,i,r),this):(console.warn("you browser can not support canvas 2d"),this)}draw(e){const t=this.canvas.getContext("2d");return t?(e(t),this):(console.warn("you browser can not support canvas 2d"),this)}preview(e){const t=this.canvas;return t.style.position="fixed",t.style.top=(e==null?void 0:e.top)||"5%",t.style.left=(e==null?void 0:e.left)||"5%",t.style.right=(e==null?void 0:e.right)||"unset",t.style.bottom=(e==null?void 0:e.bottom)||"unset",e!=null&&e.scale&&(t.style.transform=`scale(${e.scale})`),document.body.appendChild(this.canvas),this}setSize(e,t){return this.canvas.width=e*devicePixelRatio,this.canvas.height=t*devicePixelRatio,this}}class j{constructor(){n(this,"listeners",new Map)}addEventListener(e,t){const i=this.listeners;i.has(e)||i.set(e,[]);const r=i.get(e);r.includes(t)||r.push(t)}hasEventListener(e,t){const i=this.listeners;return i.has(e)?i.get(e).includes(t):!1}removeEventListener(e,t){const i=this.listeners;if(!i.has(e)||!i.get(e).includes(t))return;const r=i.get(e);r.splice(r.indexOf(t),1)}removeEvent(e){const t=this.listeners;!t.has(e)||t.delete(e)}dispatchEvent(e){var t;const i=e.type,r=this.listeners;if(r.has(i))try{(t=r.get(i))==null||t.forEach(o=>{o.call(this,e)})}catch(o){console.error(o)}}once(e,t){const i=function(r){t.call(this,r),Promise.resolve(()=>{this.removeEventListener(e,i)})};this.addEventListener(e,i)}emit(e,t={}){var i;const r=this.listeners;if(r.has(e))try{(i=r.get(e))==null||i.forEach(o=>{o.call(this,t)})}catch(o){console.error(o)}}on(e,t){this.addEventListener(e,t)}has(e,t){return this.hasEventListener(e,t)}off(e,t){if(t)this.removeEventListener(e,t);else{const i=this.listeners;if(!i.has(e))return;i.delete(e)}}eventCount(e){return this.listeners.has(e)?this.listeners.get(e).length:0}popLatestEvent(e){!this.listeners.has(e)||this.listeners.get(e).pop()}clear(){this.listeners.clear()}useful(){return Boolean([...this.listeners.keys()].length)}}const d=class extends j{constructor(s){super(),n(this,"canvas"),n(this,"data"),this.data=new Proxy(s,{get:d.proxyGetter,set:d.proxySetter.bind(this)})}setSize(){return this}draw(){return this}};let m=d;n(m,"proxyGetter",function(s,e,t){return Reflect.get(s,e,t)});n(m,"proxySetter",function(s,e,t,i){const r=Reflect.set(s,e,t,i);return(e==="width"||e==="height")&&(this.setSize(),this.dispatchEvent({type:"reload"})),this.draw(),this.dispatchEvent({type:"update"}),r});class G{next(){console.warn(`this action can not set next function: ${this.constructor.name}`)}prev(){console.warn(`this action can not set prev function: ${this.constructor.name}`)}}class A{constructor(e){n(this,"actionList",[]),n(this,"index",-1),n(this,"step",50),this.step=e||50}do(e){this.actionList[this.index][e]()}apply(e,t=!1){const i=this.actionList;this.index===i.length-1&&i.length>=this.step?(i.shift(),this.index=this.actionList.length-1):this.index!==-1?i.splice(this.index+1,i.length-1):this.index===-1&&(this.actionList=[]),this.actionList.push(e),t?this.redo():this.index+=1}redo(){if(this.index+=1,this.index>this.actionList.length-1){this.index=this.actionList.length-1;return}this.do("next")}undo(){this.index<0||(this.do("prev"),this.index-=1)}clear(){this.actionList=[]}}const l=new y("rgb(255, 255, 255)",.5,200,1);l.position.set(-30,5,20);l.castShadow=!0;const c=new u(new L(80,2,80),new S({color:"rgb(255, 255, 255)"}));c.position.set(0,-11,0);c.receiveShadow=!0;c.castShadow=!0;const a=class{constructor(s){n(this,"material"),n(this,"dom"),n(this,"renderer"),n(this,"scene"),n(this,"camera"),n(this,"object");const e=new p({antialias:!0,preserveDrawingBuffer:!0});e.setPixelRatio(window.devicePixelRatio),e.setClearColor("rgb(150, 150, 150)"),e.shadowMap.enabled=!0,e.shadowMap.type=v;const t=new w,i=new g(45,window.innerWidth/window.innerHeight,1,500);i.position.set(0,0,35),i.up.x=0,i.up.y=1,i.up.z=0,i.lookAt(new x(0,0,0)),t.add(a.ambientLight),t.add(a.pointLight),t.add(a.plane),this.scene=t,this.renderer=e,this.camera=i,this.object=new M,s!=null&&s.material&&this.setMaterial(s.material),s!=null&&s.dom&&this.setDom(s.dom)}setMaterial(s){if(this.scene.remove(this.object),this.material=s,s.type.includes("Mesh")||s.type==="ShaderMaterial"||s.type==="RawShaderMaterial")this.object=new u(a.geometry,s);else if(s.type.includes("Line"))this.object=new E(a.geometry,s);else if(s.type.includes("Points"))this.object=new R(a.geometry,s);else if(s.type.includes("Sprite"))this.object=new C(s);else return console.warn(`material displayer can not support this type material: '${s.type}'`),this;return this.object.castShadow=!0,this.object.receiveShadow=!0,this.scene.add(this.object),this}setDom(s){return this.dom=s,this.setSize(),s.appendChild(this.renderer.domElement),this}setSize(s,e){if(s&&e)this.camera.aspect=s/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(s,e,!0);else{if(!this.dom)return console.warn("material displayer must set dom before setSize with empty parameters"),this;const t=this.dom;this.camera.aspect=t.offsetWidth/t.offsetHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(t.offsetWidth,t.offsetHeight,!0)}return this}render(){this.renderer.render(this.scene,this.camera)}getDataURL(s){return this.renderer.domElement.toDataURL(s||"image/png")}dispose(){this.renderer.dispose()}};let h=a;n(h,"ambientLight",new f("rgb(255, 255, 255)",.7));n(h,"pointLight",l);n(h,"geometry",new P(10,12,12));n(h,"plane",c);n(h,"dispose",()=>{a.geometry.dispose(),a.plane.geometry.dispose()});const b=class{constructor(s){n(this,"dom"),n(this,"texture"),n(this,"renderer"),n(this,"scene"),n(this,"camera");const e=new p({antialias:!0,preserveDrawingBuffer:!0});e.setPixelRatio(window.devicePixelRatio),e.setClearColor("rgb(150, 150, 150)"),e.shadowMap.enabled=!0,e.shadowMap.type=v;const t=new w,i=new g(45,window.innerWidth/window.innerHeight,1,500);i.position.set(0,0,35),i.up.x=0,i.up.y=1,i.up.z=0,i.lookAt(new x(0,0,0)),t.add(b.ambientLight),this.scene=t,this.renderer=e,this.camera=i,s!=null&&s.texture&&this.setTexture(s.texture),s!=null&&s.dom&&this.setDom(s.dom)}setTexture(s){return this.scene.background=s,this}setDom(s){return this.dom=s,this.setSize(),s.appendChild(this.renderer.domElement),this}setSize(s,e){if(s&&e)this.camera.aspect=s/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(s,e,!0);else{if(!this.dom)return console.warn("texture displayer must set dom before setSize with empty parameters"),this;const t=this.dom;this.camera.aspect=t.offsetWidth/t.offsetHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(t.offsetWidth,t.offsetHeight,!0)}return this}render(){this.renderer.render(this.scene,this.camera)}getDataURL(s){return this.renderer.domElement.toDataURL(s||"image/png")}dispose(){this.renderer.dispose()}};let _=b;n(_,"ambientLight",new f("rgb(255, 255, 255)",1));export{G as A,W as C,A as H,h as M,_ as T};