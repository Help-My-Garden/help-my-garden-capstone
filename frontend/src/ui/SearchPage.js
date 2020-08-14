import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import {UniversalNavbarCom} from "./UniversalNavbar";
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