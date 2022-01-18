import axiosInstance from './axiosInstance'


/////////////// Admin 

export const getAllUsers = () => {
    return axiosInstance.get('/users')
}

export const getAllBlogs = () => {

}

export const getAllTags = () => {
    
}