import React from "react";
import Jumbotron from "react-bootstrap/cjs/Jumbotron";
import {Container, Row, Col} from 'reactstrap';
import Image from 'react-bootstrap/Image';

export const JumbotronInfo = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={{ size: 12}}>
            <Jumbotron fluid>
              <Container>
                <Row>
                  <Col  md="6">
                    <Image src="React-Static-Example.jpg" fluid />
                  </Col>
                  <Col md="6">
                    <h1>plant name</h1>
                    <ul>
                      <li>State:</li>
                      <li>Family Name:</li>
                      <li>Common Name:</li>
                      <li>Scientific Name:</li>
                      <li>Color:</li>
                      <li>Duration:</li>
                      <li>Light Preference:</li>
                      <li>Size:</li>
                    </ul>
                  </Col>
                </Row>
              </Container>

            </Jumbotron>
          </Col>
        </Row>
      </Container>

    </>
  )
}