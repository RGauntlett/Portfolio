import { Container } from "react-bootstrap";
import ProjectCardGroup from "./ProjectCardGroup/ProjectCardGroup";

import styles from "./ProjectPage.module.css";

const ProjectPage = () => {
  return (
    <div className={styles.ProjectPage}>
      <Container className={styles.ProjectCards}>
        <ProjectCardGroup />
      </Container>
    </div>
  );
};

export default ProjectPage;
