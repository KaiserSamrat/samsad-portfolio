import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./Components/HeroSection";
import UiKit from "./Components/UiKit";
import Journey from "./Components/Journey";
import Work from "./Components/Work";
import Collaboration from "./Components/Collaboration";
import Project from "./Components/Project";

function App() {
  return (
    <>
      <div className="px-10 py-10">
        <HeroSection />
        <UiKit />
        <Journey/>
        <Work/>
        <Collaboration/>
        <Project/>
      </div>
    </>
  );
}

export default App;
