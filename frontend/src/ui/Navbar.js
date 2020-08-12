import React from "react"
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import image from "./shared/world-logo-black.png"
import {useEffect, useState} from "react";



export function NavbarCom () {

	/*added different useStates for the different modals*/
	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false)

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);

	return (
		<>
			<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
				<img src = {image} alt = "Help My Garden logo" width="100"/>
				<Navbar.Brand>Help My Garden</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#features">Search</Nav.Link>
						<Nav.Link href="#pricing"onClick={handleShow2}>Creat Account</Nav.Link>
						<NavDropdown title="Account" id="collapsible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1" onClick={handleShow}>Log In</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			{/*log in modal*/}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					I'm modal number 1!
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>

			{/*creat account  modal*/}
			<Modal show={show2} onHide={handleClose2}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					I'm modal number 2!
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose2}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose2}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}