/// react
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//project
import UploadImage from "../../components/Blog/UploadImage";
//action
import { getImageRequest } from "../../store/action/imageAction";
import { getTypeRequest } from "../../store/action/typeAction"
import { addRequest } from '../../store/action/blogAction'

import * as Config from "../../constraints/Config";

//ckeditor
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import {withRouter} from 'react-router-dom';

const BlogEdit = (props) => {

  /////// form
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contentBlog, setContentBlog] = useState("");

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [imageChoose, setImageChoose] = useState(new Array(0).fill(""));
  const [types, setTypes] = useState([]);

  const dispatch = useDispatch();

  const [imgList, typeList] = useSelector((state) => [
    state.imageReducers,
    state.typeReducers
  ]);

  const handleChooseImage = (e) => {
    e.preventDefault();
    setIsOpenModal(true);
    dispatch(getImageRequest());
  };

  const handleChecked = (e, id) => {
    if (e.target.checked) {
      setTypes([
        ...types, id
      ])
    } else{
      setTypes(
        types.filter(t => t.id !== id)
      )
    }
  }

  const handleAdd = (e) => {
    e.preventDefault();

  

    const blog = {
      content: contentBlog,
      description,
      image_id: imageChoose.length !== 0 ? imageChoose[0].id : 1,
      title,
      types
    }

    dispatch(addRequest(blog, props.history))    
  };
  
  useEffect(() => {
    
    let img_c = "";
    imageChoose.forEach(img => {
      if (img != null) img_c += `<img src="${Config.IMG_URL_BLOG + img.name}" alt="img-upload" />`;
    })
    console.log(imageChoose)
    setContentBlog(content => content + img_c);
    dispatch(getTypeRequest())
  }, [dispatch, imageChoose]);

  console.log(props.match.params.id)

  return (
    <div class="container">
      <form>
        <div class="form-group">
          <label>Tiêu Đề:</label>
          <input
            type="text"
            placeholder="Tiêu Đề bài viết..."
            class="blog-input"
            required="required"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="">Mô tả ngắn</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div class="form-group">
          <label>nội dung:</label>
          <button
            class="form-control mt-3 mb-3"
            onClick={(e) => handleChooseImage(e)}
          >
            Thêm Ảnh
          </button>
          {imgList && (
            <UploadImage
              modalIsOpen={isOpenModal}
              afterOpenModal={() => {}}
              closeModal={() => setIsOpenModal(false)}
              listImage={imgList}
              setImgChoose={setImageChoose}
            />
          )}

          <CKEditor
            editor={Editor}
            data={contentBlog}
            config={Config.editorConfig}
            onReady={(editor) => {}}
            onChange={(event, editor) => {
              const data = editor.getData();
              setContentBlog(data);
            }}
            onBlur={(event, editor) => {}}
            onFocus={(event, editor) => {}}
          />
        </div>
        <div class="form-group">
          <label>Chủ đề</label>
          <div class="row ml-3">
            
            { typeList && typeList.map(type => {
              return (

                <div class="col-4">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  class="form-check-input"
                  value={type.id}
                  onChange={e => handleChecked(e, type.id)}
                />
                <label for="remember-me" class="label-agree-term">
                  {type.name}
                </label>
              </div>

              )
            }) }
           
            
          </div>
        </div>
        <div class="form-group form-button">
          <input
            type="submit"
            class="form-submit"
            value="Thêm Blog"
            onClick={(e) => handleAdd(e)}
          />
        </div>
      </form>
    </div>
  );
};

export default withRouter(BlogEdit);
