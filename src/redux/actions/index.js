/**
 * action定义
 */
import * as actions from '../actions/index'
export const THEME_COLOR = 'THEME_COLOR'

export const setThemeColor = (color) => {
    return {
        type: THEME_COLOR,
        color: color
    }
}

export default {...actions}
