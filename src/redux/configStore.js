
import { applyMiddleware, combineReducers, createStore } from 'redux'
// middleWareThunk
import reduxThunk from 'redux-thunk'
// middleWareSaga 
import createMiddlewareSaga from 'redux-saga';
// import { rootSaga } from './sagas/rootSaga';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer'
import { HeThongRapReducer } from './reducers/HeThongRapReducer'
import PhongVeReducer from './reducers/PhongVeReducer'
import { NguoiDungReducer } from './reducers/NguoiDungReducer'
import AdminQuanLyReducer from './reducers/AdminQuanLyReducer'
import LoadingReducer from './reducers/LoadingReducer'

const middlewareSaga = createMiddlewareSaga();

const rootReducer = combineReducers({
    // Reducer khai báo tại đây
    QuanLyPhimReducer,
    HeThongRapReducer,
    PhongVeReducer,
    NguoiDungReducer,
    AdminQuanLyReducer,
    LoadingReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk, middlewareSaga));
// gọi saga
// middlewareSaga.run(rootSaga);

export default store;