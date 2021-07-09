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
import '../../../components/Background/Background2.css'


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
    <div className="bg_filmDetail">
      <div className="bg2"></div>
      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
      <a className="ml-4" onClick={() => {
        history.goBack()
      }}><i className="fa fa-angle-left back"></i></a>
      <div className="">
        <div className="container">
          <div className="row banner_phim">
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-7 d-flex moTaPhim">
              <div className="row" style={{ alignItems: "center", justifyContent: 'center' }}>
                <div className="picture d-flex col-12 col-md-6" style={{ alignItems: "center", justifyContent: 'center' }}>
                  <img className="thumnail" src={chiTietPhim.hinhAnh} width={220} height={320} alt="" />
                  <button className="" style={{ border: 'none', outline: 'none' }}><img onClick={() => {
                    setOpen(true);
                    setTrailer(chiTietPhim.trailer.slice(30))
                  }} className="btn_play_video pulsing_2" src={img} alt="" /></button>
                </div>
                <div className="detail text-white col-6">
                  <div>
                    <p className="detail__ngayKhoiChieu text-white ml-1">
                      Ngày khởi chiếu:
                      {moment(chiTietPhim.ngayKhoiChieu).format(" DD.MM.YYYY")}
                    </p>
                    <span className="detail_ageType mr-2 d-none d-md-block" >C16</span>
                    <span className="detail__tenPhim text-white">{chiTietPhim.tenPhim} <span className="d-block d-md-none">(C16)</span></span>
                    <p className="mb-5 mt-2 ml-1" style={{ color: '#e9e9e9', fontSize: '14px' }}>120 phút - 7.4 IMDb - 2D/Digitals</p>
                  </div>
                  <div className="d-flex" style={{ alignItems: "center", justifyContent: 'center' }}>
                    <Link to="cumRap" smooth={true} duration={500} className="btn_muaVe">Mua vé</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none d-md-block col-12 col-sm-12 col-md-4 col-lg-4 col-xl-5 mt-5 danhGiaPhim ">
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

