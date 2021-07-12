/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Tabs, Tag } from "antd";
import "../assets/css/ChiTietLichChieu.css";
import moment from "moment";
import DetailTapCumRap from "./DetailTabCumRap";


const { TabPane } = Tabs;
export default function Menu(props) {
  const { heThongRapChieu, chiTietPhim } = props;
  // console.log('chiTietPhim',chiTietPhim);

  const [state, setstate] = useState({
    tabPosition: "left",
  });

  const { tabPosition } = state;
  const styleClass = (tenCumRap) => {
    let systems = [
      {
        name: 'BHD Star Cineplex',
        color: '#8bc541',
      },
      {
        name: 'cgv',
        color: 'red',
      },
      {
        name: 'CineStar',
        color: '#df0d7a',
      },
      {
        name: 'Lotte Cinema',
        color: '#ca4137',
      },
      {
        name: 'MegaGS',
        color: '#e5a813',
      },
      {
        name: 'Galaxy Cinema',
        color: 'orange',
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
  const renderHeThongRap = () => {
    return heThongRapChieu?.map((htr, index) => {
      const detail = styleClass(htr.tenHeThongRap)
      return (
        <TabPane
          tab={
            <div className="detailShowtime_logoSystem d-flex" style={{ justifyContent: 'space-around', alignItems: 'center' }}>
              <img className="detailShowtime_logoCinema" src={htr.logo} width={50} height={50} alt="" />
              <span className="d-none d-md-block ml-3 detailShowtime_tenHeThongRap" style={{ color: detail.color }}>{htr.tenHeThongRap}</span>
            </div>
          }
          key={index}
        >
          <DetailTapCumRap cumRap={htr.cumRapChieu} />
        </TabPane>
      );
    });
  };

  return (
    <div>
      <Tabs defaultActiveKey="1" centered={true} style={{ borderRadius: '5px' }}>
        <TabPane tab={<span className="detailShowtime_typeTabpane">Lịch chiếu</span>} key="1">
          <Tabs className="bg-light" tabPosition={tabPosition}>{renderHeThongRap()}</Tabs>
        </TabPane>
        <TabPane tab={<span className="detailShowtime_typeTabpane">Thông tin</span>} key="2">
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
