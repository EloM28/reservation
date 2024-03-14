import React from 'react'
import Slider from 'react-slick';

export const Slide = () => {
    const carouselImages = ['/img/4.jpg','/img/5.jpg','/img/6.jpg']; 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
      };
  return (
  <div className="carousel">
    <Slider {...settings}>
      {carouselImages.map((image, index) => (
        <div key={index} className="carousel-slide">
          <img src={image} alt="Carousel" className="carousel-image" />
          <div className="carousel-text">
            <span>WELCOME</span>
            <span>TO OUR HOTEL</span>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  )
}
