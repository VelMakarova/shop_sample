import React from 'react';
import SLIDES from '../../constants/mainSlider';
import Slider from 'react-slick';

const MainSlider: React.FC = () => {
  const getSlides = () => {
    return SLIDES.map((item, index) => {
      let position;
      switch (item.slideContentPosition) {
        case 'right':
          position = 'to-right';
          break;
        case 'left':
          position = 'to-left';
          break;
        case 'center':
          position = 'to-center';
          break;
        default:
          position = 'to-left';
      }
      return (
        <div key={index} className={`slide ${position}`}>
          <img
            className="slide-img"
            src={item.slideImg}
            alt="slide-illustration"
          />
          <div className="slide-content">
            <div className="slide-title">{item.slideTitle}</div>
            <div className="slide-description">{item.slideContent}</div>
            <button className="slide-btn">{item.slideBtn}</button>
          </div>
        </div>
      );
    });
  };
  const sliderSettings = {
    dots: true,
    arrows: false,
  };

  return (
    <div className="slider-content slider-main">
      <Slider {...sliderSettings}>{getSlides()}</Slider>
    </div>
  );
};

export default MainSlider;
