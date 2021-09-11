import { Fragment } from "react";
import { Button } from "react-bootstrap";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>
          <div>
            <h1>Email Sent!</h1>
            <Button
              variant="dark"
              className={styles.Button}
              onClick={props.onClose}
            >
              OK
            </Button>
          </div>
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
