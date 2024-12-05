// import React from 'react'
import Accordion from "react-bootstrap/Accordion";
// import AccordionHeader from 'react-bootstrap/AccordionHeader'
import '../Color.css'
import '../FontStyle.css'
// import { useState } from "react";
// import { useState } from "react";
// import Button from 'react-bootstrap/Button';
import './Faq.css';

const Faq = () => {

  // const [isAccordionOpen, setAccordionOpen] = useState(false);

  // const toggleAccordion = () => {
  //   setAccordionOpen(!isAccordionOpen);
  // };


  const items = [
    {
      id: 1,
      name: "What type of fabrics do you have now?",
      description: "Answer: Lorem ipsum dolor sit amet consectetur",
    },

    {
      id: 2,
      name: "What type of fabrics do A" ,
      description: "Answer: Lorem ipsum dolor sit amet consectetur",
    },
    {
        id: 3,
        name: "What type of fabrics do B",
        description: "Answer: Lorem ipsum dolor sit amet consectetur",
    },
    {
        id: 4,
        name: "What type of fabrics do C",
        description: "Answer: Lorem ipsum dolor sit amet consectetur",
    },
    {
        id: 5,
        name: "What type of fabrics do D",
        description: "Answer: Lorem ipsum dolor sit amet consectetur",
    },
    {
        id: 6,
        name: "What type of fabrics do",
        description: "Answer: Lorem ipsum dolor sit amet consectetur",
    }
  ];

  const ProductHeading={
    borderBottom : '3px solid rgba(127, 198, 164, 1)',
    display: 'inline-block',
    paddingBottom: '4px',
  
  }
  // accordion-button

  return (
    
    <div className="container">
    <div className="">
      <div className="text-center">
        <h2 className="mt-4 mb-4 faqText" style={ProductHeading}>FAQs</h2>
      </div>
   
    <div className="d-flex row justify-content-center align-item-center">
      {items.map((item,i) => {
        return (
          <div key={i} className="col-md-5 m-1">  

              <Accordion>

                <Accordion.Item className="" eventKey="0">

                    <Accordion.Header>
                      
                      {item?.name}
                    
                    </Accordion.Header>

                    <Accordion.Body className="">{item?.description}</Accordion.Body>
                </Accordion.Item>

              </Accordion>

              {/* style={{ backgroundColor: '#343a40' }} */}
          </div>

      );
      })}
    </div>
  </div>
  </div>
  );
};

export default Faq;

// d-flex justify-content-center align-item-center
{/* <Accordion.Header className="">{item?.name}</Accordion.Header> */}


{/* <div className="container">
<div className="">
<h2 className="text-center text-decoration-underline mt-4 mb-4">FAQs</h2>
<div className="d-flex row  justify-content-center align-item-center">
  {items.map((item,i) => {
    return (
      <div key={i} className="col-5 m-1">  
          <Accordion >
          <Accordion.Item eventKey="0">
              <Accordion.Header>{item?.name}</Accordion.Header>
              <Accordion.Body>{item?.description}</Accordion.Body>
          </Accordion.Item>
          </Accordion>
      </div>

  );
  })}
</div>
</div>
</div> */}

{/* <div className="container">
<div className="">
<h2 className="text-center text-decoration-underline mt-4 mb-4">FAQs</h2>
<div className="d-flex row justify-content-center align-item-center">
  {items.map((item,i) => {
    return (
      <div key={i} className="col-md-5 m-1">  
          <Accordion className="">
          <Accordion.Item  eventKey="0">
              <Accordion.Header className="">{item?.name}</Accordion.Header>
              <Accordion.Body>{item?.description}</Accordion.Body>
          </Accordion.Item>
          </Accordion>
      </div>

  );
  })}
</div>
</div>
</div> */}



{/* <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first items accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div> */}


{/* <Accordion className="accordion">

<Accordion.Item className="" eventKey="0">

<Accordion.Header>
  
  {item?.name}
 
</Accordion.Header>
      <Accordion.Body className="">{item?.description}</Accordion.Body>
</Accordion.Item>

</Accordion> */}