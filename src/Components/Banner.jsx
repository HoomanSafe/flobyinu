import React from "react";
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <section className="py-14 w-full">
      <div className="container flex justify-center items-center">
        <img src={banner} alt="" className="md:max-w-[40rem]" />
      </div>
    </section>
  );
};

export default Banner;
