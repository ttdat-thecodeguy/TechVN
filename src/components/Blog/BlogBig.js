import React from "react";
import ContentLoader from "react-content-loader";
import { formatPublishDate } from "../../utils/datetimejs";
import * as Config from "../../constraints/Config";
import ReactShowMoreText from "react-show-more-text";

import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

 const BlogBig = ({ post, t, i18n, isCate }) => {
  return (
    <div className="post-entry-1">
      <Link to={"/blog/" + post.link}>
        <img
          src={Config.IMG_URL_BLOG + post.image.name}
          alt="img"
          className={`img-fluid${isCate === true ? ' cate-img' : ''}`}
        />
      </Link>
      <h2>
        <Link to={"/blog/" + post.link}>{post.title}</Link>
      </h2>
      <ReactShowMoreText
        lines={3}
        more="Xem Thêm"
        less="Ẩn Đi"
        expanded={false}
        width={220}
        truncatedEndingComponent={"... "}>
        {post.description}
      </ReactShowMoreText>

      <div class="post-meta">
        <span class="d-block">
          <a href="/">{post.account.name}</a> Trong{" "}
          <a href="/">{post.types[0].name}</a>
        </span>
        <span className="date-read">
        { i18n.language === "vn" ? formatPublishDate(post.publishDate, false) : formatPublishDate(post.publishDate, true)}
          <span className="mx-1">&bull;</span>
        </span>
        <span className="icon-star2"></span>
      </div>
    </div>
  );
};

export default withTranslation("common")(BlogBig)

export const LoaderBlogBig = () => {
  return (
    <ContentLoader viewBox="0 0 360 430">
      <rect x="0" y="0" rx="5" ry="5" width="360" height="216" />
      <rect x="0" y="223" rx="5" ry="5" width="360" height="20" />
      <rect x="0" y="250" rx="5" ry="5" width="200" height="20" />
      <rect x="0" y="290" rx="5" ry="5" width="350" height="10" />
      <rect x="0" y="310" rx="5" ry="5" width="350" height="10" />
      <rect x="0" y="330" rx="5" ry="5" width="340" height="10" />
      <rect x="0" y="350" rx="5" ry="5" width="350" height="10" />
      <rect x="0" y="390" rx="5" ry="5" width="120" height="8" />
      <rect x="0" y="410" rx="5" ry="5" width="150" height="8" />
    </ContentLoader>
  );
};
