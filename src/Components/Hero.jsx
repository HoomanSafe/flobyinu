import React from "react";
import logo from "../assets/logo.svg";

const Hero = () => {
  return (
    <section className="py-36 w-full" id="hero">
      <div className="container flex gap-7 justify-center items-center flex-col">
        <h2 className="text-white text-2xl font-Bungee leading-[33.60px] tracking-wide">
          HELLO, HUMAN
        </h2>
        <h1 className="text-center text-white text-5xl md:text-6xl font-Bungee tracking-wider">
          READY TO
          <br />
          PEGASUS SNIPERBOT
        </h1>
        <p className="text-center max-w-2xl text-white text-base font-normal leading-loose tracking-tight">
          Pegasus SniperBot is a Telegram bot that automates on-chain
          interactions and acts as a streamline frontend for hundreds of chains.
          Anyone can create or follow automated tasks that could help with
          objectives such as Airdrop Farming.
        </p>
        <a
          href="https://t.me/pegasussniperbot"
          className="w-[219px] h-[54px] text-black hover:text-white px-8 py-4 bg-gradient-to-r from-yellow-400 to-rose-600 rounded shadow justify-center items-center gap-2.5 inline-flex"
        >
          <div className=" text-base font-Bungee leading-snug tracking-tight">
            MEET PEAGASUS
          </div>
        </a>

        <img src={logo} alt="" />
      </div>
    </section>
  );
};

export default Hero;
