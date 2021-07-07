/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import "../assets/css/ChiTietPhim.css";
import { Rate, Progress } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { layChiTietPhimAction } from "../../../redux/actions/QuanLyPhimAction";
import moment from "moment";
import '../../../../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video'
import img from '../assets/img/play-video.png'
import { Link } from 'react-scroll'
import { history } from "../../../App";


export default function ChiTietPhim(props) {
  const { chiTietPhim } = useSelector((state) => state.QuanLyPhimReducer);
  const dispatch = useDispatch();
  const maPhim = props.match.params.maPhim;
  // console.log("chi tiet phim", chiTietPhim);
  const [isOpen, setOpen] = useState(false)
  const [trailer, setTrailer] = useState()
  useEffect(() => {
    dispatch(layChiTietPhimAction(maPhim));
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bgImg">
      <a className="ml-4" onClick={() => {
        history.goBack()
      }}><i className="fa fa-angle-left back"></i></a>
      <div className="">
        <div className="container">
          <div className="row banner_phim">
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-7 d-flex moTaPhim">
              <div className="picture">
                <img className="thumnail" src={chiTietPhim.hinhAnh} width={220} height={320} alt="" />
                <button className="btn"><img onClick={() => {
                  setOpen(true);
                  setTrailer(chiTietPhim.trailer.slice(30))
                }} className="btn_play_video pulsing_2" src={img} alt="" /></button>
              </div>
              <div className="detail ml-4 mt-5 text-white">
                <p className="detail__ngayKhoiChieu text-white ml-1">
                  Ngày khởi chiếu:
                  {moment(chiTietPhim.ngayKhoiChieu).format(" DD.MM.YYYY")}
                </p>
                <div className="row ml-1" style={{ alignItems: "center" }}>
                  <span className="mr-3 detail_ageType" >C16</span>
                  <span className="detail__tenPhim text-white">{chiTietPhim.tenPhim}</span>
                </div>
                <p className="mb-5 mt-2 ml-1" style={{ color: '#e9e9e9', fontSize: '14px' }}>120 phút - 7.4 IMDb - 2D/Digitals</p>

                {/* <p>Thời lượng: {chiTietPhim.thoiLuong}</p> */}
                <Link to="cumRap" smooth={true} duration={500} className="btn_muaVe ml-1">Đặt vé</Link>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-5 mt-5 danhGiaPhim ">
              <div className="circle-score d-flex justify-content-center ">
                <Progress
                  type="circle"
                  percent={chiTietPhim.danhGia * 10}
                  format={() => `${chiTietPhim.danhGia}`}
                />
              </div>
              <div className="detail-feedback text-center">
                <Rate
                  allowHalf
                  value={chiTietPhim.danhGia / 2}
                  disabled={true}
                />
              </div>
            </div>
          </div>
        </div>
        <br id="cumRap"></br>
        <div className="mt-5 container thongTinPhongVe">
          <Menu
            heThongRapChieu={chiTietPhim.heThongRapChieu}
            chiTietPhim={chiTietPhim}
          />
        </div>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={trailer} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
}

