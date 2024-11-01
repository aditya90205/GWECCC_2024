// src/components/Banner.jsx
import React from "react";
import Slider from "react-slick";

import banner2 from "../assets/images/bannerr1.jpg";
import banner3 from "../assets/images/bannerr2.jpg";
import banner4 from "../assets/images/bannerr3.jpg";
import banner1 from "../assets/images/bannerr4.jpg";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = [banner1, banner3, banner4, banner2];

  return (
    <section className="h-full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-62  w-full bg-cover bg-center">
            {/* <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white">
              <h1 className="text-4xl font-bold">GWECCC 2025</h1>
              <p className="text-xl">Global Water, Energy, and Climate Change Congress</p>
              <p className="text-lg">January 20-25, 2025 | Kingdom of Bahrain</p>

            </div> */}
            <img src={image} alt="banner-image" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
