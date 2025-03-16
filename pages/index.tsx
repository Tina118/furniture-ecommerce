import Head from "next/head";

import {
  BiLogoFacebookSquare,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLogoInstagram,
} from "react-icons/bi";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home - Online Furniture Store</title>
        <meta name="description" content="Kayuu Online Furniture Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="relative">
        <div className="bg-[url('/furniture-store-hero-bg.jpg')] bg-cover ">
          <div className="bg-black opacity-50 h-[650px] sm:h-[570px] md:h-[640px] lg:h-[700px] xl:h-[800px]"></div>
          <div className="px-8 pt-24 absolute top-0 left-0 md:px-12 md:pt-28 md:pb-12">
            <div className="flex items-center mb-5 py-6">
              <div className="border-t border-yellow-500 w-7 mr-4"></div>
              <div className="text-yellow-500 text-xs tracking-[2px] md:text-sm">
                KAYUU FURNITURE STORE
              </div>
            </div>
            <div className="text-white text-3xl font-semibold mb-6 sm:text-[40px] sm:leading-[48px] md:text-5xl">
              Make Yourself At Home
            </div>
            <p className=" text-white text-base leading-7 mb-5 sm:text-sm sm:leading-7 md:w-4/5 lg:w-1/2">
              Vestibulum, diam vulputate amet cras in diam quis turpis curabitur
              tellus aliquet tellus iaculis tempus, sollicitudin massa duis
              eleifend egestas turpis sit etiam commodo viverra lacinia ipsum
              convallis sed augue purus scelerisque non vestibulum elementum mi,
              pellentesque leo tincidunt integer.
            </p>
            <button className="py-3.5 px-8 bg-yellow-500 tracking-[0.2rem] text-xs font-semibold mb-5 md:tracking-widest">
              SHOP NOW
            </button>
            <div className="mt-[14%]">
              <div className="flex justify-end gap-5 text-white md:py-6">
                <BiLogoFacebookSquare size={22} />
                <BiLogoTwitter size={22} />
                <BiLogoYoutube size={22} />
                <BiLogoInstagram size={22} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
