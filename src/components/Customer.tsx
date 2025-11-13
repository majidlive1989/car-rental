import React from "react";

import Queta from "./Quote";

const Customer = () => {
  return (
    <div className="flex flex-col py-30 px-6 gap-24">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[36px] text-center font-semibold">
          What Our Customers Say
        </p>
        <p className="text-center text-[14px] text-gray-500">
          Discover why discerning travelers choose StayVenture for their luxury
          accommodations around the world.
        </p>
      </div>
      <div className="flex flex-row gap-4">
        <Queta
          img="../assets/img/women2.png"
          firstName="Emma Rodriguez"
          address="Barcelona, Spain"
        >
          "I've rented cars from various companies, but the experience with
          CarRental was exceptional."
        </Queta>
        <Queta
          img="../assets/img/women1.png"
          firstName="John Smith"
          address="New York, USA"
        >
          "CarRental made my trip so much easier. The car was delivered right to
          my door, and the customer service was fantastic!"
        </Queta>
        <Queta
          img="../assets/img/women2.png"
          firstName="Ava Johnson"
          address="Sydney, Australia"
        >
          "I highly recommend CarRental! Their fleet is amazing, and I always
          feel like I'm getting the best deal with excellent service."
        </Queta>
      </div>
    </div>
  );
};

export default Customer;
