import { combineReducers } from 'redux'
import _ from 'lodash'
import actions from '../../actions'

const formatReducers = (actions) => {
    const allReducers = []
    _.forEach(_.keys(actions), k1 => {
        const reducers = actions[k1].reducers
        _.forEach(_.keys(reducers), k2 => {
            allReducers.push(reducers[k2])
        })
    })
    return allReducers
}


const rootReducer = combineReducers({
    ...formatReducers(actions)
})

export default rootReducer
