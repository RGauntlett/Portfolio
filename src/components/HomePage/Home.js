import { Container, Row, Col, Image } from "react-bootstrap";
import Details from "./Details";
import ProfileImg from "../../assets/HomeIMG.png";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.Home}>
      <Container>
        <Row>
          <Col md={4} sm={12} className="mt-5">
            <Image src={ProfileImg} roundedCircle fluid />
          </Col>
          <Col md={8} sm={12}>
            <div className={styles.Info}>
              <div className={styles.Name}>
                <h1>Richard Gauntlett</h1>
              </div>
              <div className={styles.TechStack}>
                <h3>Tech Stack:</h3>
                <Row>
                  <Col>
                    <ul>
                      <p>React</p>
                      <p>Vue</p>
                      <p>Javascript</p>
                      <p>HTML</p>
                    </ul>
                  </Col>
                  <Col>
                    <p>CSS</p>
                    <p>Bootstrap</p>
                    <p>Git</p>
                    <p>Node</p>
                    <p>Firebase</p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <Row className={styles.Details}>
          <Col md={12} sm={12} className="mt-5">
            <Details />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
