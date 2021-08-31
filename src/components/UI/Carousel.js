import { Carousel } from "react-bootstrap";
import CarouselItem from "./CarouselItem";

const CarouselCard = (props) => {
  console.log(props.imgs);
  return (
    <Carousel fade>
      {props.imgs.map((item) => (
        <CarouselItem image={item.image} />
      ))}
    </Carousel>
  );
};

export default CarouselCard;
