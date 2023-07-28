import React from "react";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="py-36 w-full" id="hero">
      <div className="container flex gap-7 justify-center items-center flex-col">
        <h2 className="text-white text-2xl font-Bungee leading-[33.60px] tracking-wide">
          HELLO, HUMAN
        </h2>
        <h1 className="text-center uppercase text-white text-5xl md:text-6xl font-Bungee tracking-wider">
          Your token sniping
          <br />
          automated by Pegasus Sniperbot
        </h1>
        <p className="text-center max-w-2xl text-white text-base font-normal leading-loose tracking-tight">
          Pegasus SniperBot performs a wide range of automated tasks across
          different protocols on supported chains.
        </p>
        <a
          href="https://t.me/pegasussniperbot"
          className="w-[219px] h-[54px] text-black hover:text-white px-8 py-4 bg-gradient-to-r from-yellow-400 to-rose-600 rounded shadow justify-center items-center gap-2.5 inline-flex"
        >
          <div className=" text-base font-Bungee leading-snug tracking-tight">
            MEET PEGASUS
          </div>
        </a>

        <img src={logo} alt="" />
      </div>
    </section>
  );
};

export default Hero;
