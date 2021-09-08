import axiosInstance from './axiosInstance'



export const getImage = () => {
    return axiosInstance.get('/api/account/image/')
}