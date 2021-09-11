import { Button } from "react-bootstrap";
import styles from "./PageButton.module.css";

const PageButton = (props) => {
  return (
    <Button variant="dark" className={styles.PageButton} href={props.url}>
      {props.children}
    </Button>
  );
};

export default PageButton;
