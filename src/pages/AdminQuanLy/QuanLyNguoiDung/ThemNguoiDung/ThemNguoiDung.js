import { useFormik } from 'formik';
import * as Yup from 'yup'
import { themNguoiDung } from '../../../../redux/actions/AdminQuanLyAction';
import { useDispatch } from 'react-redux';



export default function ThemNguoiDung(props) {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDt: '',
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
            dispatch(themNguoiDung(values))
            console.log('value', values);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className="p-3 ml-3 form" style={{ height: 300 }}>
            <div className="row w-100">
                <div className="col-12 col-sm-12 col-lg-6">
                    <div className="form-group">
                        <label htmlFor="taiKhoan" className="text-primary mb-2">Tài khoản</label>
                        <input type="text" name="taiKhoan" id="taiKhoan" className="form-control" onChange={formik.handleChange} />
                        {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                            <p className="text-danger">{formik.errors.taiKhoan} </p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="matKhau" className="text-primary mb-2">Mật khẩu</label>
                        <input type="text" name="matKhau" id="matKhau" className="form-control" onChange={formik.handleChange} />
                        {formik.errors.matKhau && formik.touched.matKhau && (
                            <p className="text-danger">{formik.errors.matKhau} </p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="hoTen" className="text-primary mb-2">Họ và tên</label>
                        <input type="text" name="hoTen" id="hoTen" className="form-control" onChange={formik.handleChange} />
                        {formik.errors.hoTen && formik.touched.hoTen && (
                            <p className="text-danger">{formik.errors.hoTen} </p>
                        )}
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-6">
                    <div className="form-group">
                        <label htmlFor="InputEmail" className="text-primary mb-2">Email address</label>
                        <input type="text" name="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" onChange={formik.handleChange} />
                        {formik.errors.email && formik.touched.email && (
                            <p className="text-danger">{formik.errors.email} </p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="soDt" className="text-primary mb-2">Số điện thoại</label>
                        <input type="text" name="soDt" id="soDt" className="form-control" onChange={formik.handleChange} />
                        {formik.errors.soDt && formik.touched.soDt && (
                            <p className="text-danger">{formik.errors.soDt} </p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="maLoaiNguoiDung" className="text-primary mb-2">Loại người dùng</label>
                        <select name="maLoaiNguoiDung" id="maLoaiNguoiDung" value={formik.values['maLoaiNguoiDung']} className="custom-select custom-select-sm-lg" onChange={formik.handleChange}>
                            <option defaultValue>Chọn loại người dùng</option>
                            <option value={'KhachHang'}>Khách hàng</option>
                            <option value={'QuanTri'}>Quản trị</option>
                        </select>
                        {formik.errors.maLoaiNguoiDung && formik.touched.maLoaiNguoiDung && (
                            <p className="text-danger">{formik.errors.maLoaiNguoiDung} </p>
                        )}
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-success mt-3 mr-5" style={{float:'right'}}>Thêm người dùng</button>
        </form>

    )
}

