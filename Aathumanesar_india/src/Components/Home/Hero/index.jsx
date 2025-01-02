import React from "react";
import "./style.css";
import subtitleImg from "../../../assets/images/subtitle-img-white.png";
import { IonIcon } from "react-ion-icon";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <p className="section-subtitle">
          <img src={subtitleImg} width="32" height="7" alt="Wavy line" />
          <span>Welcome to Wildvine</span>
        </p>
        <h2 className="h1 hero-title">
          Give Love for Saving <strong>World Animals</strong>
        </h2>
        <p className="hero-text">
          Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          suspendisse ultrices gravida.
        </p>
        <button className="btn btn-primary">
          <span>Donation</span>
          <IonIcon name="heart-outline" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
