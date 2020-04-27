/**
 * Created by 卜闯闯 on 20/4/27.
 */
import _ from 'lodash'
export const formatReducers = (actions) => {
    const allReducers = {}
    _.forEach(_.keys(actions), k1 => {
        const reducers = actions[k1].reducers
        _.forEach(_.keys(reducers), k2 => {
            allReducers[k2] = reducers[k2]
        })
    })
    return allReducers
}
