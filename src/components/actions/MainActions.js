/*
 * action 类型
 */
export const CHANGE_FIRST_LINE = 'CHANGE_FIRST_LINE';
export const CHANGE_SECOND_LINE = 'CHANGE_SECOND_LINE';

/*
 * action 创建函数
 */
export function changeFirstLine(text) {
    return {type: CHANGE_FIRST_LINE, text}
}

export function changeSecondLine(text) {
    return {type: CHANGE_SECOND_LINE, text}
}