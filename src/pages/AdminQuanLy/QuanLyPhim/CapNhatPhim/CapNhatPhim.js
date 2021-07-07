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
            hinhAnh: "",
            moTa: editMovie?.moTa,
            ngayKhoiChieu: '',
            danhGia: "",
            maNhom: 'GP07'
        },
        validationSchema: Yup.object().shape({
            maPhim: Yup.string().min(3, "* Mã phim tối thiểu 3 ký tự!")
                .max(6, "* Mã phim tối đa 6 ký tự!")
                .required("* Mã phim không được để trống!"),
            tenPhim: Yup.string().min(1, "* Tên phim tối thiểu 1 ký tự!")
                .max(50, "* Tên phim tối đa 50 ký tự!")
                .required("* Tên phim không được để trống!"),
            moTa: Yup.string().min(1, "* Mô tả tối thiểu 1 ký tự!")
                .max(1000, "* Mô tả tối đa 1000 ký tự!")
                .required("* Mô tả không được để trống!"),
            trailer: Yup.string().required("* Trailer không được để trống!"),
            hinhAnh: Yup.string().required("* Hình ảnh không được để trống!"),
            ngayKhoiChieu: Yup.string().required("* Ngày khởi chiếu không được để trống!"),
            danhGia: Yup.string().min(1, "* Đánh giá tối thiểu 1 ký tự!")
                .max(2, "* Đánh giá tối đa 6 ký tự!")
                .required("*Đánh giá không được để trống!"),
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
                            <label htmlFor="maPhim" className="text-primary" style={{fontSize:'14px'}}>Mã phim</label>
                            <Tooltip title="Mã phim không thể thay đổi!" color={colors} key={colors}>
                                <input readOnly={true} type="number" name="maPhim" id="maPhim" className="form-control" value={formik.values.maPhim = editMovie?.maPhim} />
                                {formik.errors.maPhim && formik.touched.maPhim && (
                                    <p className="text-danger" style={{fontSize:'14px'}}>{formik.errors.maPhim} </p>
                                )}
                            </Tooltip>
                        </div>
                        <div className="form-group">
                            <label htmlFor="tenPhim" className="text-primary" style={{fontSize:'14px'}}>Tên phim</label>
                            <input type="text" name="tenPhim" id="tenPhim" className="form-control" value={dataMovie?.tenPhim} onChange={formik.handleChange} />
                            {formik.errors.tenPhim && formik.touched.tenPhim && (
                                <p className="text-danger" style={{fontSize:'14px'}}>{formik.errors.tenPhim} </p>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="biDanh" className="text-primary" style={{fontSize:'14px'}}>Bí danh</label>
                            <input type="text" name="biDanh" id="biDanh" className="form-control" value={formik.values.biDanh || ''} onChange={formik.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="trailer" className="text-primary" style={{fontSize:'14px'}}>Trailer</label>
                            <input type="text" name="trailer" id="trailer" className="form-control" onChange={formik.handleChange} />
                            {formik.errors.trailer && formik.touched.trailer && (
                                <p className="text-danger" style={{fontSize:'14px'}}>{formik.errors.trailer} </p>
                            )}
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-6">
                        <div className="form-group ">
                            <label htmlFor="ngayKhoiChieu" className="text-primary" style={{fontSize:'14px'}}>Ngày khởi chiếu</label><br />
                            <Space direction="vertical" size={12}>
                                <DatePicker id="ngayKhoiChieu" name="ngayKhoiChieu" showTime={{ format: 'HH:mm' }} format={dateFormatList} onChange={(value, dateString) => {
                                    formik.values.ngayKhoiChieu = dateString
                                }} />
                            </Space>
                            {formik.errors.ngayKhoiChieu && formik.touched.ngayKhoiChieu && (
                                <p className="text-danger" style={{fontSize:'14px'}}>{formik.errors.ngayKhoiChieu} </p>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="hinhAnh" className="text-primary" style={{fontSize:'14px'}}>Hình ảnh</label><br />
                            <div className="custom-file">
                                <input style={{fontSize:'14px'}} type="file" name="hinhAnh" onChange={(event) => {
                                    formik.setFieldValue("hinhAnh", event.currentTarget.files[0]);
                                }} />
                                {formik.errors.hinhAnh && formik.touched.hinhAnh && (
                                    <p className="text-danger" style={{fontSize:'14px'}}>{formik.errors.hinhAnh} </p>
                                )}
                            </div>

                        </div>
                        <div className="form-group ">
                            <label htmlFor="danhGia" className="text-primary" style={{fontSize:'14px'}}>Đánh giá</label>
                            <input type="number" name="danhGia" id="danhGia" className="form-control" onChange={formik.handleChange} />
                            {formik.errors.danhGia && formik.touched.danhGia && (
                                <p className="text-danger" style={{fontSize:'14px'}}>{formik.errors.danhGia} </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="moTa" className="text-primary" style={{fontSize:'14px'}}>Mô tả</label>
                    <textarea className="form-control" rows={4} id="moTa" name="moTa" value={dataMovie?.moTa} onChange={formik.handleChange} />
                    {formik.errors.moTa && formik.touched.moTa && (
                        <p className="text-danger" style={{fontSize:'14px'}}>{formik.errors.moTa} </p>
                    )}
                </div>
                <button style={{ float: 'right' }} type="submit" className="btn btn-success">Cập nhật phim</button>
            </form>
        </div>
    )
}
