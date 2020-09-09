import React, {useEffect} from "react";
import {SearchCom} from "../shared/components/plant-catagory-selector/Search";
import Navbar from "react-bootstrap/Navbar";
import image from "../sharedimg/world-logo-black.png";
import Nav from "react-bootstrap/Nav";
import {MyListCard} from "./MyListCard";
import { useDispatch, useSelector } from 'react-redux'
import {fetchPlantByProfileId} from "../../store/plants";

export const MyPlantList = () =>{

	const plants = useSelector(state => state.plants ? state.plants : []);
	const dispatch = useDispatch();
	const effects = () => {
		dispatch(fetchPlantByProfileId())
	};
	const inputs = [];
	useEffect(effects, inputs);
	return(
		<>
			<Navbar className="container-fluid navbar-dark" collapseOnSelect expand="md" style={{
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
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		<SearchCom/>
		<div className="container" style={{
			backgroundColor: "grey",
		}}>
			<div className="row">
				{plants.map(plant => <MyListCard plant={plant} key={plant.plantId}/>)}
			</div>
		</div>
			</>
	)
}

