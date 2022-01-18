import axiosInstance from './axiosInstance'

///////////////// BLOG

export const getTopLike = start => {
    return axiosInstance.get(`/api/blog/trending?size=4&start=${start}&sort=DESC`)
}

export const getTrending = () => {
    return axiosInstance.get("/api/blog/toplove?rows=5")
}

export const getRecommend = () => {
    return axiosInstance.get("/api/blog/recommend?rows=5")
}

export const add = data => {
    return axiosInstance.post("/api/account/blog/add", data)
}

export const getBlogByName = name => {
    return axiosInstance.get(`/api/blog/details/${name}`)
}

export const getCateBlog = (start, size, isAscDate, isAscTitle, cate_id) => {
    return axiosInstance.get(`/api/blog/categories?start=${start}&size=${size}&isAscDate=${isAscDate}&isAscTitle=${isAscTitle}&cate_id=${cate_id}`)
}


export const searchBlog = (start, size, isAscDate, isAscTitle, searchName, cate_id) => {
    return axiosInstance.get(`/api/blog/search?start=${start}&size=${size}&isAscDate=${isAscDate}&isAscTitle=${isAscTitle}&searchName=${searchName}&cate_id=${cate_id}`)
}

export const getBlogLoved = () => {
    return axiosInstance.get(`/api/account/loved-list`)
}