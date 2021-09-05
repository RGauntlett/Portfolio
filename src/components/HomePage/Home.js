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
