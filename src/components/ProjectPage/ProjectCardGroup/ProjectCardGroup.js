import { CardGroup } from "react-bootstrap";
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
      description:
        "This is the home website built for the Discouter Mobile App",
      lastUpdated: "25/08/2021",
    },
    {
      key: 2,
      title: "NBRHD Boxing",
      image: NBRHDImg,
      description:
        "Build your Unique Work Out and plan your Rest Time. If you select Guided ShadowBoxing the Site will randomly print out Combos to Throw",
      lastUpdated: "29/08/2021",
    },
  ];

  return (
    <CardGroup className="my-5">
      {projects.map((project) => (
        <div className={styles.ProjectCard}>
          <ProjectCard
            key={project.key}
            title={project.title}
            image={project.image}
            description={project.description}
            lastUpdated={project.lastUpdated}
            className="mt-3"
          />
        </div>
      ))}
    </CardGroup>
  );
};

export default ProjectCardGroup;
