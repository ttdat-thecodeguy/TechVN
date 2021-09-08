import React, { useEffect } from "react";
import { getAllBlogOfAccountRequest } from "../../store/action/userAction";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import * as DateTimeUtils from '../../utils/datetimejs'
import * as Config from '../../constraints/Config'


const UserBlog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogOfAccountRequest());
  }, []);

  const [blogs] = useSelector((state) => [state.userReducers.blogs]);

  return (
    <div class="container">
      <div class="section-title m-4">
        <span class="caption d-block small">Trang Người Dùng</span>
        <h2>Blog Của Tôi</h2>
      </div>
      <div id="container">
        {blogs !== null &&
          blogs.length !== 0 &&
          blogs.map((blog) => {
            return (
              <div class="card pt-5 pb-5 pl-3 pr-3">
                <div class="row">
                  <div class="col-4">
                    <img
                      class="img-responsive"
                      width="100%"
                      src={Config.IMG_URL_BLOG + blog.image.name}
                      alt="IMG_BLOG"
                    />
                  </div>
                  <div class="contents col-6">
                    <h1>
                      <Link to={'/blog/' + blog.link}>
                        {blog.title}
                        {/* <div class="badge badge-danger badge-outlined text-size-15">
                        {" "}
                        <i class="fa fa-lock" aria-hidden="true"></i> Đã Lưu{" "}
                        </div>{" "} */}
                      </Link>
                    </h1>
                    <p class="mb-3">
                      {blog.description}
                    </p>
                    <div class="post-meta">
                      <span class="d-block">
                      <Link to="">{blog.account.name}</Link> Trong <Link href="#">{blog.types[0].name}</Link>
                      </span>
                      <span class="date-read">
                        {DateTimeUtils.formatPublishDate(blog.publish_date)}<span class="mx-1">&bull;</span> 3 phút đọc
                        <span class="icon-star2"></span>
                      </span>
                    </div>
                  </div>
                  <div class="col-2">
                    <ul>
                      <li class="bg-primary tool">
                        <i
                          class="fa fa-pencil text-light"
                          aria-hidden="true"
                        ></i>
                      </li>
                      <li class="bg-danger tool">
                        <i
                          class="fa fa-trash text-light"
                          aria-hidden="true"
                        ></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default withRouter(UserBlog);
