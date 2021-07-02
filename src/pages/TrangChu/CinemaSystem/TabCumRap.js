/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Tabs } from 'antd';
import './assets/CinemaSystem.css'
import TabLichChieu from './TabLichChieu';
import imgcumRap from './assets/img-cum-rap.jpg'


export default function TabCumRap(props) {
    const { TabPane } = Tabs;

    let cumRap = props.cumRap;
    return (
        <div>
            <Tabs tabPosition="top" defaultActiveKey="0">
                {cumRap.lstCumRap?.map((cr, index) => {
                    return <TabPane key={index} tab={<div className="cumRap" style={{ width: '250px' }}>
                        <div className="row" style={{ width: '250px', alignItems: "center", justifyContent: "space-around" }}>
                            <div className="col-4">
                                <img style={{ borderRadius: '3px', }} src={imgcumRap} width='50px' height="50px"></img>
                            </div>
                            <div className="col-8">
                                <p className="tenCumRap m-0">{cr.tenCumRap}</p>
                                <p className="diaChi m-0">{cr.diaChi}</p>
                                <p className="chiTiet m-0">[Chi tiết]</p>
                            </div>
                        </div>
                    </div>
                    }>
                        <TabLichChieu lichChieu={cr} />
                    </TabPane>
                })}
            </Tabs>
        </div>
    )
}
