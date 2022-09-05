import React from 'react'
import { Link } from "react-router-dom";
import PlaceholderImg from "../../img/placholder2.svg";

const Entry = () => {
  return (
    <div className="bg-[#F9FAFB] round-top md:mt-10">
      <div className="container py-5 md:py-20">
        <div className="flex lg:flex-row flex-col gap-8 justify-between items-center">
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
            <h2 className="md:text-4xl text-3xl font-bold lg:w-[70%]">
              Gain entry to all borders
            </h2>
            <div className="lg:w-[90%]">
             
              <p className="my-8 text-lg text-[#4A5C6B] font-medium">
                Conveniently send and receive money in multiple currencies, make
                large payments for investment, pay mortgages, and other bills
                across all borders. Bird provides easy access to international
                banking and digital financial services for the 1 billion people
                on the emerging market.
              </p>
 
              <Link
                to="/"
                className="text-white font-medium border border-transparent rounded-full block text-center lg:w-40 py-2 bg-primary500 hover:bg-green-700"
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