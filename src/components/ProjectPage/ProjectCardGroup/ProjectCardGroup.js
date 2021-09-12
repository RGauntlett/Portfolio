import { CardGroup } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCard";
import DiscouterImg from "../../../assets/DiscouterImg.png";
import NBRHDImg from "../../../assets/NBRHD.png";
import styles from "./ProjectCardGroup.module.css";

const ProjectCardGroup = () => {
  const projects = [
    {
      key: 1,
      title: "Discouter",
      image: DiscouterImg,
      url: "https://www.discouter.com",
      description:
        "This is the home website built for the Discouter Mobile App",
      lastUpdated: "25/08/2021",
    },
    {
      key: 2,
      title: "NBRHD Boxing",
      image: NBRHDImg,
      url: "https://neighbourhood-boxing.web.app",
      description:
        "Build your Unique Work Out and plan your Rest Time. If you select Guided ShadowBoxing the Site will randomly print out Combos to Throw",
      lastUpdated: "29/08/2021",
    },
  ];

  return (
    <Container className="my-5">
      <Container className={styles.Container}>
        <Row>
          {projects.map((project) => (
            <Col md={12} lg={6}>
              <div className={styles.ProjectCard}>
                <ProjectCard
                  key={project.key}
                  title={project.title}
                  image={project.image}
                  url={project.url}
                  description={project.description}
                  lastUpdated={project.lastUpdated}
                  className="mt-3"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default ProjectCardGroup;
