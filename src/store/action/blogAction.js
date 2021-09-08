import * as Types from '../../constraints/ActionTypes'
import { getRecommend, getTopLike, getTrending, add, getBlogByName } from '../../service/blogService'

//// simple action



//// request action

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

export const getBlogByNameRequest = (data, history) => {
    return dispatch => {
        getBlogByName(data).then(res => {
            dispatch({
                type: Types.GET_BLOG,
                payload: res.data
            })
            dispatch({
                type: Types.LOADING_TOGGLE,
                payload: false,
            });
        })
    }
}