/* eslint-disable no-unused-vars */
import axios from "axios"
import { DOMAIN, TOKEN } from "../../util/constants/settingSystem"
import { layDanhSachPhimHot } from "./QuanLyPhimAction"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'
import { history } from "../../App"
import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/loadingConst"
import { timeout } from "../constants/setTimeOut"
import { GET_CUM_RAP, GET_LIST_NGUOI_DUNG, GET_THONG_TIN_PHIM, SET_DANH_SACH_TIM_KIEM } from "../constants/AdminQuanLyConst/AdminQuanLyConst"

export const layDanhSachNguoiDung = () => {
    return async dispatch => {
        dispatch({
            type: DISPLAY_LOADING
        })
        await timeout(1000);
        try {
            const result = await axios({
                url: `${DOMAIN}/QuanLyNguoiDung/LayDanhSachNguoiDung`,
                method: 'GET'
            })

            dispatch({
                type: GET_LIST_NGUOI_DUNG,
                danhSachNguoiDung: result.data
            })
        } catch (error) {
            console.log(error);
        }
        dispatch({
            type: HIDE_LOADING
        })
    }
}

export const timKiemNguoiDung = (tuKhoa) => {
    return async dispatch => { 
        try {
            const result = await axios({
                url: `${DOMAIN}/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${tuKhoa}`,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            })
            dispatch(
                {
                    type: SET_DANH_SACH_TIM_KIEM,
                    danhSachTimKiem: result.data
                })
            // console.log('data', result.data);    
            // alert('Tìm kiếm thành công');
        } catch (error) {
            alert(error.response.error)
        }        
    }
}

export const themNguoiDung = (thongTin) => {
    return async dispatch => {
        dispatch({
            type: DISPLAY_LOADING
        })
        await timeout(1000);
        try {
            const result = await axios({
                url: `${DOMAIN}/QuanLyNguoiDung/ThemNguoiDung`,
                method: 'POST',
                data: thongTin,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            })
            dispatch(layDanhSachNguoiDung());
            Swal.fire({
                title: 'Success!',
                text: "Thêm thành công !",
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

export const xoaNguoiDung = (taiKhoan) => {
    return async dispatch => {
        dispatch({
            type: DISPLAY_LOADING
        })
        await timeout(1000);
        try {
            const result = await axios({
                url: `${DOMAIN}/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            })
            dispatch(layDanhSachNguoiDung())
            Swal.fire({
                title: 'Success!',
                text: result.data,
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

export const suaNguoiDung = (thongTin) => {

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
            dispatch(layDanhSachNguoiDung());
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

export const themPhim = (thongTinPhim) => {
    return async dispatch => {
        dispatch({
            type: DISPLAY_LOADING
        })
        await timeout(1000);
        try {
            const result = await axios({
                url: `${DOMAIN}/QuanLyPhim/ThemPhimUploadHinh`,
                method: 'POST',
                data: thongTinPhim,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            })
            dispatch(layDanhSachPhimHot())

            Swal.fire({
                title: 'Success!',
                text: "Thêm phim thành công !",
                icon: 'success',
                confirmButtonText: 'OK'
            })
            history.push('/admin/quan-ly-phim')
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

export const xoaPhim = (maPhim) => {
    return async dispatch => {
        dispatch({
            type: DISPLAY_LOADING
        })
        await timeout(1000);
        try {
            const result = await axios({
                url: `${DOMAIN}/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            })
            dispatch(layDanhSachPhimHot())
            Swal.fire({
                title: 'Success!',
                text: 'Xóa phim thành công!',
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

export const capNhatPhim = (dataMovie) => {
    return async dispatch => {
        dispatch({
            type: DISPLAY_LOADING
        })
        await timeout(1000);
        try {
            const result = await axios({
                url: `${DOMAIN}/QuanLyPhim/CapNhatPhimUpload`,
                method: 'POST',
                data: dataMovie,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            })
            dispatch(layDanhSachPhimHot())
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

export const layThongTinPhim = (movieId) => {
    return async dispatch => {
        dispatch({
            type: DISPLAY_LOADING
        })
        await timeout(1000);
        try {
            const result = await axios({
                url: `${DOMAIN}/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`,
                method: 'GET',
            })
            dispatch({
                type: GET_THONG_TIN_PHIM,
                thongTinPhim: result.data
            })
        } catch (error) {
            console.log(error);
        }
        dispatch({
            type: HIDE_LOADING
        })
    }
}

export const themLichChieu = (dataLichChieu) => {
    return async dispatch => {
        dispatch({
            type: DISPLAY_LOADING
        })
        await timeout(1000);
        try {
            const result = await axios({
                url: `${DOMAIN}/QuanLyDatVe/TaoLichChieu`,
                method: 'POST',
                data: dataLichChieu,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            })
            Swal.fire({
                title: 'Success!',
                text: result.data,
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

export const layThongTinCumRapTheoHeThong = (maHeThongRap) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
                method: 'GET',
            })
            dispatch({
                type: GET_CUM_RAP,
                listCumRap: result.data
            })
        } catch (error) {
            console.log(error.response.error);
        }
    }
}



