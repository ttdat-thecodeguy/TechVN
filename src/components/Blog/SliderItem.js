import React from "react";
import * as Config from "../../constraints/Config";
import { formatPublishDate } from "../../utils/datetimejs";

import { Link } from "react-router-dom";
import ReactShowMoreText from "react-show-more-text";
import { withTranslation } from "react-i18next";
import { isEmpty } from "lodash";

const SliderItem = ({ post, t, i18n }) => {
  
  return (
    <div class="site-section">
      <div class="container">
        {isEmpty(post) && post === undefined ? (
          <></>
        ) : (
          <div class="half-post-entry d-block d-lg-flex bg-light">
            <div
              class="img-bg"
              style={{
                backgroundImage: `url(${
                  Config.IMG_URL_BLOG + post.image.name
                })`,
              }}
            ></div>
            <div class="contents">
              <span class="caption">Dành Cho Bạn</span>
              <h2>
                <Link to={"/blog/" + post.link}>{post.title}</Link>
              </h2>
              <p class="mb-3">
                <ReactShowMoreText
                  lines={3}
                  more="Show more"
                  less="Show less"
                  className="content-css"
                  anchorClass="my-anchor-css-class"
                  expanded={false}
                  width={220}
                  truncatedEndingComponent={"... "}
                >
                  {post.description}
                </ReactShowMoreText>
              </p>

              <div class="post-meta">
                <span class="d-block">
                  <span>{post.account.username}</span> Trong{" "}
                  <span>{post.types[0].name}</span>
                </span>
                {i18n.language === "vn"
                  ? formatPublishDate(post.publishDate, false)
                  : formatPublishDate(post.publishDate, true)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default withTranslation("common")(SliderItem);
