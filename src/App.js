import React from 'react';
import './App.scss';
import {AppController} from "./actions/controller";
import connect from './hoc/connect'
import {setThemeColor} from './redux/actions'

class App extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    async componentDidMount() {
        this.props.setThemeColor("red")
        let resp = await this.props.dispatch(AppController.findByCriteria, {data: 111})
        console.log(resp)
    }
    render() {
        console.log(this.props.loading(AppController.findByCriteria))
        return (
            <div className="App">
                <div className="content">111111{this.props.themeColor.color}</div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setThemeColor: (color) => {
            dispatch(setThemeColor(color))
        }
    }
}
export default connect(null, mapDispatchToProps)(App)
