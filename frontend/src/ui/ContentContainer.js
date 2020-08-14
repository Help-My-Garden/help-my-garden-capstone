import React from "react";
import {ContentCardsCom} from "./ContentCards";

export function ContentContainerCom () {

	return(
		<>
			<section className="container" style={{
				backgroundColor: "grey",
				margin: "2rem auto 1rem auto",
				padding: "1rem",
			}}>
				<ContentCardsCom/>
			</section>
		</>
	)
}