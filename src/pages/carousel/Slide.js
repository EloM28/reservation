import React from 'react'
import Slider from 'react-slick';

const Slide = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
        {/* Image */}
        <img src="img/2.jpg" alt="Image d'accueil" className="w-full h-auto object-cover rounded-lg shadow-lg z-8" />

        {/* Texte d'accueil */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-3xl font-semibold">Bienvenue à notre hôtel</h1>
          <p className="text-3xl font-lg">Profitez d'un séjour luxueux et confortable dans notre établissement.</p>
        </div>
      </div>

  //   <div className="max-w-3xl mx-auto">
  //   <Slider {...settings}>
  //     {carouselImages.map((image, index) => (
  //       <div key={index} className="h-96 relative">
  //         <img src={image} alt="Carousel" className="h-full w-full object-cover" />
  //         <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
  //           <span className="text-3xl font-bold mb-2">WELCOME</span>
  //           <span className="text-3xl font-bold">TO OUR HOTEL</span>
  //         </div>
  //       </div>
  //     ))}
  //   </Slider>
  // </div>
  )
}
export default Slide;