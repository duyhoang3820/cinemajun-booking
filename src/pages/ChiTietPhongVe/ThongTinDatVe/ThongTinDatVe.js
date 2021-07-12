import React from 'react'
import style from './ThongTinDatVe.module.css'

export default function ThongTinDatVe(props) {
    const { lichChieu } = props;
    return (
        <div>
            <div className="container py-5">
                <div className="row" style={{ justifyContent: 'center' }}>
                    <div className="col-12 col-sm-12 col-md-4 py-3">
                        <div className="d-flex" style={{ justifyContent: 'center' }}>
                            <img src={lichChieu.thongTinPhim?.hinhAnh} style={{ borderRadius: '10px', }} alt="" className={style.thongTinDatVe_thumnail} />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 py-3 d-flex" style={{ justifyContent: 'center' }}>
                        <div>
                            <h3 style={{ fontSize: '25px' }} className="text-danger text-center font-weight-bold mb-5">{lichChieu.thongTinPhim?.tenPhim} </h3>
                            <div className="font-weight-bold text-white">
                                <p className={style.thongTinDatVe_clusterInfo}><span className="mr-2 text-warning">Địa điểm:</span> {lichChieu.thongTinPhim?.diaChi}</p>
                                <p className={style.thongTinDatVe_clusterInfo}><span className="mr-2 text-warning">Cụm rạp:</span> {lichChieu.thongTinPhim?.tenCumRap}</p>
                                <p className={style.thongTinDatVe_clusterInfo}><span className="mr-2 text-warning">Ngày chiếu:</span> {lichChieu.thongTinPhim?.ngayChieu}</p>
                                <p className={style.thongTinDatVe_clusterInfo}><span className="mr-2 text-warning">Giờ chiếu:</span> {lichChieu.thongTinPhim?.gioChieu}</p>
                                <p className={style.thongTinDatVe_clusterInfo}><span className="mr-2 text-warning">Rạp:</span> {lichChieu.thongTinPhim?.tenRap}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
