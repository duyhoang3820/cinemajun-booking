import { GET_CHI_TIET_PHIM, GET_PHIM_DANG_CHIEU, GET_PHIM_HOT, GET_PHIM_SAP_CHIEU } from "../constants/QuanLyPhimConst/QuanLyPhimConst";

const stateDefault = {
    listPhim: [],
    listPhimSapChieu: [],
    listPhimHot: [],
    chiTietPhim: {}
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case GET_PHIM_DANG_CHIEU: {
            state.listPhim = action.mangPhim;
            return { ...state };
        }
        case GET_PHIM_SAP_CHIEU: {
            state.listPhimSapChieu = action.mangPhim;
            return { ...state };
        }
        case GET_PHIM_HOT: {
            state.listPhimHot = action.mangPhim;
            return { ...state };
        }
        case GET_CHI_TIET_PHIM: {
            state.chiTietPhim = action.chiTietPhim;
            return { ...state };
          }
        default:
            return { ...state }
    }
}
