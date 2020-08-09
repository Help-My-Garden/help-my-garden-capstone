import React from "react";
import Jumbotron from "react-bootstrap/cjs/Jumbotron";
import {Container, Row, Col} from 'reactstrap';

export const JumbotronInfo = (props) => {
  return (
    <>
      <Jumbotron>
        <Container>
          <Row>
            <Col xs="6"></Col>
            <Col xs="6">
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
    </>
  )
}