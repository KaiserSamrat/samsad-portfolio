import React from 'react';

const TuitionApp = () => {
    return (
        <div className="mt-5">
      <div className="flex items-center justify-between bg-[#292A2B] rounded-t-lg px-4  py-5">
        <p className="text-white">LMS</p>
        <p className="text-white">TuitionApp</p>
        <p className="text-white">2023</p>
      </div>
      <div className=" bg-[#212121] px-5 py-10">

        <div className="grid grid-cols-12 gap-3 ">
          <div className="col-span-5">
            <img
              src="/src/assets/ta1.png"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-rows-12  col-span-4 gap-3">
            <div className="row-span-6">
              <img
                src="/src/assets/ta2.png"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="row-span-6">
              <img
                src="/src/assets/ta3.png"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-3 grid grid-rows-12 gap-3">
            <div className="row-span-3">
              <div className="bg-red-600 px-5 py-5 w-full h-full flex justify-center items-center rounded-lg">
                <p className="text-white">View Project</p>
              </div>
            </div>
            <div className="row-span-3">
            <div className="bg-[#292A2B] px-5 py-5 w-full h-full flex justify-center items-center rounded-lg">
            <img
                src="/src/assets/TA4.png"
      
              />
              </div>
            </div>
            <div className="row-span-6">
            <img
                src="/src/assets/ta5.png"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default TuitionApp;