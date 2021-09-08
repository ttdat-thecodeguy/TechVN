import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "./fonts/material-icon/css/material-design-iconic-font.css";
import "./fonts/material-icon/css/material-design-iconic-font.min.css";
import { useDispatch, useSelector } from "react-redux";
import {
  registerActionRequest,
  loadingToggleAction,
} from "../../store/action/userAction";
import Notification from "../../components/Notification";
import * as NotiTypes from "../../constraints/NotificationTypes";
import * as Types from "../../constraints/ActionTypes";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const errorNotiInit = { name: "", email: "", password: "", repassword: "" };
  const [errors, setErrors] = useState(errorNotiInit);

  const [err_messeage, hasError] = useSelector((state) => [
    state.userReducers.errorMessage,
    state.userReducers.hasError,
  ]);

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();

    let err = false;
    const errNoti = { ...errorNotiInit };
    if (name === "") {
      errNoti.name = NotiTypes.EMPTY_USERNAME;
      err = true;
    }
    if (email === "") {
      errNoti.email = NotiTypes.EMPTY_EMAIL;
      err = true;
    }

    if (email !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(email)) {
        err = true;
        errNoti.email = NotiTypes.INVALID_EMAIL;
      }
    }

    if (password === "") {
      errNoti.password = NotiTypes.EMPTY_PASSWORD;
      err = true;
    }
    if (repassword === "") {
      errNoti.repassword = NotiTypes.EMPTY_REPASSWORD;
      err = true;
    }
    if (password !== repassword) {
      errNoti.repassword = NotiTypes.INVALID_REPASSWORD;
      err = true;
    }
    setErrors(errNoti);
    if (err) return;
    const req = {
      email,
      fullname: name,
      password,
    };
    dispatch({
      type: Types.LOADING_TOGGLE,
      payload: true,
    });
    dispatch(registerActionRequest(req));
  };

  useEffect(() => {
    if (hasError) setIsOpenModal(true);
  }, []);

  return (
    <section class="sign-in">
      <div class="container">
        <div class="signup-content">
          <div class="signup-form">
            <h2 class="form-title">Register</h2>
            <form method="POST" class="register-form" id="register-form">
              <div class="form-group">
                <label for="name">
                  <i class="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your username"
                  required="required"
                  autofocus="autofocus"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p class="error-title">{errors.name}</p>}
              </div>
              <div class="form-group">
                <label for="email">
                  <i class="zmdi zmdi-email"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required="required"
                  autofocus="autofocus"
                  value={email}
                  onChange={(e) => setMail(e.target.value)}
                />
                {errors.email && <p class="error-title">{errors.email}</p>}
              </div>
              <div class="form-group">
                <label for="pass">
                  <i class="zmdi zmdi-lock"></i>
                </label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Password"
                  required="required"
                  autofocus="autofocus"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <p class="error-title">{errors.password}</p>
                )}
              </div>
              <div class="form-group">
                <label for="re-pass">
                  <i class="zmdi zmdi-lock-outline"></i>
                </label>
                <input
                  type="password"
                  name="re_pass"
                  id="re_pass"
                  placeholder="Repeat your password"
                  required="required"
                  autofocus="autofocus"
                  value={repassword}
                  onChange={(e) => setRepassword(e.target.value)}
                />
                {errors.repassword && (
                  <p class="error-title">{errors.repassword}</p>
                )}
                {err_messeage && <p class="error-title">{err_messeage}</p>}
                <Notification
                  modalIsOpen={isOpenModal}
                  afterOpenModal={() => {}}
                  closeModal={() => setIsOpenModal(false)}
                />
              </div>

              <div class="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  class="form-submit"
                  value="Register"
                  onClick={(e) => handleRegister(e)}
                />
              </div>
            </form>
          </div>
          <div class="signup-image">
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/images/signup.jpg"}
                alt="SIGN_UP"
              />
            </figure>
            <Link to="/login" className="signup-image-link">
              I am already member
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
