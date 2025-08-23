import { EventDispatcher } from "../eventDispatcher";
export var RECT_EVENT;
(function (RECT_EVENT) {
    RECT_EVENT["RELOAD"] = "reload";
    RECT_EVENT["UPDATE"] = "update";
})(RECT_EVENT || (RECT_EVENT = {}));
export class CanvasReactor extends EventDispatcher {
    static { this.proxyGetter = function (target, property, value) {
        return Reflect.get(target, property, value);
    }; }
    static { this.proxySetter = function (target, property, value, receiver) {
        const result = Reflect.set(target, property, value, receiver);
        if (property === "width" || property === "height") {
            this.setSize();
            this.dispatchEvent({
                type: RECT_EVENT.RELOAD,
            });
        }
        this.draw();
        this.dispatchEvent({
            type: RECT_EVENT.UPDATE,
        });
        return result;
    }; }
    constructor(config) {
        super();
        this.data = new Proxy(config, {
            get: CanvasReactor.proxyGetter,
            set: CanvasReactor.proxySetter.bind(this),
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
}
