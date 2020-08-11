import React from "react";

export function Footer () {

	return (
				<footer style={{
					display: "block",
					backgroundColor: "#343a40",
					margin: "2rem 0 0 0",
					padding: "1rem 1rem 1rem 1rem",
					color: "white",
				}}>
					<div className="row">
						<a href="https://github.com/ddc-fullstack-cohort-30/lecture-notes" className="col-4 mb-0">API:Trefle </a>
						<p className="col-4 mb-0 text-center">Help My Garden Team</p>
						<p className="col-4 mb-0 text-right">Last Updated</p>
					</div>
				</footer>
		)
}