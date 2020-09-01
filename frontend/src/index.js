import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {Home} from "./ui/Home";
import {AllPlants} from "./ui/AllPlants";
import {Plant} from "./ui/Plant";
import {MyPlantList} from "./ui/MyPlantList";
import {AboutUs} from './ui/AboutUs'
import {FourOhFour} from "./ui/FourOhFour";

function Routing (){
	return(
	<>
		<BrowserRouter>
			<Switch>
				<Route exact path="/plant" component={Plant}/>
				<Route exact path="/my-plant-list" component={MyPlantList}/>
				<Route exact path="/all-plants" component={AllPlants}/>
				<Route exact path="/about-us" component={AboutUs}/>
				<Route exact path="/" component={Home}/>
				<Route component={FourOhFour}/>
			</Switch>
		</BrowserRouter>
	</>
	)
}
ReactDOM.render(<Routing/>, document.querySelector('#root'));