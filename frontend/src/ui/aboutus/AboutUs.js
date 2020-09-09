import React from "react";
import Jumbotron from "react-bootstrap/cjs/Jumbotron";
import {Container, Row, Col} from 'reactstrap';
import Navbar from "react-bootstrap/Navbar";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import Nav from "react-bootstrap/Nav";
import image from "../sharedimg/world-logo-black.png"


export const AboutUs = (props) => {
  return (
    <>
      {/*navbar*/}
      <Navbar className="navbar-dark" collapseOnSelect expand="md" style={{
        backgroundColor: "black",
      }}>
          <a href = "/" >
        <img src = {image} alt = "Help My Garden logo" width="100"/>
          </a >
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
              <p>Hi, Welcome to our site! <br/> I am one of the creators of Help My Garden. To get started I'm going to tell you a little bit about my background. I am a Web Developer in the state of New Mexico. I was born in Paducah, Kentucky in 1992 and moved to New Mexico in 1997 when I was 5. I started playing with computers and other electronics in my teens which eventually turned into a passion for technology. I found myself wanting to figure out how everything ticked and through a lot of trial and error I started to understand how the programs and software worked. At this point in my life I knew that I wanted to pursue a career in technology I just wasn't sure what field to choose, and believe me when I say there are a lot to choose from. So I chose... you guessed it! To start a family and forget about my hopes dreams. I was just kidding about the hopes and dreams part but I did start dating my now wife and had 2 beautiful healthy children who needed my care and attention. As a result I put my dreams of the tech world aside until I could put more time into my passion. I realise now that that time will never just come I have to make room for it, and that's exactly what I'm doing. Since that decision I've been running at my passion full force and have no intentions of slowing down anytime soon. I hope that passion and drive shows through in mine and Dylan's project. We are both very dedicated to our craft and truly enjoy what we do. With that being said, I want to personally thank you for using our site it means a lot to us. Thank you.</p>
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
            <a href="https://www.linkedin.com/in/dylan-deraad-684b8118a/" className="btn text-white">
              <p>Dylan Draad</p>
              <FontAwesomeIcon icon={faLinkedin} color="blue" size="3x"/>
            </a>
          </div>
          <div className="col-md-2 text-center">
            <a href="https://github.com/Help-My-Garden" className="btn text-white">
              <p>Help My Garden</p>
              <FontAwesomeIcon icon={faGithub} color="green" size="3x" />
            </a>
          </div>
          <div className="col-md-2 text-center">
            <a href="https://www.linkedin.com/in/james-mathieus-7674171a9/" className="btn text-white">
              <p>James Mathieus Jr</p>
              <FontAwesomeIcon icon={faLinkedin} color="blue" size="3x"/>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}