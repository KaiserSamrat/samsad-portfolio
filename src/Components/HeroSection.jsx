import React from "react";
import Avatar from "./SVG/Avatar";
import Behance from "./SVG/Behance";
import Dribble from "./SVG/Dribble";
import Instagram from "./SVG/Instagram";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-dark_secondary px-20 rounded-lg">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-6">
            <p className="bg-light_green  px-3 py-1 text-dark_green rounded-full inline-flex gap-3 items-center">
              <span className=" w-2 h-2 rounded-full bg-dark_green"></span>
              Available for work
            </p>
            <p className="text-6xl text-white font-semibold mt-5">I’m Samsad</p>
            <p className="text-6xl text-dark_blue font-semibold mt-3">
              Product Design
            </p>
            <div className="flex gap-3 mt-8 items-center">
              <button className="bg-dark_blue text-white px-5 py-3 rounded-lg">
                hey@samsad.com
              </button>
              <Behance />
              <Dribble />
              <Instagram />
            </div>
          </div>
          <div className="col-span-6">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
