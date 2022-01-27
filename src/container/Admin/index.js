import React from "react";
import * as Config from "../../constraints/Config"
import { Line } from 'react-chartjs-2';

//image

const AdminDashboard = (props) => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const columnData = {
    labels,
    datasets: [
      {
        label: 'Lượng Người Dùng',
        data: [1,2,3,45,65,6],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };


  return (
    <div className="admin_dashboard">
      <div
        class="alert alert-primary alert-dismissible fade show ml-2 mr-2"
        role="alert"
      >
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
          <span class="sr-only">Close</span>
        </button>
        <strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
            viewBox="0 0 16 16"
            role="img"
            aria-label="Warning:"
          >
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </strong>{" "}
        Chào Mừng Bạn Đã Đến Với Trang Quản Lí Blog Của Chúng Tôi, Tại đây Bạn
        có thể quản lí được tất cả moi bài viết người dùng, lượt truy cập, lượt
        theo dõi lượt like... nếu còn có gì thắc mắc xin vui lòng nhấn vào link
        bên dưới để liên hệ
      </div>

      <div class="row">
        <div class="col border-top-0 border-right-0 border-bottom-0 border-primary card mb-3 ml-3 w-75 bg-midnight-bloom widget-content">
          <div class="widget-content-left">
            <div class="widget-heading text-white">Tổng User</div>
            <div class="widget-subheading text-white">Thống Kê Mới Nhất</div>
          </div>
          <div class="widget-content-right">
            <div class="widget-numbers text-white">
              <span>1896</span>
            </div>
          </div>
        </div>

        <div class="col border-top-0 border-right-0 border-bottom-0 border-primary card mb-3 ml-3 w-75 bg-arielle-smile widget-content">
          <div class="widget-content-left">
            <div class="widget-heading text-white">Tổng User</div>
            <div class="widget-subheading text-white">Thống Kê Mới Nhất</div>
          </div>
          <div class="widget-content-right">
            <div class="widget-numbers text-white">
              <span>1896</span>
            </div>
          </div>
        </div>

        <div class="col border-top-0 border-right-0 border-bottom-0 border-primary card mb-3 ml-3 w-75 mr-3 bg-grow-early widget-content">
          <div class="widget-content-left">
            <div class="widget-heading text-white">Tổng User</div>
            <div class="widget-subheading text-white">Thống Kê Mới Nhất</div>
          </div>
          <div class="widget-content-right">
            <div class="widget-numbers text-white">
              <span>1896</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row h-main">
        <div className="col-8">

        <Line options={Config.ColumnDefaultOptions}  data={columnData} width={400} height={400}  />



          <div className="row">
            <div class="col border-top-0 border-right-0 border-bottom-0 card mb-3 ml-3 w-75 border-widget border-success widget-content">
              <div class="widget-content-left">
                <img
                  src={process.env.PUBLIC_URL + "/images/admin/phone.png"}
                  class="img-fluid w-25"
                  alt=""
                />
              </div>
              <div class="widget-content-right">
                <div class="widget-small-numbers">
                  <span>+84.949.254.478</span>
                </div>
              </div>
            </div>

            <div class="col border-top-0 border-right-0 border-bottom-0 card mb-3 ml-3 w-75 border-widget border-success widget-content">
              <div class="widget-content-left">
                <img
                  src={process.env.PUBLIC_URL + "/images/admin/email.png"}
                  class="img-fluid w-25"
                  alt=""
                />
              </div>
              <div class="widget-content-right">
                <div class="widget-small-numbers">
                  <span>ttdat17ck1@gmail.com</span>
                </div>
              </div>
            </div>

            <div class="col border-top-0 border-right-0 border-bottom-0 card mb-3 ml-3 w-75 border-widget border-success widget-content">
              <div class="widget-content-left">
                <img
                  src={process.env.PUBLIC_URL + "/images/admin/zalo.png"}
                  class="img-fluid w-25"
                  alt=""
                />
              </div>
              <div class="widget-content-right">
                <div class="widget-small-numbers ">
                  <span>+84.949.254.478</span>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="col-4">
          <ul className="m-0 p-0 ">
            <li className="card d-flex flex-d-row">
              <img
                src={process.env.PUBLIC_URL + "/images/admin/user.png"}
                class="img-fluid w-25"
                alt=""
              />
              <div className="d-inline-grid">
                <span>quản lí user</span>
                <soan>Giới Thiệu thông tin</soan>
              </div>
            </li>

            <li className="card d-flex flex-d-row">
              <img
                src={process.env.PUBLIC_URL + "/images/admin/writer.png"}
                class="img-fluid w-25"
                alt=""
              />
              <div className="d-inline-grid">
                <span>quản lí user</span>
                <soan>Giới Thiệu thông tin</soan>
              </div>
            </li>

            <li className="card d-flex flex-d-row">
              <img
                src={process.env.PUBLIC_URL + "/images/admin/gear.png"}
                class="img-fluid w-25"
                alt=""
              />
              <div className="d-inline-grid">
                <span>quản lí user</span>
                <soan>Giới Thiệu thông tin</soan>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
