import React, { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import {PlantCard} from "./PlantCard";

import Background from "../sharedimg/practice-background-garden.jfif"
import Navbar from "react-bootstrap/Navbar";
import image from "../sharedimg/world-logo-black.png";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllPlants } from '../../store/plants'
import { SearchCom } from '../shared/components/plant-catagory-selector/Search'


export const AllPlants = () => {

	const plants = useSelector(state => state.plants ? state.plants : []);
	const dispatch = useDispatch();
	const effects = () => {
		dispatch(fetchAllPlants());
	};
	const inputs = [];
	useEffect(effects, inputs);
 console.log(plants)
	return (
		<>
			<div className="container-fluid sticky-top" style={{
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
							<Nav.Link href="/my-plant-list" style={{color: "white",}}>My list</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
			<div className="container-fluid" style={{
				background: `url(${Background})center fixed`,

			}}>
				<SearchCom/>
				<section className="container" style={{
					backgroundColor: "rgb(114,104,86, .9)",
					margin: "2rem auto 1rem auto",
					padding: "1rem",
				}}>
					<div className="row">
						{plants.map(plant => <PlantCard plant={plant} key={plant.plantId}/>)}
					</div>
				</section>
			</div>

		</>
	)
}