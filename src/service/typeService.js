import axiosInstance from './axiosInstance'

export const getAll = () => {
    return axiosInstance.get('/api/type/')
}
