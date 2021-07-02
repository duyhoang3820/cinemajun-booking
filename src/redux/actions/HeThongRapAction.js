import axios from "axios";
import { DOMAIN } from "../../util/constants/settingSystem"
import { GET_LICH_CHIEU_HE_THONG_RAP } from "../constants/HeThongRapConst/HeThongRapConst";


export const LayThongTinLichChieuHeThongRap = () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `${DOMAIN}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09`,
                method: 'GET'
            })
            dispatch({
                type: GET_LICH_CHIEU_HE_THONG_RAP,
                lichChieu: result.data
            })
        } catch (error) {
            console.log(error.response.error);
        }
    }
}
