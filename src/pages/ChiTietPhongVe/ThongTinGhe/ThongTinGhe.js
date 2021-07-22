import React from 'react'
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { DAT_GHE } from '../../../redux/constants/PhongVeConst/PhongVeConst';
import screen from '../../ChiTietPhongVe/assets/img/screen.png'
import style from './ThongTinGhe.module.css'
import cx from 'classnames'

export default function ThongTinGhe(props) {
    const dispatch = useDispatch();
    const { lichChieu, danhSachGheDangDat } = props;
    const renderDanhSachGhe = () => {
        return lichChieu.danhSachGhe?.map((ghe, index) => {
            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);
            let classGheDangDat = '';
            if (indexGheDD !== -1) {
                classGheDangDat = 'gheDangDat'
            }
            let classGheDaDat = ghe.daDat ? 'gheDaDat' : '';
            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            return <Fragment key={index}>
                <button onClick={() => {
                    dispatch({
                        type: DAT_GHE,
                        gheDangDat: ghe
                    })
                }} disabled={ghe.daDat} style={{ border: "none", outline: "none" }} className={cx(`text-center `, style.ghe, style[classGheDaDat], style[classGheVip], style[classGheDangDat])} >
                    <span>{ghe.daDat ? 'X' : ghe.stt}</span>
                </button>
            </Fragment>
        })
    }
    return (
        <div>
            <div className="row py-5" style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
                <div className="d-flex col-12 col-sm-6 col-md-3 text-left mb-2" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <button style={{ border: "none", outline: "none" }} className={style.gheEx}></button>
                    <span className="text-white ml-2" style={{ width: '100px' }}>Ghế thường</span>
                </div>
                <div className="d-flex col-12 col-sm-6 col-md-3 text-left mb-2" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <button style={{ border: "none", outline: "none" }} className={style.gheVipEx}></button>
                    <span className="text-white ml-2" style={{ width: '100px' }}>Ghế VIP</span>
                </div>
                <div className="d-flex col-12 col-sm-6 col-md-3 text-left mb-2" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <button style={{ border: "none", outline: "none" }} className={style.gheDaDatEx}></button>
                    <span className="text-white ml-2" style={{ width: '100px' }}>Ghế đã đặt</span>
                </div>
                <div className="d-flex col-12 col-sm-6 col-md-3 text-left mb-2" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <button style={{ border: "none", outline: "none" }} className={style.gheDangDatEx}></button>
                    <span className="text-white ml-2" style={{ width: '100px' }}>Ghế đang chọn</span>
                </div>
            </div>
            <div className={cx(style.thongTinGhe_scrollCinema, "text-center")}>
                {/* <div className="d-flex" style={{ justifyContent: 'center' }}>
                    <div className={style.titleChonGhe}></div>
                </div> */}
                <div className={style.thongTinGhe_seatCinema}>
                    <img src={screen} alt="" width="1100px" />
                    <div className={style.thongTinGhe_seats} style={{ gridColumn: 16 }}>
                        {renderDanhSachGhe()}
                    </div>
                </div>
            </div>
        </div>
    )
}
