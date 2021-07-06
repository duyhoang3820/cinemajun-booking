export const settingTabListMovies = {

  className: "center",
  // centerMode: true,
  pauseOnHover: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  centerPadding: "60px",
  slidesToShow: 4,
  slidesToScroll: 4,
  speed: 500,
  rows: 2,
  // slidesPerRow: 2,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        rows: 1,
      }
    },
    {
      breakpoint: 539,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
      }
    }
  ]
}