export const options = {
    arrow: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    margin: 10,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    pauseOnHover: true,
    centerPadding: "150px",
    responsive: [
        {
            breakpoint: 0,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                centerPadding: "0",
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                centerPadding: "0",
            }
        }
    ]
};