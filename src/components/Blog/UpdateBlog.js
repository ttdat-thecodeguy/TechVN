import * as Config from "../../constraints/Config";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useEffect, useState } from "react";
import { loadAction } from "../../store/action/loadingAction";
import { updateRequest } from "../../store/action/blogAction";
import { useDispatch } from "react-redux";

const UpdateBlog = ({ blog }) => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    setContentBlog(blog.content)
  },[blog])

  const [contentBlog, setContentBlog] = useState(blog.content);
  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      id: blog.id,
      content: contentBlog,
    };
    dispatch(loadAction(true));
    dispatch(updateRequest(data));
  };
  return (
    <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
          { Editor !== undefined && Editor !== null &&  <CKEditor
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
          /> }
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" onClick={e => handleUpdate(e)}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;