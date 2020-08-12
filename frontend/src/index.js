import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {FourOhFour} from "./ui/FourOhFour";
import {Home} from "./ui/Home";
import {NavbarCom} from "./ui/Navbar";
import {JumbotronCom} from "./ui/Jumbotron";
import {CarouselCom} from "./ui/Carousel";
import {Footer} from "./ui/Footer";


const Routing = () => (
	<>
		<BrowserRouter>
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
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route component={FourOhFour}/>
			</Switch>
		</BrowserRouter>

	</>
);
ReactDOM.render(<Routing/>, document.querySelector('#root'));