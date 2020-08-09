import React from "react"
import {Link } from "react-router-dom";

export const Home = () => {
	return (
		<>
			<h1>Hello!!!!</h1>
			<Link to="/Info"><button> go to info</button></Link>
		</>
	)
}