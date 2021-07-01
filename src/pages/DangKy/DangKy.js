import { useFormik } from 'formik';
import * as Yup from 'yup'
import React from 'react'
import { useDispatch } from 'react-redux';
import './assets/css/font-awesome.css'
import './assets/css/styleDangKy.css'
import { dangKyAction } from '../../redux/actions/NguoidungAction';
import { history } from '../../App';


export default function DangKy() {

    const dispatch = useDispatch();
    const formik = useFormik({
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
    // console.log(formik.values);

    return (
        <div>
            <div className="header-w3l">
                <h1 className="text-white mt-3 display-4">Đăng ký</h1>
            </div>
            <div className="row w-100">
                <div className="col-12 col-sm-12 col-xl-6 mt-2">
                    <div>
                        <h2 className="agileits1 mt-2">Welcome - to - CineJun</h2>
                    </div>
                    <div className="btn_directory">
                        <button onClick={() => { history.push('/') }} className="btn_Home mx-5" >Trang chủ</button>
                        <button onClick={() => { history.push('/dangnhap') }} className="btn_SingUp mx-5">Đăng nhập</button>
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
                                <div className="form-sub-w3">
                                    <input type="text" name="email" placeholder="Email" required onChange={formik.handleChange} />
                                    {formik.errors.email && formik.touched.email && (
                                        <p className="text-danger">{formik.errors.email} </p>
                                    )}
                                    <div className="icon-w3">
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                    </div>
                                </div>
                                <div className="form-sub-w3">
                                    <input type="text" name="hoTen" placeholder="Họ và tên" required onChange={formik.handleChange} />
                                    {formik.errors.hoTen && formik.touched.hoTen && (
                                        <p className="text-danger">{formik.errors.hoTen} </p>
                                    )}
                                    <div className="icon-w3">
                                        <i className="fa fa-tag" aria-hidden="true" />
                                    </div>
                                </div>
                                <div className="form-sub-w3">
                                    <input type="text" name="soDt" placeholder="Số điện thoại" required onChange={formik.handleChange} />
                                    {formik.errors.soDt && formik.touched.soDt && (
                                        <p className="text-danger">{formik.errors.soDt} </p>
                                    )}
                                    <div className="icon-w3">
                                        <i className="fa fa-phone" aria-hidden="true" />
                                    </div>
                                </div>
                                <label className="anim">
                                    <input type="checkbox" className="checkbox" />
                                    <span>I agree to the Privacy Policy</span>
                                </label>
                                <div className="clear" />
                                <div className="submit-agileits">
                                    <input type="submit" value="Đăng ký" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
