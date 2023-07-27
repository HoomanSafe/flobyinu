import React from "react";
import feature1 from "../assets/feature1.svg";
import feature2 from "../assets/feature2.svg";
import feature3 from "../assets/feature3.svg";

const Features = () => {
  return (
    <section className="py-16 w-full ">
      <div className="container flex justify-center items-center flex-col gap-5">
        <p className="text-center token2 text-2xl font-bold leading-[33.60px] tracking-wide">
          Our Solution
        </p>
        <h1 className="text-center text-white text-5xl font-Bungee leading-[67.20px] tracking-wide">
          PEGASUS SNIPERBOT
          <br />
          FEATURES
        </h1>

        <p className="max-w-[757px] text-center text-white text-xl font-medium leading-10 tracking-tight">
          Reigning in as a gift from the Gods, Pegasus SniperBot aims to give
          users the best experience by utilizing highly sophisticated software
          and services. From anti-rug features all the way down to auto-selling
          while you sleep, it has never been this easy!
        </p>

        <div className="grid w-full mt-16 grid-cols-1 lg:grid-cols-3 justify-center items-center gap-10">
          <img src={feature1} alt="" className="pointer-events-none" />
          <img src={feature2} alt="" className="pointer-events-none" />
          <img src={feature3} alt="" className="pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Features;
