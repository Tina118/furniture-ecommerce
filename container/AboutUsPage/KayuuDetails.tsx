import React, { useRef, useState, useEffect } from "react";

const KayuuDetails = () => {
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
  );
};

export default KayuuDetails;
