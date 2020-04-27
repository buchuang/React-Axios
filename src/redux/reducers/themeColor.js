import {THEME_COLOR} from '../actions/index'


export default (state = {}, action) =>{
    switch (action.type) {
        case THEME_COLOR:
            return {...action}
        default:
            return state
    }
}
