import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import {NavbarCom} from "./Navbar";
import {SearchCom} from "./Search";

export const Home = () => {
	return (
		<>
			<NavbarCom/>
			<SearchCom/>
		</>
	)
}