import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { setSeed } from './actions'

import thunk from 'redux-thunk'
import dex from './reducers'

import App from './components/App';

import './index.css';
import 'semantic-ui-css/semantic.css';

const history = createHistory()

let store = createStore(
    dex,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            routerMiddleware(history)
        )
    )
)

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

function boot() {
    const seed = localStorage.getItem('seed')
    if (seed) {
        store.dispatch(setSeed(seed))
    }
}

boot();
