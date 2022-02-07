import React, { useState } from "react";
import {withRouter} from 'react-router-dom'
import "./style.css";

import "./fonts/material-icon/css/material-design-iconic-font.css";
import "./fonts/material-icon/css/material-design-iconic-font.min.css";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import * as NotiTypes from "../../constraints/NotificationTypes";
import * as Types from "../../constraints/ActionTypes";

import { withTranslation } from "react-i18next";
import { loginActionRequest , loginSocialActionRequest} from '../../store/action/userAction'
import { GoogleLogin } from 'react-google-login'

const Login = ({ t, history  }) => {
  const [loginContent, setloginContent] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false)

  const errorNotiInit = { loginContent: "", password: "" };
  const [errors, setErrors] = useState(errorNotiInit);

  const dispatch = useDispatch()
  
  const handleLogin = (e) => {
    e.preventDefault();
    let err = false;
    const errNoti = { ...errorNotiInit };
    if (loginContent === "") {
      errNoti.loginContent = NotiTypes.EMPTY_USERNAME;
      err = true;
    }

    if (password === "") {
      errNoti.password = NotiTypes.EMPTY_PASSWORD;
      err = true;
    }
    setErrors(errNoti);
    if (err) return;
    const req = {
      username: loginContent,
      password
    }
    dispatch({
      type: Types.LOADING_TOGGLE,
      payload: true,
    })
    dispatch(loginActionRequest(req, checked, history))
  };

  const handleLoginSocialSuccess = res => {

    const { name, imageUrl, email } = res.profileObj;

    const req = {
      fullname : name,
      image: imageUrl,
      email
    }
    dispatch({
      type: Types.LOADING_TOGGLE,
      payload: true,
    })
    dispatch(loginSocialActionRequest(req, history))
  }
  
  const handleLoginSocialFailure = res => {

  }

  return (
    <section class="sign-in">
      <div class="container">
        <div class="signin-content">
          <div class="signin-image">
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/images/signin.jpg"}
                alt="signup"
              />
            </figure>
            <Link to="/register" class="signup-image-link">
              { t('login.to_sign_up', { framework: "react-i18next" }) }
            </Link>
          </div>

          <div class="signin-form">
            <h2 class="form-title">{ t('login.title', { framework: "react-i18next" }) }</h2>
            <form method="POST" action="" class="register-form" id="login-form">
              <div class="form-group">
                <label for="your_name">
                  <i class="zmdi zmdi-account material-icons-name"></i>
                </label>{" "}
                <input
                  type="text"
                  name="usr"
                  id="your_name"
                  value={loginContent}
                  onChange={(e) => setloginContent(e.target.value)}
                  placeholder={ t('login.username_holder', { framework: "react-i18next" }) }
                />
                {errors.loginContent && (
                  <p class="error-title">{errors.loginContent}</p>
                )}
              </div>
              <div class="form-group">
                <label for="your_pass">
                  <i class="zmdi zmdi-lock"></i>
                </label>{" "}
                <input
                  type="password"
                  name="psw"
                  id="your_pass"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={ t('login.password_holder', { framework: "react-i18next" }) }
                />
                {errors.password && (
                  <p class="error-title">{errors.password}</p>
                )}
              </div>
              <div class="form-group">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  class="agree-term"
                  onChange={e => e.target.checked ? setChecked(true) : setChecked(false) }
                />
                <label for="remember-me" class="label-agree-term">
                  <span>
                    <span></span>
                  </span>
                  { t('login.remember_me', { framework: "react-i18next" }) }
                </label>
                <br></br>
              </div>
              <div class="form-group form-button">
                <input type="hidden" name="" value="" />
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  onClick={(e) => handleLogin(e)}
                  class="form-submit"
                  value={ t('login.login_btn', { framework: "react-i18next" }) }
                />
              </div>
            </form>
            <div class="social-login">
              <span class="social-label">{ t('login.social', { framework: "react-i18next" }) }</span>
              <ul class="socials">
                <li><GoogleLogin
                  clientId="788182537558-o9073nqp6ppfl1epletjb2mi96d5sehm.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={handleLoginSocialSuccess}
                  onFailure={handleLoginSocialFailure}
                  cookiePolicy={'single_host_origin'}
                />,</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(withTranslation("common")(Login));
