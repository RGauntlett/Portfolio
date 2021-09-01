import { Card, Carousel } from "react-bootstrap";
import PageButton from "../../UI/PageButton";
import CarouselItem from "../../UI/CarouselItem";

const ProjectCard = (props) => {
  console.log(props.imgs);
  return (
    <Card>
      <Carousel>
        {props.imgs.map((item) => (
          <CarouselItem image={item.image} key={item.key} />
        ))}
      </Carousel>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <PageButton>Take A Look!</PageButton>
      </Card.Body>
      <Card.Footer>
        <small>Last Updated: {props.lastUpdated}</small>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
