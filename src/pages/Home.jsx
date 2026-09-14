import React, { useEffect } from "react";

import BrowseByCategory from "../components/home/BrowseByCategory";
import HotCollections from "../components/home/HotCollections";
import Landing from "../components/home/Landing";
import LandingIntro from "../components/home/LandingIntro";
import NewItems from "../components/home/NewItems";
import TopSellers from "../components/home/TopSellers";

const Home = () => {
  // Scroll to the top whenever the Home page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        {/* Top of page */}
        <div id="top"></div>

        {/* Hero Section */}
        <Landing />

        {/* Wallet / NFT Features */}
        <LandingIntro />

        {/* Hot Collections Carousel */}
        <HotCollections />

        {/* New NFT Items Carousel */}
        <NewItems />

        {/* Top NFT Sellers */}
        <TopSellers />

        {/* NFT Categories */}
        <BrowseByCategory />
      </div>
    </div>
  );
};

export default Home;