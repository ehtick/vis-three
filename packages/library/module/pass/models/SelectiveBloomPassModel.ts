import { defineModel, MODULE_TYPE } from "@vis-three/tdcm";
import {
  getSelectiveBloomPassConfig,
  SelectiveBloomPassConfig,
} from "../PassConfig";
import { PassModuleEngine, PassCompiler } from "../PassCompiler";
import { SelectiveBloomPass } from "../extends/SelectiveBloomPass";
import { Camera, Object3D, Scene, Vector2 } from "three";

export default defineModel<
  SelectiveBloomPassConfig,
  SelectiveBloomPass,
  {},
  {},
  PassModuleEngine,
  PassCompiler
>({
  type: "SelectiveBloomPass",
  config: getSelectiveBloomPassConfig,
  commands: {
    add: {
      selectedObjects({ target, engine, value }) {
        const object = engine.getObject3D(value);
        if (object) {
          target.selectedObjects.push(object);
        } else {
          console.warn(
            `selectiveBloomPassProcessor: can not found vid in engine: ${value}`
          );
        }
      },
    },
    set: {
      renderScene({ target, engine, value }) {
        const object = engine.getObject3D(value);
        if (object instanceof Scene) {
          target.renderScene = object;
        } else {
          `selectiveBloomPassProcessor: can not set renderScene in engine: ${value}`;
        }
      },
      renderCamera({ target, engine, value }) {
        const object = engine.getObject3D(value);
        if (object instanceof Camera) {
          target.renderCamera = object;
        } else {
          `selectiveBloomPassProcessor: can not set renderCamera in engine: ${value}`;
        }
      },
      selectedObjects({ target, config, engine }) {
        const objects = config.selectedObjects
          .map((vid) => {
            const object = engine.getObject3D(vid);
            if (object) {
              return object;
            } else {
              console.warn(
                `selectiveBloomPassProcessor: can not found vid in engine: ${vid}`
              );
              return undefined;
            }
          })
          .filter((object) => object) as Object3D[];

        target.selectedObjects = objects;
      },
    },
    delete: {
      selectedObjects({ target, engine, value }) {
        const object = engine.getObject3D(value);
        if (object) {
          if (target.selectedObjects.includes(object)) {
            target.selectedObjects.splice(
              target.selectedObjects.indexOf(object),
              1
            );
          }
        } else {
          console.warn(
            `selectiveBloomPassProcessor: can not found vid in engine: ${value}`
          );
        }
      },
    },
  },
  create({ config, engine }) {
    const objects: Object3D[] = [];
    for (const vid of config.selectedObjects) {
      const object = engine.getObject3D(vid);
      object && objects.push(object);
    }

    const pixelRatio = window.devicePixelRatio;

    const pass = new SelectiveBloomPass(
      new Vector2(
        engine.dom
          ? engine.dom.offsetWidth * pixelRatio
          : window.innerWidth * pixelRatio,
        engine.dom
          ? engine.dom.offsetHeight * pixelRatio
          : window.innerWidth * pixelRatio
      ),
      config.strength,
      config.radius,
      config.threshold,
      ((config.renderScene &&
        engine.getObjectFromModule(
          MODULE_TYPE.SCENE,
          config.renderScene
        )) as Scene) || undefined,
      ((config.renderCamera &&
        engine.getObjectFromModule(
          MODULE_TYPE.CAMERA,
          config.renderCamera
        )) as Camera) || undefined,
      objects
    );

    return pass;
  },
  dispose({ target }) {
    target.dispose();
  },
});
