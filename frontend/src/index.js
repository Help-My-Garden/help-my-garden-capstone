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
import {Provider} from "react-redux";
// import {applyMiddleware} from "redux";
// import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import {faDove, faEnvelope, faKey, faPencilAlt, faPhone, faStroopwafel} from '@fortawesome/free-solid-svg-icons'

import reducer from './store/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import {NavbarCom} from './shared/components/main-nav/Navbar'

const store = configureStore({reducer});

library.add(faStroopwafel, faEnvelope, faKey, faDove, faPhone, faPencilAlt);





const Routing = (store) => (
	<>
		<Provider store={store}>
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
		</Provider>
	</>
);


ReactDOM.render(Routing(store) , document.querySelector("#root"));