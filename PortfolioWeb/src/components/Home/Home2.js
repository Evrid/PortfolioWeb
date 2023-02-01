import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/reading.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              SO <span className="blue"> ABOUT </span> ME
            </h1>
            <p className="home-about-body">
              I am always eager to learn, so I did a bachelor's degree in business administration
              and another degree in industrial automation
              then now I am studying for another bachelor's degree in computer science.
              <br />
              <br />For programming languages, I am fluent in
              <i>
                <b className="red"> C++, Java, and Javascript, and I also know SQL, HTML, CSS, and Python.</b>
              </i>
              <br />
              <br />
              My field of interest is building new &nbsp;
              <i>
                <b className="purple">Applications </b> and
                also in stuff related to{" "}
                <b className="purple">
                  other projects.
                </b>
              </i>
              <br />
              <br />
             I am also learning different tools for programming, like
              <b className="purple"> Node.js</b> 
              <i>
                <b className="purple">
                  {" "}
                  and others
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="blue"> React and ASP.NET</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME</h1>
            <p>
              Feel free to connect with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Evrid"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>


              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yushuo-kevin-li/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
