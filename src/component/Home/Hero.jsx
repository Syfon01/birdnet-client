import React, { useEffect } from 'react'
import Typed from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";
import iosIcon from "../../img/ios.png";
import androidIcon from "../../img/andriod.png";
import heroImage from "../../img/hero.svg";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    
    // AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-[#F9FAFB] round-bottom">
        <div className="md:pt-12 py-6 md:pb-44  container">
          <div className="flex lg:flex-row flex-col gap-8 justify-between items-center">
            <div className="lg:w-1/2 md:order-1 order-2">
              <div className="bg-[#EAF6EE] py-1 px-4 rounded-xl inline-block">
                <p className="text-sm font-medium text-[#1A6533]">
                  Send, Spend, Save & Invest
                </p>
              </div>
              <h1 className="md:text-6xl text-4xl font-[900] leading-tight">
                Banking & Transfers at your{" "}
                <Typed
                  strings={["Fingertips"]}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                />
              </h1>

              <h5 className="text-xl mt-8 text-[#4A5C6B]">
                Bird is a fully featured US bank account for non-US residents
                (Africans) and its deposit is fully protected by US government’s
                Federal Deposit Insurance Corporation (FDIC)
              </h5>

              <div className="mt-12">
                <div className="flex">
                  <a href="">
                    <img src={iosIcon} alt="" srcSet="" />
                  </a>
                  <a href="" className="ml-4">
                    <img src={androidIcon} alt="" srcSet="" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 md:order-2 order-1">
              <div className="xl:ml-20">
                <img
                  src={heroImage}
                  alt=""
                  srcSet=""
                  data-aos={"fade-left"}
                  data-aos-delay={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Hero