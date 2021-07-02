/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tabs, Tag } from 'antd';
import { LayThongTinLichChieuHeThongRap } from '../../../redux/actions/HeThongRapAction';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import './assets/CinemaSystem.css'
import TabCumRap from './TabCumRap';

export default function CinemaCluster(props) {

    const { lichChieu } = useSelector(state => state.HeThongRapReducer);

    const dispatch = useDispatch();

    const { TabPane } = Tabs;
    const [state, setState] = useState({
        tabPosition: 'left',
    });
    const { tabPosition } = state;

    useEffect(() => {
        dispatch(LayThongTinLichChieuHeThongRap())
    }, [])

    // console.log('lichChieu', lichChieu);

    const renderHeThongRap1 = () => {
        return lichChieu.map((rap, index) => {
            return <TabPane tab={<div className="logo">
                <img className="logoCinema" src={rap.logo} style={{ borderRadius: '50%', }} width='50' height='50' alt="" />
            </div>} key={index} >
                <div className="">
                    <Tabs tabPosition={'top'} defaultActiveKey="0">
                        {rap.lstCumRap.map((cumRap, index1) => {
                            return <TabPane key={index1} tab={<div className="cumRap" style={{ width: '250px' }}>
                                <div style={{ width: '200px', overflow: 'hidden' }}>
                                    <span className="tenCumRap">{cumRap.tenCumRap}</span><br />
                                    <p className="diaChi">{cumRap.diaChi}</p>
                                </div>
                            </div>
                            }>
                                <div className="listShowTimes">
                                    {cumRap.danhSachPhim.slice(0, 7).map((phim, index2) => {
                                        return <div className="pb-3" key={index2} >
                                            <div className=" d-flex mb-4" style={{ alignItems: 'center' }}>
                                                <div className="col-4 d-none d-lg-block">
                                                    <span><img src={phim.hinhAnh} style={{ width: '70px', height: '70px', borderRadius: 5 }} alt="" /></span>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-8">
                                                    <span className="cinemaSystem_tenPhim">{phim.tenPhim}</span>
                                                </div>
                                            </div>
                                            <div className="row w-100 pl-2">
                                                {phim.lstLichChieuTheoPhim.slice(0, 12).map((lstChieu, index) => {
                                                    return <NavLink key={index} className="col-12 col-sm-12 col-md-6 col-lg-3" to={`/chi-tiet-phong-ve/${lstChieu.maLichChieu}`}>
                                                        <Tag className="m-1 p-1 tagTimes" color="#2db7f5" style={{ fontSize: '17px' }}> {moment(lstChieu.ngayChieuGioChieu).format("hh:mm A")} </Tag>
                                                    </NavLink>
                                                })}
                                            </div>
                                            <hr></hr>
                                        </div>
                                    })}
                                </div>
                            </TabPane>
                        })}
                    </Tabs>
                </div>
            </TabPane>
        })
    }

    const renderHeThongRap = () => {
        return lichChieu.map((rap, index) => {
            return <TabPane tab={<div className="logo">
                <img className="logoCinema" src={rap.logo} style={{ borderRadius: '50%', }} width='50' height='50' alt="" />
            </div>} key={index} >
                <div className="">
                    <TabCumRap cumRap={rap} />
                </div>
            </TabPane>
        })
    }




    return (
        <div className="mt-5 pb-4 bg-light">
            <Tabs tabPosition="left">
                {renderHeThongRap()}
            </Tabs>
            
        </div>
    )
}

