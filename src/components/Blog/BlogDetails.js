import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// action

import { Link } from "react-router-dom";
import { formatPublishDate } from "../../utils/datetimejs";

import ReactMarkdown from "react-markdown";


import { loadAction } from '../../store/action/loadingAction'

////sockjs, stomp
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { holdReady } from "jquery";

import * as Config from "../../constraints/Config";
import "../../container/Blog/styles.css"


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
  const {blog, name} = props;
  
  
  // return (
  //   <>
  //     {blog !== null && blog.length !== 0 && (
  //       <>
  //         <p class="mb-5">
  //           <img
  //             src={`${Config.IMG_URL_BLOG + blog.image.name}`}
  //             alt="img-header"
  //             class="img-fluid"
  //           />
  //         </p>
  //         <h1 class="mb-4">{blog.title}</h1>
  //         <div class="post-meta d-flex mb-5">
  //           <div class="bio-pic mr-3">
  //             <img
  //               src={`${Config.IMG_URL_ACCOUNT + blog.account.image}`}
  //               alt="img-author"
  //               class="img-fluidid"
  //             />
  //           </div>
  //           <div class="vcard">
  //             <span class="d-block">
  //               <a href="#">{blog.account.name}</a> Trong <a href="#">{blog.types[0].name}</a>
  //             </span>
  //             <span class="date-read">
  //               {formatPublishDate(blog.publishDate)}
  //               <span class="mx-1">&bull;</span> 3 Phút Đọc
  //               <span class="icon-star2 icon-statView"></span>
  //             </span>
  //           </div>
  //         </div>

  //         <div class="content" makrdown="1">
  //           <ReactMarkdown>{blog.content}</ReactMarkdown>
  //         </div>

  //         <div class="pt-5">
  //           <p>
  //             Danh Mục:
  //             {blog.types.map((type) => {
  //               return <Link href="#"> #{type.name} </Link>;
  //             })}
  //           </p>
  //         </div>

  //         <div class="pt-5">
  //           <div class="section-title">
  //             <h2 class="mb-5">6 Nhận Xét</h2>
  //           </div>
  //           <ul class="comment-list">
  //             <li class="comment">
  //               <div class="vcard bio">
  //                 <img src="images/person_1.jpg" alt="IMG Person" />
  //               </div>
  //               <div class="comment-body">
  //                 <h3>Jean Doe</h3>
  //                 <div class="meta">January 9, 2018 at 2:21pm</div>
  //                 <p>
  //                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //                   Pariatur quidem laborum necessitatibus, ipsam impedit vitae
  //                   autem, eum officia, fugiat saepe enim sapiente iste iure!
  //                   Quam voluptas earum impedit necessitatibus, nihil?
  //                 </p>
  //                 <p>
  //                   <a href="#">Reply</a>
  //                 </p>
  //               </div>
  //             </li>

  //             <li class="comment">
  //               <div class="vcard bio">
  //                 <img src="images/person_1.jpg" alt="Image placeholder" />
  //               </div>

  //               <form>
  //                 <div class="comment-body">
  //                   <div class="form-group">
  //                     <label for="message">Message</label>
  //                     <textarea
  //                       name=""
  //                       id="message"
  //                       cols="30"
  //                       rows="5"
  //                       class="form-control"
  //                     ></textarea>
  //                   </div>

  //                   <button
  //                     class="btn btn-primary"
  //                     name="btnNhanXet"
  //                     value="Nhận Xét"
  //                   >Bình luận</button>
  //                 </div>
  //               </form>
  //             </li>
  //           </ul>
  //         </div>
  //       </>
  //     )}
  //   </>
  // );

  // font-family: "Lato", Helvetica, sans-serif !important;
  // phần tiêu đề viết hoa
  // facebook like page
  // bài liên quan
  // banner
  // header không to lắm

  return (

        <>
          {blog !== null && blog.length !== 0 && ( 
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
                  <h2>6 Nhận Xét</h2>
                </div>
                <ul class="comment-list">
                  <li class="comment">
                    <div class="vcard bio">
                      <img src="images/person_1.jpg" alt="IMG Person" />
                    </div>
                    <div class="comment-body">
                      <h3>Jean Doe</h3>
                      <p>
                        Theo quan điểm của em thì bài viết này quá xuất sắc
                      </p>
                      <p>
                        <a href="#">Reply</a>
                      </p>
                    </div>
                  </li>
    
                  <li class="comment-form">
                    <div class="vcard bio">
                      <img class="rounded-circle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/VirtualBox_Ubuntu_21.10_15_10_2021_13_19_12_ENG.png/1200px-VirtualBox_Ubuntu_21.10_15_10_2021_13_19_12_ENG.png" alt="Image placeholder" />
                    </div>
    
                    <form>
                      <div class="comment-body">
                        <div class="form-group">
                          <label for="message">Message</label>
                          <textarea
                            name=""
                            id="message"
                            cols="30"
                            rows="5"
                            class="form-control"
                          ></textarea>
                        </div>
    
                        <button
                          class="btn btn-primary"
                          name="btnNhanXet"
                          value="Nhận Xét">Bình luận</button>
                      </div>
                    </form>
                  </li>
                </ul>
              </div>

            

              </>
          )};
          
        </>
  );

};

export default BlogDetails;
