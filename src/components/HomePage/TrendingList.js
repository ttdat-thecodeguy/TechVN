import React,{useEffect} from "react";
import  Trending  from "../Blog/Trending";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingRequest } from "../../store/action/blogAction";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom'
import { withTranslation } from "react-i18next";

const TrendingList = props => {
  const dispatch = useDispatch();
  const { t } = props;
  const [posts] = useSelector((state) => [state.blogReducers.trend]);
  
  useEffect(() => {
    dispatch(getTrendingRequest(false));
  }, [dispatch]);
  return (
    <>
      <div class="section-title">
        <h2>
        { t('homepage.trending.title', { framework: "react-i18next" }) }
        </h2>
      </div>
      {
        posts.list.map((post, idx) => {
          return <Trending history={props.history} rank={ '0' + (idx+1) } post={post} />
        })
      }
      {  posts.list.length > 0 &&  <p>
        <Link to="/yeu-thich-nhat" class="more">
        { t('homepage.trending.watch_more', { framework: "react-i18next" }) }
        <span class="icon-keyboard_arrow_right"></span>
        </Link>
      </p> } 
    </>
  );
};

export default withRouter(withTranslation('common')(TrendingList));