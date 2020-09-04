import React, { useEffect } from "react"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import image from "../sharedimg/world-logo-black.png";
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from 'reactstrap'
import Jumbotron from 'react-bootstrap/cjs/Jumbotron'
import Image from 'react-bootstrap/Image'
import { fetchPlantByPlantId } from '../../store/plants'

export const Plant = ({match}) => {
// Returns the the userPosts store from redux and assigns it to the userPosts variable.
  const dispatch = useDispatch();

  const sideEffects = () => {
    // The dispatch function takes actions as arguments to make changes to the store/redux.
    dispatch(fetchPlantByPlantId(match.params.plantId));

  };

// Declare any inputs that will be used by functions that are declared in sideEffects.
  const sideEffectInputs = [match.params.plantId];

  /**
   * Pass both sideEffects and sideEffectInputs to useEffect.
   * useEffect is what handles rerendering of components when sideEffects resolve.
   * E.g when a network request to an api has completed and there is new data to display on the dom.
   **/
  useEffect(sideEffects, sideEffectInputs);


  const plant = useSelector(state => (
    state.plants
      ? state.plants[0]
      : null
  ));
  console.log(plant)
  return (
    <>
      <Navbar className="row fluid navbar-dark" collapseOnSelect expand="md" style={{
        backgroundColor: "black",
      }}>
        <a href="/">
          <img src={image} alt="Help My Garden logo" width="100"/>
        </a>
        <Navbar.Brand href="/" style={{color: "white",}}>Help My Garden</Navbar.Brand>
        <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" style={{color: "white",}}>Home</Nav.Link>
            <Nav.Link href="/all-plants" style={{color: "white",}}>Search</Nav.Link>
            <NavDropdown title="Account " id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/my-plant-list">My list</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/*<JumbotronInfo/>*/}
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
                    <h1>{plant && plant.plantCommonName}</h1>
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