import { EDIT_MOVIE, EDIT_USER, GET_CUM_RAP, GET_LIST_NGUOI_DUNG, SET_DANH_SACH_TIM_KIEM, THONG_TIN_PHIM } from "../constants/AdminQuanLyConst/AdminQuanLyConst";

const initialState = {
    danhSachNguoiDung: [],
    danhSachTimKiem: [],
    editNguoiDung: {},
    editMovie: {},
    phimInfo: {},
    listCumRap: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_NGUOI_DUNG: {
            state.danhSachNguoiDung = action.danhSachNguoiDung;
            return { ...state }
        }
        case SET_DANH_SACH_TIM_KIEM: {
            state.danhSachTimKiem = action.danhSachTimKiem;
            return { ...state }
        }
        case EDIT_USER: {
            state.editNguoiDung = action.dataUser
            return { ...state }
        }
        case EDIT_MOVIE: {
            state.editMovie = action.dataMovie
            return { ...state }
        }
        case GET_CUM_RAP: {
            state.listCumRap = action.listCumRap
            return { ...state }
        }
        case THONG_TIN_PHIM: {
            state.phimInfo = action.phimInfo
            return { ...state }
        }
        default:
            return { ...state }
    }
}
