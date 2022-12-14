import React from "react";
import AppSection from "../component/Home/AppSection";
import CheckOutSection from "../component/Home/CheckOutSection";
import Entry from "../component/Home/Entry";
import Hero from "../component/Home/Hero";
import Intro from "../component/Home/Intro";
import FAQ from "../component/Home/FAQ"

const Home = () => {
  return (
    <>
      <div className="">
        <Hero />
        <Intro/>
        <Entry/>
        <AppSection/>
        <CheckOutSection/>
        <FAQ/>
      </div>
    </>
  );
};

export default Home;
