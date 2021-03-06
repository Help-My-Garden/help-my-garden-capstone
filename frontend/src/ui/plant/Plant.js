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
import { PlantCard } from '../allplants/PlantCard'
import PlantBackground from '../sharedimg/gina-santangelo-N7yXNocgRJg-unsplash.jpg'

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


  const plant = useSelector(state => {
    console.log(state.plants[0])
    return state.plants
      ? state.plants[0]
      : null
  });
  // console.log(state)
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
      <div className="container-fluid" style={{
        background: `url(${PlantBackground}) center fixed`,
        backgroundSize:"cover",
        height:"1300px",
      }}>
        <Container>
          <Row>
            <Col xs={{ size: 12}}>
              <Jumbotron fluid style={{
                backgroundColor:"rgb(100,68,51, .9)",
              }}>
                <Container>
                  <Row>
                    <Col  md="6">
                      <Image src= {plant && plant.plantImageUrl} alt = "trefle database plant image" style = {{
                        width: "350px",
                      }}  />
                    </Col>
                    <Col md="6" style={{
                      fontSize:"200%",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                    }}>

                      <ul>
                        <li style={{
                          color:"black",
                        }}><strong>Plant Name</strong></li>
                        <li>{plant && plant.plantCommonName}</li>
                        <li style={{
                          color:"black",
                        }}><strong>Scientific Name</strong></li>
                        <li>{plant && plant.plantScientificName}</li>
                        <li style={{
                          color:"black",
                        }}><strong>Family Name</strong></li>
                        <li>{plant && plant.plantFamilyName}</li>
                        <li style={{
                          color:"black",
                        }}><strong>Plant Color</strong></li>
                        <li>{plant && plant.plantColor}</li>
                        <li style={{
                          color:"black",
                        }}><strong>Plant Duration</strong></li>
                        <li>{plant && plant.plantDuration}</li>
                        <li style={{
                          color:"black",
                        }}><strong>Hours of Sunlight Needed</strong></li>
                        <li>{plant && plant.plantSunlight}</li>
                        <li style={{
                          color:"black",
                        }}><strong>Plant Average Height</strong></li>
                        <li>{plant && plant.plantSize}</li>
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
      {/*<JumbotronInfo/>*/}
    </>
  )
}