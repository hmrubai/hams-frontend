import React from "react";
import { Table } from "react-bootstrap";
import { SlSocialFacebook } from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";
import { PiInstagramLogoLight } from "react-icons/pi";
import Owner3 from "../../assets/AllAssets/About/Director1.jpeg";
import Owner2 from "../../assets/AllAssets/About/Director2.jpg";

const boardDirectorHAMS = () => {
  const data = [
    {
      id: 1,
      name: "Engr. Md. Shafiqur Rahman",
      role: "Managing Director",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
      image: "http://api-hams.bacbonx.com/uploads/icon/bb_91711878436.jpg",
    },
    {
      id: 2,
      name: "Shaifur Rahman",
      role: "Sr. Director",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
      image: Owner2,
    },
    {
      id: 3,
      name: "Abu Sufian Chowdhury",
      role: "Director",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
      image: Owner3,
    },
  ];

  return (
    <div id="directors" className="container my-5 text-center">
      <h6 className="secondary-heading">HAMS GROUP</h6>
      <h2 className="primary-heading mb-4">Board Of Directors</h2>
      <Table responsive hover className="table-striped align-middle">
        <thead>
          <tr className="table-dark">
            <th scope="col">SL</th>
            <th scope="col">Designation</th>
            <th scope="col">Name</th>
            <th scope="col" className="text-center">
              Picture
            </th>
            <th scope="col" className="text-center">
              Social Media
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.role}</td>
              <td>{item.name}</td>
              <td className="text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </td>
              <td className="text-center">
                <a
                  className="btn btn-link p-0 mx-1"
                  href={item.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SlSocialFacebook size={25} className="text-primary" />
                </a>
                <a
                  className="btn btn-link p-0 mx-1"
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLinkedin size={25} className="text-info" />
                </a>
                <a
                  className="btn btn-link p-0 mx-1"
                  href={item.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PiInstagramLogoLight size={25} className="text-danger" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default boardDirectorHAMS;
