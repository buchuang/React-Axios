import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
export default function HOCCommon(){
    return function HOCFactory(WrappedComponent){
        const mapStateToProps = state => {
            const arr ={}
            _.forEach(_.keys(state), key => {
                arr[state[key].type] = state[key]
            })
            return {...arr}
        }
        const Root = connect(mapStateToProps)(WrappedComponent)
        return class HOC extends React.Component{
            render(){
                return <Root{...this.props}/>
            }
        }

    }
}

