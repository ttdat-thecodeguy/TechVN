import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import * as Config from "../../constraints/Config";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import { getImageTestingRequest } from "../../store/action/imageAction";
var FormData = require("form-data");

Modal.setAppElement("#root");

const customStylesModal = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
};


const UploadImage = (props) => {
  // const listImage = [
  //     {
  //         id:1,
  //         name: "image_default.png"
  //     }, {
  //         id:2,
  //         name: "image_default.png"
  //     },{},{},{},{}
  // ]

  const [error, setError] = useState("");

  const handleAddImage = () => {
    let countImgChoose = 0;
    let imgChoose = imgStyle.map((img, idx) => {
      if (img.isChoose === true) {
        countImgChoose += 1;

        return {
          id: props.listImage[idx].id,
          name: props.listImage[idx].name,
        };
      } else return null;
    });

    if (countImgChoose === 0) {
      setError("Không có hình ảnh nào được chọn");
      return;
    } else {
      //close modal
      imgChoose = imgChoose.filter(img => img !== null)
      props.setImgChoose(imgChoose);
      props.closeModal();
    }
  };

  const handleChangeStyleImage = (e, id) => {
    e.preventDefault();

    if (isEmpty(imgStyle[id]) || imgStyle[id].isChoose === false) {
      imgStyle[id] = {
        style: {
          border: "5px solid blue",
        },
        isChoose: true,
      };
    } else {
      if (imgStyle[id].isChoose === true) {
        imgStyle[id] = {
          style: {
            border: "none",
          },
          isChoose: false,
        };
      }
    }
    setImgStyle([...imgStyle]);
  };

  const handleUpload = e => {
    e.preventDefault()

    // var sendData = new FormData();
    // Array.from(images).forEach((file) => sendData.append("images", file));
    var sendData = new FormData();
    Array.from(e.target.files).forEach((file) => sendData.append("files", file));
    
  }

  useEffect(() => {
    setError("");
    if (props.listImage.length !== 0) {
      let img = props.listImage.map((img) => {
        return {};
      });
      setImgStyle([...img]);
    }
  }, [props.listImage]);
  const [imgStyle, setImgStyle] = useState(
    new Array(props.listImage.length).fill({})
  );

    console.log(imgStyle)

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onAfterOpen={props.afterOpenModal}
      onRequestClose={props.closeModal}
      style={customStylesModal}
      contentLabel="Notification Modal"
    >
      <h3>Chọn Ảnh</h3>
      <div class="container row">
        {props.listImage.length !== 0 &&
          imgStyle.length !== 0 &&
          props.listImage !== null &&
          props.listImage.map((image, idx) => {
            return (
              <div class="col-3">
                <img
                  class="img-responsive img-upload mb-2"
                  onClick={(e) => handleChangeStyleImage(e, idx)}
                  style={imgStyle[idx].style}
                  src={Config.IMG_URL_BLOG + image.name}
                  alt="content-img"
                />
              </div>
            );
          })}
      </div>

      <div className="mt-5">
        {error !== "" && <p class="error-title">{error}</p>}
        <label for="file-upload" class="m-auto btn btn-primary">
              Upload File
        </label>
        <input id="file-upload" type="file" onInput={e => handleUpload(e)} multiple/>
        <button class="btn btn-success" onClick={() => handleAddImage()}>
          Thêm ảnh
        </button>
      </div>
    </Modal>
  );
};

export default UploadImage;
