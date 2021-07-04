/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { DatePicker, Space} from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { layThongTinCumRapTheoHeThong, layThongTinPhim, themLichChieu } from '../../../../redux/actions/AdminQuanLyAction';

export default function TaoLichChieu() {
    const { thongTinPhim, listCumRap } = useSelector(state => state.AdminQuanLyReducer)
    const dispatch = useDispatch()
    // console.log('listCumRap', listCumRap);
    // console.log('thongTinPhim', thongTinPhim);
    useEffect(() => {
    }, [thongTinPhim])
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: thongTinPhim.maPhim,
            ngayChieuGioChieu: '',
            maRap: 0,
            giaVe: 0,
        },
        validationSchema: Yup.object().shape({
            giaVe: Yup.string().required("Required!"),
            maRap: Yup.string().required("Required!"),
            ngayChieuGioChieu: Yup.string().required("Required!"),
        }),
        onSubmit: values => {
            // console.log('value', values);
            dispatch(themLichChieu(values), () => {
                dispatch(layThongTinPhim(formik.values.maPhim))
            })

        },
    });
    const rap_Formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maHeThongRap: '',
            maCumRap: ''
        },

    })

    useEffect(() => {
        dispatch(layThongTinCumRapTheoHeThong(rap_Formik.values.maHeThongRap))
    }, [rap_Formik.values])

    const dateFormatList = ['DD-MM-YYYY HH:mm:ss'];

    const renderCumRap = () => {
        return listCumRap.map((cumRap, index) => {
            console.log(listCumRap);
            return <option key={index} value={cumRap.maCumRap}>{cumRap.tenCumRap}</option>
        })
    }
    const renderRap = () => {
        const cumRap = listCumRap.find(cumRap => cumRap.maCumRap === rap_Formik.values.maCumRap);
        return cumRap?.danhSachRap?.map((rap, index) => {
            return <option key={index} value={rap.maRap}>{rap.tenRap}</option>
        })
    }

    return (
        <div>
            <form onSubmit={formik.handleSubmit} className="p-3 ml-3 form">
                <div className="row w-100">
                    <div className="col-12 col-sm-12 col-xl-6">
                        <div className="form-group">
                            <select name="maHeThongRap" id="maHeThongRap" value={rap_Formik.values['maHeThongRap']} onChange={rap_Formik.handleChange} className="custom-select custom-select-sm-lg">
                                <option defaultValue>Chọn hệ thống rạp</option>
                                <option value={'BHDStar'}>BHD Star Cineplex</option>
                                <option value={'CGV'}>CGV</option>
                                <option value={'CineStar'}>CineStar</option>
                                <option value={'Galaxy'}>Galaxy Cinema</option>
                                <option value={'LotteCinima '}>Lotte Cinema</option>
                                <option value={'MegaGS'}>MegaGS</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select name="maCumRap" id="maCumRap" value={rap_Formik.values['maCumRap']} onChange={rap_Formik.handleChange} className="custom-select custom-select-sm-lg">
                                <option defaultValue>Chọn cụm rạp</option>
                                {renderCumRap()}
                            </select>
                        </div>
                        <div className="form-group">
                            <select name="maRap" id="maRap" value={formik.values['maRap']} className="custom-select custom-select-sm-lg" onChange={formik.handleChange}>
                                <option defaultValue>Chọn rạp</option>
                                {renderRap()}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="giaVe" className="text-primary mb-2">Giá vé</label>
                            <input placeholder="Giá vé từ 75.000đ - 200.000đ" type="number" name="giaVe" id="giaVe" className="form-control" onChange={formik.handleChange} />
                            {formik.errors.giaVe && formik.touched.giaVe && (
                                <p className="text-danger">{formik.errors.giaVe} </p>
                            )}
                        </div>
                        <div className="form-group row">
                            <div className="col-6">
                                <label htmlFor="ngayChieuGioChieu" className="text-primary mb-2">Ngày chiếu giờ chiếu</label><br />
                                <Space direction="vertical" size={12}>
                                    <DatePicker id="ngayChieuGioChieu" name="ngayChieuGioChieu" showTime={{ format: 'HH:mm' }} format={dateFormatList} onChange={(value, dateString) => {
                                        formik.values.ngayChieuGioChieu = dateString
                                    }} />
                                </Space>
                                {formik.errors.ngayChieuGioChieu && formik.touched.ngayChieuGioChieu && (
                                <p className="text-danger">{formik.errors.ngayChieuGioChieu} </p>
                            )}
                            </div>
                            <div className="form-group col-6 mt-4">
                                <button style={{ float: 'right' }} type="submit" className="btn btn-success">Tạo lịch chiếu</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-sm-12 col-xl-6 row">
                        <div className="col-12 col-sm-12 col-xl-6">
                            <img className="ml-4" style={{ width: 150, height: 200 }} src={thongTinPhim.hinhAnh} alt="" />
                        </div>
                        <div className="col-12 col-sm-12 col-xl-6">
                            <h1>{thongTinPhim.tenPhim}</h1>
                        </div>
                    </div>
                </div>
            </form>        
        </div>
    )
}
