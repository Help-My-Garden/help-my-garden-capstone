import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import {NavbarCom} from "./Navbar";
import Jumbotron from "react-bootstrap/cjs/Jumbotron";
import Button from "react-bootstrap/cjs/Button";
import Carousel from "react-bootstrap/Carousel";
import { fetchTenRandomPlants } from '../../store/plants';
import Image from '../sharedimg/Inner-home-page-background.jpg';
import { Card } from 'react-bootstrap'


export const Home = () => {

	const [index, setIndex] = React.useState(0)

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex)
	}

	const plants = useSelector(state => state.plants ? state.plants : []);
	const dispatch = useDispatch();
	const effects = () => {
		dispatch(fetchTenRandomPlants());
	};
	const inputs = [];
	useEffect(effects, inputs);

	return (
		<>
			<div className="container m-auto p-0" style={{
				backgroundColor: 'rgba(219,178,172,0.7)',
		}}>
			<NavbarCom/>
			<Jumbotron className="text-center text-white" style={{
				margin: "3rem",
				backgroundImage: `url(${Image})`,
				backgroundSize: "cover",
				backgroundPosition: "50%",
			}}>
				<Card flui style={{
					backgroundColor: "rgb(62,100,85, .5)",
				}}>
					<h1>Welcome To Help My Garden</h1>

					<p className="py-5">
						During this pandemic the My Garden Team understands the need for a hobby what could be better than gardening!
					</p>
					<p>
						look through all of New Mexico's Plants bellow
					</p>
				</Card>
					<p>
						<Button href="/all-plants" variant="primary">Search New Mexican Plants</Button>
					</p>


			</Jumbotron>
			<Carousel>
				{plants.map(plant =>
					(<Carousel.Item key = {plant.plantId}>
						<img
							style={{height:"800px", objectFit:"contain",}}
							className="d-block w-100"
							src={plant.plantImageUrl}
							alt={plant.plantCommonName}
						/>
						<Carousel.Caption>
							{plant.plantScientificName}
							{plant.plantSize}
						</Carousel.Caption>
					</Carousel.Item>))
				}
			</Carousel>
			<footer style={{
				display: "block",
				backgroundColor: "black",
				margin: "2rem 0 0 0",
				padding: "1rem 1rem 1rem 1rem",
				color: "white",
			}}>
				<div className="row">
					<a href="https://docs.trefle.io/" className="col-4 mb-0 text-white">API:Trefle </a>
					<a href="/about-us" className="col-4 mb-0 text-center text-white">Help My Garden Team</a>
					<p className="col-4 mb-0 text-right">Last Updated</p>
				</div>
			</footer>
		</div>
	</>
	)
}