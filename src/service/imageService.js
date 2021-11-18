import axiosInstance from './axiosInstance'
var FormData = require("form-data");


export const getImage = () => {
    return axiosInstance.get('/api/account/image/')
}

export const uploadImage = data => {

    var sendData = new FormData();
    Array.from(data).forEach((file) => sendData.append("files", file));

    return axiosInstance.post("/api/account/image/upload", sendData, {
        headers: {
            enctype: "multipart/form-data",
            "Cache-Control": "sno-cache",
            Pragma: "no-cache"
        }
    })
}
