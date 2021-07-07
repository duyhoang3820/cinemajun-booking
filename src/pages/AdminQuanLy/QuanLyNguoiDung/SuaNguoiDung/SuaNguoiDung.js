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
            maLoaiNguoiDung: Yup.string()
                .required("* Vui lòng chọn loại người dùng!"),
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

                        <label htmlFor="taiKhoan" className="text-primary" style={{ fontSize: '14px' }}>Tài khoản</label>
                        <Tooltip title="Tài khoản không thể thay đổi!" color={colors} key={colors}>
                            <input className="form-control" readOnly={true} type="text" name="taiKhoan" id="taiKhoan" value={formik.values.taiKhoan = editNguoiDung?.taiKhoan} />
                        </Tooltip>
                    </div>
                    <div className="form-group">
                        <label htmlFor="matKhau" className="text-primary" style={{ fontSize: '14px' }}>Mật khẩu</label>
                        <input className="form-control" type="text" name="matKhau" id="matKhau" value={dataEdit?.matKhau} onChange={formik.handleChange} />
                        {formik.errors.matKhau && formik.touched.matKhau && (
                            <p className="text-danger" style={{ fontSize: '14px' }}>{formik.errors.matKhau} </p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="hoTen" className="text-primary" style={{ fontSize: '14px' }}>Họ tên</label>
                        <input className="form-control" type="text" name="hoTen" id="hoTen" value={dataEdit?.hoTen} onChange={formik.handleChange} />
                        {formik.errors.hoTen && formik.touched.hoTen && (
                            <p className="text-danger" style={{ fontSize: '14px' }}>{formik.errors.hoTen} </p>
                        )}
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-6 w-100">
                    <div className="form-group">
                        <label htmlFor="maLoaiNguoiDung" className="text-primary" style={{ fontSize: '14px' }}>Loại người dùng</label>
                        <select className="w-100" name="maLoaiNguoiDung" id="maLoaiNguoiDung" value={formik.values['maLoaiNguoiDung']} className="custom-select custom-select-sm-lg" onChange={formik.handleChange}>
                            <option defaultValue>Chọn loại người dùng</option>
                            <option value={'KhachHang'}>Khách hàng</option>
                            <option value={'QuanTri'}>Quản trị</option>
                        </select>
                        {formik.errors.maLoaiNguoiDung && formik.touched.maLoaiNguoiDung && (
                            <p className="text-danger" style={{ fontSize: '14px' }}>{formik.errors.maLoaiNguoiDung} </p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="text-primary" style={{ fontSize: '14px' }}>Email</label>
                        <input className="form-control" type="email" name="email" id="Email" value={dataEdit?.email} onChange={formik.handleChange} />
                        {formik.errors.email && formik.touched.email && (
                            <p className="text-danger" style={{ fontSize: '14px' }}>{formik.errors.email} </p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="soDt" className="text-primary" style={{ fontSize: '14px' }}>Số điện thoại</label>
                        <input className="form-control" type="text" name="soDt" id="soDt" value={dataEdit?.sdt} onChange={formik.handleChange} />
                        {formik.errors.soDt && formik.touched.soDt && (
                            <p className="text-danger" style={{ fontSize: '14px' }}>{formik.errors.soDt} </p>
                        )}
                    </div>
                </div>
            </div>
            <button style={{ float: 'right' }} type="submit" className="btn btn-success">Cập nhật</button>
        </ form>
    )
}
