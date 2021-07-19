/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import ChiTietLichChieu from "../ChiTietLichChieu/ChiTietLichChieu";
import style from "../assets/css/ChiTietPhim.module.css";
import { Rate, Progress } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { layChiTietPhimAction } from "../../../redux/actions/QuanLyPhimAction";
import moment from "moment";
import '../../../../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video'
import img from '../assets/img/play-video.png'
import { Link } from 'react-scroll'
import { history } from "../../../App";
import cx from 'classnames'
import Background2 from "../../../components/Background/Background2";


export default function ChiTietPhim(props) {
  const { chiTietPhim } = useSelector((state) => state.QuanLyPhimReducer);
  // console.log('chiTietPhim',chiTietPhim);
  const dispatch = useDispatch();
  const maPhim = props.match.params.maPhim;
  // console.log("chi tiet phim", chiTietPhim);
  const [isOpen, setOpen] = useState(false)
  const [trailer, setTrailer] = useState()
  useEffect(() => {
    document.title = 'CineJun | Chi tiết';
    dispatch(layChiTietPhimAction(maPhim));
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.bg_filmDetail}>
      <Background2 />
      <a className="ml-4" onClick={() => {
        history.goBack()
      }}><i className="fa fa-angle-left back"></i></a>
      <div className="">
        <div className="container">
          <div className={cx(style.detail_banner_phim, "row")}>
            <div className={cx(style.detail_moTaPhim, "col-12 col-sm-12 col-md-8 row")}>
              <div className={cx(style.detail_picture, " d-flex col-12 col-sm-12 col-md-5")}>
                <img className={style.detail_thumnail} src={chiTietPhim.hinhAnh} width={220} height={320} alt="" />
                <a><img onClick={() => {
                  setOpen(true);
                  setTrailer(chiTietPhim.trailer.slice(30))
                }} className={cx(style.detail_btn_play_video, style.pulsing_2)} src={img} alt="" /></a>
              </div>
              <div className={cx(style.detail, " text-white col-12 col-sm-12 col-md-7 d-flex")}>
                <div>
                  <p className={cx(style.detail__ngayKhoiChieu, " text-white ml-1")}>
                    Ngày khởi chiếu:
                    {moment(chiTietPhim.ngayKhoiChieu).format(" DD.MM.YYYY")}
                  </p>
                  <span className={cx(style.detail_ageType, " mr-2 d-none d-md-block")} >C16</span>
                  <span className={cx(style.detail__tenPhim, " text-white")}>{chiTietPhim.tenPhim} <span className="d-block d-md-none">(C16)</span></span>
                  <p className="mb-5 mt-2 ml-1" style={{ color: '#e9e9e9', fontSize: '14px' }}>120 phút - 7.4 IMDb - 2D/Digitals</p>
                  <div className="d-flex" style={{ alignItems: "center", justifyContent: 'flex-start' }}>
                    <Link to="cumRap" smooth={true} duration={500} className={style.detail_btn_muaVe}>Mua vé</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none d-md-block col-12 col-sm-12 col-md-4">
              <div className="circle-score d-flex justify-content-center ">
                <Progress
                  type="circle"
                  percent={chiTietPhim.danhGia * 10}
                  format={() => <span className={cx(style.detail__danhGia, "text-white")}>
                    {chiTietPhim.danhGia}
                  </span>}
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
        <div className={cx(style.thongTinPhongVe, "mt-5 container")}>
          <ChiTietLichChieu
            heThongRapChieu={chiTietPhim.heThongRapChieu}
            chiTietPhim={chiTietPhim}
          />
        </div>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={trailer} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
}

