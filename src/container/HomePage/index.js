import React, { lazy, Suspense } from "react";

import TopLikeLoader from "../Loader/HomePage/TopLikeLoader";
import TrendingLoader from "../Loader/HomePage/TrendingListLoader";
import SliderLoader from "../Loader/HomePage/SliderLoader";

const TopLikeLazy = lazy(() => import("../../components/HomePage/TopLike"));
const SliderLazy = lazy(() => import("../../components/HomePage/SliderList"));
const TrendingLazy = lazy(() =>
  import("../../components/HomePage/TrendingList")
);

const HomePage = () => {
  return (
    <>
      <div class="container">
        <Suspense fallback={<SliderLoader />}>
          <SliderLazy />
        </Suspense>
        <div class="site-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <Suspense fallback={<TopLikeLoader />}>
                  <TopLikeLazy />
                </Suspense>
              </div>
              <div class="col-lg-4">
                <Suspense fallback={<TrendingLoader />}>
                  <TrendingLazy />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="site-section subscribe bg-gradient">
        <div class="container">
          <form action="#" class="row align-items-center">
            <div class="col-md-5 mr-auto text-footer-color">
              <h2>Newsletter Subcribe</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis aspernatur ut at quae omnis pariatur obcaecati
                possimus nisi ea iste!
              </p>
            </div>
            <div class="col-md-6 ml-auto">
              <div class="d-flex">
                <input
                  type="email"
                  class="form-control-app"
                  placeholder="Enter your email"
                />
                <button type="submit" class="btn btn-secondary">
                  <span class="icon-paper-plane"></span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HomePage;
