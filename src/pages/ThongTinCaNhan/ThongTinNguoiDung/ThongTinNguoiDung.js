/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { capNhatNguoiDung, thongTinNguoiDungAction } from '../../../redux/actions/NguoidungAction';
import { Tabs } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { Tooltip } from 'antd';
import './ThongTinNguoiDung.css'
import LichSuDatVe from '../LichSuDatVe/LichSuDatVe';
import { history } from '../../../App';

export default function ThongTinNguoiDung() {
    const { TabPane } = Tabs;
    const { taiKhoan, maLoaiNguoiDung, thongTinTaiKhoan } = useSelector(state => state.NguoiDungReducer)
    const [dataUser, setDataUser] = useState()
    const [readOnly, setReadOnly] = useState(true)
    // console.log('thongTinTaiKhoan', thongTinTaiKhoan);
    // console.log('dataUser', dataUser);
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(thongTinNguoiDungAction(taiKhoan))
        setDataUser({
            ...thongTinTaiKhoan,
            dataUser: thongTinTaiKhoan
        })
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: thongTinTaiKhoan.taiKhoan,
            matKhau: thongTinTaiKhoan.matKhau,
            hoTen: thongTinTaiKhoan.hoTen,
            email: thongTinTaiKhoan.email,
            soDT: thongTinTaiKhoan.soDT,
            maLoaiNguoiDung: maLoaiNguoiDung,
            maNhom: 'GP01'
        },
        validationSchema: Yup.object().shape({
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
            // console.log('values', values);
            dispatch(capNhatNguoiDung(values))
        },
    });
    useEffect(() => {
        setDataUser({
            dataUser: formik.values
        })
    }, [formik.values])
    const colors = [
        'red',
    ];

    return (
        <div className="py-3" style={{ backgroundColor: '#002329' }}>
            <a className="ml-4" onClick={() => {
                history.goBack()
            }}><i className="fa fa-angle-left back"></i></a>
            <Tabs className="tablist" defaultActiveKey="1" centered={true}>
                <TabPane tab={<div className="tablist__item"><span><i className="fa fa-user"></i> Thông tin cá nhân</span></div>} key="1">
                    <div className="py-4">
                        < form onSubmit={formik.handleSubmit} style={{ width: '80%' }}>
                            <div className="row info ">
                                <div className="" style={{ width: '100%' }}>
                                    <div className="form-group d-flex group">
                                        <label htmlFor="taiKhoan" className="text-primary mb-2 lable"><i className="fa fa-user mr-2"></i> Tài khoản</label>
                                        {readOnly === true ? <input className="form-control user w-50" readOnly={true} type="text" name="taiKhoan" id="taiKhoan" value={dataUser?.dataUser.taiKhoan} /> : <Tooltip title="Tài khoản không thể thay đổi!" color={colors} key={colors}>
                                            <input className="form-control user w-50" readOnly={true} type="text" name="taiKhoan" id="taiKhoan" value={dataUser?.dataUser.taiKhoan} />
                                        </Tooltip>}
                                    </div>
                                    <div className="form-group d-flex group">
                                        <label htmlFor="matKhau" className="text-primary mb-2 lable"><i className="fa fa-lock mr-2"></i> Mật khẩu</label>
                                        <input readOnly={readOnly} className="form-control user w-50" type="text" name="matKhau" id="matKhau" value={dataUser?.dataUser.matKhau} onChange={formik.handleChange} />
                                        {formik.errors.matKhau && formik.touched.matKhau && (
                                            <p className="text-danger">{formik.errors.matKhau} </p>
                                        )}
                                    </div>
                                    <div className="form-group d-flex group">
                                        <label htmlFor="hoTen" className="text-primary mb-2 lable"><i className="fa fa-tag mr-2"></i> Họ tên</label>
                                        <input readOnly={readOnly} className="form-control user w-50" type="text" name="hoTen" id="hoTen" value={dataUser?.dataUser.hoTen} onChange={formik.handleChange} />
                                        {formik.errors.hoTen && formik.touched.hoTen && (
                                            <p className="text-danger">{formik.errors.hoTen} </p>
                                        )}
                                    </div>
                                    <div className="form-group d-flex group">
                                        <label htmlFor="Email" className="text-primary mb-2 lable"><i className="fa fa-envelope mr-2"></i> Email</label>
                                        <input readOnly={readOnly} className="form-control user w-50" type="email" name="email" id="Email" value={dataUser?.dataUser.email} onChange={formik.handleChange} />
                                        {formik.errors.email && formik.touched.email && (
                                            <p className="text-danger">{formik.errors.email} </p>
                                        )}
                                    </div>
                                    <div className="form-group d-flex group">
                                        <label htmlFor="soDT" className="text-primary mb-2 lable"><i className="fa fa-phone mr-2"></i> Số điện thoại</label>
                                        <input readOnly={readOnly} className="form-control user w-50" type="text" name="soDT" id="soDT" value={dataUser?.dataUser.soDT} onChange={formik.handleChange} />
                                        {formik.errors.soDT && formik.touched.soDT && (
                                            <p className="text-danger">{formik.errors.soDT} </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="btnCapNhat">
                                {readOnly === true ? <button onClick={() => {
                                    setReadOnly(false)
                                }} type="button" className=" btnCapNhat__item">Thay đổi thông tin</button> : <button onClick={() => {
                                    setReadOnly(true)
                                    dispatch(capNhatNguoiDung(formik.values))
                                    // console.log('values',formik.values);
                                }} type="submit" className=" btnCapNhat__item">Cập nhật</button>}
                            </div>
                        </ form>
                    </div>
                </TabPane>
                <TabPane tab={<div className="tablist__item"><span><i className="fa fa-history"></i> Lịch sử đặt vé</span></div>} key="2">
                    <LichSuDatVe />
                </TabPane>

            </Tabs>
        </div>
    )
}
