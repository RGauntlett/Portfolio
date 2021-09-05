import PageButton from "../../UI/PageButton";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
    <div className={styles.Card}>
      <Container>
        <Row>
          <Col>
            <Image
              src={props.image}
              className={styles.Image}
              alt="Web Site Snap Shot"
            />
            <div className={styles.Body}>
              <h3>{props.title}</h3>
              <PageButton>Take A Look!</PageButton>
            </div>
            <div className={styles.Footer}>
              <p>Last Updated: {props.lastUpdated}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectCard;
