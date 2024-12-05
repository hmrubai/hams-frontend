import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Image,
  Modal,
  Row,
} from "react-bootstrap";

const PhotoHams = () => {
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
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState("Design Studio");
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: "", alt: "" });

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const categories = Object.keys(imagesData);

  return (
    <div>
      <Container>
        <h1 className="my-4 text-center"></h1>
        <ButtonGroup className="mb-3 custon-news gap-4">
          {categories.map((category, index) => (
            <Button
              key={index}
              className="p-2"
              variant={selectedCategory === category ? "primary" : "secondary"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
        <Row>
          {imagesData[selectedCategory].map((image, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Image
                src={image.src}
                alt={image.alt}
                thumbnail
                className="w-100 h-100 img-fluid"
                onClick={() => handleImageClick(image)}
                style={{ cursor: "pointer" }}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton></Modal.Header>
        <Image src={selectedImage.src} alt={selectedImage.alt} fluid />
      </Modal>
    </div>
  );
};

export default PhotoHams;
