import React from "react";
import {SearchCom} from "./Search";
import Navbar from "react-bootstrap/Navbar";
import image from "./shared/world-logo-black.png";
import Nav from "react-bootstrap/Nav";
import {MyListCard} from "./MyListCard";

export const MyListCom = () =>{
	return(
		<>
			<Navbar className="row fluid navbar-dark" collapseOnSelect expand="md" style={{
				backgroundColor: "black",
			}}>
				<img src = {image} alt = "Help My Garden logo" width="100"/>
				<Navbar.Brand style={{color: "white",}}>Help My Garden</Navbar.Brand>
				<Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="/" style={{color: "white",}}>Home</Nav.Link>
						<Nav.Link href="/search" style={{color: "white",}}>Search</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		<SearchCom/>
		<div className="container" style={{
			backgroundColor: "grey",
		}}>
			<MyListCard/>
		</div>
			</>
	)
}

