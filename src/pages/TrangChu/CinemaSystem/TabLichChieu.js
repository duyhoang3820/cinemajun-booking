import { Tag } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom';
import moment from 'moment';


export default function TabLichChieu(props) {
    const lichChieu = props.lichChieu
    console.log('lichChieu', lichChieu);
    return (
        <div>
            <div className="listShowTimes">
                {lichChieu.danhSachPhim?.slice(0, 5).map((phim, index2) => {
                    return <div className="pb-3" key={index2} >
                        <div className=" d-flex mb-4" style={{ alignItems: 'center' }}>
                            <div className="col-2 d-none d-lg-block">
                                <span><img src={phim.hinhAnh} style={{ width: '100px', height: '150px', borderRadius: 3 }} alt="" /></span>
                            </div>
                            <div className="col-10 col-sm-12 col-md-8">
                                <span className="p-1 px-2 mr-3" style={{ backgroundColor: 'red', color: "white", borderRadius: '3px', fontSize: "12px", fontWeight: 'bold' }}>C16</span><span className="cinemaSystem_tenPhim">{phim.tenPhim}</span>
                                <p style={{fontStyle:'italic',fontSize:'13px',color:'#949494'}}>120 phút / iMDb - 8.0</p>
                                <div className="row w-100">
                                    {phim.lstLichChieuTheoPhim?.slice(0, 8).map((lstChieu, index) => {
                                        return <NavLink key={index} className="col-6 col-sm-4 col-md-4 col-lg-3" to={`/chi-tiet-phong-ve/${lstChieu.maLichChieu}`}>
                                            <Tag className="m-1 p-1 tagTimes" color="#2db7f5" style={{ fontSize: '17px' }}> {moment(lstChieu.ngayChieuGioChieu).format("hh:mm A")} </Tag>
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
