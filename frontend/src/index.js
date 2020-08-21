import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {FourOhFour} from "../../../my-website/frontend/src/ui/FourOhFour";
import {Home} from "./ui/Home";
import {SearchPage} from "./ui/SearchPage";
import {Info} from "./ui/Info";
import {MyListCom} from "./ui/MyList";
import {AboutUs} from './ui/AboutUs'

function Routing (){
	return(
	<>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/search" component={SearchPage}/>
				<Route exact path="/info" component={Info}/>
				<Route exact path="/my-list" component={MyListCom}/>
				<Route exact path="/about-us" component={AboutUs}/>
				<Route component={FourOhFour}/>
			</Switch>
		</BrowserRouter>
	</>
	)
}
ReactDOM.render(<Routing/>, document.querySelector('#root'));