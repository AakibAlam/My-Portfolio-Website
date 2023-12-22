import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Card, Container } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  work_experience,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div className="description">
              <p>{dataabout.aboutme}</p>
              <p>
                I actively participate in competitive programming contests. I
                have achieved the rank of{" "}
                <span style={{ color: "violet" }}>Candidate Master</span>(
                <a href="https://codeforces.com/profile/sultan__"> sultan__ </a>
                ) at Codeforces and{" "}
                <span style={{ color: "yellow" }}>5 star</span>(
                <a href="https://www.codechef.com/users/temp0rary">temp0rary</a>
                ) at CodeChef.
              </p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="7">
            {work_experience.map((data, i) => {
              return (
                <div key={i}>
                  <Row>
                    <Col lg="9" className="heading">
                      {data.jobtitle} &nbsp; | &nbsp; {data.where} <br />
                    </Col>
                    <Col lg="3" className="heading">
                      {data.date} <br />
                    </Col>
                    <hr className="t_border my-4 ml-0 text-left" />
                    <p className="description">{data.description}</p>
                  </Row>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7" className="grid-container">
            {skills.map((skills, i) => {
              return (
                <div key={i}>
                  <Card className="skill-card">
                    <Card.Body>
                      <h3 className="card-title">{skills.name}</h3>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
