import React, { useEffect } from 'react'
import CarouselMovie from './CarouselMovie/CarouselMovie'
import CinemaCluster from './CinemaSystem/CinemaSystem'
import TabListMovies from './TabListMovies/TabListMovies'
import './assets/css/Trangchu.css'

export default function TrangChu(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="home" >
            <div id="trangchu">
                <CarouselMovie />
            </div>
            <br id="lichChieu" /><br />
            <br></br>
            <div className="container">
                <div className="titleLichChieu"></div>
                <TabListMovies />
            </div>
            <br id="cumRap" /><br />
            <br />
            <div className="container">
                <div className="titleCunRap"></div>
                <CinemaCluster />
            </div>
        </div>
    )
}
