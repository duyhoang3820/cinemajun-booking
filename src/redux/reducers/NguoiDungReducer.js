import { USERLOGIN } from "../../util/constants/settingSystem";
import { DANG_NHAP, THONG_TIN_TAI_KHOAN } from "../constants/NguoiDungConst/NguoiDungConst";

let taiKhoanNguoiDung = '';
let loaiNguoiDung = '';
if (localStorage.getItem(USERLOGIN)) {
    let userLogin = JSON.parse(localStorage.getItem(USERLOGIN));
    taiKhoanNguoiDung = userLogin.taiKhoan;
    loaiNguoiDung = userLogin.maLoaiNguoiDung;
}

const stateDefault = {
    taiKhoan: taiKhoanNguoiDung,
    maLoaiNguoiDung: loaiNguoiDung,
    thongTinTaiKhoan: {}
}

export const NguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DANG_NHAP: {
            state.taiKhoan = action.dataNguoiDung.taiKhoan;
            state.maLoaiNguoiDung = action.dataNguoiDung.maLoaiNguoiDung;
            // console.log('taikhoan',action.taiKhoan);
            return { ...state };
        }
        case THONG_TIN_TAI_KHOAN: {
            state.thongTinTaiKhoan = action.thongTinTaiKhoan
            return { ...state };
        }
        default:
            return { ...state }
    }
}