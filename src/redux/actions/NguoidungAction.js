/* eslint-disable no-unused-vars */
import axios from "axios"
import { history } from "../../App"
import { DOMAIN, TOKEN, USERLOGIN } from "../../util/constants/settingSystem"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'
import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/loadingConst"
import { timeout } from "../constants/setTimeOut"
import { THONG_TIN_TAI_KHOAN, DANG_NHAP } from "../constants/NguoiDungConst/NguoiDungConst"


export const dangNhapAction = (userLogin) => {
    return async dispatch => {
        dispatch({
            type: DISPLAY_LOADING
        })
        await timeout(1000);
        try {
            const result = await axios({
                url: `${DOMAIN}/QuanLyNguoiDung/DangNhap`,
                method: 'POST',
                data: userLogin
            })
            dispatch({
                type: DANG_NHAP,
                dataNguoiDung: result.data,
            })
            localStorage.setItem(TOKEN, result.data.accessToken);
            localStorage.setItem(USERLOGIN, JSON.stringify(result.data))
            // console.log('data',result.data);
            Swal.fire({
                title: 'Success!',
                text: 'Đăng nhập thành công!',
                icon: 'success',
                confirmButtonText: 'OK'
            })
            history.goBack()
            setTimeout(function () {
                window.scrollTo(0, 0);
            }, 1000);
        } catch (error) {
            // alert('Tài khoản hoặc mật khẩu không đúng!');
            Swal.fire({
                title: 'Error!',
                text: error.response.data,
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
        dispatch({
            type: HIDE_LOADING
        })
    }
}

export const dangKyAction = (userRegister) => {
    return async dispatch => {
        dispatch({
            type: DISPLAY_LOADING
        })
        await timeout(1000);
        try {
            const result = await axios({
                url: `${DOMAIN}/QuanLyNguoiDung/DangKy`,
                method: 'POST',
                data: userRegister
            })
            Swal.fire({
                title: 'Success!',
                text: 'Đăng ký thành công!',
                icon: 'success',
                confirmButtonText: 'OK'
            })
            setTimeout(function () {
                history.push('/dangnhap');
            }, 2000);

        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.response.data,
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
        dispatch({
            type: HIDE_LOADING
        })
    }
}

export const thongTinNguoiDungAction = (taiKhoan) => {
    return async dispatch => {
        dispatch({
            type: DISPLAY_LOADING
        })
        // await timeout(1000);
        try {
            const result = await axios({
                url: `${DOMAIN}/QuanLyNguoiDung/ThongTinTaiKhoan`,
                method: 'POST',
                data: { taiKhoan }
            })
            dispatch({
                type: THONG_TIN_TAI_KHOAN,
                thongTinTaiKhoan: result.data
            })
        } catch (error) {
            console.log(error.response.data);
        }
        dispatch({
            type: HIDE_LOADING
        })
    }
}

export const capNhatNguoiDung = (thongTin) => {
    return async dispatch => {
        dispatch({
            type: DISPLAY_LOADING
        })
        await timeout(1000);
        try {
            const result = await axios({
                url: `${DOMAIN}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
                method: 'PUT',
                data: thongTin,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            })
            // dispatch(thongTinNguoiDungAction());
            Swal.fire({
                title: 'Success!',
                text: "Cập nhật thành công!",
                icon: 'success',
                confirmButtonText: 'OK'
            })
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.response.data,
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
        dispatch({
            type: HIDE_LOADING
        })
    }
}