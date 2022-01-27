// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// action

import { Link } from "react-router-dom";
// import { formatPublishDate } from "../../utils/datetimejs";

import ReactMarkdown from "react-markdown";


// import { loadAction } from '../../store/action/loadingAction'

////sockjs, stomp

// import SockJS from "sockjs-client";
// import Stomp from "stompjs";
// import { holdReady } from "jquery";

import * as Config from "../../constraints/Config";
import "../../container/Blog/styles.css"
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
///action
import { addCommentRequest } from "../../store/action/blogAction"
import { loadAction } from "../../store/action/loadingAction"

import { isEmpty } from "lodash"

const BlogDetails = (props) => {





  // fake useeffect

  ////
  // const handleNhanXet = (e) => {
  //   e.preventDefault();
  //   var sock = new SockJS("https://techblog-vn.herokuapp.com/gs-guide-websocket");
  //   let stompClient = Stomp.over(sock);
  //   stompClient.connect({}, function (frame) {
  //     console.log("Connected: ");
  //     stompClient.subscribe("/topic/greetings", (messeage) => {
  //       console.log("hello");
  //       console.log("hello" + messeage);
  //     });
  //     setStompClient(stompClient);
  //   });
  // };

  //useSelector
  const { blog, auth } = props;


  const dispatch = useDispatch()
  const [comment, setComment] = useState("")
 
  // font-family: "Lato", Helvetica, sans-serif !important;
  // phần tiêu đề viết hoa
  // facebook like page
  // bài liên quan
  // banner
  // header không to lắm

  const comments = useSelector((state) => state.blogReducers.comments, shallowEqual);

  const handleComment = useCallback((e) => {
    e.preventDefault()
    dispatch(loadAction(true))
    dispatch(addCommentRequest({
      content: comment,
      blog_id: blog.id 
    }, auth))},[auth, blog.id, comment, dispatch]);
 
  return (

        <>
          {blog !== undefined && blog.types !== undefined && ( 
              <>
              <span class="ml-3">  <Link to="/">{"Home"}</Link> / 
                {" "} <Link>{blog.types[0].name}</Link>  /  
                {" "}{blog.title} 
              </span>
              <p class="mb-5">
                <img
                  src={`${Config.IMG_URL_BLOG + blog.image.name}`}
                  alt="img-header"
                  class="img-fluid"
                  style={{ border: "5px solid black", margin: 0, padding: 0, width: "100%", height: 450 }}
                />
              </p>
              <div class="d-flex">
                  <svg
                    class="bd-placeholder-img rounded mr-2"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                  >
                    <rect width="100%" height="100%" fill="#007aff"></rect>
                  </svg>
                  <div class="d-block">
                    <h5 style={{ textTransform: "uppercase", fontWeight:700 }}>
                    {blog.title}
                    </h5>
                    <p>Bởi {blog.account.username}</p>
                    <div class="tags-container">
    
                     {blog.types.map((type) => {
                        return <span class="badge bg-secondary">{type.name}</span>
                      })}
                    </div>
                  </div>
                 
                </div>
              <div class="content mt-5" makrdown="1">
                <ReactMarkdown>{blog.content}</ReactMarkdown>                
              </div>
    
              
    
    
              <div>
                <div class="section-title">
                  <h2>{comments.length} Nhận Xét</h2>
                </div>
                <ul class="comment-list">
                  { comments !== undefined && comments.length !== 0 && comments.map(c => {
                    return (
                      <li class="comment">
                      <div class="vcard bio">
                        <img src={`${Config.IMG_URL_ACCOUNT + c.account.image}`} alt="IMG Person" />
                      </div>
                      <div class="comment-body">
                        <h3>{c.account.username}</h3>
                        <p>
                          {c.content}
                        </p>
                        <p>
                          <button href="#">Reply</button>
                        </p>
                      </div>
                    </li>
                    );
                  }) }

                    { auth !== undefined && isEmpty(auth) === false ?  <li class="comment-form">
                    <div class="vcard bio">
                      <img class="rounded-circle" src={`${Config.IMG_URL_ACCOUNT + auth.user.image}`} alt="avatar" />
                    </div>
                     <form>
                      <div class="comment-body">
                        <div class="form-group">
                          <label for="message">Nội Dung</label>
                          <textarea
                            name=""
                            id="message"
                            cols="30"
                            rows="5"
                            class="form-control"
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                          ></textarea>
                        </div>
    
                        <button
                          class="btn btn-primary"
                          name="btnNhanXet"
                          value="Nhận Xét"
                          onClick={e => handleComment(e)}>Bình luận</button>
                      </div>
                    </form> 
                   

                  </li> : <div className="unlogin-container">
                      <span>Bạn chưa đăng nhập, vui lòng đăng nhập để bình luận</span>
                      <div> 
                        <button type="button" class="btn btn-primary text-12 ml-5">Đăng Nhập</button>
                        <button type="button" class="btn btn-success text-12 ml-2">Đăng Kí</button>
                      </div>
                  </div> }
    
                 
                </ul>
              </div>

              </>
          )};
          
        </>
  );

};

export default BlogDetails;
