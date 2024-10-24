import JSONHandler from "./JSONHandler";
import { BasicConfig, createSymbol } from "../module";
import { EngineSupportLoadOptions } from "../engine";
import { LoadOptions } from "../plugin/DataSupportManagerPlugin";
import { generateConfig } from "../generateConfig";

export interface CloneResult {
  config: EngineSupportLoadOptions;
  detail: Record<string, string>;
}

/**
 * 克隆整个配置单
 * @param object EngineSupportLoadOptions
 * @param options 额外选项
 * - detail:bolean 返回clone映射 old -> new
 * - fillName 是否填充未命名的单位
 * - filter 过滤的选项，不会被克隆
 * @returns EngineSupportLoadOptions | CloneResult
 */
export const clone = (
  object: EngineSupportLoadOptions,
  options: {
    filter?: string[];
    detail?: boolean;
    fillName?: boolean | ((BasicConfig) => string);
  } = {}
): EngineSupportLoadOptions | CloneResult => {
  let jsonObject = JSON.stringify(object, JSONHandler.stringify);
  const detail: Record<string, string> = {};

  !options.filter && (options.filter = ["assets"]);

  const modulekeys = Object.keys(object).filter(
    (key) => !options.filter!.includes(key)
  );
  // 遍历所有的vid替换新的vid
  for (const modulekey of modulekeys) {
    for (const config of object[modulekey]) {
      const vid = config.vid;
      const newVid = createSymbol();
      jsonObject = jsonObject.replace(new RegExp(vid, "g"), newVid);
      if (options.detail) {
        detail[vid] = newVid;
      }
    }
  }

  const newConfig = JSON.parse(jsonObject, JSONHandler.parse);

  if (options.fillName) {
    if (typeof options.fillName === "function") {
      for (const modulekey of modulekeys) {
        for (const config of newConfig[modulekey]) {
          if (!config.name) {
            config.name = options.fillName(config);
          }
        }
      }
    } else {
      for (const modulekey of modulekeys) {
        for (const config of newConfig[modulekey]) {
          if (!config.name) {
            config.name = `${config.type}-${config.vid.slice(-2)}`;
          }
        }
      }
    }
  }

  return options.detail ? { config: newConfig, detail } : newConfig;
};

/**
 * 对配置单中的每个配置项做处理
 * @param object 需要模板处理的对象
 * @param handler 每个配置的处理方法
 * @param options
 * - filter 过滤的选项，不会被处理
 * - clone 是否为克隆处理，不克隆会直接影响原对象
 * @return 原对象或克隆对象
 */
export const handler = (
  object: EngineSupportLoadOptions,
  handler: (config: BasicConfig) => BasicConfig,
  options: {
    filter?: string[];
    clone?: boolean;
  } = {
    filter: ["assets"],
    clone: true,
  }
) => {
  const config = options.clone ? JSONHandler.clone(object) : object;

  !options.filter && (options.filter = ["assets"]);

  const modulekeys = Object.keys(config).filter(
    (key) => !options.filter!.includes(key)
  );

  for (const modulekey of modulekeys) {
    const module = config[modulekey];
    module.forEach((elem, i, arr) => {
      arr[i] = handler(elem);
    });
  }

  return config;
};

export const planish = function (
  configs: LoadOptions
): Record<string, BasicConfig> {
  const result = {};

  for (const module of Object.keys(configs)) {
    for (const config of configs[module]) {
      result[config.name] = config;
    }
  }

  return result;
};

/**
 * 将整个对象进行观察者转化，内部会进行深度拷贝，和使用`generateConfig` api
 * @param object 配置单结构
 * @param obCallback 转化完成后的处理
 * @returns 可观察的配置
 */
export const observable = function (
  object: EngineSupportLoadOptions | string,
  obCallback?: (config: BasicConfig) => BasicConfig
) {
  if (typeof object === "string") {
    object = JSON.parse(object, JSONHandler.parse);
  }

  return handler(JSONHandler.clone(object as EngineSupportLoadOptions), (c) => {
    c = generateConfig(c.type, c, { strict: false });

    if (obCallback) {
      return obCallback(c);
    } else {
      return c;
    }
  });
};

export default {
  clone,
  handler,
  planish,
  observable,
};
