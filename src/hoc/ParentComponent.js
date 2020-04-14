import React from 'react';
import Controller from "../actions";
import _ from 'lodash'

export default class ParentComponent extends React.Component {
    constructor(props) {
        super(props)
        this.dispatch = async (scope, payload) => {
            const controller = Controller[scope.controller]
            let cbData = await this.props.dispatch(controller[`${scope.controller}_${scope.method}`](payload))
            this.error(cbData)
            return cbData
        }
        this.loading = (scope) => {
            return this.props[`${scope.controller}_${scope.method}`].loading
        }
    }

    error = (cbData) => {
        const delay = 3200
        //判断请求数据是否出现异常

    }
}
