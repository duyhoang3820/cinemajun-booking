import { Tag } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom';
import moment from 'moment';


export default function MenuTabLichChieu(props) {
    const { lichChieu, imgCumRap } = props
    // console.log('lichChieu', lichChieu);
    const splitCumRap = (tenCumRap) => {
        return tenCumRap.split(' - ')
    }
    const styleClass = (tenCumRap) => {
        let systems = [
            {
                name: 'BHD Star',
                color: '#8bc541',
            },
            {
                name: 'CGV',
                color: 'red',
            },
            {
                name: 'CNS',
                color: '#df0d7a',
            },
            {
                name: 'Lotte',
                color: '#ca4137',
            },
            {
                name: 'MegaGS',
                color: '#e5a813',
            },
            {
                name: 'GLX',
                color: 'orange',
            },
        ]
        let arr = systems.find(item => {
            return tenCumRap.includes(item.name)
        })
        return arr
    }
    const detail = styleClass(lichChieu.tenCumRap)
    return (
        <div className="chiTietPhim_lichChieu">
            <div className=" d-flex mb-4" style={{ alignItems: 'center' }}>
                <div className="col-3 d-none d-lg-block col-lg-2">
                    <span><img className="" src={imgCumRap} style={{ width: '100px', height: '150px', borderRadius: 3 }} alt="" /></span>
                </div>
                <div className="col-9 col-sm-12 col-md-8">
                    <div className="mb-3">
                        <p className="chiTietPhim_tenCumRap m-1">
                            <span style={{ color: detail.color }}>
                                {splitCumRap(lichChieu.tenCumRap)[0]}</span>
                            <span style={{ color: 'black' }}> - {splitCumRap(lichChieu.tenCumRap)[1]}</span>
                        </p>
                        <p className="my-2" style={{ fontStyle: 'italic', fontSize: '13px', color: '#949494' }}>{ }</p>
                    </div>
                    <div className="row">
                        {lichChieu.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                            return <NavLink key={index} className="col-12 col-sm-6 col-md-4 col-lg-3" to={`/chi-tiet-phong-ve/${lichChieu.maLichChieu}`}>
                                <Tag className="m-1 p-1 lichChieu_tagTimes" color="#2db7f5" style={{ fontSize: '15px' }}> {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")} </Tag>
                            </NavLink>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
