import _ from 'lodash'
import ajaxUtil from './axios/ajaxUtil'

export default (name, controller) => {

    const start_request = (type) => ({
        type: type,
        loading: true,
        error: null,
        request: null,
        data: {},
    })
    const defaultState = (type) => ({
        type: type,
        loading: false,
        error: null,
        request: null,
        data: {},
    })
    let actions = {}
    let reducers = {}
    _.forEach(_.keys(controller.actions), key => {
        const action = controller.actions[key]
        actions[`${name}_${key}`] = (payload) => {
            return async (dispatch) => {
                dispatch(start_request(`${name}_${key}`))
                //网络请求
                let resp = {}
                try {
                    resp = await ajaxUtil.myRequest(action, payload)
                } catch (e) {
                    resp = e
                }
                let handleResult = null
                if (!resp) {
                    handleResult = {
                        type: `${name}_${key}`,
                        loading: false,
                        error: '系统错误',
                        data: null,
                    }
                } else if (resp.status >= 400 && resp.status < 500) {
                    if (resp.status === 401) {
                        handleResult = {
                            type: `${name}_${key}`,
                            loading: false,
                            error: '登录过期!',
                            data: {
                                code: 'AUTH_TOKEN_EXPIRED',
                            },
                        }
                    } else {
                        handleResult = {
                            type: `${name}_${key}`,
                            loading: false,
                            error: '错误!',
                            data: null,
                        }
                    }
                } else if (resp.status >= 500) {
                    handleResult = {
                        type: `${name}_${key}`,
                        loading: false,
                        error: resp.data ? (resp.data.message || resp.data.code) : 'unknow error',
                        data: resp.data,
                    }
                } else if (resp.status >= 200 && resp.status < 300) {
                    if (action.format) {
                        handleResult = {
                            type: `${name}_${key}`,
                            loading: false,
                            error: null,
                            request: payload,
                            data: action.format(resp.data),
                        }
                    } else {
                        handleResult = {
                            type: `${name}_${key}`,
                            ...ajaxUtil.apiHandler(resp),
                            request: payload,
                            responseHeaders: resp.headers,
                        }
                    }
                }
                dispatch(handleResult)
                return handleResult
            }
        }
        reducers[`${name}_${key}`] = (state = defaultState(`${name}_${key}`), action) => {
            switch (action.type) {
                case `${name}_${key}`:
                    return action
                default:
                    return state
            }
        }
    })
    return {...actions, reducers}
}

