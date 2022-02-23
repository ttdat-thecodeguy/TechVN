import * as Types from "../../constraints/ActionTypes";
import {
  getRecommend,
  getTopLike,
  getTrending,
  add,
  getBlogByName,
  getCateBlog,
  searchBlog,
  getBlogLoved,
  addComment,
  update
} from "../../service/blogService";
import { loadAction } from "./loadingAction";

export const getTopLoveRequest = () => {
  return (dispatch) => {
    getTopLike().then((res) => {
      dispatch({
        type: Types.GET_TOP_LOVE,
        payload: res.data || []
      });
    });
  };
};

export const getRecommendRequest = () => {
  return (dispatch) => {
    getRecommend().then((res) => {
      dispatch({
        type: Types.GET_RECOMMEND,
        payload: res.data || []
      });
    });
  };
};

export const getTrendingRequest = (isList, start) => {

  console.log("run" + start)

  return (dispatch) => {
    getTrending(isList, start).then((res) => {
      dispatch({
        type: Types.GET_TRENDING_BLOG,
        payload: res.data || []
      });
    });
  };
};


export const updateTrendingRequest = (isList, start) => {

  return (dispatch) => {
    getTrending(isList, start).then((res) => {
      dispatch({
        type: Types.UPDATE_TRENDING_BLOG,
        payload: res.data || []
      });
    });
  };
};



export const getCategoriesBlogRequest = (
  start,
  size,
  isAscDate,
  isAscTitle,
  cateId
) => {
  return (dispatch) => {
    getCateBlog(start, size, isAscDate, isAscTitle, cateId)
      .then((res) => {
        dispatch({
          type: Types.GET_CATE_BLOG,
          payload: res.data || []
        });
        dispatch(loadAction(false));
      })
      .catch((err) => {
        dispatch(loadAction(false));
      });
  };
};

export const getBlogByNameRequest = (data, history) => {
  return (dispatch) => {
    getBlogByName(data)
      .then((res) => {
        dispatch({
          type: Types.GET_BLOG,
          payload: res.data
        });
        dispatch(loadAction(false));
      })
      .catch((err) => {
        dispatch(loadAction(false));
      });
  };
};

export const getBlogBySearchNameRequest = (
  start,
  size,
  isAscDate,
  isAscTitle,
  cateId,
  searchName
) => {
  return (dispatch) => {
    searchBlog(start, size, isAscDate, isAscTitle, searchName, cateId)
      .then((res) => {
        dispatch({
          type: Types.GET_BLOG_BY_SEARCH_NAME,
          payload: res.data
        });
        dispatch(loadAction(false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(loadAction(false));
      });
  };
};

//////// get blog loved

export const getBlogLovedRequest = () => {
  return (dispatch) => {
    getBlogLoved().then((res) => {
      dispatch({
        type: Types.GET_BLOGS_LOVED,
        payload: res.data
      });
    });
  };
};

///////// Add Request

export const addRequest = (data, history) => {
  return (dispatch) => {
    add(data).then((res) => {
      dispatch(loadAction(false));
      history.push(`/blog/${res.data.blog.link}`);
    });
  };
};

export const updateRequest = (data) => {
  return dispatch => {
    update(data).then(res => {

      console.log(res.data)

      dispatch({
        type: Types.UPDATE_BLOG,
        payload: res.data
      })
      dispatch(loadAction(false));
     
    });
  }
}

/*********add comment request************* */

export const addCommentRequest = (data, auth) => {
  return (dispatch) => {
    addComment(data).then((res) => {
      dispatch(loadAction(false))
      dispatch({
        type: Types.ADD_COMMENT,
        payload: {
          id: res.data.comment.id,
          content: res.data.comment.content,
          account: {
            id: res.data.comment.account,
            username: auth.user.content,
            image: auth.user.image
          },
          account_reply: res.data.comment.account_reply,
          publish_date: res.data.comment.publish_date
        }
      });
      
    });
  };
};
