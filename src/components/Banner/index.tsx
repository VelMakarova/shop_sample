import React from 'react';
import bannerImg from '../../../public/img/banner.png';

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-text-content">
          <div className="banner-title">BUY 2 ITEMS</div>
          <div className="banner-subtitle">get one for free!</div>
          <button className="banner-btn">Read more</button>
        </div>
        <div className="banner-illustration">
          <img src={bannerImg} alt="banner" className="banner-img" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
