import React from "react";

const Collaboration = () => {
  return (
    <>
      <div className="grid grid-cols-12 bg-[#212121] px-5 py-3 rounded-lg mt-10">
        <div className="col-span-7">
          <div className="px-10 py-10">
            <p className="text-white text-5xl ">
              Have a project idea to <br /> collaborate with?
            </p>
            <button className="bg-[#2979F4] px-3 py-2 text-white rounded-lg mt-8">
              Start a project
            </button>
          </div>
        </div>
        <div>
          {/* <img src="/src/assets/YogaSam.png" /> */}
        </div>
      </div>
    </>
  );
};

export default Collaboration;
