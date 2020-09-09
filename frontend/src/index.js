import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";

import {Provider} from "react-redux";

import {configureStore} from "@reduxjs/toolkit";
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import {faDove, faEnvelope, faKey, faPencilAlt, faPhone, faStroopwafel} from '@fortawesome/free-solid-svg-icons'
import {Home} from "./ui/home/Home";
import {AllPlants} from "./ui/allplants/AllPlants";
import {Plant} from "./ui/plant/Plant";
import {MyPlantList} from "./ui/myplantlist/MyPlantList";
import {AboutUs} from './ui/aboutus/AboutUs'
import {FourOhFour} from "./ui/fourohfour/FourOhFour";
import Image from "../src/ui/sharedimg/Home-page-background.jpg";


import reducer from './store/index'
import { library } from '@fortawesome/fontawesome-svg-core'


const store = configureStore({reducer});

library.add(faStroopwafel, faEnvelope, faKey, faDove, faPhone, faPencilAlt);


const Routing = (store) => (
	<>
		<div className="container-fluid" style={{backgroundImage: `url(${Image})`, backgroundAttachment: "fixed", padding: "0"}}>
			<Provider store={store}>
				<BrowserRouter>
					<Switch>
						<Route exact path="/plant/:plantId" component={Plant}/>
						<Route exact path="/my-plant-list" component={MyPlantList}/>
						<Route exact path="/all-plants" component={AllPlants}/>
						<Route exact path="/about-us" component={AboutUs}/>
						<Route exact path="/" component={Home}/>
						<Route component={FourOhFour}/>
					</Switch>
				</BrowserRouter>
			</Provider>
		</div>
	</>
);


ReactDOM.render(Routing(store) , document.querySelector("#root"));