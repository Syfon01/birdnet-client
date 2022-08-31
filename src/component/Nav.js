import React, { Fragment, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MobileNav from "./Navigation/MobileNav";


import logo from "../img/Logo.svg";

// import MobileNav from "./Navigation/MobileNav";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


// const navigation = [
//   { name: "Home", href: "/", current: true },
//   { name: "About Us", href: "/about", current: false },
//   { name: "Features", href: "/features", current: false },
//   { name: "Contact", href: "/contact", current: false },
// ];


const Nav = () => {

   const [nav, setNav] = useState(false);

   const handleNav = () => {
     setNav(!nav);
   };

  return (
    <>
      <div className="py-5 bg-[#F9FAFB]">
        <nav className="container">
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
                    <Menu.Button className="inline-flex justify-center w-full rounded-md  link">
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
                              to="/loans"
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
                              to="/transfer"
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
                              to="/savings"
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
                        to="/blog"
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
                        to="/contact"
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
                  to="/login"
                  className="text-white border border-transparent rounded-full block text-center lg:w-40 py-2 bg-primary500 hover:bg-green-700"
                >
                  Get started today
                </NavLink>
              </div>

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
                ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-white-900 bg-white ease-in-out duration-500 z-50"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <Link to="/">
              <img src={logo} className="md:w-16 w-24 mt-4" alt="" />
            </Link>
            <div className="">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="block justify-center w-full rounded-md  link">
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
                            to="/loans"
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
                            to="/transfer"
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
                            to="/savings"
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
                      to="/blog"
                      className={classNames(
                        isActive ? "link active" : "link block"
                      )}
                    >
                      Blog
                    </NavLink>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ isActive }) => (
                    <NavLink
                      to="/contact"
                      className={classNames(
                        isActive ? "link active" : "link block"
                      )}
                    >
                      Contact Us
                    </NavLink>
                  )}
                </Menu.Item>
              </Menu>

              <NavLink
                to="/login"
                className="text-white border border-transparent rounded-full block text-center lg:w-40 py-2 bg-primary500 hover:bg-green-700"
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
