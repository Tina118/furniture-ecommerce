const CEOIntroduction = () => {
  return (
    <div className="flex flex-col md:flex-row pb-20 md:pb-28">
      <div className="md:w-1/2 md:pr-10 flex items-center justify-center">
        <img src="/furniture-store-about-product-img.jpg" className="w-full" />
      </div>
      <div className="md:w-1/2 ">
        <div>
          <img
            src="/furniture-store-photo-of-founder.jpg"
            className="mt-10 w-full md:mt-0"
          />
          <p className="mt-10 text-gray-500 text-base font-medium leading-7 mb-5">
            At KAYUU, we believe that furniture is more than just decor; it’s a
            reflection of your style, comfort, and personality. From our
            carefully curated collections to our commitment to quality
            craftsmanship, we aim to create pieces that enrich your home and
            your life. With an eye for detail and a passion for innovation,
            we’re here to help you design spaces that inspire and delight.
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
  );
};

export default CEOIntroduction;
