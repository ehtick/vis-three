import { EventDispatcher } from "../eventDispatcher";
export interface BaseData {
    width: number;
    height: number;
}
export declare enum RECT_EVENT {
    RELOAD = "reload",
    UPDATE = "update"
}
export declare class CanvasReactor<O extends BaseData = BaseData> extends EventDispatcher {
    static proxyGetter: (target: any, property: PropertyKey, value: any) => any;
    static proxySetter: (this: CanvasReactor, target: any, property: PropertyKey, value: any, receiver: any) => boolean;
    canvas: HTMLCanvasElement;
    data: O;
    constructor(config: O);
    /**
     * 设置尺寸，会通过配置的width和height变化而自动触发
     * @returns this
     */
    setSize(): this;
    /**
     * 重绘画布，会通过配置的变化自动触发
     * @returns this
     */
    draw(): this;
}
