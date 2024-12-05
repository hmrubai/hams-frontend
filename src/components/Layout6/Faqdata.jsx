// import { useState } from 'react';
// import { Accordion } from 'react-bootstrap'
// import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Faq.css';
import { Accordion } from "react-bootstrap";

const Faqdata = () => {


  return (
    <div>
 <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

      
    </div>
  )
}

export default Faqdata;