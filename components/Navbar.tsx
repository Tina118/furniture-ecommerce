import { useState } from "react";
import Link from "next/link";

import { GiBasket } from "react-icons/gi";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleHamburger = () => setToggleNav((prev) => !prev);

  return (
    <div className="shadow-xl">
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <img
              src="/kayuu-logo-dark.svg"
              className="h-8 mr-3"
              alt="Kayuu Logo"
            />
          </Link>
          <button
            onClick={handleHamburger}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black md:hidden bg-yellow-400 focus:outline-none"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!toggleNav ? (
              <svg
                className="w-5 h-5 bg-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            ) : (
              <svg
                className="ast-mobile-svg ast-close-svg"
                fill="currentColor"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
              </svg>
            )}
          </button>
          <div
            className={` ${!toggleNav && "hidden"} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-normal flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
              <li>
                <Link
                  onClick={handleHamburger}
                  href="/"
                  className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-600 md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleHamburger}
                  href="/products"
                  className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-600 md:p-0"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleHamburger}
                  href="/rooms"
                  className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-600 md:p-0 "
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleHamburger}
                  href="/about"
                  className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-600 md:p-0 "
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleHamburger}
                  href="/contact"
                  className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-600 md:p-0 "
                >
                  Contact Us
                </Link>
              </li>
              <li className="hidden md:block">
                <Link
                  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 text-yellow-400 md:p-0"
                  href="#"
                  role="button"
                >
                  <GiBasket size={21} />

                  <span className="absolute -mt-8 ml-3.5 border border-black rounded-full bg-yellow-400 px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-black">
                    0
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </nav>
    </div>
  );
};

export default Navbar;
