import { isEmpty } from 'lodash'

export const isAuth = state => {
    if(!isEmpty(state.userReducers.auth)) return state.userReducers.auth
    else {
        if(localStorage.getItem("user") != null)  return JSON.parse(localStorage.getItem("user"))
        else return null
    }
}