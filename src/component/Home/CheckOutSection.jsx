import React from 'react'
import PlaceholderImg from "../../img/placholder2.svg";
import androidIcon from "../../img/andriodDark.png";
import iosIcon from "../../img/iosDark.png";

const CheckOutSection = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="container py-5 md:py-12">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="lg:w-1/2">
            <div className="xl:ml-20">
              <img
                src={PlaceholderImg}
                alt=""
                srcSet=""
                data-aos={"fade-right"}
                data-aos-delay={50}
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="md:text-5xl text-3xl font-bold lg:w-[90%]">
              Checkout with BirdNet
            </h2>
            <div className="lg:w-[95%]">
              <p className="my-8 md:text-2xl text-lg text-[#4A5C6B]">
                You can integrate the BirdNet fast checkout controls into your
                website or app. It accepts local and international payments for
                businesses of all sizes.
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
        </div>
      </div>
    </div>
  );
}

export default CheckOutSection