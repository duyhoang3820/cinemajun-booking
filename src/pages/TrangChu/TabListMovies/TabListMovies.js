/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick';
import { layDanhSachPhimAction, layDanhSachPhimSapChieu, layDanhSachPhimHot } from '../../../redux/actions/QuanLyPhimAction';
import { settingTabListMovies } from './settingTabListMovies';
import style from '../assets/css/TabListMovies.module.css'
import './assets/tabList.css'
import '../../../assets/css/sclick/sclick_next.css'
import { Card, Rate, Tabs } from 'antd';
import img from '../../../assets/img/play-video.png'
import ModalVideo from 'react-modal-video'
import '../../../../node_modules/react-modal-video/scss/modal-video.scss';
import { NavLink } from 'react-router-dom';
import { history } from '../../../App';

export default function TabListMovies(props) {

    const { listPhim } = useSelector(state => state.QuanLyPhimReducer);
    const { listPhimSapChieu } = useSelector(state => state.QuanLyPhimReducer);
    const { listPhimHot } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(layDanhSachPhimAction())
        dispatch(layDanhSachPhimSapChieu())
        dispatch(layDanhSachPhimHot())
    }, []);

    const { Meta } = Card;
    const { TabPane } = Tabs;
    const [state, setstate] = useState({ size: 'small' })
    const { size } = state.size;
    const [isOpen, setOpen] = useState(false);
    const [trailer, setTrailer] = useState();

    const renderUpCommingMoviesList = () => {
        return listPhimSapChieu.slice(0, 16).map((phim, index) => {
            return <Card className={`${style.card_item} mt-3`} hoverable style={{ width: 240, }} key={index} >
                <div className="mb-2 text-center">
                    {<img onClick={() => {
                        history.push(`/chi-tiet-dat-ve/${phim.maPhim}`)
                    }} className={style.imgTabList} src={phim.hinhAnh} alt={phim.moTa} />}
                    {index % 4 === 0 ? <span ><Meta onClick={() => {
                        history.push(`/chi-tiet-dat-ve/${phim.maPhim}`)
                    }} className="mt-1 font-weight-bold" title={<p className={`${style.filmName} m-0`}>{phim.tenPhim}</p>} description={<p className={`${style.filmName} m-0`}><span className={style.ageType}>C16</span>IMDb: {phim.danhGia}</p>} /></span> :
                        <span ><Meta onClick={() => {
                            history.push(`/chi-tiet-dat-ve/${phim.maPhim}`)
                        }} className="mt-1 font-weight-bold" title={<p className={`${style.filmName} m-0`}>{phim.tenPhim}</p>} description={<p className={`${style.filmName} m-0`}><span className={style.ageTypeP}>P</span>IMDb: {phim.danhGia}</p>} /></span>}
                    <span><Rate className={style.rate} allowHalf defaultValue={phim.danhGia / 2} /></span>
                </div>
                <div className={`${style.btnHover}`}>
                    <button className="btn"><img onClick={() => {
                        setOpen(true);
                        setTrailer(phim.trailer.slice(30))
                    }} className={`${style.btn_play_video} pulsing_2`} src={img} alt="" /></button>
                    <NavLink to={`/chi-tiet-dat-ve/${phim.maPhim}`} className={style.btn_DatVe}>Mua vé</NavLink>
                </div>
            </Card >
        })
    }
    const renderCurrentMoviesList = () => {
        return listPhim.slice(0, 16).map((phim, index) => {
            return <Card className={`${style.card_item} mt-3`} hoverable style={{ width: 240, }} key={index} >
                <div className="mb-2 text-center">
                    {<img onClick={() => {
                        history.push(`/chi-tiet-dat-ve/${phim.maPhim}`)
                    }} className={style.imgTabList} src={phim.hinhAnh} alt={phim.moTa} />}
                    {index % 2 === 0 ? index % 3 === 0 ? <span ><Meta onClick={() => {
                        history.push(`/chi-tiet-dat-ve/${phim.maPhim}`)
                    }} className="mt-1 font-weight-bold" title={<p className={`${style.filmName} m-0`}>{phim.tenPhim}</p>} description={<p className={`${style.filmName} m-0`}><span className={style.ageTypeP}>P</span>IMDb: {phim.danhGia}</p>} /></span> :
                        <span ><Meta onClick={() => {
                            history.push(`/chi-tiet-dat-ve/${phim.maPhim}`)
                        }} className="mt-1 font-weight-bold" title={<p className={`${style.filmName} m-0`}>{phim.tenPhim}</p>} description={<p className={`${style.filmName} m-0`}><span className={style.ageType}>C18</span>IMDb: {phim.danhGia}</p>} /></span> :
                        <span ><Meta onClick={() => {
                            history.push(`/chi-tiet-dat-ve/${phim.maPhim}`)
                        }} className="mt-1 font-weight-bold" title={<p className={`${style.filmName} m-0`}>{phim.tenPhim}</p>} description={<p className={`${style.filmName} m-0`}><span className={style.ageType}>C16</span>IMDb: {phim.danhGia}</p>} /></span>}
                    <span><Rate className={style.rate} allowHalf defaultValue={phim.danhGia / 2} /></span>
                </div>
                <div className={`${style.btnHover}`}>
                    <button className="btn"><img onClick={() => {
                        setOpen(true);
                        setTrailer(phim.trailer.slice(30))
                    }} className={`${style.btn_play_video} pulsing_2`} src={img} alt="" /></button>
                    <NavLink to={`/chi-tiet-dat-ve/${phim.maPhim}`} className={style.btn_DatVe}>Mua vé</NavLink>
                </div>
            </Card >
        })
    }
    const renderHotMoviesList = () => {
        return listPhimHot.slice(0, 16).map((phim, index) => {
            return <Card className={`${style.card_item} mt-3`} hoverable style={{ width: 240, }} key={index} >
                <div className="mb-2 text-center">
                    {<img onClick={() => {
                        history.push(`/chi-tiet-dat-ve/${phim.maPhim}`)
                    }} className={style.imgTabList} src={phim.hinhAnh} alt={phim.moTa} />}
                    {index % 3 === 0 ? <span ><Meta onClick={() => {
                        history.push(`/chi-tiet-dat-ve/${phim.maPhim}`)
                    }} className="mt-1 font-weight-bold" title={<p className={`${style.filmName} m-0`}>{phim.tenPhim}</p>} description={<p className={`${style.filmName} m-0`}><span className={style.ageType}>C18</span>IMDb: {phim.danhGia}</p>} /></span> :
                        <span ><Meta onClick={() => {
                            history.push(`/chi-tiet-dat-ve/${phim.maPhim}`)
                        }} className="mt-1 font-weight-bold" title={<p className={`${style.filmName} m-0`}>{phim.tenPhim}</p>} description={<p className={`${style.filmName} m-0`}><span className={style.ageType}>C16</span>IMDb: {phim.danhGia}</p>} /></span>}
                    <span><Rate className={style.rate} allowHalf defaultValue={phim.danhGia / 2} /></span>
                </div>
                <div className={`${style.btnHover}`}>
                    <button className="btn"><img onClick={() => {
                        setOpen(true);
                        setTrailer(phim.trailer.slice(30))
                    }} className={`${style.btn_play_video} pulsing_2`} src={img} alt="" /></button>
                    <NavLink to={`/chi-tiet-dat-ve/${phim.maPhim}`} className={style.btn_DatVe}>Mua vé</NavLink>
                </div>
            </Card >
        })
    }

    return (
        <div className="" >
            <Tabs defaultActiveKey="b" centered={true} size={size}>
                <TabPane tab={<div ><span className="type__list_film">Phim sắp chiếu</span></div>} key="a">
                    <Slider {...settingTabListMovies}>
                        {renderUpCommingMoviesList()}
                    </Slider>
                </TabPane>
                <TabPane tab={<div ><span className="type__list_film">Phim đang chiếu</span></div>} key="b">
                    <Slider {...settingTabListMovies}>
                        {renderCurrentMoviesList()}
                    </Slider>
                </TabPane>
                <TabPane tab={<div ><span className="type__list_film">Phim hot nhất</span></div>} key="c">
                    <Slider {...settingTabListMovies}>
                        {renderHotMoviesList()}
                    </Slider>
                </TabPane>
            </Tabs>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={trailer} onClose={() => setOpen(false)} />
        </div>
    )
}
