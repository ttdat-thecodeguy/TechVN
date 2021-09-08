import React,{useEffect} from "react";
import { Trending } from "../Blog/Trending";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingRequest } from "../../store/action/blogAction";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom'

const TrendingList = props => {

  const dispatch = useDispatch();
  const [posts] = useSelector((state) => [state.blogReducers.trend]);
  useEffect(() => {
    dispatch(getTrendingRequest());
  }, [dispatch]);

  return (
    <>
      <div class="section-title">
        <h2>Yêu Thích Nhất</h2>
      </div>
      {
        posts.map((post, idx) => {
          return <Trending history={props.history} rank={ '0' + (idx+1) } post={post} />
        })
      }
      {  posts.length > 5 &&  <p>
        <Link to="" class="more">
          Xem Toàn Bộ Bảng Xếp Hạng <span class="icon-keyboard_arrow_right"></span>
        </Link>
      </p> }
     
    </>
  );
};

export default withRouter(TrendingList);