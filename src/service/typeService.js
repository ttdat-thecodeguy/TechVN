import axiosInstance from './axiosInstance'

export const getAll = () => {
    return axiosInstance.get('/api/type/')
}

export const getAllByLevel = (level) => {
    return axiosInstance.get(`/api/type/list-type?level=${level}`)
}