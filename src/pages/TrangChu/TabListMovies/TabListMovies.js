/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick';
import { layDanhSachPhimAction } from '../../../redux/actions/QuanLyPhimAction';
import { settingTabListMovies } from './settingTabListMovies';
import style from './assets/css/TabListMovies.module.css'
import './assets/css/Tabpane_TablistMovie.css'
import '../../../assets/css/sclick/sclick_next.css'
import { Card, Rate, Tabs } from 'antd';
import img from '../../../assets/img/play-video.png'
import ModalVideo from 'react-modal-video'
import '../../../../node_modules/react-modal-video/scss/modal-video.scss';
import { NavLink } from 'react-router-dom';
import { history } from '../../../App';
import cx from 'classnames'

export default function TabListMovies(props) {

    const { listPhim } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();
    // console.log('listPhim', listPhim);
    useEffect(() => {
        dispatch(layDanhSachPhimAction())
    }, []);

    const { Meta } = Card;
    const { TabPane } = Tabs;
    const [state, setstate] = useState({ size: 'small' })
    const { size } = state.size;
    const [isOpen, setOpen] = useState(false);
    const [trailer, setTrailer] = useState();

    const renderUpCommingMoviesList = () => {
        return listPhim.slice(16, 32).map((phim, index) => {
            return <Card className={`${style.card_item} mt-3`} hoverable style={{ width: 240, }} key={index} >
                <div className="mb-2 text-center">
                    {<img onClick={() => {
                        history.push(`/chi-tiet-phim/${phim.maPhim}-${phim.biDanh}`)
                    }} className={style.card_item_img} src={phim.hinhAnh} alt={phim.moTa} />}
                    {index % 4 === 0 ? <span ><Meta onClick={() => {
                        history.push(`/chi-tiet-phim/${phim.maPhim}-${phim.biDanh}`)
                    }} className="mt-1 font-weight-bold" title={<p className={`${style.card_item_filmName} m-0`}>{phim.tenPhim}</p>} description={<p className={`${style.card_item_filmName} m-0`}><span className={style.card_item_ageType}>C16</span>IMDb: {phim.danhGia}</p>} /></span> :
                        <span ><Meta onClick={() => {
                            history.push(`/chi-tiet-phim/${phim.maPhim}-${phim.biDanh}`)
                        }} className="mt-1 font-weight-bold" title={<p className={`${style.card_item_filmName} m-0`}>{phim.tenPhim}</p>} description={<p className={`${style.card_item_filmName} m-0`}><span className={style.card_item_ageTypeP}>P</span>IMDb: {phim.danhGia}</p>} /></span>}
                    <span><Rate className={style.card_item_rate} allowHalf defaultValue={phim.danhGia / 2} /></span>
                </div>
                <div className={`${style.card_item_btnHover}`}>
                    <button className="btn"><img onClick={() => {
                        setOpen(true);
                        setTrailer(phim.trailer.slice(30))
                    }} className={cx(style.btn_play_video, style.pulsing_2)} src={img} alt="" /></button>
                    <NavLink to={`/chi-tiet-phim/${phim.maPhim}-${phim.biDanh}`} className={style.card_item_btnDatve}>Xem chi tiết</NavLink>
                </div>
            </Card >
        })
    }
    const renderCurrentMoviesList = () => {
        return listPhim.slice(0, 16).map((phim, index) => {
            return <Card className={`${style.card_item} mt-3`} hoverable style={{ width: 240, }} key={index} >
                <div className="mb-2 text-center">
                    {<img onClick={() => {
                        history.push(`/chi-tiet-phim/${phim.maPhim}-${phim.biDanh}`)
                    }} className={style.card_item_img} src={phim.hinhAnh} alt={phim.moTa} />}
                    {index % 2 === 0 ? index % 3 === 0 ? <span ><Meta onClick={() => {
                        history.push(`/chi-tiet-phim/${phim.maPhim}-${phim.biDanh}`)
                    }} className="mt-1 font-weight-bold" title={<p className={`${style.card_item_filmName} m-0`}>{phim.tenPhim}</p>} description={<p className={`${style.card_item_filmName} m-0`}><span className={style.card_item_ageTypeP}>P</span>IMDb: {phim.danhGia}</p>} /></span> :
                        <span ><Meta onClick={() => {
                            history.push(`/chi-tiet-phim/${phim.maPhim}-${phim.biDanh}`)
                        }} className="mt-1 font-weight-bold" title={<p className={`${style.card_item_filmName} m-0`}>{phim.tenPhim}</p>} description={<p className={`${style.card_item_filmName} m-0`}><span className={style.card_item_ageType}>C18</span>IMDb: {phim.danhGia}</p>} /></span> :
                        <span ><Meta onClick={() => {
                            history.push(`/chi-tiet-phim/${phim.maPhim}-${phim.biDanh}`)
                        }} className="mt-1 font-weight-bold" title={<p className={`${style.card_item_filmName} m-0`}>{phim.tenPhim}</p>} description={<p className={`${style.card_item_filmName} m-0`}><span className={style.card_item_ageType}>C16</span>IMDb: {phim.danhGia}</p>} /></span>}
                    <span><Rate className={style.card_item_rate} allowHalf defaultValue={phim.danhGia / 2} /></span>
                </div>
                <div className={`${style.card_item_btnHover}`}>
                    <button className="btn"><img onClick={() => {
                        setOpen(true);
                        setTrailer(phim.trailer.slice(30))
                    }} className={cx(style.btn_play_video, style.pulsing_2)} src={img} alt="" /></button>
                    <NavLink to={`/chi-tiet-phim/${phim.maPhim}-${phim.biDanh}`} className={style.card_item_btnDatve}>Xem chi tiết</NavLink>
                </div>
            </Card >
        })
    }
    const renderHotMoviesList = () => {
        return listPhim.slice(32, 48).map((phim, index) => {
            return <Card className={`${style.card_item} mt-3`} hoverable style={{ width: 240, }} key={index} >
                <div className="mb-2 text-center">
                    {<img onClick={() => {
                        history.push(`/chi-tiet-phim/${phim.maPhim}-${phim.biDanh}`)
                    }} className={style.card_item_img} src={phim.hinhAnh} alt={phim.moTa} />}
                    {index % 3 === 0 ? <span ><Meta onClick={() => {
                        history.push(`/chi-tiet-phim/${phim.maPhim}-${phim.biDanh}`)
                    }} className="mt-1 font-weight-bold" title={<p className={`${style.card_item_filmName} m-0`}>{phim.tenPhim}</p>} description={<p className={`${style.card_item_filmName} m-0`}><span className={style.card_item_ageType}>C18</span>IMDb: {phim.danhGia}</p>} /></span> :
                        <span ><Meta onClick={() => {
                            history.push(`/chi-tiet-phim/${phim.maPhim}-${phim.biDanh}`)
                        }} className="mt-1 font-weight-bold" title={<p className={`${style.card_item_filmName} m-0`}>{phim.tenPhim}</p>} description={<p className={`${style.card_item_filmName} m-0`}><span className={style.card_item_ageType}>C16</span>IMDb: {phim.danhGia}</p>} /></span>}
                    <span><Rate className={style.card_item_rate} allowHalf defaultValue={phim.danhGia / 2} /></span>
                </div>
                <div className={`${style.card_item_btnHover}`}>
                    <button className="btn"><img onClick={() => {
                        setOpen(true);
                        setTrailer(phim.trailer.slice(30))
                    }} className={cx(style.btn_play_video, style.pulsing_2)} src={img} alt="" /></button>
                    <NavLink to={`/chi-tiet-phim/${phim.maPhim}-${phim.biDanh}`} className={style.card_item_btnDatve}>Xem chi tiết</NavLink>
                </div>
            </Card >
        })
    }

    return (
        <div className="" >
            <Tabs defaultActiveKey="b" centered={true} size={size}>
                <TabPane tab={<div ><span className="tabpane_type">Phim sắp chiếu</span></div>} key="a">
                    <Slider {...settingTabListMovies}>
                        {renderUpCommingMoviesList()}
                    </Slider>
                </TabPane>
                <TabPane tab={<div ><span className="tabpane_type">Phim đang chiếu</span></div>} key="b">
                    <Slider {...settingTabListMovies}>
                        {renderCurrentMoviesList()}
                    </Slider>
                </TabPane>
                <TabPane tab={<div ><span className="tabpane_type">Phim hot nhất</span></div>} key="c">
                    <Slider {...settingTabListMovies}>
                        {renderHotMoviesList()}
                    </Slider>
                </TabPane>
            </Tabs>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={trailer} onClose={() => setOpen(false)} />
        </div>
    )
}
