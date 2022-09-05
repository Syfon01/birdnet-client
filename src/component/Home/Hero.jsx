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
        <div className="container md:pt-28 py-28 md:pb-36">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="order-2 lg:w-1/2 md:order-1">
              <div className="bg-[#EAF6EE] py-1 px-4 rounded-xl inline-block">
                <p className="text-sm font-semibold text-primary">
                  Send, Spend, Save & Invest
                </p>
              </div>
              <h1 className="md:text-6xl text-3xl font-[900] leading-tight mt-2">
                Banking & Transfers at your{" "}
                <Typed
                  strings={["Fingertips"]}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                />
              </h1>

              <h5 className="text-xl mt-8 text-[#4A5C6B] md:text-2xl">
                Bird is a fully featured US bank account for non-US residents
                (Africans) and its deposit is fully protected by US government’s
                Federal Deposit Insurance Corporation (FDIC)
              </h5>

              <div className="mt-16">
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

            <div className="order-1 lg:w-1/2 md:order-2">
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