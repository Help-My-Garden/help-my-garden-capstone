import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import {NavbarCom} from "./Navbar";
import {JumbotronCom} from "./Jumbotron";
import {CarouselCom} from "./Carousel";
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