import { Button } from "react-bootstrap";

const PageButton = (props) => {
  return <Button onClick={props.onClick}>{props.children}</Button>;
};

export default PageButton;
