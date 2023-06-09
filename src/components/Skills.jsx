import React from "react";
import { DiJava, DiJavascript1, DiReact, DiNodejs } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { CgCPlusPlus } from "react-icons/cg";
import { SiMysql, SiPython, SiTensorflow, SiAdobexd } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import "../css/About.css";
import "../css/Skills.css";

const Skills = ({isDarkMode}) => {
  return (
    <div className="skills wh-col">
      <h1 className={`skills-heading ${isDarkMode?"dark5-color":"light5-color"}`}>
        My <span className="gr-col">Skillset</span>
      </h1>
      <div className="skills-box">
        <div className="grid-item tooltip">
          <span className="tooltiptext">C++</span>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className={`flip-card-front ${isDarkMode?"dark3-color":"light3-color"}`}>
                <CgCPlusPlus className="grid-icon" style={{ color: "black" }} />
              </div>
              <div className="flip-card-back">
                <span className="tooltiptext">C++</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item tooltip">
          <span className="tooltiptext">MySQL</span>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className={`flip-card-front ${isDarkMode?"dark3-color":"light3-color"}`} >
                <SiMysql className="grid-icon" style={{ color: "#00618A" }} />
              </div>
              <div className="flip-card-back">
                <span className="tooltiptext">MySQL</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item tooltip">
          <span className="tooltiptext">Java</span>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className={`flip-card-front ${isDarkMode?"dark3-color":"light3-color"}`}>
                <DiJava className="grid-icon" style={{ color: "#DB380E" }} />
              </div>
              <div className="flip-card-back">
                <span className="tooltiptext">Java</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item tooltip">
          <span className="tooltiptext">Python</span>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className={`flip-card-front ${isDarkMode?"dark3-color":"light3-color"}`}>
                <SiPython className="grid-icon" style={{ color: "#3673A5" }} />
              </div>
              <div className="flip-card-back">
                <span className="tooltiptext">Python</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item tooltip">
          <span className="tooltiptext">Javascript</span>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className={`flip-card-front ${isDarkMode?"dark3-color":"light3-color"}`}> 
                <DiJavascript1 className="grid-icon" style={{ color: "black" }} />
              </div>
              <div className="flip-card-back">
                <span className="tooltiptext">Javascript</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item tooltip">
          <span className="tooltiptext">ReactJS</span>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className={`flip-card-front ${isDarkMode?"dark3-color":"light3-color"}`}>
                <DiReact className="grid-icon" style={{ color: "#61DBFB" }} />
              </div>
              <div className="flip-card-back">
                <span className="tooltiptext">ReactJS</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item tooltip">
          <span className="tooltiptext">Figma</span>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className={`flip-card-front ${isDarkMode?"dark3-color":"light3-color"}`}>
                <FiFigma className="grid-icon" style={{ color: "#90C53F" }} />
              </div>
              <div className="flip-card-back">
                <span className="tooltiptext">Figma</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item tooltip">
          <span className="tooltiptext">TensorFlow</span>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className={`flip-card-front ${isDarkMode?"dark3-color":"light3-color"}`}>
                <SiTensorflow className="grid-icon" style={{ color: "#FF9903" }} />
              </div>
              <div className="flip-card-back">
                <span className="tooltiptext">TensorFlow</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item tooltip">
          <span className="tooltiptext">AdobeXD</span>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className={`flip-card-front ${isDarkMode?"dark3-color":"light3-color"}`}>
                <SiAdobexd className="grid-icon" style={{ color: "black" }} />
              </div>
              <div className="flip-card-back">
                <span className="tooltiptext">AdobeXD</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item tooltip">
          <span className="tooltiptext">AWS</span>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className={`flip-card-front ${isDarkMode?"dark3-color":"light3-color"}`}>
                <FaAws className="grid-icon" style={{ color: "#FF9903" }} />
              </div>
              <div className="flip-card-back">
                <span className="tooltiptext">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
