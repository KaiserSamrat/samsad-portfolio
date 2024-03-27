import React from "react";
import TuitionApp from "./TuitionApp";
import HealthApp from "./HealthApp";
import Sadakah from "./Sadakah";

const Project = () => {
  return (
    <>
      <Sadakah />
      <TuitionApp />
      <HealthApp />
      <div className="text-center mt-5">
        <button className="text-white bg-[#212121] px-5 py-2 rounded-lg">Show more</button>
      </div>
    </>
  );
};

export default Project;
