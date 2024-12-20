import React from "react";

const About = () => {
  return (
    <section className="py-16 w-full">
      <div className="container flex justify-center items-center">
        <article className="flex h-auto abi flex-col items-center justify-center text-center w-full p-10 gap-12">
          <h1 className="text-center text-white text-5xl font-Bungee leading-[67.20px] tracking-wide">
            ABOUT FlobyInu
            <br />
            SNIPERBOT
          </h1>

          <div className="text-center text-white text-xl font-medium leading-10">
            Floby Inu is meme token on the #Binance Network, #Floby inspired by the successful journey of #Floki and aim to be his successor,
            Floby SniperBot aims to give
            users the best experience by utilizing highly sophisticated software
            and services. From anti-rug features all the way down to
            auto-selling while you sleep, it has never been this easy!
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
