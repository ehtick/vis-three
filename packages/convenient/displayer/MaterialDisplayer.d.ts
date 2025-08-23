import { AmbientLight, BoxGeometry, Material, Mesh, MeshStandardMaterial, PointLight, SphereGeometry } from "three";
export interface MaterialDisplayerParameters {
    /**展示的目标dom */
    dom?: HTMLElement;
    /**展示的材质 */
    material?: Material;
}
export declare class MaterialDisplayer {
    static ambientLight: AmbientLight;
    static pointLight: PointLight;
    static geometry: SphereGeometry;
    static plane: Mesh<BoxGeometry, MeshStandardMaterial, import("three").Object3DEventMap>;
    static dispose: () => void;
    private material?;
    private dom?;
    private renderer;
    private scene;
    private camera;
    private object;
    constructor(parameters?: MaterialDisplayerParameters);
    /**
     * 设置展示材质
     * @param material 要展示的材质
     * @returns this
     */
    setMaterial(material: Material): this;
    /**
     * 设置渲染的目标dom
     * @param dom
     * @returns this
     */
    setDom(dom: HTMLElement): this;
    /**
     * 设置整个展示器的尺寸，不传参默认目标dom大小
     * @param width
     * @param height
     * @returns this
     */
    setSize(width?: number, height?: number): this;
    /**
     * 渲染展示器
     */
    render(): void;
    /**
     * 导出图片dataURL
     * @param mine 图片格式
     * @returns DataURL
     */
    getDataURL(mine: string): string;
    /**
     * 销毁当前展示器的内存
     */
    dispose(): void;
}
