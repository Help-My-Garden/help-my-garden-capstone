import React from "react";
import Jumbotron from "react-bootstrap/cjs/Jumbotron";
import {Container, Row, Col} from 'reactstrap';


export const AboutUs = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={{ size: 12}}>
            <Jumbotron>
              <h1>Welcome to Help My Garden</h1>
              <h3>Search plants across the entire USA!</h3>
              <p>Help my garden was designed for people who want to build a beautiful garden but aren't sure what plants to grow. This site searches the Trefle database witch has over 18,000 plants in the USA alone. This allows you to search your specific state and the site will pull up a list of all plants that are native to the area. Create an account and save your plants to a custom list you can reference later. With all that being said, 'Welcome To Our Site!' We hope you have as much fun as we did creating it.</p>
            </Jumbotron>
            <Jumbotron>
              <h2>Meet the Team!</h2>
              <p>We are a team of web developers in New Mexico with a goal. That goal is to make beautiful websites that have reusable easy to understand content. One of the things we dislike is an unusable site that has way to many bells and whistles. Sites should be something easy to use rather than needing to come with an instruction manual. With this vision in mind Help My Garden was born.</p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </>
  )
}