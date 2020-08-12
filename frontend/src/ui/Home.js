import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import {JumbotronCom} from "./Jumbotron";
import {CarouselCom} from "./Carousel";
import {NavbarCom} from "./Navbar";
import {Footer} from "./Footer";

export const Home = () => {
	return (
		<>
			<div style={{
			display: "block",
			margin: "2rem 4rem 2rem 4rem",
			backgroundColor: "grey",
		}}>
			<NavbarCom/>
			<JumbotronCom/>
			<CarouselCom/>
			<Footer/>
		</div>
			</>
	)
}