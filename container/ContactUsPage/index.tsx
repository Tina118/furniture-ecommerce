import React from "react";

import { Header, PageDescription } from "@/components";

import StoreDetails from "./StoreDetails";
import MapAndDropMessage from "./MapAndDropMessage";

const ContactUsPage = () => {
  return (
    <>
      <Header title="Contact Us - Online Furniture Store" />

      <div className="px-6 md:px-12 pb-16">
        <PageDescription
          pageName="Contact Us"
          pageDescription="We’re here to help! Reach out to us for inquiries, support, or to 
                  learn more about our furniture collections. Whether you have a question or need 
                   assistance, our team is ready to provide the answers you need."
        />

        <StoreDetails />

        <MapAndDropMessage />
      </div>
    </>
  );
};

export default ContactUsPage;
