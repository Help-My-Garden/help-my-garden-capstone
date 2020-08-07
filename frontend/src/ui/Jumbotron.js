import React from "react";
import Jumbotron from "react-bootstrap/cjs/Jumbotron";
import Button from "react-bootstrap/cjs/Button";

export const JumbotronCom = () => {

	return (
		<>
			<Jumbotron>
				<p>
					This is a simple hero unit, a simple jumbotron-style component for calling
					extra attention to featured content or information.
				</p>
				<p>
					<Button variant="primary">Learn more</Button>
				</p>
			</Jumbotron>
		</>
	)

}