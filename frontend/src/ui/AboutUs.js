import React from "react";
import Jumbotron from "react-bootstrap/cjs/Jumbotron";
import {Container, Row, Col} from 'reactstrap';


export const AboutUs = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={{ size: 12}}>
            <Jumbotron fluid>
              <h1>About Help My Garden!</h1>
              <p>this would be about the website Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
              <p>this would be about James Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
              <p>about Dylan Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>

            </Jumbotron>
          </Col>
        </Row>
      </Container>

    </>
  )
}