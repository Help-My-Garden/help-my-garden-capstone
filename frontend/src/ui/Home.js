import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import {NavbarCom} from "./Navbar";
import {JumbotronCom} from "./Jumbotron";
import {CarouselCom} from "./Carousel";
import {Footer} from "./Footer";

export const Home = () => {
	return (
		<>
			<NavbarCom/>
			<JumbotronCom/>
			<CarouselCom/>
			<Footer/>
			</>
	)
}