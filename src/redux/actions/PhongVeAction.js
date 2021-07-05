import axios from "axios";
import { DOMAIN, TOKEN } from "../../util/constants/settingSystem";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'
import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/loadingConst";
import { timeout } from "../constants/setTimeOut";
import { GET_PHONG_VE } from "../constants/PhongVeConst/PhongVeConst";

export const layDanhSachPhongVeAction = (maLichChieu) => {
    return async dispatch => {
        dispatch({
            type: DISPLAY_LOADING
        })
        await timeout(1000);
        try {
            const result = await axios({
                url: `${DOMAIN}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'GET'
            });
            // console.log('object', result.data);
            dispatch({
                type: GET_PHONG_VE,
                lichChieu: result.data
            })
        }
        catch (error) {
            console.log('error', error.response.data);
        }
        dispatch({
            type: HIDE_LOADING
        })
    }
}

export const datVeAction = (thongTinDatVe) => {
    return async dispatch => {
        dispatch({
            type: DISPLAY_LOADING
        })
        await timeout(1000);
        try {
            const result = await axios({
                url: `${DOMAIN}/QuanLyDatVe/DatVe`,
                method: 'POST',
                data: thongTinDatVe,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            });
            if (result.status === 200) {
                Swal.fire({
                    title: 'Success!',
                    text: result.data,
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                setTimeout(function () {
                    window.location.reload();
                    window.scrollTo(0, 0);
                }, 1500);
                
                
            }
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

