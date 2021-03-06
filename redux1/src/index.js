import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import countReducer from './reducers/countReducer'
import panelReducer from './reducers/panelReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(composeWithDevTools(panelReducer))
//const store = createStore(countReducer) 

ReactDOM.render(<Provider store={store}><App></App></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
