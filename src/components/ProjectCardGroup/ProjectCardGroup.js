import { CardGroup } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import DiscouterImg from "../../assets/DiscouterImg.png";
import NBRHDImg from "../../assets/NBRHD.png";
import styles from "./ProjectCardGroup.module.css";

const ProjectCardGroup = () => {
  const projects = [
    {
      key: 1,
      title: "Discouter",
      imgs: [{ key: 1, image: DiscouterImg }],
      description:
        "This is the home website built for the Discouter Mobile App",
      lastUpdated: "25/08/2021",
    },
    {
      key: 2,
      title: "NBRHD Boxing",
      imgs: [{ key: 1, image: NBRHDImg }],
      description:
        "A customisable timer to do boxing work outs. The timer has different options including guided shadowboxing that will print out combos to throw during the round",
      lastUpdated: "29/08/2021",
    },
  ];

  return (
    <CardGroup className="mt-5">
      {projects.map((project) => (
        <div className={styles.ProjectCard}>
          <ProjectCard
            key={project.key}
            title={project.title}
            imgs={project.imgs}
            description={project.description}
            lastUpdated={project.lastUpdated}
          />
        </div>
      ))}
    </CardGroup>
  );
};

export default ProjectCardGroup;
