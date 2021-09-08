import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center'
  },
};
Modal.setAppElement("#root");
const Notification = (props) => {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onAfterOpen={props.afterOpenModal}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Notification Modal">
          <button type="button" class="close" aria-label="Close" onClick={props.closeModal}>
            <span aria-hidden="true">&times;</span>
          </button>

          <div class="container">
          <img src={process.env.PUBLIC_URL + '/images/success.gif'} alt="successIMG" class="img-notif" />
          <h3>Thao tác thành công</h3>
          <p>Vui lòng kiểm tra email để xác nhận tài khoản. Xin cảm ơn</p>
          </div>
    </Modal>
  );
};

export default Notification;
