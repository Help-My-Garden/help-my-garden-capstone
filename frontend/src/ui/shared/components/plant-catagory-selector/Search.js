import React from "react";
import Button from "react-bootstrap/cjs/Button";

export function SearchCom () {

	return (
		<>
			<section className="container-md" style={{
				backgroundColor: "lightgrey",
				margin: "2rem auto 2rem auto",
				borderRadius: "20px",
			}}>
				<div className="row p-2">
					<div className = "information col-md-2" >
						<label className = "form-label" >Plant Name
							<input className = "form-control col-md-12" type = "text" name = "plantName" id = "plantName"
										 placeholder = "Plant Name" />
						</label >
					</div >

					<div className="col-12 p-2">
						<Button>Search</Button>
					</div>
				</div>
			</section>
		</>
	)

}