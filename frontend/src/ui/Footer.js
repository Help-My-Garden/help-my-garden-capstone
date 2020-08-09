import React from "react";


export const Footer = () => {

	return (
				<footer style={{
					display: "block",
					backgroundColor: "#343a40",
					margin: "2rem 0 0 0",
					padding: "1rem 1rem 1rem 1rem",
					color: "white",
				}}>
					<div className="row">
						<p>API Trefle:<button>https://trefle.io/</button></p>
						<p className="col-4 mb-0">Help My Garden Team</p>
						<p className="col-4 mb-0 text-right">Last Updated</p>
					</div>
				</footer>
		)
}