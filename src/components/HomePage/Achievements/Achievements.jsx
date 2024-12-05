import React from "react";
import "./Achievements.css";
import { Col, Row } from "react-bootstrap";
import responsible from "../../../assets/responsible.png";
import product from "../../../assets/product.png";
import employees from "../../../assets/employees.png";
import expertise from "../../../assets/expertise.png";
import customer from "../../../assets/customer.png";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import CountUp from "react-countup";
import Achievement from "./Achievement";
import filter from "../../../assets/Achievement/filter.png";
import tools from "../../../assets/Achievement/tools.png";
import edit from "../../../assets/Achievement/edit.png";
import settings from "../../../assets/Achievement/settings.png";
import cloth from "../../../assets/Achievement/cloth.png";
import rain from "../../../assets/Achievement/rain.png";
import healthcare from "../../../assets/Achievement/healthcare.png";
import ProvidedService from "./ProvidedService";

const Achievements = () => {
  const ideaData = [
    {
      id: 1,
      image: edit,
      heading: "DESIGN CENTRES",
      heading2: "HAMS Design Center: Pioneering Creativity and Innovation",
      description: "Bringing art and science together",
      des1: "At the heart of HAMS's success lies its Design Center, a hub of creativity and innovation that drives the company's distinctive edge in the fashion industry. The center serves as the crucible where ideas are molded into unique, trendsetting designs that resonate with global fashion trends. HAMS Design Center is not merely about sketching garments; it's a collaborative space where designers, fabric experts, and sustainability enthusiasts converge. Focused on weaving a narrative of elegance, functionality, and environmental responsibility, the Design Center embodies HAMS's commitment to pushing the boundaries of conventional fashion, setting the stage for unparalleled collections that captivate and inspire.",
    },
    {
      id: 2,
      image: settings,
      heading: "3D SAMPLING BY CLO3",
      heading2: "Revolutionizing Fashion with HAMS's 3D Sampling by Clo3",
      description: "Transforming ideas and concepts into products",
      des1: "HAMS stands at the forefront of the fashion industry, integrating cutting-edge technology into its creative processes. The introduction of 3D sampling by Clo3 is a testament to HAMS's commitment to innovation and efficiency. This revolutionary technology allows designers to visualize garments in a three-dimensional space, streamlining the sampling process. With Clo3, HAMS accelerates product development, reduces waste, and ensures precision in design execution. This forward-thinking approach not only enhances the design-to-production timeline but also aligns seamlessly with HAMS's sustainability goals, marking a significant leap forward in the company's quest for excellence in fashion and environmental responsibility.",
    },
    {
      id: 3,
      image: rain,
      heading: "DIGITAL FOOTPRINT",
      heading2: "Transforming Transactions: HAMS Digital Payment System",
      description:
        "Digital security, surveillance, access control, payment systems, and tracability.",
      des1: "In a stride towards modernity and efficiency, HAMS has embraced a robust digital payment system. This forward-thinking approach not only enhances the financial transaction process within the organization but also reflects HAMS's commitment to employee welfare. With a 100% digital payment system in place, HAMS ensures swift, secure, and transparent disbursement of salaries and benefits. This initiative not only aligns with global financial trends but also underscores HAMS's dedication to providing its workforce with convenient and reliable financial solutions, fostering a seamless and progressive work environment. The digital payment system embodies HAMS's commitment to innovation, efficiency, and the well-being of its valued employees.",
    },
    {
      id: 4,
      image: healthcare,
      heading: "MEDICAL FASCILITIES",
      heading2: "Caring for Well-Being: Medical Facilities at HAMS",
      description: "Providing industry level medical fascilities.",
      des1: "At HAMS, the well-being of its workforce is paramount, and this commitment extends to providing comprehensive medical facilities. The organization ensures access to quality healthcare for its employees, promoting a healthy and supportive work environment. HAMS's medical facilities are equipped with modern amenities, offering timely healthcare services, routine check-ups, and emergency support. The emphasis on health reflects HAMS's holistic approach to employee welfare, acknowledging that a healthy workforce is key to sustained productivity. Through its medical facilities, HAMS not only addresses the immediate health needs of its employees but also fosters a culture of preventive care, emphasizing the importance of a healthy work-life balance.",
    },
    {
      id: 5,
      image: cloth,
      heading: "POLICIES",
      heading2: "POLICIES",
      description: "Bringing alive the look & feel",
      des1: "HAMS Garments Limited (HAMSGL) is dedicated to producing high-quality garments, ensuring excellence through rigorous inspections, adherence to the AQL 1.5 standard, and comprehensive lab testing. Sustainability is a core value, with the use of certified organic fabrics and a target of 95% sustainability in operations by increasing the use of recycled fibers. The company employs eco-friendly dyeing processes and advanced technology to reduce water and energy consumption. HAMSGL's production efficiency is enhanced by automated machinery, supporting a monthly capacity of 1.5 million garments and 3.5 million undergarments. Innovation drives the company, with continuous investment in state-of-the-art equipment and research to create unique fabrics. Worker safety and welfare are prioritized, with safe working conditions and health benefits. Customer satisfaction is achieved through product customization, timely delivery, and responsive support. HAMSGL also emphasizes environmental responsibility by minimizing waste, utilizing energy-efficient practices, and conserving water. Ethical sourcing and transparency are maintained in collaboration with high-standard suppliers. Continuous improvement is encouraged through feedback and regular employee training, ensuring leadership in quality, sustainability, and customer satisfaction.",
    },
  ];

  return (
    <div className="container-sm my-5">
      <Row className="">
        <Col lg={12} xl={12} md={12} className="mx-auto my-2 p-3">
          <Row className="d-flex justify-content-center my-5 mx-auto">
            {ideaData.map((idea) => (
              <ProvidedService key={idea.id} idea={idea}></ProvidedService>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Achievements;
