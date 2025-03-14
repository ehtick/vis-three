import { Tween } from "@tweenjs/tween.js";
import {
  EngineSupport,
  ObjectEvent,
  RenderEvent,
  Vector3Config,
} from "@vis-three/tdcm";
import { BasicEventConfig, EventGenerator } from "@vis-three/module-object";
import { Object3D } from "three";
import { timingFunction, TIMINGFUNCTION } from "./common";
import { MeshConfig } from "@vis-three/module-mesh";

export interface MoveSpacing extends BasicEventConfig {
  params: {
    /**目标物体 */
    target: string;
    /**移动距离 */
    spacing: Vector3Config;
    /**延迟时间 */
    delay: number;
    /**动画持续时间 */
    duration: number;
    /**动画变化函数 */
    timingFunction: TIMINGFUNCTION;
  };
}

export const config: MoveSpacing = {
  name: "moveSpacing",
  params: {
    target: "",
    spacing: {
      x: 10,
      y: 10,
      z: 10,
    },
    delay: 0,
    duration: 1000,
    timingFunction: TIMINGFUNCTION.EASING_QUADRATIC_INOUT,
  },
};

export const generator: EventGenerator<MoveSpacing> = function (
  engine: EngineSupport,
  config: MoveSpacing
): (event?: ObjectEvent) => void {
  const params = config.params;
  const object = engine.getObjectBySymbol(params.target);

  if (!object) {
    console.warn(`can not found vid object: ${params.target}`);
    return () => {};
  }

  if (!(object instanceof Object3D)) {
    console.warn(`object is not instanceof Object3D: ${params.target}`);
    return () => {};
  }

  const renderManager = engine.renderManager!;
  // 同步配置
  const supportData = engine.getConfigBySymbol(params.target) as MeshConfig;

  // 防止重复触发
  let animating = false;

  return () => {
    if (animating) {
      return;
    }

    animating = true;

    const position = {
      x: object!.position.x + params.spacing.x,
      y: object!.position.y + params.spacing.y,
      z: object!.position.z + params.spacing.z,
    };
    const tween = new Tween(object!.position)
      .to(position)
      .duration(params.duration)
      .delay(params.delay)
      .easing(timingFunction[params.timingFunction])
      .start();

    const renderFun = (event: RenderEvent) => {
      tween.update();
    };

    renderManager.addEventListener<RenderEvent>("render", renderFun);

    tween.onComplete(() => {
      renderManager.removeEventListener<RenderEvent>("render", renderFun);
      supportData!.position.x = position.x;
      supportData!.position.y = position.y;
      supportData!.position.z = position.z;
      animating = false;
    });
  };
};
