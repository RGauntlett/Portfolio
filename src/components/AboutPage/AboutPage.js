import { Container, Col, Row } from "react-bootstrap";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.About}>
      <Container>
        <div className={styles.Info}>
          <Row>
            <Col>
              <h2>Manly Tennis Centre — Program Director/ Head Professional</h2>
              <p>August 2016-Present</p>
              <div>
                <p>
                  After taking over both the junior program and a large part of
                  the adult operation at Manly Tennis Centre the customer
                  database has grown from 80 to over 2,400 contacts. Revenues
                  exceed $500,000 per year and the program runs at a healthy
                  profit. Roles and Tasks -
                </p>
                <ul>
                  <li>
                    Administrator - Constant contact with customers in regards
                    to scheduling our regular weekly programs (~300 children and
                    ~200 adults p/w) as well as large events with up to 150
                    attendees; and discussing both negative and positive
                    feedback of the operation.
                  </li>
                  <li>
                    Manager - Worked with staff members in allocating work
                    hours, resolving and preventing issues with customers and
                    between other employees, training staff in an effort to put
                    out our best possible product, and responsibility for hiring
                    and firing staff members.
                  </li>
                  <li>
                    Accounting - Handled balancing and forecasting of financials
                    for the business, ensuring timely wage payments, advertising
                    budgets, equipment depreciation and replacement, and profit
                    growth.
                  </li>
                  <li>
                    Marketing -Experimented and utilised advertising across a
                    multitude of avenues including social media, print media,
                    open days, and collaborations with surrounding businesses.{" "}
                  </li>
                </ul>
              </div>

              <h2>Discouter - Founder</h2>
              <p>
                Discouter is a mobile-based marketing app. Along with my brother
                (the developer), we have created an application to help market
                local businesses in Manly. Currently, we have over 45 businesses
                involved and over 1000 downloads in the Manly area. Discouter
                has been written about in local news sources and is continuing
                to grow at a quick pace.Tasks as the founder have stretched from
                the initial creation and presentation of the idea to researching
                target demographics, establishing the business, creating
                financials to discover appropriate costs that would reach
                break-even and then a forward plan to profit, design of the
                product, and a lot more.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
