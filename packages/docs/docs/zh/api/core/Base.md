# 基座

`vis-three`的底层逻辑基座，集成了插件的安装销毁逻辑与策略的执行回滚辑，可以直接使用或通过继承供其他环境使用。

## 示例

```ts
class CesiumEngine extends Base {}

const engine = new CesiumEngine();

engine
  .install(CesiumRendererPlugin())
  .install(RenderManagerPlugin())
  .exec(CesiumRenderStrategy());

engine.rollback("CesiumRenderStrategy");
```

## 继承

[EventDispatcher](./EventDispatcher.md)

## 构造

无

## 属性

### pluginTables

安装的插件集合。

- **类型**

```ts
Map<string, PluginOptions<Base>>;
```

### strategyTables

安装的策略集合。

- **类型**

```ts
Map<string, StrategyOptions<Base>>;
```

## 方法

### install

- **详情**

```ts
/**
 * 安装插件
 * @param plugin 插件选项对象
 * @returns this
 */
install<E extends Base>(plugin: PluginOptions<E>): E
```

- **示例**

```ts
const engine = new Base();

engine.install(
  CesiumRendererPlugin({
    alpha: true,
  })
);
```

### uninstall

- **详情**

```ts
/**
 * 卸载插件
 * @param name 插件名称
 * @returns this
 */
uninstall(name: string): this
```

- **示例**

```ts
const engine = new Base();

engine.uninstall("CesiumRendererPlugin");
```

### exec

- **详情**

```ts
/**
 * 执行策略
 * @param strategy 策略选项对象
 * @returns this
 */
exec<E extends Base>(strategy: StrategyOptions<E>): E
```

- **示例**

```ts
const engine = new Base();

engine.exec(CesiumRenderStrategy());
```

### rollback

- **详情**

```ts
/**
 * 回滚策略
 * @param name 策略名称
 * @returns this
 */
rollback(name: string): this
```

- **示例**

```ts
const engine = new Base();

engine.rollback("CesiumRenderStrategy");
```
