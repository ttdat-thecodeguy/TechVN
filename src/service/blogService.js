import axiosInstance from './axiosInstance'

///////////////// BLOG FETCHING

export const getTopLike = () => {
    return axiosInstance.get(`/api/blog/trending?size=4&start=0&sort=DESC&isList=false`)
}

export const getTrending = (isList) => {
    return axiosInstance.get(`/api/blog/toplove?rows=5&isList=${isList}`)
}

export const getRecommend = () => {
    return axiosInstance.get("/api/blog/recommend?rows=5")
}

export const getBlogByName = name => {
    return axiosInstance.get(`/api/blog/details/${name}?same_cate=true`)
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

////////////////////// BLOG ADDING

export const add = data => {
    return axiosInstance.post("/api/account/blog/add", data)
}

export const addComment = data => {
    return axiosInstance.post("/api/account/comment/add", data)
}

////////////////////////// BLOG DELETING



////////////////////////// BLOG UPDATING