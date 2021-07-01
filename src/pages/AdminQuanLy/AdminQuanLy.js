/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import { Dropdown, Input, Layout, Menu } from 'antd';
import { history } from "../../App"
import './assets/css/Admin.css'
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, } from '@ant-design/icons';
import QuanLyNguoiDung from './QuanLyNguoiDung/QuanLyNguoiDung'
import QuanLyPhim from './QuanLyPhim/QuanLyPhim';
import ThemNguoiDung from './QuanLyNguoiDung/ThemNguoiDung/ThemNguoiDung';
import SubMenu from 'antd/lib/menu/SubMenu';
import ThemPhim from './QuanLyPhim/ThemPhim/ThemPhim';
import { useFormik } from 'formik';
import { timKiemNguoiDung } from '../../redux/actions/AdminQuanLyAction';
import { useDispatch, useSelector } from 'react-redux';
import TimKiemNguoiDung from './QuanLyNguoiDung/TimKiemNguoiDung/TimKiemNguoiDung';
import { TOKEN, USERLOGIN } from '../../util/constants/settingSystem';
import logo from '../../assets/img/logo/logo.svg'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'
import './assets/css/Admin.css'
import BackToTop from "react-back-to-top-button";



const { Header, Content, Sider } = Layout;

export default function AdminQuanLyLichChieu() {
  const { taiKhoan, maLoaiNguoiDung } = useSelector(state => state.NguoiDungReducer)
  // console.log('maLoaiNguoiDung',maLoaiNguoiDung);
  // console.log('taiKhoan',taiKhoan);
  useEffect(() => {
    if (maLoaiNguoiDung === 'KhachHang' || taiKhoan.trim() === '') {
      Swal.fire({
        title: 'Error!',
        text: 'Chức năng chỉ dành cho quản trị viên!',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      setTimeout(function () {
        history.goBack();
      }, 2000);
    }
    window.scrollTo(0, 0);
  }, [])
  const menu1 = (
    <Menu>
      <Menu.Item>
        <NavLink to="/thong-tin-nguoi-dung" onClick={() => {
          history.push('/thong-tin-nguoi-dung')
        }}>Thông tin cá nhân</NavLink>
      </Menu.Item>
    </Menu>
  )

  const [state, setState] = useState({ collapsed: true })
  const dispatch = useDispatch();
  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };
  const formik = useFormik({
    initialValues: {
      tuKhoa: ''
    },
    onSubmit: values => {
      dispatch(timKiemNguoiDung(values.tuKhoa))
      // console.log('value', values.tuKhoa);
    },
  });

  return (
    <div>
      <Router>
        <Layout>
          <Layout style={{ height: '100%' }}>
            <Sider trigger={null} collapsible collapsed={state.collapsed}>
              <Header className="site-layout-background text-white text-center " style={{ padding: 0, fontSize: 24 }}>
                {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: toggle,
                })}
              </Header>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <SubMenu key="sub1" icon={<VideoCameraOutlined />} title="Quản lý phim" >
                  <Menu.Item key="1" >
                    <span>Danh sách Phim</span>
                    <Link to='/admin/quan-ly-phim' />
                  </Menu.Item>
                  <Menu.Item key="2" >
                    <span>Thêm phim</span>
                    <Link to='/admin/them-phim' />
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<UserOutlined />} title="Quản lý người dùng" >
                  <Menu.Item key="3">
                    <span>Danh sách người dùng</span>
                    <Link to='/admin/quan-ly-nguoi-dung' />
                  </Menu.Item>
                  <Menu.Item key="4" >
                    <span>Thêm người dùng</span>
                    <Link to='/admin/them-nguoi-dung' />
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout className="site-layout" style={{ backgroundColor: '#002329' }}>
              <div className="row w-100" style={{ background: '#fefefe' }}>
                <div className="col-2 col-sm-2 col-md-3 col-lg-5 back_page">
                  <a className="m-4" onClick={() => {
                    history.goBack()
                  }}><i className="fa fa-angle-left back"></i></a>
                </div>
                <div className="col-10 col-sm-10 col-md-9 col-lg-7 navbar__right">
                  <nav className="navbar navbar-expand-sm navbar__logo">
                    <NavLink className="navbar-brand logo_cinema" to="/" onClick={() => {
                      history.push('/')
                      // window.location.reload()
                    }}>
                      <img
                        src={logo}
                        alt="logo"
                        width="100"
                        height="70"
                      />
                    </NavLink>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" style={{ fontSize: '35px', color: '#f5222d' }}></i></button>
                    <div className="collapse navbar-collapse ml-5" id="collapsibleNavId" style={{ justifyContent: 'flex-end' }}>
                      <div className="signIn">
                        <div className="d-flex align-items-center">
                          <NavLink to="/thong-tin-nguoi-dung" onClick={() => {
                            history.push('/thong-tin-nguoi-dung')
                          }}>
                            <img
                              src="https://tix.vn/app/assets/img/avatar.png"
                              width="40"
                              height="40"
                              style={{ borderRadius: "50%" }} alt=""
                            />
                          </NavLink>
                          <div className="ml-2">
                            {taiKhoan.trim() !== '' ?
                              <Dropdown overlay={menu1} placement="bottomCenter" arrow onClick={() => {
                                history.push('/thong-tin-nguoi-dung')
                              }}>
                                <a className="ant-dropdown-link">{taiKhoan}</a>
                              </Dropdown> :
                              <NavLink to="/dangnhap" className="px-2" onClick={() => {
                                history.push('/dangnhap')
                              }}>Đăng nhập</NavLink>}
                          </div>
                          <div>
                            {localStorage.getItem(USERLOGIN) ? <a onClick={() => {
                              localStorage.removeItem(USERLOGIN);
                              localStorage.removeItem(TOKEN);
                              history.push('/')
                              window.location.reload()
                            }} className="nav-link text-danger">Đăng xuất</a> : ''}
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="mt-5 ml-5">
                <form onSubmit={formik.handleSubmit} className="mb-3">
                  <Input style={{ width: "50%" }} id="tuKhoa" name="tuKhoa" size="large" placeholder="Nhập tài khoản hoặc họ tên người dùng" prefix={<UserOutlined />} onChange={formik.handleChange} />
                  <button type="submit" className="btn btn-primary ml-2 mb-1" data-toggle="modal" data-target="#timKiem">Tìm kiếm</button>
                </form>
                <div className="modal" id="timKiem">
                  <div className="modal-dialog">
                    <div className="modal-content" >
                      <div className="modal-header">
                        <h4 className="modal-title">Danh sách tìm kiếm</h4>
                        <button type="button" className="close" data-dismiss="modal">×</button>
                      </div>
                      <div className="modal-body">
                        <TimKiemNguoiDung tuKhoa={formik.values.tuKhoa} />
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Content className="site-layout-background" style={{ marginRight: '50px', marginLeft: '20px', padding: 24, minHeight: 750 }}>
                <Switch>
                  <Route path='/admin/quan-ly-phim' exact component={QuanLyPhim} />
                  <Route path='/admin/quan-ly-nguoi-dung' exact component={QuanLyNguoiDung} />
                  <Route path='/admin' exact component={QuanLyPhim} />
                  <Route path='/admin/them-nguoi-dung' exact component={ThemNguoiDung} />
                  <Route path='/admin/them-phim' exact component={ThemPhim} />
                </Switch>
                <div className="backToTopBtn">
                  <BackToTop
                    showOnScrollUp
                    showAt={100}
                    speed={500}
                    easing="easeInOutQuint"
                  >
                    <i className="fa fa-angle-double-up backToTop" style={{ color: '#fb4226', fontSize: '40px' }}></i>
                  </BackToTop>
                </div>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    </div >
  )
}
