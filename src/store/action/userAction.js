import * as Types from "../../constraints/ActionTypes";
import * as UserServices from "../../service/userService";

export const getUserDetails = (history) => {
  return dispatch => {
    UserServices.getUserDetails().then(res => {
      dispatch({
        type: Types.GET_USER_DETAILS,
        payload: res.data
      })
    }).catch(err => history.push("/401"))
  }
}

export const registerActionRequest = (req) => {
  return (dispatch) => {
    UserServices.registerService(req)
      .then((res) => {
        dispatch({
          type: Types.USER_SUCCESS_REGISTER,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: Types.USER_FAILURE_REGISTER,
          payload: UserServices.formatError(err),
        });
      });
  };
};

export const loginActionRequest = (req, isRememberMe, history) => {
  return dispatch => {
    UserServices.loginService(req).then(res => {    
      dispatch({
        type: Types.USER_LOGIN_SUCCESSFUL,
        payload: res.data,
      })

      dispatch({
        type: Types.LOADING_TOGGLE,
        payload: false,
      })

      UserServices.saveTokenToStorage(res.data)
      history.push("/")

    }).catch(err => {
      dispatch({
        type: Types.USER_LOGIN_FAILURE,
        payload: err,
      })

      dispatch({
        type: Types.LOADING_TOGGLE,
        payload: false,
      })

    })
  }
}

export const loginSocialActionRequest = (req, history) => {
  return dispatch => {
    UserServices.loginSocialService(req).then(res => {   

      
      

      dispatch({
        type: Types.USER_LOGIN_SUCCESSFUL,
        payload: res.data,
      })

      dispatch({
        type: Types.LOADING_TOGGLE,
        payload: false,
      })

      UserServices.saveTokenToStorage(res.data)
      history.push("/")

    }).catch(err => {
      dispatch({
        type: Types.USER_LOGIN_FAILURE,
        payload: err,
      })
      
      dispatch({
        type: Types.LOADING_TOGGLE,
        payload: false,
      })

    })
  }
}




export const logoutActionRequest = (history) => {
  return dispatch => {
    dispatch({
      type: Types.USER_LOGOUT
    })
    localStorage.removeItem("user")
    history.push("/")

  }
}

export const getAllBlogOfAccountRequest = () => {
  return dispatch => {
    UserServices.getAllBlogs().then(res => {
      dispatch({
        type: Types.GET_BLOGS_OF_USER,
        payload: res.data
      })
    })
  }
}
