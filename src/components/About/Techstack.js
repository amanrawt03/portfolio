import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";

function Techstack() {
  const techs = [
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React.js" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <SiCss3 />, name: "CSS3" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiDaisyui />, name: "DaisyUI" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index} style={{ textAlign: "center" }}>
          {tech.icon}
          <div style={{ marginTop: "10px", fontSize: "0.75rem" }}>{tech.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
