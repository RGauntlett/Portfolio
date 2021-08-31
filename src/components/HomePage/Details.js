import { Container } from "react-bootstrap";
import styles from "./Details.module.css";

const Details = () => {
  return (
    <Container className={styles.Details}>
      <div>
        <h1>Richard Gauntlett</h1>
      </div>
      <div className={styles.subDetails}>
        <h3>Looking for a developer role </h3>
      </div>
      <div className={styles.subDetails}>
        <h3>28 Years Old</h3>
        <h3>Permanent Resident of Aus</h3>
      </div>
      <div>
        <h3>Education:</h3>
        <h5>Bachelors Degree in Financial Economics</h5>
      </div>
      <div>
        <h4>Supplemental Education:</h4>
        <li>React - The Complete Guide - Maximilian Schwarzmüller</li>
        <li>The Web Developer Bootcamp 2021 - Colt Steele</li>
        <li>Minor in Computer Information Systems</li>
        <li>Minor in Mathematics</li>
      </div>
    </Container>
  );
};

export default Details;
