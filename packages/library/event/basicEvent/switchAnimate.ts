import {
  EngineSupport,
  ObjectEvent,
  RenderEvent,
  Vector3Config,
} from "@vis-three/tdcm";
import { BasicEventConfig, EventGenerator } from "@vis-three/module-object";
import { AnimationConfig } from "@vis-three/module-animation";

export interface SwitchAnimate extends BasicEventConfig {
  params: {
    /**目标动画 */
    target: string;
    /**自动播放，播放，关闭 */
    toggle: "auto" | "on" | "off";
    /**延迟时间 */
    delay: number;
  };
}

export const config: SwitchAnimate = {
  name: "switchAnimate",
  params: {
    target: "",
    toggle: "auto",
    delay: 0,
  },
};

export const generator: EventGenerator<SwitchAnimate> = function (
  engine: EngineSupport,
  config: SwitchAnimate
): (event?: ObjectEvent) => void {
  const params = config.params;
  const target = engine.getConfigBySymbol(params.target)! as AnimationConfig;

  if (!target) {
    console.warn(
      `basic event switchAnimate: can not found vid config: ${params.target}`
    );
    return () => {};
  }

  return () => {
    setTimeout(() => {
      if (params.toggle === "auto") {
        target.play != target.play;
        return;
      }

      if (params.toggle === "off") {
        target.play = false;
        return;
      }

      if (params.toggle === "on") {
        target.play = true;
        return;
      }
    }, params.delay);
  };
};
