import { createStore, applyMiddleware, compose } from 'redux'
import appReducers from './reducers'
import thunk from  'redux-thunk'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducers, composeEnhancer(applyMiddleware(thunk)));

export default store;