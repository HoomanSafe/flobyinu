import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Mics from "./Components/Mics";
import Footer from "./Components/Footer";
import Map from "./Components/Map";
import Features from "./Components/Features";
import Snipping from "./Components/Snipping";

const App = () => {
  return (
    <div className="min-h-screen w-full relative gradi text-white font-Space">
      <Header />
      <Hero />
      <Snipping />
      <About />
      <Banner />
      <Map />
      <Features />
      <Mics />
      <Footer />
    </div>
  );
};

export default App;
