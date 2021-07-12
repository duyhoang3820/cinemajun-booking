/* eslint-disable no-fallthrough */
/* eslint-disable import/no-anonymous-default-export */

import { DAT_GHE, GET_PHONG_VE } from "../constants/PhongVeConst/PhongVeConst";
import { data } from "../../pages/ChiTietPhongVe/ListCombo/dataCombo";

const initialState = {
    lichChieu: {},
    danhSachGheDangDat: [],
    data: data,
    comboDaChon: [],
    tongTienCombo: 0
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_PHONG_VE: {
            state.lichChieu = action.lichChieu;
            return { ...state };
        }
        case 'UPDATE_DATA': {
            state.data = action.dataUpdate;
            state.comboDaChon = action.comboDaChon
            state.tongTienCombo = state.comboDaChon.reduce((tongTien, item) => {
                return tongTien + item.quanlity * item.price
            }, 0)
            return { ...state };
        }

        case DAT_GHE: {
            let mangGheDangDat = [...state.danhSachGheDangDat];
            let index = mangGheDangDat.findIndex((gheDD => gheDD.maGhe === action.gheDangDat.maGhe));
            if (index !== -1) {
                mangGheDangDat.splice(index, 1);
            } else {
                mangGheDangDat.push(action.gheDangDat)
            }
            state.danhSachGheDangDat = mangGheDangDat;
        }
        default:
            return { ...state }
    }
}
