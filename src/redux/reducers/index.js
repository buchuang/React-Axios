/**
 * 集成所有的reducers
 */
import {combineReducers} from 'redux'
import actions from '../../actions'
import {formatReducers} from '../utils/index'
import themeColor from './themeColor'
export default combineReducers({
    ...formatReducers(actions),
    themeColor,
})

