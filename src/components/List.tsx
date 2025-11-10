import React from "react";
import bannercar from "../assets/img/banner.png";
export const List = () => {
  return (
    <>
      <div className="flex flex-row rounded-2xl gap-10 bg-linear-to-r from-[#0558FE] to-[#A9CFFF] p-8">
        <div className="flex flex-col gap-4 items-start left-0">
          <p className="text-[30px] font-medium text-white">
            Do You Own a Luxury Car?
          </p>
          <p className="text-white">
            Monetize your vehicle effortlessly by listing it on CarRental. We
            take care of insurance, driver verification and secure payments — so
            you can earn passive income, stress-free.
          </p>
          <button className="text-[#0558FE] bg-white px-5 py-2 rounded-md hover:scale-105">
            List your car
          </button>
        </div>
        <div>
          <img src={bannercar} alt="" />
        </div>
      </div>
    </>
  );
};
