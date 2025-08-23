export declare class Action {
    /**
     * 该动作的下一步方法
     */
    next(): void;
    /**
     * 该动作的上一步方法
     */
    prev(): void;
}
export declare class History {
    private actionList;
    private index;
    private step;
    constructor(step?: number);
    private do;
    /**
     * 注册动作
     * @param action new class extends BasicAction
     * @param exec 是否立即执行动作的next
     */
    apply(action: Action, exec?: boolean): void;
    /**
     * 恢复动作，执行当前动作的next
     * @returns
     */
    redo(): void;
    /**
     * 撤销动作，执行当前动作的prev
     * @returns
     */
    undo(): void;
    /**
     * 清空整个历史动作缓存
     */
    clear(): void;
}
