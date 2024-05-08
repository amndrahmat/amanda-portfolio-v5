import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know More</h5>
      <h2>About Me</h2>
      <div className="container about_me_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={profile_picture} alt="About Amanda image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
          <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Education</h5>
              <small>S.Tr.T Telecommunication Engineering</small>
            </article>
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>
                3+ years <br /> Developer Experience
              </small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>
                3 project working on Job &
                <br />
                10+ personal project
              </small>
            </article>
          </div>
          <p>
            I'm a fullstack developer currently working at Astra International
            Company, a large scale Product Information Management system using
            React, NodeJS, TypeScript, HTML, LESS, Git, Jira & Material UI. My
            daily responsibilities center around creating and maintaining user
            interfaces that comunicating and exchanging data with API's as well
            as creating and designing an effective user experience.
          </p>
          <p>
            Passionate full-stack developer with 3 years of experience building
            web applications. Success in managing development projects using
            scrum, agile, and lean processes. Skilled at conceptualizing,
            designing, developing, and deploying software containing logical and
            mathematical solutions to business problems. Dedicated to driving
            innovation with the ability to follow industry and technological
            trends and facilitate early adoption of innovations.
          </p>
          {/* <p>
            As a problem solver at heart I have a background in Telecommunication Engineering,
            Product Design, & Entrepreneurship. Alongside my studies, I started
            Streets of Oslo AS, a company based in StartUpLab and MESH and
            funded by Innovation Norway which sold backpacks through social
            media. Later I worked as a Consultant in TietoEvry within Product
            Development and Pre-Sales of RPA technology.
          </p>
          <p>
            In 2022, after a career focused on the business side of IT, I
            immersed myself in the technical side, and become a frontend
            developer through Academic Work's 12-week intensive training in
            JavaScript. I then worked as a JavaScript Consultant for Academic
            Work before continuing my career as a Frontend Developer for
            Integration Systems AS.
          </p> */}
          <p></p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
