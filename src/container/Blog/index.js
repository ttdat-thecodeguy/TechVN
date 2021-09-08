import React, { lazy, Suspense } from "react";

import { withRouter } from "react-router-dom";
import TrendingLoader from "../Loader/HomePage/TrendingListLoader";

const BlogDetails = lazy(() => import("../../components/Blog/BlogDetails"));

const TrendingLazy = lazy(() =>
  import("../../components/HomePage/TrendingList")
);
const Blog = (props) => {
  return (
    <div className="blog-details-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 single-content">
            <Suspense fallback={<div>loading..</div>}>
              <BlogDetails history={props.history} />
            </Suspense>
          </div>

          <div class="col-lg-3 ml-auto">
            <Suspense fallback={<TrendingLoader />}>
              <TrendingLazy />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Blog);
