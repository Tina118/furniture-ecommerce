import { GoDash } from "react-icons/go";

interface IRoomDetailsProps {
  room: string;
  src: string;
  description: string;
  features: string[];
}

const RoomDetails = (props: IRoomDetailsProps) => {
  const { room, src, description, features } = props;

  return (
    <div className="relative mb-[320px] md:mb-0" key={room}>
      <div
        className="-mx-6 md:-mx-12"
        style={{
          background: `url(${src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="h-[712px] md:h-[712px]"></div>
        <div className="w-full bg-[url('/yellow-corner-triangle.png')] shadow-2xl bg-no-repeat lg:w-[55%] absolute md:bottom-0 bg-white -right-5">
          <div className="flex flex-col p-16 lg:p-16 h-[570px]">
            <p className="text-xl font-semibold mb-5 lg:text-[40px] leading-[52px]">
              {room}
            </p>
            <p className="text-base text-gray-500 leading-[30px] mb-4">
              {description}
            </p>
            {features.map((feature) => (
              <div className="flex items-center gap-2 mb-1">
                <GoDash size="30" className="text-yellow-500" />
                <span className="text-gray-500 font-semibold text-base">
                  {feature}
                </span>
              </div>
            ))}

            <button className="py-3.5 px-3 bg-yellow-500 tracking-[0.2rem] text-xs font-semibold sm:tracking-widest mt-7 w-[200px] uppercase">
              SHOP {room}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails
