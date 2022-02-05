import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  logoutActionRequest,
  getAllNotificationRequest,
  addNotificationRequest
} from "../store/action/userAction";

import { getTypeRequest } from "../store/action/typeAction";

import * as Config from "../constraints/Config";
import { useEffect } from "react";

import ShowMoreText from "react-show-more-text";
import { isEmpty } from "lodash";

import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { withTranslation } from "react-i18next";
import { useState } from "react";

const Navbar = (props) => {
  const { history, auth, isLogin, t, i18n } = props;
  
  const [lang, setLang] = useState(i18n.language)

  i18n.changeLanguage().then(t => setLang(i18n.language));

  const dispatch = useDispatch();

  //// type
  const [types, notification] = useSelector((state) => [
    state.typeReducers,
    state.userReducers.notification
  ]);


  useEffect(() => {
    if(types === undefined || types == null || types.length === 0) {
      dispatch(getTypeRequest());
    }
    if (isLogin) {
      dispatch(getAllNotificationRequest(0, 5));
      var sock = new SockJS(Config.WS_MESSAGE);
      let stompClient = Stomp.over(sock);
      stompClient.connect(
        { username: auth.user.content },
        function ( _ ) {      
          dispatch(addNotificationRequest(stompClient))
        },
        (err) => console.log(err)
      );
    }
 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isLogin]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutActionRequest(history));
  };

  const mapTypeByLevel = (level) => {
    return (
      <div class="col-3">
        <h5>
          {level === 1
            ? t('header.lnavbar.type.level.l1', { framework: "react-i18next" })
            : level === 2
            ? t('header.lnavbar.type.level.l2', { framework: "react-i18next" })
            : t('header.lnavbar.type.level.l3', { framework: "react-i18next" })}
        </h5>
        <ul>
          {types.map((item, idx) => {
            if (item.level === level)
              if(lang === "vn")
                return (
                  <li>
                    <a href={`/danh-muc/${item.id}/${item.path}`}>{item.name}</a>
                  </li>
                );
              else
                  return (
                    <li>
                      <a href={`/danh-muc/${item.id}/${item.path}`}>{item.name_en}</a>
                    </li>
                  )
            else return <></>;
          })}
          <Link to={"/cate/see-more"}>{t('header.lnavbar.type.watch_more', { framework: "react-i18next" })}</Link>
        </ul>
      </div>
    );
  };

  return (
    <div class="container">
      <div class="align-items-center">
        <div class="mr-auto">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="active nav-item">
                  <Link to="/" class="nav-link text-left">
                    <i class="fa fa-home"></i>
                    { t('header.lnavbar.homepage', { framework: "react-i18next" }) }
                    
                  </Link>
                </li>

                <li className="nav-item">
                  <div class="cate-dropdown ">
                    <li
                      class="nav-link text-left cateBtn"
                      onClick={(e) => history.push("/danh-sach-blog")}
                    >
                      { t('header.lnavbar.type.title', { framework: "react-i18next" }) }
                      <i class="fa fa-caret-down"></i>
                    </li>
                    <div class="cate-content">
                      <div class="row">
                        {mapTypeByLevel(1)}
                        {mapTypeByLevel(2)}
                        {mapTypeByLevel(3)}

                        <div class="col-3">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/images/tech_line.png"
                            }
                            alt="pic"
                            class="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to="/contact" class="nav-link text-left">
                  { t('header.lnavbar.contact', { framework: "react-i18next" }) }
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" class="nav-link text-left">
                  { t('header.lnavbar.aboutme', { framework: "react-i18next" }) }
                  </Link>
                </li>
              </ul>
              <ul class="navbar-nav js-clone-nav user-fn">
                {auth == null && (
                  <>
                    <li>
                      <Link to="/login" class="nav-link text-left">
                      { t('header.snavbar.login', { framework: "react-i18next" }) }
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" class="nav-link text-left">
                        <i class="fa fa-user-plus"></i>
                        { t('header.snavbar.signup', { framework: "react-i18next" }) }
                      </Link>
                    </li>
                  </>
                )}
                {/* rgb(217, 230, 253); */}
                {auth && (
                  <>
                    <li>
                      <Link class="nav-link">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link class="nav-link">
                        <button
                          type="button"
                          id="notificationBtn"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="fa fa-bell-o" aria-hidden="true"></i>
                          <nav class="num-noti">
                            {isEmpty(notification.content) !== true &&
                              notification.content.length}
                          </nav>{" "}
                          {/* nếu >99 = 99+ */}
                        </button>
                        <div
                          class="dropdown-menu noti-menu"
                          aria-labelledby="notificationBtn"
                        >
                          <div>Thông Báo</div>

                          {notification !== undefined &&
                          isEmpty(notification.content) !== true &&
                          notification.content.length !== 0 ? (
                            notification.content.map((noti) => {
                              return (
                                <a
                                  class={`row dropdown-item noti-item ${
                                    noti.status === false && "bg-unreaded"
                                  }`}
                                  href="/"
                                >
                                  <div class="col-3">
                                    <img
                                      className="img-fluid rounded-circle"
                                      src={
                                        Config.IMG_URL_ACCOUNT + "image_default.jpg"
                                      }
                                      alt="user-sample"
                                    />
                                  </div>
                                  <div class="col-9">
                                    <span className="text-success">
                                      {noti.account_from.username}
                                    </span>
                                    <p class="noti-content">
                                      <ShowMoreText
                                        /* Default options */
                                        lines={3}
                                        more="Show more"
                                        less="Show less"
                                        className="content-css"
                                        anchorClass="my-anchor-css-class"
                                        expanded={false}
                                        truncatedEndingComponent={"... "}
                                      >
                                        {noti.content}
                                      </ShowMoreText>
                                      <span>3 giờ trước</span>
                                    </p>
                                  </div>
                                </a>
                              );
                            })
                          ) : (
                            <></>
                          )}
                        </div>
                      </Link>
                    </li>
                    <li>
                      <div class="dropdown show">
                        <Link
                          class="nav-link text-left dropdown-toggle"
                          role="button"
                          id="avatarMenu"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <img
                            src={
                              auth.isSocialLogin === null ||
                              auth.isSocialLogin === 0
                                ? Config.IMG_URL_ACCOUNT + auth.user.image
                                : auth.user.image
                            }
                            alt="accountIMG"
                            class="rounded-circle"
                            width="40"
                          />
                        </Link>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <Link class="dropdown-item" to="/user">
                            <i class="fa fa-user bg-white"></i>
                            { t('header.snavbar.me.info', { framework: "react-i18next" }) }
                          </Link>
                          <Link class="dropdown-item " to="/user/blog/">
                            <i class="fa fa-tasks"></i>
                            { t('header.snavbar.me.manage', { framework: "react-i18next" }) }
                          </Link>
                          <Link class="dropdown-item" to="/user/blog/add">
                            <i class="fa fa-plus-circle"></i>
                            { t('header.snavbar.me.create_blog', { framework: "react-i18next" }) }
                          </Link>
                          <Link class="dropdown-item" to="/user/help">
                            <i class="fa fa-info-circle"></i>
                            { t('header.snavbar.me.help', { framework: "react-i18next" }) }
                          </Link>
                          <Link class="dropdown-item" to="/notification/error">
                            <i class="fa fa-exclamation-triangle"></i>
                            { t('header.snavbar.me.response', { framework: "react-i18next" }) }
                          </Link>
                          <div class="dropdown-divider"></div>
                          <Link
                            class="dropdown-item"
                            onClick={(e) => handleLogout(e)}
                          >
                            {" "}
                            <i
                              class="fa fa-sign-out"
                              aria-hidden="true"
                            ></i>{" "}
                            { t('header.snavbar.me.signout', { framework: "react-i18next" }) }
                          </Link>
                        </div>
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default withTranslation('common')(Navbar);
