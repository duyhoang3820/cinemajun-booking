/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import './assets/css/styleDangNhap.css'
import './assets/css/font-awesome.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { dangKyAction, dangNhapAction } from '../../redux/actions/NguoidungAction';

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
            taiKhoan: Yup.string().required("Required!"),
            matKhau: Yup.string().required("Required!"),
        }),
        onSubmit: values => {
            console.log('values', values);
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
            taiKhoan: Yup.string().min(2, "Mininum 2 characters")
                .max(15, "Maximum 15 characters")
                .required("Required!"),
            matKhau: Yup.string().min(6, "Minimum 6 characters")
                .max(15, "Maximum 15 characters")
                .required("Required!"),
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            hoTen: Yup.string().min(2, "Mininum 2 characters")
                .max(15, "Maximum 15 characters")
                .required("Required!"),
            soDt: Yup.string().min(9, "Mininum 9 characters")
                .max(11, "Maximum 11 characters")
                .required("Required!"),
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
                <h1>Welcome to CineJun Cinema</h1>
            </div>
            <div className={`${state.isActive} container_login`}>
                <div className="card_login"></div>
                <div className="card_login">
                    <h1 className="title_login">Đăng nhập</h1>
                    <form onSubmit={formik_dangNhap.handleSubmit}>
                        <div className="input-container">
                            <input name="taiKhoan" type="text" id="taiKhoan" autoComplete="off" required="required" onChange={formik_dangNhap.handleChange} />
                            {formik_dangNhap.errors.taiKhoan && formik_dangNhap.touched.taiKhoan && (
                                <p className="text-danger">{formik_dangNhap.errors.taiKhoan} </p>
                            )}
                            <label htmlFor="taiKhoan">Tài khoản</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
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
                                <p className="text-danger">{formik_dangKy.errors.taiKhoan} </p>
                            )}
                            <label htmlFor="taiKhoan">Tài khoản</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input type="password" name="matKhau" autoComplete="off" required onChange={formik_dangKy.handleChange} />
                            {formik_dangKy.errors.matKhau && formik_dangKy.touched.matKhau && (
                                <p className="text-danger">{formik_dangKy.errors.matKhau} </p>
                            )}
                            <label htmlFor="matKhau">Mật khẩu</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input type="text" name="email" autoComplete="off" required onChange={formik_dangKy.handleChange} />
                            {formik_dangKy.errors.email && formik_dangKy.touched.email && (
                                <p className="text-danger">{formik_dangKy.errors.email} </p>
                            )}
                            <label htmlFor="email">Email</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input type="text" name="hoTen" autoComplete="off" required onChange={formik_dangKy.handleChange} />
                            {formik_dangKy.errors.hoTen && formik_dangKy.touched.hoTen && (
                                <p className="text-danger">{formik_dangKy.errors.hoTen} </p>
                            )}
                            <label htmlFor="hoTen">Họ và tên</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input type="text" name="soDt" autoComplete="off" required onChange={formik_dangKy.handleChange} />
                            {formik_dangKy.errors.soDt && formik_dangKy.touched.soDt && (
                                <p className="text-danger">{formik_dangKy.errors.soDt} </p>
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
        </div>
    )
}
