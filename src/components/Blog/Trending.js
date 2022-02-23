import React, {  } from "react";
import ContentLoader from "react-content-loader";
import { formatPublishDate } from "../../utils/datetimejs";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { isEmpty } from "lodash";

const Trending = ({ rank, post, t, i18n }) => {
  return (
   
    <>
      {isEmpty(post) ? (
        <></>
      ) : (
        <div class="trend-entry d-flex">
          <div class="number align-self-start">{rank}</div>
          <div class="trend-contents">
            <h2>
              <Link to={"/blog/" + post.link}>{post.title}</Link>
            </h2>
            <div class="post-meta">
              <span class="d-block">
                <span>{post.account.username}</span> Trong{" "}
                <span>{post.types[0].name}</span>
              </span>
              <span class="date-read">
                {i18n.language === "vn"
                  ? formatPublishDate(post.publishDate, false)
                  : formatPublishDate(post.publishDate, true)}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default withTranslation("common")(Trending);

export const LoaderTrending = () => {
  return (
    <ContentLoader viewBox="0 0 360 100">
      <rect x="0" y="0" rx="5" ry="5" width="50" height="30" />
      <rect x="60" y="0" rx="4" ry="4" width="240" height="18" />
      <rect x="60" y="25" rx="3" ry="3" width="210" height="18" />
      <rect x="60" y="70" rx="5" ry="5" width="120" height="8" />
      <rect x="60" y="85" rx="5" ry="5" width="150" height="8" />
    </ContentLoader>
  );
};
