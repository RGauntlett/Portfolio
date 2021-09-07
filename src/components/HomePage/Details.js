import { Container, Row, Col } from "react-bootstrap";
import styles from "./Details.module.css";

const Details = () => {
  return (
    <Container className={styles.Details}>
      <div className={styles.Border}>
        <Row>
          <Col>
            <div>
              <h4>
                I am a hard-working and customer-focused individual who has run
                a small business for the last six years. I'm always looking to
                take on new challenges and striving to learn skills to be able
                to provide better service to my customers.
              </h4>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <h2>Education:</h2>
              <p>
                Bachelors Degree in Financial Economics from James Madison
                University (USA)
              </p>
            </div>
          </Col>

          <Col>
            <h2>Supplemental Education:</h2>
            <ul>
              <p>React - The Complete Guide - Maximipan Schwarzmüller</p>
              <p>The Web Developer Bootcamp 2021 - Colt Steele</p>
              <p>Minor in Computer Information Systems</p>
              <p>Minor in Mathematics</p>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Details;
