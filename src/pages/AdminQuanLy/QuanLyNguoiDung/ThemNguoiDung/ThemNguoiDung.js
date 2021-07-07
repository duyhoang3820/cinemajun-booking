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
            dispatch(themNguoiDung(values))
            console.log('value', values);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className="p-3 ml-3 form" style={{ height: 300 }}>
            <div className="row w-100">
                <div className="col-12 col-sm-12 col-lg-6">
                    <div className="form-group">
                        <label htmlFor="taiKhoan" className="text-primary" style={{ fontSize: '14px' }}>Tài khoản</label>
                        <input type="text" name="taiKhoan" id="taiKhoan" className="form-control" onChange={formik.handleChange} />
                        {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                            <p className="text-danger" style={{ fontSize: '14px' }}>{formik.errors.taiKhoan} </p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="matKhau" className="text-primary" style={{ fontSize: '14px' }}>Mật khẩu</label>
                        <input type="text" name="matKhau" id="matKhau" className="form-control" onChange={formik.handleChange} />
                        {formik.errors.matKhau && formik.touched.matKhau && (
                            <p className="text-danger" style={{ fontSize: '14px' }}>{formik.errors.matKhau} </p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="hoTen" className="text-primary" style={{ fontSize: '14px' }}>Họ và tên</label>
                        <input type="text" name="hoTen" id="hoTen" className="form-control" onChange={formik.handleChange} />
                        {formik.errors.hoTen && formik.touched.hoTen && (
                            <p className="text-danger" style={{ fontSize: '14px' }}>{formik.errors.hoTen} </p>
                        )}
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-6">
                    <div className="form-group">
                        <label htmlFor="InputEmail" className="text-primary" style={{ fontSize: '14px' }}>Email address</label>
                        <input type="text" name="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" onChange={formik.handleChange} />
                        {formik.errors.email && formik.touched.email && (
                            <p className="text-danger" style={{ fontSize: '14px' }}>{formik.errors.email} </p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="soDt" className="text-primary" style={{ fontSize: '14px' }}>Số điện thoại</label>
                        <input type="text" name="soDt" id="soDt" className="form-control" onChange={formik.handleChange} />
                        {formik.errors.soDt && formik.touched.soDt && (
                            <p className="text-danger" style={{ fontSize: '14px' }}>{formik.errors.soDt} </p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="maLoaiNguoiDung" className="text-primary" style={{ fontSize: '14px' }}>Loại người dùng</label>
                        <select name="maLoaiNguoiDung" id="maLoaiNguoiDung" value={formik.values['maLoaiNguoiDung']} className="custom-select custom-select-sm-lg" onChange={formik.handleChange}>
                            <option defaultValue>Chọn loại người dùng</option>
                            <option value={'KhachHang'}>Khách hàng</option>
                            <option value={'QuanTri'}>Quản trị</option>
                        </select>
                        {formik.errors.maLoaiNguoiDung && formik.touched.maLoaiNguoiDung && (
                            <p className="text-danger" style={{ fontSize: '14px' }}>{formik.errors.maLoaiNguoiDung} </p>
                        )}
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-success mt-3 mr-5" style={{ float: 'right' }}>Thêm người dùng</button>
        </form>

    )
}

