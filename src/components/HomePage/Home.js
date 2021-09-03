import { Container, Row, Col, Image } from "react-bootstrap";
import Details from "./Details";
import ProfileImg from "../../assets/HomeIMG.png";
import ProjectCardGroup from "../ProjectPage/ProjectCardGroup/ProjectCardGroup";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Container>
      <Col md={4} sm={12} className="mt-5">
        <Image src={ProfileImg} roundedCircle fluid />
      </Col>
      <Row className={styles.Details}>
        <Col md={12} sm={12} className="mt-5">
          <Details />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
