import React from "react";
import AppSection from "../component/Home/AppSection";
import Entry from "../component/Home/Entry";
import Hero from "../component/Home/Hero";
import Intro from "../component/Home/Intro";

const Home = () => {
  return (
    <>
      <div className="">
        <Hero />
        <Intro/>
        <Entry/>
        <AppSection/>
      </div>
    </>
  );
};

export default Home;
