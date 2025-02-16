import React from 'react';
import Navbar from '../Common/Navbar/Navbar';
import Footer from '../Common/Footer/Footer';
import Banner from './Banner/Banner';
import About from './Aabout/About';
import Work from './Work/Work';
import Donor from './Donor/Donor';
import RecentDonations from './Recent Donations/RecentDonations';

const Home = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
        <div className="max-w-[1150px] mx-auto p-4">
          <div> <Banner></Banner></div>

          <div><About></About></div>

          <div><Work></Work></div>

          <div><Donor></Donor></div>

          <div><RecentDonations></RecentDonations></div>
        </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;