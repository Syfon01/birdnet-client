import React from 'react'
import iosIcon from "../img/ios.png";
import androidIcon from "../img/andriod.png";
import logo from "../img/logo-white.svg"
import twitter from "../img/twitter.svg";
import facebook from "../img/facebook.svg";
import linkendin from "../img/linkedin.svg";
const Footer = () => {
  return (
    <div className="bg-[#1D2939] py-8 md:py-20 text-white">
      <div className="container">
        <div className="border-b border-[#475467] md:pb-10 pb-5">
          <div className="flex justify-between items-center flex-wrap flex-col md:flex-row">
            <div>
              <h2 className="text-3xl font-semibold mb-6 md:mb-0">
                Get the app
              </h2>
            </div>
            <div>
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

        <div className="border-b border-[#475467] md:pb-10 pb-5 pt-10">
          <div className="flex items-center gap-10 md:flex-row flex-wrap">
            <div className="md:w-[27%]">
              <div>
                <img src={logo} alt="logo-white" srcset="" />
              </div>
              <p className="text-[#EAECF0] mt-10 font-light">
                Bird is an international banking app that offers to non-US
                residents and businesses a fully featured US-domiciled, FDIC
                insured bank account with debit cards, international and local
                transfers, wealth building account, payment consolidation and a
                checkout solution.
              </p>
            </div>
            <div className="flex flex-wrap md:w-[68%] md:gap-y-0 gap-y-8">
              <div className="md:w-[40%] w-full">
                <h6 className="text-[#98A2B3] text-sm">App Features</h6>
                <ul className="mt-6 font-medium space-y-3 text-[#EAECF0]">
                  <li>US Checking Account</li>
                  <li>Wealth Building Account</li>
                  <li>Cross-border & Local Transfer</li>
                  <li>Account Consolidation</li>
                  <li>Bird Checkout</li>
                </ul>
              </div>
              <div className="md:w-[30%] w-1/2">
                <h6 className="text-[#98A2B3] text-sm">Card Services</h6>
                <ul className="mt-6 font-medium space-y-3 text-[#EAECF0]">
                  <li>Debit Cards</li>
                  <li>Virtual Cards</li>
                  <li>Press</li>
                  <li>News</li>
                  <li>Media kit</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="md:w-[30%] w-1/2">
                <h6 className="text-[#98A2B3] text-sm">Support</h6>
                <ul className="mt-6 font-medium space-y-3 text-[#EAECF0]">
                  <li>Blog</li>
                  <li>FAQ</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div className="flex justify-between items-center flex-row">
            <div>
              <p className="text-[#98A2B3]">
                © 2022 Bird. All rights reserved.
              </p>
            </div>
            <div>
              <div className="flex">
                <a href="">
                  <img src={twitter} alt="twitter" srcSet="" />
                </a>
                <a href="" className="ml-6">
                  <img src={linkendin} alt="linkedin" srcSet="" />
                </a>
                <a href="" className="ml-6">
                  <img src={facebook} alt="facebook" srcSet="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );}

export default Footer