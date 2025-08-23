import { PointLight as p, Mesh as g, BoxGeometry as E, MeshStandardMaterial as P, AmbientLight as v, SphereGeometry as R, WebGLRenderer as x, PCFSoftShadowMap as L, Scene as b, PerspectiveCamera as y, Vector3 as S, Object3D as z, Line as j, Points as C, Sprite as M } from "three";
class A {
  constructor(t) {
    this.canvas = document.createElement("canvas");
    const e = window.devicePixelRatio;
    this.canvas.width = ((t == null ? void 0 : t.width) || 512) * e, this.canvas.height = ((t == null ? void 0 : t.height) || 512) * e, this.canvas.style.backgroundColor = (t == null ? void 0 : t.bgColor) || "rgb(255, 255, 255)";
    const i = this.canvas.getContext("2d");
    i && i.scale(window.devicePixelRatio, window.devicePixelRatio);
  }
  /**
   * @deprecated use getDom
   */
  get() {
    return this.canvas;
  }
  /**
   * 获取canvas dom
   * @returns HTMLCanvasElement
   */
  getDom() {
    return this.canvas;
  }
  /**
   * 清空画布，不传参默认全部清除
   * @param x position x px
   * @param y  position z px
   * @param width width px
   * @param height height px
   * @returns this
   */
  clear(t = 0, e = 0, i, s) {
    !i && (i = this.canvas.width), !s && (s = this.canvas.height);
    const o = this.canvas.getContext("2d");
    return o ? (o.clearRect(t, e, i, s), this) : (console.warn("you browser can not support canvas 2d"), this);
  }
  /**
   * canvas绘制
   * @param fun callback(ctx)
   * @returns this
   */
  draw(t) {
    const e = this.canvas.getContext("2d");
    return e ? (t(e), this) : (console.warn("you browser can not support canvas 2d"), this);
  }
  /**
   * canvas预览
   * @param parameters style position
   * @returns this
   */
  preview(t) {
    const e = this.canvas;
    return e.style.position = "fixed", e.style.top = (t == null ? void 0 : t.top) || "5%", e.style.left = (t == null ? void 0 : t.left) || "5%", e.style.right = (t == null ? void 0 : t.right) || "unset", e.style.bottom = (t == null ? void 0 : t.bottom) || "unset", t != null && t.scale && (e.style.transform = `scale(${t.scale})`), document.body.appendChild(this.canvas), this;
  }
  /**
   * 设置canvas画布大小
   * @param width
   * @param height
   * @returns
   */
  setSize(t, e) {
    return this.canvas.width = t * devicePixelRatio, this.canvas.height = e * devicePixelRatio, this;
  }
}
class m {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map();
  }
  /**
   * 添加事件
   * @param type
   * @param listener
   * @returns
   */
  addEventListener(t, e) {
    const i = this.listeners;
    i.has(t) || i.set(t, []);
    const s = i.get(t);
    s.includes(e) || s.push(e);
  }
  /**
   * 是否有此事件
   * @param type
   * @param listener
   * @returns
   */
  hasEventListener(t, e) {
    const i = this.listeners;
    return i.has(t) ? i.get(t).includes(e) : !1;
  }
  /**
   * 移除事件
   * @param type
   * @param listener
   * @returns
   */
  removeEventListener(t, e) {
    const i = this.listeners;
    if (!i.has(t) || !i.get(t).includes(e))
      return;
    const s = i.get(t);
    s.splice(s.indexOf(e), 1);
  }
  /**
   * 移除该类型的所有事件
   * @param type
   * @returns
   */
  removeEvent(t) {
    const e = this.listeners;
    e.has(t) && e.delete(t);
  }
  /**
   * 触发事件
   * @param event
   */
  dispatchEvent(t) {
    var s;
    const e = t.type, i = this.listeners;
    if (i.has(e))
      try {
        (s = i.get(e)) == null || s.forEach((o) => {
          o.call(this, t);
        });
      } catch (o) {
        console.error(o);
      }
  }
  /**
   * 一次性事件触发
   * @param type
   * @param listener
   */
  once(t, e) {
    const i = function(s) {
      e.call(this, s), Promise.resolve(() => {
        this.removeEventListener(t, i);
      });
    };
    this.addEventListener(t, i);
  }
  /**
   * 触发事件
   * @param name
   * @param params
   */
  emit(t, e = {}) {
    var s;
    const i = this.listeners;
    if (i.has(t))
      try {
        (s = i.get(t)) == null || s.forEach((o) => {
          o.call(this, e);
        });
      } catch (o) {
        console.error(o);
      }
  }
  /**
   * 订阅事件
   * @param type
   * @param listener
   */
  on(t, e) {
    this.addEventListener(t, e);
  }
  /**
   * 是否有此事件
   * @param type
   * @param listener
   * @returns
   */
  has(t, e) {
    return this.hasEventListener(t, e);
  }
  /**
   * 移除事件
   * @param type
   * @param listener
   * @returns
   */
  off(t, e) {
    if (e)
      this.removeEventListener(t, e);
    else {
      const i = this.listeners;
      if (!i.has(t))
        return;
      i.delete(t);
    }
  }
  /**
   * 获取事件数量
   * @param type
   * @returns
   */
  eventCount(t) {
    return this.listeners.has(t) ? this.listeners.get(t).length : 0;
  }
  /**
   * 销毁该类型的最后一个事件
   * @param type
   * @returns
   */
  popLatestEvent(t) {
    this.listeners.has(t) && this.listeners.get(t).pop();
  }
  /**
   * 清空所有事件
   */
  clear() {
    this.listeners.clear();
  }
  /**
   * 当前派发器是否使用
   * @returns
   */
  useful() {
    return !![...this.listeners.keys()].length;
  }
}
var r;
(function(h) {
  h.RELOAD = "reload", h.UPDATE = "update";
})(r || (r = {}));
const c = class c extends m {
  constructor(t) {
    super(), this.data = new Proxy(t, {
      get: c.proxyGetter,
      set: c.proxySetter.bind(this)
    });
  }
  /**
   * 设置尺寸，会通过配置的width和height变化而自动触发
   * @returns this
   */
  setSize() {
    return this;
  }
  /**
   * 重绘画布，会通过配置的变化自动触发
   * @returns this
   */
  draw() {
    return this;
  }
};
c.proxyGetter = function(t, e, i) {
  return Reflect.get(t, e, i);
}, c.proxySetter = function(t, e, i, s) {
  const o = Reflect.set(t, e, i, s);
  return (e === "width" || e === "height") && (this.setSize(), this.dispatchEvent({
    type: r.RELOAD
  })), this.draw(), this.dispatchEvent({
    type: r.UPDATE
  }), o;
};
let a = c;
class H {
  /**
   * 该动作的下一步方法
   */
  next() {
    console.warn(`this action can not set next function: ${this.constructor.name}`);
  }
  /**
   * 该动作的上一步方法
   */
  prev() {
    console.warn(`this action can not set prev function: ${this.constructor.name}`);
  }
}
class W {
  constructor(t) {
    this.actionList = [], this.index = -1, this.step = 50, this.step = t || 50;
  }
  do(t) {
    this.actionList[this.index][t]();
  }
  /**
   * 注册动作
   * @param action new class extends BasicAction
   * @param exec 是否立即执行动作的next
   */
  apply(t, e = !1) {
    const i = this.actionList;
    this.index === i.length - 1 && i.length >= this.step ? (i.shift(), this.index = this.actionList.length - 1) : this.index !== -1 ? i.splice(this.index + 1, i.length - 1) : this.index === -1 && (this.actionList = []), this.actionList.push(t), e ? this.redo() : this.index += 1;
  }
  /**
   * 恢复动作，执行当前动作的next
   * @returns
   */
  redo() {
    if (this.index += 1, this.index > this.actionList.length - 1) {
      this.index = this.actionList.length - 1;
      return;
    }
    this.do("next");
  }
  /**
   * 撤销动作，执行当前动作的prev
   * @returns
   */
  undo() {
    this.index < 0 || (this.do("prev"), this.index -= 1);
  }
  /**
   * 清空整个历史动作缓存
   */
  clear() {
    this.actionList = [];
  }
}
const u = new p("rgb(255, 255, 255)", 0.5, 200, 1);
u.position.set(-30, 5, 20);
u.castShadow = !0;
const l = new g(new E(80, 2, 80), new P({
  color: "rgb(255, 255, 255)"
}));
l.position.set(0, -11, 0);
l.receiveShadow = !0;
l.castShadow = !0;
const n = class n {
  constructor(t) {
    const e = new x({
      antialias: !0,
      preserveDrawingBuffer: !0
    });
    e.setPixelRatio(window.devicePixelRatio), e.setClearColor("rgb(150, 150, 150)"), e.shadowMap.enabled = !0, e.shadowMap.type = L;
    const i = new b(), s = new y(45, window.innerWidth / window.innerHeight, 1, 500);
    s.position.set(0, 0, 35), s.up.x = 0, s.up.y = 1, s.up.z = 0, s.lookAt(new S(0, 0, 0)), i.add(n.ambientLight), i.add(n.pointLight), i.add(n.plane), this.scene = i, this.renderer = e, this.camera = s, this.object = new z(), t != null && t.material && this.setMaterial(t.material), t != null && t.dom && this.setDom(t.dom);
  }
  /**
   * 设置展示材质
   * @param material 要展示的材质
   * @returns this
   */
  setMaterial(t) {
    if (this.scene.remove(this.object), this.material = t, t.type.includes("Mesh") || t.type === "ShaderMaterial" || t.type === "RawShaderMaterial")
      this.object = new g(n.geometry, t);
    else if (t.type.includes("Line"))
      this.object = new j(n.geometry, t);
    else if (t.type.includes("Points"))
      this.object = new C(n.geometry, t);
    else if (t.type.includes("Sprite"))
      this.object = new M(t);
    else
      return console.warn(`material displayer can not support this type material: '${t.type}'`), this;
    return this.object.castShadow = !0, this.object.receiveShadow = !0, this.scene.add(this.object), this;
  }
  /**
   * 设置渲染的目标dom
   * @param dom
   * @returns this
   */
  setDom(t) {
    return this.dom = t, this.setSize(), t.appendChild(this.renderer.domElement), this;
  }
  /**
   * 设置整个展示器的尺寸，不传参默认目标dom大小
   * @param width
   * @param height
   * @returns this
   */
  setSize(t, e) {
    if (t && e)
      this.camera.aspect = t / e, this.camera.updateProjectionMatrix(), this.renderer.setSize(t, e, !0);
    else {
      if (!this.dom)
        return console.warn("material displayer must set dom before setSize with empty parameters"), this;
      const i = this.dom;
      this.camera.aspect = i.offsetWidth / i.offsetHeight, this.camera.updateProjectionMatrix(), this.renderer.setSize(i.offsetWidth, i.offsetHeight, !0);
    }
    return this;
  }
  /**
   * 渲染展示器
   */
  render() {
    this.renderer.render(this.scene, this.camera);
  }
  /**
   * 导出图片dataURL
   * @param mine 图片格式
   * @returns DataURL
   */
  getDataURL(t) {
    return this.renderer.domElement.toDataURL(t || "image/png");
  }
  /**
   * 销毁当前展示器的内存
   */
  dispose() {
    this.renderer.dispose();
  }
};
n.ambientLight = new v("rgb(255, 255, 255)", 0.7), n.pointLight = u, n.geometry = new R(10, 12, 12), n.plane = l, n.dispose = () => {
  n.geometry.dispose(), n.plane.geometry.dispose();
};
let f = n;
const d = class d {
  // 环境光
  constructor(t) {
    const e = new x({
      antialias: !0,
      preserveDrawingBuffer: !0
    });
    e.setPixelRatio(window.devicePixelRatio), e.setClearColor("rgb(150, 150, 150)"), e.shadowMap.enabled = !0, e.shadowMap.type = L;
    const i = new b(), s = new y(45, window.innerWidth / window.innerHeight, 1, 500);
    s.position.set(0, 0, 35), s.up.x = 0, s.up.y = 1, s.up.z = 0, s.lookAt(new S(0, 0, 0)), i.add(d.ambientLight), this.scene = i, this.renderer = e, this.camera = s, t != null && t.texture && this.setTexture(t.texture), t != null && t.dom && this.setDom(t.dom);
  }
  /**
   * 设置展示的贴图
   * @param texture 贴图
   * @returns this
   */
  setTexture(t) {
    return this.scene.background = t, this;
  }
  // 设置dom
  setDom(t) {
    return this.dom = t, this.setSize(), t.appendChild(this.renderer.domElement), this;
  }
  // 设置尺寸
  setSize(t, e) {
    if (t && e)
      this.camera.aspect = t / e, this.camera.updateProjectionMatrix(), this.renderer.setSize(t, e, !0);
    else {
      if (!this.dom)
        return console.warn("texture displayer must set dom before setSize with empty parameters"), this;
      const i = this.dom;
      this.camera.aspect = i.offsetWidth / i.offsetHeight, this.camera.updateProjectionMatrix(), this.renderer.setSize(i.offsetWidth, i.offsetHeight, !0);
    }
    return this;
  }
  // 渲染方法
  render() {
    this.renderer.render(this.scene, this.camera);
  }
  /**
   * 导出图片dataURL
   * @param mine 图片格式
   * @returns DataURL
   */
  getDataURL(t) {
    return this.renderer.domElement.toDataURL(t || "image/png");
  }
  // 销毁内存
  dispose() {
    this.renderer.dispose();
  }
};
d.ambientLight = new v("rgb(255, 255, 255)", 1);
let w = d;
export {
  H as Action,
  A as CanvasGenerator,
  a as CanvasReactor,
  m as EventDispatcher,
  W as History,
  f as MaterialDisplayer,
  r as RECT_EVENT,
  w as TextureDisplayer
};
