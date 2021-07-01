import { GET_LICH_CHIEU_HE_THONG_RAP } from "../constants/HeThongRapConst/HeThongRapConst";

const initialState = {
    lichChieu: [],
}

export const HeThongRapReducer = (state = initialState, action) => {
    switch (action.type) {
       
        case GET_LICH_CHIEU_HE_THONG_RAP: {
            state.lichChieu = action.lichChieu;
            return { ...state }
        }

        default:
            return { ...state }
    }
}
