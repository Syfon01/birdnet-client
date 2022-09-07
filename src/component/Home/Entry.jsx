import React from 'react'
import { Link } from "react-router-dom";
import PlaceholderImg from "../../img/entry.svg";

const Entry = () => {
  return (
    <div className="bg-[#F9FAFB] round-top md:mt-10">
      <div className="container py-5 md:py-16">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="lg:w-[45%]">
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
            <h2 className="md:text-5xl text-3xl font-bold lg:w-[70%]">
              Gain entry to all borders
            </h2>
            <div className="lg:w-[100%]">
             
              <p className="my-8 md:text-2xl text-lg text-[#4A5C6B] font-medium">
                Conveniently send and receive money in multiple currencies, make
                large payments for investment, pay mortgages, and other bills
                across all borders. Bird provides easy access to international
                banking and digital financial services for the 1 billion people
                on the emerging market.
              </p>
 
              <Link
                to="/"
                className="block py-2 font-medium text-center text-white border border-transparent rounded-full lg:w-40 bg-primary500 hover:bg-green-700"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entry