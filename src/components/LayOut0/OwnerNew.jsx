import React from "react";
import { Table } from "react-bootstrap";
import { SlSocialFacebook } from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";
import { PiInstagramLogoLight } from "react-icons/pi";
import Owner3 from "../../assets/AllPhotoFinal/Director1.jpeg";
import "../../../src/CommonStyles/CommonStyles.css";

const DataTable = () => {
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
      image: "https://www.hams.com.bd/images/client-2.jpg",
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
    <div className="container my-5 text-center">
      <h6 class="secondary-heading">HAMS GROUP</h6>
      <h6 class="primary-heading">Board Of Directors</h6>
      <Table responsive table table-hover>
        <thead className="">
          <tr>
            <th>SL</th>
            <th>Designation</th>
            <th>Name</th>
            <th className="text-center">Picture</th>
            <th className="text-center">Social Media</th>
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
                    borderRadius: "100%",
                  }}
                />
              </td>
              <td className="text-center">
                <a
                  className="m-1 text-black"
                  href={item.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SlSocialFacebook size={30} className="" />
                </a>
                <a
                  className="m-1 text-black"
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLinkedin size={30} />
                </a>
                <a
                  className="m-1 text-black"
                  href={item.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PiInstagramLogoLight size={30} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
