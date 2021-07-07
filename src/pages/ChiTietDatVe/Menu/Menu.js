/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Tabs, Tag } from "antd";
import "../assets/css/Menu.css";
import moment from "moment";
import MenuTabCumRap from "./MenuTabCumRap";


const { TabPane } = Tabs;
export default function Menu(props) {
  const { heThongRapChieu, chiTietPhim } = props;
  // console.log('chiTietPhim',chiTietPhim);

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
              <span className="d-none d-md-block ml-3 tenHeThongRap">{htr.tenHeThongRap}</span>
            </div>
          }
          key={index}
        >
          <MenuTabCumRap cumRap={htr.cumRapChieu} />
        </TabPane>
      );
    });
  };

  return (
    <div>
      <Tabs defaultActiveKey="1" centered={true} style={{borderRadius:'5px'}}>
        <TabPane tab={<span className="item__nav">Lịch chiếu</span>} key="1">
          <Tabs className="bg-light" tabPosition={tabPosition}>{renderHeThongRap()}</Tabs>
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
