import { 
  EventDispatcher,
  Clock,
  BaseEvent,

  } from "three";

// 渲染事件
export interface RenderEvent extends BaseEvent {
  delta: number
  total: number
}

export class RenderManager extends EventDispatcher<RenderEvent | BaseEvent> {

  private clock: Clock = new Clock() // 引擎时钟
  private animationFrame = -1 // 渲染定时器

  // 渲染
  render = (): void => {
    const clock: Clock = this.clock
    const delta: number = clock.getDelta()
    const total: number = clock.getElapsedTime()

    this.dispatchEvent({
      type: 'render',
      delta,
      total
    })
  }

  // 播放
  play = (): void => {
    this.dispatchEvent({
      type: 'play'
    })

    const playFun = () => {
      this.render()
      this.animationFrame =  requestAnimationFrame(playFun)
    }
    playFun()
  }

  // 停止渲染
  stop = (): void => {
    cancelAnimationFrame(this.animationFrame)
    this.animationFrame = -1
    this.dispatchEvent({
      type: 'stop'
    })
  }

  // 是否处于渲染当中
  checkHasRendering = (): boolean => {
    return this.animationFrame !== -1
  }

  // 是否有效渲染队列
  hasVaildRender = (): boolean => {
    // @ts-ignore
    if (!this._listeners) {
      return false
    }
    // @ts-ignore
    const listener = this._listeners['render']

    return listener && listener.length
  }
}