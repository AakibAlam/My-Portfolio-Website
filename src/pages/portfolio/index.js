import React from "react";
import "./style.css";
import Card from "@mui/material/Card";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import CabSharingImage from "../CabSharing.jpeg"; // Import the image

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function MediaCard({ data }) {
  return (
    <Col
      lg="4"
      md="6"
      sm="12"
      xs="12"
      className="d-flex justify-content-center mb-4"
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={data.title}
          height="200"
          image={data.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {data.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontFamily={"monospace"}
          >
            {data.description}
          </Typography>
        </CardContent>
        <CardActions className="share">
          {/* // add the link to the github repo */}
          <Button variant="contained" size="small" href={data.link}>
            Github
          </Button>
          <Button variant="contained" size="small">
            Demo
          </Button>
        </CardActions>
      </Card>
    </Col>
  );
}

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> PROJECTS </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          {dataportfolio.map((data, i) => (
            <MediaCard key={i} data={data} />
          ))}
        </Row>
      </Container>
    </HelmetProvider>
  );
};
