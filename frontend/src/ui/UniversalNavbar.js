import React from "react"
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import image from "./shared/world-logo-black.png"

export function UniversalNavbarCom () {

	return (
		<>
			<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
				<img src = {image} alt = "Help My Garden logo" width="100"/>
				<Navbar.Brand>Help My Garden</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<NavDropdown title="Account" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">My List</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	)
}