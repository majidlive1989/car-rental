import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header";
import { SearchBox } from "./components/SearchBox";
import Featured_Vehicles from "./components/Featured_Vehicles";
import { List } from "./components/List";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center relative  w-full  h-screen ">
        <img
          className="bg-object-cover bottom-0 bg-no-repeat  absolute p-9"
          src="../src/assets/img/main_car.png"
          alt=""
        />

        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <h1 className="font-semibold text-[48px]">Luxury cars on Rent</h1>
          <SearchBox />
        </div>
      </div>
      <div className="flex flex-row gap-3 p-4">
        <div>
          <Featured_Vehicles />
        </div>
      </div>
      <div>
        <List />
      </div>
    </>
  );
}

export default App;
