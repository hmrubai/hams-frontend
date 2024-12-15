import React from "react";
import EmployeeFirstCover from "../../assets/AllAssets/EmployeeFirst/employeeFirst.jpg";
import "./Employee.css";

const employeeHero = () => {
  return (
    <>
      <div className="pt-3">
        <img
          className="img-fluid mt-4 rounded"
          src={EmployeeFirstCover}
          alt="Employee First Cover Image"
        />
      </div>
    </>
  );
};

export default employeeHero;
