import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {Home} from "./ui/home/Home";
import {AllPlants} from "./ui/allplants/AllPlants";
import {Plant} from "./ui/plant/Plant";
import {MyPlantList} from "./ui/myplantlist/MyPlantList";
import {AboutUs} from './ui/aboutus/AboutUs'
import {FourOhFour} from "./ui/fourohfour/FourOhFour";

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