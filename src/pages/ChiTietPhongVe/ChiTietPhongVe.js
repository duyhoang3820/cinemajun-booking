/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ChiTietPhongVe.css'
import { layDanhSachPhongVeAction, datVeAction } from '../../redux/actions/PhongVeAction'
import { history } from '../../App';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'
import { DAT_GHE } from '../../redux/constants/PhongVeConst/PhongVeConst';
import screen from '../ChiTietDatVe/assets/img/screen.png'
import { Collapse, List } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import '../../components/Background/Background1.css'
const { Panel } = Collapse;



export default function ChiTietPhongVe(props) {
    const { taiKhoan } = useSelector(state => state.NguoiDungReducer)
    const { lichChieu, danhSachGheDangDat } = useSelector(state => state.PhongVeReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        document.title = 'CineJun | Đặt vé';
        dispatch(layDanhSachPhongVeAction(props.match.params.maLichChieu))
        window.scrollTo(0, 0);
    }, [])
    // console.log('lichChieu', lichChieu);
    // console.log(danhSachGheDangDat);

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
                }} disabled={ghe.daDat} style={{ border: "none", outline: "none" }} className={`text-center ghe ${classGheDaDat} ${classGheVip} ${classGheDangDat}`} >
                    <span>{ghe.daDat ? 'X' : ghe.stt}</span>
                </button>
            </Fragment>
        })
    }

    return (
        <div >
            <div className="bg1"></div>
            <div className="star-field">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>
            <a className="ml-4" onClick={() => {
                history.goBack()
            }}><i className="fa fa-angle-left back"></i></a>
            <div className="container py-5">
                <div className="row" style={{ justifyContent: 'center' }}>
                    <div className="col-12 col-sm-12 col-md-4 py-3">
                        <div className="d-flex" style={{ justifyContent: 'center' }}>
                            <img src={lichChieu.thongTinPhim?.hinhAnh} style={{ borderRadius: '10px', }} alt="" className="thumnailImg" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 py-3">
                        <h3 style={{ fontSize: '25px' }} className="text-danger font-weight-bold mb-5">{lichChieu.thongTinPhim?.tenPhim} </h3>
                        <div className="font-weight-bold text-white">
                            <p className="cluster__info"><span className="mr-2 text-warning">Địa điểm:</span> {lichChieu.thongTinPhim?.diaChi}</p>
                            <p className="cluster__info"><span className="mr-2 text-warning">Cụm rạp:</span> {lichChieu.thongTinPhim?.tenCumRap}</p>
                            <p className="cluster__info"><span className="mr-2 text-warning">Ngày chiếu:</span> {lichChieu.thongTinPhim?.ngayChieu}</p>
                            <p className="cluster__info"><span className="mr-2 text-warning">Giờ chiếu:</span> {lichChieu.thongTinPhim?.gioChieu}</p>
                            <p className="cluster__info"><span className="mr-2 text-warning">Rạp:</span> {lichChieu.thongTinPhim?.tenRap}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="text-center scrollCinema">
                    <div className="d-flex" style={{ justifyContent: 'center' }}>
                        <div className="titleChonGhe "></div>
                    </div>
                    <div className="row py-5" style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <div className="d-flex" style={{ justifyContent: 'space-around', alignItems: 'center' }}>
                            <button className="gheEx"></button>
                            <span className="text-white ml-2">Ghế thường</span>
                        </div>
                        <div className="d-flex" style={{ justifyContent: 'space-around', alignItems: 'center' }}>
                            <button className="gheVipEx"></button>
                            <span className="text-white ml-2">Ghế VIP</span>
                        </div>
                        <div className="d-flex" style={{ justifyContent: 'space-around', alignItems: 'center' }}>
                            <button className="gheDaDatEx"></button>
                            <span className="text-white ml-2">Ghế đã đặt</span>
                        </div>
                    </div>
                    <div className="seatCinema ">
                        <img src={screen} alt="" width="1100px" />
                        <div className="seats" style={{ gridColumn: 16 }}>
                            {renderDanhSachGhe()}
                        </div>
                    </div>
                </div>
                <div className="text-center pt-5">
                    <div className="d-flex" style={{ justifyContent: 'center' }}>
                        <div className="titleThanhToan "></div>
                    </div>
                    <div className="row pt-3 pb-5" style={{ justifyContent: 'center' }}>
                        <div className=" col-10 col-sm-10 col-md-8 col-lg-8 mt-5 detailTicket">
                            <Collapse style={{ backgroundColor: '#00474f' }}
                                // defaultActiveKey={['1']}
                                expandIconPosition={'right'}
                                expandIcon={({ isActive }) => <CaretRightOutlined className="text-white" rotate={isActive ? 90 : 0} />} ghost>
                                <Panel header={<span className="title_selected_seats">Danh sách ghế đã chọn</span>} key="1" className="site-collapse-custom-panel">
                                    <List
                                        header={<div className="header_list">
                                            <table className="w-100">
                                                <thead>
                                                    <tr className="text-center" style={{ fontSize: '18px' }}>
                                                        <th className="w-50">Mã ghế</th>
                                                        <th className="w-50">Giá vé</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>}
                                        dataSource={danhSachGheDangDat}
                                        renderItem={item => (
                                            <List.Item>
                                                <table className="w-100">
                                                    <thead></thead>
                                                    <tbody>
                                                        <tr className="text-center">
                                                            <td className="w-50"><button className="text-center gheDangDatEx">{item.stt}</button> </td>
                                                            <td className="w-50 font-weight-bold" style={{ fontSize: '20px', color: '#1890ff' }}> {item.giaVe.toLocaleString()} VNĐ</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </List.Item>
                                        )}
                                    />
                                </Panel>
                            </Collapse>

                            <div className="info_total mt-1" style={{ backgroundColor: '#00474f' }}>
                                <table>
                                    <tbody>
                                        <tr className="text-left">
                                            <th className="total_seat"> Tổng số ghế: {danhSachGheDangDat.length}</th>
                                        </tr>
                                        <tr>
                                            <th className="total_price">Tổng tiền: {danhSachGheDangDat.reduce((tongTien, gheDD, index) => {
                                                return tongTien += gheDD.giaVe;
                                            }, 0).toLocaleString()} VNĐ</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="datVe pt-4">
                                {taiKhoan.trim() !== '' ?
                                    danhSachGheDangDat.length !== 0 ?
                                        <button onClick={() => {
                                            Swal.fire({
                                                title: 'Bạn có chắc muốn thanh toán!',
                                                text: "Hãy kiểm tra thông tin trước khi thanh toán!",
                                                icon: 'question',
                                                showCancelButton: true,
                                                confirmButtonColor: '#52c41a',
                                                cancelButtonColor: '#f5222d',
                                                cancelButtonText: "Hủy bỏ",
                                                confirmButtonText: 'Xác nhận'
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    let objectApi = {
                                                        "maLichChieu": props.match.params.maLichChieu,
                                                        "danhSachVe": danhSachGheDangDat,
                                                        "taiKhoanNguoiDung": taiKhoan
                                                    }
                                                    dispatch(datVeAction(objectApi))
                                                }
                                            })
                                        }} className=" btn_DatVe" style={{ border: "none", outline: "none" }}>
                                            <span className="w-100 p-5" style={{ fontSize: 17 }}>ĐẶT VÉ</span>
                                        </button> : <button onClick={() => {
                                            Swal.fire({
                                                title: 'Vui lòng chọn ghế !',
                                                icon: 'warning',
                                                confirmButtonColor: '#f5222d',
                                                confirmButtonText: 'OK'
                                            })
                                        }} className="btn_DatVe" style={{ border: "none", outline: "none" }}>
                                            <span className="w-100 p-5" style={{ fontSize: 17 }}>ĐẶT VÉ</span>
                                        </button> : <button onClick={() => {
                                            Swal.fire({
                                                title: 'Sorry!',
                                                text: "Bạn chưa đăng nhập !",
                                                icon: 'warning',
                                                confirmButtonText: 'OK'
                                            })
                                            setTimeout(function () {
                                                history.push("/dangnhap")
                                            }, 2000);

                                        }} className="btn_DatVe " style={{ border: "none", outline: "none" }}>
                                        <span className="w-100 p-5" style={{ fontSize: 17 }}>ĐẶT VÉ</span>
                                    </button>}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
