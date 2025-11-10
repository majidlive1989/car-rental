import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header";
import { SearchBox } from "./components/SearchBox";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center relative h-screen w-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <SearchBox />
        </div>
      </div>
    </>
  );
}

export default App;
