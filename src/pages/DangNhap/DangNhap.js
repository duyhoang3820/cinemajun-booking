/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import './assets/css/styleDangNhap.css'
import './assets/css/font-awesome.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { dangKyAction, dangNhapAction } from '../../redux/actions/NguoidungAction';
import Footer from '../../components/Home/Footer/Footer';
import { history } from '../../App';
import logo from '../../assets/img/logo/logo.svg'
import logo2 from '../../assets/img/logo/logo2.svg'

export default function DangNhap() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const [state, setstate] = useState({
        isActive: ''
    })
    const dispatch = useDispatch();
    const formik_dangNhap = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required("* Tài khoản không được để trống!"),
            matKhau: Yup.string().required("* Mật khẩu không được để trống!"),
        }),
        onSubmit: values => {
            // console.log('values', values);
            const action = dangNhapAction(values);
            dispatch(action);
            // console.log('value',values);
            // console.log('action',action);
        },
    });
    const formik_dangKy = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDt: '',
            maLoaiNguoiDung: 'KhachHang',
            maNhom: 'GP01'
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().min(3, "* Tài khoản tối thiểu 3 ký tự!")
                .max(18, "* Tài khoản tối đa 18 ký tự!")
                .required("* Tài khoản không được để trống!"),
            matKhau: Yup.string().min(6, "* Mật khẩu tối thiểu 6 ký tự!")
                .max(18, "* Mật khẩu tối đa 18 ký tự!")
                .required("* Mật khẩu không được để trống!"),
            email: Yup.string()
                .email("* Email không đúng định dạng!")
                .required("* Email không được để trống!"),
            hoTen: Yup.string().min(3, "* Họ tên tối thiểu 3 ký tự!")
                .max(30, "* Họ tên tối đa 30 ký tự!")
                .required("* Họ tên không được để trống!"),
            soDt: Yup.string().min(10, "* SĐT tối thiểu 10 ký tự!")
                .max(10, "* SĐT tối đa 10 ký tự!")
                .required("* SĐT không được để trống!"),
        }),
        onSubmit: values => {
            dispatch(dangKyAction(values))
            // console.log('value', values);
        }
    });
    // if (localStorage.getItem(USERLOGIN)) {
    //     alert('Bạn đã đăng nhập thành công!')
    //     return <Redirect to="/" />
    // }


    return (
        <div className="login">
            <div className="pen-title">
                <i className="fa fa-home" onClick={() => {
                    history.push('/')
                }}></i>
            </div>
            <div className={`${state.isActive} container_login`}>
                <div className="card_login"></div>
                <div className="card_login">
                    <div className="d-flex" style={{ justifyContent: 'center' }}>
                        <img style={{ textAlign: 'center' }} src={logo} width={70} height={50}></img>
                    </div>
                    <h1 className="title_login">Đăng nhập</h1>
                    <form onSubmit={formik_dangNhap.handleSubmit}>
                        <div className="input-container child1">
                            <input name="taiKhoan" type="text" id="taiKhoan" autoComplete="off" required="required" onChange={formik_dangNhap.handleChange} />
                            {formik_dangNhap.errors.taiKhoan && formik_dangNhap.touched.taiKhoan && (
                                <p className="text-danger">{formik_dangNhap.errors.taiKhoan} </p>
                            )}
                            <label htmlFor="taiKhoan">Tài khoản</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container child1">
                            <input type="password" name="matKhau" id="matKhau" autoComplete="off" required="required" onChange={formik_dangNhap.handleChange} />
                            {formik_dangNhap.errors.matKhau && formik_dangNhap.touched.matKhau && (
                                <p className="text-danger">{formik_dangNhap.errors.matKhau} </p>
                            )}
                            <label htmlFor="matKhau">Mật khẩu</label>
                            <div className="bar"></div>
                        </div>
                        <div className="button-container">
                            <button type="submit"><span>Đăng nhập</span></button>
                        </div>
                        <div className="card_footer"><p>Forgot your password?</p></div>
                    </form>
                </div>
                <div className="card_login alt">
                    <div className="toggle" onClick={() => {
                        setstate({
                            isActive: 'active'
                        })
                    }}></div>
                    <div className="img_login d-flex" style={{ justifyContent: 'center' }}>
                        <img style={{ textAlign: 'center' }} src={logo2} width={70} height={50}></img>
                    </div>
                    <h1 className="title_login">Đăng ký
                        <div className="close" onClick={() => {
                            setstate({
                                isActive: ''
                            })
                        }}></div>
                    </h1>
                    <form onSubmit={formik_dangKy.handleSubmit}>
                        <div className="input-container">
                            <input type="text" name="taiKhoan" autoComplete="off" required onChange={formik_dangKy.handleChange} />
                            {formik_dangKy.errors.taiKhoan && formik_dangKy.touched.taiKhoan && (
                                <p className="text-white">{formik_dangKy.errors.taiKhoan} </p>
                            )}
                            <label htmlFor="taiKhoan">Tài khoản</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input type="password" name="matKhau" autoComplete="off" required onChange={formik_dangKy.handleChange} />
                            {formik_dangKy.errors.matKhau && formik_dangKy.touched.matKhau && (
                                <p className="text-white">{formik_dangKy.errors.matKhau} </p>
                            )}
                            <label htmlFor="matKhau">Mật khẩu</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input type="text" name="email" autoComplete="off" required onChange={formik_dangKy.handleChange} />
                            {formik_dangKy.errors.email && formik_dangKy.touched.email && (
                                <p className="text-white">{formik_dangKy.errors.email} </p>
                            )}
                            <label htmlFor="email">Email</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input type="text" name="hoTen" autoComplete="off" required onChange={formik_dangKy.handleChange} />
                            {formik_dangKy.errors.hoTen && formik_dangKy.touched.hoTen && (
                                <p className="text-white">{formik_dangKy.errors.hoTen} </p>
                            )}
                            <label htmlFor="hoTen">Họ và tên</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input type="number" name="soDt" autoComplete="off" required onChange={formik_dangKy.handleChange} />
                            {formik_dangKy.errors.soDt && formik_dangKy.touched.soDt && (
                                <p className="text-white">{formik_dangKy.errors.soDt} </p>
                            )}
                            <label htmlFor="soDt">Số điện thoại</label>
                            <div className="bar"></div>
                        </div>
                        <div className="button-container">
                            <button type="submit"><span>Đăng ký</span></button>

                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-5">
                <Footer className="mt-5" />
            </div>
        </div>
    )
}
