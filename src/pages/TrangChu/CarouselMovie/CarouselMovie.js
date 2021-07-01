/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import style from '../assets/css/Carousel.module.css'
import '../../../assets/css/sclick/slick_dots.css'
import ModalVideo from 'react-modal-video'
import '../../../../node_modules/react-modal-video/scss/modal-video.scss';
import img from '../../../assets/img/play-video.png'
import img1 from '../assets/img/fast-and-furious9.jpg'
import img2 from '../assets/img/ve-si-sat-thu.jpg'
import img3 from '../assets/img/lat-mat.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../../../assets/css/sclick/carousel.css'
import { options } from './carouselStyle'



export default function CarouselMovie() {

    const [isOpen, setOpen] = useState(false);
    const [trailer, setTrailer] = useState(
        [
            {
                img: img2,
                id: '3Z2FxVT6LIE'
            },
            {
                img: img1,
                id: 'FUK2kdPsBws'
            },
            {
                img: img3,
                id: 'UeyaR8jWl2c'
            }
        ]);
    // console.log('trailer', trailer);

    const [idTrailer, setIdTrailer] = useState();

    const renderTrailer = () => {
        return trailer.map((phim, index) => {
            return <div key={index} className={style.poster_item}>
                <img className={style.img} src={phim.img} alt="" />
                <div className={style.btn_Trailer}>
                    <div className={style.pulsing_1} onClick={() => {
                        setOpen(true);
                        setIdTrailer(phim.id)
                    }}>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>

        })
    }
    return (
        <div >
            <Slider {...options} className={style.posters}>
                {renderTrailer()}
            </Slider>
            {/* <Carousel showArrows showArrowsOnHover height={500} continuous={true} cycle={true} >
                {renderTrailer()}
            </Carousel> */}
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={idTrailer} onClose={() => setOpen(false)} />
        </div>

    )
}
