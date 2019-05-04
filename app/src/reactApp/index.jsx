
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './App'
import reducers from './reducers/index'

import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCy1iqh6Vu39N6mvzB43KU2ZLEQXaht92A",
    authDomain: "fromscratch-7654a.firebaseapp.com",
    databaseURL: "https://fromscratch-7654a.firebaseio.com",
    projectId: "fromscratch-7654a",
    storageBucket: "fromscratch-7654a.appspot.com",
    messagingSenderId: "19472395271"
  };
  firebase.initializeApp(config);

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
    </Provider>, document.getElementById('react-root')
)