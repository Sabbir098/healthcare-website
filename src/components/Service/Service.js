import React from "react";
import { Button } from "react-bootstrap";
import './Service.css';

const Service = (props) => {
  // console.log(props.allService)
  const { serviceName, img, description } = props.allService;
  return (
    <div className="service-container">
      <div className="service-logo">
         <img src={img} alt="" />
      </div>
        <div className="service-name">
          <h2>{serviceName}</h2>
          <p>{description}</p>
          <Button variant="warning">See Details</Button>
        </div>
    </div>
  );
};

export default Service;
