import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import dex from './reducers'
import App from './components/App'

import './index.css';
import 'semantic-ui-css/semantic.css';


import './cc';

let store = createStore(
    dex,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

