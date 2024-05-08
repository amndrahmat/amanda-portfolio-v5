import React from "react";
import "./hero.css";
import header_picture from "../../assets/header-photo.png";
import Resume from "../../assets/Resume_Amanda_Rahmat_Hidayat.pdf";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagram } from "react-icons/fa";

const header = () => {
  return (
    <header>
      <div className="container hero_container">
        <h3>Hello I'm</h3>
        <h1>Amanda Rahmat Hidayat</h1>
        <h3 className="text-light">Fullstack Developer from Indonesia</h3>
        <div className="button_cta">
          <a href={Resume} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Contact Info
          </a>
        </div>
        <div className="hero_social">
          <a href="https://www.instagram.com/amndrahmat/">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/amandarahmath/">
            <BsLinkedin />
          </a>
          <a href="https://github.com/amndrahmat">
            <FaGithub />
          </a>
        </div>
        <div className="amanda">
          <img src={header_picture} alt="Amanda Rahmat Hidayat" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
