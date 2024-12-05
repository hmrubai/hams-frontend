import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FaEnvelope, FaHome, FaRegFileAlt, FaUser } from "react-icons/fa";
import Gallery from "./Gallery";
import "./NewsEvents.css";

const imagesData = {
  "Design Studio": [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28XQyk9HQzxt6SONrW6WYSHq50ZeP8tqcBg&s",
      alt: "Design Studio 1",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsxOTusiI9H4ANkyR3c4_rgw6xDQCgj1WCg&s",
      alt: "Design Studio 2",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28XQyk9HQzxt6SONrW6WYSHq50ZeP8tqcBg&s",
      alt: "Design Studio 1",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsxOTusiI9H4ANkyR3c4_rgw6xDQCgj1WCg&s",
      alt: "Design Studio 2",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJeDq5Hj8D1Ig1zBVEqODGj-_arT8bwAvfg&s",
      alt: "City 1",
    },
    {
      src: "https://www.shutterstock.com/image-photo/full-size-profile-side-phot-260nw-1877879512.jpg",
      alt: "City 2",
    },
  ],
  Fabrication: [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBH3KznphZDXZvwo5Hib5HjI0iH71IOiP7w&s",
      alt: "City 1",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBH3KznphZDXZvwo5Hib5HjI0iH71IOiP7w&s",
      alt: "City 2",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpW-bNRzruNGbK4JS1TQIHm0D25-eoQcYmFQ&s",
      alt: "City 1",
    },
    {
      src: "https://www.shutterstock.com/image-photo/full-size-profile-side-phot-260nw-1877879512.jpg",
      alt: "City 2",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJeDq5Hj8D1Ig1zBVEqODGj-_arT8bwAvfg&s",
      alt: "City 1",
    },
    {
      src: "https://www.shutterstock.com/image-photo/full-size-profile-side-phot-260nw-1877879512.jpg",
      alt: "City 2",
    },
  ],
  Embellishment: [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpW-bNRzruNGbK4JS1TQIHm0D25-eoQcYmFQ&s",
      alt: "City 1",
    },
    {
      src: "https://www.shutterstock.com/image-photo/full-size-profile-side-phot-260nw-1877879512.jpg",
      alt: "City 2",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJeDq5Hj8D1Ig1zBVEqODGj-_arT8bwAvfg&s",
      alt: "City 1",
    },
    {
      src: "https://www.shutterstock.com/image-photo/full-size-profile-side-phot-260nw-1877879512.jpg",
      alt: "City 2",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJeDq5Hj8D1Ig1zBVEqODGj-_arT8bwAvfg&s",
      alt: "City 1",
    },
    {
      src: "https://www.shutterstock.com/image-photo/full-size-profile-side-phot-260nw-1877879512.jpg",
      alt: "City 2",
    },
  ],
  Garments: [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJeDq5Hj8D1Ig1zBVEqODGj-_arT8bwAvfg&s",
      alt: "City 1",
    },
    {
      src: "https://www.shutterstock.com/image-photo/full-size-profile-side-phot-260nw-1877879512.jpg",
      alt: "City 2",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAkH2BXnQ_0-OCDlEjn_vKXx6bBCYPgw2qkg&s",
      alt: "City 1",
    },
    {
      src: "https://www.shutterstock.com/image-photo/full-size-profile-side-phot-260nw-1877879512.jpg",
      alt: "City 2",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAkH2BXnQ_0-OCDlEjn_vKXx6bBCYPgw2qkg&s",
      alt: "City 1",
    },
    {
      src: "https://www.shutterstock.com/image-photo/full-size-profile-side-phot-260nw-1877879512.jpg",
      alt: "City 2",
    },
  ],
  CSR: [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAkH2BXnQ_0-OCDlEjn_vKXx6bBCYPgw2qkg&s",
      alt: "City 1",
    },
    {
      src: "https://www.shutterstock.com/image-photo/full-size-profile-side-phot-260nw-1877879512.jpg",
      alt: "City 2",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJeDq5Hj8D1Ig1zBVEqODGj-_arT8bwAvfg&s",
      alt: "City 1",
    },
    {
      src: "https://www.shutterstock.com/image-photo/full-size-profile-side-phot-260nw-1877879512.jpg",
      alt: "City 2",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJeDq5Hj8D1Ig1zBVEqODGj-_arT8bwAvfg&s",
      alt: "City 1",
    },
    {
      src: "https://www.shutterstock.com/image-photo/full-size-profile-side-phot-260nw-1877879512.jpg",
      alt: "City 2",
    },
  ],
  Accreditation: [
    {
      src: "https://www.shutterstock.com/image-photo/full-size-profile-side-phot-260nw-1877879512.jpg",
      alt: "City 1",
    },
    {
      src: "https://www.shutterstock.com/image-photo/full-size-profile-side-phot-260nw-1877879512.jpg",
      alt: "City 2",
    },
    {
      src: "https://www.shutterstock.com/image-photo/full-size-profile-side-phot-260nw-1877879512.jpg",
      alt: "City 2",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJeDq5Hj8D1Ig1zBVEqODGj-_arT8bwAvfg&s",
      alt: "City 1",
    },
    {
      src: "https://www.shutterstock.com/image-photo/full-size-profile-side-phot-260nw-1877879512.jpg",
      alt: "City 2",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJeDq5Hj8D1Ig1zBVEqODGj-_arT8bwAvfg&s",
      alt: "City 1",
    },
  ],
};

const PhotoGallery = () => {
  const [key, setKey] = useState("home");

  return (
    <div className="m-3">
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
        id="fill-tab-example"
        className="mb-3 custon-news gap-4 border-0"
        fill
      >
        <Tab
          eventKey="home"
          className="border-0"
          title={
            <>
              <FaHome /> Design Studio
            </>
          }
        >
          <Gallery images={imagesData["Design Studio"]} />
        </Tab>
        <Tab
          eventKey="profile"
          className="border-0"
          title={
            <>
              <FaUser /> Fabrication
            </>
          }
        >
          <Gallery images={imagesData["Fabrication"]} />
        </Tab>
        <Tab
          eventKey="longer-tab"
          className="border-0"
          title={
            <>
              <FaRegFileAlt /> Embellishment
            </>
          }
        >
          <Gallery images={imagesData["Embellishment"]} />
        </Tab>
        <Tab
          eventKey="contact"
          className="border-0"
          title={
            <>
              <FaEnvelope /> Garments
            </>
          }
        >
          <Gallery images={imagesData["Garments"]} />
        </Tab>
        <Tab
          eventKey="CSR"
          className="border-0"
          title={
            <>
              <FaEnvelope /> CSR
            </>
          }
        >
          <Gallery images={imagesData["CSR"]} />
        </Tab>
        <Tab
          eventKey="Accreditation"
          className="border-0"
          title={
            <>
              <FaEnvelope />
              <span className="mx-1"> Accreditation</span>
            </>
          }
        >
          <Gallery images={imagesData["Accreditation"]} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default PhotoGallery;
