
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './App'
import reducers from './reducers/index'

import firebase from 'firebase'
import config from './config_react'

  firebase.initializeApp(config);

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
    </Provider>, document.getElementById('react-root')
)