import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <br></br>
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/rayen-bakali-50b987190/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="Linkedin" />
              </a>
              <a
                href="https://www.facebook.com/rayen.bakali.96/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/rayenbakali/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>
              Copyright 2023. All Rights Reserved By{" "}
              <strong>
                <a href="">Rayen Bakali</a>
              </strong>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
