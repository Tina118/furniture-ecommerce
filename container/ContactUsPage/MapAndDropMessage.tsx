const MapAndDropMessage = () => {
  return (
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
  );
};

export default MapAndDropMessage;
