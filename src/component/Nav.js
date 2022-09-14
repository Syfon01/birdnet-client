import React, { Fragment, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import MobileNav from "./Navigation/MobileNav";


import logo from "../img/Logo.svg";

// import MobileNav from "./Navigation/MobileNav";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Nav = () => {

   const [nav, setNav] = useState(false);

   const handleNav = () => {
     setNav(!nav);
   };

   const [colorChange, setColorchange] = useState(false);

   const changeNavbarColor = () => {
     if (window.scrollY >= 80) {
       setColorchange(true);
     } else {
       setColorchange(false);
     }
   };
   window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <div className={colorChange ? "navbar navbar-change" : "navbar"}>
        <nav className="container ">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div>
                <Link to="/">
                  <img src={logo} className="w-24 md:w-32" alt="" />
                </Link>
              </div>
              <div className="hidden md:flex">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex items-center justify-center w-full rounded-md link">
                      Products
                      <ChevronDownIcon
                        className="w-5 h-5 ml-2 -mr-1"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 origin-top-right bg-white rounded-md shadow-lg w-56 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ isActive }) => (
                            <a
                              href="#us-banking"
                              className={classNames(
                                isActive
                                  ? "link-dropdown active"
                                  : "link-dropdown block my-1 mx-0 py-2 hover:bg-gray-50"
                              )}
                            >
                              US Banking
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ isActive }) => (
                            <a
                              href="#all-border"
                              className={classNames(
                                isActive
                                  ? "link-dropdown active"
                                  : "link-dropdown block my-1 py-2 hover:bg-gray-50"
                              )}
                            >
                              Cross border and Local Transfer
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ isActive }) => (
                            <a
                              href="#multiple-account"
                              className={classNames(
                                isActive
                                  ? "link-dropdown active"
                                  : "link-dropdown block my-1 py-2 hover:bg-gray-50"
                              )}
                            >
                              Account Consolidation
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <Menu>
                  <Menu.Item>
                    {({ isActive }) => (
                      <NavLink
                        to="/"
                        className={classNames(
                          isActive ? "link active" : "link"
                        )}
                      >
                        Blog
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ isActive }) => (
                      <NavLink
                        to="/"
                        className={classNames(
                          isActive ? "link active" : "link"
                        )}
                      >
                        Contact Us
                      </NavLink>
                    )}
                  </Menu.Item>
                </Menu>
              </div>
            </div>
            <div>
              <div className="hidden md:flex">
                <NavLink
                  to="/"
                  className="block py-2 text-center text-white border border-transparent rounded-full lg:w-40 bg-primary500 hover:bg-green-700"
                >
                  Get started today
                </NavLink>
              </div>

              {/* =================================================
mobile nav
===============================================================  */}
              <div onClick={handleNav} className="block md:hidden">
                {nav ? (
                  <AiOutlineClose size={20} />
                ) : (
                  <AiOutlineMenu size={20} />
                )}
              </div>
            </div>
          </div>
          <ul
            className={
              nav
                ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-white-900 bg-white ease-in-out duration-500 z-75 px-3"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <Link to="/">
              <img src={logo} className="w-24 mt-4 mb-6 md:w-16" alt="" />
            </Link>
            <div className="">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="flex items-center justify-center mb-3 rounded-md link">
                    Products
                    <ChevronDownIcon
                      className="w-5 h-5 ml-2 -mr-1"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute mt-2 origin-top-right bg-white rounded-md shadow-lg w-56 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ isActive }) => (
                          <a
                            href="#us-banking"
                            className={classNames(
                              isActive
                                ? "link active"
                                : "link block my-1 mx-0 py-2 hover:bg-gray-50"
                            )}
                          >
                            US Banking
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ isActive }) => (
                          <a
                            href="#all-border"
                            className={classNames(
                              isActive
                                ? "link active"
                                : "link block my-1 py-2 hover:bg-gray-50"
                            )}
                          >
                            Cross border and Local Transfer
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ isActive }) => (
                          <a
                            href="#multiple-account"
                            className={classNames(
                              isActive
                                ? "link active"
                                : "link block my-1 py-2 hover:bg-gray-50"
                            )}
                          >
                            Account Consolidation
                          </a>
                        )}
                      </Menu.Item>
                      
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <Menu>
                <Menu.Item>
                  {({ isActive }) => (
                    <NavLink
                      to="/"
                      className={classNames(
                        isActive ? "link active" : "link block mb-3"
                      )}
                    >
                      Blog
                    </NavLink>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ isActive }) => (
                    <NavLink
                      to="/"
                      className={classNames(
                        isActive ? "link active" : "link block mb-8"
                      )}
                    >
                      Contact Us
                    </NavLink>
                  )}
                </Menu.Item>
              </Menu>

              <NavLink
                to="/"
                className="block py-2 text-center text-white border border-transparent rounded-full bg-primary500 hover:bg-green-700"
              >
                Get started today
              </NavLink>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
