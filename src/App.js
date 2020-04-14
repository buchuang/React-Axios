import React from 'react';
import ParentComponent from './hoc/ParentComponent';
import './App.scss';
import {AppController} from "./actions/controller";
import HOCCommon from './hoc/hocCommon'



class App extends ParentComponent {
    constructor(props) {
        super(props)
    }
    async componentDidMount() {
        let resp = await this.dispatch(AppController.create, {data: 111})
        console.log(resp)
    }
    render() {
        console.log(this.loading(AppController.create))
        return (
            <div className="App">
                <div className="content">111111</div>
            </div>
        );
    }
}

export default HOCCommon()(App)
