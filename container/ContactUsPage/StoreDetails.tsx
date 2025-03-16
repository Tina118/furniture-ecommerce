import { AiFillPhone } from "react-icons/ai";
import { FaLocationDot, FaUserShield } from "react-icons/fa6";
import { FaHeadset, FaTags } from "react-icons/fa";
import {
  BiLogoFacebookSquare,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoInstagram,
} from "react-icons/bi";

const StoreDetails = () => {
  return (
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
            condimentum lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.{" "}
          </p>
          <div className="flex space-x-5">
            <BiLogoFacebookSquare size={22} className="hover:text-yellow-500" />
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
  );
};

export default StoreDetails
