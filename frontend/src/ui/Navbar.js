import React from "react"
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import image from "./shared/world-logo-black.png"

export function NavbarCom () {

	return (
		<>
			<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
				<img src = {image} alt = "Help My Garden logo" width="100"/>
				<Navbar.Brand href="#home">Help My Garden</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#features">Search</Nav.Link>
						<Nav.Link href="#pricing">Creat Account</Nav.Link>
						<NavDropdown title="Account" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Log In</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	)
}