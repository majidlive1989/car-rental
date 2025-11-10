import React from "react";
import DatePicker from "react-datepicker";

export const SearchBox = () => {
  return (
    <div className="flex flex-row bg-white shadow-md">
      <div className="flex flex-col gap-3 p-3 ">
        <select id="loc">
          <option value="Pickup Location" selected>
            Pickup Location
          </option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Houston">Houston</option>
          <option value="Chicago"> Chicago</option>
        </select>
        <p>CHoose Your Location</p>
      </div>
      <div className="text-black flex flex-col gap-3 p-3">
        {<DatePicker label="Basic date picker" />}
        <p>Pick-up Date</p>
      </div>
      <div className="text-black flex flex-col gap-3 p-3">
        {<DatePicker label="Basic date picker" />}
        <p>Pick-up Date</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button className="bg-blue-600  text-white px-5 py-2 rounded-full">
          Search
        </button>
      </div>
    </div>
  );
};
