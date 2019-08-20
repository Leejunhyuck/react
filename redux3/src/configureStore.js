import {createStore,applyMiddleware} from 'redux'
import s1Reducer from './reducers/s1Reducer'
import s2Reducer from './reducers/s2Reducer'
import { combineReducers } from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk'


const store = createStore(rootReducer,applyMiddleware(thunk))

export default store