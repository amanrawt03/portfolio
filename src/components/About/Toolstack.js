import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiNetlify,
  SiJira,
} from "react-icons/si";
import { FaFigma } from "react-icons/fa";

function Toolstack() {
  const tools = [
    { icon: <SiJira />, name: "JIRA" },
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiNetlify />, name: "Netlify" },
    { icon: <FaFigma />, name: "Figma" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index} style={{ textAlign: "center" }}>
          {tool.icon}
          <div style={{ marginTop: "10px", fontSize: "0.75rem" }}>{tool.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
