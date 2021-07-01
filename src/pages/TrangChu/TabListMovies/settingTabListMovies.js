export const settingTabListMovies = {

  className: "center",
  // centerMode: true,
  pauseOnHover: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  centerPadding: "60px",
  slidesToShow: 5,
  slidesToScroll: 5,
  speed: 500,
  rows: 2,
  // slidesPerRow: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        rows: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
      }
    }
  ]
}