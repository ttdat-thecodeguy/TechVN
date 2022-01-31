import { isEmpty } from 'lodash'

export const isAuth = state => {
    if(!isEmpty(state.userReducers.auth)) return state.userReducers.auth
    else {
        if(localStorage.getItem("user") != null)  return JSON.parse(localStorage.getItem("user"))
        else return null
    }
}

export const levelTypeSelector = level => {
    return level === 1
    ? "Phần Mềm"
    : level === 2
    ? "Phần Cứng"
    : "Thế Giới Công Nghệ"
}

export const mapLovedBlog = state => {
    return state.blogReducers.loved.map((item) => {
        return item.id;
    })
}
