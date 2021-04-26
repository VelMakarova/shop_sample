import React from 'react';
import Slider from 'react-slick';

import girl1 from '../../../public/img/girls/1.png';
import girl2 from '../../../public/img/girls/2.png';
import girl3 from '../../../public/img/girls/3.png';
import girl4 from '../../../public/img/girls/4.png';

function InstaSlider() {
  const sliderSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-content slider-insta">
      <Slider {...sliderSettings}>
        <div className="slider-media">
          <img className="slider-img" src={girl1} alt="insta" />
        </div>
        <div className="slider-media">
          <img className="slider-img" src={girl2} alt="insta" />
        </div>
        <div className="slider-media">
          <img className="slider-img" src={girl3} alt="insta" />
        </div>
        <div className="slider-media">
          <img className="slider-img" src={girl4} alt="insta" />
        </div>
        <div className="slider-media">
          <img className="slider-img" src={girl1} alt="insta" />
        </div>
        <div className="slider-media">
          <img className="slider-img" src={girl2} alt="insta" />
        </div>
        <div className="slider-media">
          <img className="slider-img" src={girl3} alt="insta" />
        </div>
        <div className="slider-media">
          <img className="slider-img" src={girl4} alt="insta" />
        </div>
      </Slider>
    </div>
  );
}

export default InstaSlider;
