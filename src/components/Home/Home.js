import React from "react";
// import Banner from "../Banner/Banner";
import "./Home.css";
import banner from "../../images/back.jpg";
import { Button } from "react-bootstrap";
import Services from "../Services/Services";
import TreatmentCostBar from "../TreatmentCostBar/TreatmentCostBar";

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: 608,
        }}
      >
         <div className="title-container">
          <h1>
            We Provide <span style={{ color: "skyblue" }}>Medical</span>{" "}
            Services
          </h1>
          <h1>
            That You Can <span style={{ color: "skyblue" }}>Trust</span>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Laboriosam, eum maxime dolorem, <br /> blanditiis dolores reiciendis
            esse veniam ad vero odit
          </p>
          <Button variant="primary">Learn more</Button>
        </div>
      </div>
      <Services></Services>
      <TreatmentCostBar></TreatmentCostBar>
    </>
  );
};

export default Home;
