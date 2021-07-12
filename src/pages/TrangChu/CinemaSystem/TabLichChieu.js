import { Tag } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import _ from 'lodash'


export default function TabLichChieu(props) {
    const lichChieu = props.lichChieu
    // console.log('lichChieu', lichChieu);
    function removeAccents(str) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
    }
    return (
        <div>
            <div className="lichChieu">
                {lichChieu.danhSachPhim?.slice(0, 10).map((phim, index2) => {
                    return <div className="pb-3" key={index2} >
                        <div className=" d-flex mb-4" style={{ alignItems: 'center' }}>
                            <div className="col-3 d-none d-md-block col-lg-2">
                                <NavLink to={`/chi-tiet-phim/${phim.maPhim}-${_.kebabCase(_.deburr((removeAccents(phim.tenPhim))))}`} ><span><img className="lichChieu_img" src={phim.hinhAnh} style={{ width: '100px', height: '150px', borderRadius: 3 }} alt="" /></span></NavLink>
                            </div>
                            <div className="col-9 col-sm-12 col-md-8">
                                <div className="mb-3">
                                    {index2 % 2 === 0 ? index2 % 3 === 0 ?
                                        <span className="mr-3 lichChieu_ageType">C16</span> :
                                        <span className="mr-3 lichChieu_ageTypeP">P</span> :
                                        <span className="mr-3 lichChieu_ageType">C18</span>}
                                    <span className="lichChieu_tenPhim">{phim.tenPhim}</span>
                                    <p className="my-2" style={{ fontStyle: 'italic', fontSize: '13px', color: '#949494' }}>120 phút / iMDb - 8.0</p>
                                </div>
                                <div className="row w-100">
                                    {phim.lstLichChieuTheoPhim?.slice(0, 8).map((lstChieu, index) => {
                                        return <NavLink key={index} className="col-12 col-sm-6 col-md-4 col-lg-3" to={`/chi-tiet-phong-ve/${lstChieu.maLichChieu}`}>
                                            <Tag className="m-1 p-1 lichChieu_tagTimes" color="#2db7f5" style={{ fontSize: '15px' }}> {moment(lstChieu.ngayChieuGioChieu).format("hh:mm A")} </Tag>
                                        </NavLink>
                                    })}
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                })}
            </div>
        </div>
    )
}
