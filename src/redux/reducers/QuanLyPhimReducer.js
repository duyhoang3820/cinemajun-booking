import { GET_CHI_TIET_PHIM, GET_PHIM_DANG_CHIEU } from "../constants/QuanLyPhimConst/QuanLyPhimConst";

const stateDefault = {
    listPhim: [],
    chiTietPhim: {}
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case GET_PHIM_DANG_CHIEU: {
            state.listPhim = action.mangPhim;
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
