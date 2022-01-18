import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { logoutActionRequest } from "../store/action/userAction";

import { getTypeRequest } from "../store/action/typeAction"
import { getBlogLovedRequest } from "../store/action/blogAction"

import { IMG_URL_ACCOUNT } from "../constraints/Config";
import { useEffect } from "react";
import { useState } from "react";
import * as Types from "../constraints/ActionTypes";



const Navbar = (props) => {
  const { history, auth } = props;

  const dispatch = useDispatch();
  
  //// type
  const [ types ] = useSelector(state => [ state.typeReducers ])
  
  useEffect(() => {
    dispatch({
      type: Types.LOADING_TOGGLE,
      payload: true
    });
    dispatch(getTypeRequest())
  },[])

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutActionRequest(history));
  };


  const mapTypeByLevel = level => {
    return (<div class="col-3">
    <h5>{ level === 1 ? 'Phần Mềm' : level === 2 ? 'Phần Cứng' : 'Thế Giới Công Nghệ' }</h5>
    <ul>
      { types.map((item, idx) => {
          if(item.level === level) return <li>
            <a href={`/danh-muc/${item.id}/${item.path}`}>{item.name}</a>
          </li>
          else return <></>
      }) }
      <a href="#">Xem Thêm</a>
    </ul>
  </div>);
  }



  return (
    <div
      class="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block bg-light"
      role="banner"
    >
      <div class="container">
        <div class="align-items-center">
          <div class="mr-auto">
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0 js-clone-nav">
                  <li class="active">
                    <Link to="/" class="nav-link text-left">
                      <i class="fa fa-home"></i>Trang Chủ
                    </Link>
                  </li>
                  <li>
                    <div class="cate-dropdown ">
                      <li class="nav-link text-left cateBtn" onClick={e => history.push("/danh-sach-blog")}>
                        Danh Mục
                        <i class="fa fa-caret-down"></i>
                      </li>
                      <div class="cate-content">
                        <div class="row">

                         { mapTypeByLevel(1) }
                         { mapTypeByLevel(2) }
                         { mapTypeByLevel(3) }
                          
                         
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
                  <li>
                    <Link to="/contact" class="nav-link text-left">
                      Liên Hệ
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" class="nav-link text-left">
                      Về Tôi
                    </Link>
                  </li>
                </ul>

                <ul class="navbar-nav js-clone-nav">
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
                            <nav class="num-noti">1</nav> {/* nếu >99 = 99+ */}
                          </button>
                          <div
                            class="dropdown-menu noti-menu"
                            aria-labelledby="notificationBtn"
                          >
                            <div>Thông Báo</div>

                            <a class="row dropdown-item noti-item" href="/" >
                              <div class="col-6">
                                <img
                                  className="img-responsive"
                                  src="https://static.remove.bg/remove-bg-web/8fb1a6ef22fefc0b0866661b4c9b922515be4ae9/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
                                  alt="user-sample"
                                />
                              </div>
                              <div class="col-6">
                                HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
                              </div>
                            </a>
                           
                            
                          </div>
                        </Link>
                      </li>
                      <li>
                        <div class="dropdown show">
                          <Link
                            class="nav-link text-left dropdown-toggle"
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <img
                              src={
                                auth.isSocialLogin === null || auth.isSocialLogin === 0
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
                              <i class="fa fa-user"></i>T.T Bản Thân
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
                            <Link
                              class="dropdown-item"
                              to="/notification/error"
                            >
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
    </div>
  );
};

export default Navbar;
