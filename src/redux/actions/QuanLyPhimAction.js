import axios from 'axios'
import { DOMAIN } from '../../util/constants/settingSystem';
import { DISPLAY_LOADING, HIDE_LOADING } from '../constants/loadingConst'
import { GET_CHI_TIET_PHIM, GET_PHIM_DANG_CHIEU, GET_PHIM_HOT, GET_PHIM_SAP_CHIEU } from '../constants/QuanLyPhimConst/QuanLyPhimConst';
import { timeout } from '../constants/setTimeOut';

export const layDanhSachPhimAction = () => {
    return async (dispatch) => {
        dispatch({
            type: DISPLAY_LOADING
        })
        await timeout(1800);
        try {

            let result = await axios({
                url: `${DOMAIN}/QuanLyPhim/LayDanhSachPhim?maNhom=GP09`,
                method: 'GET'
            })
            dispatch({
                type: GET_PHIM_DANG_CHIEU,
                mangPhim: result.data
            })
        } catch (error) {
            console.log(error.response.error);
        }
        dispatch({
            type: HIDE_LOADING
        })
    }
}

export const layDanhSachPhimSapChieu = () => {
    return async (dispatch) => {
        dispatch({
            type: DISPLAY_LOADING
        })
        await timeout(1800);
        try {
            let result = await axios({
                url: `${DOMAIN}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
                method: 'GET'
            })
            dispatch({
                type: GET_PHIM_SAP_CHIEU,
                mangPhim: result.data
            })
        } catch (error) {
            console.log(error.response.error);
        }
        dispatch({
            type: HIDE_LOADING
        })
    }
}

export const layDanhSachPhimHot = () => {
    return async (dispatch) => {
        dispatch({
            type: DISPLAY_LOADING
        })
        await timeout(1800);
        try {
            let result = await axios({
                url: `${DOMAIN}/QuanLyPhim/LayDanhSachPhim?maNhom=GP07`,
                method: 'GET'
            })
            dispatch({
                type: GET_PHIM_HOT,
                mangPhim: result.data
            })
        } catch (error) {
            console.log(error.response.error);
        }
        dispatch({
            type: HIDE_LOADING
        })
    }
}

export const layChiTietPhimAction = (maPhim) => {
    return async (dispatch) => {
        dispatch({
            type: DISPLAY_LOADING
        })
        await timeout(1000);
        try {
            const result = await axios({
                url: `${DOMAIN}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: "GET",
            });
            dispatch({
                type: GET_CHI_TIET_PHIM,
                chiTietPhim: result.data,
            });

        } catch (errors) {
            console.log(errors);
        }
        dispatch({
            type: HIDE_LOADING
        })
    };
};
