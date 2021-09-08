import React from "react";
import * as Config from '../../constraints/Config'
import { formatPublishDate } from '../../utils/datetimejs'

import { Link } from 'react-router-dom'

const SliderItem = props => {
  const { post } = props
  return (
    <div class="site-section">
      <div class="container">
        <div class="half-post-entry d-block d-lg-flex bg-light">
          <div
            class="img-bg"
            style={{
              backgroundImage: `url(${Config.IMG_URL_BLOG  +  post.image.name})`,
            }}
          ></div>
          <div class="contents">
            <span class="caption">Dành Cho Bạn</span>
            <h2>
              <Link to={'/blog/' + post.link}>
                {post.title}
              </Link>
            </h2>
            <p class="mb-3">
              {post.description}
            </p>

            <div class="post-meta">
              <span class="d-block">
                <a href="#">{post.account.username}</a> in <a href="#">{post.types[0].name}</a>
              </span>
              <span class="date-read">
              {formatPublishDate(post.publish_date)} <span class="mx-1">&bull;</span> 3 min read{" "}
                <span class="icon-star2"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SliderItem