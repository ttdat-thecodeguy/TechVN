import React from "react";
import ContentLoader from "react-content-loader";
import { formatPublishDate } from '../../utils/datetimejs'
import {Link} from 'react-router-dom'
export const Trending = (props) => {
  const { rank, post } = props;
  return (
    <div class="trend-entry d-flex">
      <div class="number align-self-start">{rank}</div>
      <div class="trend-contents">
        <h2>
          <Link to ={'/blog/' + post.link}>{post.title}</Link>
        </h2>
        <div class="post-meta">
          <span class="d-block">
            <a href="#">{post.account.username}</a> in <a href="#">{post.types[0].name}</a>
          </span>
          <span class="date-read">
            {formatPublishDate(post.publish_date)}
            <span class="mx-1">&bull;</span>
            3 min read 
            <span class="icon-star2"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

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
