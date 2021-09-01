import { Container, Row, Col } from "react-bootstrap";
import styles from "./Details.module.css";

const Details = () => {
  return (
    <Container className={styles.Details}>
      <Row>
        <Col>
          <h1>Richard Gauntlett</h1>
        </Col>
        <Col>
          <h3>28 Years Old</h3>
          <h3>Permanent Resident of Aus</h3>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Looking for a developer role </h3>
        </Col>
        <Col>
          <h3>Education:</h3>
          <h5>Bachelors Degree in Financial Economics</h5>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Tech Stack:</h3>
          <Row>
            <Col>
              <ul>
                <li>React</li>
                <li>Vue</li>
                <li>Javascript</li>
                <li>HTML</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Git</li>
                <li>Node</li>
                <li>Firebase</li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col>
          <h4>Supplemental Education:</h4>
          <ul>
            <li>React - The Complete Guide - Maximilian Schwarzmüller</li>
            <li>The Web Developer Bootcamp 2021 - Colt Steele</li>
            <li>Minor in Computer Information Systems</li>
            <li>Minor in Mathematics</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
