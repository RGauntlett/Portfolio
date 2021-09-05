import { Container, Row, Col } from "react-bootstrap";
import styles from "./Details.module.css";

const Details = () => {
  return (
    <Container className={styles.Details}>
      <Row>
        <Col>
          <div>
            <h4>
              I am a hard-working and customer-focused individual who has run a
              small business for the last six years. I'm always looking to take
              on new challenges and striving to learn skills to be able to
              provide better service to my customers.
            </h4>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <h2>Education:</h2>
            <h5>
              Bachelors Degree in Financial Economics from James Madison
              University (USA)
            </h5>
          </div>
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
