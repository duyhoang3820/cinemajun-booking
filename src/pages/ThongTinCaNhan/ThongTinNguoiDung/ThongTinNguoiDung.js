/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { Tabs } from 'antd';
import './ThongTinNguoiDung.css'
import LichSuDatVe from '../LichSuDatVe/LichSuDatVe';
import { history } from '../../../App';
import ThongTinCaNhan from '../ThongTinCaNhan/ThongTinCaNhan';
import '../../../components/Background/Background1.css'

export default function ThongTinNguoiDung() {
    const { TabPane } = Tabs;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="py-3" >
            <div className="bg1"></div>
            <div className="star-field">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>
            <a className="ml-4" onClick={() => {
                history.goBack()
            }}><i className="fa fa-angle-left back"></i></a>
            <Tabs className="tablist" defaultActiveKey="1" centered={true}>
                <TabPane tab={<div className="tablist__item"><span><i className="fa fa-user"></i> Thông tin cá nhân</span></div>} key="1">
                    <ThongTinCaNhan />
                </TabPane>
                <TabPane tab={<div className="tablist__item"><span><i className="fa fa-history"></i> Lịch sử đặt vé</span></div>} key="2">
                    <LichSuDatVe />
                </TabPane>
            </Tabs>
        </div>
    )
}
