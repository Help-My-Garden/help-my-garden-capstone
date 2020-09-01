import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import {SearchCom} from "./Search";
import {ContentCardsCom} from "./ContentCards";
import Navbar from "react-bootstrap/Navbar";
import image from "./shared/world-logo-black.png";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


export const AllPlants = () => {

	return (
		<>
			<div className="container-fluid" style={{
				backgroundColor: "black",
			}}>
				<Navbar className="row fluid navbar-dark" collapseOnSelect expand="md">
					<a href = "/" >
					<img src = {image} alt = "Help My Garden logo" width="100"/>
					</a >
					<Navbar.Brand href="/" style={{color: "white",}}>Help My Garden</Navbar.Brand>
					<Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="/" style={{color: "white",}}>Home</Nav.Link>
							<NavDropdown title="Account " id="collapsible-nav-dropdown">
								<NavDropdown.Item href="/my-plant-list">My list</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
			<SearchCom/>
			<section className="container" style={{
				backgroundColor: "grey",
				margin: "2rem auto 1rem auto",
				padding: "1rem",
			}}>
				<ContentCardsCom/>
			</section>
		</>
	)
}