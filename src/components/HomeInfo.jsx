import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Ethan Henry</span>
      <br />I am creative developer
    </h1>
  ),

  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way"
      link="/about"
      btnText="Find Out More"
    />
  ),
  3: (
    <InfoBox
      text="Created multiple different projects to success find out more how I did this"
      link="/projects"
      btnText="See What I've Worked On"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for Dev, I am just a few keystrokes way."
      link="/contact"
      btnText="Feel Free to Get In Touch"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
