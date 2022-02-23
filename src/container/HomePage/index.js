import React, { lazy, Suspense } from "react";

import TopLikeLoader from "../Loader/HomePage/TopLikeLoader";
import TrendingLoader from "../Loader/HomePage/TrendingListLoader";
import SliderLoader from "../Loader/HomePage/SliderLoader";
import { useSelector } from "react-redux";
import { mapLovedBlog } from "../../store/selector"

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
        <div class="contain row">
          
          <div class="col-lg-3 col-6 f-c">
            <h1>Về Trang</h1>
            <ul>
              <li><a href="https://tinhte.vn/" alt="tinh tế">Thông Tin Trang</a></li>
              <li><a href="https://tinhte.vn/" alt="tinh tế">Sứ Mệnh</a></li>
              <li><a href="https://tinhte.vn/" alt="tinh tế">Dịch Vụ</a></li>
              <li><a href="https://tinhte.vn/" alt="tinh tế">Thông Tin Khác</a></li>
              <li><a href="https://tinhte.vn/" alt="tinh tế">F&Q</a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-6 f-c">
            <h1>Phần Mềm</h1>
            <ul>
              <li><a href="https://tinhte.vn/" alt="tinh tế">Thông Tin Công Nghệ</a></li>
              <li><a href="https://tinhte.vn/" alt="tinh tế">Phần Mềm Mới</a></li>
              <li><a href="https://tinhte.vn/" alt="tinh tế">Lỗi Phần Mềm</a></li>
              <li><a href="https://tinhte.vn/" alt="tinh tế">Mẹo Hữu Ích</a></li>
              
            </ul>
          </div>
          <div class="col-lg-3 col-6 f-c">
            <h1>Liên Kết</h1>
            <ul>
              <li>
                  <a href="https://tinhte.vn/" alt="tinh tế">Tinh Tế</a>
              </li>
              <li>
                <a href="https://tinhte.vn/" alt="tinh tế">Thế Giới Di Động</a>
              </li>
              <li>
                <a href="https://tinhte.vn/" alt="tinh tế">StackJava</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col f-c">
            <h1>Hỗ Trợ</h1>
            <ul>
              <li> <a href="https://tinhte.vn/" alt="tinh tế">Liên Hệ Chúng Tôi</a></li>
              <li> <a href="https://tinhte.vn/" alt="tinh tế">Facebook chính thức</a></li>
              <li> <a href="https://tinhte.vn/" alt="tinh tế">Zalo Chính Thức</a></li>
            </ul>
          </div>
          
          <div class="clearfix"> </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
