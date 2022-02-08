import React, { useEffect } from "react";
import { withTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Trending from "../../components/Blog/Trending";
import { getTrendingRequest } from "../../store/action/blogAction";

const TrendingFullList = ({ t, history }) => {
  const dispatch = useDispatch();
  const [posts] = useSelector((state) => [state.blogReducers.trend]);
  useEffect(() => {
    dispatch(getTrendingRequest(false));
  }, [dispatch]);
  return (
    <div class="container">
      <div class="section-title m-4">
        <span class="caption d-block small">Trang Danh Sách</span>
        <h2>Yêu Thích Nhất</h2>
      </div>

      <div className="">
        {posts.list.map((post, idx) => {
          return (
            <Trending history={history} rank={"0" + (idx + 1)} post={post} />
          );
        })}
      </div>     
    </div>
  );
};

export default withTranslation("common")(TrendingFullList);
