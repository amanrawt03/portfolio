import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aman Rawat </span>
            from <span className="purple"> Uttrakhand, India.</span>
            <br />
            I am currently pursuing B.Tech in CSE from Lovely Professional University.
            <br />
            I am passionate about technology and possess strong programming skills in various languages, including C++, javascript and Java.
            <br />
            Additionally, I have experience in web development. Recently, built a social media platform project(Share-Sphere) with MERN Stack.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          I am eager to learn and grow, and I am always looking for new challenges.
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
