import React from "react";

export const Subscription = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-[36px] text-center font-semibold">
          Never Miss a Deal!
        </p>
        <p className="text-center text-[14px] text-gray-500">
          Subscribe to get the latest offers, new arrivals, and exclusive
          discounts
        </p>
        <div className="gap-3 pt-10">
          <form className="flex px-4 sm:w-200 ">
            <input
              className="border outline-0 border-gray-300 p-3 flex-1 rounded-l-md"
              placeholder="Enter your email id"
              type="email"
            />
            <button
              className="px-8 py-2 bg-[#2563eb] text-white rounded-r-md"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
