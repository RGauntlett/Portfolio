import ProjectCardGroup from "./ProjectCardGroup/ProjectCardGroup";
import styles from "./ProjectPage.module.css";

const ProjectPage = () => {
  return (
    <div className={styles.ProjectPage}>
      <div className={styles.ProjectCards}>
        <ProjectCardGroup />
      </div>
    </div>
  );
};

export default ProjectPage;
