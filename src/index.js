import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './redux/reducers'
import App from './App';

const middleware = [ thunk ]

const store = createStore(
    reducers,
    applyMiddleware(...middleware)
)
window.pageHelper = {
    offsetAlias: 'pageSize',
    limitAlias: 'pageNum'
}
window.config = {
    lang: 'zh_CN'
}
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

