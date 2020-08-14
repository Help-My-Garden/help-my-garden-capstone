import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import {UniversalNavbarCom} from "./Navbar";
import {SearchCom} from "./Search";
import {ContentContainerCom} from "./ContentContainer";


export const SearchPage = () => {
	return (
		<>
			<UniversalNavbarCom/>
			<SearchCom/>
			<ContentContainerCom/>
		</>
	)
}