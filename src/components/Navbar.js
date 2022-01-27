import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  logoutActionRequest,
  getAllNotificationRequest
} from "../store/action/userAction";

import { getTypeRequest } from "../store/action/typeAction";

import { IMG_URL_ACCOUNT } from "../constraints/Config";
import { useEffect } from "react";
import * as Types from "../constraints/ActionTypes";
import ShowMoreText from "react-show-more-text";
import { isEmpty } from "lodash";

const Navbar = (props) => {
  const { history, auth } = props;

  const dispatch = useDispatch();

  //// type
  const [types, notification] = useSelector((state) => [
    state.typeReducers,
    state.userReducers.notification
  ]);

  useEffect(() => {
    dispatch({
      type: Types.LOADING_TOGGLE,
      payload: true
    });
    dispatch(getTypeRequest());
    dispatch(getAllNotificationRequest(0, 5));
  }, [dispatch]);

  console.log(notification);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutActionRequest(history));
  };

  const mapTypeByLevel = (level) => {
    return (
      <div class="col-3">
        <h5>
          {level === 1
            ? "Phần Mềm"
            : level === 2
            ? "Phần Cứng"
            : "Thế Giới Công Nghệ"}
        </h5>
        <ul>
          {types.map((item, idx) => {
            if (item.level === level)
              return (
                <li>
                  <a href={`/danh-muc/${item.id}/${item.path}`}>{item.name}</a>
                </li>
              );
            else return <></>;
          })}
          <Link to={"/cate/see-more"}>Xem Thêm</Link>
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
                    <i class="fa fa-home"></i>Trang Chủ
                  </Link>
                </li>

                <li className="nav-item">
                  <div class="cate-dropdown ">
                    <li
                      class="nav-link text-left cateBtn"
                      onClick={(e) => history.push("/danh-sach-blog")}
                    >
                      Danh Mục
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
                    Liên Hệ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" class="nav-link text-left">
                    Về Tôi
                  </Link>
                </li>
              </ul>
              <ul class="navbar-nav js-clone-nav user-fn">
                {auth == null && (
                  <>
                    <li>
                      <Link to="/login" class="nav-link text-left">
                        Đăng Nhập
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" class="nav-link text-left">
                        <i class="fa fa-user-plus"></i>Đăng Kí
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
                          <nav class="num-noti">{isEmpty(notification.content) !== true && notification.content.length }</nav> {/* nếu >99 = 99+ */}
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
                                <a class={`row dropdown-item noti-item ${ noti.status === false && 'bg-unreaded' }`} href="/">
                                  <div class="col-3">
                                    <img
                                      className="img-fluid rounded-circle"
                                      src={
                                        IMG_URL_ACCOUNT + "image_default.jpg"
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
                                        truncatedEndingComponent={"... "}>
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
                                ? IMG_URL_ACCOUNT + auth.user.image
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
                            <i class="fa fa-user bg-white"></i>T.T Bản Thân
                          </Link>
                          <Link class="dropdown-item " to="/user/blog/">
                            <i class="fa fa-tasks"></i>Quản Lí Bài viết
                          </Link>
                          <Link class="dropdown-item" to="/user/blog/add">
                            <i class="fa fa-plus-circle"></i>Viết Blog
                          </Link>
                          <Link class="dropdown-item" to="/user/help">
                            <i class="fa fa-info-circle"></i>Trợ Giúp
                          </Link>
                          <Link class="dropdown-item" to="/notification/error">
                            <i class="fa fa-exclamation-triangle"></i>Phản Hồi
                            Lỗi
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
                            Đăng Xuất
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

export default Navbar;
