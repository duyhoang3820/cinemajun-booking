/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { TOKEN, USERLOGIN } from "../../../util/constants/settingSystem";
import "./Header.css";
import { Link } from 'react-scroll'
import { Menu, Dropdown } from 'antd';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'
import logo from '../../../assets/img//logo/logo.svg'
import { history } from "../../../App";


export default function Header() {
  const { taiKhoan, maLoaiNguoiDung } = useSelector(state => state.NguoiDungReducer)
  // console.log('maLoaiNguoiDung',maLoaiNguoiDung);
  // console.log('taiKhoan',taiKhoan);
  const menu1 = (
    <Menu>
      <Menu.Item>
        <NavLink to="/thong-tin-nguoi-dung">Thông tin cá nhân</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/admin" >Quản lý admin</NavLink>
      </Menu.Item>
    </Menu>
  )
  const menu2 = (
    <Menu>
      <Menu.Item>
        <NavLink to="/thong-tin-nguoi-dung">Thông tin cá nhân</NavLink>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="sticky">
      <nav className="navbar navbar-expand-sm">
        <a className="navbar-brand " onClick={() => {
          history.push('/')
          window.location.reload()
        }}>
          <img
            src={logo}
            alt="logo"
            width="90"
            height="65"
          />
        </a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" style={{ fontSize: '35px', color: '#f5222d' }}></i></button>
        <div className="collapse navbar-collapse ml-5" id="collapsibleNavId">
          <ul className="navbar-nav m-auto mt-2 mt-lg-0 ">
            <li className="nav-item ">
              <Link onClick={() => {
                history.push('/')
              }} className="nav-link header__lichChieu font-weight-bold" to="lichChieu" smooth={true} duration={500}>Lịch chiếu</Link>
            </li>
            <li className="nav-item ">
              <Link onClick={() => {
                history.push('/')
              }} className="nav-link header__cumRap font-weight-bold" to="cumRap" smooth={true} duration={500}>Cụm rạp</Link>
            </li>
          </ul>

          <div className="signIn">
            <div className="d-flex align-items-center mb-2" style={{ justifyContent: 'center' }}>
              {taiKhoan.trim() === '' ? <a onClick={() => {
                Swal.fire({
                  title: 'Sorry!',
                  text: 'Bạn chưa đăng nhập!',
                  icon: 'warning',
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
                {taiKhoan.trim() !== '' ? maLoaiNguoiDung === 'QuanTri' ?
                  <Dropdown overlay={menu1} placement="bottomCenter" arrow>
                    <a className="ant-dropdown-link">{taiKhoan}</a>
                  </Dropdown> :
                  <Dropdown overlay={menu2} placement="bottomCenter" arrow>
                    <a className="ant-dropdown-link">{taiKhoan}</a>
                  </Dropdown> :
                  <NavLink to="/dangnhap" className="px-2">Đăng nhập</NavLink>}
              </div>
              <div>
                {localStorage.getItem(USERLOGIN) ? <a onClick={() => {
                  localStorage.removeItem(USERLOGIN);
                  localStorage.removeItem(TOKEN);
                  Swal.fire({
                    title: 'Success!',
                    text: 'Đăng xuất thành công!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                  // history.push('/')
                  setTimeout(function () {
                    window.location.reload();
                    window.scrollTo(0, 0);
                  }, 2000);
                  // history.goBack()

                }} className="nav-link text-danger">Đăng xuất</a> : <NavLink to="/dangky" style={{ borderLeft: "1px solid #e9e9e9" }} className="px-2">Đăng kí</NavLink>}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
