import * as Types from '../../constraints/ActionTypes'
import { getRecommend, getTopLike, getTrending, add, getBlogByName, getCateBlog, searchBlog, getBlogLoved } from '../../service/blogService'
import { loadAction } from './loadingAction'


export const getTopLoveRequest = (start) => {
    return dispatch => {
        getTopLike(0).then(res => {
            dispatch({
                type: Types.GET_TOP_LOVE,
                payload: res.data || []
            })
        })
    }
}

export const getRecommendRequest = () => {
    return dispatch => {
        getRecommend().then(res => {
            dispatch({
                type: Types.GET_RECOMMEND,
                payload: res.data || []
            })
        })
    }
}

export const getTrendingRequest = () => {
    return dispatch => {
        getTrending().then(res => {
            dispatch({
                type: Types.GET_TRENDING_BLOG,
                payload: res.data || []
            })
        })
    }
}

export const getCategoriesBlogRequest = (start, size, isAscDate, isAscTitle, cateId) =>{
    return dispatch => {
        getCateBlog(start, size, isAscDate, isAscTitle, cateId).then(res => {
            dispatch({
                type: Types.GET_CATE_BLOG,
                payload: res.data || []
            })
            dispatch(loadAction(false))
        }).catch(err=> {
            dispatch(loadAction(false))
        })
    }
}



export const getBlogByNameRequest = (data, history) => {
    return dispatch => {
        getBlogByName(data).then(res => {
            dispatch({
                type: Types.GET_BLOG,
                payload: res.data
            })
            dispatch(loadAction(false));
        }).catch(err => {
            dispatch(loadAction(false));
        })
    }
}   

export const getBlogBySearchNameRequest = (start, size, isAscDate, isAscTitle, cateId, searchName) => {
    return dispatch => {
        searchBlog(start, size, isAscDate, isAscTitle, searchName, cateId).then(res => {
            dispatch({
                type: Types.GET_BLOG_BY_SEARCH_NAME,
                payload: res.data
            })
            dispatch(loadAction(false));
        }).catch(err => {
            console.log(err)
            dispatch(loadAction(false));
        })
    }
} 

//////// get blog loved

export const getBlogLovedRequest = () => {
    return dispatch => {
        getBlogLoved().then(res => {
            dispatch({
                type: Types.GET_BLOGS_LOVED,
                payload: res.data
            })
        })
    }
}


///////// Add Request

export const addRequest = (data, history) => {
    return dispatch => {
        add(data).then(res => {
            dispatch({
                type: Types.ADD_BLOG,
                payload: res.data.blog
            })
            history.push(`/blog/${res.data.blog.link}`)
        })
    }
}

