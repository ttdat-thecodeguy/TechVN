import { combineReducers } from 'redux'
import userReducers from './userReducers'
import blogReducers from './blogReducers'
import imageReducers from './imageReducers'
import typeReducers from './typeReducers'
import loadingReducers from './loadingReducers'

const appReducers = combineReducers({
    userReducers,
    blogReducers,
    imageReducers,
    typeReducers,
    loading: loadingReducers
})

export default appReducers