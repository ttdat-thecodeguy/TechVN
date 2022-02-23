import { isEmpty } from 'lodash'

export const isAuth = state => {
    if(!isEmpty(state.userReducers.auth)) return state.userReducers.auth
    else {
        try{
            if(localStorage.getItem("user") != null)  return JSON.parse(localStorage.getItem("user"))
            else return null;
        } catch(err) {
            return null;
        }
    }
}

export const levelTypeSelector = (level, t) => {
    return level === 1
        ? t("header.lnavbar.type.level.l1", { framework: "react-i18next" })
        : level === 2
        ? t("header.lnavbar.type.level.l2", { framework: "react-i18next" })
        : t("header.lnavbar.type.level.l3", { framework: "react-i18next" })
}

export const mapLovedBlog = state => {
    return state.blogReducers.loved.map((item) => {
        return item.id;
    })
}
