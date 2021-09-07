import { Container, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import EmailForm from "./EmailForm";
import styles from "./Contact.module.css";

const Contact = () => {
  const [displayForm, setDisplayForm] = useState(false);

  const toggleFormHandler = () => {
    setDisplayForm(!displayForm);
  };
  return (
    <div className={styles.ContactPage}>
      <Container className={styles.Contact}>
        <Row>
          <Col lg={6} md={12}>
            <div className={styles.ButtonGroup}>
              <Button variant="dark" className={styles.Button}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-laptop"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                </svg>
                <label>GitHub</label>
              </Button>
              <Button
                variant="dark"
                className={styles.Button}
                href="https://docs.google.com/document/d/18Skgwo7Vb2vPKqQIiZjTghco88QQO8y4t7tmAhJN6ko/edit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-file-earmark"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                </svg>
                <label>View CV</label>
              </Button>
              <Button
                variant="dark"
                className={styles.Button}
                onClick={toggleFormHandler}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-envelope-open"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z" />
                </svg>
                <label>Email</label>
              </Button>
            </div>
          </Col>
          <Col lg={6} md={12}>
            {displayForm && <EmailForm />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
