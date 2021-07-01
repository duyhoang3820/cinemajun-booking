/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useDispatch } from 'react-redux';
import './assets/css/font-awesome.css';
import './assets/css/styleDangNhap.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Redirect } from 'react-router';
import { dangNhapAction } from '../../redux/actions/NguoidungAction';
import { USERLOGIN } from '../../util/constants/settingSystem';
import { history } from '../../App';

export default function DangNhap() {

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required("Required!"),
            matKhau: Yup.string().required("Required!"),
        }),
        onSubmit: values => {
            // console.log('values', values);
            const action = dangNhapAction(values);
            dispatch(action);
            // console.log('value',values);
            // console.log('action',action);
        },
    });
    if (localStorage.getItem(USERLOGIN)) {
        alert('Bạn đã đăng nhập thành công!')
        return <Redirect to="/" />
    }

    return (
        <div>
            <div className="header-w3l">
                <h1 className="text-white mt-3 display-4">Đăng nhập</h1>
            </div>
            <div className="row w-100">
                <div className="col-12 col-sm-12 col-xl-6">
                    <div className="mt-3">
                        <h2 className="agileits1">Welcome - to - CineJun</h2>
                    </div>
                    <div className="btn_directory">
                        <button onClick={() => { history.push('/') }} className="btn_Home mx-5" >Trang chủ</button>
                        <button onClick={() => { history.push('/dangky') }} className="btn_SingUp mx-5">Đăng ký</button>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-xl-6">
                    <div className="main-w3layouts-agileinfo">
                        <div className="wthree-form">
                            <form method="post" onSubmit={formik.handleSubmit}>
                                <div className="form-sub-w3">
                                    <input type="text" name="taiKhoan" placeholder="Tài khoản" required onChange={formik.handleChange} />
                                    {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                                        <p className="text-danger">{formik.errors.taiKhoan} </p>
                                    )}
                                    <div className="icon-w3">
                                        <i className="fa fa-user" aria-hidden="true" />
                                    </div>
                                </div>
                                <div className="form-sub-w3">
                                    <input type="password" name="matKhau" placeholder="Mật khẩu" required onChange={formik.handleChange} />
                                    {formik.errors.matKhau && formik.touched.matKhau && (
                                        <p className="text-danger">{formik.errors.matKhau} </p>
                                    )}
                                    <div className="icon-w3">
                                        <i className="fa fa-unlock-alt" aria-hidden="true" />
                                    </div>
                                </div>
                                <label className="anim">
                                    <input type="checkbox" className="checkbox" />
                                    <span>Remember Me</span>
                                    <a href="#">Quên mật khẩu?</a>
                                </label>
                                <div className="clear" />
                                <div className="submit-agileits">
                                    <input type="submit" value="Đăng nhập" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
