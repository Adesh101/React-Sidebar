import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const About = () => {
  const data = [
    {
      name: "Apple About",
      price: "10001$",
    },
    {
      name: "Apple2",
      price: "10002$",
    },
    {
      name: "Apple3",
      price: "10003$",
    },
  ];

  return (
    <>
      <div className="my-container">
        <Container>
          <div className="header">Today's Deals</div>
          <Row className="card-boundary">
            <Col md={3}>
              <Card className="my-content">
                <CardImg
                  top
                  width="100%"
                  src="/images/download"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="my-content">
                <CardImg
                  top
                  width="100%"
                  src="/images/download"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="card-boundary">
            <Col md={3}>
              <Card className="my-content">
                <CardImg
                  top
                  width="100%"
                  src="/images/download"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default About;
