import React from 'react'
import PlaceholderImg from "../../img/account.svg";
import androidIcon from "../../img/andriodDark.png";
import iosIcon from "../../img/iosDark.png";


const AppSection = () => {
  return (
    <div className="bg-[#F9FAFB]" id='multiple-account'>
      <div className="bg-white round-bottom">
        <div className="container py-5 md:pt-20 md:pb-24">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="order-2 lg:w-1/2 md:order-1">
              <h2 className="md:text-5xl text-3xl font-bold lg:w-[70%]">
                One app for all accounts
              </h2>
              <div className="lg:w-[90%]">
                <p className="my-8 text-lg md:text-2xl text-[#4A5C6B]">
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
            <div className="order-1 lg:w-1/2 md:order-2">
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