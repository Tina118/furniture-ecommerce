import React from "react";

import {
  BiLogoFacebookSquare,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoInstagram,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div>
      <div className="flex w-full">
        <img
          src="/newsletter-banner-img.jpg"
          alt="newletter-banner"
          className="w-1/2 hidden md:block"
        />
        <div className="shadow-2xl w-full md:w-1/2 ">
          <div className="px-8 py-12 md:px-6 lg:p-16">
            <div className="flex items-center mb-2 lg:mb-6">
              <div className="border-t border-yellow-600 w-7 mr-4"></div>
              <div className="text-yellow-600 text-sm tracking-widest">
                SUBSCRIBE TO OUR NEWSLETTER
              </div>
            </div>
            <div className="mb-2.5 text-lg font-bold lg:text-3xl lg:font-semibold lg:leading-[44px] lg:mb-6">
              See The Latest Collection & Get Special Offer
            </div>
            <div className="flex mb-3 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="border border-black w-full my-2.5 mr-2 p-2 sm:px-2"
              />
              <button className="py-3.5 px-8 bg-yellow-500 tracking-[0.2rem] text-xs font-semibold my-2.5 sm:tracking-widest">
                SUBSCRIBE
              </button>
            </div>
            <div className="text-gray-500 text-sm">
              Stay updated with the latest trends and exclusive deals!
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white ">
        <div className="px-6 py-12 grid sm:grid-cols-2 sm:gap-8 md:grid-cols-4 md:gap-x-20">
          <div className="flex mb-3 flex-col">
            <img
              src="/kayuu-logo-white.svg"
              alt="logo"
              className="w-36 h-7 mb-10"
            />
            <ul>
              <li>3538 Torrance Blvd, Torrance, CA 90503, USA</li>
              <li>+1 123 456 7890</li>
              <li>info@example.com</li>
              <li>Visit Our Store</li>
            </ul>
          </div>
          <div className="flex mb-3 flex-col">
            <div className="mb-3.5 text-xl">Useful Links</div>
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>Rooms</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex mb-3 flex-col">
            <div className="mb-3.5 text-xl">Rooms</div>
            <ul>
              <li>Living Room</li>
              <li>Bedroom</li>
              <li>Kitchen</li>
              <li>Bath Room</li>
              <li>Home Office</li>
            </ul>
          </div>
          <div className="flex mb-3 flex-col">
            <div className="mb-3.5 text-xl">Stay In Touch</div>
            <ul>
              <li>Keep in touch for updates, insights, and exclusive offers!</li>
            </ul>
            <div className="flex mt-3.5 space-x-2 md:grid md:grid-cols-2 md:space-x-0 md:gap-2 lg:flex lg:space-x-2">
              <div className="border border-transparent bg-white/[0.1] p-2">
                <BiLogoFacebookSquare size={22} />
              </div>
              <div className="border border-transparent bg-white/[0.1] p-2">
                <BiLogoTwitter size={22} />
              </div>
              <div className="border border-transparent bg-white/[0.1] p-2">
                <BiLogoYoutube size={22} />
              </div>
              <div className="border border-transparent bg-white/[0.1] p-2">
                <BiLogoInstagram size={22} />
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="px-5 py-8 flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="mb-2.5 sm:mb-0">
            Copyright © 2023 Online Furniture Store
          </p>
          <p>Powered By Online Furniture Store</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
