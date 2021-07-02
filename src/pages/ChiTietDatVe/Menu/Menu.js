/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Tabs, Tag } from "antd";
import "../assets/css/Menu.css";
import moment from "moment";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;
export default function Menu(props) {
  const { heThongRapChieu, chiTietPhim } = props;
  // console.log(chiTietPhim);
  function callback(key) {
    // console.log(key);
  }

  const [state, setstate] = useState({
    tabPosition: "left",
  });

  const { tabPosition } = state;

  const renderHeThongRap = () => {
    return heThongRapChieu?.map((htr, index) => {
      return (
        <TabPane
          tab={
            <div className="heThongRap d-flex" style={{ justifyContent: 'space-around', alignItems: 'center' }}>
              <img className="logoCinema" src={htr.logo} width={50} height={50} alt="" />
              <span className="ml-3 tenHeThongRap">{htr.tenHeThongRap}</span>
            </div>
          }
          key={index}
        >
          {htr.cumRapChieu?.map((cumRap, index) => {
            return (
              <div key={index}>
                <p className="m-0 font-weight-bold text-white" style={{ fontSize: '20px' }}>{cumRap.tenCumRap}</p>
                <div className="row my-2">
                  {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                    return <NavLink key={index} className="col-12 col-sm-12 col-md-4 col-lg-3" to={`/chi-tiet-phong-ve/${lichChieu.maLichChieu}`}>
                      <Tag className="m-1 p-1 tagTimes" color="#2db7f5" style={{ fontSize: '17px' }}> {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")} </Tag>
                    </NavLink>
                  })}
                </div>
              </div>
            );
          })}
        </TabPane>
      );
    });
  };



  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={callback} centered={true}>
        <TabPane tab={<span className="item__nav">Lịch chiếu</span>} key="1">
          <Tabs tabPosition={tabPosition}>{renderHeThongRap()}</Tabs>
        </TabPane>
        <TabPane tab={<span className="item__nav">Thông tin</span>} key="2">
          <div className="row">
            <div className="col-3">
              <p className="font-weight-bold text-white">Ngày công chiếu:</p>
              <p className="font-weight-bold text-white">Nội dung:</p>
            </div>
            <div className="col-9 text-white">
              <p>{moment(chiTietPhim.ngayKhoiChieu).format("DD.MM.YYYY")}</p>
              <p>{chiTietPhim.moTa}</p>
            </div>
          </div>
          <iframe className="mt-3" width="100%" height="450px" src={chiTietPhim.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </TabPane>
      </Tabs>
    </div>
  );
}
