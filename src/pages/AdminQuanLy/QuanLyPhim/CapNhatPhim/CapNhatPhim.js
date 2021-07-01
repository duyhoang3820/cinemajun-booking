import { useFormik } from 'formik';
import * as Yup from 'yup'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { capNhatPhim } from '../../../../redux/actions/AdminQuanLyAction';
import { Tooltip } from 'antd';
import { DatePicker, Space } from 'antd';


export default function CapNhatPhim() {

    const { editMovie } = useSelector(state => state.AdminQuanLyReducer);
    const dispatch = useDispatch()
    const [dataMovie, setDataMovie] = useState()
    useEffect(() => {
        setDataMovie({
            ...editMovie,
            dataMovie: editMovie
        })
    }, [editMovie])
    // const removeAccents = (str) => {
    //     return str.normalize('NFD')
    //         .replace(/[\u0300-\u036f]/g, '')
    //         .replace(/đ/g, 'd').replace(/Đ/g, 'D');
    // }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: editMovie?.maPhim,
            tenPhim: editMovie?.tenPhim,
            trailer: '',
            biDanh: _.kebabCase(_.deburr((editMovie?.tenPhim))),
            hinhAnh: {},
            moTa: editMovie?.moTa,
            ngayKhoiChieu: '',
            danhGia: 0,
            maNhom: 'GP01'
        },
        validationSchema: Yup.object().shape({
            maPhim: Yup.string().min(4, "Mininum 4 characters")
                .max(7, "Maximum 7 characters")
                .required("Required!"),
            tenPhim: Yup.string().min(1, "Minimum 6 characters")
                .max(30, "Maximum 30 characters")
                .required("Required!"),
            moTa: Yup.string().min(1, "Mininum 1 characters")
                .max(1000, "Maximum 1000 characters")
                .required("Required!"),
            trailer: Yup.string().required("Required!"),
            hinhAnh: Yup.object().required("Required!"),
            ngayKhoiChieu: Yup.string().required("Required!"),
            danhGia: Yup.string().min(1, "Mininum 1 characters")
                .max(2, "Maximum 2 characters")
                .required("Required!"),
        }),
        onSubmit: values => {
            let form_data = new FormData();
            for (var key in values) {
                form_data.append(key, values[key])
                // console.log('value', form_data.get(key));
            }
            dispatch(capNhatPhim(form_data))
            // console.log('value', values);
        },
    });

    useEffect(() => {
        setDataMovie({
            dataMovie: formik.values
        })
    }, [formik.values])
    const colors = [
        'red',
    ];

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

    return (
        <div>
            <form onSubmit={formik.handleSubmit} className="p-3 ml-3 form">
                <div className="row w-100">
                    <div className="col-12 col-sm-12 col-lg-6">
                        <div className="form-group">
                            <label htmlFor="maPhim" className="text-primary mb-2">Mã phim</label>
                            <Tooltip title="Mã phim không thể thay đổi!" color={colors} key={colors}>
                                <input readOnly={true} type="number" name="maPhim" id="maPhim" className="form-control" value={formik.values.maPhim = editMovie?.maPhim} />
                                {formik.errors.maPhim && formik.touched.maPhim && (
                                    <p className="text-danger">{formik.errors.maPhim} </p>
                                )}
                            </Tooltip>
                        </div>
                        <div className="form-group">
                            <label htmlFor="tenPhim" className="text-primary mb-2">Tên phim</label>
                            <input type="text" name="tenPhim" id="tenPhim" className="form-control" value={dataMovie?.tenPhim} onChange={formik.handleChange} />
                            {formik.errors.tenPhim && formik.touched.tenPhim && (
                                <p className="text-danger">{formik.errors.tenPhim} </p>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="biDanh" className="text-primary mb-2">Bí danh</label>
                            <input type="text" name="biDanh" id="biDanh" className="form-control" value={formik.values.biDanh} onChange={formik.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="trailer" className="text-primary mb-2">Trailer</label>
                            <input type="text" name="trailer" id="trailer" className="form-control" onChange={formik.handleChange} />
                            {formik.errors.trailer && formik.touched.trailer && (
                                <p className="text-danger">{formik.errors.trailer} </p>
                            )}
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-6">
                        <div className="form-group ">
                            <label htmlFor="ngayKhoiChieu" className="text-primary mb-2">Ngày khởi chiếu</label><br />
                            <Space direction="vertical" size={12}>
                                <DatePicker id="ngayKhoiChieu" name="ngayKhoiChieu" showTime={{ format: 'HH:mm' }} format={dateFormatList} onChange={(value, dateString) => {
                                    formik.values.ngayKhoiChieu = dateString
                                }} />
                            </Space>
                            {formik.errors.ngayKhoiChieu && formik.touched.ngayKhoiChieu && (
                                <p className="text-danger">{formik.errors.ngayKhoiChieu} </p>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="hinhAnh" className="text-primary mb-2">Hình ảnh</label><br />
                            <div className="custom-file">
                                <input type="file" name="hinhAnh" onChange={(event) => {
                                    formik.setFieldValue("hinhAnh", event.currentTarget.files[0]);
                                }} />
                                {formik.errors.hinhAnh && formik.touched.hinhAnh && (
                                    <p className="text-danger">{formik.errors.hinhAnh} </p>
                                )}
                            </div>

                        </div>
                        <div className="form-group ">
                            <label htmlFor="danhGia" className="text-primary mb-2">Đánh giá</label>
                            <input type="number" name="danhGia" id="danhGia" className="form-control" onChange={formik.handleChange} />
                            {formik.errors.danhGia && formik.touched.danhGia && (
                                <p className="text-danger">{formik.errors.danhGia} </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="moTa" className="text-primary mb-2">Mô tả</label>
                    <textarea className="form-control" rows={4} id="moTa" name="moTa" value={dataMovie?.moTa} onChange={formik.handleChange} />
                    {formik.errors.moTa && formik.touched.moTa && (
                        <p className="text-danger">{formik.errors.moTa} </p>
                    )}
                </div>
                <button style={{ float: 'right' }} type="submit" className="btn btn-success">Cập nhật phim</button>
            </form>
        </div>
    )
}
