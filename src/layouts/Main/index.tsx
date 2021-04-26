import React from 'react';
import Layout from '../../components/Layout';
import Categories from '../../components/Categories';
import Arrived from '../../components/Arrived';
//import Offerts from '../../components/Offerts';
import Banner from '../../components/Banner';
import MainSlider from '../../components/MainSlider';
import InstaSlider from '../../components/InstaSlider';

const Main: React.FC = () => {
  return (
    <Layout>
      <main className="main">
        <MainSlider />
        <Categories />
        <Arrived />
        <Banner />
        
        <InstaSlider />
      </main>
    </Layout>
  );
};

export default Main;
