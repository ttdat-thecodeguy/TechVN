/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "../Navbar";

const Header = props => {
  const { history, auth } = props;
  return (
    <div class="header-top">
      <div class="container pt-3 pb-3">
        <div class="row align-items-center">
          <div class="col-12 col-lg-3 d-flex">
            <a href="index.html" class="site-logo">
              <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
            </a>

           
          </div>
          <div class="col-12 col-lg-7 d-flex">
            <form action="#" class="search-form d-inline-block">
              <div class="d-flex">
                <div class="dropdown">
                  <input
                    type="text"
                    class="form-control-app"
                    placeholder="Tìm Kiếm..."
                    onKeyPress={e => {
                      if (e.key === "Enter") {
                        history.push(`/danh-sach-blog/${e.target.value}`);
                      }
                    }}
                  />
                  <button type="submit" class="btnSearch">
                    <span class="icon-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-6 d-block d-lg-none text-right" />
        </div>
      </div>

      <Navbar history={history} auth={auth} />
    </div>
  );
};

export default Header;
