import React, { useEffect } from "react";
import  BlogBig  from "../Blog/BlogBig";
import  BlogChild  from "../Blog/BlogChild";
import { useDispatch, useSelector } from 'react-redux'
import { getTopLoveRequest } from '../../store/action/blogAction' 
import { withTranslation } from "react-i18next";

const TopLike = props => {

  const dispatch = useDispatch()
  const [ toplike ] = useSelector(state => [
    state.blogReducers.toplike
  ])

  const { t } = props;
  useEffect(() => {
     dispatch(getTopLoveRequest())
  },[dispatch])

  const showPostChild = posts => {
    let posts_child = posts.slice(1,4)
    return posts_child.map(post => {return <BlogChild post={post} />} )
  }
  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>
            { t('homepage.watched', { framework: "react-i18next" }) }
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          {toplike.list.length > 0 && <BlogBig post={toplike.list[0]} isCate={false} />}
        </div>
        <div class="col-md-6">
          {showPostChild(toplike.list)}
        </div>
      </div>
    </>
  );
};
export default withTranslation('common')(TopLike)