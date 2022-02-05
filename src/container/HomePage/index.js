import React, { lazy, Suspense } from "react";

import TopLikeLoader from "../Loader/HomePage/TopLikeLoader";
import TrendingLoader from "../Loader/HomePage/TrendingListLoader";
import SliderLoader from "../Loader/HomePage/SliderLoader";
import { useSelector } from "react-redux";
import { mapLovedBlog } from "../../store/selector"
// import { isAuth } from '../../store/selector/authSelector'

const TopLikeLazy = lazy(() => import("../../components/HomePage/TopLike"));
const SliderLazy = lazy(() => import("../../components/HomePage/SliderList"));
const TrendingLazy = lazy(() =>
  import("../../components/HomePage/TrendingList")
);

const HomePage = () => {
  const [ loved ] = useSelector(state => [ mapLovedBlog(state) ])
  
  return (
    <>
      <div class="container">
        <Suspense fallback={<SliderLoader />}>
          <SliderLazy loved={loved} />
        </Suspense>
        <div class="site-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <Suspense fallback={<TopLikeLoader />}>
                  <TopLikeLazy loved={loved} />
                </Suspense>
              </div>
              <div class="col-lg-4">
                <Suspense fallback={<TrendingLoader />}>
                  <TrendingLazy loved={loved} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="contain">
          <div class="col">
            <h1>Về Trang</h1>
            <ul>
              <li>Thông tin trang</li>
              <li>Sứ Mệnh</li>
              <li>Dịch Vụ</li>
              <li>Thông tin Khác</li>
              <li>F&Q</li>
            </ul>
          </div>
          <div class="col">
            <h1>Phần Mềm</h1>
            <ul>
              <li>Thông tin công nghệ</li>
              <li>Phần Mềm Mới</li>
              <li>Lỗi Phần Mềm</li>
              <li>Mẹo Hữu Ích</li>
              
            </ul>
          </div>
          <div class="col">
            <h1>Liên Kết</h1>
            <ul>
              <li>Tinh Tế</li>
              <li>Thế Giới Di Động</li>
              <li>StackJava</li>
            </ul>
          </div>
          <div class="col">
            <h1>Hỗ Trợ</h1>
            <ul>
              <li>Liên Hệ Chúng tôi</li>
              <li>Fanpage Chính thức</li>
              <li>Zalo Chính Thức</li>
            </ul>
          </div>
          <div class="col social">
            <h1>Nhận Tin Mới Nhất</h1>
            <form class="form-inline">
              <div class="form-group">
              <input
                  type="email"
                  class="form-control-app"
                  placeholder="Nhập Email..."
                />
                <button type="submit" class="btn btnSend">
                  <span class="icon-paper-plane"></span>
                </button>
              </div>
              
            </form>
          </div>
          <div class="clearfix"> </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
