/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './ChiTietPhongVe.module.css'
import './assets/css/ThanhToan.css'
import { layDanhSachPhongVeAction, datVeAction } from '../../redux/actions/PhongVeAction'
import { history } from '../../App';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'
import { Collapse, List } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import '../../components/Background/Background1.css'
import { Drawer } from 'antd';
import ListCombo from './ListCombo/ListCombo';
import ThongTinDatVe from './ThongTinDatVe/ThongTinDatVe';
import ThongTinGhe from './ThongTinGhe/ThongTinGhe';
import cx from 'classnames'
import './ListCombo/css/Drawer.css'
import style1 from './assets/css/ButtonCombo.module.css'

const { Panel } = Collapse;


export default function ChiTietPhongVe(props) {
    const { taiKhoan } = useSelector(state => state.NguoiDungReducer)
    const { lichChieu, danhSachGheDangDat, tongTienCombo, comboDaChon } = useSelector(state => state.PhongVeReducer);
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    useEffect(() => {
        document.title = 'CineJun | Đặt vé';
        dispatch(layDanhSachPhongVeAction(props.match.params.maLichChieu))
        window.scrollTo(0, 0);
    }, [])
    // console.log('tongTienCombo', tongTienCombo);
    // console.log(danhSachGheDangDat);
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
            <ThongTinDatVe lichChieu={lichChieu} />
            <div className="container">
                <ThongTinGhe lichChieu={lichChieu} danhSachGheDangDat={danhSachGheDangDat} />
                <div className="text-center pt-5">
                    {/* <div className="d-flex" style={{ justifyContent: 'center' }}>
                        <div className={style.titleThanhToan}></div>
                    </div> */}
                    <div className={style1.btnThemCombo}>
                        <a className={style1.btn_mix} data-text="Thêm combo" onClick={showDrawer}>Thêm combo</a>
                    </div>
                    <Drawer
                        width='auto'
                        title={<span className={style.title_selected_seats}>Chọn combo</span>}
                        placement="right"
                        closable={true}
                        onClose={onClose}
                        visible={visible}
                        footer={<div className={cx(style.total_price, "text-center")}>
                            <span>Tổng cộng: </span>
                            <span>{tongTienCombo.toLocaleString()} VNĐ</span>
                        </div>}
                    >
                        <ListCombo />
                    </Drawer>
                    <div className="row pt-3 pb-5" style={{ justifyContent: 'center' }}>
                        <div className=" col-10 col-sm-10 col-md-8 col-lg-8 detail_thanhToan">
                            <div>
                                <Collapse style={{ backgroundColor: '#212121' }}
                                    // defaultActiveKey={['1']}
                                    expandIconPosition={'right'}
                                    expandIcon={({ isActive }) => <CaretRightOutlined className="text-white" rotate={isActive ? 90 : 0} />} ghost>
                                    <Panel header={<span className={style.title_selected_seats}>Danh sách ghế đã chọn</span>} key="1" className="site-collapse-custom-panel">
                                        <List
                                            style={{ backgroundColor: '#484848' }}
                                            header={<div className={style.header_list}>
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
                                                                <td className="w-50"><button style={{ border: "none", outline: "none" }} className={cx(style.gheDangDatEx, "text-center")}>{item.stt}</button> </td>
                                                                <td className="w-50 font-weight-bold" style={{ fontSize: '20px', color: '#fadb14' }}> {item.giaVe.toLocaleString()} VNĐ</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </List.Item>
                                            )}
                                        />
                                    </Panel>
                                </Collapse>
                            </div>
                            <div className="mt-1">
                                <Collapse style={{ backgroundColor: '#212121' }}
                                    // defaultActiveKey={['1']}
                                    expandIconPosition={'right'}
                                    expandIcon={({ isActive }) => <CaretRightOutlined className="text-white" rotate={isActive ? 90 : 0} />} ghost>
                                    <Panel header={<span className={style.title_selected_seats}>Danh sách combo đã chọn</span>} key="1" className="site-collapse-custom-panel">
                                        <List
                                            style={{ backgroundColor: '#484848' }}
                                            size="small"
                                            header={<div className={style.header_list}>
                                                <table className="w-100">
                                                    <thead>
                                                        <tr className="d-flex" style={{ fontSize: '14px', justifyContent: 'center' }}>
                                                            <th className="w-50">Combo</th>
                                                            <th className="w-50">Số lượng</th>
                                                            <th className="w-50">Tổng</th>
                                                        </tr>
                                                    </thead>
                                                </table>
                                            </div>}
                                            dataSource={comboDaChon}
                                            renderItem={item => <List.Item>
                                                <table className="w-100">
                                                    <thead></thead>
                                                    <tbody>
                                                        <tr className="d-flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                            <td className="w-50 text-white text-left">{item.name}</td>
                                                            <td className="w-50 text-white">{item.quanlity}</td>
                                                            <td className="w-50 font-weight-bold" style={{ fontSize: '16px', color: '#fadb14' }}> {(item.price * item.quanlity).toLocaleString()} VNĐ</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </List.Item>}
                                        />
                                    </Panel>
                                </Collapse>
                            </div>
                            <div className={cx(style.info_total, " mt-1 d-flex")} style={{ backgroundColor: '#212121', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <table>
                                    <tbody>
                                        <tr className="text-left">
                                            <th className={style.total_seat}> Tổng số ghế: {danhSachGheDangDat.length}</th>
                                        </tr>
                                        <tr>
                                            <th className={style.total_price}>Tổng tiền: {danhSachGheDangDat.reduce((tongTien, gheDD, index) => {
                                                return tongTien += gheDD.giaVe;
                                            }, 0 + tongTienCombo).toLocaleString()} VNĐ</th>
                                        </tr>
                                        <tr className="text-left">
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={cx(style.detailDatve_datVe, " pt-4")}>
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
                                        }} className={style.detailDatve_btnDatve} style={{ border: "none", outline: "none" }}>
                                            <span className="w-100 p-5" style={{ fontSize: 17 }}>ĐẶT VÉ</span>
                                        </button> : <button onClick={() => {
                                            Swal.fire({
                                                title: 'Vui lòng chọn ghế !',
                                                icon: 'warning',
                                                confirmButtonColor: '#f5222d',
                                                confirmButtonText: 'OK'
                                            })
                                        }} className={style.detailDatve_btnDatve} style={{ border: "none", outline: "none" }}>
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

                                        }} className={style.detailDatve_btnDatve} style={{ border: "none", outline: "none" }}>
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
