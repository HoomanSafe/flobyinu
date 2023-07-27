import React from "react";
import road1 from "../assets/road1.svg";
import road2 from "../assets/road2.svg";
import road3 from "../assets/road3.svg";
import road4 from "../assets/road4.svg";

const Map = () => {
  return (
    <section className="py-16 w-full">
      <div className="container flex justify-center items-center flex-col">
        <h1 className="text-center text-white text-5xl font-Bungee leading-[67.20px] tracking-wide">
          TECHNICAL roadmap
        </h1>
        <div className="flex mt-16 flex-col gap-8 justify-center items-center">
          <img src={road1} alt="" className="pointer-events-none" />
          <img src={road2} alt="" className="pointer-events-none" />
          <img src={road3} alt="" className="pointer-events-none" />
          <img src={road4} alt="" className="pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Map;
