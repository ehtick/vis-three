(function(l,i){typeof exports=="object"&&typeof module!="undefined"?i(exports,require("three"),require("three/examples/jsm/lights/RectAreaLightUniformsLib.js"),require("three/src/lights/LightShadow"),require("three/examples/jsm/renderers/CSS2DRenderer"),require("three/examples/jsm/renderers/CSS3DRenderer")):typeof define=="function"&&define.amd?define(["exports","three","three/examples/jsm/lights/RectAreaLightUniformsLib.js","three/src/lights/LightShadow","three/examples/jsm/renderers/CSS2DRenderer","three/examples/jsm/renderers/CSS3DRenderer"],i):(l=typeof globalThis!="undefined"?globalThis:l||self,i((l.VIS=l.VIS||{},l.VIS.core={}),l.three,l.RectAreaLightUniformsLib_js,l.LightShadow,l.CSS2DRenderer,l.CSS3DRenderer))})(this,function(l,i,E,ue,de,H){"use strict";var qe=Object.defineProperty;var Je=(l,i,E)=>i in l?qe(l,i,{enumerable:!0,configurable:!0,writable:!0,value:E}):l[i]=E;var r=(l,i,E)=>(Je(l,typeof i!="symbol"?i+"":i,E),E);const me="0.4.0";window.__THREE__||console.error("vis-three dependent on three.js module, pleace run 'npm i three' first."),window.__VIS__?console.warn("Duplicate vis-three frames are introduced"):window.__VIS__=me;const j=new ue.LightShadow(new i.OrthographicCamera(-256,256,256,-256));j.autoUpdate=!1,j.needsUpdate=!1,i.AmbientLight.prototype.shadow=j,i.RectAreaLight.prototype.shadow=j,i.HemisphereLight.prototype.shadow=j,E.RectAreaLightUniformsLib.init();class I{constructor(){r(this,"listeners",new Map)}addEventListener(o,e){const n=this.listeners;n.has(o)||n.set(o,new Set),n.get(o).add(e)}hasEventListener(o,e){const n=this.listeners;return n.has(o)?n.get(o).has(e):!1}removeEventListener(o,e){const n=this.listeners;!n.has(o)||!n.get(o).has(e)||n.get(o).delete(e)}dispatchEvent(o){var s;const e=o.type,n=this.listeners;if(n.has(e))try{(s=n.get(e))==null||s.forEach(a=>{a.call(this,o)})}catch(a){console.error(a)}}clear(){this.listeners.clear()}useful(){return Boolean([...this.listeners.keys()].length)}once(o,e){const n=function(s){e.call(this,s),this.removeEventListener(o,n)};this.addEventListener(o,n)}emit(o,e={}){var s;const n=this.listeners;if(n.has(o))try{(s=n.get(o))==null||s.forEach(a=>{a.call(this,e)})}catch(a){console.error(a)}}on(o,e){this.addEventListener(o,e)}has(o,e){return this.hasEventListener(o,e)}off(o,e){if(e)this.removeEventListener(o,e);else{const n=this.listeners;if(!n.has(o))return;n.delete(o)}}}var F=(u=>(u.SETDOM="setDom",u.SETSIZE="setSize",u.SETCAMERA="setCamera",u.SETSCENE="setScene",u.DISPOSE="dispose",u))(F||{});class X extends I{constructor(){super();r(this,"pluginTables",new Map);r(this,"strategyTables",new Map);r(this,"dom",document.createElement("div"));r(this,"camera",new i.PerspectiveCamera);r(this,"scene",new i.Scene);r(this,"render");this.camera.position.set(50,50,50),this.render=function(){console.warn("can not install some plugin")}}install(e){if(this.pluginTables.has(e.name))return console.warn("This plugin already exists",e.name),this;const n=s=>this.pluginTables.has(s)?!0:(console.error(`${e.name} must install this plugin before: ${s}`),!1);if(e.deps)if(Array.isArray(e.deps))for(const s of e.deps)n(s);else n(e.deps);return e.install(this),this.pluginTables.set(e.name,e),this}unistall(e){return this.pluginTables.has(e)?(this.pluginTables.get(e).dispose(this),this.pluginTables.delete(e),this):this}exec(e){const n=this.strategyTables;if(n.has(e.name))return console.warn("This strategy already exists",e.name),this;const s=this.pluginTables;for(const a of e.condition)if(!s.has(a))return console.warn(`${e.name} does not meet the conditions for execution: ${a}`),this;return e.exec(this),n.set(e.name,e),this}rollback(e){const n=this.strategyTables;return n.has(e)?(n.get(e).rollback(this),n.delete(e),this):this}setDom(e){return this.dom=e,this.dispatchEvent({type:"setDom",dom:e}),this}setSize(e,n){var s,a;return e&&e<=0||n&&n<=0?(console.warn(`you must be input width and height bigger then zero, width: ${e}, height: ${n}`),this):(!e&&(e=((s=this.dom)==null?void 0:s.offsetWidth)||window.innerWidth),!n&&(n=((a=this.dom)==null?void 0:a.offsetHeight)||window.innerHeight),this.dispatchEvent({type:"setSize",width:e,height:n}),this)}setCamera(e,n){return this.dispatchEvent({type:"setCamera",camera:e,oldCamera:this.camera,options:Object.assign({orbitControls:!0,transformControls:!0},n||{})}),this.camera=e,this}setScene(e){return this.dispatchEvent({type:"setScene",scene:e,oldScene:this.scene}),this.scene=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}}const pe=function(u){const o=new X;return u.plugins&&u.plugins.forEach(e=>{o.install(e)}),u.strategy&&u.strategy.forEach(e=>{o.exec(e)}),o},fe=function(u){return()=>u};class ge extends i.Texture{constructor(e,n,s,a,d,h,m,S,y){super(e,n,s,a,d,h,m,S,y);r(this,"isVideoTexture",!0);this.format=m!==void 0?m:i.RGBFormat,this.minFilter=h!==void 0?h:i.LinearFilter,this.magFilter=d!==void 0?d:i.LinearFilter,this.generateMipmaps=!1}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image,n="requestVideoFrameCallback"in e;n?this.needsUpdate=!0:n===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class W extends de.CSS2DObject{constructor(e=document.createElement("div")){const n=document.createElement("div"),s=50,a=50;n.style.width=`${s}px`,n.style.height=`${a}px`,n.appendChild(e);super(n);r(this,"geometry");r(this,"_width");r(this,"_height");this.geometry=new i.PlaneBufferGeometry(s,a),this.geometry.computeBoundingBox(),this._width=s,this._height=a}get width(){return this._width}set width(e){this.geometry.dispose(),this.geometry=new i.PlaneBufferGeometry(e,this._height),this.geometry.computeBoundingBox(),this.element.style.width=`${e}px`,this._width=e}get height(){return this._height}set height(e){this.geometry.dispose(),this.geometry=new i.PlaneBufferGeometry(this._width,e),this.geometry.computeBoundingBox(),this.element.style.height=`${e}px`,this._height=e}}class Z extends H.CSS3DObject{constructor(e=document.createElement("div")){const n=document.createElement("div"),s=50,a=50;n.style.width=`${s}px`,n.style.height=`${a}px`,n.appendChild(e);super(n);r(this,"geometry");r(this,"_width");r(this,"_height");this.geometry=new i.PlaneBufferGeometry(s,a),this.geometry.computeBoundingBox(),this._width=s,this._height=a}get width(){return this._width}set width(e){this.geometry.dispose(),this.geometry=new i.PlaneBufferGeometry(e,this._height),this.geometry.computeBoundingBox(),this.element.style.width=`${e}px`,this._width=e}get height(){return this._height}set height(e){this.geometry.dispose(),this.geometry=new i.PlaneBufferGeometry(this._width,e),this.geometry.computeBoundingBox(),this.element.style.height=`${e}px`,this._height=e}}class $ extends H.CSS3DSprite{constructor(e=document.createElement("div")){const n=document.createElement("div"),s=50,a=50;n.style.width=`${s}px`,n.style.height=`${a}px`,n.appendChild(e),e.classList.add("vis-css3d","vis-css3d-sprite");super(n);r(this,"geometry");r(this,"_width");r(this,"_height");r(this,"cacheBox",new i.Box3);r(this,"cachePosition",new i.Vector3);r(this,"cacheQuaternion",new i.Quaternion);r(this,"cacheScale",new i.Vector3);r(this,"cacheMatrix4",new i.Matrix4);r(this,"rotateMatrix4",new i.Matrix4);this.geometry=new i.PlaneBufferGeometry(s,a),this.geometry.computeBoundingBox(),this._width=s,this._height=a,this.type="CSS3DSprite"}get width(){return this._width}set width(e){this.geometry.dispose(),this.geometry=new i.PlaneBufferGeometry(e,this._height),this.geometry.computeBoundingBox(),this.element.style.width=`${e}px`,this._width=e}get height(){return this._height}set height(e){this.geometry.dispose(),this.geometry=new i.PlaneBufferGeometry(this._width,e),this.geometry.computeBoundingBox(),this.element.style.height=`${e}px`,this._height=e}raycast(e,n){const s=this.cacheBox.copy(this.geometry.boundingBox);this.matrixWorld.decompose(this.cachePosition,this.cacheQuaternion,this.cacheScale);const a=this.rotateMatrix4.lookAt(this.position,e.camera.position,this.up);this.cacheQuaternion.setFromRotationMatrix(a),this.cacheMatrix4.compose(this.cachePosition,this.cacheQuaternion,this.cacheScale),s.applyMatrix4(this.cacheMatrix4),e.ray.intersectsBox(s)&&n.push({distance:e.ray.origin.distanceTo(this.position),object:this,point:this.position})}}class ye extends I{constructor(e,n){super();r(this,"object");r(this,"domElement");r(this,"enabled",!0);r(this,"target",new i.Vector3);r(this,"minDistance",0);r(this,"maxDistance",1/0);r(this,"minZoom",0);r(this,"maxZoom",1/0);r(this,"minPolarAngle",0);r(this,"maxPolarAngle",Math.PI);r(this,"minAzimuthAngle",-1/0);r(this,"maxAzimuthAngle",1/0);r(this,"enableDamping",!1);r(this,"dampingFactor",.05);r(this,"enableZoom",!0);r(this,"zoomSpeed",1);r(this,"enableRotate",!0);r(this,"rotateSpeed",1);r(this,"enablePan",!0);r(this,"panSpeed",1);r(this,"screenSpacePanning",!0);r(this,"keyPanSpeed",7);r(this,"autoRotate",!1);r(this,"autoRotateSpeed",2);r(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"});r(this,"mouseButtons",{LEFT:null,MIDDLE:i.MOUSE.DOLLY,RIGHT:i.MOUSE.ROTATE});r(this,"touches",{ONE:i.TOUCH.ROTATE,TWO:i.TOUCH.DOLLY_PAN});r(this,"target0");r(this,"position0");r(this,"zoom0");r(this,"_domElementKeyEvents",null);r(this,"spherical");r(this,"reset");r(this,"update");r(this,"onContextMenu");r(this,"onPointerDown");r(this,"onPointerCancel");r(this,"onMouseWheel");r(this,"onPointerMove");r(this,"onPointerUp");r(this,"onKeyDown");this.object=e||new i.PerspectiveCamera,this.domElement=n||document.createElement("div"),this.domElement.style.touchAction="none",this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.update=(()=>{const t=new i.Vector3,c=new i.Quaternion().setFromUnitVectors(this.object.up,new i.Vector3(0,1,0)),f=c.clone().invert(),g=new i.Vector3,P=new i.Quaternion,x=2*Math.PI;return()=>{const le=this.object.position;t.copy(le).sub(this.target),t.applyQuaternion(c),h.setFromVector3(t),this.autoRotate&&a===s.NONE&&U(Re()),this.enableDamping?(h.theta+=m.theta*this.dampingFactor,h.phi+=m.phi*this.dampingFactor):(h.theta+=m.theta,h.phi+=m.phi);let w=this.minAzimuthAngle,b=this.maxAzimuthAngle;return isFinite(w)&&isFinite(b)&&(w<-Math.PI?w+=x:w>Math.PI&&(w-=x),b<-Math.PI?b+=x:b>Math.PI&&(b-=x),w<=b?h.theta=Math.max(w,Math.min(b,h.theta)):h.theta=h.theta>(w+b)/2?Math.max(w,h.theta):Math.min(b,h.theta)),h.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,h.phi)),h.makeSafe(),h.radius*=S,h.radius=Math.max(this.minDistance,Math.min(this.maxDistance,h.radius)),this.enableDamping===!0?this.target.addScaledVector(y,this.dampingFactor):this.target.add(y),t.setFromSpherical(h),t.applyQuaternion(f),le.copy(this.target).add(t),this.object.lookAt(this.target),this.enableDamping===!0?(m.theta*=1-this.dampingFactor,m.phi*=1-this.dampingFactor,y.multiplyScalar(1-this.dampingFactor)):(m.set(0,0,0),y.set(0,0,0)),S=1,_||g.distanceToSquared(this.object.position)>d||8*(1-P.dot(this.object.quaternion))>d?(this.dispatchEvent({type:"change"}),g.copy(this.object.position),P.copy(this.object.quaternion),_=!1,!0):!1}})();const s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=s.NONE;const d=1e-6,h=new i.Spherical,m=new i.Spherical;let S=1;const y=new i.Vector3;let _=!1;const T=new i.Vector2,C=new i.Vector2,M=new i.Vector2,L=new i.Vector2,v=new i.Vector2,D=new i.Vector2,O=new i.Vector2,A=new i.Vector2,V=new i.Vector2,p=[],G={},Re=()=>2*Math.PI/60/60*this.autoRotateSpeed,k=()=>Math.pow(.95,this.zoomSpeed),U=t=>{m.theta-=t},K=t=>{m.phi-=t},Q=function(){const t=new i.Vector3;return function(f,g){t.setFromMatrixColumn(g,0),t.multiplyScalar(-f),y.add(t)}}(),q=(()=>{const t=new i.Vector3;return(c,f)=>{this.screenSpacePanning===!0?t.setFromMatrixColumn(f,1):(t.setFromMatrixColumn(f,0),t.crossVectors(this.object.up,t)),t.multiplyScalar(c),y.add(t)}})(),B=(()=>{const t=new i.Vector3;return(c,f)=>{const g=this.domElement;if(this.object instanceof i.PerspectiveCamera){const P=this.object.position;t.copy(P).sub(this.target);let x=t.length();x*=Math.tan(this.object.fov/2*Math.PI/180),Q(2*c*x/g.clientHeight,this.object.matrix),q(2*f*x/g.clientHeight,this.object.matrix)}else this.object instanceof i.OrthographicCamera?(Q(c*(this.object.right-this.object.left)/this.object.zoom/g.clientWidth,this.object.matrix),q(f*(this.object.top-this.object.bottom)/this.object.zoom/g.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}})(),N=t=>{this.object instanceof i.PerspectiveCamera?S/=t:this.object instanceof i.OrthographicCamera?(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom*t)),this.object.updateProjectionMatrix(),_=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)},J=t=>{this.object instanceof i.PerspectiveCamera?S*=t:this.object instanceof i.OrthographicCamera?(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/t)),this.object.updateProjectionMatrix(),_=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)};function ee(t){T.set(t.clientX,t.clientY)}function Ve(t){O.set(t.clientX,t.clientY)}function te(t){L.set(t.clientX,t.clientY)}const _e=t=>{C.set(t.clientX,t.clientY),M.subVectors(C,T).multiplyScalar(this.rotateSpeed);const c=this.domElement;U(2*Math.PI*M.x/c.clientHeight),K(2*Math.PI*M.y/c.clientHeight),T.copy(C),this.update()},Ge=t=>{A.set(t.clientX,t.clientY),V.subVectors(A,O),V.y>0?N(k()):V.y<0&&J(k()),O.copy(A),this.update()},ke=t=>{v.set(t.clientX,t.clientY),D.subVectors(v,L).multiplyScalar(this.panSpeed),B(D.x,D.y),L.copy(v),this.update()},Ie=t=>{t.deltaY<0?J(k()):t.deltaY>0&&N(k()),this.update()},Ue=t=>{let c=!1;switch(t.code){case this.keys.UP:B(0,this.keyPanSpeed),c=!0;break;case this.keys.BOTTOM:B(0,-this.keyPanSpeed),c=!0;break;case this.keys.LEFT:B(this.keyPanSpeed,0),c=!0;break;case this.keys.RIGHT:B(-this.keyPanSpeed,0),c=!0;break}c&&(t.preventDefault(),this.update())};function ie(){if(p.length===1)T.set(p[0].pageX,p[0].pageY);else{const t=.5*(p[0].pageX+p[1].pageX),c=.5*(p[0].pageY+p[1].pageY);T.set(t,c)}}function se(){if(p.length===1)L.set(p[0].pageX,p[0].pageY);else{const t=.5*(p[0].pageX+p[1].pageX),c=.5*(p[0].pageY+p[1].pageY);L.set(t,c)}}function ne(){const t=p[0].pageX-p[1].pageX,c=p[0].pageY-p[1].pageY,f=Math.sqrt(t*t+c*c);O.set(0,f)}const Ne=()=>{this.enableZoom&&ne(),this.enablePan&&se()},ze=()=>{this.enableZoom&&ne(),this.enableRotate&&ie()},oe=t=>{if(p.length==1)C.set(t.pageX,t.pageY);else{const f=Y(t),g=.5*(t.pageX+f.x),P=.5*(t.pageY+f.y);C.set(g,P)}M.subVectors(C,T).multiplyScalar(this.rotateSpeed);const c=this.domElement;U(2*Math.PI*M.x/c.clientHeight),K(2*Math.PI*M.y/c.clientHeight),T.copy(C)},re=t=>{if(p.length===1)v.set(t.pageX,t.pageY);else{const c=Y(t),f=.5*(t.pageX+c.x),g=.5*(t.pageY+c.y);v.set(f,g)}D.subVectors(v,L).multiplyScalar(this.panSpeed),B(D.x,D.y),L.copy(v)},ae=t=>{const c=Y(t),f=t.pageX-c.x,g=t.pageY-c.y,P=Math.sqrt(f*f+g*g);A.set(0,P),V.set(0,Math.pow(A.y/O.y,this.zoomSpeed)),N(V.y),O.copy(A)},Ye=t=>{this.enableZoom&&ae(t),this.enablePan&&re(t)},He=t=>{this.enableZoom&&ae(t),this.enableRotate&&oe(t)};this.onPointerDown=t=>{this.enabled!==!1&&(p.length===0&&(this.domElement.addEventListener("pointermove",this.onPointerMove),this.domElement.addEventListener("pointerup",this.onPointerUp)),Qe(t),t.pointerType==="touch"?Ze(t):Fe(t))};let z=!1;this.onPointerMove=t=>{this.enabled!==!1&&(z||(this.domElement.setPointerCapture(t.pointerId),z=!0),t.pointerType==="touch"?$e(t):Xe(t))},this.onPointerUp=t=>{this.enabled!==!1&&(z=!1,t.pointerType==="touch"?Ke():We(),he(t),p.length===0&&(this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this.onPointerMove),this.domElement.removeEventListener("pointerup",this.onPointerUp)))},this.onPointerCancel=t=>{he(t)};const Fe=t=>{let c;switch(t.button){case 0:c=this.mouseButtons.LEFT;break;case 1:c=this.mouseButtons.MIDDLE;break;case 2:c=this.mouseButtons.RIGHT;break;default:c=-1}switch(c){case i.MOUSE.DOLLY:if(this.enableZoom===!1)return;Ve(t),a=s.DOLLY;break;case i.MOUSE.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;te(t),a=s.PAN}else{if(this.enableRotate===!1)return;ee(t),a=s.ROTATE}break;case i.MOUSE.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;ee(t),a=s.ROTATE}else{if(this.enablePan===!1)return;te(t),a=s.PAN}break;default:a=s.NONE}a!==s.NONE&&this.dispatchEvent({type:"start"})},Xe=t=>{if(this.enabled!==!1)switch(a){case s.ROTATE:if(this.enableRotate===!1)return;_e(t);break;case s.DOLLY:if(this.enableZoom===!1)return;Ge(t);break;case s.PAN:if(this.enablePan===!1)return;ke(t);break}},We=t=>{this.dispatchEvent({type:"end"}),a=s.NONE};this.onMouseWheel=t=>{this.enabled===!1||this.enableZoom===!1||a!==s.NONE||(t.preventDefault(),this.dispatchEvent({type:"start"}),Ie(t),this.dispatchEvent({type:"end"}))},this.onKeyDown=t=>{this.enabled===!1||this.enablePan===!1||Ue(t)};const Ze=t=>{switch(ce(t),p.length){case 1:switch(this.touches.ONE){case i.TOUCH.ROTATE:if(this.enableRotate===!1)return;ie(),a=s.TOUCH_ROTATE;break;case i.TOUCH.PAN:if(this.enablePan===!1)return;se(),a=s.TOUCH_PAN;break;default:a=s.NONE}break;case 2:switch(this.touches.TWO){case i.TOUCH.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;Ne(),a=s.TOUCH_DOLLY_PAN;break;case i.TOUCH.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;ze(),a=s.TOUCH_DOLLY_ROTATE;break;default:a=s.NONE}break;default:a=s.NONE}a!==s.NONE&&this.dispatchEvent({type:"start"})},$e=t=>{switch(ce(t),a){case s.TOUCH_ROTATE:if(this.enableRotate===!1)return;oe(t),this.update();break;case s.TOUCH_PAN:if(this.enablePan===!1)return;re(t),this.update();break;case s.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;Ye(t),this.update();break;case s.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;He(t),this.update();break;default:a=s.NONE}},Ke=t=>{this.dispatchEvent({type:"end"}),a=s.NONE};this.onContextMenu=t=>{this.enabled!==!1&&t.preventDefault()};function Qe(t){p.push(t)}const he=t=>{delete G[t.pointerId];for(let c=0;c<p.length;c++)if(p[c].pointerId==t.pointerId){p.splice(c,1);return}};function ce(t){let c=G[t.pointerId];c===void 0&&(c=new i.Vector2,G[t.pointerId]=c),c.set(t.pageX,t.pageY)}function Y(t){const c=t.pointerId===p[0].pointerId?p[1]:p[0];return G[c.pointerId]}this.spherical=h,this.domElement.addEventListener("contextmenu",this.onContextMenu),this.domElement.addEventListener("pointerdown",this.onPointerDown),this.domElement.addEventListener("pointercancel",this.onPointerCancel),this.domElement.addEventListener("wheel",this.onMouseWheel,{passive:!1}),this.reset=()=>{this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent({type:"change"}),this.update(),a=s.NONE},this.update()}getPolarAngle(){return this.spherical.phi}getAzimuthalAngle(){return this.spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this.onKeyDown),this._domElementKeyEvents=e}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}setCamera(e){this.object=e}setDom(e){this.dispose(),this.domElement=e,this.domElement.addEventListener("contextmenu",this.onContextMenu),this.domElement.addEventListener("pointerdown",this.onPointerDown),this.domElement.addEventListener("pointercancel",this.onPointerCancel),this.domElement.addEventListener("wheel",this.onMouseWheel,{passive:!1})}dispose(){this.domElement.removeEventListener("contextmenu",this.onContextMenu),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("pointercancel",this.onPointerCancel),this.domElement.removeEventListener("wheel",this.onMouseWheel),this.domElement.removeEventListener("pointermove",this.onPointerMove),this.domElement.removeEventListener("pointerup",this.onPointerUp),this._domElementKeyEvents!==null&&this._domElementKeyEvents.removeEventListener("keydown",this.onKeyDown)}}class we{}class be{constructor(o="rgb(230, 20, 240)",e="rgba(230, 20, 240, 0.15)"){r(this,"element");r(this,"startPoint");r(this,"pointTopLeft");r(this,"pointBottomRight");r(this,"isDown");const n=document.createElement("div");n.style.pointerEvents="none",n.style.border=`1px solid ${o}`,n.style.position="fixed",n.style.zIndex="100",n.style.backgroundColor=e,this.element=n,this.startPoint=new i.Vector2,this.pointTopLeft=new i.Vector2,this.pointBottomRight=new i.Vector2,this.isDown=!1}onSelectStart(o){this.isDown=!0,document.body.appendChild(this.element),this.element.style.left=o.clientX+"px",this.element.style.top=o.clientY+"px",this.element.style.width="0px",this.element.style.height="0px",this.startPoint.x=o.clientX,this.startPoint.y=o.clientY}onSelectMove(o){!this.isDown||(this.pointBottomRight.x=Math.max(this.startPoint.x,o.clientX),this.pointBottomRight.y=Math.max(this.startPoint.y,o.clientY),this.pointTopLeft.x=Math.min(this.startPoint.x,o.clientX),this.pointTopLeft.y=Math.min(this.startPoint.y,o.clientY),this.element.style.left=this.pointTopLeft.x+"px",this.element.style.top=this.pointTopLeft.y+"px",this.element.style.width=this.pointBottomRight.x-this.pointTopLeft.x+"px",this.element.style.height=this.pointBottomRight.y-this.pointTopLeft.y+"px")}onSelectOver(o){!this.isDown||(this.isDown=!1,document.body.removeChild(this.element))}}class Se extends i.Texture{constructor(o,e,n,s,a,d,h,m,S,y){super(o,e,n,s,a,d,h,m,S,y)}}class Pe extends i.Texture{constructor(o){super(),Object.keys(o).forEach(e=>{this[e]=o[e]}),this.copy(o)}}class xe extends W{constructor(e=document.createElement("div")){super(e);r(this,"cacheBox",new i.Box3);r(this,"viewWorldMatrix",new i.Matrix4);r(this,"mvPosition",new i.Vector3);r(this,"matrixScale",new i.Vector3);r(this,"worldScale",new i.Vector3);r(this,"vA",new i.Vector3);r(this,"vB",new i.Vector3);r(this,"vC",new i.Vector3);r(this,"alignedPosition",new i.Vector2);r(this,"rotatedPosition",new i.Vector2);r(this,"intersectPoint",new i.Vector3);this.type="CSS2DPlane",this.element.classList.add("vis-css2d","vis-css2d-plane"),new MutationObserver(()=>{this.matrixScale.set(Math.abs(this.width/100)*.1,Math.abs(this.height/100)*.1,1)}).observe(this.element,{attributeFilter:["style"]})}transformVertex(e,n,s){const a=this.alignedPosition,d=this.rotatedPosition,h=0,m=1;a.copy(e).multiply(s),d.x=m*a.x-h*a.y,d.y=h*a.x+m*a.y,e.copy(n),e.x+=d.x,e.y+=d.y,e.applyMatrix4(this.viewWorldMatrix)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),this.viewWorldMatrix.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),this.mvPosition.setFromMatrixPosition(this.modelViewMatrix),this.worldScale.copy(this.matrixScale).multiplyScalar(-this.mvPosition.z),this.transformVertex(this.vA.set(-.5,-.5,0),this.mvPosition,this.worldScale),this.transformVertex(this.vB.set(.5,-.5,0),this.mvPosition,this.worldScale),this.transformVertex(this.vC.set(.5,.5,0),this.mvPosition,this.worldScale);let s=e.ray.intersectTriangle(this.vA,this.vB,this.vC,!1,this.intersectPoint);if(s===null&&(this.transformVertex(this.vB.set(-.5,.5,0),this.mvPosition,this.worldScale),s=e.ray.intersectTriangle(this.vA,this.vC,this.vB,!1,this.intersectPoint),s===null))return;const a=e.ray.origin.distanceTo(this.intersectPoint);a<e.near||a>e.far||n.push({distance:a,point:this.intersectPoint.clone(),face:null,object:this})}}class Ee extends Z{constructor(e=document.createElement("div")){super(e);r(this,"cacheBox",new i.Box3);this.type="CSS3DPlane",this.element.classList.add("vis-css3d","vis-css3d-plane")}raycast(e,n){const s=this.cacheBox.copy(this.geometry.boundingBox);s.applyMatrix4(this.matrixWorld),e.ray.intersectsBox(s)&&n.push({distance:e.ray.origin.distanceTo(this.position),object:this,point:this.position})}}class Te extends ${constructor(o=document.createElement("div")){super(o),this.type="CSS3DSprite",this.element.classList.add("vis-css3d","vis-css3d-plane")}}class Ce extends i.BufferGeometry{constructor(e){super();r(this,"type","LoadBufferGeometry");e&&this.copy(e)}}class R extends i.BufferGeometry{constructor(e=[],n=36,s=!0){super();r(this,"parameters");this.type="CurveGeometry",this.parameters={path:e.map(a=>a.clone()),space:s,divisions:n}}}class Le extends R{constructor(o=[],e=36,n=!0){super(o,e,n),this.type="CubicBezierCurveGeometry";const s=new i.CurvePath;if(o.length<4){console.warn("CubicBezierCurveGeometry path length at least 4.");return}const a=4+(o.length-4)-(o.length-4)%3;for(let h=2;h<a;h+=3)s.add(new i.CubicBezierCurve3(o[h-2],o[h-1],o[h],o[h+1]));const d=s.curves.reduce((h,m)=>h+=m.arcLengthDivisions,0);if(e>d){const h=Math.ceil((e-d)/s.curves.length);s.curves.forEach(m=>{m.arcLengthDivisions=m.arcLengthDivisions*(h+1),m.updateArcLengths()})}this.setFromPoints(n?s.getSpacedPoints(e):s.getPoints(e))}}class ve extends R{constructor(o=[],e=36,n=!0){if(super(o,e,n),this.type="LineCurveGeometry",!o.length){console.warn("LineCurveGeometry path length at least 1.");return}const s=new i.CurvePath;for(let d=1;d<o.length;d+=1)s.add(new i.LineCurve3(o[d-1],o[d]));const a=s.curves.reduce((d,h)=>d+=h.arcLengthDivisions,0);if(e>a){const d=Math.ceil((e-a)/s.curves.length);s.curves.forEach(h=>{h.arcLengthDivisions=h.arcLengthDivisions*(d+1),h.updateArcLengths()})}this.setFromPoints(n?s.getSpacedPoints(e):s.getPoints(e))}}class Me extends R{constructor(o=[],e=36,n=!0){super(o,e,n),this.type="QuadraticBezierCurveGeometry";const s=new i.CurvePath;if(o.length<3){console.warn("QuadraticBezierCurveGeometry path length at least 3.");return}const a=3+(o.length-3)-(o.length-3)%2;for(let h=1;h<a;h+=2)s.add(new i.QuadraticBezierCurve3(o[h-1],o[h],o[h+1]));const d=s.curves.reduce((h,m)=>h+=m.arcLengthDivisions,0);if(e>d){const h=Math.ceil((e-d)/s.curves.length);s.curves.forEach(m=>{m.arcLengthDivisions=m.arcLengthDivisions*(h+1),m.updateArcLengths()})}this.setFromPoints(n?s.getSpacedPoints(e):s.getPoints(e))}}class De extends R{constructor(o=[],e=36,n=!0){if(super(o,e,n),this.type="SplineCurveGeometry",!o.length){console.warn("SplineCurveGeometry path length at least 1.");return}const s=new i.CatmullRomCurve3(o);this.setFromPoints(n?s.getSpacedPoints(e):s.getPoints(e))}}class Oe extends i.ShapeBufferGeometry{constructor(o=[new i.Vector2(0,0)],e=12){const n=new i.Shape,s=o[0];if(s){n.moveTo(s.x,s.y);for(let a=1;a<o.length;a+=1)n.lineTo(o[a].x,o[a].y)}super(n,e),this.type="LineShapeGeometry"}}class Ae extends i.TubeGeometry{constructor(o=[],e=64,n=1,s=8,a=!1){if(!o.length){console.warn("LineTubeGeometry path length at least 1.");return}const d=new i.CurvePath;for(let h=1;h<o.length;h+=1)d.add(new i.LineCurve3(o[h-1],o[h]));super(d,e,n,s,a),this.type="LineTubeGeometry"}}class Be extends i.TubeGeometry{constructor(o=[],e=64,n=1,s=8,a=!1){if(!o.length){console.warn("SplineTubeGeometry path length at least 1.");return}const d=new i.CatmullRomCurve3(o);super(d,e,n,s,a),this.type="SplineTubeGeometry"}}const je=function(u){return()=>u};l.CSS2DPlane=xe,l.CSS3DPlane=Ee,l.CSS3DSprite=Te,l.CubicBezierCurveGeometry=Le,l.CurveGeometry=R,l.ENGINE_EVENT=F,l.Engine=X,l.EventDispatcher=I,l.ImageTexture=Se,l.LineCurveGeometry=ve,l.LineShapeGeometry=Oe,l.LineTubeGeometry=Ae,l.LoadGeometry=Ce,l.LoadTexture=Pe,l.QuadraticBezierCurveGeometry=Me,l.SplineCurveGeometry=De,l.SplineTubeGeometry=Be,l.VideoTexture=ge,l.VisCSS2DObject=W,l.VisCSS3DObject=Z,l.VisCSS3DSprite=$,l.VisOrbitControls=ye,l.VisSelectionBox=we,l.VisSelectionHelper=be,l.defineEngine=pe,l.definePlugin=fe,l.defineStrategy=je,Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});