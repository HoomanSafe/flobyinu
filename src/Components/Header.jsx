import React from "react";

const Header = () => {
  return (
    <header className="py-4 w-full absolute z-50 ">
      <div className="container flex justify-between items-center">
        <a href="" className="text-xl font-Bungee">
          PEGASUS SNIPERBOT
        </a>
        <ul className="hidden capitalize text-2xl lg:flex items-center justify-between gap-16">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">about</li>
          <li className="cursor-pointer">tokenomics</li>
        </ul>
        <a
          href="https://t.me/pegasussniperbot"
          className="hidden md:block px-8 py-4 rounded shadow border border-white justify-center items-center gap-2.5 "
        >
          <div className="text-zinc-300 text-base font-Bungee leading-snug tracking-tight">
            LAUNCH BOT
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
