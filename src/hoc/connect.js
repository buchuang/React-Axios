/**
 * Created by 卜闯闯 on 20/4/27.
 */
import React from 'react'
import {connect as reduxConnect} from 'react-redux'
import Controller from "../actions";

export default function connect(states = null, dispatches = null) {
    return (WrappedComponent) => {
        const mapStateToProps = state => {
            const loading = (scope) => {
                return state[`${scope.controller}_${scope.method}`].loading
            }
            return states ? {...state, ...states(state), loading} : {...state, loading}
        }
        const error = (cbData) => {
            const delay = 3200
            //判断请求数据是否出现异常

        }
        const mapDispatchToProps = dispatchAsync => {
            const dispatch = async (scope, payload) => {
                const controller = Controller[scope.controller]
                let cbData = await dispatchAsync(controller[`${scope.controller}_${scope.method}`](payload))
                error(cbData)
                return cbData
            }
            return  dispatches ? { ...dispatches(dispatchAsync),dispatch} : {dispatch}
        }
        const Root = reduxConnect(mapStateToProps,mapDispatchToProps)(WrappedComponent)
        return class HOC extends React.Component {
            render() {
                return <Root {...this.props}/>
            }
        }
    }
}

