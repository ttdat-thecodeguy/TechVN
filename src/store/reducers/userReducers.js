import * as Types from "../../constraints/ActionTypes";
import * as NotiTypes from "../../constraints/NotificationTypes";

const initState = {
  auth: {},
  errorMessage: "",
  successMessage: "",
  isLoading: false,
  hasError: true,
  user: {},
  blogs: []
};

const authReducers = (state = initState, action) => {
  switch (action.type) {
    case Types.GET_USER_DETAILS:
      return { ...state, user: action.payload };
    case Types.USER_LOGIN_SUCCESSFUL:
    case Types.USER_SUCCESS_REGISTER:
      return {
        ...state,
        auth: action.payload,
        successMessage: Types.USER_LOGIN_SUCCESSFUL ? NotiTypes.LOGIN_SUCCESSFUL : NotiTypes.REGISTER_SUCCESSFUL ,
        hasError: false,
      };
    case Types.USER_LOGIN_FAILURE:
    case Types.USER_FAILURE_REGISTER:
      return {
        ...state,
        auth: {},
        errorMessage: action.payload,
      };
    case Types.USER_LOGOUT:
      return {...state, auth:{}}
    case Types.GET_BLOGS_OF_USER:
      return {...state, blogs: action.payload}
    default:
      return state;
  }
};
export default authReducers;
