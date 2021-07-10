/* eslint-disable no-fallthrough */
/* eslint-disable import/no-anonymous-default-export */

import { DAT_GHE, GET_PHONG_VE } from "../constants/PhongVeConst/PhongVeConst";

const initialState = {
    lichChieu: {},
    danhSachGheDangDat: [],
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_PHONG_VE: {
            state.lichChieu = action.lichChieu;
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
