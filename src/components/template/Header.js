/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {  withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const Header = props => {
  const { history, auth, isLogin, t, i18n } = props;
  return (
    <div class="header-top">
      <div class="container pt-3 pb-3">
        <div class="row align-items-center">
          <div class="col-3 logo-container d-flex">
            <Link to="/" class="site-logo">
              <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
            </Link>

           
          </div>
          <div class="col-6 d-flex search-form ">
            <form action="#" class="d-inline-block">
              <div class="d-flex">
                <div class="dropdown">
                  <input
                    type="text"
                    class="form-control-app"
                    placeholder={ `${t('search', { framework: "react-i18next" })}...` }
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
          <div class="col-3 d-block text-right change-lang">
            <div className="d-flex">
            <button className="btnChangeLang" onClick={e => i18n.changeLanguage('en')}>EN</button>
              |
              <button className="btnChangeLang" onClick={e => i18n.changeLanguage('vn')}>VN</button>
            </div>
              
          </div>
        </div>
      </div>

      <Navbar history={history} auth={auth} isLogin={isLogin}/>
    </div>
  );
};

export default withTranslation('common')(Header);
