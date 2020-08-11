import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import {NavbarCom} from "./Navbar";
import {SearchCom} from "./Search";
import {ContentCom} from "./Content";

export const Home = () => {
	return (
		<>
			<NavbarCom/>
			<SearchCom/>
			<ContentCom/>
		</>
	)
}