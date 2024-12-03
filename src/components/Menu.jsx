/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { useCart  } from "../context/CartContext";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

function Menu({ setToken }) {
  const [dropdown, setDropdown] = useState(false);
  const logoutHandler = () => {
    localStorage.clear();
    setTimeout((window.location.href = "/"), 1000);
  };
  const { totalUnits } = useCart();
  const [ toggleMobileMenu, setToggleMobileMenu ] = useState(false)

  if (setToken) return null;

  return (
    <>
      <nav className="bg-transparent md:bg-gray-800 h-16 w-full flex">
        {/* mobile menu */}
        <div
        className="
        fixed z-10 md:hidden w-full bg-[#1f2937] mx-auto p-2
        ">
          <button onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
            className={`text-white p-2 w-fit text-2xl hover:bg-gray-700 rounded-full ${toggleMobileMenu ? "rotate-90 transition-transform" : "rotate-0 transition-transform"}`} 
            ><GiHamburgerMenu/>
          </button>
          <FaCode className="hidden sm:block absolute mt-[14px] mx-auto bottom-0 top-0 left-0 right-0 text-white text-2xl"/>
          <Link
              to="/cart"
              className="absolute right-0 p-2 rounded-full mr-2 text-2xl text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              <IoMdCart />
              <div className="absolute flex items-center justify-center top-6 right-1 bg-[#e2e8f03a] text-xs w-4 h-4 text-white rounded-full">
                {totalUnits}
              </div>
            </Link>
          <div className={`
            ${toggleMobileMenu ? "block" : "hidden"}
            flex flex-col bg-[#1f2937] w-full h-fit uppercase
          `}>
            <Link
              to="/"
              className="px-3 py-2 w-full text-center text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/products/all"
              className="px-3 py-2 w-full text-center text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              All products
            </Link>
            <Link
              to="/category/electronics"
              className="px-3 py-2 w-full text-center text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              electronics
            </Link>
            <Link
              to="/category/jewelery"
              className="px-3 py-2 w-full text-center text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              jewelery
            </Link>
            <Link
              to="/category/men's clothing"
              className="px-3 py-2 w-full text-center text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              men's clothing
            </Link>
            <Link
              to="/category/women's clothing"
              className="px-3 py-2 w-full text-center text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              women's clothing
            </Link>
            <Link to="/profile"
            className="px-3 py-2 w-full text-center text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >Profile
            </Link>
            <button
              onClick={() => logoutHandler()}
              className="uppercase w-full text-center px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >Logout</button>
          </div>
        </div>

        {/* desktop menu */}
        <div className={`hidden md:inline-flex w-full items-center justify-between text-gray-400 uppercase`}>
          <FaCode className="ml-8 text-2xl"/>
          <div className="flex items-center justify-center">
            <Link
              to="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/products/all"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              All products
            </Link>
            <Link
              to="/category/electronics"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              electronics
            </Link>
            <Link
              to="/category/jewelery"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              jewelery
            </Link>
            <Link
              to="/category/men's clothing"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              men's clothing
            </Link>
            <Link
              to="/category/women's clothing"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              women's clothing
            </Link>
          </div>
          <div className="inline-flex justify-center items-center float-right">
            <button
              onClick={() => setDropdown(!dropdown)}
              className="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white uppercase"
            >
              <FaRegUserCircle />
            </button>
            {dropdown && (
              <ul className="absolute top-12 right-14 text-white text-sm bg-[#37506d] rounded-xl p-2 shadow-gray-400 shadow-lg">
                <li>
                  <Link to="/profile"
                  className="uppercase w-full hover:underline flex flex-nowrap items-center justify-center gap-2"
                  ><CgProfile/> Profile
                  </Link>
                </li>

                <li className="mt-2">
                  <button
                    onClick={() => logoutHandler()}
                    className="uppercase w-full hover:underline flex flex-nowrap items-center justify-center gap-2"
                  ><CiLogout/> Logout
                  </button>
                </li>
              </ul>
            )}
            <Link
              to="/cart"
              className="rounded-md px-3 py-2 text-lg text-gray-300 hover:bg-gray-700 hover:text-white mr-8"
            >
              <IoMdCart />
              <div className="absolute flex items-center justify-center top-8 right-9 bg-[#e2e8f03a] text-xs w-4 h-4 text-white rounded-full">
                {totalUnits}
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
