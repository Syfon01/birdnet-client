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

  return (
    <>
      <div
        className="py-5 bg-[#F9FAFB] fixed w-full z-50 transition-all
            duration-200
            h-24"
      >
        <nav className="container ">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div>
                <Link to="/">
                  <img src={logo} className="md:w-16 w-24" alt="" />
                </Link>
              </div>
              <div className="md:flex hidden">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex justify-center items-center w-full rounded-md  link">
                      Products
                      <ChevronDownIcon
                        className="-mr-1 ml-2 h-5 w-5"
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ isActive }) => (
                            <NavLink
                              to="/"
                              className={classNames(
                                isActive
                                  ? "link active"
                                  : "link block my-1 py-2 hover:bg-gray-50"
                              )}
                            >
                              Loan
                            </NavLink>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ isActive }) => (
                            <NavLink
                              to="/"
                              className={classNames(
                                isActive
                                  ? "link active"
                                  : "link block my-1 py-2 hover:bg-gray-50"
                              )}
                            >
                              Transfers
                            </NavLink>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ isActive }) => (
                            <NavLink
                              to="/"
                              className={classNames(
                                isActive
                                  ? "link active"
                                  : "link block my-1 py-2 hover:bg-gray-50"
                              )}
                            >
                              Savings 
                            </NavLink>
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
              <div className="md:flex hidden">
                <NavLink
                  to="/"
                  className="text-white border border-transparent rounded-full block text-center lg:w-40 py-2 bg-primary500 hover:bg-green-700"
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
                ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-white-900 bg-white ease-in-out duration-500 z-50 px-3"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <Link to="/">
              <img src={logo} className="md:w-16 w-24 mt-4 mb-6" alt="" />
            </Link>
            <div className="">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="flex items-center justify-center  rounded-md mb-3  link">
                    Products
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
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
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ isActive }) => (
                          <NavLink
                            to="/"
                            className={classNames(
                              isActive
                                ? "link active"
                                : "link block my-1 py-2 hover:bg-gray-50"
                            )}
                          >
                            Loan
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ isActive }) => (
                          <NavLink
                            to="/"
                            className={classNames(
                              isActive
                                ? "link active"
                                : "link block my-1 py-2 hover:bg-gray-50"
                            )}
                          >
                            Transfers
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ isActive }) => (
                          <NavLink
                            to="/"
                            className={classNames(
                              isActive
                                ? "link active"
                                : "link block my-1 py-2 hover:bg-gray-50"
                            )}
                          >
                            Savings
                          </NavLink>
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
                className="text-white border border-transparent rounded-full block text-center py-2 bg-primary500 hover:bg-green-700"
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
