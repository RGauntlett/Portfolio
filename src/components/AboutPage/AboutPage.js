import { Container, Col, Row } from "react-bootstrap";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.About}>
      <Container>
        <Row>
          <Col>
            <h2>Manly Tennis Centre — Program Director/ Head Professional</h2>
            <p>August 2016-Present</p>
            <div>
              <p>
                After taking over both the junior program and a large part of
                the adult operation at Manly Tennis Centre the customer database
                has grown from 80 to over 2,400 contacts. Revenues exceed
                $500,000 per year and the program runs at a healthy profit.
                Roles and Tasks -
              </p>
              <ul>
                <li>
                  Administrator - Constant contact with customers in regards to
                  scheduling our regular weekly programs (~300 children and ~200
                  adults p/w) as well as large events with up to 150 attendees;
                  and discussing both negative and positive feedback of the
                  operation.
                </li>
                <li>
                  Manager - Worked with staff members in allocating work hours,
                  resolving and preventing issues with customers and between
                  other employees, training staff in an effort to put out our
                  best possible product, and responsibility for hiring and
                  firing staff members.
                </li>
                <li>
                  Accounting - Handled balancing and forecasting of financials
                  for the business, ensuring timely wage payments, advertising
                  budgets, equipment depreciation and replacement, and profit
                  growth.
                </li>
                <li>
                  Marketing -Experimented and utilised advertising across a
                  multitude of avenues including social media, print media, open
                  days, and collaborations with surrounding businesses.{" "}
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
