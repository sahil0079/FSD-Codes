import { createStore } from 'redux'
import allReducers from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'


export const store = createStore(allReducers, composeWithDevTools())