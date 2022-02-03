import React, { useEffect, lazy, Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { withRouter } from "react-router-dom";
import TrendingLoader from "../Loader/HomePage/TrendingListLoader";

import BlogDetails from "../../components/Blog/BlogDetails";
import { getBlogByNameRequest } from "../../store/action/blogAction";

import { isAuth } from "../../store/selector";
import { loadAction } from "../../store/action/loadingAction";

const TrendingLazy = lazy(() =>
  import("../../components/HomePage/TrendingList")
);

const Blog = (props) => {
  const dispatch = useDispatch();
  let { name } = useParams();

  const [auth] = useSelector((state) => [isAuth(state)]);
  const [blog, same_cate] = useSelector((state) => [
    state.blogReducers.blog,
    state.blogReducers.same_cate
  ]);

  useEffect(() => {
    let l_name = name.split("-");
    if (l_name.length <= 1 || isNaN(parseInt(l_name[0])))
      props.history.push("/404");
    dispatch(loadAction(true));
    dispatch(getBlogByNameRequest(parseInt(l_name[0]), props.history));
  }, [dispatch, name, props.history]);
  return (
    <div className="blog-details-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 single-content">
            <BlogDetails
              history={props.history}
              auth={auth}
              blog={blog}
              name={name}
            />
          </div>

          <div class="col-lg-3">
            <Suspense fallback={<TrendingLoader />}>
              <TrendingLazy />
            </Suspense>

            {blog !== undefined && blog.types !== undefined && (
              <>
                <div class="section-title">
                  <h2>{blog.types[0].name}</h2>
                </div>

                <div class="trend-entry d-flex">
                  <ul>
                    {same_cate.length !== 0 &&
                      same_cate.map((sb) => (
                        <li>
                          <Link to={`/blog/${sb.path}`}>
                            <h2>{sb.title}</h2>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </>
            )}

            <div
              class="fb-page"
              data-href="https://www.facebook.com/facebook"
              data-tabs="timeline"
              data-width=""
              data-height=""
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
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
