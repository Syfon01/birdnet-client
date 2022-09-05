import React from 'react'
import { Link } from "react-router-dom";
import KeyBox from "./KeyBox";
import sendImg from '../../img/send.svg'
import spendImg from "../../img/spend.svg";
import saveImg from "../../img/save.svg";
import investImg from "../../img/invest.svg";
import PlaceholderImg from "../../img/placeholder.svg"
const Intro = () => {
  return (
    <div className="container neg-margin">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 my-10">
        <KeyBox
          img={sendImg}
          bgKeyCard="bg-[#FEFAF5]"
          title="Send"
          text="Send and receive money across borders, as well as P2P transfers."
          dataOs="zoom-in-up"
        /> 
        <KeyBox
          img={spendImg}
          bgKeyCard="bg-[#F7FBFF]"
          title="Spend"
          text="Make purchases and withdrawals online or in person, anywhere in the world."
          dataOs="fade-down"
        />
        <KeyBox
          img={saveImg}
          bgKeyCard="bg-[#FBFAFF]"
          title="Save"
          text="Save in dollars and earn high yield returns on your balance with no additional fees."
          dataOs="fade-up"
        />
        <KeyBox
          img={investImg}
          bgKeyCard="bg-[#F4FBF7]"
          title="Invest"
          text="Set a monthly savings target and start investing."
          dataOs="zoom-in-down"
        />
      </div>

      <div className="py-5 md:py-20">
        <div className="flex lg:flex-row flex-col gap-8 justify-between items-center">
          <div className="lg:w-1/2 md:order-1 order-2">
            <h2 className="md:text-4xl text-3xl font-bold lg:w-[70%]">
              Experience US banking at its finest
            </h2>
            <div className="lg:w-[90%]">
              <p className="mt-7 text-xl text-[#4A5C6B]">
                With a free US checking account, you can pay for international
                tuition, accommodation, luxury vacation, send money to friends
                and family abroad, providing financial peace of mind to millions
                of people.
              </p>

              <p className="my-8 text-lg text-[#4A5C6B] font-medium">
                FDIC - each depositor insured to at least $250,000 - Backed by
                the full faith and credit of the United States Government
              </p>

              <Link
                to="/"
                className="text-white font-medium border border-transparent rounded-full block text-center lg:w-40 py-2 bg-primary500 hover:bg-green-700"
              >
                Know More
              </Link>
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
  );
}

export default Intro