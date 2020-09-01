import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import {JumbotronInfo} from "./JumbotronInfo";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import image from "./shared/world-logo-black.png";

export const Plant = () => (
  <>
    <Navbar className="row fluid navbar-dark" collapseOnSelect expand="md" style={{
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
          <NavDropdown title="Account " id="collapsible-nav-dropdown">
            <NavDropdown.Item href="/my-plant-list">My list</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <JumbotronInfo/>
  </>

)