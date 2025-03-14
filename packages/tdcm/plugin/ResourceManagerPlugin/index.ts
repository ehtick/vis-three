import { Engine, ENGINE_EVENT, Plugin } from "@vis-three/core";
import { ResourceManager } from "./ResourceManager";

export * from "./ResourceManager";
export * from "./Parser";
export interface ResourceManagerPluginParameters {
  resources?: { [key: string]: any };
}

export interface ResourceManagerEngine extends Engine {
  /**资源管理器 */
  resourceManager: ResourceManager;
  /**注册资源 */
  registerResources: (
    resourceMap: Record<string, unknown>
  ) => ResourceManagerEngine;
}

export const RESOURCE_MANAGER_PLUGIN = "ResourceManagerPlugin";

export const ResourceManagerPlugin: Plugin<
  ResourceManagerEngine,
  ResourceManagerPluginParameters
> = function (params: ResourceManagerPluginParameters = {}) {
  return {
    name: RESOURCE_MANAGER_PLUGIN,
    install(engine) {
      const resourceManager = new ResourceManager(params.resources);

      engine.resourceManager = resourceManager;

      engine.registerResources = (resourceMap: Record<string, unknown>) => {
        const map = new Map();
        Object.keys(resourceMap).forEach((key) => {
          map.set(key, resourceMap[key]);
        });
        resourceManager.mappingResource(map);
        return engine;
      };
    },

    dispose(engine) {
      engine.addEventListener(ENGINE_EVENT.DISPOSE, () => {
        engine.resourceManager.dispose();
      });
    },
  };
};
