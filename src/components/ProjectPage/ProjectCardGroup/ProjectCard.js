import { Container, Button, Row, Col, Image } from "react-bootstrap";
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
              fluid
            />
            <div className={styles.Body}>
              <h3>{props.title}</h3>
              <Button className={styles.Button} variant="dark" href={props.url}>
                Take A Look!
              </Button>
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
