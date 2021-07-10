/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tabs } from 'antd';
import { LayThongTinLichChieuHeThongRap } from '../../../redux/actions/HeThongRapAction';
import './assets/css/CinemaSystem.css'
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



    const renderHeThongRap = () => {
        return lichChieu.map((rap, index) => {
            return <TabPane tab={<div className="cinemaSystem_logo">
                <img className="cluster_logo" src={rap.logo} style={{ borderRadius: '50%', }} width='50' height='50' alt="" />
            </div>} key={index} >
                <div className="">
                    <TabCumRap cumRap={rap.lstCumRap} />
                </div>
            </TabPane>
        })
    }
    return (
        <div className="mt-5 pb-4 bg-light cinemaSystem">
            <Tabs tabPosition="left" centered={true}>
                {renderHeThongRap()}
            </Tabs>
        </div>
    )
}

