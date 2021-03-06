import React, { useEffect } from 'react'
import CarouselMovie from './CarouselMovie/CarouselMovie'
import CinemaCluster from './CinemaSystem/CinemaSystem'
import TabListMovies from './TabListMovies/TabListMovies'
import './assets/css/Trangchu.css'
import Background from '../../components/Background/Background'

export default function TrangChu(props) {
    useEffect(() => {
        document.title = 'CineJun | Trang chủ';
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="" >
            <Background/>
            <div id="trangchu" className="mt-3">
                <CarouselMovie />
            </div>
            <hr id="holi"/>
            <br></br>
            <br id="lichChieu" /><br />
            <br></br>
            <br></br>
            <div className="container">
                <div className="titleLichChieu"></div>
                <TabListMovies />
            </div>
            <br></br>
            <br id="cumRap" /><br />
            <br></br>
            <br></br>
            <div className="container">
                <div className="titleCunRap"></div>
                <CinemaCluster />
            </div>
        </div>
    )
}
