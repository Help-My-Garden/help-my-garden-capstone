import React from "react"
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import image from "../sharedimg/world-logo-black.png"
import {useState} from "react";
import { SignInForm } from '../shared/components/main-nav/sign-in/SignInForm'
import { SignUpForm } from '../shared/components/main-nav/sign-up/SignUpForm'



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
			<div className="container-fluid sticky-top">
				<Navbar className="row fluid navbar-dark" collapseOnSelect expand="md">
					<a href = "/" >
						<img src = {image} alt = "Help My Garden logo" width="100"/>
					</a >
					<Navbar.Brand href="/" style={{color: "white",}}>Help My Garden</Navbar.Brand>
					<Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="/all-plants" style={{color: "white",}}>Search</Nav.Link>
							<NavDropdown title="Account " id="collapsible-nav-dropdown">
								<NavDropdown.Item href="" onClick={handleShow2}>Creat an Account</NavDropdown.Item>
								<NavDropdown.Item href="" onClick={handleShow}>Log In</NavDropdown.Item>
								<NavDropdown.Item href="/my-plant-list">My List</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				{/*log in modal*/}
				<Modal id="log-in-modal" show={show} onHide={handleClose}
							 size="sm"
				>
					<Modal.Header closeButton>
						<Modal.Title>Log In</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						< SignInForm />
					</Modal.Body>
				</Modal>

				{/*creat account modal*/}
				<Modal id="creat-account-modal" show={show2} onHide={handleClose2}>
					<Modal.Header closeButton>
						<Modal.Title>Sign Up</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<SignUpForm/>
					</Modal.Body>
				</Modal>
			</div>
		</>
	)
}