import React from "react";
import { Row, Col } from "../components";

export const ProjectSection = () => (
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
    <div class="my-auto">
      <Row>
        <Col size="12">
          <h2 class="mb-5">Projects</h2>
        </Col>
      </Row>
      <Row>
        <Col size="6">
          <div class="card resume-item d-flex flex-column flex-md-row mb-3">
            <div class="resume-content mr-auto">
              <h3 class="card-header text-md-center mb-0">Get It Together</h3>
              <img
                class="card-img-top"
                src={require("../images/GetItTogether.png")}
              />
              <div className="inner-body">
                <p>
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation X is on the runway
                  heading towards a streamlined cloud solution. User generated
                  content in real-time will have multiple touchpoints for
                  offshoring.
                </p>
              </div>
              <div class="resume-link text-md-center">
                <a
                  class="card-link"
                  href="https://stormy-everglades-57851.herokuapp.com/"
                >
                  Webpage
                </a>
                <a
                  class="card-link"
                  href="https://github.com/lhernandez5/Get_It_Together"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col size="6">
        <div class="card resume-item d-flex flex-column flex-md-row mb-3">
            <div class="resume-content mr-auto">
              <h3 class="card-header text-md-center mb-0">Expectations By Destination</h3>
              <img
                class="card-img-top"
                src={require("../images/expectationsByDestination.png")}
              />
              <div className="inner-body">
                <p>
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation X is on the runway
                  heading towards a streamlined cloud solution. User generated
                  content in real-time will have multiple touchpoints for
                  offshoring.
                </p>
              </div>
              <div class="resume-link text-md-center">
                <a
                  class="card-link"
                  href="https://stormy-everglades-57851.herokuapp.com/"
                >
                  Webpage
                </a>
                <a
                  class="card-link"
                  href="https://github.com/lhernandez5/Get_It_Together"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          </Col>
      </Row>
    </div>
  </section>
);
