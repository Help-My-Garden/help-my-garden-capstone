import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import {NavbarCom} from "../shared/components/main-nav/Navbar";
import Jumbotron from "react-bootstrap/cjs/Jumbotron";
import Button from "react-bootstrap/cjs/Button";
import Carousel from "react-bootstrap/cjs/Carousel";
import image from "../sharedimg/600x400.jpg";
import { fetchTenRandomPlants } from '../../store/plants'
import { PlantCarousel } from './PlantCarousel'

export const Home = () => {

	const plants = useSelector(state => state.plants ? state.plants : []);
	const dispatch = useDispatch();
	const effects = () => {
		dispatch(fetchTenRandomPlants());
	};
	const inputs = [];
	useEffect(effects, inputs);
	console.log(plants)
	return (
		<>
			<div className="container m-auto p-0" style={{
			display: "block",
			margin: "2rem 4rem 2rem 4rem",
			backgroundColor: "grey",
		}}>
			<NavbarCom/>
			<Jumbotron className="text-center text-white-50" style={{
				margin: "2rem 3em 2rem 3rem",
				backgroundColor: "black",
			}}>
			<h1>Welcome To Help My Garden</h1>
			<p className="py-5">
			This is a simple hero unit, a simple jumbotron-style component for calling
			extra attention to featured content or information.
			</p>
			<p>
			<Button href="/all-plants" variant="primary">Learn more</Button>
			</p>
			</Jumbotron>
			<Carousel className="container">
				{plants.map(plant => <PlantCarousel plant={plant} key={plant.plantId}/>)}
			</Carousel>
			<footer style={{
				display: "block",
				backgroundColor: "#343a40",
				margin: "2rem 0 0 0",
				padding: "1rem 1rem 1rem 1rem",
				color: "white",
			}}>
				<div className="row">
					<a href="https://docs.trefle.io/" className="col-4 mb-0">API:Trefle </a>
					<a href="/about-us" className="col-4 mb-0 text-center">Help My Garden Team</a>
					<p className="col-4 mb-0 text-right">Last Updated</p>
				</div>
			</footer>
		</div>
	</>
	)
}