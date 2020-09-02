import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {Home} from "./pages/home/Home";
import {AllPlants} from "./pages/allplants/AllPlants";
import {Plant} from "./pages/plant/Plant";
import {MyPlantList} from "./pages/myplantlist/MyPlantList";
import {AboutUs} from './pages/aboutus/AboutUs'
import {FourOhFour} from "./pages/fourohfour/FourOhFour";

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