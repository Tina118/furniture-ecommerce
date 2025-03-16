import { GiSofa } from "react-icons/gi";
import { FaWallet, FaTruck } from "react-icons/fa";

const QualitySection = () => {
  return (
    <div className="mb-20 lg:flex lg:mb-24">
      <div className="lg:w-1/2 lg:pr-16">
        <div className="flex flex-col">
          <div className="text-2xl font-semibold mb-5 lg:text-4xl">
            The Best Quality
            <br />
            Furniture Store in Town
          </div>
          <p className="text-gray-500 text-sm font-normal leading-6 mb-5 lg:text-base">
            We provide exceptional quality furniture that stands the test of
            time. From classic designs to modern trends, each piece is crafted
            with precision to enhance your home with both beauty and durability.
          </p>
          <div className="grid grid-cols-1">
            <div className="mb-5">
              <div className="flex flex-col mb-4 md:flex-row md:mb-0">
                <div className="mr-4">
                  <GiSofa size={32} className="text-yellow-500 mb-2" />
                </div>
                <div>
                  <span className="text-sm font-semibold lg:text-base">
                    Huge Selection
                  </span>
                  <p className="text-sm text-gray-500 font-semibold leading-6 lg:text-base">
                    An extensive collection to match every taste and style.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex flex-col mb-4 md:flex-row md:mb-0">
                <div className="mr-4">
                  <FaWallet size={32} className="text-yellow-500 mb-2" />
                </div>
                <div>
                  <span className="text-sm font-semibold lg:text-base">
                    Low Price Everyday
                  </span>
                  <p className="text-sm text-gray-500 font-semibold leading-6 lg:text-base">
                    Affordable luxury, every day without compromise.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex flex-col mb-4 md:flex-row md:mb-0">
                <div className="mr-4">
                  <FaTruck size={32} className="text-yellow-500 mb-2" />
                </div>
                <div>
                  <span className="text-sm font-semibold lg:text-base">
                    Same Day Delivery
                  </span>
                  <p className="text-sm text-gray-500 font-semibold leading-6 lg:text-base">
                    Get your furniture fast with our reliable same-day delivery
                    service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 lg:flex lg:justify-center">
        <img src="/furniture-store-about-store-img.jpg" />
      </div>
    </div>
  );
};

export default QualitySection
