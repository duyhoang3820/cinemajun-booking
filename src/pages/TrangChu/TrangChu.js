import React, { useEffect } from 'react'
import CarouselMovie from './CarouselMovie/CarouselMovie'
import CinemaCluster from './CinemaSystem/CinemaSystem'
import TabListMovies from './TabListMovies/TabListMovies'
import './assets/css/Trangchu.css'
import '../../components/Background/Background.css'

export default function TrangChu(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="" >
            <div className="bg"></div>
            <div className="star-field">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>
            <div id="trangchu">
                <CarouselMovie />
            </div>
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
