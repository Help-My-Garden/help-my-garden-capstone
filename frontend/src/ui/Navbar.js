import React from "react"
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import image from "./shared/world-logo-black.png"
import {useState} from "react";



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
			<div className="container sticky-top">
				<Navbar className="row fluid navbar-dark" collapseOnSelect expand="md">
					<img src = {image} alt = "Help My Garden logo" width="100"/>
					<Navbar.Brand style={{color: "white",}}>Help My Garden</Navbar.Brand>
					<Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="#search" style={{color: "white",}}>Search</Nav.Link>
							<Nav.Link href="#creat-account" onClick={handleShow2} style={{color: "white",}}>Creat Account</Nav.Link>
							<NavDropdown title="Account " id="collapsible-nav-dropdown">
								<NavDropdown.Item href="#log-in-modal" onClick={handleShow}>Log In</NavDropdown.Item>
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
						<form action = "./apis/" >
							<div className = "information" >
								<label className = "form-label" >User Name
									<input className = "form-control col-md-12" type = "text" name = "user-name" id = "userName"
												 placeholder = "User Name" />
								</label >
							</div >
							<div className = "information" >
								<label className = "form-label" >Password
									<input className = "form-control col-md-12" type = "password" name = "password" id = "password"
												 placeholder = "Password" />
								</label >
							</div >
						</form >
						<div className = "g-recaptcha" data-sitekey = "6LcHZG0UAAAAAHCSdqZNJATJ1VNMjUxf4sm4jOlM" ></div >
						<Button variant="primary" onClick={handleClose}>
							Log In
						</Button>
					</Modal.Body>
				</Modal>

				{/*creat account modal*/}
				<Modal id="creat-account-modal" show={show2} onHide={handleClose2}>
					<Modal.Header closeButton>
						<Modal.Title>Sign Up</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className = "information" >
							<label className = "form-label" >Name
								<input className = "form-control col-md-12" type = "text" name = "name" id = "name"
											 placeholder = "Name" />
							</label >
						</div >
						<div className = "information" >
							<label className = "form-label" >User Name
								<input className = "form-control col-md-12" type = "text" name = "user-name" id = "user-name"
											 placeholder = "User Name" />
							</label >
						</div >
						<div className = "information" >
							<label className = "form-label" >Email
								<input className = "form-control col-md-12" type = "email" name = "email" id = "email"
											 placeholder = "Email" />
							</label >
						</div >
						<div className = "information" >
							<label className = "form-label" >Password
								<input className = "form-control col-md-12" type = "password" name = "password" id = "password"
											 placeholder = "Password" />
							</label >
						</div >
						<div className = "g-recaptcha" data-sitekey = "6LcHZG0UAAAAAHCSdqZNJATJ1VNMjUxf4sm4jOlM" ></div >
						<Button className="mr-" variant="primary" onClick={handleClose2}>
						Sign Up
					</Button>
					</Modal.Body>
				</Modal>
			</div>
		</>
	)
}