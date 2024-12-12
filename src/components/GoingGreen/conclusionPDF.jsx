import React from "react";
import "./GoingGreen.css";

const conclusionPDF = () => {
  return (
    <>
      <div className="container my-3 text-center">
        <h5 className="fw-bolder">Conclusion</h5>
        <p className="my-2 text-justify text-center">
          HAMS Garments Limited stands as a beacon of sustainability in the
          textile and garment industry. Through a combination of strategic
          goals, practical initiatives, and a commitment to ethical and social
          responsibilities, HAMSGL not only meets industry standards but also
          sets new benchmarks for others to follow. The case of HAMSGL serves as
          an inspiring example of how sustainability can be ingrained into the
          core of business operations, driving positive change for the company,
          its stakeholders, and the environment.
        </p>

        {/* PDF Download Links */}

        <a
          href="https://drive.google.com/file/d/1101THNZVfEFrgvQvCehQLfZxRJkaFqae/view?usp=sharing"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="btn fw-bold my-3"
          style={{ background: "rgb(255, 97, 0)", color: "rgb(255, 255, 255)" }}
        >
          Download PDF
        </a>
      </div>
    </>
  );
};

export default conclusionPDF;
