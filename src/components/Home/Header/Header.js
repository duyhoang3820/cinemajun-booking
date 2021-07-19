/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { TOKEN, USERLOGIN } from "../../../util/constants/settingSystem";
import style from "./Header.module.css";
import * as Scroll from 'react-scroll';
import { Menu, Dropdown } from 'antd';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'
import logo from '../../../assets/img//logo/logo.svg'
import { history } from "../../../App";
import { notification } from 'antd';
import cx from 'classnames';


export default function Header() {
  const scroller = Scroll.scroller;
  const { taiKhoan, maLoaiNguoiDung } = useSelector(state => state.NguoiDungReducer)
  // console.log('maLoaiNguoiDung',maLoaiNguoiDung);
  // console.log('taiKhoan',taiKhoan);
  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Đăng xuất thành công!',
      description:
        'Cảm ơn bạn đã sử dụng CineJun Cinema',
    });
  };
  const menu1 = (
    <Menu>
      <Menu.Item>
        <NavLink to="/thong-tin-nguoi-dung" style={{ textDecoration: 'none' }}>Thông tin cá nhân</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/admin" style={{ textDecoration: 'none' }}>Quản lý admin</NavLink>
      </Menu.Item>
    </Menu>
  )
  const menu2 = (
    <Menu>
      <Menu.Item>
        <NavLink to="/thong-tin-nguoi-dung" style={{ textDecoration: 'none' }}>Thông tin cá nhân</NavLink>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className={style.sticky}>
      <nav className={cx(style.navbar, "navbar navbar-expand-sm")}>
        <a className={cx(style.navbar_brand, "navbar-brand")} onClick={() => {
          history.push('/')
          window.location.reload()
        }}>
          <img
            src={logo}
            alt="logo"
            width="95"
            height="70"
          />
        </a>
        <button style={{ border: "none", outline: "none" }} className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" style={{ fontSize: '35px', color: '#f5222d' }}></i></button>
        <div className="collapse navbar-collapse ml-5 mb-1" id="collapsibleNavId">
          <ul className="navbar-nav m-auto mt-2 mt-lg-3">
            <li className="nav-item ">
              <a onClick={() => {
                history.push('/')
                setTimeout(function () {
                  document.title = 'CineJun | Trang chủ | Lịch chiếu';
                  scroller.scrollTo('lichChieu', {
                    duration: 500,
                    smooth: true,
                  })
                }, 100);
              }} className={`${style.header__lichChieu} nav-link`}>Lịch chiếu</a>
            </li>
            <li className="nav-item">
              <a onClick={() => {
                history.push('/')
                setTimeout(function () {
                  document.title = 'CineJun | Trang chủ | Cụm rạp';
                  scroller.scrollTo('cumRap', {
                    duration: 500,
                    smooth: true,
                  })
                }, 100);
              }} className={cx(style.header__cumRap, "nav-link")}>Cụm rạp</a>
            </li>
          </ul>

          <div className={cx(style.header_login_logout, "nav-link mr-3")}>
            <div className="d-flex align-items-center mb-2" style={{ justifyContent: 'center' }}>
              {taiKhoan.trim() === '' ? <a onClick={() => {
                Swal.fire({
                  title: 'Bạn chưa đăng nhập!',
                  icon: 'warning',
                  confirmButtonColor: '#f5222d',
                  confirmButtonText: 'OK'
                })
              }}><img
                  src="https://tix.vn/app/assets/img/avatar.png"
                  width="40"
                  height="40"
                  style={{ borderRadius: "50%" }} alt="" /></a> :
                <NavLink to="/thong-tin-nguoi-dung">
                  <img
                    src="https://tix.vn/app/assets/img/avatar.png"
                    width="40"
                    height="40"
                    style={{ borderRadius: "50%" }} alt=""
                  />
                </NavLink>}

              <div className="ml-2">
                {taiKhoan.trim() !== '' ? maLoaiNguoiDung === 'QuanTri' && taiKhoan === 'duyhoang3820' ?
                  <Dropdown overlay={menu1} placement="bottomCenter" arrow>
                    <a className="ant-dropdown-link">{taiKhoan}</a>
                  </Dropdown> :
                  <Dropdown overlay={menu2} placement="bottomCenter" arrow>
                    <a className="ant-dropdown-link">{taiKhoan}</a>
                  </Dropdown> :
                  <NavLink to="/dangnhap" style={{ textDecoration: 'none' }} className="px-2">Đăng nhập</NavLink>}
              </div>
              <div>
                {localStorage.getItem(USERLOGIN) ? <a onClick={() => {
                  Swal.fire({
                    title: 'Bạn có chắc muốn đăng xuất?',
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#52c41a',
                    cancelButtonColor: '#f5222d',
                    cancelButtonText: "Hủy bỏ",
                    confirmButtonText: 'Đăng xuất'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      localStorage.removeItem(USERLOGIN);
                      localStorage.removeItem(TOKEN);
                      openNotificationWithIcon('success');
                      setTimeout(function () {
                        window.location.reload();
                        window.scrollTo(0, 0);
                      }, 2000);
                    }
                  })
                }} className="nav-link text-danger">Đăng xuất</a> : <NavLink to="/dangky" style={{ textDecoration: 'none', borderLeft: "1px solid #9b9b9b" }} className="px-2">Đăng ký</NavLink>}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
