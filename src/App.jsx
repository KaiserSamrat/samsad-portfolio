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
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="px-10 py-10">
        <Navbar/>
        <HeroSection />
        <Project/>
        <UiKit />
        <Journey/>
        <Work/>
        <Collaboration/>
     
        <Footer/>
      </div>
    </>
  );
}

export default App;
