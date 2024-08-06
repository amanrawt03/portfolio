import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shareSphere from '../../Assets/shareSphere.png'
import braveOn from '../../Assets/braveon.png'
import chat from '../../Assets/chat.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shareSphere}
              isBlog={false}
              title="Share Sphere"
              description={`Share-Sphere is a social media platform built using the MERN stack. It features real-time notifications, user engagement tools like likes and comments, and user suggestions. Integrated with Cloudinary for image management and secured with JWT-based authentication, Share-Sphere offers a seamless user experience with optimized UI/UX.`}
              ghLink="https://github.com/amanrawt03/SocialMediaPlatform"
              demoLink="https://sharesphere-z576.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={braveOn}
              isBlog={false}
              title="Brave-On"
              description="Brave On is a task management tool designed to help users stay motivated and productive. The platform allows users to create and delete tasks, track their progress with a motivational score system, and compete with others. Built using MERN, integrated JWT-based authentication."
              ghLink="https://github.com/amanrawt03/BraveOn-To-doList-"
              demoLink="https://braveon-to-dolist.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Connectly"
              description="Online code and markdown editor built with React.js. Supports HTML, CSS, and JS code with instant preview. Includes a markdown editor for README files with GFM and custom HTML tags, with toolbar and instant preview. Both editors support auto-saving using local storage."
              ghLink="https://github.com/amanrawt03/connectly"
              demoLink="https://connectly-2z7d.onrender.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
