import axiosInstance from './axiosInstance'
import * as AuthNotiTypes from '../constraints/NotificationTypes'

//simulation



/// auth

/*
    googleId: "103799801484188551990"
    imageUrl: "https://lh3.googleusercontent.com/a/AATXAJw7-mFIJD8dq4qJiMMnjV-284k6kPxjDnktNg29=s96-c"
    email: "ttdat17ck1@gmail.com"
    name: "Đạt Trương Thành"
    givenName: "Đạt"
    familyName: "Trương Thành"
*/



export const saveTokenToStorage = req => {
    localStorage.setItem('user', JSON.stringify(req))
}
export const getUserDetails = () => {
    return axiosInstance.get(`/api/account/details/`)
}



export const registerSocialLoginService = req => {
    const postData = {
        id: req.googleId,
        image: req.imageUrl,
        email: req.email,
        fullName: req.name,
        brief: "",
        isSocialLogin: 1
    }
    return axiosInstance.post(`users`, postData)
}

export const loginService = req => {
    return axiosInstance.post(`/login`, req)
}

export const loginSocialService = req => {
    return axiosInstance.post(`/social-login`, req)
}

export const registerService = req => {
    const postData = {
        fullname: req.fullname,
        email: req.email,
        password: req.password,
        image: "image_default.jpg",
        brief: "",
        isSocialLogin: 0
    }
    return axiosInstance.post(`register`, postData)
}

export const getAllBlogs = () => {
    return axiosInstance.get(`/api/account/blog/`)
}


export const formatError = err => {
    switch (err.response.data) {
        case AuthNotiTypes.PASSWORD_TOO_SHORT:
            return "Mật khẩu trên 4 kí tự"
        case AuthNotiTypes.INVALID_PASSWORD:
            return "Email này đã tồn tại"
        default:
            return AuthNotiTypes.ERROR
    }
}

