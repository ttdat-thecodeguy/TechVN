import { Link } from "react-router-dom";
import React from "react";
import { useDispatch } from 'react-redux'

import { logoutActionRequest } from '../store/action/userAction'
import { IMG_URL_ACCOUNT } from '../constraints/Config'
const Navbar = (props) => {
  const { history, auth } = props;
  
  const dispatch = useDispatch()

  const handleLogout = e => {
    e.preventDefault()  
    dispatch(logoutActionRequest(history))
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
                    <Link to="/categories" class="nav-link text-left">
                      Đề Mục
                    </Link>
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
                          <i class="fa fa-bell-o" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li>
                       <div class="dropdown show">
												  <Link class="nav-link text-left dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												    <img src={   auth.isSocialLogin == 0 ? IMG_URL_ACCOUNT + auth.user.image : auth.user.image } alt="accountIMG" class="rounded-circle" width="40"  />
												  </Link>												
												  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
												    <Link class="dropdown-item" to="/user"><i class="fa fa-user"></i>T.T Bản Thân</Link>
												    <Link class="dropdown-item " to="/user/blog/"><i class="fa fa-tasks"></i>Quản Lí Bài viết</Link>
												    <Link class="dropdown-item" to="/user/blog/add"><i class="fa fa-plus-circle"></i>Viết Blog</Link>					    
												    <Link class="dropdown-item" to="/user/help"><i class="fa fa-info-circle"></i>Trợ Giúp</Link>
												    <Link class="dropdown-item" to="/notification/error"><i class="fa fa-exclamation-triangle"></i>Phản Hồi Lỗi</Link>
                            <div class="dropdown-divider"></div>
                            <Link class="dropdown-item" onClick={(e) => handleLogout(e)}> <i class="fa fa-sign-out" aria-hidden="true"></i>  Đăng Xuất</Link>
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
