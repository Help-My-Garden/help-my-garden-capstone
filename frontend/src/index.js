import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {FourOhFour} from "./ui/FourOhFour";
import {MyListCom} from "./ui/MyList";

function Routing (){
	return(
	<>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={MyListCom}/>
				<Route component={FourOhFour}/>
			</Switch>
		</BrowserRouter>
	</>
	)
}
ReactDOM.render(<Routing/>, document.querySelector('#root'));