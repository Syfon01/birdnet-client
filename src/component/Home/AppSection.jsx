import React from 'react'
import PlaceholderImg from "../../img/placeholder.svg";
import androidIcon from "../../img/andriodDark.png";
import iosIcon from "../../img/iosDark.png";


const AppSection = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="bg-white round-bottom">
        <div className="container py-5 md:pt-20 md:pb-32">
          <div className="flex lg:flex-row flex-col gap-8 justify-between items-center">
            <div className="lg:w-1/2 md:order-1 order-2">
              <h2 className="md:text-4xl text-3xl font-bold lg:w-[70%]">
                One app for all accounts
              </h2>
              <div className="lg:w-[90%]">
                <p className="my-8 text-lg text-[#4A5C6B]">
                  Managing multiple accounts from a single app, saves you the 
                  trouble of carrying multiple cards, as well as the time and
                  stress of navigating multiple mobile apps to complete any
                  transaction.
                </p>
                <div className="mt-8">
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
            </div>
            <div className="lg:w-1/2 md:order-2 order-1">
              <div className="xl:ml-20">
                <img
                  src={PlaceholderImg}
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
    </div>
  );
}

export default AppSection