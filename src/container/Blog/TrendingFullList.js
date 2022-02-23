import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Trending from "../../components/Blog/Trending";
import {
  getTrendingRequest,
  updateTrendingRequest,
} from "../../store/action/blogAction";
import InfiniteScroll from "react-infinite-scroll-component";

const TrendingFullList = ({ t, history }) => {
  const dispatch = useDispatch();
  let [page, setPage] = useState(0);
  const [posts] = useSelector((state) => [state.blogReducers.trend]);

  useEffect(() => {
    dispatch(getTrendingRequest(true, 0));
  }, [dispatch]);

  const handleFetchData = (e) => {
    page += 1;
    dispatch(updateTrendingRequest(true, page));
    setPage(page);
  };

  return (
    <div class="container">
      <div class="section-title m-4">
        <span class="caption d-block small">Trang Danh Sách</span>
        <h2>Toàn Bộ Bảng Xếp Hạng</h2>
      </div>

      <div className="">
        <InfiniteScroll
          dataLength={posts.list.length} //This is important field to render the next data
          next={(e) => handleFetchData(e)}
          hasMore={posts.page <= posts.size - 1}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {posts.list.map((post, idx) => {
            return (
              <Trending
                key={idx}
                history={history}
                rank={idx < 9 ? "0" + (idx + 1) : idx + 1}
                post={post}
              />
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default withTranslation("common")(TrendingFullList);
