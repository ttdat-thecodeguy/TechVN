import axiosInstance from './axiosInstance'


/////////////// Admin 

export const getAllUsers = () => {
    return axiosInstance.get('/api/admin/users')
}

export const getAllBlogs = () => {

}

export const getAllTags = () => {
    
}