import React from "react";

import { Header, PageDescription } from "@/components";

import { roomsInfo } from "./roomsInfo";
import RoomDetails from "./RoomDetails";

const RoomsPage = () => {
  return (
    <>
      <Header title="Rooms - Online Furniture Store" />

      <div className="px-6 md:px-12 pb-16">
        <PageDescription
          pageName="Rooms"
          pageDescription="Explore our curated collections to elevate every room in your
              home. From cozy living spaces to functional work areas, our
              furniture blends style, comfort, and practicality to create the
              perfect ambiance."
        />

        {roomsInfo.map((room) => (
          <RoomDetails {...room} />
        ))}
      </div>
    </>
  );
};

export default RoomsPage;
