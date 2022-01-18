import React, { useEffect, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { withRouter } from "react-router-dom";
import TrendingLoader from "../Loader/HomePage/TrendingListLoader";

import BlogDetails from "../../components/Blog/BlogDetails";
import { getBlogByNameRequest } from "../../store/action/blogAction";
import * as Types from "../../constraints/ActionTypes";

const TrendingLazy = lazy(() =>
  import("../../components/HomePage/TrendingList")
);

const Blog = (props) => {
  const dispatch = useDispatch();
  let { name } = useParams();

  useEffect(() => {
    let l_name = name.split("-");
    if (l_name.length <= 1 || isNaN(parseInt(l_name[0])))
      props.history.push("/404");
    dispatch({
      type: Types.LOADING_TOGGLE,
      payload: true
    });
    dispatch(getBlogByNameRequest(parseInt(l_name[0]), props.history));
  }, [dispatch, name, props.history]);
  const [blog] = useSelector((state) => [state.blogReducers.blogs]);

  return (
    <div className="blog-details-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 single-content">
            <BlogDetails history={props.history} blog={blog} name={name} />
          </div>

          <div class="col-lg-3">
            <Suspense fallback={<TrendingLoader />}>
              <TrendingLazy />
            </Suspense>

            <div class="section-title">
              <h2>MongoDB</h2>
            </div>

            <div class="trend-entry d-flex">
              <ul>
                <li>
                  <h2>
                    Hướng dẫn sao lưu, khôi phục data mongo (mongodump,
                    mongorestore)
                  </h2>
                </li>
                <li>
                  <h2>
                    Hướng dẫn sao lưu, khôi phục data mongo (mongodump,
                    mongorestore)
                  </h2>
                </li>
                <li>
                  <h2>
                    Hướng dẫn sao lưu, khôi phục data mongo (mongodump,
                    mongorestore)
                  </h2>
                </li>
                <li>
                  <h2>
                    Hướng dẫn sao lưu, khôi phục data mongo (mongodump,
                    mongorestore)
                  </h2>
                </li>
              </ul>
            </div>
            <div
              class="fb-page"
              data-href="https://www.facebook.com/facebook"
              data-tabs="timeline"
              data-width=""
              data-height=""
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true">
              <blockquote
                cite="https://www.facebook.com/facebook"
                class="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/facebook">Meta</a>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Blog);
