import React from "react";
import Rent from "./SVG/Rent";

const UiKit = () => {
  return (
    <div className="mt-20">
      <p className="text-center text-white  font-semibold text-3xl mb-10">
        UiKit
      </p>
      <div className="grid md:grid-cols-3 gap-3 ">
        <div className="kit rounded ">
          <div className="bg-[#415763] rounded-t-md flex items-center justify-center">
            <div className="">
              <img src="/src/assets/Rent.svg" className="justify-center h-[350px] w-[330px]" />
            </div>
          </div>
          <div className="bg-dark_secondary rounded-b-md py-2 px-4 flex justify-between items-center">
            <div>
              <p className="text-white text-md">Real Estate App Design</p>
              <p className="text-white text-lg font-semibold">$25</p>
             
            </div>
            <div>
                <img src="/src/assets/figma.svg" />
              </div>
          </div>
        </div>
        <div className="kit rounded">
          <div className="bg-[#183873] rounded-t-md flex items-center justify-center">
            <div className="">
              <img src="/src/assets/app.png" />
            </div>
          </div>
          <div className="bg-dark_secondary rounded-b-md py-2 px-4 flex justify-between items-center">
            <div>
              <p className="text-white text-md">Real Estate App Design</p>
              <p className="text-white text-lg font-semibold">$25</p>
             
            </div>
            <div>
                <img src="/src/assets/figma.svg" />
              </div>
          </div>
        </div>
        <div className="kit rounded ">
          <div className="bg-[#105345] rounded-t-md flex items-center justify-center">
            <div className="">
              <img src="/src/assets/SpeakIn 1.png" className="justify-center h-[350px] "/>
            </div>
          </div>
          <div className="bg-dark_secondary rounded-b-md py-2 px-4 flex justify-between items-center">
            <div>
              <p className="text-white text-md">Real Estate App Design</p>
              <p className="text-white text-lg font-semibold">$25</p>
             
            </div>
            <div>
                <img src="/src/assets/figma.svg" />
              </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <button className="text-white bg-[#212121] px-5 py-2 rounded-lg">Show more</button>
      </div>
    </div>
  );
};

export default UiKit;
