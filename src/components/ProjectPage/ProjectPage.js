import { Container } from "react-bootstrap";
import ProjectCardGroup from "./ProjectCardGroup/ProjectCardGroup";

import styles from "./ProjectPage.module.css";

const ProjectPage = () => {
  return (
    <Container className={styles.ProjectPage}>
      <ProjectCardGroup />
    </Container>
  );
};

export default ProjectPage;
