import { Container, Row, Col, Image } from "react-bootstrap";
import Details from "./Details";
import ProfileImg from "../../assets/HomeIMG.png";
import ProjectCardGroup from "../ProjectCardGroup/ProjectCardGroup";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col md={4} sm={12} className="mt-5">
          <Image src={ProfileImg} roundedCircle fluid />
        </Col>
        <Col md={8} sm={12} className="mt-5">
          <Details />
        </Col>
      </Row>
      <Row>
        <ProjectCardGroup />
      </Row>
    </Container>
  );
};

export default Home;
