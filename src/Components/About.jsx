import React from "react";

const About = () => {
  return (
    <section className="py-16 w-full">
      <div className="container flex justify-center items-center">
        <article className="flex h-auto abi flex-col items-center justify-center text-center w-full p-10 gap-12">
          <h1 className="text-center text-white text-5xl font-Bungee leading-[67.20px] tracking-wide">
            ABOUT PEGASUS
            <br />
            SNPIERBOT
          </h1>

          <div className="text-center text-white text-xl font-medium leading-10">
            Reigning in as a gift from Gods, Pegasus SniperBot aims to gives
            users the best experience by using highly sophisticated software and
            services. From anti rug features all the way down to auto selling
            while you sleep has never been this easy!
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
