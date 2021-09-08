import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// action
import { getBlogByNameRequest } from "../../store/action/blogAction";
import * as Config from "../../constraints/Config";
import * as Types from "../../constraints/ActionTypes";
import { Link } from "react-router-dom";
import { formatPublishDate } from "../../utils/datetimejs";

import ReactMarkdown from "react-markdown";

const BlogDetails = (props) => {
  const dispatch = useDispatch();
  let { name } = useParams();

  useEffect(() => {
    let l_name = name.split("-");
    if (l_name.length <= 1 || isNaN(parseInt(l_name[0])))
      props.history.push("/404");
    dispatch({
      type: Types.LOADING_TOGGLE,
      payload: true,
    });
    dispatch(getBlogByNameRequest(parseInt(l_name[0]), props.history));
  }, [dispatch, name, props.history]);

  //useSelector
  const [blog] = useSelector((state) => [state.blogReducers.blogs]);
  return (
    <>
      {blog !== null && blog.length !== 0 && (
        <>
          <p class="mb-5">
            <img
              src={`${Config.IMG_URL_BLOG + blog.image.name}`}
              alt="img-header"
              class="img-fluid"
            />
          </p>
          <h1 class="mb-4">{blog.title}</h1>
          <div class="post-meta d-flex mb-5">
            <div class="bio-pic mr-3">
              <img
                src={`${Config.IMG_URL_ACCOUNT + blog.account.image}`}
                alt="img-author"
                class="img-fluidid"
              />
            </div>
            <div class="vcard">
              <span class="d-block">
                <a href="#">{blog.account.name}</a> Trong
                <a href="#">{blog.types[0].name}</a>
              </span>
              <span class="date-read">
                {formatPublishDate(blog.publish_date)}
                <span class="mx-1">&bull;</span> 3 Phút Đọc
                <span class="icon-star2"></span>
              </span>
            </div>
          </div>

          <div class="content" makrdown="1">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>

          <div class="pt-5">
            <p>
              Danh Mục:
              {blog.types.map((type) => {
                return <Link href="#"> #{type.name} </Link>;
              })}
            </p>
          </div>

          <div class="pt-5">
            <div class="section-title">
              <h2 class="mb-5">6 Nhận Xét</h2>
            </div>
            <ul class="comment-list">
              <li class="comment">
                <div class="vcard bio">
                  <img src="images/person_1.jpg" alt="IMG Person" />
                </div>
                <div class="comment-body">
                  <h3>Jean Doe</h3>
                  <div class="meta">January 9, 2018 at 2:21pm</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                    autem, eum officia, fugiat saepe enim sapiente iste iure!
                    Quam voluptas earum impedit necessitatibus, nihil?
                  </p>
                  <p>
                    <a href="#">Reply</a>
                  </p>
                </div>
              </li>

              <li class="comment">
                <div class="vcard bio">
                  <img src="images/person_1.jpg" alt="Image placeholder" />
                </div>

              <form>

                <div class="comment-body">
                  <div class="form-group">
                    <label for="message">Message</label>
                    <textarea
                      name=""
                      id="message"
                      cols="30"
                      rows="5"
                      class="form-control"
                    ></textarea>
                  </div>

                  <input class="btn btn-primary" name="btn" value="Nhận Xét" />

                </div>
              </form>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default BlogDetails;
