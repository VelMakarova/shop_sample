import React from "react";
import Slider from "react-slick";
import SLIDES from "../../constants/mainSlider";

const MainSlider: React.FC = () => {
  const getSlides = () =>
    SLIDES.map((item) => {
      let position;
      switch (item.slideContentPosition) {
        case "right":
          position = "to-right";
          break;
        case "left":
          position = "to-left";
          break;
        case "center":
          position = "to-center";
          break;
        default:
          position = "to-left";
      }
      return (
        <div key={position} className={`slide ${position}`}>
          <img
            className="slide-img"
            src={item.slideImg}
            alt="slide-illustration"
          />
          <div className="slide-content">
            <div className="slide-title">{item.slideTitle}</div>
            <div className="slide-description">{item.slideContent}</div>
            <button type="button" className="slide-btn">
              {item.slideBtn}
            </button>
          </div>
        </div>
      );
    });
  const sliderSettings = {
    dots: true,
    arrows: false,
  };

  return (
    <div className="slider-content slider-main">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...sliderSettings}>{getSlides()}</Slider>
    </div>
  );
};

export default MainSlider;
