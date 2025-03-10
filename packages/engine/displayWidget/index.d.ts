import { EngineWidget } from "@vis-three/widget";
import { Screenshot, WebGLRendererEngine } from "@vis-three/plugin-webgl-renderer";
import { CSS2DRendererEngine } from "@vis-three/plugin-css2d-renderer";
import { CSS3DRendererEngine } from "@vis-three/plugin-css3d-renderer";
import { EffectComposerEngine } from "@vis-three/plugin-effect-composer";
import { OrbitControlsEngine, VisOrbitControls } from "@vis-three/plugin-orbit-controls";
import { WebGLRenderer } from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer.js";
import { SceneEngineSupport } from "@vis-three/module-scene";
import { CameraEngineSupport } from "@vis-three/module-camera";
export declare class DisplayEngineWidget extends EngineWidget implements WebGLRendererEngine, EffectComposerEngine, OrbitControlsEngine, CSS2DRendererEngine, CSS3DRendererEngine, SceneEngineSupport, CameraEngineSupport {
    webGLRenderer: WebGLRenderer;
    effectComposer: EffectComposer;
    orbitControls: VisOrbitControls;
    css2DRenderer: CSS2DRenderer;
    css3DRenderer: CSS3DRenderer;
    getScreenshot: (params?: Screenshot | undefined) => Promise<string>;
    setSceneBySymbol: (scene: string) => this;
    setCameraBySymbol: (camera: string) => this;
    constructor();
}
