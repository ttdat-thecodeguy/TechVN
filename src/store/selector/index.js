import { isEmpty } from 'lodash'
import jwtDecode from 'jwt-decode'

export const logoutOutWhenExpired = (user) => {
    let decode = jwtDecode(user.token)
    let expiry = (decode.exp * 1000)
    if (expiry < Date.now()) {
        if(localStorage.getItem("user") != null) localStorage.removeItem("user")
        return null;
    }else{
        return user;
    }
}

export const isAuth = state => {
    if(!isEmpty(state.userReducers.auth)) {
        let user = state.userReducers.auth
        return logoutOutWhenExpired(user);
    }
    else {
        try{
            if(localStorage.getItem("user") != null)  {
                let user = JSON.parse(localStorage.getItem("user")) 
                return logoutOutWhenExpired(user);
            }
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
