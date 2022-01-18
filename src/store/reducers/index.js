import { combineReducers } from 'redux'
import userReducers from './userReducers'
import blogReducers from './blogReducers'
import imageReducers from './imageReducers'
import typeReducers from './typeReducers'
import loadingReducers from './loadingReducers'

import adminReducers from './adminReducers'

const appReducers = combineReducers({
    userReducers,
    blogReducers,
    imageReducers,
    typeReducers,
    loading: loadingReducers,
    admin: adminReducers
})

export default appReducers