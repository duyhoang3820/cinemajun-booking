/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import './ThongTinNguoiDung.css'
import LichSuDatVe from '../LichSuDatVe/LichSuDatVe';
import { history } from '../../../App';
import ThongTinCaNhan from '../ThongTinCaNhan/ThongTinCaNhan';
import Background1 from '../../../components/Background/Background1';

export default function ThongTinNguoiDung() {
    const { TabPane } = Tabs;
    useEffect(() => {
        document.title = 'CineJun | Thông tin';
        window.scrollTo(0, 0);
    }, [])
    const [state, setstate] = useState({
        activeKey: "1"
    })
    const changeTitle = (activeKey) => {
        if (activeKey === '1') {
            return document.title = 'CineJun | Thông tin'
        }
        else {
            document.title = 'CineJun | Lịch sử'
        }
    }

    return (
        <div className="py-3" >
            {changeTitle(state.activeKey)}
            <Background1/>
            <a className="ml-4" onClick={() => {
                history.goBack()
            }}><i className="fa fa-angle-left back"></i></a>
            <Tabs className="tablist" defaultActiveKey="1" centered={true}>
                <TabPane tab={<div onClick={() => {
                    setstate({
                        activeKey: '1'
                    })
                }} className="tablist__item"><span><i className="fa fa-user"></i> Thông tin cá nhân</span></div>} key="1">
                    <ThongTinCaNhan />
                </TabPane>
                <TabPane tab={<div onClick={() => {
                    setstate({
                        activeKey: '2'
                    })
                }} className="tablist__item"><span><i className="fa fa-history"></i> Lịch sử đặt vé</span></div>} key="2">
                    <LichSuDatVe />
                </TabPane>
            </Tabs>
        </div>
    )
}
