import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import {NavbarCom} from "./Navbar";
import {SearchCom} from "./Search";
import {ContentContainerCom} from "./ContentContainer";


export const SearchPage = () => {
	return (
		<>
			<NavbarCom/>
			<SearchCom/>
			<ContentContainerCom/>
		</>
	)
}