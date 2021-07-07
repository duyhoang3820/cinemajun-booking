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
                .required("* SĐT không được để trống!")
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
                        < form className="m-auto" onSubmit={formik.handleSubmit} style={{ width: '80%' }}>
                            <div className="row info ">
                                <div className="" style={{ width: '100%' }}>
                                    <div className="form-group d-flex group">
                                        <label htmlFor="taiKhoan" className="text-primary mb-2 lable_input"><i className="fa fa-user mr-2"></i> Tài khoản</label>
                                        {readOnly === true ? <input className="form-control user w-50 " readOnly={true} type="text" name="taiKhoan" id="taiKhoan" value={dataUser?.dataUser.taiKhoan || ''} /> : <Tooltip title="Tài khoản không thể thay đổi!" color={colors} key={colors}>
                                            <input className="form-control user w-50 " readOnly={true} type="text" name="taiKhoan" id="taiKhoan" value={dataUser?.dataUser.taiKhoan || ''} />
                                        </Tooltip>}
                                    </div>
                                    <div className="form-group d-flex group">
                                        <label htmlFor="matKhau" className="text-primary mb-2 lable_input"><i className="fa fa-lock mr-2"></i> Mật khẩu</label>
                                        <input autoComplete="off" readOnly={readOnly} className="form-control user w-50 " type="text" name="matKhau" id="matKhau" value={dataUser?.dataUser.matKhau || ''} onChange={formik.handleChange} />
                                    </div>
                                    {formik.errors.matKhau && formik.touched.matKhau && (
                                        <p className="text-danger text-center">{formik.errors.matKhau} </p>
                                    )}
                                    <div className="form-group d-flex group">
                                        <label htmlFor="hoTen" className="text-primary mb-2 lable_input"><i className="fa fa-tag mr-2"></i> Họ tên</label>
                                        <input autoComplete="off" readOnly={readOnly} className="form-control user w-50 " type="text" name="hoTen" id="hoTen" value={dataUser?.dataUser.hoTen || ''} onChange={formik.handleChange} />
                                    </div>
                                    {formik.errors.hoTen && formik.touched.hoTen && (
                                        <p className="text-danger text-center">{formik.errors.hoTen} </p>
                                    )}
                                    <div className="form-group d-flex group">
                                        <label htmlFor="Email" className="text-primary mb-2 lable_input"><i className="fa fa-envelope mr-2"></i> Email</label>
                                        <input autoComplete="off" readOnly={readOnly} className="form-control user w-50 " type="email" name="email" id="Email" value={dataUser?.dataUser.email || ''} onChange={formik.handleChange} />
                                    </div>
                                    {formik.errors.email && formik.touched.email && (
                                        <p className="text-danger text-center">{formik.errors.email} </p>
                                    )}
                                    <div className="form-group d-flex group">
                                        <label htmlFor="soDT" className="text-primary mb-2 lable_input"><i className="fa fa-phone mr-2"></i> Số điện thoại</label>
                                        <input autoComplete="off" readOnly={readOnly} className="form-control user w-50 " type="number" name="soDT" id="soDT" value={dataUser?.dataUser.soDT || ''} onChange={formik.handleChange} />
                                    </div>
                                    {formik.errors.soDT && formik.touched.soDT && (
                                        <p className="text-danger text-center">{formik.errors.soDT} </p>
                                    )}
                                </div>
                            </div>
                            <div className="btnCapNhat">
                                {readOnly === true ? <button onClick={() => {
                                    setReadOnly(false)
                                }} type="button" className=" btnCapNhat__item" style={{ border: "none", outline: "none" }}>Thay đổi thông tin</button> : <button onClick={() => {
                                    setReadOnly(true)
                                    dispatch(capNhatNguoiDung(formik.values))
                                    // console.log('values',formik.values);
                                }} type="submit" className=" btnCapNhat__item" style={{ border: "none", outline: "none" }}>Cập nhật</button>}
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
