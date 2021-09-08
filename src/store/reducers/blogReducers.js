import * as Types from "../../constraints/ActionTypes";

const initState = {
  trend: [],
  recommend: [],
  toplike: {
    list: [],
    page: 0,
    size: 0
  },
  blogs: [],
};

const blogReducers = (state = initState, action) => {
  switch (action.type) {
    case Types.GET_RECOMMEND:
      return { ...state, recommend: action.payload };
    case Types.GET_BLOG:
      return { ...state, blogs: action.payload };
    case Types.GET_TOP_LOVE:
      return { ...state, toplike: {
        list: action.payload.blogs,
        page: action.payload.page,
        size: action.payload.size
      }};
    case Types.GET_TRENDING_BLOG:
        return {...state, trend: action.payload}
    case Types.ADD_BLOG:
      return {...state, blogs: [...state.blogs, action.payload]};
    default:
      return state;
  }
};

export default blogReducers;
