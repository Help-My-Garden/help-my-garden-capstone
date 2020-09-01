import React from "react";
import Jumbotron from "react-bootstrap/cjs/Jumbotron";
import {Container, Row, Col} from 'reactstrap';
import Navbar from "react-bootstrap/Navbar";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import Nav from "react-bootstrap/Nav";
import image from "./shared/world-logo-black.png"


export const AboutUs = (props) => {
  return (
    <>
      {/*navbar*/}
      <Navbar className="navbar-dark" collapseOnSelect expand="md" style={{
        backgroundColor: "black",
      }}>
        <img src = {image} alt = "Help My Garden logo" width="100"/>
        <Navbar.Brand href="/" style={{color: "white",}}>Help My Garden</Navbar.Brand>
        <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" style={{color: "white",}}>Home</Nav.Link>
            <Nav.Link href="/all-plants" style={{color: "white",}}>Search</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/*jumbotrons*/}
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
              <h4>Dylan Deraad</h4>
              <p>Hello!</p>
              <h4>James Mathieus Jr</h4>
              <p>Hi! Welcome to Help My Garden, <br/> I am one of the creators of Help My Garden. I want to thank you for using our site it means a lot to me. I am a Web Developer in the state of New Mexico. I was born in Paducah, Kentucky in 1992. I moved to New Mexico in 1997 when I was 5 years old. </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>

      {/*footer*/}
      <footer className="container-fluid" style={{
        backgroundColor: "black",
      }}>
        <div className="row justify-content-center">
          <div className="col-md-2 text-center">
            <button className="btn text-white">
              <p>Dylan Draad</p>
              <FontAwesomeIcon icon={faLinkedin} color="blue" size="3x"/>
            </button>
          </div>
          <div className="col-md-2 text-center">
            <button className="btn text-white">
              <p>Help My Garden</p>
              <FontAwesomeIcon icon={faGithub} color="green" size="3x" />
            </button>
          </div>
          <div className="col-md-2 text-center">
            <button className="btn text-white">
              <p>James Mathieus Jr</p>
              <FontAwesomeIcon icon={faLinkedin} color="blue" size="3x"/>
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}