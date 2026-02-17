import React from "react";
import HomeBannerBg from "../assets/HomeBannerBg.jpg";
import logo from "../assets/logo.png";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <>
      <div
        className="relative w-full flex justify-center items-center bg-cover h-96 flex-col mb-10"
        style={{ backgroundImage: `url(${HomeBannerBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="text-xl md:text-5xl text-center relative text-white font-light flex flex-col items-center justify-center">
          <img src={logo} className=" h-30" alt="Logo" />
        </div>
        <p className="text-white text-center text-lg md:text-xl font-light relative mb-6">
          Discover delicious recipes from around the world
        </p>

        <div className="max-w-5xl relative">
          <SearchBar/>
        </div>
      </div>
    </>
  );
};

export default Home;
