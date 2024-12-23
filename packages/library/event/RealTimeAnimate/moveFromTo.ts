import { Tween } from "@tweenjs/tween.js";
import {
  EngineSupport,
  ObjectEvent,
  RenderEvent,
  Vector3Config,
} from "@vis-three/tdcm";
import { BasicEventConfig, EventGenerator } from "@vis-three/module-object";
import { timingFunction, TIMINGFUNCTION } from "./common";
import { ObjectConfig } from "@vis-three/module-object";

export interface moveFromTo extends BasicEventConfig {
  params: {
    /**目标物体 */
    target: string;
    /**起点位置 */
    from: Vector3Config;
    /**终点位置 */
    to: Vector3Config;
    /**延迟时间 */
    delay: number;
    /**动画持续时间 */
    duration: number;
    /**动画变化函数 */
    timingFunction: TIMINGFUNCTION;
  };
}

export const config: moveFromTo = {
  name: "moveFromTo",
  params: {
    target: "",
    from: {
      x: 0,
      y: 0,
      z: 0,
    },
    to: {
      x: 10,
      y: 10,
      z: 10,
    },
    delay: 0,
    duration: 1000,
    timingFunction: TIMINGFUNCTION.EASING_QUADRATIC_INOUT,
  },
};

export const generator: EventGenerator<moveFromTo> = function (
  engine: EngineSupport,
  config: moveFromTo
): (event?: ObjectEvent) => void {
  const params = config.params;
  const compiler = engine.compilerManager;
  const object = compiler.getObjectBySymbol(params.target);

  if (!object) {
    console.warn(
      `real time animation moveTO: can not found vid object: ${params.target}`
    );
    return () => {};
  }

  const renderManager = engine.renderManager!;
  // 同步配置
  const supportData = engine.dataSupportManager.getConfigBySymbol<ObjectConfig>(
    params.target
  );

  if (!supportData) {
    console.warn(`can not found object config: ${params.target}`);
    return () => {};
  }

  // 防止重复触发
  let animating = false;

  return () => {
    if (animating) {
      return;
    }

    animating = true;

    object.position.set(params.from.x, params.from.y, params.from.z);
    object.updateMatrix();
    object.updateMatrixWorld();

    const tween = new Tween(object!.position)
      .to(params.to)
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
      supportData!.position.x = params.to.x;
      supportData!.position.y = params.to.y;
      supportData!.position.z = params.to.z;
      animating = false;
    });
  };
};
