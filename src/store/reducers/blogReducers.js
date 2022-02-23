import * as Types from "../../constraints/ActionTypes";

const initState = {
  trend: {
    list: [],
    page: 0,
    size: 0
  },
  recommend: [],
  toplike: {
    list: [],
    page: 0,
    size: 0
  },
  cate: {
    list: [],
    page: 0,
    size: 0,
    type: {},
  },
  blog: [],
  comments: [],
  same_cate: [],
  loved: []
};


const blogReducers = (state = initState, action) => {
  switch (action.type) {
    case Types.GET_RECOMMEND:
      return { ...state, recommend: action.payload };
    case Types.GET_BLOG:
      return { ...state, 
        blog: action.payload.blog,
        comments: action.payload.blog.comments,
        same_cate: action.payload.same_cate };
    case Types.GET_TOP_LOVE:
      return { ...state, toplike: {
        list: action.payload.blogs,
        page: action.payload.page,
        size: action.payload.size
      }};
    case Types.GET_CATE_BLOG:
      return { ...state, cate: {
        list: action.payload.blogs,
        page: action.payload.page,
        size: action.payload.size,
        type: action.payload.type
      }};
    case Types.GET_BLOG_BY_SEARCH_NAME:
      return { ...state, cate: {
        list: action.payload.blogs,
        page: action.payload.page,
        size: action.payload.size,
        type: action.payload.types
      }};
    case Types.GET_BLOGS_LOVED:
      return {...state, loved: action.payload}
    case Types.GET_TRENDING_BLOG:
        return {...state, trend: {
          list: action.payload.blogs,
          page: action.payload.page,
          size: action.payload.size,
        }}
    case Types.UPDATE_TRENDING_BLOG:
      let newList = state.trend.list   
      newList.push.apply(newList, action.payload.blogs)   
      return {...state, trend: {
          list: newList,
          page: action.payload.page,
          size: action.payload.size,
      }}
    case Types.ADD_BLOG:
      return {...state, blog: [...state.blog, action.payload]};
    case Types.UPDATE_BLOG: 
      return {...state, blog: {
        ...state.blog,
        content: action.payload.blog.content
      }}
    case Types.ADD_COMMENT:
      return {...state, comments: [...state.comments, action.payload]}
    default:
      return state;
  }
};

export default blogReducers;
