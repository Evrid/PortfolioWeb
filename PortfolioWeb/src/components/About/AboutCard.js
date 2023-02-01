import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Yushuo(Kevin) Li </span>
            living in <span className="purple"> Sweden.</span>
            <br />I am a student doing bachelor's degree in Computer Science


            <br />
            <br />
            Apart from programming, my other hobbies are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play piano/violin
            </li>
            <li className="about-activity">
              <ImPointRight /> Study
            </li>
            <li className="about-activity">
              <ImPointRight /> Put learned into practice
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
          <br />
          <br />
          I can speak:
        </p>
        <ul>
          <li className="about-activity">
            <ImPointRight /> Mandarin Chinese
          </li>
          <li className="about-activity">
            <ImPointRight /> English
          </li>
          <li className="about-activity">
            <ImPointRight /> Swedish
          </li>
        </ul>


          <p style={{ color: "rgb(155 126 172)" }}>
            "For knowledge!"{" "}
          </p>
          <footer className="blockquote-footer">Kevin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
