/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { Tooltip } from 'antd';
import { suaNguoiDung } from '../../../../redux/actions/AdminQuanLyAction'

export default function SuaNguoiDung(props) {
    const { editNguoiDung } = useSelector(state => state.AdminQuanLyReducer)
    const dispatch = useDispatch()
    const [dataEdit, setDataEdit] = useState()
    // console.log('dataEdit', dataEdit);
    useEffect(() => {
        setDataEdit({
            ...editNguoiDung,
            dataEdit: editNguoiDung
        })
    }, [editNguoiDung])


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: editNguoiDung?.taiKhoan,
            matKhau: editNguoiDung?.matKhau,
            hoTen: editNguoiDung?.hoTen,
            email: editNguoiDung?.email,
            soDt: editNguoiDung?.sdt,
            maLoaiNguoiDung: '',
            maNhom: 'GP01'
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().min(3, "Mininum 3 characters")
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
            maLoaiNguoiDung: Yup.string()
                .required("Required!"),
        }),
        onSubmit: values => {
            dispatch(
                suaNguoiDung(values)
            )
        },
    });

    useEffect(() => {
        setDataEdit({
            dataEdit: formik.values
        })
    }, [formik.values])

    const colors = [
        'red',
    ];

    return (
        < form onSubmit={formik.handleSubmit} >
            <div className="row">
                <div className="col-12 col-sm-12 col-lg-6 w-100">
                    <div className="form-group">

                        <label htmlFor="taiKhoan" className="text-primary mb-2">Tài khoản</label>
                        <Tooltip title="Tài khoản không thể thay đổi!" color={colors} key={colors}>
                            <input className="form-control" readOnly={true} type="text" name="taiKhoan" id="taiKhoan" value={formik.values.taiKhoan = editNguoiDung?.taiKhoan} />
                        </Tooltip>
                    </div>
                    <div className="form-group">
                        <label htmlFor="matKhau" className="text-primary mb-2">Mật khẩu</label>
                        <input className="form-control" type="text" name="matKhau" id="matKhau" value={dataEdit?.matKhau} onChange={formik.handleChange} />
                        {formik.errors.matKhau && formik.touched.matKhau && (
                            <p className="text-danger">{formik.errors.matKhau} </p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="hoTen" className="text-primary mb-2">Họ tên</label>
                        <input className="form-control" type="text" name="hoTen" id="hoTen" value={dataEdit?.hoTen} onChange={formik.handleChange} />
                        {formik.errors.hoTen && formik.touched.hoTen && (
                            <p className="text-danger">{formik.errors.hoTen} </p>
                        )}
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-6 w-100">
                    <div className="form-group">
                        <label htmlFor="maLoaiNguoiDung" className="text-primary mb-2">Loại người dùng</label>
                        <select className="w-100" name="maLoaiNguoiDung" id="maLoaiNguoiDung" value={formik.values['maLoaiNguoiDung']} className="custom-select custom-select-sm-lg" onChange={formik.handleChange}>
                            <option defaultValue>Chọn loại người dùng</option>
                            <option value={'KhachHang'}>Khách hàng</option>
                            <option value={'QuanTri'}>Quản trị</option>
                        </select>
                        {formik.errors.maLoaiNguoiDung && formik.touched.maLoaiNguoiDung && (
                            <p className="text-danger">{formik.errors.maLoaiNguoiDung} </p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="text-primary mb-2">Email</label>
                        <input className="form-control" type="email" name="email" id="Email" value={dataEdit?.email} onChange={formik.handleChange} />
                        {formik.errors.email && formik.touched.email && (
                            <p className="text-danger">{formik.errors.email} </p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="soDt" className="text-primary mb-2">Số điện thoại</label>
                        <input className="form-control" type="text" name="soDt" id="soDt" value={dataEdit?.sdt} onChange={formik.handleChange} />
                        {formik.errors.soDt && formik.touched.soDt && (
                            <p className="text-danger">{formik.errors.soDt} </p>
                        )}
                    </div>
                </div>
            </div>
            <button style={{ float: 'right' }} type="submit" className="btn btn-success">Cập nhật</button>
        </ form>
    )
}
