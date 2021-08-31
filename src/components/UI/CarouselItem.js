import { Carousel, Image } from "react-bootstrap";

const CarouselItem = (props) => {
  return (
    <Carousel.Item>
      <img src={props.img} alt="Carousel" />
    </Carousel.Item>
  );
};

export default CarouselItem;
