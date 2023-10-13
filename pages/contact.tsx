import React from "react";
import Head from "next/head";

import { AiFillPhone } from "react-icons/ai";
import { FaLocationDot, FaUserShield } from "react-icons/fa6";
import { FaHeadset, FaTags } from "react-icons/fa";
import {
  BiLogoFacebookSquare,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoInstagram,
} from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Online Furniture Store</title>
        <meta name="description" content="Kayuu Online Furniture Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="px-6 md:px-12 pb-16">
        <div className="pt-12 pb-20 flex flex-col items-center justify-center md:pt-16 md:pb-28">
          <div className="max-w-2xl">
            <div className="text-3xl font-semibold text-center mb-6 sm:text-4xl lg:text-5xl">
              Contact Us
            </div>
            <p className="text-gray-500 text-center sm:text-sm md:leading-7 lg:text-base">
              Tempus amet, sit erat malesuada lorem purus dictum pretium,
              posuere sagittis ultricies enim massa nisi neque augue in
              condimentum diam commodo ornare.
            </p>
          </div>
        </div>

        <div className="flex flex-col mb-12 lg:flex-row lg:mb-24">
          <div className="mb-14 flex flex-col md:flex-row lg:w-2/3 lg:mr-16">
            <div className="md:w-1/3 lg:w-1/6">
              <div className="flex items-center justify-center  bg-gray-100 mb-4 border w-12 h-12 rounded-full">
                <FaLocationDot size={28} className="text-yellow-500" />
              </div>
            </div>
            <div>
              <p className="text-yellow-500 text-xs tracking-[2px] font-semibold mb-4">
                OUR STORE
              </p>
              <p className="text-gray-500 text-2xl font-semibold leading-7 mb-4">
                3538 Torrance Blvd,
                <br className="sm:hidden" /> Torrance, CA 90503, USA{" "}
              </p>
              <p className="text-gray-500 mb-9 lg:w-[500px]">
                Posuere sagittis ultricies enim massa nisi neque augue in
                condimentum lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                dapibus leo.{" "}
              </p>
              <div className="flex space-x-5">
                <BiLogoFacebookSquare
                  size={22}
                  className="hover:text-yellow-500"
                />
                <BiLogoTwitter size={22} className="hover:text-yellow-500" />
                <BiLogoYoutube size={22} className="hover:text-yellow-500" />
                <BiLogoInstagram size={22} className="hover:text-yellow-500" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 divide-y lg:w-1/3">
            <div className="mb-3 lg:mb-0">
              <div className="flex flex-col md:flex-row md:mb-5">
                <div className="mr-4">
                  <AiFillPhone size={22} className="text-yellow-500 mb-1" />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-[2px] text-yellow-500">
                    CALL US
                  </span>
                  <p className="text-lg text-gray-500 font-semibold leading-4">
                    +1 123 456 7890{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-3 lg:mb-0">
              <div className="flex flex-col md:flex-row md:my-5">
                <div className="mr-4">
                  <FaHeadset size={22} className="text-yellow-500 mt-3" />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-[2px] text-yellow-500">
                    SUPPORT
                  </span>
                  <p className="text-lg text-gray-500 font-semibold leading-4">
                    support@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-3 lg:mb-0">
              <div className="flex flex-col md:flex-row md:my-5">
                <div className="mr-4">
                  <FaTags size={22} className="text-yellow-500 mt-3" />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-[2px] text-yellow-500">
                    SALES
                  </span>
                  <p className="text-lg text-gray-500 font-semibold leading-4">
                    sales@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-3 lg:mb-0">
              <div className="flex flex-col md:flex-row md:mt-5">
                <div className="mr-4">
                  <FaUserShield size={22} className="text-yellow-500 mt-3" />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-[2px] text-yellow-500">
                    COMPLAINTS
                  </span>
                  <p className="text-lg text-gray-500 font-semibold leading-4">
                    complaints@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full mb-3 lg:w-3/5">
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=3538%20torrance%20blvd%2C%20ca%2090503%2C%20usa&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near"
              title="3538 torrance blvd, ca 90503, usa"
              aria-label="3538 torrance blvd, ca 90503, usa"
              className="h-[400px] w-full lg:py-10 lg:h-full"
            ></iframe>
          </div>
          <div className=" w-full bg-[url('/yellow-corner-triangle.png')] shadow-2xl bg-no-repeat lg:w-2/5">
            <div className="flex flex-col px-7 py-10 lg:p-16">
              <span className="text-xl font-semibold mb-5 lg:text-3xl">
                Send Us A Message
              </span>
              <form>
                <div className="py-2.5">
                  <label
                    htmlFor="name"
                    className="text-gray-500 text-sm font-bold block leading-8 lg:text-base"
                  >
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    className="border border-gray-500 w-full p-[10px] text-xs leading-3"
                  />
                </div>
                <div className="py-2.5">
                  <label
                    htmlFor="email"
                    className="text-gray-500 text-sm font-bold block leading-8 lg:text-base"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    className="border border-gray-500 w-full p-[10px] text-xs leading-3"
                  />
                </div>
                <div className="py-2.5">
                  <label
                    htmlFor="message"
                    className="text-gray-500 text-sm font-bold block leading-8 lg:text-base"
                  >
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="name"
                    className="border border-gray-500 w-full p-[10px] text-xs leading-3 h-28"
                  />
                </div>
                <button className="py-3.5 px-8 bg-yellow-500 tracking-[0.2rem] text-xs font-semibold mt-2.5 sm:tracking-widest">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
