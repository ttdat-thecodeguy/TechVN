import React, { useEffect } from "react";
import { BlogBig } from "../Blog/BlogBig";
import { BlogChild } from "../Blog/BlogChild";
import { useDispatch, useSelector } from 'react-redux'
import { getTopLoveRequest } from '../../store/action/blogAction' 

const TopLike = props => {

  const dispatch = useDispatch()
  const [ toplike ] = useSelector(state => [
    state.blogReducers.toplike
  ])

  useEffect(() => {
     dispatch(getTopLoveRequest(0))
  },[])

  const showPostChild = posts => {
    let posts_child = posts.slice(1,4)
    return posts_child.map(post => {return <BlogChild post={post} />} )
  }
  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>Xem Nhiều Nhất</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          {toplike.list.length > 0 && <BlogBig post={toplike.list[0]} />}
        </div>
        <div class="col-md-6">
          {showPostChild(toplike.list)}
        </div>
      </div>
    </>
  );
};



export default TopLike