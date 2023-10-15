import React, { useRef, useState, useEffect } from "react";
import Head from "next/head";

import { GiSofa } from "react-icons/gi";
import { FaWallet, FaTruck } from "react-icons/fa";

const About = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  const [year, setYear] = useState<number>(0);
  const [employee, setEmployee] = useState<number>(0);
  const [products, setProducts] = useState<number>(500);
  const [stores, setStores] = useState<number>(0);

 
  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
      } else {
        setIntersecting(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      setInterval(() => {
        setYear((prevYear) => (prevYear < 1982 ? prevYear + 2 : prevYear));
      }, 0);

      setInterval(() => {
        setEmployee((prevCounter) =>
          prevCounter < 400 ? prevCounter + 1 : prevCounter
        );
        setProducts((prevCounter) =>
          prevCounter < 1000 ? prevCounter + 1 : prevCounter
        );
      }, 10);

      setInterval(() => {
        setStores((prevCounter) =>
          prevCounter < 5 ? prevCounter + 1 : prevCounter
        );
      }, 1000);
    }
  }, [isIntersecting]);

  return (
    <>
      <Head>
        <title>About Us - Online Furniture Store</title>
        <meta name="description" content="Kayuu Online Furniture Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="px-6 md:px-12 pb-16">
        <div className="pt-12 pb-20 flex flex-col items-center justify-center md:pt-16 md:pb-28">
          <div className="max-w-2xl">
            <div className="text-3xl font-semibold text-center mb-6 sm:text-4xl lg:text-5xl">
              About Us
            </div>
            <p className="text-gray-500 text-center sm:text-sm md:leading-7 lg:text-base">
              Tempus amet, sit erat malesuada lorem purus dictum pretium,
              posuere sagittis ultricies enim massa nisi neque augue in
              condimentum diam commodo ornare.
            </p>
          </div>
        </div>

        <div className="md:flex pb-20 md:pb-28">
          <div className="md:w-1/2 md:pr-10 md:flex items-center justify-center">
            <img
              src="/furniture-store-about-product-img.jpg"
              className="w-full"
            />
          </div>
          <div className="md:w-1/2 ">
            <div>
              <img
                src="/furniture-store-photo-of-founder.jpg"
                className="mt-10 w-full md:mt-0"
              />
              <p className="mt-10 text-gray-500 text-base font-medium leading-7 mb-5">
                Eu egestas felis et viverra amet dictum ornare turpis gravida
                orci bibendum odio sit volutpat proin at enim ultrices dolor
                nullam tortor ornare cursus nibh sit adipiscing adipiscing enim
                erat nunc donec tellus, egestas commodo netus adipiscing
                ultrices at phasellus ut vitae nunc malesuada id nec suspen
                disse sit turpis mauris biben dum amet dignissim in sit duis
                pharetra vehicula eget suspen disse at vitae integer gravida
                sagittis.
              </p>
              <div className="text-sm font-semibold tracking-[2px] text-gray-500">
                HARVEY D. GEORGE
              </div>
              <div className="text-sm text-gray-500 font-normal leading-7">
                Founder of KAYUU
              </div>
            </div>
          </div>
        </div>

        <div className="relative mb-[320px] md:mb-0" ref={targetRef}>
          <div className="bg-[url('/about-furniture-store-img.jpg')] bg-cover -mx-6 md:-mx-12">
            <div className="h-[172px] bg-black opacity-50 md:h-[555px] "></div>
            <div className="bg-white/100 py-10 absolute -bottom-[256px] right-0 w-full shadow-sm grid grid-cols-2 md:bottom-0 md:right-2 md:grid-cols-4">
              <div className="flex flex-col items-center justify-center mb-8 md:mb-0">
                <span className="text-gray-500 text-3xl font-semibold lg:text-5xl">
                  {year}
                </span>
                <span className="text-gray-500 text-sm tracking-[2px] leading-9">
                  FOUNDED
                </span>
              </div>
              <div className="flex flex-col items-center justify-center mb-8 md:mb-0">
                <span className="text-gray-500 text-3xl font-semibold lg:text-5xl">
                  {employee}
                </span>
                <span className="text-gray-500 text-sm tracking-[2px] leading-9">
                  EMPLOYEE
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-gray-500 text-3xl font-semibold lg:text-5xl">
                  {products}+
                </span>
                <span className="text-gray-500 text-sm tracking-[2px] leading-9">
                  PRODUCTS
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-gray-500 text-3xl font-semibold lg:text-5xl">
                  {stores}
                </span>
                <span className="text-gray-500 text-sm tracking-[2px] leading-9">
                  STORES
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-16">
          <p className="text-sm font-medium leading-7 text-gray-500 mb-5 md:text-base">
            Faucibus etiam lacus sollicitudin sed amet, sit vitae lorem ornare
            egestas nisi, diam cursus non mattis etiam sodales vestibulum arcu
            a, aliquam at leo condimentum etiam dui eget arcu nunc, vivamus vel
            facilisi auctor aliquet eu mollis accumsan fermentum ipsum ornare
            viverra proin eleifend ultricies est, aliquet felis vivamus
            praesent.
          </p>
          <div className="md:flex">
            <p className="text-gray-500 text-sm font-normal leading-6 mb-4 md:mb-0 md:w-1/2 md:mr-20 md:text-base lg:mr-60">
              Sit ipsum elit nisl commodo cursus diam massa nunc, commodo amet,
              viverra lobortis aliquam leo vitae in dictum sagittis, dui est
              pellentesque non est nunc aliquet magna malesuada diam nunc quis
              duis id nunc id ultrices cursus lorem consequat tincidunt
              pharetra, risus quam facilisis lectus ipsum ut mattis pretium eros
              tincidunt neque.
            </p>
            <p className="text-gray-500 text-sm font-normal leading-6 md:w-1/2 md:text-base">
              Aliquet magna malesuada diam nunc quis duis id nunc id ultrices
              cursus lorem consequat tincidunt pharetra, risus quam facilisis
              lectus ipsum ut mattis pretium eros tincidunt neque, faucibus
              volutpat accumsan pretium arcu in donec et, rhoncus in sed
              eleifend odio gravida vitae quam donec faucibus molestie bibendum.
            </p>
          </div>
        </div>

        <div className="mb-20 lg:flex lg:mb-24">
          <div className="lg:w-1/2 lg:pr-16">
            <div className="flex flex-col">
              <div className="text-2xl font-semibold mb-5 lg:text-4xl">
                The Best Quality
                <br />
                Furniture Store in Town
              </div>
              <p className="text-gray-500 text-sm font-normal leading-6 mb-5 lg:text-base">
                Sagittis enim, auctor ultrices dui etiam viverra nulla
                scelerisque in semper porttitor pharetra, tortor amet lorem
                cursus velit posuere tristique tempus, tincidunt non velit quis
                congue lectus a ullamcorper iaculis.
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
                        Sagittis enim, auctor ultrices dui etiam viverra nulla.
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
                        Tincidunt sed eget nunc tellus viverra sapien massa
                        cursus.
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
                        Pretium, tempus ultricies lacus eleifend scelerisque
                        sem.
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
      </div>
    </>
  );
};

export default About;
