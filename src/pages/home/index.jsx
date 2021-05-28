import React from "react";
import TopFlickity from "./components/TopFlickity";
import BestPicks from "./components/BestPicks";
import TopSellers from "./components/TopSellers";
import CountDown from "./components/CountDown";
import Reviews from "./components/Reviews";
import Brands from "./components/Brands";

function Home() {
  return (
    <>
      <TopFlickity />
      {/* FEATURES */}

      {/* BEST PICKS */}
      <BestPicks />
      {/* TOP SELLERS */}
      <TopSellers />

      {/* COUNTDOWN */}
      <CountDown />

      {/* REVIEWS */}
      <Reviews />
      {/* BRANDS */}
      <Brands />
    </>
  );
}

export default Home;
