import { Button } from "react-bootstrap";
import styles from "./PageButton.module.css";

const PageButton = (props) => {
  return (
    <Button
      variant="dark"
      className={styles.PageButton}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default PageButton;
