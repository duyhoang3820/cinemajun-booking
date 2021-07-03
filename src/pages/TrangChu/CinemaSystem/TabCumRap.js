/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Tabs } from 'antd';
import './assets/CinemaSystem.css'
import TabLichChieu from './TabLichChieu';
import mega from './assets/mega.jpg'
import bhdstar from './assets/bhd-star.png'
import cgv from './assets/cgv.jpg'
import cns from './assets/cinestar.jpg'
import lotte from './assets/lotte-cinema.jpg'
import galaxy from './assets/galaxy.jpg'


export default function TabCumRap(props) {
    const { TabPane } = Tabs;
    let cumRap = props.cumRap;
    console.log('cumRap', cumRap);
    const splitCumRap = (tenCumRap) => {
        return tenCumRap.split(' - ')
    }
    const styleClass = (tenCumRap) => {
        let systems = [
            {
                name: 'BHD Star',
                color: '#8bc541',
                img: bhdstar
            },
            {
                name: 'CGV',
                color: 'red',
                img: cgv
            },
            {
                name: 'CNS',
                color: '#df0d7a',
                img: cns
            },
            {
                name: 'Lotte',
                color: '#ca4137',
                img: lotte
            },
            {
                name: 'MegaGS',
                color: '#e5a813',
                img: mega
            },
            {
                name: 'GLX',
                color: 'orange',
                img: galaxy
            },
        ]
        let arr = systems.find(item => {
            // console.log('item',item);
            // console.log('tenCumRap',tenCumRap);
            // console.log('text',tenCumRap.includes(item.name));

            return tenCumRap.includes(item.name)
        })
        // console.log(arr);
        return arr
    }
    return (
        <div>
            <Tabs tabPosition="top" defaultActiveKey="0">
                {cumRap.lstCumRap?.map((cr, index) => {
                    const detail = styleClass(cr.tenCumRap)
                    return <TabPane key={index} tab={<div className="cumRap" style={{ width: '250px' }}>
                        <div className="row pb-2" style={{ width: '250px', alignItems: "center", justifyContent: "space-around" }}>
                            <div className="col-4">
                                <img style={{ borderRadius: '3px', }} src={detail.img} width='50px' height="50px"></img>
                            </div>
                            <div className="col-8">
                                <p className="tenCumRap m-0">
                                    <span style={{ color: detail.color }}>
                                        {splitCumRap(cr.tenCumRap)[0]}</span>
                                    <span style={{ color: 'black' }}> - {splitCumRap(cr.tenCumRap)[1]}</span></p>
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
