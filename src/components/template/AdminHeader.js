import { Link } from "react-router-dom";
import "../../container/Admin/Admin.css";
import $ from "jquery";

const AdminHeader = () => {
  $("#openNav").on("click", function () {
    $('#sideNav').width(220)
    $("#mainAdmin").hide();
    $(this).hide();
  });

  $("#closeNav").on("click", function () {
    $('#sideNav').width(0)
    $("#openNav").show();
    $("#mainAdmin").show();
  });

  return (
    <>
      <button class="openbtn" id="openNav">
        &#9776;
      </button>
      <ul class="sidenav list-group" id="sideNav">
        <span id="closeNav" class="closebtn">
          x
        </span>
        <li style={{ borderBottom: "1px solid black" }}>
          <div class="row">
            <div class="col-3">
              <img
                src="https://dotobjyajpegd.cloudfront.net/photo/5d3a66f962710e25dc99ffa3_l"
                height={50}
                width={50}
                class="rounded-circle"
                alt="avatar"
              />
            </div>
            <div class="col-9">
              <span>Patron Pen</span>
              <p style={{ fontWeight: 600 }}>admin</p>
            </div>
          </div>
        </li>

        <li class="list-group-item   btn-link btn-menu">
          <Link to={"/admin/"}>Trang Chính</Link>
        </li>
        <li class="list-group-item  btn-link btn-menu">
          <Link to={"/admin/message-and-notification"}>Tin Thông Báo</Link>
        </li>
        <li class="list-group-item  btn-link btn-menu">
          <Link to={"/admin/contact"}>Liên Hệ</Link>
        </li>
        <li class="list-group-item  btn-link btn-menu">
          <Link to={"/admin/system"}>Tình Trạng Hệ thống</Link>
        </li>
        <li class="list-group-item  btn-link btn-menu">
          <Link to={"/admin/config"}>Cấu Hình Hệ thống</Link>
        </li>
        <li class="sign-up-btn" style={{ fontWeight: 600 }}>
          <i class="fa fa-sign-out"></i> Đăng xuất
        </li>
        <li id="accordion">
          <div class="card">
            <li
              class="list-group-item  btn-link btn-menu"
              data-toggle="collapse"
              data-target="#function"
              aria-controls="function"
            >
              Chức Năng <i class="fa fa-sort-down"></i>
            </li>
            <div
              id="function"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <ul class="list-group">
                <li class="list-group-item  text-side-menu">
                  <Link to={"/admin/user"}>
                    <i class="fa fa-chevron-right"></i>Quản lí user
                  </Link>
                </li>
                <li class="list-group-item text-side-menu">
                  <Link to={"/admin/blogs"}>
                    <i class="fa fa-chevron-right"></i>Quản lí blog
                  </Link>
                </li>
                <li class="list-group-item  text-side-menu">
                  <Link to={"/admin/tags"}>
                    <i class="fa fa-chevron-right"></i>Quản Lí Tags
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};
export default AdminHeader;
