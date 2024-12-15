import React from "react";
import EmployeeHero from "./employeeHero";
import IntroduceHAMS from "./introduceHAMS";
import HWSE from "./hwse";
import RAEC from "./raec";

const index = () => {
  return (
    <>
      {/* Cover Image of Employee First */}
      <EmployeeHero />
      {/* Introduce HAMS of Employee First */}
      <IntroduceHAMS />
      {/* Holistic,Work Culture,Skill Development & Employee Safety of Employee First */}
      <HWSE />
      {/* Recognition and Appreciation, Employee Feedback & Collaboration of Employee First */}
      <RAEC />
    </>
  );
};

export default index;
