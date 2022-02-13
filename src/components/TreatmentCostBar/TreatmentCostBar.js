import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import "./TreatmentCostBar.css";
import img from "../../images/surgery.jpg";
import img1 from "../../images/teethW.jpg";
import img2 from "../../images/heartS.jpg";

const TreatmentCostBar = () => {
  return (
    <>
      <div className="treatment-title">
        <h2>
          We Provide You The Best Treatment In <br /> Resonable Price
        </h2>
      </div>
      <div className="card-all">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title className="card-title">Plastic Surgery</Card.Title>
              <h2 className="card-title">$199 <small>/per visit</small></h2>
              <Card.Text className="text-card">
                <li>Lorem Ipsum Dolor Sit</li> <br /> <li>Cubitur Sollicitudin Fentum</li> <br /> <li>Nullam
                Interdum Enim </li>  <br /> <li>Donec Ultricies Metus</li> <br /> <li>Pellentesque Eget Nibh</li>
              </Card.Text>
              <Button variant="primary">Book now</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Teeth Whitening</Card.Title>
              <h2 className="card-title">$299 <small>/per visit</small></h2>
              <Card.Text className="text-card">
              <li>Lorem Ipsum Dolor Sit</li> <br /> <li>Cubitur Sollicitudin Fentum</li> <br /> 
                <li>Nullam Interdum Enim</li> <br /> <li>Donec Ultricies Metus</li> <br /> <li>Pellentesque Eget Nibh</li>
              </Card.Text>
              <Button variant="primary">Book now</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>Heart Surgery</Card.Title>
              <h2 className="card-title">$399 <small>/per visit</small></h2>
              <Card.Text className="text-card">
              <li>Lorem Ipsum Dolor Sit</li> <br /> <li>Cubitur Sollicitudin Fentum</li> <br /><li> Nullam
                Interdum Enim</li> <br /> <li>Donec Ultricies Metus</li> <br /> <li>Pellentesque Eget Nibh</li>
              </Card.Text>
              <Button className="btn" variant="primary">Book now</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};

export default TreatmentCostBar;
